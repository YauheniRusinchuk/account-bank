import React from 'react'
import {Link} from 'react-router-dom'
import cards_photo from '../assets/debit-card.png'
import notes from '../assets/notes.png'
import cash from '../assets/cash.png'

function Main() {
    return (
        <div className='main_container'>
            <p>ГЛАВНАЯ</p>
            <div className='main_wrapper_container'>
                <div className='list_menu'>
                    <Link to='/cards'>
                        <img src={cards_photo} alt='cards_img' />
                        <p>Мои карты</p>
                    </Link>
                    <Link to='/cards'>
                        <img src={notes} alt='cards_img' />
                        <p>Мои заметки</p>
                    </Link>
                    <Link to='/cards'>
                        <img src={cash} alt='cards_img' />
                        <p>Мои платежи</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}


export default Main;
