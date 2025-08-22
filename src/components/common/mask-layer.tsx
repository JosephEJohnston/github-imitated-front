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
    childrenPositionClass?: string;
}

const MaskLayer = (
    {
        showFlag,
        showControlFunction,
        children,
        childrenWidthRem,
        childrenPositionClass,
    } : MaskLayerProps
) => {

    const menuShowClass =
        showFlag === -1 ? $styles.childrenHide : $styles.childrenShow;

    const childrenPosition = childrenPositionClass ?
        childrenPositionClass : $styles.childrenPosition;

    const ChildrenBackDrop = styled.div`
        height: 100vh;
        width: calc(100vw - ${childrenWidthRem || 20}rem);
    ;`

    return (
        <>
            <div className={classNames(
                $styles.maskLayerContainer,
                menuShowClass
            )}
            >
                <div className={classNames(
                    $styles.maskLayer
                )}>
                    <div className={childrenPosition}>
                        { children }
                    </div>
                    <ChildrenBackDrop onClick={showControlFunction}></ChildrenBackDrop>
                </div>
            </div>
        </>
    );
};

export default MaskLayer;