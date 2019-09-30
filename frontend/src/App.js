import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'
import Main from './components/Main'
import Card from './components/Card'
import Todo from './components/Todo'


function App() {
      return (
          <BrowserRouter>
            <Switch>
                <Route path='/login' component={Login} />
                    <Home>
                        <Route component={({match}) =>
                            <div className='container_wrapper'>
                                <Route exact path='/' component={Main} />
                                <Route path='/cards' component={Card} />
                                <Route path='/todo' component={Todo} />
                            </div>
                        } />
                    </Home>
            </Switch>
        </BrowserRouter>
      );
}

export default App;
