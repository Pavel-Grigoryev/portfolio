import React from 'react';
import s from './Skill.module.scss'
import {SkillType} from "../Skills";

type SkillPropsType = {
    mySkill: SkillType

}

export const Skill = (props: SkillPropsType) => {
    const {url, title, desc} = props.mySkill

//fill
    return (
        <li className={s.skillsItem}>
            <article className={s.skill}>
                <img src={url} alt="" className={s.skillImage}/>
                    <div className={s.skillInfo}>
                        <h3 className={s.title}>{title}</h3>
                        <p className={s.desc}>{desc}</p>
                    </div>
            </article>
        </li>
    );
};

