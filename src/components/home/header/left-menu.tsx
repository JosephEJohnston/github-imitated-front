'use client'
import React from 'react';
import $styles from "./left-menu.module.css";
import classNames from "classnames";
import UserRepository from "@/components/home/user-repository";

interface Props {
    showFlag: number;
    showControlFunction: () => void;
}

const LeftMenu = (
    {
        showFlag,
        showControlFunction
    } : Props
) => {

    const menuWidthClass =
        showFlag === -1 ? $styles.menuWidthHide : $styles.menuWidthShow;

    return (
        <>
            <div className={classNames($styles.menu, menuWidthClass)}>
                <div className={classNames($styles.flexSpaceBetween, $styles.topDiv)}>
                    <div className={$styles.topIcon}><i className="bi bi-github"></i></div>
                    <div onClick={showControlFunction} className={$styles.topClose}><i className="bi bi-x"></i></div>
                </div>
                <div className={$styles.linkItemContainer}>
                    <div className={$styles.linkItem}>
                        <span><i className="bi bi-house"></i></span>
                        <span className={$styles.linkItemName}>Home</span>
                    </div>
                    <div className={$styles.linkItem}>
                        <span><i className="bi bi-cup-hot"></i></span>
                        <span className={$styles.linkItemName}>Issues</span>
                    </div>
                    <div className={$styles.linkItem}>
                        <span><i className="bi bi-bezier2 bi-icon-middle"></i></span>
                        <span className={$styles.linkItemName}>Pull requests</span>
                    </div>
                    <div className={$styles.linkItem}>
                        <span><i className="bi bi-menu-button-wide"></i></span>
                        <span className={$styles.linkItemName}>Projects</span>
                    </div>
                    <div className={$styles.linkItem}>
                        <span><i className="bi bi-chat-right-text"></i></span>
                        <span className={$styles.linkItemName}>Discussions</span>
                    </div>
                    <div className={$styles.linkItem}>
                        <span><i className="bi bi-code-square"></i></span>
                        <span className={$styles.linkItemName}>Codespaces</span>
                    </div>
                    <div className={$styles.linkItem}>
                        <span><i className="bi bi-robot"></i></span>
                        <span className={$styles.linkItemName}>Copilot</span>
                    </div>
                    <hr className={$styles.linkHr}/>
                    <div className={$styles.linkItem}>
                        <span><i className="bi bi-exclude"></i></span>
                        <span className={$styles.linkItemName}>Explore</span>
                    </div>
                    <div className={$styles.linkItem}>
                        <span><i className="bi bi-gift"></i></span>
                        <span className={$styles.linkItemName}>Marketplace</span>
                    </div>

                    <hr className={$styles.linkHr}/>
                    <div className={classNames($styles.flexSpaceBetween, $styles.repositoriesSearchContainer)}>
                        <div>Repositories</div>
                        <div><i className="bi bi-search"></i></div>
                    </div>
                    <UserRepository />
                    <div className={classNames($styles.menuBottomFont, $styles.menuBottomDeclare)}>
                        © 2025 GitHub, Inc.
                    </div>
                    <div className={classNames($styles.menuBottomFont, $styles.menuBottomLinkDiv)}>
                        <div className={$styles.menuBottomLinkDiv}>
                            <a className={$styles.menuBottomLink} href="#">About</a>
                            <a className={$styles.menuBottomLink} href="#">Blog</a>
                            <a className={$styles.menuBottomLink} href="#">Terms</a>
                            <a className={$styles.menuBottomLink} href="#">Privacy</a>
                            <a className={$styles.menuBottomLink} href="#">Security</a>
                            <a className={$styles.menuBottomLink} href="#">Status</a>
                        </div>
                        <div className={$styles.menuBottomLinkDiv}>
                            <a className={$styles.menuBottomLink} href="#">Do not share my personal information</a>
                        </div>
                        <div className={$styles.menuBottomLinkDiv}>
                            <a className={$styles.menuBottomLink} href="#">Manage Cookies</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LeftMenu;