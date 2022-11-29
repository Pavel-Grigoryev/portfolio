import React from 'react';
import s from './Society.module.css'
import github from "../../assets/images/github.svg";
import linkedin from "../../assets/images/linkedin.svg";
import codewars from "../../assets/images/codewars.svg";
import telegram from "../../assets/images/telegram.svg";

type SocietyType = {
    id: number
    url: string
    socRef: string
}

export const Society = () => {

    const societies: Array<SocietyType> = [
        {
            id: 1,
            url: linkedin,
            socRef: 'https://www.linkedin.com/in/pavel-grigoryev-743844229'
        },
        {
            id: 2,
            url: github,
            socRef: 'https://github.com/Pavel-Grigoryev'
        },
        {
            id: 3,
            url: telegram,
            socRef: 'https://t.me/developer_shopify'
        },
        {
            id: 4,
            url: codewars,
            socRef: 'https://www.codewars.com/users/Pavel-Grigoryev'
        }
    ];

    const mySocieties = societies.map(soc => {
        return <li key={soc.id} className={s.item}>
            <a href={soc.socRef} className={s.link} target={'_blank'}>
                <img src={soc.url} alt="" className={s.icon}/>
            </a>
        </li>
    })

    return (
        <ul className={s.listItems} role={'list'}>
            {mySocieties}
        </ul>
    );
};

