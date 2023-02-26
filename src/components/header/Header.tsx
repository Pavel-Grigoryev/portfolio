import React from 'react';
import sCont from 'common/styles/Container.module.scss';
import s from './Header.module.scss'
import {Navbar} from "./navbar/Navbar";
import {BurgerNav} from "./burgerNav/BurgerNav";

export const Header = () => {
    return (
        <header className={s.header}>
            <div className={sCont.container}>
                <div className={s.navCont}>
                    <Navbar/>
                    <BurgerNav/>
                </div>
            </div>
        </header>
    );
};

