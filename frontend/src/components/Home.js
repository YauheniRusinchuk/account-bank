import React, {Fragment} from 'react'
import Header from './Header'
import Main from './Main'
import Cart from './Cart'
import {Switch, Route} from 'react-router-dom'

function Home() {
    return(
        <Fragment>
            <Header />
            <div>
                <Route exact path='/' component={Main} />
                <Route path='/carts' component={Cart} />
            </div>
        </Fragment>
    )
}


export default Home;
