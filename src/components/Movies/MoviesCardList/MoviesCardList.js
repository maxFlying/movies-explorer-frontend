import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MoviesCardList(props) {
    return (
        <section className='movies-grid'>
            <MoviesCard isLiked={props.isLiked} isSaved={props.isSaved}/>
            <MoviesCard isSaved={props.isSaved}/>
            <MoviesCard isLiked={props.isLiked} isSaved={props.isSaved}/>
            <MoviesCard isSaved={props.isSaved}/>
            <MoviesCard isSaved={props.isSaved}/>
        </section>
    );
}
  
export default MoviesCardList;