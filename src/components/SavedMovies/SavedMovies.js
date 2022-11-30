import React from 'react';
import './SavedMovies.css';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import SearchForm from '../Movies/SearchForm/SearchForm';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function SavedMovies(props) {
    return (
        <page>
            <Header openBurger={props.openBurger}/>
            <main className='saved-movies'>
                <SearchForm />
                <MoviesCardList isSaved={true}/>
            </main>
            <Footer/>
        </page>
    );
}
  
export default SavedMovies;