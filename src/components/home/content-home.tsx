'use client'

import React, {useEffect, useRef} from 'react';
import "./content-home.css"
import ResizeObserver from "resize-observer-polyfill";

const ContentHome = () => {
    const resizeRef = useRef<HTMLDivElement>(null);


    useEffect(() => {
        const current = resizeRef.current;

        const observer = new ResizeObserver(() => {
            const scrollWidth = current?.scrollWidth || 0;
            const clientWidth = current?.clientWidth || 0;
            if (scrollWidth > clientWidth) {
                console.log("Overflow")
            } else {
                console.log("Not Overflow")
            }
        });

        current && observer.observe(current);

        return () => {
            observer.disconnect();
        };
    }, [resizeRef])

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
                <div id="home-section-button-list" ref={resizeRef}>
                    <button className="home-section-button">
                        <span className="home-section-span">
                            <i className="bi bi-eye home-section-icon-first"></i>
                        </span>
                        <span>Create a profile README for me</span>
                    </button>
                    <button className="home-section-button">
                        <span className="home-section-span">
                            <i className="bi bi-chevron-bar-right home-section-icon-second"></i>
                        </span>
                        <span>Get code feedback</span>
                    </button>
                    <button className="home-section-button">
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