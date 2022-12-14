import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Movies.css';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import SearchForm from './SearchForm/SearchForm';

function Movies(props) {
    return (
        <page>
            <Header openBurger={props.openBurger}/>
            <main className='movies'>
                <SearchForm />
                <MoviesCardList isLiked={true}/>
                <button className='movies__button-more'>Ещё</button>
            </main>
            <Footer />
        </page>

    );
}
  
export default Movies;