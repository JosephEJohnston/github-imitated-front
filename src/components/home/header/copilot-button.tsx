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
                        <div className={$style.copilotMenuTitle}>
                            New conversation in
                        </div>
                        <div className={$style.copilotMenuUpperRow}>
                            <span className={classNames($style.copilotMenuRowSpan, $style.iconSpan)}>
                                <i className={classNames($style.menuIcon, 'bi', 'bi-chat-left')}></i>
                            </span>
                            <span className={$style.copilotMenuRowSpan}>Assistive</span>
                        </div>
                        <div className={$style.copilotMenuUpperRow}>
                            <span className={classNames($style.copilotMenuRowSpan, $style.iconSpan)}>
                                <i className={classNames($style.menuIcon, 'bi', 'bi-folder-plus')}></i>
                            </span>
                            <span className={$style.copilotMenuRowSpan}>Spaces</span>
                        </div>
                        <hr className={$style.menuHr}/>
                        <div className={$style.copilotMenuBelowRow}>
                            <div className={$style.copilotMenuBelowRowDiv}>
                                <span className={classNames($style.copilotMenuRowSpan, $style.iconSpan)}>
                                    <i className={classNames($style.menuIcon, 'bi', 'bi-download')}></i>
                                </span>
                                <span className={$style.copilotMenuRowSpan}>Download for</span>
                            </div>
                            <div className={$style.copilotMenuBelowRowDiv}>
                                <span className={classNames($style.copilotMenuRowSpan)}>
                                    <i className={classNames($style.menuIcon, 'bi', 'bi-chevron-right')}></i>
                                </span>
                            </div>
                        </div>
                        <div className={$style.copilotMenuBelowRow}>
                            <div className={$style.copilotMenuBelowRowDiv}>
                                <span className={classNames($style.copilotMenuRowSpan, $style.iconSpan)}>
                                    <i className={classNames($style.menuIcon, 'bi', 'bi-robot')}></i>
                                </span>
                                <span className={$style.copilotMenuRowSpan}>Your Copilot</span>
                            </div>
                            <div className={$style.copilotMenuBelowRowDiv}>
                                <span className={classNames($style.copilotMenuRowSpan, $style.spanFree)}>free</span>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default CopilotButton;