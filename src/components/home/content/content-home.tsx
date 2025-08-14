'use client'

import React, {useEffect, useRef, useState} from 'react';
import "./content-home.css"
import $style from "./content-home.module.css"
import classNames from "classnames";

const ContentHome = () => {
    const thirdWidth = 572;
    const secondWidth = 400;

    const [showThirdFlag, setShowThirdFlag] = useState(true);
    const showThirdClass = showThirdFlag ?
        $style.showSectionButton : $style.hideSectionButton;

    const [showSecondFlag, setShowSecondFlag] = useState(true);
    const showSecondClass = showSecondFlag ?
        $style.showSectionButton : $style.hideSectionButton;

    const buttonListRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const current = buttonListRef.current;

        const observer = new ResizeObserver(() => {
            const scrollWidth = current?.scrollWidth || 0;
            if (scrollWidth < thirdWidth) {
                setShowThirdFlag(false);
            } else {
                setShowThirdFlag(true);
            }

            if (scrollWidth < secondWidth) {
                setShowSecondFlag(false);
            } else {
                setShowSecondFlag(true);
            }
        });

        current && observer.observe(current);

        return () => {
            observer.disconnect();
        };
    }, [buttonListRef])

    return (
        <>
            <div id="home-section">
                <div id="home-title">Home</div>
                <div id="home-section-ask-copilot">
                    <input className="ask-copilot-input" type="text" value="Ask Copilot"/>
                    <button className="ask-copilot-button">
                        <i className="bi bi-cursor"></i>
                    </button>
                </div>
                <div id="home-section-button-list" ref={buttonListRef}>
                    <button className={classNames($style.homeSectionButton)}>
                        <span className="home-section-span">
                            <i className="bi bi-eye home-section-icon-first"></i>
                        </span>
                        <span>Create a profile README for me</span>
                    </button>
                    <button className={classNames($style.homeSectionButton, showSecondClass)}>
                        <span className="home-section-span">
                            <i className="bi bi-chevron-bar-right home-section-icon-second"></i>
                        </span>
                        <span>Get code feedback</span>
                    </button>
                    <button className={classNames($style.homeSectionButton, showThirdClass)}>
                        <span className="home-section-span">
                            <i className="bi bi-bezier2 home-section-icon-third"></i>
                        </span>
                        <span>My open pull requests</span>
                    </button>
                </div>
            </div>
        </>
    );
};

export default ContentHome;