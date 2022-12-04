import React from 'react';
import { Link } from 'react-router-dom';
import RegisterHeader from '../RegisterHeader/RegisterHeader';
import './Register.css';
import { useForm } from 'react-hook-form';

function Register(props) {

    const {
        register,
        formState: { errors, isValid },
        handleSubmit
    } = useForm({
        mode: 'onChange'
    });

    const handleSubmitForm = (registerData) => {
        props.onRegister(registerData);
    };

    const toggleError = (err) => {
        if(err.status === 409) {
            return `Пользователь с таким email уже зарегистрирован!`
        } else {
            return ``
        }
    };

    return (
        <div className='register'>
            <RegisterHeader HeaderTitle={'Добро пожаловать!'}/>
            <form className='register__form' onSubmit={handleSubmit(handleSubmitForm)}>
                <label className='register__label'>Имя</label>
                <input 
                {...register('name', {
                    required: 'Пожалуйста, введите Ваше имя',
                    minLength: {
                        value: 2,
                        message: 'Дожно быть минимум 2 буквы'
                    },
                    maxLength: {
                        value: 30,
                        message: 'Должно быть не больше 30 букв'
                    },
                    pattern: {
                        value: /^[а-яА-ЯёЁa-zA-Z0-9 -]+$/,
                        message: 'Недопустимо импользование спецсимволов'
                    }
                })}
                name='name' type='text' className='register__input' disabled={props.isLoading}/>
                <span className='register__error'>{errors?.name && errors?.name.message}</span>
                <label className='register__label'>E-mail</label>
                <input 
                {...register('email', {
                    required: 'Пожалуйста, введите Ваш email',
                    pattern: {
                        // eslint-disable-next-line no-useless-escape
                        value: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
                        message: 'Неверный формат email'
                    }
                })}
                name='email' type='email' className='register__input' disabled={props.isLoading}/>
                <span className='register__error'>{errors?.email && errors?.email.message}</span>
                <label className='register__label'>Пароль</label>
                <input 
                {...register('password', {
                    required: 'Пожалуйста, создайте пароль',
                    pattern: {
                        value: /^[a-zA-Z0-9]+$/,
                        message: 'Допускаются строчные и прописные латинские буквы, цифры'
                    }
                })}
                name='password' type='password' className='register__input' disabled={props.isLoading}/>
                <span className='register__error'>{errors?.password && errors?.password.message}</span>
                <span className='register__submit-error'>{toggleError(props.error)}</span>
                <button className='register__button' type='submit' disabled={!isValid || props.isLoading}>Зарегистрироваться</button>
                <p className='register__login'>Уже зарегистрированы?<Link to='/signin' className='register__login-link'>Войти</Link></p>
            </form>
        </div>
    );
}
  
export default Register;