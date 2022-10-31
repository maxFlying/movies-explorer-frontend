import React from 'react';
import './SearchForm.css';

function SearchForm() {
    return (
        <section className='search'>
            <div className='search__form'>
                <input className='search__form-string' placeholder='Фильм' type='text'></input>
                <button className='search__form-submit' type='submit'>Найти</button>
            </div>
	        <div className='switch'>
		        <input className='switch__checkbox' type="checkbox" />
                <p className='switch__description'>Короткометражки</p>
	        </div>
        </section>
    );
}
  
export default SearchForm;