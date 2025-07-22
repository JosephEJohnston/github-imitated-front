import React from 'react';
import classNames from "classnames";
import $styles from "@/components/home/header/home-header-left-menu.module.css";
import UserRepository from "@/components/home/user-repository";

const HomeHeaderLeftMenu = (
    { showFlag, showControlFunction } : { showFlag : number , showControlFunction : () => void }
) => {

    const menuShowClass =
        showFlag === -1 ? $styles.menuHide : $styles.menuShow;

    return (
        <>
            <div className={classNames($styles.menuShowContainer, menuShowClass)}>
                <div className={$styles.menuContainer}>
                    <div className={$styles.menu}>
                        <div className={classNames($styles.flexSpaceBetween, $styles.topDiv)}>
                            <div className={$styles.topIcon}><i className="bi bi-github"></i></div>
                            <div className={$styles.topClose}><i className="bi bi-x"></i></div>
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
                            <div>
                                © 2025 GitHub, Inc.
                            </div>
                            <div>
                                <a href="#">About</a>
                                <a href="#">Blog</a>
                                <a href="#">Terms</a>
                                <a href="#">Privacy</a>
                                <a href="#">Security</a>
                                <a href="#">Status</a>
                                <a href="#">Do not share my personal information</a>
                                <a href="#">Manage Cookies</a>
                            </div>
                        </div>
                    </div>
                    <div onClick={showControlFunction} className={$styles.menuBackDrop}></div>
                </div>
            </div>
        </>
    );
};

export default HomeHeaderLeftMenu;