import React from 'react';
import Header from '../Header/Header';
import './Profile.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useForm } from 'react-hook-form';

function Profile(props) {
    const currentUser = React.useContext(CurrentUserContext);

    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');

    const {
        register,
        formState: { errors, isValid },
        handleSubmit,
        watch
    } = useForm({
        mode: 'onBlur'
    });

    // console.log(watch('name'))
    const disabledButton = () => {
        if(isValid) {
            return false 
        } else if ((watch('name') === name || watch('email') === email)) {
            return false
        } else {
            return true;
        }
    }

    const handleChangeName = (evt) => {
        setName(evt.target.value);
    };

    const handleChangeDescription =(evt) => {
        setEmail(evt.target.value);
    };

    const handleSubmitForm = () => {
        props.handleUpdateUser({
            name: name,
            email: email,
        })
    };

    React.useEffect(() => {
        setName(currentUser.name);
        setEmail(currentUser.email);
    }, [currentUser]);
    

    const toggleError = (err) => {
        if(err.status === 500) {
            return `Пользователь с таким email уже зарегистрирован!`
        } else {
            return ``
        }
    };

    return (
        <>
            <Header openBurger={props.openBurger} loggedIn={true}/>
            <main className='profile'>
                <h1 className='profile__title'>Привет, {currentUser.name}!</h1>
                <form className='profile__form' onSubmit={handleSubmit(handleSubmitForm)}>
                    <section className='profile__info-block'>
                        <div className='profile__info'>
                            <p className='profile__info-field'>Имя</p>
                            <input 
                            {...register('name', {
                                minLength: {
                                    value: 2,
                                    message: 'Дожно быть минимум 2 буквы'
                                },
                                maxLength: {
                                    value: 30,
                                    message: 'Должно быть не больше 30 букв'
                                },
                                pattern: {
                                    value: /^[а-яА-ЯёЁa-zA-Z0-9]+$/,
                                    message: 'Недопустимо импользование спецсимволов'
                                }
                            })}
                            name='name' className='profile__info-value' onChange={handleChangeName} value={name || ''} disabled={props.isLoading}></input>
                        </div>
                        <span className='profile__error'>{errors?.name && errors?.name.message}</span>
                        <div className='profile__info'>
                            <p className='profile__info-field'>E-mail</p>
                            <input 
                            {...register('email', {
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i,
                                    message: 'Неверный формат email'
                                }
                            })}
                            name='email' className='profile__info-value' onChange={handleChangeDescription} value={email || ''} disabled={props.isLoading}></input>
                        </div>
                        <span className='profile__error'>{errors?.email && errors?.email.message}</span>
                    </section>
                    <span className='profile__error-edit'>{props.response ? 'Успешно!' : toggleError(props.error)}</span>
                    <button className='profile__button-edit' type='submit' disabled={disabledButton()}>Редактировать</button>
                    <button onClick={props.onLogout} className='profile__button-exit'>Выйти из аккаунта</button>
                </form>
            </main>
        </>
    );
}
  
export default Profile;