import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Movies.css';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import SearchForm from './SearchForm/SearchForm';
import moviesApi from '../../utils/MoviesApi';
import Preloader from './Preloader/Preloader';

function Movies(props) {
    const [searchValue, setSearchValue] = React.useState({
        nameRU: '',
    });
    const [isCheckbox, setIsCheckbox] = React.useState(false);
    const [filteredMovies, setFilteredMovies] = React.useState([]);
    const [searchInfo, setSearchInfo] = React.useState('');
    const [isLoading, setIsLoading] = React.useState(false);
    
    const storageAllMovies = JSON.parse(localStorage.getItem('allMovies'));
    const storageFilteredMovies = JSON.parse(localStorage.getItem('filteredMovies'));
    const storageFilteredShortMovies = JSON.parse(localStorage.getItem('filteredShortMovie'));
    
    const getAllMovies = () => {
        setIsLoading(true)
        moviesApi
        .getMovies()
        .then((allMovies) => {
            localStorage.setItem('allMovies', JSON.stringify(allMovies));
        })
        .catch((err) => {
            console.log(err);
            setSearchInfo('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз')
        })
        .finally(() => {
            setIsLoading(false)
        })
    }
    
    const searchMovie = (value) => {
        setSearchValue(value); 
        const filter = storageAllMovies.filter((item) => {
            return item.nameRU.toLowerCase().includes(searchValue.nameRU.toLowerCase());
        })
        localStorage.setItem('filteredMovies', JSON.stringify(filter));
        const storageFilteredMovies = JSON.parse(localStorage.getItem('filteredMovies'));
        const filterShortMovie = storageFilteredMovies.filter((item) => item.duration < 40);
        localStorage.setItem('filteredShortMovie', JSON.stringify(filterShortMovie))
        if(!isCheckbox) {
            setFilteredMovies(storageFilteredShortMovies);
        } else{
            setFilteredMovies(storageFilteredMovies)
        }
    }

    React.useEffect(() => {
        if(storageFilteredMovies.length === 0) {
            setSearchInfo('Ничего не найдено')
        } else {
            setSearchInfo('')
        }

        if(storageFilteredShortMovies.length === 0) {
            setSearchInfo('Ничего не найдено')
        } else {
            setSearchInfo('')
        }
    }, [storageFilteredMovies, storageFilteredShortMovies]);

    return (
        <>
            <Header openBurger={props.openBurger} loggedIn={props.loggedIn}/>
            <main className='movies'>
                <SearchForm searchMovie={searchMovie} 
                isCheckbox={isCheckbox} 
                setIsCheckbox={setIsCheckbox}
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                getAllMovies={getAllMovies}
                />
                {isLoading ? <Preloader/> : <MoviesCardList filteredMovies={filteredMovies}
                toggleCardStatus={props.toggleCardStatus}
                userMovies={props.userMovies}
                searchInfo={searchInfo}
                /> }
            </main>
            <Footer />
        </>

    );
}
  
export default Movies;