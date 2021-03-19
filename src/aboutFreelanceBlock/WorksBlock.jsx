import React from 'react';
import style from './WorksBlock.module.css';






function WorksBlock() {
    return (
        <div className={style.works}>
            <div className={style.worksContainer}>
                <h2 className={style.title}>I am available for Freelance</h2>
                <button>Нанять меня</button>
            </div>
        </div>
    )
}

export default WorksBlock;