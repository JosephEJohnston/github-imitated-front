import React from 'react';

const Footer = () => {
    return (
        <>
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
        </>
    );
};

export default Footer;