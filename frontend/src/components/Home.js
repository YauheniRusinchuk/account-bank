import React from 'react'
import Header from './Header'


function Home(props) {
    return(
        <div>
            <Header />
            {props.children}
        </div>
    )
}


export default Home;
