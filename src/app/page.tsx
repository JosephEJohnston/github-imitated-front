

export default function Home() {
  return (
      <>
        <header>
          <nav id="header-nav">
            <div id="header-nav-left">
              <div className="head-nav-common-button-div head-item-border">
                <button>
                  <i className="bi bi-list"></i>
                </button>
              </div>
              <div className="head-nav-common-button-div head-item-border">
                <button>
                  <i className="bi bi-github"></i>
                </button>
              </div>
              <div className="head-nav-left-text">
                <button>
                  Dashboard
                </button>
              </div>
            </div>
            <div id="header-nav-middle">

            </div>
            <div id="header-nav-right">
              <div id="type-to-search-div" className="head-item-border">
                <button id="type-to-search-button">
                    <span className="type-to-search-button-icon">
                        <i className="bi bi-search"></i>
                    </span>
                  <span className="type-to-search-button-text">
                        Type
                        <span className="slash">/</span>
                         to search
                    </span>
                  <span className="type-to-search-button-blank"></span>
                </button>
              </div>
              <div id="combine-button" className="head-nav-common-button-div head-item-border">
                <button id="combine-button-left">
                  <i className="bi bi-robot"></i>
                </button>
                <button id="combine-button-right">
                  <i className="bi bi-chevron-down bi-icon-small"></i>
                </button>
              </div>
              <div className="head-nav-split">
                <div>|</div>
              </div>
              <div id="two-inner-button-div" className="head-nav-common-button-div head-item-border">
                <button id="two-inner-button">
                    <span className="button-inner-span">
                        <i className="bi bi-plus bi-icon-middle"></i>
                    </span>
                  <span className="button-inner-span">
                        <i className="bi bi-chevron-down bi-icon-small"></i>
                    </span>
                </button>
              </div>
              <div className="head-nav-common-button-div head-item-border">
                <button>
                  <i className="bi bi-record-circle bi-icon-middle"></i>
                </button>
              </div>
              <div className="head-nav-common-button-div head-item-border">
                <button>
                  <i className="bi bi-bezier2 bi-icon-middle"></i>
                </button>
              </div>
              <div className="head-nav-common-button-div head-item-border">
                <button>
                  <i className="bi bi-box-seam bi-icon-middle"></i>
                </button>
              </div>
              <div className="head-nav-common-button-div head-item-border">
                <button>
                  <i className="bi bi-person bi-icon-big"></i>
                </button>
              </div>

            </div>
          </nav>
        </header>
        <div className="content-display">
          <aside id="left-sidebar">
            <div id="left-sidebar-title" className="flex-space-between">
              <div className="left-sidebar-title-name">
                Top repositories
              </div>
              <div className="left-sidebar-title-button-div">
                <button className="left-sidebar-title-button">
                  <span><i className="bi bi-building-fill-add"></i></span>
                  <span className="new-button">New</span>
                </button>
              </div>
            </div>
            <div>
              <label>
                <input className="find-rep-input" type="text" value="Find a repository..."/>
              </label>
            </div>
            <ul className="left-sidebar-ul">
              <li className="left-sidebar-li">
                <div>
                  <button className="left-user-icon-button">
                    <i className="bi bi-person bi-icon-big"></i>
                  </button>
                </div>
                <div>
                  <span className="left-user-project-name">JosephEJohnston/learn-ts-fullstack-nextapp</span>
                </div>
              </li>
              <li className="left-sidebar-li">
                <div>
                  <button className="left-user-icon-button">
                    <i className="bi bi-person bi-icon-big"></i>
                  </button>
                </div>
                <div>
                  <span className="left-user-project-name">JosephEJohnston/bar-count</span>
                </div>
              </li>
              <li className="left-sidebar-li">
                <div>
                  <button className="left-user-icon-button">
                    <i className="bi bi-person bi-icon-big"></i>
                  </button>
                </div>
                <div>
                  <span className="left-user-project-name">JosephEJohnston/imitate-todoist</span>
                </div>
              </li>
              <li>
                <div>
                  <button className="left-show-more">Show more</button>
                </div>
              </li>
            </ul>
          </aside>
          <div id="content">
            <main>
              <div id="home-section">
                <div id="home-title">Home</div>
                <div id="home-section-ask-copilot">
                  <input className="ask-copilot-input" type="text" value="Ask Copilot"/>
                  <button className="ask-copilot-button">
                    <i className="bi bi-cursor"></i>
                  </button>
                </div>
                <div id="home-section-button-list">
                  <button>
                        <span className="home-section-span">
                            <i className="bi bi-eye home-section-icon-first"></i>
                        </span>
                    <span>Create a profile README for me</span>
                  </button>
                  <button>
                        <span className="home-section-span">
                            <i className="bi bi-chevron-bar-right home-section-icon-second"></i>
                        </span>
                    <span>Get code feedback</span>
                  </button>
                  <button>
                        <span className="home-section-span">
                            <i className="bi bi-bezier2 home-section-icon-third"></i>
                        </span>
                    <span>My open pull requests</span>
                  </button>
                </div>
              </div>

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
            </main>
            <footer id="content-footer" className="flex-space-between">
              <button className="bottom-github"><i className="bi bi-github"></i></button>
              <div><span>© 2025 GitHub, Inc.</span></div>
              <div><a className="bottom-a" href="">Terms</a></div>
              <div><a className="bottom-a" href="">Privacy</a></div>
              <div><a className="bottom-a" href="">Security</a></div>
              <div><a className="bottom-a" href="">Status</a></div>
              <div><a className="bottom-a" href="">Docs</a></div>
              <div><a className="bottom-a" href="">Contact</a></div>
              <div><a className="bottom-a" href="">Manage cookies</a></div>
              <div><a className="bottom-a" href="">Do not share my personal information</a></div>
            </footer>
          </div>
          <aside id="right-sidebar">
            <div id="lastest-changes-container">
              <div className="lastest-changes-title">Lastest changes</div>
              <ul className="change-ul">
                <li className="change-li">
                  <div className="change-li-circle-div"><i className="bi bi-circle-fill change-circle-icon"></i></div>
                  <div>
                    <div className="display-flex change-li-inner change-li-time">
                      <div>3 days ago</div>
                    </div>
                    <div className="change-text change-li-inner">
                      You can now run model evaluations with the Models CLI
                    </div>
                  </div>
                </li>
                <li className="change-li">
                  <div className="change-li-circle-div"><i className="bi bi-circle-fill change-circle-icon"></i></div>
                  <div>
                    <div className="display-flex change-li-inner change-li-time">
                      <div>4 days ago</div>
                    </div>
                    <div className="change-text change-li-inner">
                      Fluency and coherence evaluators added to GitHub Models
                    </div>
                  </div>
                </li>
                <li className="change-li">
                  <div className="change-li-circle-div"><i className="bi bi-circle-fill change-circle-icon"></i></div>
                  <div>
                    <div className="display-flex change-li-inner change-li-time">
                      <div>4 days ago</div>
                    </div>
                    <div className="change-text change-li-inner">
                      Control contrast for all GitHub themes
                    </div>
                  </div>
                </li>
                <li className="change-li">
                  <div className="change-li-circle-div"><i className="bi bi-circle-fill change-circle-icon"></i></div>
                  <div>
                    <div className="display-flex change-li-inner change-li-time">
                      <div>5 days ago</div>
                    </div>
                    <div className="change-text change-li-inner">
                      Enhanced metrics for CodeQL pull request alerts and Copilot autofixes
                    </div>
                  </div>
                </li>
                <li className="change-li last-li">
                  <div className="change-text change-li-inner changelog">
                    <span>View changelog</span>
                    <span><i className="bi bi-forward-fill"></i></span>
                  </div>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </>
  );
}
