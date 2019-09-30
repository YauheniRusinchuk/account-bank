import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'
import Main from './components/Main'
import Cart from './components/Cart'

import './App.css';

function App() {
      return (
          <BrowserRouter>
            <Switch>
                <Route path='/login' component={Login} />
                    <Home>
                        <Route component={({match}) =>
                            <div>
                                <Route exact path='/' component={Main} />
                                <Route path='/carts' component={Cart} />
                            </div>
                        } />
                    </Home>
            </Switch>
        </BrowserRouter>
      );
}

export default App;
