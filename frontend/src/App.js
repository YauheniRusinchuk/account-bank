import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'

import './App.css';

function App() {
      return (
          <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/login' component={Login} />
                </Switch>
            </BrowserRouter>
      );
}

export default App;
