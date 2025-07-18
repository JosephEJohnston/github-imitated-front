import React from 'react';
import classNames from "classnames";
import $styles from "@/components/home/header/home-header-left-menu.module.css";

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
                        <div>
                            <span>icon</span>
                            <button>x</button>
                        </div>
                        <div>
                            <div>
                                <span>icon</span>
                                <span>Home</span>
                            </div>
                            <div>
                                <span>icon</span>
                                <span>Issues</span>
                            </div>
                            <div>
                                <span>icon</span>
                                <span>Pull requests</span>
                            </div>
                            <div>
                                <span>icon</span>
                                <span>Projects</span>
                            </div>
                            <div>
                                <span>icon</span>
                                <span>Discussions</span>
                            </div>
                            <div>
                                <span>icon</span>
                                <span>Codespaces</span>
                            </div>
                            <div>
                                <span>icon</span>
                                <span>Copilot</span>
                            </div>

                            <hr/>
                            <div>
                                <span>icon</span>
                                <span>Explore</span>
                            </div>
                            <div>
                                <span>icon</span>
                                <span>Marketplace</span>
                            </div>

                            <hr/>

                        </div>
                    </div>
                    <div onClick={showControlFunction} className={$styles.menuBackDrop}></div>
                </div>
            </div>
        </>
    );
};

export default HomeHeaderLeftMenu;