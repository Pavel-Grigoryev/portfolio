import React from 'react';
import sCont from './../../common/styles/Container.module.css';
import s from './Footer.module.scss'
import {Society} from "../society/Society";


export const Footer = () => {
    return (
        <footer className={s.footer}>
            <div className={`${sCont.container} ${s.footerCont}`}>
                <div className={s.desc}>
                    © 2022 Pavel Grigoryev. All rights reserved.
                </div>
                <div className={s.societyCont}>
                    <Society/>
                </div>
            </div>
        </footer>
    );
};

