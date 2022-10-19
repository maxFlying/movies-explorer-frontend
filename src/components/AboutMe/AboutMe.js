import React from 'react';
import './AboutMe.css';
import PortfolioImage from '../../images/portfolio-link.svg'

function AboutMe() {
    return (
        <section className='about-me'>
            <h2 className='about-me__title'>Студент</h2>
            <div className='about-me__student'>
                <div className='about-me__student-resume'>
                    <h3 className='about-me__student-name'>Макс</h3>
                    <p className='about-me__student-prof'>Фронтенд-разработчик, 26 лет</p>
                    <p className='about-me__student-bio'>Я родился в Нальчике, живу в Москве, закончил МГТУ им. Н.Э. Баумана. Есть любимая девушка и кот. Увлекаюсь нумизматикой и спортом. Хочу увидеть весь мир. В 2022 начал изучать веб-разработку. Учиться планирую всю жизнь!</p>
                    <a className='about-me__student-github' href='https://github.com/maxFlying'>Github</a>
                </div>
                <div className='about-me__student-photo'></div>
            </div>
            <div className='about-me__portfolio'>
                <p className='about-me__portfolio-title'>Портфолио</p>
                <ul className='about-me__portfolio-list'>
                    <li className='about-me__portfolio-list-item'>
                        <a className='about-me__portfolio-link' href='https://github.com/maxFlying/how-to-learn'>Статичный сайт</a>
                        <img className='about-me__portfolio-image' alt='img' src={PortfolioImage}/>
                    </li>
                    <li className='about-me__portfolio-list-item'>
                        <a className='about-me__portfolio-link' href='https://maxflying.github.io/russian-travel/index.html'>Адаптивный сайт</a>
                        <img className='about-me__portfolio-image' alt='img' src={PortfolioImage}/>
                    </li>
                    <li className='about-me__portfolio-list-item'>
                        <a className='about-me__portfolio-link' href='https://maxflying.students.nomoredomains.sbs/sign-in'>Одностраничное приложение</a>
                        <img className='about-me__portfolio-image' alt='img' src={PortfolioImage}/>
                    </li>   
                </ul>
            </div>
        </section>
    );
}
  
export default AboutMe;