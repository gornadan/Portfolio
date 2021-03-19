import React from 'react';
import style from './Skils.module.css';
import styleContainer from './../common/styles/Container.module.css'
import Skill from "./skil/Skill";




function Skils() {
    return (
        <div className={style.skilsBlock}>
            <div className={style.skilsContainer}>
                <h2 className={style.title}>Skils</h2>
                <div className={style.skils}>
                    <Skill title={"JS"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim..."}/>
                    <Skill title={"CSS"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim..."}/>
                    <Skill title={"REACT"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim..."}/>
</div>
</div>
</div>
)
}

export default Skils;