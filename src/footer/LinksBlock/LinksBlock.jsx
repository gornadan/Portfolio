import React from 'react';
import style from './LinksBlock.module.css'

export const LinksBlock = () => {
    return (
            <div className={style.linksBlock}>
                <a className={style.links} href="">Facebook</a>
                <a className={style.links} href="">Linkedin</a>
                <a className={style.links} href="">Instagram</a>
            </div>
        )

}