import React from 'react';
import sCont from './../../common/styles/Container.module.css';
import avatar from './../../assets/images/AvatarBlackWhite.jpg'
import s from './Main.module.css'

export const Main = () => {
    return (
        <section className={s.main}>
            <div className={`${sCont.container} ${s.mainCont}`}>
                <div className={s.textBlock}>
                    <h1 className={s.title}>Hello, my name is Pavel Grigoryev. I'm a Frontend developer.</h1>
                </div>
                <div className={s.photoBlock}>
                    <img className={s.photo} src={avatar} alt="person foto"/>
                </div>
            </div>
        </section>
    );
};

