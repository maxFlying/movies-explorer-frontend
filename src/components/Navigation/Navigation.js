import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navigation.css';
import AccountLogo from '../../images/account-icon.svg'

function Navigation(prors) {

    if(!prors.loggedIn) {
        return (
            <nav className='navigation__auth'>
                <Link to='/signup' className='navigation__register'>Регистрация</Link>
                <Link to='signin' className='navigation__login'>Войти</Link>
            </nav>
        )
    } else {
        return (
            <>
                <div className='navigation'>
                    <nav className='navigation__movie'>
                        <NavLink to='/movies' className='navigation__movie-link' activeClassName='navigation__link_is-active'>Фильмы</NavLink>
                        <NavLink to='/saved-movies'className='navigation__movie-link' activeClassName='navigation__link_is-active'>Сохранённые фильмы</NavLink>
                    </nav>
                    <nav className='navigation__account'>
                        <NavLink to='/profile' className='navigation__account-link' activeClassName='navigation__link_is-active'>Аккаунт<img src={AccountLogo} className='account__logo' alt=''/></NavLink>
                    </nav>
                </div>
                <button onClick={prors.openBurger} className='navigation__burger'></button>
            </>
        )
    }
}
  
export default Navigation;