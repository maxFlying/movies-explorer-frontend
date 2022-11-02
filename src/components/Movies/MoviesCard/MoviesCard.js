import React from 'react';
import './MoviesCard.css';
import MoviePoster from '../../../images/movies-pic.jpg'

function MoviesCard(props) {

    const movieButtonClassName = `movie__button ${
      props.isSaved  ? 'movie__button_is-delete' : props.isLiked ? 'movie__button_is-like' : 'movie__button'
    }`;

    const MovieButtonDescription = `${
        props.isLiked ? '' : props.isSaved ? '' : 'Сохранить'
    }`;

    return (
        <div className='movie'>
            <div className='movie__about-container'>
                <h3 className='movie__title'>В погоне за Бенкси</h3>
                <p className='movie__duration'>27 минут</p>
            </div>
            <img className='movie__poster' src={MoviePoster} alt='Обложка к фильму'/>
            <button className={movieButtonClassName} type='button'>{MovieButtonDescription}</button>
        </div>
    );
}
  
export default MoviesCard;