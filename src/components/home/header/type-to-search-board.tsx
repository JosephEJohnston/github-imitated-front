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
                        <span className={$style.topSearchIcon}><i className="bi bi-search"></i></span>
                        <input className={$style.topSearchInput} type="text"/>
                    </div>
                    <div className={$style.repositoryContainer}>
                        <div className={$style.section}>
                            <div className={$style.sectionTitle}>Owners</div>
                            <div className={$style.elementRow}>
                                <div>
                                    <span><i className="bi bi-journal-code"></i></span>
                                    <span className={$style.elementRowTextLeft}>JosephEJohnston</span>
                                </div>
                                <div className={$style.elementRowTextRight}>Jump to</div>
                            </div>
                            <div className={$style.elementRow}>
                                <div>
                                    <span><i className="bi bi-journal-code"></i></span>
                                    <span className={$style.elementRowTextLeft}>vercel</span>
                                </div>
                                <div className={$style.elementRowTextRight}>Jump to</div>
                            </div>
                            <div className={$style.elementRow}>
                                <div>
                                    <span><i className="bi bi-journal-code"></i></span>
                                    <span className={$style.elementRowTextLeft}>Kiranism</span>
                                </div>
                                <div className={$style.elementRowTextRight}>Jump to</div>
                            </div>
                            <div className={$style.elementRow}>
                                <div>
                                    <span><i className="bi bi-journal-code"></i></span>
                                    <span className={$style.elementRowTextLeft}>webpack</span>
                                </div>
                                <div className={$style.elementRowTextRight}>Jump to</div>
                            </div>
                            <div className={$style.elementRow}>
                                <div>
                                    <span><i className="bi bi-journal-code"></i></span>
                                    <span className={$style.elementRowTextLeft}>ruanyf</span>
                                </div>
                                <div className={$style.elementRowTextRight}>Jump to</div>
                            </div>
                        </div>
                        <hr className={$style.line}/>
                        <div className={$style.section}>
                            <div className={$style.sectionTitle}>Repositories</div>
                            <div className={$style.elementRow}>
                                <div>
                                    <span><i className="bi bi-journal-code"></i></span>
                                    <span className={$style.elementRowTextLeft}>JosephEJohnston/github-imitated-front</span>
                                </div>
                                <div className={$style.elementRowTextRight}>Jump to</div>
                            </div>
                            <div className={$style.elementRow}>
                                <div>
                                    <span><i className="bi bi-journal-code"></i></span>
                                    <span className={$style.elementRowTextLeft}>vercel/next.js</span>
                                </div>
                                <div className={$style.elementRowTextRight}>Jump to</div>
                            </div>
                            <div className={$style.elementRow}>
                                <div>
                                    <span><i className="bi bi-journal-code"></i></span>
                                    <span className={$style.elementRowTextLeft}>Kiranism/next-shadcn-dashboard-starter</span>
                                </div>
                                <div className={$style.elementRowTextRight}>Jump to</div>
                            </div>
                            <div className={$style.elementRow}>
                                <div>
                                    <span><i className="bi bi-journal-code"></i></span>
                                    <span className={$style.elementRowTextLeft}>JosephEJohnston/nextjs-learn</span>
                                </div>
                                <div className={$style.elementRowTextRight}>Jump to</div>
                            </div>
                            <div className={$style.elementRow}>
                                <div>
                                    <span><i className="bi bi-journal-code"></i></span>
                                    <span className={$style.elementRowTextLeft}>webpack/webpack</span>
                                </div>
                                <div className={$style.elementRowTextRight}>Jump to</div>
                            </div>
                        </div>
                        <hr className={$style.line}/>
                        <div className={$style.section}>
                            <div className={$style.sectionTitle}>Copilot</div>
                            <div className={$style.elementRow}>
                                <div>
                                    <span><i className="bi bi-robot"></i></span>
                                    <span className={$style.elementRowTextLeft}>Chat with Copilot</span>
                                </div>
                                <div className={$style.elementRowTextRight}>Start a new Copilot thread</div>
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