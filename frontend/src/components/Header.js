import React from 'react'
import Logout from './Logout'
import {Link} from 'react-router-dom'


function Header() {
    return (
        <div className='header_container'>
            <div className='header_menu'>
                <a href="">Последние действия</a>
                <Link to="/carts">Ваши карты</Link>
            </div>
            <Logout />
        </div>
    )
}

export default Header;
