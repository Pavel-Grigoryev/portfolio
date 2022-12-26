import React from 'react';
import s from './Button.module.scss'

type ButtonType = "button" | "submit" | "reset" | undefined

type ButtonPropsType = {
    title: string
    type: ButtonType
    className?: string
    callback?: () => void
}

const Button= ({title, callback, className, type}:ButtonPropsType) => {

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

    return (
            <button type={type} onClick={callbackHandler} className={finalClassName}>
                <div className={s.title}>
                    <span className={s.letterBlock}>
                        {titleLetters}
                    </span>
                </div>
            </button>
    );
};

export default Button;