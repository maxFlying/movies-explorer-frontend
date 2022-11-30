import React from 'react';
import './Techs.css';

function Techs() {
    return (
        <section className='techs'>
            <h2 className='techs__title'>Технологии</h2>
            <div className='techs__description'>
                <h3 className='techs__description-title'>7 технологий</h3>
                <p className='techs__description-subtitle'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
                <ul className='techs__description-list'>
                    <li className='techs__description-list-item'>HTML</li>
                    <li className='techs__description-list-item'>CSS</li>
                    <li className='techs__description-list-item'>JS</li>
                    <li className='techs__description-list-item'>React</li>
                    <li className='techs__description-list-item'>Git</li>
                    <li className='techs__description-list-item'>Express.js</li>
                    <li className='techs__description-list-item'>mongoDB</li>
                </ul>
            </div>
        </section>
    );
}
  
export default Techs;