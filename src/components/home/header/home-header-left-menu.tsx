import React from 'react';
import $styles from './home-header-left-menu.module.css'

const HomeHeaderLeftMenu = () => {

    return (
        <>
            <div className={$styles.menu}>111</div>
            <div className="head-nav-common-button-div head-item-border">
                <button>
                    <i className="bi bi-list"></i>
                </button>
            </div>
        </>
    );
};

export default HomeHeaderLeftMenu;