import React from 'react';
import { useHistory } from 'react-router-dom';
import './NotFoundError.css';

function NotFoundError() {
    const history = useHistory();

    return (
        <main className='not-found'>
            <h1 className='not-found__title'>404</h1>
            <p className='not-found__description'>Страница не найдена</p>
            <button onClick={history.goBack} className='not-found__button'>Назад</button>
        </main>
    );
}
  
export default NotFoundError;