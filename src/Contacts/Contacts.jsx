import React from 'react';
import style from './Contacts.module.css';


function Contacts() {
    return (
        <div className={style.contacts}>
            <div className={style.contactsContainer}>
                <h2>Contacts</h2>
                <form>
                    <label><input className={style.formControl}/></label>
                    <div><input className={style.formControl}/></div>
                    <div><textarea className={style.formControl}/></div>
                </form>

                <button>Отправить</button>
            </div>
        </div>
    )
}

export default Contacts;