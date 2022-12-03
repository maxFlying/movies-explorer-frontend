import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Movies.css';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import SearchForm from './SearchForm/SearchForm';
import Preloader from './Preloader/Preloader';
import moviesApi from '../../utils/MoviesApi'

function Movies(props) {
    const storageAllMovies = JSON.parse(localStorage.getItem('allMovies') ?? '[]');
    const storageCheckboxStatus = JSON.parse(localStorage.getItem('checkbox'));

    const [isCheckbox, setIsCheckbox] = React.useState(storageCheckboxStatus);
    const [filteredMovies, setFilteredMovies] = React.useState([]);
    const [searchValue, setSearchValue] = React.useState('')
    const [isLoading, setIsLoading] = React.useState(false);
    const [searchInfo, setSearchInfo] = React.useState('');
    
    const searchMovie = (value) => {
        if(storageAllMovies.length === 0) {
            setIsLoading(true)
            moviesApi
            .getMovies()
            .then((allMovies) => {
                localStorage.setItem('allMovies', JSON.stringify(allMovies));
                localStorage.setItem('inputValue', value);
                setSearchValue(value); 
            })
            .catch((err) => {
                console.log(err);
                setSearchInfo('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз');
            })
            .finally(() => {
                setIsLoading(false);
            })
        } else {
            setSearchValue(value); 
            localStorage.setItem('inputValue', value);
        }
    }
        
    React.useEffect(() => {
        const storageAllMovies = JSON.parse(localStorage.getItem('allMovies') ?? '[]');
        const storageInputValue = localStorage.getItem('inputValue')
        const filter = storageAllMovies.filter((item) => {
            return item.nameRU.toLowerCase().includes(storageInputValue.toLowerCase());
        })
        localStorage.setItem('filteredMovies', JSON.stringify(filter));
        const storageFilteredMovies = JSON.parse(localStorage.getItem('filteredMovies'));
        const filterShortMovie = storageFilteredMovies.filter((item) => item.duration < 40);
        localStorage.setItem('filteredShortMovie', JSON.stringify(filterShortMovie))
        const storageFilteredShortMovies = JSON.parse(localStorage.getItem('filteredShortMovie'));
        
        if(isCheckbox) {
            localStorage.setItem('checkbox', true);
            setFilteredMovies(storageFilteredShortMovies);
        } else{
            setFilteredMovies(storageFilteredMovies)
            localStorage.setItem('checkbox', false);
        }

        if(filteredMovies.length === 0) {
            setSearchInfo('Ничего не найдено')
        } else {
            setSearchInfo('')
        }

    }, [filteredMovies.length, isCheckbox, searchValue])

    React.useEffect(() => {
        if(storageAllMovies.length === 0) {
            setSearchInfo('')
        }
    }, [storageAllMovies]);

    return (
        <>
            <Header openBurger={props.openBurger} loggedIn={props.loggedIn}/>
            <main className='movies'>
                <SearchForm searchMovie={searchMovie} 
                isCheckbox={isCheckbox} 
                setIsCheckbox={setIsCheckbox}
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