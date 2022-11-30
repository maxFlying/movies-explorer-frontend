import React from 'react';
import { Link } from 'react-router-dom';
import RegisterHeader from '../RegisterHeader/RegisterHeader';
import './Login.css';

function Login() {
    return (
        <page className='login'>
            <RegisterHeader HeaderTitle={'Рады видеть!'}/>
            <form className='login__form'>
                <label className='login__label' for='email'>E-mail</label>
                <input className='login__input' id='email' required/>
                <label className='login__label' for='password'>Пароль</label>
                <input className='login__input' id='password' type='password' required/>
                <button className='login__button' type='submit'>Войти</button>
                <p className='login__register'>Ещё не зарегистрированы?<Link to='/signup' className='login__register-link'>Регистрация</Link></p>
            </form>
        </page>
    );
}
  
export default Login;