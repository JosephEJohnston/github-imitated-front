
export default function LeftSidebar() {
    return (
        <>
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
        </>
    )
}
