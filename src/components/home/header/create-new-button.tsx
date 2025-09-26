import React from 'react';
import classNames from "classnames";
import $headerStyle from "@/components/home/header/header.module.css";
import $style from "@/components/home/header/create-new-button.module.css";


const CreateNewButton = () => {
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
                <button id="two-inner-button">
                    <span className="button-inner-span">
                        <i className="bi bi-plus bi-icon-middle"></i>
                    </span>
                    <span className="button-inner-span">
                        <i className="bi bi-chevron-down bi-icon-small"></i>
                    </span>
                </button>
            </div>
        </>
    );
};

const CreateNewMenu = () => {

    return (
        <>
            <div>

            </div>
        </>
    )
}

export default CreateNewButton;