import React from 'react';
import sCont from './../../common/styles/Container.module.css';
import reactImg from './../../assets/images/react.svg'
import s from './Skills.module.css'
import {Skill} from "./skill/Skill";

export type SkillType = {
    id: number
    title: string
    desc: string
    url: string
}


export const Skills = () => {

    const skills: Array<SkillType>  = [
        {
            id: 2,
            title: 'CSS3',
            url: reactImg,
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, maiores!'
        },
        {
            id: 3,
            title: 'JavaScript',
            url: reactImg,
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, maiores!'
        },
        {
            id: 4,
            title: 'TypeScript',
            url: reactImg,
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, maiores!'
        },
        {
            id: 5,
            title: 'React',
            url: reactImg,
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, maiores!'
        },
        {
            id: 6,
            title: 'Redux',
            url: reactImg,
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, maiores!'
        },
        {
            id: 7,
            title: 'React-Redux',
            url: reactImg,
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, maiores!'
        },
        {
            id: 8,
            title: 'Jest test',
            url: reactImg,
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, maiores!'
        },
        {
            id: 9,
            title: 'Shopify',
            url: reactImg,
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, maiores!'
        },
        {
            id: 10,
            title: 'LIQUID',
            url: reactImg,
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, maiores!'
        },
        {
            id: 11,
            title: 'Webflow',
            url: reactImg,
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, maiores!'
        },
        {
            id: 12,
            title: 'Wordpress',
            url: reactImg,
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, maiores!'
        }
    ];

    const mySkills = skills.map(sk => <Skill key={sk.id} mySkill={sk} />)

    return (
        <section className={s.skills}>
            <div className={`${sCont.container} ${s.skillsCont}`}>
                <h2 className={s.title}>My Skills</h2>
                <ul className={s.skillsList} role={'list'}>
                    {mySkills}
                </ul>
            </div>
        </section>
    );
};

