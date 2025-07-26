import React from 'react';
import $style from '@/components/home/header/type-to-search.module.css'

const TypeToSearch = () => {
    return (
        <>
            <div id="type-to-search-div" className="head-item-border">
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
