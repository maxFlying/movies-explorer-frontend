import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className='footer'>
            <h2 className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</h2>
            <div className='footer__info'>
                <p className='footer__info-copyright'>© 2022</p>
                <nav className='footer__info-menu'>
                    <a className='footer__info-menu-link' href='https://practicum.yandex.ru/' target={'_blank'} rel={'noreferrer'}>Яндекс.Практикум</a>
                    <a className='footer__info-menu-link' href='https://github.com/maxFlying' target={'_blank'} rel={'noreferrer'}>Github</a>
                </nav>
            </div>
        </footer>
    );
}
  
export default Footer;