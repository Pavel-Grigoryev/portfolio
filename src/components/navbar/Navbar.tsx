import React from 'react';

import s from './Navbar.module.css'

export const Navbar = () => {
    return (
        <nav className={s.mainMenu}>
            <a href="#" className={s.link}>Main</a>
            <a href="#" className={s.link}>Skills</a>
            <a href="#" className={s.link}>Projects</a>
            <a href="#" className={s.link}>Contact</a>
        </nav>
    );
};

