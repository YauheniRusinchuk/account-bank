import React from 'react'
import {Link} from 'react-router-dom'
import icon_del from '../assets/delete.png'



function CardView() {
    return (
        <div className='cartview_container'>

            <img className='delete_btn_card' src={icon_del} alt='card_delete' />

            <Link to='/'>4222-2321-2342-2314</Link>
            <p>01/20</p>
            <p>Eugene Rusinchuk</p>
        </div>
    )
}

export default CardView;
