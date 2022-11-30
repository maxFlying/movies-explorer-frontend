import React from 'react';
import { NavLink } from 'react-router-dom';
import './BurgerMenu.css';
import AccountLogo from '../../images/account-icon.svg'

function BurgerMenu(props) {
    return (
        <div className={
            props.isOpen
            ? `burger burger_is-active`
            : `burger`
        }>
            <button onClick={props.closeBurger} className='burger__close' type='button'></button>
            <div className='burger__link-container'>
                <NavLink onClick={props.closeBurger} exact to='/' className='burger__link' activeClassName='burger__link_is-active'>Главная</NavLink>
                <NavLink onClick={props.closeBurger} to='/movies' className='burger__link' activeClassName='burger__link_is-active'>Фильмы</NavLink>
                <NavLink onClick={props.closeBurger} to='/saved-movies' className='burger__link' activeClassName='burger__link_is-active'>Сохранённые фильмы</NavLink>
                <NavLink onClick={props.closeBurger} to='/profile' className='burger__account'>Аккаунт<img src={AccountLogo} className='account__logo' alt=''/></NavLink>
            </div>
        </div>
    );
}
  
export default BurgerMenu;