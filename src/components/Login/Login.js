import React from 'react';
import { Link } from 'react-router-dom';
import RegisterHeader from '../RegisterHeader/RegisterHeader';
import './Login.css';
import { useForm } from 'react-hook-form';

function Login(props) {

    const [loginData, setLoginData] = React.useState({
        email: '',
        password: '',
    });

    const {
        register,
        formState: { errors, isValid },
        handleSubmit
    } = useForm({
        mode: 'onBlur'
    });
    
    const handleChange = (evt) => {
        const { name, value } = evt.target;
        setLoginData({
            ...loginData,
            [name]: value,
        });
    };
    
    const handleSubmitForm = () => {
        const data = loginData;
        props.onLogin(data);
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
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i,
                        message: 'Неверный формат email'
                    }
                })}
                onChange={handleChange} value={loginData.email} className='login__input' type='email' name='email'/>
                <span className='register__error'>{errors?.email && errors?.email.message}</span>
                <label className='login__label'>Пароль</label>
                <input 
                {...register('password', {
                    required: 'Пожалуйста, введите Ваш пароль',
                })}
                onChange={handleChange} value={loginData.password} className='login__input' type='password' name='password'/>
                <span className='register__error'>{errors?.password && errors?.password.message}</span>
                <span className='login__submit-error'>{toggleError(props.error)}</span>
                <button className='login__button' type='submit' disabled={!isValid}>Войти</button>
                <p className='login__register'>Ещё не зарегистрированы?<Link to='/signup' className='login__register-link'>Регистрация</Link></p>
            </form>
        </>
    );
}
  
export default Login;