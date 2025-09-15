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
                        hello world
                    </div>
                )}
            </div>
        </>
    );
};

export default CopilotButton;