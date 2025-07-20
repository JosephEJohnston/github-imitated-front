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
                        <div className={classNames($styles.flexSpaceBetween)}>
                            <div className={$styles.topIcon}><i className="bi bi-github"></i></div>
                            <div className={$styles.topClose}><i className="bi bi-x"></i></div>
                        </div>
                        <div>
                            <div>
                                <span><i className="bi bi-house"></i></span>
                                <span>Home</span>
                            </div>
                            <div>
                                <span><i className="bi bi-cup-hot"></i></span>
                                <span>Issues</span>
                            </div>
                            <div>
                                <span><i className="bi bi-bezier2 bi-icon-middle"></i></span>
                                <span>Pull requests</span>
                            </div>
                            <div>
                                <span><i className="bi bi-menu-button-wide"></i></span>
                                <span>Projects</span>
                            </div>
                            <div>
                                <span><i className="bi bi-chat-right-text"></i></span>
                                <span>Discussions</span>
                            </div>
                            <div>
                                <span><i className="bi bi-code-square"></i></span>
                                <span>Codespaces</span>
                            </div>
                            <div>
                                <span><i className="bi bi-robot"></i></span>
                                <span>Copilot</span>
                            </div>

                            <hr/>
                            <div>
                                <span><i className="bi bi-exclude"></i></span>
                                <span>Explore</span>
                            </div>
                            <div>
                                <span><i className="bi bi-gift"></i></span>
                                <span>Marketplace</span>
                            </div>

                            <hr/>
                            <div className={classNames($styles.flexSpaceBetween)}>
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