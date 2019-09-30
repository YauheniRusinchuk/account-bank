import React from 'react'
import CardView from './CardView'

function Card() {
    return (
        <div className='cart_container'>
            <p>КАРТЫ</p>

            <div className='carts_lists'>
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
