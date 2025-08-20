import React from 'react';
import LeftMenu from "@/components/home/header/left-menu";
import MaskLayer from "@/components/common/mask-layer";

const HomeHeaderLeftMenu = (
    { showFlag, showControlFunction } : { showFlag : number , showControlFunction : () => void }
) => {

    return (
        <>
            <MaskLayer
                showFlag={showFlag}
                showControlFunction={showControlFunction}
                childrenWidthRem={20}
            >
                <LeftMenu
                    showFlag={showFlag}
                    showControlFunction={showControlFunction}
                />
            </MaskLayer>
        </>
    );
};

export default HomeHeaderLeftMenu;