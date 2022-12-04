import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';
import { Switch, Route } from 'react-router-dom';
import { DESKTOP_SCREEN,
    TABLET_SCREEN,
    DESKTOP_QUAN_MOVIES,
    TABLET_QUAN_MOVIES,
    MOBILE_QUAN_MOVIES,
    DESKTOP_QUAN_MORE_MOVIES,
    MOBILE_AND_TABLET_QUAN_MORE_MOVIES
} from '../../../utils/config';

function MoviesCardList(props) {
    const [innerWidth, setInnerWidth] = React.useState('');
    const [quantityMovies, setQuantityMovies] = React.useState('');
    const [quantityMoreMovies, setQuantityMoreMovies] = React.useState('');
    const [finalMoviesArray, setFinalMoviesArray] = React.useState([]);
    const [isActiveButtonMore, setIsActiveButtonMore] = React.useState(false);

    const buttonMoreClass = `movies__button-more ${
        isActiveButtonMore === false ? 'movies__button-more_is-unactive' : ''
    }`

    React.useEffect(() => {
        window.addEventListener('resize', () => setInnerWidth(document.documentElement.clientWidth));
    }, [])

    window.onresize = setTimeout(() => {
        setInnerWidth(document.documentElement.clientWidth)
    }, 1000);

    const calcQuantityMovies = (width) => {
        if(width > DESKTOP_SCREEN) {
            setQuantityMovies(DESKTOP_QUAN_MOVIES);
            setQuantityMoreMovies(DESKTOP_QUAN_MORE_MOVIES);
        } else if (width < DESKTOP_SCREEN && width > TABLET_SCREEN) {
            setQuantityMovies(TABLET_QUAN_MOVIES);
            setQuantityMoreMovies(MOBILE_AND_TABLET_QUAN_MORE_MOVIES);
        } else if (width < TABLET_SCREEN) {
            setQuantityMovies(MOBILE_QUAN_MOVIES);
            setQuantityMoreMovies(MOBILE_AND_TABLET_QUAN_MORE_MOVIES);
        }
    }

    React.useEffect(() => {
        calcQuantityMovies(innerWidth);
    }, [innerWidth]);

    React.useEffect(() => {
            setFinalMoviesArray(props.filteredMovies.slice(0, quantityMovies))
    }, [quantityMovies, props.filteredMovies]);

    const addMoreMovies = () => {
        setQuantityMovies(quantityMovies + quantityMoreMovies);
    }

    React.useEffect(() => {
        if(props.filteredMovies.length > quantityMovies) {
            setIsActiveButtonMore(true);
        } else {
            setIsActiveButtonMore(false);
        }
    }, [quantityMovies, props.filteredMovies]);

    return (
        <Switch>
            <Route path='/movies'>
                <section className='movies__result'>
                    <div className='movies-grid'>
                        {finalMoviesArray.map((movie) => (
                            <MoviesCard
                                key={movie.id || movie.movieId}
                                movie={movie}
                                isSaved={props.isSaved}
                                isLiked={props.isLiked}
                                toggleCardStatus={props.toggleCardStatus}
                                handleMovieDelete={props.handleMovieDelete}
                                filteredMovies={props.filteredMovies}
                                userMovies={props.userMovies}/>
                        ))}
                    </div>
                    <div className='search__info'>{props.searchInfo}</div>
                    <button className={buttonMoreClass} onClick={addMoreMovies}>Ещё</button>
                </section>
            </Route>
            <Route path='/saved-movies'>
            <section className='movies__result'>
                    <div className='movies-grid'>
                        {props.filteredMovies.map((movie) => (
                            <MoviesCard
                                key={movie.id || movie.movieId}
                                movie={movie}
                                isSaved={props.isSaved}
                                isLiked={props.isLiked}
                                toggleCardStatus={props.toggleCardStatus}
                                handleMovieDelete={props.handleMovieDelete}
                                filteredMovies={props.filteredMovies}
                                userMovies={props.userMovies}/>
                        ))}
                    </div>
                    <div className='search__info'>{props.searchInfo}</div>
                </section>
            </Route>
        </Switch>
    );
};
  
export default MoviesCardList;