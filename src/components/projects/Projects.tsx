import React from 'react';
import sCont from 'common/styles/Container.module.scss';
import networkImg from 'assets/images/Aspire.jpg';
import memorImg from 'assets/images/Memorize.jpg';
import dhImg from 'assets/images/dh-designer.jpg';
import taskSpotImg from 'assets/images/TaskSpot.jpg';
import aodImg from 'assets/images/AOD.jpg';
import ecoCoffeeImg from 'assets/images/EcoCoffee.jpg';
import smartHaloImg from 'assets/images/SmartHalo.jpg';
import s from './Projects.module.scss';
import {Project} from './project/Project';
import {Fade} from 'react-awesome-reveal';

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
            id: 6,
            title: 'Dh-designer.com',
            url: dhImg,
            desc: 'Dh-designer.com this is a multi-page UX/UI designer\'s website. The visual design of the site includes two themes: light and dark,\n' +
                'allowing visitors to choose their preferred display option. Framer Motion animation library was used to create an attractive visual presentation. \n' +
                'The project has set up automatic code verification using eslint, styleline and husky.\n' +
                'To ensure quick delivery of changes to the site, the project uses Git Actions and Docker.',
            link: 'https://dh-designer.com/',
            stack: 'Next.js, TypeScript, Zustand, Tailwindcss, Framer Motion, Swiper, Docker, eslint, stylelint.'
        },
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
            stack: 'React, Redux, Redux-router-dom, Redux-thunk, Axios, TypeScript, React Hook Form, Jest test, Ant Design.'
        },
        {
            id: 21,
            title: 'AOD Bike Shop',
            url: aodImg,
            desc: 'The main page of the AOD bike shop with adaptive (desktop, tablet, mobile).',
            link: 'https://aod-bike.myshopify.com/',
            password: 'Password: 123456',
            stack: 'Shopify, Liquid code, Shopify CLI, JavaScript, HTML5, CSS3.'
        },
        {
            id: 4,
            title: 'Eco-coffee Shop',
            url: ecoCoffeeImg,
            desc: 'Coffee shop website that offers unique and delicious coffee.',
            link: 'https://eco-coffee1.myshopify.com/',
            password: 'Password: 123456',
            stack: 'Shopify, Liquid code, Theme Kit, JavaScript, HTML5, CSS3.'
        },
        {
            id: 5,
            title: 'SmartHalo Shop',
            url: smartHaloImg,
            desc: 'Bike cycling computer shop.',
            link: 'https://smarthalo-bike.myshopify.com/',
            password: 'Password: 123456',
            stack: 'Shopify, Liquid code, Theme Kit, JavaScript, HTML5, CSS3.'
        },

    ];

    const myProjects = projects.map(pr => <Project key={pr.id} myProject={pr}/>)

    return (
        <section className={s.projects} id={"projects"}>
            <div className={`${sCont.container} ${s.projectsCont}`}>
                <Fade direction={"down"} triggerOnce={true} duration={500}><h2 className={s.title} >Projects</h2>
                </Fade>
                <ul className={s.projectsList}>
                    {myProjects}
                </ul>
            </div>
        </section>
    );
};

