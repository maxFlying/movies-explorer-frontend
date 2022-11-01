import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFoundError from '../NotFoundError/NotFoundError';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import Navigation from '../Navigation/Navigation'

function App() {

    const [isBurgerMenu, setIsBurgerMenu] = React.useState(true);

    const openBurger = () => {
        setIsBurgerMenu(true);
        }
    
    const closeBurger = () => {
        setIsBurgerMenu(false);
    }
    

    return (   
        <div className="app">
            <Switch>
                <Route exact path="/">
                    <Main />
                </Route>
                <Route exact path="/movies">
                    <Movies openBurger={openBurger}/>
                </Route>
                <Route exact path="/saved-movies">
                    <SavedMovies openBurger={openBurger}/>
                </Route>
                <Route exact path="/profile">
                    <Profile openBurger={openBurger}/>
                </Route>
                <Route exact path="/signup">
                    <Register />
                </Route>
                <Route exact path="/signin">
                    <Login />
                </Route>
                <Route exact path="*">
                    <NotFoundError />
                </Route>
            </Switch>
            <Navigation />
            <BurgerMenu isOpen={isBurgerMenu} closeBurger={closeBurger}/>
        </div>
  );
}

export default App;
