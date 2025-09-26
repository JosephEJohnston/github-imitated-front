import "./header.css"
import "@/components/global-media.css"
import $style from './header.module.css'
import HomeHeaderLeftMenuButton from "@/components/home/header/home-header-left-menu-button";
import TypeToSearch from "@/components/home/header/type-to-search";
import classNames from "classnames";
import CopilotButton from "@/components/home/header/copilot-button";
import CreateNewButton from "@/components/home/header/create-new-button";

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
                            <CopilotButton />
                            <div className="head-nav-split">
                                <div>|</div>
                            </div>
                            <CreateNewButton />
                            <div className="head-nav-common-button-div head-item-border">
                                <button className={classNames(
                                    $style.withHoverText,
                                    $style.issueButton
                                    )}
                                    data-tooltip={"You issues"}
                                >
                                    <i className="bi bi-record-circle bi-icon-middle"></i>
                                </button>
                            </div>
                            <div className="head-nav-common-button-div head-item-border">
                                <button className={classNames(
                                    $style.withHoverText,
                                    )}
                                    data-tooltip={"Your pull requests"}
                                >
                                    <i className="bi bi-bezier2 bi-icon-middle"></i>
                                </button>
                            </div>
                        </div>
                        <div className="head-nav-common-button-div head-item-border">
                            <button className={classNames(
                                $style.withHoverText,
                                $style.notificationButton
                                )}
                                data-tooltip={"You have no unread notifications"}
                            >
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
