import React from 'react'
import CardView from './CardView'

function Card() {
    return (
        <div className='cart_container'>
            <p>КАРТЫ</p>
            <div className='carts_lists'>
                <button className='new_add_cart'>
                    ДОБАВИТЬ НОВУЮ КАРТУ
                </button>
                <CardView />
                <CardView />
                <CardView />
                <CardView />
                <CardView />
            </div>
        </div>
    )
}


export default Card;
