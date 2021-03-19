import React from 'react'

import style from './Main.module.css';
import styleContainer from './../common/styles/Container.module.css'


function Main() {
    return (
        <div className={style.mainBlock}>
            <div className={style.container}>
                <div className={style.text}>
                    <span>Hi There</span>
                    <h1>I am Natali Danilchenko</h1>
                    <p>I am frontend developer</p>
                </div>
                <div className={style.photo}></div>
            </div>
        </div>)
}

export default Main;