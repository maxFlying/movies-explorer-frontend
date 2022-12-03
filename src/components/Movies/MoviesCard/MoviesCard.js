import React from 'react';
import './MoviesCard.css';
import { Switch, Route } from 'react-router-dom';

function MoviesCard({ movie, isSaved, toggleCardStatus, handleMovieDelete, userMovies}) {

    const searchingMoviePoster = `https://api.nomoreparties.co${movie.image.url}`;
    const savedMoviePoster = `${movie.image}`;
    const isLiked = userMovies.some((i) => i.movieId === movie.id);

    const movieButtonClassName = `movie__button ${
        isSaved  ? 'movie__button_is-delete' : isLiked ? 'movie__button_is-like' : 'movie__button'
    }`;

    const MovieButtonDescription = `${
        isLiked ? '' : isSaved ? '' : 'Сохранить'
    }`;

    const toggleClickLike = () => {
        toggleCardStatus(movie)
        console.log(movie)
    };

    const toggleClickDel = () => {
        console.log(movie)
        handleMovieDelete(movie)
    };

    function getTimeFromMins(mins) {
        let hours = Math.trunc(mins/60);
        let minutes = mins % 60;
        if(hours === 0){
            return `${minutes} минут`;
        } else {
            return `${hours}ч ${minutes}м`;
        }
    };

    return (
        <Switch>
            <Route path='/movies'>
                <div className='movie'>
                    <div className='movie__about-container'>
                        <h3 className='movie__title'>{movie.nameRU}</h3>
                        <p className='movie__duration'>{getTimeFromMins(movie.duration)}</p>
                    </div>
                    <a href={movie.trailerLink} className='movie__trailer' target='_blank' rel="noreferrer">
                        <img className='movie__poster' src={searchingMoviePoster} alt='Обложка к фильму'/>
                    </a>
                    <button onClick={toggleClickLike} className={movieButtonClassName} type='button'>{MovieButtonDescription}</button>
                </div>
            </Route>
            <Route path='/saved-movies'>
                <div className='movie'>
                    <div className='movie__about-container'>
                        <h3 className='movie__title'>{movie.nameRU}</h3>
                        <p className='movie__duration'>{`${movie.duration} мин.`}</p>
                    </div>
                    <a href={movie.trailerLink} className='movie__trailer' target='_blank' rel="noreferrer">
                        <img className='movie__poster' src={savedMoviePoster} alt='Обложка к фильму'/>
                    </a>
                    <button onClick={toggleClickDel} className={movieButtonClassName} type='button'>{MovieButtonDescription}</button>
                </div>
            </Route>
        </Switch>
    );
}
  
export default MoviesCard;