import "../../../app/globals.css";
import React from 'react';
import $style from '@/components/home/header/type-to-search.module.css'
import classNames from "classnames";

const TypeToSearch = () => {
    return (
        <>
            <div id="type-to-search-div" className={classNames('head-item-border', 'block-bigger-middle')}>
                <button className={$style.typeToSearchButton}>
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
        </>
    );
};

export default TypeToSearch;
