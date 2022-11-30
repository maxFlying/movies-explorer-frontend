import React from 'react';
import './Portfolio.css';
import PortfolioImage from '../../../images/portfolio-link.svg'

function Portfolio() {
    return (
        <section className='portfolio'>
            <p className='portfolio-title'>Портфолио</p>
            <ul className='portfolio-list'>
                <li className='portfolio-list-item'>
                    <a className='portfolio-link' href='https://github.com/maxFlying/how-to-learn' target={'_blank'} rel={'noreferrer'}>Статичный сайт</a>
                    <img className='portfolio-image' alt='img' src={PortfolioImage}/>
                </li>
                <li className='portfolio-list-item'>
                    <a className='portfolio-link' href='https://maxflying.github.io/russian-travel/index.html' target={'_blank'} rel={'noreferrer'}>Адаптивный сайт</a>
                    <img className='portfolio-image' alt='img' src={PortfolioImage}/>
                </li>
                <li className='portfolio-list-item'>
                    <a className='portfolio-link' href='https://maxflying.students.nomoredomains.sbs/sign-in' target={'_blank'} rel={'noreferrer'}>Одностраничное приложение</a>
                    <img className='portfolio-image' alt='img' src={PortfolioImage}/>
                </li>   
            </ul>
        </section>
    );
}
  
export default Portfolio;