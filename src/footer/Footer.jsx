import React from 'react'

import style from './Footer.module.css';
import {LinksBlock} from "./LinksBlock/LinksBlock";


function Footer() {
    return (
        <div className={style.footerBlock}>
            <div className={style.footerContainer}>
                <h2>Natali Danilchenko</h2>
                <LinksBlock/>
            </div>

        </div>)
}

export default Footer;