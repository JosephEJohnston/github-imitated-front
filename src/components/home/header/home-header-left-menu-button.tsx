'use client'

import React, {useState} from 'react';
import HomeHeaderLeftMenu from "@/components/home/header/home-header-left-menu";

const HomeHeaderLeftMenuButton = () => {
    const [flag, setFlag] = useState(-1)
    const updateFlag = () => setFlag(-flag);

    return (
        <>
            <HomeHeaderLeftMenu showFlag={flag} showControlFunction={updateFlag} />
            <div className="head-nav-common-button-div head-item-border">
                <button onClick={updateFlag}>
                    <i className="bi bi-list"></i>
                </button>
            </div>
        </>
    );
};

export default HomeHeaderLeftMenuButton;