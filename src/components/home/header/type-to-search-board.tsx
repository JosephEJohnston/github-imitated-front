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
                    <div className={$style.topSearchDiv}>
                        <span><i className="bi bi-search"></i></span>
                        <input type="text"/>
                    </div>
                    <div className={$style.repositoryContainer}>
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
                                    <span>vercel</span>
                                </div>
                                <div>Jump to</div>
                            </div>
                            <div className={$style.elementRow}>
                                <div>
                                    <span><i className="bi bi-journal-code"></i></span>
                                    <span>Kiranism</span>
                                </div>
                                <div>Jump to</div>
                            </div>
                            <div className={$style.elementRow}>
                                <div>
                                    <span><i className="bi bi-journal-code"></i></span>
                                    <span>webpack</span>
                                </div>
                                <div>Jump to</div>
                            </div>
                            <div className={$style.elementRow}>
                                <div>
                                    <span><i className="bi bi-journal-code"></i></span>
                                    <span>ruanyf</span>
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
                                    <span>JosephEJohnston/github-imitated-front</span>
                                </div>
                                <div>Jump to</div>
                            </div>
                            <div className={$style.elementRow}>
                                <div>
                                    <span><i className="bi bi-journal-code"></i></span>
                                    <span>vercel/next.js</span>
                                </div>
                                <div>Jump to</div>
                            </div>
                            <div className={$style.elementRow}>
                                <div>
                                    <span><i className="bi bi-journal-code"></i></span>
                                    <span>Kiranism/next-shadcn-dashboard-starter</span>
                                </div>
                                <div>Jump to</div>
                            </div>
                            <div className={$style.elementRow}>
                                <div>
                                    <span><i className="bi bi-journal-code"></i></span>
                                    <span>JosephEJohnston/nextjs-learn</span>
                                </div>
                                <div>Jump to</div>
                            </div>
                            <div className={$style.elementRow}>
                                <div>
                                    <span><i className="bi bi-journal-code"></i></span>
                                    <span>webpack/webpack</span>
                                </div>
                                <div>Jump to</div>
                            </div>
                        </div>
                        <hr/>
                        <div>
                            <div>Copilot</div>
                            <div className={$style.elementRow}>
                                <div>
                                    <span><i className="bi bi-robot"></i></span>
                                    <span>Chat with Copilot</span>
                                </div>
                                <div>Start a new Copilot thread</div>
                            </div>
                        </div>
                    </div>
                    <div className={$style.boardBottomRow}>
                        <div>Search syntax tips</div>
                        <div>Give feedback</div>
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