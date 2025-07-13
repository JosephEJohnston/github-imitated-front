import React from 'react';

const ContentFeed = () => {
    return (
        <>
            <div id="feed-section">
                <div id="feed-section-title">
                    <div id="feed-title">Feed</div>
                    <div id="feed-section-filter-button-div">
                        <button id="feed-filter-button">
                            <i className="bi bi-filter"></i>
                            <span>Filter</span>
                        </button>
                    </div>
                </div>

                <div className="feed-section-content">
                    <header className="feed-section-content-header">
                        <div className="feed-section-content-header-left">
                            <div className="treading-icon"><i className="bi bi-graph-up"></i></div>
                            <div className="treading-title">Treading repositories</div>
                            <div>·</div>
                            <a className="treading-see-more" href="https://www.baidu.com">See more</a>
                        </div>
                        <div className="feed-section-content-header-right">
                            <button className="dot-more"><i className="bi bi-three-dots"></i></button>
                        </div>
                    </header>
                    <span className="hidden-span"></span>
                    <section className=" trending-section">
                        <div className="flex-space-between">
                            <div className="display-flex feed-title">
                                <button className="feed-user-icon"><i className="bi bi-windows"></i></button>
                                <div className="feed-user-name">Olow304/memvid</div>
                            </div>

                            <div className="feed-right-button-list">
                                <button className="feed-right-button-star">
                                    <span><i className="bi bi-star"></i></span>
                                    <span className="star-text">Star</span>
                                </button>
                                <button className="feed-right-button-down">
                                    <span><i className="bi bi-caret-down-fill down-icon"></i></span>
                                </button>
                            </div>
                        </div>
                        <div>
                            <p className="feed-desc">
                                Video-based AI memory library. Store millions of text chunks in MP4 files with
                                lightning-fast semantic search. No databse needed.
                            </p>
                        </div>
                        <div className="display-flex feed-bottom-button-list">
                            <div className="feed-language">
                                <span><i className="bi bi-record-fill"></i></span>
                                <span>Python</span>
                            </div>
                            <button className="feed-language-star">
                                <span><i className="bi bi-star"></i></span>
                                <span className="star-count">6.1k</span>
                            </button>
                        </div>
                    </section>
                    <hr className="trending-line"/>
                    <section className=" trending-section">
                        <div className="flex-space-between trending-section">
                            <div className="display-flex feed-title">
                                <button className="feed-user-icon"><i className="bi bi-windows"></i></button>
                                <div className="feed-user-name">tensorzero/tensorzero</div>
                            </div>

                            <div className="feed-right-button-list">
                                <button className="feed-right-button-star">
                                    <span><i className="bi bi-star"></i></span>
                                    <span className="star-text">Star</span>
                                </button>
                                <button className="feed-right-button-down">
                                    <span><i className="bi bi-caret-down-fill down-icon"></i></span>
                                </button>
                            </div>
                        </div>
                        <div>
                            <p className="feed-desc">
                                TensorZero creates a feedback loop for optimizing LLM applications -- turning production
                                data into smarter, faster, and cheaper models.
                            </p>
                        </div>
                        <div className="display-flex feed-bottom-button-list">
                            <div className="feed-language">
                                <span><i className="bi bi-record-fill"></i></span>
                                <span>Rust</span>
                            </div>
                            <button className="feed-language-star">
                                <span><i className="bi bi-star"></i></span>
                                <span className="star-count">4.9k</span>
                            </button>
                        </div>
                    </section>
                </div>
                <div id="feed-recommend-section" className="feed-section-content">
                    <header className="feed-section-content-header">
                        <div className="feed-section-content-header-left">
                            <div className="treading-icon"><i className="bi bi-star"></i></div>
                            <div className="treading-title">Recommended for you</div>
                        </div>
                        <div className="feed-section-content-header-right">
                            <button className="dot-more"><i className="bi bi-three-dots"></i></button>
                        </div>
                    </header>
                    <section className="trending-section">
                        <div className="flex-space-between">
                            <div className="display-flex feed-title">
                                <button className="feed-user-icon"><i className="bi bi-truck-front"></i></button>
                                <div className="feed-user-name">TeamStuQ/skill-map</div>
                            </div>
                            <div className="feed-right-button-list">
                                <button className="feed-right-button-star">
                                    <span><i className="bi bi-star"></i></span>
                                    <span className="star-text">Star</span>
                                </button>
                                <button className="feed-right-button-down">
                                    <span><i className="bi bi-caret-down-fill down-icon"></i></span>
                                </button>
                            </div>
                        </div>
                        <div>
                            <p className="feed-desc">程序员技能图谱</p>
                        </div>
                        <div className="display-flex feed-bottom-button-list">
                            <div className="feed-language">
                                <span><i className="bi bi-record-fill"></i></span>
                                <span>HTML</span>
                            </div>
                            <button className="feed-language-star">
                                <span><i className="bi bi-star"></i></span>
                                <span className="star-count">20.1k</span>
                            </button>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
};

export default ContentFeed;