'use client'
import React, {RefObject, useRef, useState} from 'react';
import classNames from "classnames";
import $headerStyle from "@/components/home/header/header.module.css";
import $style from "@/components/home/header/create-new-button.module.css";


const CreateNewButton = () => {

    const [showMenu, setShowMenu] = useState(false);
    const menuRef: RefObject<HTMLDivElement | null> = useRef(null);

    return (
        <>
            <div id="two-inner-button-div"
                 className={classNames(
                     $headerStyle.withHoverText,
                     $headerStyle.twoInnerButtonDiv,
                     'head-nav-common-button-div',
                     'head-item-border'
                 )}
                 data-tooltip={"Create new..."}
                >
                <button id="two-inner-button" onClick={() => setShowMenu(!showMenu)}>
                    <span className="button-inner-span">
                        <i className="bi bi-plus bi-icon-middle"></i>
                    </span>
                    <span className="button-inner-span">
                        <i className="bi bi-chevron-down bi-icon-small"></i>
                    </span>
                </button>
                <CreateNewMenu ref={menuRef} showControl={showMenu} />
            </div>
        </>
    );
};

interface CreateNewMenuProps {
    ref: RefObject<HTMLDivElement | null>;
    showControl: boolean;
}

const CreateNewMenu = (
    props: CreateNewMenuProps
) => {

    const showClass = props.showControl ? $style.createNewMenuShow :
        $style.createNewMenuHide;

    return (
        <>
            <div className={classNames($style.createNewMenu, showClass)} ref={props.ref}>
                <div className={$style.createNewMenuRow}>
                    Hello world.
                </div>
            </div>
        </>
    )
}

export default CreateNewButton;