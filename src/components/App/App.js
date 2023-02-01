import React from 'react';
import { Route, Switch, useHistory} from 'react-router-dom';
import './App.css';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFoundError from '../NotFoundError/NotFoundError';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import mainApi from '../../utils/MainApi';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import ProtectedRouteIsAuth from '../ProtectedRoute/ProtectedRouteIsAuth';


function App() {

    const [isBurgerMenu, setIsBurgerMenu] = React.useState(false);
    const [currentUser, setCurrentUser] = React.useState({});
    const [userMovies, setUserMovies] = React.useState([]);
    const history = useHistory();
    const [loggedIn, setLoggedIn] = React.useState(false);
    const [error, serError] = React.useState('');
    const [response, setResponse] = React.useState(null);
    const [isLoading, setIsloading] = React.useState(false);
    
    const isAuth = localStorage.getItem('isAuth');

    const openBurger = () => {
        setIsBurgerMenu(true);
    }
    
    const closeBurger = () => {
        setIsBurgerMenu(false);
    }

    React.useEffect(() => {
        if(loggedIn) {
            mainApi
            .getUserInfo()
            .then((res) => {
                setCurrentUser(res);
            })
            .catch((err) => {
                console.log(err);
            });
        }
    }, [loggedIn]);
    
    React.useEffect(() => {
        if(loggedIn) {
            mainApi
            .getSavedMovies()
            .then((res) => {
                setUserMovies(res);
            })
            .catch((err) => {
                console.log(err);
            });
        }
    }, [loggedIn]);

    React.useEffect(() => {
        serError('');
    }, [loggedIn]);

    const checKToken = () => {
        if (!isAuth) {
            history.push('/');
            return;
        }

        mainApi
        .getUserInfo()
        .then((res) => {
            setCurrentUser(res);
            setLoggedIn(true);
        })
        .catch((err) => {
            localStorage.removeItem('isAuth');
            localStorage.removeItem('jwt');  
            localStorage.removeItem('checkbox');
            localStorage.removeItem('allMovies');
            localStorage.removeItem('filteredMovies');
            localStorage.removeItem('filteredShortMovie');
            localStorage.removeItem('inputValue');
            history.push('/')
            console.log(err);
        })
    }

    React.useEffect(() => {
        checKToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const onLogin = (data) => {
        setIsloading(true);
        return mainApi
            .authorize(data)
            .then((res) => {
                localStorage.setItem('isAuth', true);
                checKToken();
                setLoggedIn(true);
                history.push('/movies');
            })
            .catch((err) => {
                console.log(err);
                serError(err);
            })
            .finally(() => {
                setIsloading(false);
            });
    }
    
    const onRegister = (data) => {
        setIsloading(true);
        return mainApi
            .register(data)
            .then(() => {
                onLogin(data);
            })
            .catch((err) => {
                console.log(err);
                serError(err);
            })
            .finally(() => {
                setIsloading(false);
            });
    }

    const onLogout = () => {
        return mainApi
            .logout()
            .then(() => {
                setLoggedIn(false);
                localStorage.removeItem('jwr');  
                localStorage.removeItem('isAuth');
                localStorage.removeItem('checkbox');
                localStorage.removeItem('allMovies');
                localStorage.removeItem('filteredMovies');
                localStorage.removeItem('filteredShortMovie');
                localStorage.removeItem('inputValue');
                history.push('/');
            })
            .catch((err) => {
                console.log(err);
            })
        
    };

    const handleUpdateUser = (data) => {
        setIsloading(true);
        return mainApi
            .editUserInfo(data)
            .then((res) => {
                setCurrentUser(res);
                setResponse(true);
            })
            .catch((err) => {
                console.log(err);
                setResponse(false);
                serError(err);
            })
            .finally(() => {
                setIsloading(false);
            });
    };

    const handleMovieSave = (movie) => {
        mainApi
            .addUserMovie(movie)
            .then((res) => {
                console.log(res);
                setUserMovies([res, ...userMovies]);
              })
              .catch((err) => {
                console.log(err);
              });
    };

    const handleMovieDelete = (movie) => {
        mainApi
            .deleteUserMovie(movie._id)
            .then(() => {
                setUserMovies((state) => state.filter((c) => c.movieId !== movie.movieId));
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const toggleCardStatus = (movie) => {
        const likedMovie = userMovies.some((i) => i.movieId === movie.id);

        if(!likedMovie) {
            handleMovieSave(movie);
        } else {
            handleLikeMovieDelete(movie);
        }
    };

    const handleLikeMovieDelete = (movie) => {
        const savedMovie = userMovies.filter((i) => i.movieId === movie.id)
    
        mainApi
            .deleteUserMovie((savedMovie)[0]._id)
            .then(() => {
                setUserMovies((state) => state.filter((c) => c.movieId !== movie.id));
            })
            .catch((err) => {
                console.log(err);
            });
    };


    return (
        <CurrentUserContext.Provider value={currentUser}>
            <>
                <Switch>
                    <Route exact path="/">
                        <Main loggedIn={loggedIn}/>
                    </Route>
                    <ProtectedRouteIsAuth
                        exact path="/signup"
                        component={Register}
                        onRegister={onRegister}
                        error={error}
                        isAuth={isAuth}
                        isLoading={isLoading}
                    />
                    <ProtectedRouteIsAuth
                        exact path="/signin"
                        component={Login}
                        onLogin={onLogin}
                        error={error}
                        isAuth={isAuth}
                        isLoading={isLoading}
                    />
                    <ProtectedRoute
                        exact path="/movies"
                        component={Movies}
                        openBurger={openBurger}
                        loggedIn={loggedIn}
                        toggleCardStatus={toggleCardStatus}
                        userMovies={userMovies}
                        isAuth={isAuth}
                    />
                    <ProtectedRoute
                        exact path="/saved-movies"
                        component={SavedMovies}
                        openBurger={openBurger} 
                        loggedIn={loggedIn} 
                        userMovies={userMovies} 
                        handleMovieDelete={handleMovieDelete}
                        isAuth={isAuth}
                    />
                    <ProtectedRoute
                        exact path="/profile"
                        component={Profile}
                        openBurger={openBurger} 
                        onLogout={onLogout} 
                        handleUpdateUser={handleUpdateUser} 
                        error={error} 
                        response={response}
                        isAuth={isAuth}
                        isLoading={isLoading}
                    />
                    <Route exact path="*">
                        <NotFoundError />
                    </Route>
                </Switch>
                <BurgerMenu isOpen={isBurgerMenu} closeBurger={closeBurger}/>
            </>
        </CurrentUserContext.Provider>
  );
}

export default App;
