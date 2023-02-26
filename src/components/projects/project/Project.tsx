import React from 'react';
import s from './Project.module.scss'
import {ProjectType} from "../Projects";
import Button from "../../button/Button";
import {Fade} from "react-awesome-reveal";


type SkillPropsType = {
    myProject: ProjectType

}

export const Project = (props: SkillPropsType) => {
    const {url, title, desc, link, stack, password} = props.myProject

    return (
        <li className={s.projectItem}>
            <article className={s.project}>
                <div className={s.projectImageCont} style={{
                    background: `url(${url}) center/cover no-repeat`
                }}>
                    <div className={s.butBlock}>
                        <a href={link} target={'_blank'} rel="noreferrer">
                            <Button title={'View'} type={'button'} password={password}/>
                        </a>
                    </div>
                </div>

                <Fade direction={"down"} triggerOnce={true} duration={500} delay={300}>
                    <div className={s.skillInfo}>
                        <h3 className={s.title}>{title}</h3>
                        <p className={s.desc}>{desc}</p>
                        {stack && <p className={s.desc}>
                            <span className={s.stack}>Stack:</span>
                            {stack}
                        </p>}
                    </div>
                </Fade>
            </article>
        </li>
    );
};

