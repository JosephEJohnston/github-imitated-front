'use client'
import React from 'react';
import classNames from "classnames";
import $styles from './mask-layer.module.css';
import styled from "styled-components";

interface Props {
    showFlag: number;
    showControlFunction : () => void;
    children: React.ReactNode;
    childrenWidthRem?: number;
}

const MaskLayer = (
    {
        showFlag,
        showControlFunction,
        children,
        childrenWidthRem
    } : Props
) => {

    const menuShowClass =
        showFlag === -1 ? $styles.childrenHide : $styles.childrenShow;

    const ChildrenBackDrop = styled.div`
        height: 100vh;
        width: calc(100vw - ${childrenWidthRem || 20}rem);
    ;`

    return (
        <>
            <div className={classNames($styles.maskLayerContainer, menuShowClass)}>
                <div className={$styles.maskLayer}>
                    { children }
                    <ChildrenBackDrop onClick={showControlFunction}></ChildrenBackDrop>
                </div>
            </div>
        </>
    );
};

export default MaskLayer;