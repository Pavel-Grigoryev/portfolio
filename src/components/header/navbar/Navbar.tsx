import React from 'react';
import s from './Navbar.module.scss'
import {Link} from "react-scroll";


export const Navbar = () => {
    return (
        <nav className={s.mainMenu}>
            <Link to="main"
                  className={s.link}
                  activeClass={s.activeLink}
                  duration={500}
                  delay={100}
                  spy={true}
                  offset={-80}
                  smooth={true}>Main</Link>
            <Link to="skills"
                  className={s.link}
                  activeClass={s.activeLink}
                  duration={500}
                  delay={100}
                  spy={true}
                  offset={-80}
                  smooth={true}>Skills</Link>
            <Link to="projects"
                  className={s.link}
                  activeClass={s.activeLink}
                  duration={500}
                  delay={100}
                  spy={true}
                  offset={-80}
                  smooth={true}>Projects</Link>
            <Link to="contact"
                  className={s.link}
                  activeClass={s.activeLink}
                  duration={500}
                  delay={100}
                  spy={true}
                  offset={-80}
                  smooth={true}>Contact</Link>

        </nav>
    );
};

