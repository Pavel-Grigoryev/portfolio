import React from 'react';
import sCont from 'common/styles/Container.module.scss';
import reactImg from 'assets/images/react.svg';
import cssImg from 'assets/images/css3.svg';
import htmlImg from 'assets/images/html5.svg';
import jsImg from 'assets/images/jsImg.svg';
import tsImg from 'assets/images/tsImg.svg';
import reduxImg from 'assets/images/reduxImg.svg';
import jestImg from 'assets/images/jestImg.svg';
import gitImg from 'assets/images/gitImg.svg';
import shopifyImg from 'assets/images/shopifyImg.svg';
import webflowImg from 'assets/images/webflowImg.svg';
import wordpressImg from 'assets/images/wordpressImg.svg';
import s from './Skills.module.scss'
import {Skill} from './skill/Skill';
import {Fade} from "react-awesome-reveal";

export type SkillType = {
    id: number
    title: string
    desc: string
    url: string
}


export const Skills = () => {

    const skills: Array<SkillType> = [
        {
            id: 5,
            title: 'React',
            url: reactImg,
            desc: 'Using React Functional Components and Hooks to create a SPA.'
        },
        {
            id: 6,
            title: 'Redux/Redux-Toolkit',
            url: reduxImg,
            desc: 'Using Redux and Redux-Toolkit to manage the state of applications.'
        },
        {
            id: 7,
            title: 'React-Redux',
            url: reduxImg,
            desc: 'Using React-Redux library for easier interaction with the state of applications.'
        },
        {
            id: 4,
            title: 'TypeScript',
            url: tsImg,
            desc: 'Using typescript on projects to minimize errors.'
        },
        {
            id: 3,
            title: 'JavaScript',
            url: jsImg,
            desc: 'Using the latest language features.'
        },
        {
            id: 8,
            title: 'Jest test',
            url: jestImg,
            desc: 'Using Jest Framework to test components and reducers to speed up development.'
        },
        {
            id: 1,
            title: 'HTML5',
            url: htmlImg,
            desc: 'Using semantic tags, Flexbox and Grid in  HTML coding.'
        },
        {
            id: 2,
            title: 'CSS3',
            url: cssImg,
            desc: 'Using CSS3 in projects, including the SAS preprocessor.'
        },
        {
            id: 81,
            title: 'Git',
            url: gitImg,
            desc: 'Using Git to track and maintain the history of file changes in projects.'
        },
        {
            id: 9,
            title: 'Shopify',
            url: shopifyImg,
            desc: 'Experience in creating stores on the Shopify platform, including a migration from the Shopify platform to the Shopify 2.0 platform.'
        },
        {
            id: 11,
            title: 'Webflow',
            url: webflowImg,
            desc: 'Experience in creating websites on the Webflow platform'
        },
        {
            id: 12,
            title: 'Wordpress',
            url: wordpressImg,
            desc: 'Experience in creating websites on the Wordpress platform'
        }
    ];

    const mySkills = skills.map(sk => <Skill key={sk.id} mySkill={sk}/>)

    return (
        <section className={s.skills} id={"skills"}>
            <div className={`${sCont.container} ${s.skillsCont}`}>
                <Fade triggerOnce={true} duration={500} delay={500}>
                    <h2 className={s.title}>My Skills</h2>
                </Fade>
                <ul className={s.skillsList}>
                    <Fade triggerOnce={true} duration={500} className={s.skillsFade}>
                        {mySkills}
                    </Fade>
                </ul>

            </div>
        </section>
    );
};

