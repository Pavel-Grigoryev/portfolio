import React from 'react';
import sCont from 'common/styles/Container.module.scss';
import networkImg from 'assets/images/network.png';
import todolistImg from 'assets/images/Todolist.jpg';
import memorImg from 'assets/images/Memorize.jpg';
import taskSpotImg from 'assets/images/TaskSpot.jpg';
import AodImg from 'assets/images/AOD.jpg';
import s from './Projects.module.scss';
import {Project} from "./project/Project";
import {Fade} from "react-awesome-reveal";

export type ProjectType = {
    id: number
    title: string
    desc: string
    url: string
    link: string
    stack?: string
    password?: string
}


export const Projects = () => {

    const projects: Array<ProjectType> = [
        {
            id: 1,
            title: 'Memorize',
            url: memorImg,
            desc: 'Memorize is an application for memorizing information using cards. Register in the app and explore existing decks of cards on various topics or create your own. The application has the ability to create questions in the form of pictures.',
            link: 'https://pavel-grigoryev.github.io/cards-app/',
            stack: 'React, Redux-toolkit, Redux-router-dom, Redux-thunk, Axios, TypeScript, MaterialUI, Formik.'
        },
        {
            id: 11,
            title: 'TaskSpot',
            url: taskSpotImg,
            desc: 'TaskSpot  is an application that allows you to create and manage to-do lists',
            link: 'https://pavel-grigoryev.github.io/TodoListApp/',
            stack: 'React, Redux-toolkit, Redux-router-dom, Redux-thunk, Axios, TypeScript, MaterialUI, Formik, Storybook, Jest test, Snapshot test.'
        },
        {
            id: 2,
            title: 'Aspire',
            url: networkImg,
            desc: 'Aspire is a social network where people can communicate with each other.',
            link: 'https://pavel-grigoryev.github.io/Social_network/',
            stack: 'React, Redux, Redux-router-dom, Redux-thunk, Axios, TypeScript, React Hook Form, Jest test.'
        },
        {
            id: 3,
            title: 'Todo List',
            url: todolistImg,
            desc: 'An app built using React class components and the React Bootstrap framework that allows you to create and manage to-do lists.',
            link: 'https://pavel-grigoryev.github.io/Todo-list-ver-1/',
            stack: 'React class components, JavaScript, React Bootstrap'
        },
        {
            id: 21,
            title: 'AOD Bike Store',
            url: AodImg,
            desc: 'The main page of the AOD bike store with adaptive (desktop, tablet, mobile).',
            link: 'https://aod-bike.myshopify.com/',
            password: 'Password: 123456',
            stack: 'Shopify, Liquid code, Shopify CLI, JavaScript, HTML5, CSS3.'
        },

    ];

    const myProjects = projects.map(pr => <Project key={pr.id} myProject={pr}/>)

    return (
        <section className={s.projects} id={"projects"}>
            <div className={`${sCont.container} ${s.projectsCont}`}>
                <Fade triggerOnce={true} duration={500} delay={500}><h2 className={s.title} >Projects</h2>
                </Fade>
                <ul className={s.projectsList}>
                    {myProjects}
                </ul>
            </div>
        </section>
    );
};

