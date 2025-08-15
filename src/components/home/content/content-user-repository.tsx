import React from 'react';
import $style from './content-user-repository.module.css'
import classNames from "classnames";
import UserRepository from "@/components/home/user-repository";

const ContentUserRepository = () => {
    return (
        <>
            <div className={classNames($style.container)}>
                <div>
                    <div className={$style.title}>Top repositories</div>
                    <div className={classNames($style.repositoryContainer)}>
                        <UserRepository />
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContentUserRepository;