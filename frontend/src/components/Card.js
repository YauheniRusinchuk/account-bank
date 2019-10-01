import React, {useState} from 'react'
import CardView from './CardView'
import ModalNewCard from './ModalNewCard'

function Card() {

    const [isNew, setNew] = useState(false);

    return (
        <div className='cart_container'>
            <p>КАРТЫ</p>
            <div className='carts_lists'>
                <button onClick={() => setNew(true)} className='new_add_cart'>
                    ДОБАВИТЬ НОВУЮ КАРТУ
                </button>
                <CardView />
                <CardView />
                <CardView />
                <CardView />
                <CardView />
                <CardView />
            </div>
            {isNew && <ModalNewCard />}
        </div>
    )
}


export default Card;
