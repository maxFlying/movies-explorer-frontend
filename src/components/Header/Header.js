import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import './Header.css';

function Header(props) {

    return (
        <header className={`header ${props.HeaderBackground}`}>
            <Link to='/' className='header__logo'/>
            <Navigation openBurger={props.openBurger} loggedIn={props.loggedIn}/>
        </header>
    );
}
  
export default Header;