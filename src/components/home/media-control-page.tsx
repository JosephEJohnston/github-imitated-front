import React from 'react';
import $style from './media-control-page.module.css'
import classNames from "classnames";

interface Props {
    leftSideBar: React.ReactNode;
    middleContent: React.ReactNode;
    rightSideBar: React.ReactNode;
}

const MediaControlPage = (props : Props) => {
    return (
        <>
            <div className={$style.contentDisplay}>
                <aside className={classNames($style.contentItem, $style.leftSideBar)}>
                    {props.leftSideBar}
                </aside>
                <div className={classNames($style.contentItem, $style.middleContent)}>
                    {props.middleContent}
                </div>
                <aside className={classNames($style.contentItem, $style.rightSideBar)}>
                    {props.rightSideBar}
                </aside>
            </div>
        </>
    );
};

export default MediaControlPage;