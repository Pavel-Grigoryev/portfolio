import React from 'react';
import sCont from './../../common/styles/Container.module.css';
import avatar from './../../assets/images/AvatarBlackWhite.jpg'
import s from './Main.module.scss'
import Button from "../button/Button";

export const Main = () => {
    return (
        <section className={s.main}>
            <div className={`${sCont.container} ${s.mainCont}`}>
                <div className={s.textBlock}>
                    <h2 className={s.subTitle}>Hello</h2>
                    <h1 className={s.title}>I'm Pavel Grigoryev.</h1>
                    <h2 className={s.info}>A Frontend developer with experience working on the Shopify platform.</h2>
                    <div className={s.buttonBlock}>
                        <Button title={'Download CV'} type={'button'}/>
                    </div>
                </div>
                <div className={s.photoBlock}>
                    <img className={s.photo} src={avatar} alt="person photo"/>
                </div>

            </div>
        </section>
    );
};

