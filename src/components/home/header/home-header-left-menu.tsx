'use client'
import React from 'react';
import classNames from "classnames";
import $styles from "@/components/home/header/home-header-left-menu.module.css";
import LeftMenu from "@/components/home/header/left-menu";

const HomeHeaderLeftMenu = (
    { showFlag, showControlFunction } : { showFlag : number , showControlFunction : () => void }
) => {

    const menuShowClass =
        showFlag === -1 ? $styles.menuHide : $styles.menuShow;

    return (
        <>
            <div className={classNames($styles.menuShowContainer, menuShowClass)}>
                <div className={$styles.menuContainer}>
                    <LeftMenu showFlag={showFlag} showControlFunction={showControlFunction} />
                    <div onClick={showControlFunction} className={$styles.childrenBackDrop}></div>
                </div>
            </div>
        </>
    );
};

export default HomeHeaderLeftMenu;