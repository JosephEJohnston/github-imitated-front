import "./header.css"
import "@/components/global-media.css"
import $style from './header.module.css'
import HomeHeaderLeftMenuButton from "@/components/home/header/home-header-left-menu-button";
import TypeToSearch from "@/components/home/header/type-to-search";
import classNames from "classnames";

export default function Header() {
    return (
        <>
            <header>
                <nav id="header-nav">
                    <div id="header-nav-left">
                        <HomeHeaderLeftMenuButton/>
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
                        <TypeToSearch />
                        <div className={classNames($style.headerMiddleButtonList, 'block-more-than-small')}>
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
