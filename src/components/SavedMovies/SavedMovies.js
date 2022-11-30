import React from 'react';
import './SavedMovies.css';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import SearchForm from '../Movies/SearchForm/SearchForm';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function SavedMovies(props) {
    const [searchValue, setSearchValue] = React.useState({
        nameRU: '',
    });
    const [filteredUserMovies, setFilteredUserMovies] = React.useState(props.userMovies);
    const [isCheckbox, setIsCheckbox] = React.useState(false);
    const [searchInfo, setSearchInfo] = React.useState('');

    React.useEffect(() => {
        setFilteredUserMovies(props.userMovies);
    }, [props.userMovies]);

    const searchUserMovie = (value) => {
        setSearchValue(value);
        const filterUser = props.userMovies.filter((item) => {
            return item.nameRU.toLowerCase().includes(searchValue.nameRU.toLowerCase());
        })
        if(!isCheckbox) {
            console.log(isCheckbox)
            const storageFilteredShortUserMovies = filterUser.filter((item) => item.duration < 40);
            setFilteredUserMovies(storageFilteredShortUserMovies);
        } else {
            setFilteredUserMovies(filterUser);
        }
    }

    React.useEffect(() => {
        if(filteredUserMovies.length === 0) {
            setSearchInfo('Ничего не найдено')
        } else {
            setSearchInfo('')
        }
    }, [filteredUserMovies]);

    return (
        <>
            <Header openBurger={props.openBurger} loggedIn={props.loggedIn}/>
            <main className='saved-movies'>
                <SearchForm searchValue={searchValue}
                setSearchValue={setSearchValue}
                searchUserMovie={searchUserMovie}
                setIsCheckbox={setIsCheckbox}
                isCheckbox={isCheckbox}
                />
                <MoviesCardList isSaved={true} 
                filteredUserMovies={filteredUserMovies} 
                filteredMovies={filteredUserMovies} 
                userMovies={props.userMovies} 
                handleMovieDelete={props.handleMovieDelete}
                searchInfo={searchInfo}/>
            </main>
            <Footer/>
        </>
    );
}
  
export default SavedMovies;