import "./left-sidebar.css"
import UserRepository from "@/components/home/user-repository";

export default function LeftSidebar() {
    return (
        <>
            <div id="left-sidebar">
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
                <UserRepository />
            </div>
        </>
    )
}
