import React from 'react';
import $style from './media-control-page.module.css'

interface Props {
    leftSideBar: React.ReactNode;
    middleContent: React.ReactNode;
    rightSideBar: React.ReactNode;
}

const MediaControlPage = (props : Props) => {
    return (
        <>
            <div className={$style.contentDisplay}>
                {props.leftSideBar}
                {props.middleContent}
                {props.rightSideBar}
            </div>
        </>
    );
};

export default MediaControlPage;