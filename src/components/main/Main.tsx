import React, {useCallback, useMemo} from 'react';
import sCont from 'common/styles/Container.module.scss';
import avatar from 'assets/images/AvatarBlackWhite.jpg'
import s from './Main.module.scss'
import Button from "../button/Button";
import type {Engine} from "tsparticles-engine";
import Particles from "react-particles";
import {loadFull} from "tsparticles";
import {Fade} from "react-awesome-reveal";
// @ts-ignore
import pdfCV from "assets/images/CV_Pavel_Grigoryev.pdf";


export const Main = () => {

    const particlesInit = useCallback(async (engine: Engine) => {
        await loadFull(engine);
    }, []);

    const particlesOpt = useMemo((): any => {
        return {
            particles: {
                color: {
                    value: "#E3E3E1",
                },
                links: {
                    color: "#E3E3E1",
                    distance: 120,
                    enable: true,
                    opacity: 0.5,
                    width: 0.5,
                },
                collisions: {
                    enable: true,
                },
                move: {
                    direction: "none",
                    enable: true,
                    outModes: {
                        default: "bounce",
                    },
                    random: false,
                    speed: 1,
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                        area: 800,
                    },
                    value: 80,
                },
                opacity: {
                    value: 0.5,
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: {min: 0.2, max: 0.2},
                },
            },
        }
    }, [])

    const downloadCVHandle = () => {
        window.open(pdfCV, '_blank');
    }

    return (
        <section className={s.main} id={"main"}>
            <Particles options={particlesOpt}
                       init={particlesInit}/>
            <div className={`${sCont.container} ${s.mainCont}`}>
                <Fade triggerOnce={true} duration={1000} delay={500}>
                    <div className={s.textBlock}>
                        <h2 className={s.subTitle}>Hello</h2>
                        <h1 className={s.title}>I'm Pavel Grigoryev.</h1>
                        <h3 className={s.info}>Front-end developer with experience working on the Shopify platform.</h3>
                        <div className={s.buttonBlock}>
                            <Button title={'Download CV'} type={'button'} callback={downloadCVHandle}/>
                        </div>
                    </div>
                </Fade>
                <Fade triggerOnce={true} duration={1000} delay={500} className={s.photoFade}>
                    <div className={s.photoBlock}>
                        <img className={s.photo} src={avatar} alt="person"/>
                    </div>
                </Fade>

            </div>
        </section>
    );
};

