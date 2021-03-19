import React from 'react';
import style from './Projects.module.css';
import styleContainer from './../common/styles/Container.module.css'
import Project from "./work/Project";





function Projects() {
    return (
        <div className={style.worksBlock}>
            <div className={style.worksContainer}>
                <h2 className={style.title}>My works</h2>
                <div className={style.works}>
                    <Project title={"Sotial Network"}
                             description={"Lorem ipsum dolor sit amet, consectetur " +
                             "adipisicing elit, sed do eiusmod tempor incididunt ut labore" +
                             " et dolore magna aliqua Ut enim..."}/>
                    <Project title={"TodoList"}
                             description={"Lorem ipsum dolor sit amet, consectetur " +
                             "adipisicing elit, sed do eiusmod tempor incididunt ut labore" +
                             " et dolore magna aliqua Ut enim..."}/>
                </div>
            </div>
        </div>
    )
}

export default Projects;