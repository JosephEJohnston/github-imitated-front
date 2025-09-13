import React from 'react';
import "./header.css"
import classNames from "classnames";
import $style from "@/components/home/header/header.module.css";

const CopilotButton = () => {
    return (
        <>
            <div id="combine-button" className="head-nav-common-button-div head-item-border">
                <button id="combine-button-left"
                        className={classNames($style.withHoverText)}
                        data-tooltip={"Chat with Copilot"}
                >
                    <i className="bi bi-robot"></i>
                </button>
                <button id="combine-button-right"
                        className={classNames($style.withHoverText)}
                        data-tooltip={"Open Copilot..."}
                >
                    <i className="bi bi-chevron-down bi-icon-small"></i>
                </button>
            </div>
        </>
    );
};

export default CopilotButton;