import React from 'react';
import sCont from './../../common/styles/Container.module.css';
import counterImg from './../../assets/images/counter.png';
import networkImg from './../../assets/images/network.png';
import todoV1Img from './../../assets/images/todoV1.webp';
import todoV2Img from './../../assets/images/todoV2.webp';
import s from './Projects.module.scss';
import {Project} from "./project/Project";

export type ProjectType = {

    id: number
    title: string
    desc: string
    url: string
}


export const Projects = () => {

    const projects: Array<ProjectType> = [
        {id: 1, title: 'Social Network', url: networkImg, desc: 'A social network built using React, Redux, and Axios.' },
        {id: 2, title: 'Todo List (version 1.0)', url: todoV1Img, desc: 'An app built using React class components and the React Bootstrap framework that allows you to create and manage to-do lists.' },
        {id: 3, title: 'Todo List (version 2.0)', url: todoV2Img, desc: 'A new version of the app built with functional React Components, Redux, Axios and Material UI library' },
        {id: 4, title: 'Counter', url: counterImg, desc: 'The counter is a test application for understanding how React and Redax work.'}
    ];

    const myProjects = projects.map(pr => <Project key={pr.id} myProject={pr}/>)

    return (
        <section className={s.projects}>
            <div className={`${sCont.container} ${s.projectsCont}`}>
                <h2 className={s.title}>Projects</h2>
                <ul className={s.projectsList} role={'list'}>
                    {myProjects}
                </ul>
            </div>
        </section>
    );
};

