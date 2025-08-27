'use client'
import $style from '@/components/home/header/type-to-search-board.module.css'
import React from 'react';
import classNames from "classnames";

interface Props {
    showBoard: boolean;
    setShowBoard: React.Dispatch<React.SetStateAction<boolean>>;
}

const TypeToSearchBoard = (
    {
        showBoard,
        setShowBoard
    }: Props
) => {

    const showControl = showBoard ? $style.showBoard : $style.hideBoard;

    return (
        <>
            <div className={classNames($style.maskLayerContainer, showControl)}
                 //
            >
                <div className={$style.searchBoardContainer}>
                    hello world
                </div>
                <div className={$style.backDrop}
                     onClick={() => setShowBoard(!showBoard)}
                >

                </div>
            </div>
        </>
    );
};

export default TypeToSearchBoard;