'use client'
import React from 'react';
import classNames from "classnames";
import $styles from './mask-layer.module.css';

interface Props {
    showFlag: number;
    showControlFunction : () => void;
    children: React.ReactNode;
}

const MaskLayer = (
    {
        showFlag,
        showControlFunction,
        children
    } : Props
) => {

    const menuShowClass =
        showFlag === -1 ? $styles.childrenHide : $styles.childrenShow;

    return (
        <>
            <div className={classNames($styles.maskLayerContainer, menuShowClass)}>
                <div className={$styles.maskLayer}>
                    { children }
                    <div onClick={showControlFunction} className={$styles.childrenBackDrop}></div>
                </div>
            </div>
        </>
    );
};

export default MaskLayer;