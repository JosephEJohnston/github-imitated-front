import React from 'react';
import "./right-sidebar.css"

const RightSidebar = () => {
    return (
        <>
            <div id="right-sidebar">
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
            </div>
        </>
    );
};

export default RightSidebar;