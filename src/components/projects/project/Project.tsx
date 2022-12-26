import React from 'react';
import s from './Project.module.scss'
import {ProjectType} from "../Projects";
import Button from "../../button/Button";

type SkillPropsType = {
    myProject: ProjectType

}

export const Project = (props: SkillPropsType) => {
    const {url, title, desc} = props.myProject

    return (
        <li className={s.projectItem}>
            <article className={s.project}>
                <div className={s.projectImageCont} style={{
                    background: `url(${url}) center/cover no-repeat`
                }}>
                    <div className={s.butBlock}>
                        <Button title={'View'} type={'button'}/>
                    </div>
                </div>
                <div className={s.skillInfo}>
                    <h3 className={s.title}>{title}</h3>
                    <p className={s.desc}>{desc}</p>
                </div>
            </article>
        </li>
    );
};

