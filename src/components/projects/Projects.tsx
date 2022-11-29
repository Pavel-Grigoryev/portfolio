import React from 'react';
import sCont from './../../common/styles/Container.module.css';
import counterImg from './../../assets/images/counter.jpg'
import s from './Projects.module.css'
import {Project} from "./project/Project";

export type ProjectType = {

    id: number
    title: string
    desc: string
    url: string
}


export const Projects = () => {

    const projects: Array<ProjectType> = [
        {id: 1, title: 'Social Network', url: counterImg, desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, maiores!' },
        {id: 2, title: 'Todo List (version 1.0)', url: counterImg, desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, maiores!' },
        {id: 3, title: 'Todo List (version 2.0)', url: counterImg, desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, maiores!' },
        {id: 4, title: 'Counter', url: counterImg, desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, maiores!'}
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

