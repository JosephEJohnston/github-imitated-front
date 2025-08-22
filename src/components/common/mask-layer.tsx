'use client'
import React from 'react';
import classNames from "classnames";
import $styles from './mask-layer.module.css';
import styled from "styled-components";

interface MaskLayerProps {
    showFlag: number;
    showControlFunction : () => void;
    children: React.ReactNode;
    childrenWidthRem?: number;
    positionClass?: string;
}

const MaskLayer = (
    {
        showFlag,
        showControlFunction,
        children,
        childrenWidthRem,
        positionClass,
    } : MaskLayerProps
) => {

    const menuShowClass =
        showFlag === -1 ? $styles.childrenHide : $styles.childrenShow;

    const layerPosition = positionClass ?
        positionClass : $styles.maskLayerPositionDefault;

    const ChildrenBackDrop = styled.div`
        height: 100vh;
        width: calc(100vw - ${childrenWidthRem || 20}rem);
    ;`

    return (
        <>
            <div className={classNames(
                $styles.maskLayerContainer,
                menuShowClass,
                layerPosition)}
            >
                <div className={$styles.maskLayer}>
                    { children }
                    <ChildrenBackDrop onClick={showControlFunction}></ChildrenBackDrop>
                </div>
            </div>
        </>
    );
};

export default MaskLayer;