import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Main from '../Main/Main'

function App() {
  return (
    <div className="app">
      <Switch>
        <Route exact path='/'>
          <Main />
        </Route>

      </Switch>
      
    </div>
  );
}

export default App;
