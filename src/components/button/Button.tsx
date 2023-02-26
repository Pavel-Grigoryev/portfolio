import React from 'react';
import s from './Button.module.scss'

type ButtonType = "button" | "submit" | "reset" | undefined

type ButtonPropsType = {
    title: string
    type: ButtonType
    className?: string
    callback?: () => void
    password?: string
}

const Button= ({title, callback, className, type, password}:ButtonPropsType) => {

    const callbackHandler = () => {
      if (callback) {
          callback();
      }
    }
    let keyMap = 1;
    const titleLetters = title.split('').map(letter => {
        return (
            <span key={keyMap++} className={s.letter}>{letter}</span>
        )
    })

    const finalClassName = s.button
        + (className ? ' ' + className : '');

    const finalTitleClassName = s.title
        + (password ? ' ' + s.titlePass : '');

    return (
            <button type={type} onClick={callbackHandler} className={finalClassName}>
                <div className={finalTitleClassName}>
                    <span className={s.letterBlock}>
                        {titleLetters}
                    </span>
                </div>
                {password && <div className={s.password}>{password}</div>}
            </button>
    );
};

export default Button;