import React from 'react';
import Header from '../Header/Header';
import './Profile.css';

function Profile(props) {
    const UserName = 'Ясон'
    const UserEmail = 'cat@yandex.ru'
    return (
        <page>
            <Header openBurger={props.openBurger}/>
            <main className='profile'>
                <h1 className='profile__title'>Привет, {UserName}!</h1>
                <div className='profile__info'>
                    <p className='profile__info-field'>Имя</p>
                    <p className='profile__info-value'>{UserName}</p>
                </div>
                <div className='profile__info'>
                    <p className='profile__info-field'>E-mail</p>
                    <p className='profile__info-value'>{UserEmail}</p>
                </div>
                <button className='profile__button-edit'>Редактировать</button>
                <button className='profile__button-exit'>Выйти из аккаунта</button>
            </main>
        </page>
    );
}
  
export default Profile;