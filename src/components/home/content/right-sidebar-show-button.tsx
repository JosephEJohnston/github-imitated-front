'use client'
import React, {useState} from 'react';
import $style from './right-sidebar-show-button.module.css'
import RightSidebar from "@/components/home/right-sidebar";

const RightSidebarShowButton = () => {

    const [showSideBar, setShowSideBar] = useState(false)

    const showSideBarControl = showSideBar ? $style.rightSideBarShow :
        $style.rightSideBarHidden;

    return (
        <>
            <div className={$style.container}>
                <button
                    className={$style.feedRightSidebarButton}
                    onClick={() => setShowSideBar(true)}
                >
                    <i className="bi bi-layout-text-sidebar"></i>
                </button>
            </div>
            <div className={showSideBarControl}>
                <RightSidebar />
            </div>
        </>
    );
};

export default RightSidebarShowButton;