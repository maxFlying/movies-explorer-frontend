import React from 'react';
import { Link } from 'react-router-dom';
import './RegisterHeader.css';

function RegisterHeader(props) {
    return (
            <header className='register-header'>
                <Link to='/' className='register-header__logo'/>
                <h1 className='register-header__title'>{props.HeaderTitle}</h1>
            </header>
    );
}

export default RegisterHeader;