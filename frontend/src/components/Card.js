import React, {useState} from 'react'
import CardView from './CardView'
import ModalNewCard from './ModalNewCard'

function Card() {

    const [isNew, setNew] = useState(false);

    function handleClose() {
        setNew(false)
    }

    return (
        <div className='cart_container'>
            <p>КАРТЫ</p>
            <button onClick={() => setNew(true)} className='new_add_cart'>
                ДОБАВИТЬ НОВУЮ КАРТУ
            </button>
            <div className='carts_lists'>
                <CardView />
                <CardView />
            </div>
            {isNew && <ModalNewCard handleClose={handleClose} />}
        </div>
    )
}


export default Card;
