import React from 'react';
import { Link } from 'react-router-dom';
import RegisterHeader from '../RegisterHeader/RegisterHeader';
import './Register.css';

function Register() {
    return (
        <page className='register'>
            <RegisterHeader HeaderTitle={'Добро пожаловать!'}/>
            <form className='register__form'>
                <label className='register__label' for='name'>Имя</label>
                <input className='register__input' id='name' required/>
                <label className='register__label' for='email'>E-mail</label>
                <input className='register__input' id='email' required/>
                <label className='register__label' for='password'>Пароль</label>
                <input className='register__input' id='password' type='password' required/>
                <span className='register__error'>Что-то пошло не так...</span>
                <button className='register__button' type='submit'>Зарегистрироваться</button>
                <p className='register__login'>Уже зарегистрированы?<Link to='/signin' className='register__login-link'>Войти</Link></p>
            </form>
        </page>
    );
}
  
export default Register;