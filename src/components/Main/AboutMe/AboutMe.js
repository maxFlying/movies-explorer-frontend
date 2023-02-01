import React from 'react';
import './AboutMe.css';

function AboutMe() {
    return (
        <section className='about-me' id='student'>
            <h2 className='about-me__title'>Студент</h2>
            <div className='about-me__student'>
                <div className='about-me__student-resume'>
                    <h3 className='about-me__student-name'>Макс</h3>
                    <p className='about-me__student-prof'>Фронтенд-разработчик, 26 лет</p>
                    <p className='about-me__student-bio'>Я родился в Нальчике, живу в Москве, закончил МГТУ им. Н.Э. Баумана. Есть любимая девушка и кот. Увлекаюсь нумизматикой и спортом. Хочу увидеть весь мир. В 2022 начал изучать веб-разработку. Учиться планирую всю жизнь!</p>
                    <a className='about-me__student-github' href='https://github.com/maxFlying' target={'_blank'} rel={'noreferrer'}>Github</a>
                </div>
                <div className='about-me__student-photo'></div>
            </div>
        </section>
    );
}
  
export default AboutMe;