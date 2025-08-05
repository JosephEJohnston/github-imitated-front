'use client'

import React, {useEffect, useRef, useState} from 'react';
import "./content-home.css"
import $style from "./content-home.module.css"
import classNames from "classnames";

const ContentHome = () => {
    const buttonListRef = useRef<HTMLDivElement>(null);
    const firstButtonRef = useRef<HTMLButtonElement>(null);

    const parentWidth = buttonListRef.current?.clientWidth || 0;
    console.log("buttonListRef: " + parentWidth);

    const sonWidth = firstButtonRef.current?.clientWidth || 0;
    console.log("firstButtonRef: " + sonWidth);
    useEffect(() => {

        if (parentWidth > sonWidth) {
            console.log("Bigger");
        } else {
            console.log("Smaller");
        }
    }, [parentWidth]);

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
                    <button ref={firstButtonRef} className={classNames($style.homeSectionButton)}>
                        <span className="home-section-span">
                            <i className="bi bi-eye home-section-icon-first"></i>
                        </span>
                        <span>Create a profile README for me</span>
                    </button>
                    <button className={classNames($style.homeSectionButton)}>
                        <span className="home-section-span">
                            <i className="bi bi-chevron-bar-right home-section-icon-second"></i>
                        </span>
                        <span>Get code feedback</span>
                    </button>
                    <button className={classNames($style.homeSectionButton)}>
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