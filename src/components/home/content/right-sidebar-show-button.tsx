'use client'
import React, {useState} from 'react';
import $style from './right-sidebar-show-button.module.css'
import RightSidebar from "@/components/home/right-sidebar";
import MaskLayer from "@/components/common/mask-layer";

const RightSidebarShowButton = () => {

    const [showSideBar, setShowSideBar] = useState(-1);
    const updateFlag = () => setShowSideBar(-showSideBar);

    return (
        <>
            <div className={$style.container}>
                <button
                    className={$style.feedRightSidebarButton}
                    onClick={() => setShowSideBar(-showSideBar)}
                >
                    <i className="bi bi-layout-text-sidebar"></i>
                </button>
            </div>
            <MaskLayer
                showFlag={showSideBar}
                showControlFunction={updateFlag}
                childrenPositionClass={$style.rightSideBarPosition}
                childrenWidthRem={20}
            >
                <div className={$style.rightSideBarContainer}>
                    <div className={$style.titleContainer}>
                        <div className={$style.exploreTitle}>Explore</div>
                        <div onClick={() => updateFlag()} className={$style.closeButton}>
                            <i className="bi bi-x"></i>
                        </div>
                    </div>
                    <RightSidebar />
                </div>
            </MaskLayer>
        </>
    );
};

export default RightSidebarShowButton;