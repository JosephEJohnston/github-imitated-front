import React from 'react';
import "./footer.css"
import $style from "./footer.module.css"

const Footer = () => {
    return (
        <>
            <footer id="content-footer">
                <div className={$style.footerDivLeft}>
                    <button className="bottom-github"><i className="bi bi-github"></i></button>
                    <div className={$style.footerLeftText}>© 2025 GitHub, Inc.</div>
                </div>
                <div className={$style.footerDivRight}>
                    <div><a className="bottom-a" href="">Terms</a></div>
                    <div><a className="bottom-a" href="">Privacy</a></div>
                    <div><a className="bottom-a" href="">Security</a></div>
                    <div><a className="bottom-a" href="">Status</a></div>
                    <div><a className="bottom-a" href="">Docs</a></div>
                    <div><a className="bottom-a" href="">Contact</a></div>
                    <div><a className="bottom-a" href="">Manage cookies</a></div>
                    <div><a className="bottom-a" href="">Do not share my personal information</a></div>
                </div>
            </footer>
        </>
    );
};

export default Footer;