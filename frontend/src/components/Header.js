import React from 'react'
import Logout from './Logout'
import {Link} from 'react-router-dom'


function Header() {
    return (
        <div className='header_container'>
            <div className='header_menu'>
                <Link to="/">Главная</Link>
                <Link to="/cards">Мои карты</Link>
                <Link to='/todo'>Мои заметки</Link>
                <Link to='/'>Мои платежи</Link>
            </div>
            <Logout />
        </div>
    )
}

export default Header;
