import React from 'react';

const UserRepository = () => {
    return (
        <>
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
        </>
    );
};

export default UserRepository;