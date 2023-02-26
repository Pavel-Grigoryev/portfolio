import React from 'react';
import sCont from '../../common/styles/Container.module.scss';
import s from './Contact.module.scss'
import Button from "../button/Button";


export const Contact = () => {


    return (
        <section className={s.contact} id={"contact"}>
            <div className={`${sCont.container}`}>
                <h2 className={s.title}>Contact</h2>
                <form action="" className={s.form}>
                    <input type="text" name={"name"} placeholder={"Name"} className={s.inputText}/>
                    <input type="email" name={"email"} placeholder={"Email"} className={s.inputText}/>
                    <input type="textarea"  placeholder={"Message"} className={s.inputTextArea}/>
                    <div className={s.butCont}>
                        <Button type={"submit"} title={"Send Message"}/>
                    </div>
                </form>
                
            </div>
        </section>
    );
};

