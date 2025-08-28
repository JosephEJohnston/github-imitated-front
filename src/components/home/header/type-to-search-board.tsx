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
            <div className={classNames($style.maskLayerContainer, showControl)}>
                <div className={$style.searchBoardContainer}>
                    <div>
                        <span><i className="bi bi-search"></i></span>
                        <input type="text"/>
                    </div>
                    <div>
                        <div>Owners</div>
                        <div className={$style.elementRow}>
                            <div>
                                <span><i className="bi bi-journal-code"></i></span>
                                <span>JosephEJohnston</span>
                            </div>
                            <div>Jump to</div>
                        </div>
                        <div className={$style.elementRow}>
                            <div>
                                <span><i className="bi bi-journal-code"></i></span>
                                <span>JosephEJohnston</span>
                            </div>
                            <div>Jump to</div>
                        </div>
                        <div className={$style.elementRow}>
                            <div>
                                <span><i className="bi bi-journal-code"></i></span>
                                <span>JosephEJohnston</span>
                            </div>
                            <div>Jump to</div>
                        </div>
                        <div className={$style.elementRow}>
                            <div>
                                <span><i className="bi bi-journal-code"></i></span>
                                <span>JosephEJohnston</span>
                            </div>
                            <div>Jump to</div>
                        </div>
                        <div className={$style.elementRow}>
                            <div>
                                <span><i className="bi bi-journal-code"></i></span>
                                <span>JosephEJohnston</span>
                            </div>
                            <div>Jump to</div>
                        </div>
                    </div>
                    <hr/>
                    <div>
                        <div>Repositories</div>
                        <div className={$style.elementRow}>
                            <div>
                                <span><i className="bi bi-journal-code"></i></span>
                                <span>JosephEJohnston</span>
                            </div>
                            <div>Jump to</div>
                        </div>
                        <div className={$style.elementRow}>
                            <div>
                                <span><i className="bi bi-journal-code"></i></span>
                                <span>JosephEJohnston</span>
                            </div>
                            <div>Jump to</div>
                        </div>
                        <div className={$style.elementRow}>
                            <div>
                                <span><i className="bi bi-journal-code"></i></span>
                                <span>JosephEJohnston</span>
                            </div>
                            <div>Jump to</div>
                        </div>
                        <div className={$style.elementRow}>
                            <div>
                                <span><i className="bi bi-journal-code"></i></span>
                                <span>JosephEJohnston</span>
                            </div>
                            <div>Jump to</div>
                        </div>
                        <div className={$style.elementRow}>
                            <div>
                                <span><i className="bi bi-journal-code"></i></span>
                                <span>JosephEJohnston</span>
                            </div>
                            <div>Jump to</div>
                        </div>
                    </div>
                    <hr/>
                    <div>
                        <div>Copilot</div>
                        <div className={$style.elementRow}>
                            <div>
                                <span><i className="bi bi-journal-code"></i></span>
                                <span>JosephEJohnston</span>
                            </div>
                            <div>Jump to</div>
                        </div>
                    </div>
                </div>
                <div className={$style.backDrop}
                     onClick={() => setShowBoard(!showBoard)}>
                </div>
            </div>
        </>
    );
};

export default TypeToSearchBoard;