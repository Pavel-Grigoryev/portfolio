import React from 'react';
import sCont from './../../common/styles/Container.module.css';
import s from './Header.module.css'
import {Navbar} from "../navbar/Navbar";

export const Header = () => {
    return (
        <header className={s.header}>
            <div className={sCont.container}>
                <div className={s.navCont}>
                    <Navbar/>
                </div>
            </div>
        </header>
    );
};

