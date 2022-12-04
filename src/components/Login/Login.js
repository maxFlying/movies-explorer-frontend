import React from 'react';
import { Link } from 'react-router-dom';
import RegisterHeader from '../RegisterHeader/RegisterHeader';
import './Login.css';
import { useForm } from 'react-hook-form';

function Login(props) {

    const {
        register,
        formState: { errors, isValid },
        handleSubmit,
    } = useForm({
        mode: 'onChange'
    });
    
    const handleSubmitForm = (loginData) => {
        props.onLogin(loginData);
    };

    const toggleError = (err) => {
        if(err.status === 401) {
            return `Неправильные почта или пароль`
        } else {
            return ``
        }
    };

    return (
        <>
            <RegisterHeader HeaderTitle={'Рады видеть!'}/>
            <form className='login__form' onSubmit={handleSubmit(handleSubmitForm)}>
                <label className='login__label'>E-mail</label>
                <input 
                {...register('email', {
                    required: 'Пожалуйста, введите Ваш email',
                    pattern: {
                        // eslint-disable-next-line no-useless-escape
                        value: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
                        message: 'Неверный формат email'
                    }
                })}
                className='login__input' type='email' name='email' disabled={props.isLoading}/>
                <span className='register__error'>{errors?.email && errors?.email.message}</span>
                <label className='login__label'>Пароль</label>
                <input 
                {...register('password', {
                    required: 'Пожалуйста, введите Ваш пароль',
                })}
                className='login__input' type='password' name='password' disabled={props.isLoading}/>
                <span className='register__error'>{errors?.password && errors?.password.message}</span>
                <span className='login__submit-error'>{toggleError(props.error)}</span>
                <button className='login__button' type='submit' disabled={!isValid || props.isLoading}>Войти</button>
                <p className='login__register'>Ещё не зарегистрированы?<Link to='/signup' className='login__register-link'>Регистрация</Link></p>
            </form>
        </>
    );
}
  
export default Login;