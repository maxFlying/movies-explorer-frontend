import React from 'react';
import './SearchForm.css';
import { Switch, Route } from 'react-router-dom';


function SearchForm({ searchMovie, isCheckbox, setIsCheckbox, searchValue, setSearchValue, getAllMovies, searchUserMovie }) {
    
    const handleChangeSearch = (evt) => {
        const { name, value } = evt.target;
        setSearchValue({
            ...searchValue,
            [name]: value,
        });
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        getAllMovies();
        const value = searchValue;
        searchMovie(value);
    };

    const handleChangeCheckbox = () => {
        setIsCheckbox(!isCheckbox)
    };

    const handleSubmitSavedMovies = (evt) => {
        evt.preventDefault();
        const value = searchValue;
        searchUserMovie(value);
    };

    return (
        <Switch>
            <Route path='/movies'>
                <form className='search' onSubmit={handleSubmit}>
                    <div className='search__form'>
                        <input className='search__form-string' placeholder='Фильм' type='text' name='nameRU'
                        required value={searchValue.nameRU} onChange={handleChangeSearch}></input>
                        <button className='search__form-submit' type='submit'>Найти</button>
                    </div>
                    <div className='switch'>
                        <input className='switch__checkbox'
                        type="checkbox"
                        checked={!isCheckbox}
                        onChange={handleChangeCheckbox}
                        />
                        <p className='switch__description'>Короткометражки</p>
                    </div>
                </form>
            </Route>
            <Route path='/saved-movies'>
            <form className='search' onSubmit={handleSubmitSavedMovies}>
                    <div className='search__form'>
                        <input className='search__form-string' placeholder='Фильм' type='text' name='nameRU'
                        required value={searchValue.nameRU} onChange={handleChangeSearch}></input>
                        <button className='search__form-submit' type='submit'>Найти</button>
                    </div>
                    <div className='switch'>
                        <input className='switch__checkbox'
                        type="checkbox"
                        checked={!isCheckbox}
                        onChange={handleChangeCheckbox}
                        />
                        <p className='switch__description'>Короткометражки</p>
                    </div>
                </form>
            </Route>
        </Switch>
        
    );
}
  
export default SearchForm;