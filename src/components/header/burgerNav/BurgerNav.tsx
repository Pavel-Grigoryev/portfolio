import React, {useState} from 'react';
import s from './BurgerNav.module.scss'
import {Link} from "react-scroll";


export const BurgerNav = () => {

    const [openMenu, setOpenMenu] = useState<boolean>(false);

    const onClickHandle = () => {
        setOpenMenu(!openMenu);
    }

    return (
        <>
            <nav className={openMenu ? `${s.burgerMenu} ${s.active}`: s.burgerMenu}>
                <div className={s.iconMenu} onClick={onClickHandle}>
                    <span className={s.iconMenuLine}></span>
                </div>
                <div className={s.linksBlock}>
                    <div className={s.linkWrapper}>
                        <Link to="main"
                              className={s.link}
                              activeClass={s.activeLink}
                              onClick={onClickHandle}
                              duration={500}
                              delay={100}
                              spy={true}
                              offset={-80}
                              smooth={true}>Main</Link>
                    </div>
                    <div className={s.linkWrapper}>
                        <Link to="skills"
                              className={s.link}
                              activeClass={s.activeLink}
                              onClick={onClickHandle}
                              duration={500}
                              delay={100}
                              spy={true}
                              offset={-80}
                              smooth={true}>Skills</Link>
                    </div>
                    <div className={s.linkWrapper}>
                        <Link to="projects"
                              className={s.link}
                              activeClass={s.activeLink}
                              onClick={onClickHandle}
                              duration={500}
                              delay={100}
                              spy={true}
                              offset={-80}
                              smooth={true}>Projects</Link>
                    </div>
                    <div className={s.linkWrapper}>
                        <Link to="contact"
                              className={s.link}
                              activeClass={s.activeLink}
                              onClick={onClickHandle}
                              duration={500}
                              delay={100}
                              spy={true}
                              offset={-80}
                              smooth={true}>Contact</Link>
                    </div>
                </div>

            </nav>
        </>
    );
};

