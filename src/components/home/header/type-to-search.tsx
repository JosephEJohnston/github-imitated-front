'use client'
import "@/components/global-media.css";
import React, {useState} from 'react';
import $style from '@/components/home/header/type-to-search.module.css'
import classNames from "classnames";
import TypeToSearchBoard from "@/components/home/header/type-to-search-board";

const TypeToSearch = () => {
    const [showBoard, setShowBoard] = useState(false);

    return (
        <>
            <div id="type-to-search-div" className={classNames('head-item-border', 'block-more-than-big')}>
                <button className={$style.typeToSearchButton} onClick={() => setShowBoard(true)}>
                    <span>
                        <i className="bi bi-search"></i>
                    </span>
                    <span className={$style.typeToSearchButtonText}>
                        Type
                        <span className={$style.slash}>/</span>
                        to search
                    </span>
                    <span className={$style.typeToSearchButtonBlank}></span>
                </button>
            </div>
            <div className={classNames('head-item-border', 'block-less-than-big')}>
                <button className={$style.typeToSearchButton} onClick={() => setShowBoard(true)}>
                    <span>
                        <i className="bi bi-search"></i>
                    </span>
                </button>
            </div>
            <TypeToSearchBoard showBoard={showBoard} setShowBoard={setShowBoard} />
        </>
    );
};

export default TypeToSearch;
