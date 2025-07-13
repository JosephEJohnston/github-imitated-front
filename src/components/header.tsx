
export default function Header() {
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
        </>
    )
}
