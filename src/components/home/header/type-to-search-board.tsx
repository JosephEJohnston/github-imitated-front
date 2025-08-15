'use client'
import $style from '@/components/home/header/type-to-search-board.module.css'
import React from 'react';

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

        </>
    );
};

export default TypeToSearchBoard;