'use client'

import $styles from './home-header-left-menu.module.css'
import React, {useState} from 'react';
import classNames from "classnames";

const HomeHeaderLeftMenu = () => {
    const [flag, setFlag] = useState(-1)

    const menuShowClass =
        flag === -1 ? $styles.menuHide : ``;

    return (
        <>
            <div className={classNames($styles.menu, menuShowClass)}>111</div>
            <div className="head-nav-common-button-div head-item-border">
                <button onClick={() => setFlag(-flag)}>
                    <i className="bi bi-list"></i>
                </button>
            </div>
        </>
    );
};

export default HomeHeaderLeftMenu;