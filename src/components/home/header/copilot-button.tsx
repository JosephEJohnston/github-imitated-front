'use client'
import React, {useState} from 'react';
import "./header.css"
import classNames from "classnames";
import $headerStyle from "@/components/home/header/header.module.css";
import $style from "@/components/home/header/copilot-button.module.css";

const CopilotButton = () => {

    const [showMenu, setShowMenu] = useState(false);

    return (
        <>
            <div className={classNames(
                     $style.combineButton,
                     'head-nav-common-button-div',
                     'head-item-border'
                 )}
            >
                <button className={classNames(
                            $style.combineButtonLeft,
                            $headerStyle.withHoverText
                        )}
                        data-tooltip={"Chat with Copilot"}
                >
                    <i className="bi bi-robot"></i>
                </button>
                <button className={classNames(
                            $style.combineButtonRight,
                            $headerStyle.withHoverText
                        )}
                        data-tooltip={"Open Copilot..."}
                        onClick={() => setShowMenu(!showMenu)}
                >
                    <i className="bi bi-chevron-down bi-icon-small"></i>
                </button>
                {showMenu && (
                    <div className={$style.copilotMenu}>
                        <div>
                            New conversation in
                        </div>
                        <div className={$style.copilotMenuUpperRow}>
                            <span><i className="bi bi-chat-left"></i></span>
                            <span>Assistive</span>
                        </div>
                        <div className={$style.copilotMenuUpperRow}>
                            <span><i className="bi bi-folder-plus"></i></span>
                            <span>Spaces</span>
                        </div>
                        <hr/>
                        <div className={$style.copilotMenuBelowRow}>
                            <div>
                                <span>icon</span>
                                <span>Download for</span>
                            </div>
                            <div>
                                <span>icon</span>
                            </div>
                        </div>
                        <div className={$style.copilotMenuBelowRow}>
                            <div>
                                <span><i className="bi bi-robot"></i></span>
                                <span>Your Copilot</span>
                            </div>
                            <div>
                                <span>free</span>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default CopilotButton;