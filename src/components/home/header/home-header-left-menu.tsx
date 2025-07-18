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

                    </div>
                    <div onClick={showControlFunction} className={$styles.menuBackDrop}></div>
                </div>
            </div>
        </>
    );
};

export default HomeHeaderLeftMenu;