'use client'
import React, {RefObject, useRef, useState} from 'react';
import "./header.css"
import classNames from "classnames";
import $headerStyle from "@/components/home/header/header.module.css";
import $style from "@/components/home/header/copilot-button.module.css";
import useHideClickOutside from "@/components/util/useHideClickOutside";

const CopilotButton = () => {

    const [showMenu, setShowMenu] = useState(false);

    const menuRef: RefObject<HTMLDivElement | null> = useRef(null);
    const buttonRef: RefObject<HTMLButtonElement | null> = useRef(null);

    useHideClickOutside(
        menuRef,
        () => setShowMenu(false),
        buttonRef,
    );

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
                        ref={buttonRef}
                >
                    <i className="bi bi-chevron-down bi-icon-small"></i>
                </button>
                {showMenu && <CopilotButtonMenu ref={menuRef} />}
            </div>
        </>
    );
};

interface CopilotButtonMenuProps {
    ref: RefObject<HTMLDivElement | null>;
}

const CopilotButtonMenu = (
    props: CopilotButtonMenuProps
) => {

    const [showMenu, setShowMenu] = useState(false);

    const innerMenuRef: RefObject<HTMLDivElement | null> = useRef(null);

    useHideClickOutside(
        innerMenuRef,
        () => setShowMenu(false),
        props.ref,
    );

    return (
        <div className={$style.copilotMenu} ref={props.ref}>
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
            <div className={$style.copilotMenuBelowRow} onClick={() => setShowMenu(!showMenu)}>
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
                { showMenu && <DownloadForMenu parentRef={props.ref} ref={innerMenuRef}/> }
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
    )
}

interface DownloadForMenuProps {
    parentRef: RefObject<HTMLDivElement | null>;
    ref: RefObject<HTMLDivElement | null>;
}

const DownloadForMenu = (
    props: DownloadForMenuProps
) => {

    return (
        <>
            <div className={$style.downloadForMenu} ref={props.ref}>
                <div>
                    <div>
                        <span><i className="bi bi-fork-knife"></i></span>
                        <span>Visual Studio Code</span>
                    </div>
                    <div>
                        <span><i className="bi bi-fork-knife"></i></span>
                        <span>Visual Studio</span>
                    </div>
                    <div>
                        <span><i className="bi bi-fork-knife"></i></span>
                        <span>Xcode</span>
                    </div>
                    <div>
                        <span><i className="bi bi-fork-knife"></i></span>
                        <span>JetBrains</span>
                    </div>
                    <div>
                        <span><i className="bi bi-fork-knife"></i></span>
                        <span>Neovim</span>
                    </div>
                </div>
                <div>
                    <div></div>
                </div>
            </div>
        </>
    );
}


export default CopilotButton;