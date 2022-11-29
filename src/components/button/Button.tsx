import React from 'react';
import s from './Button.module.css'

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

    const finalClassName = s.button
        + (className ? ' ' + className : '');

    return (
            <button type={type} onClick={callbackHandler} className={finalClassName}>{title}</button>
    );
};

export default Button;