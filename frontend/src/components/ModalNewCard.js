import React from 'react'
import icon_close from '../assets/close.png'

function ModalNewCard({handleClose}) {
    return (
        <div className='modal_card'>
            <img onClick={handleClose} className='close_icon_btn' src={icon_close} alt='close_icon' />
            <div className='modal_card_body'>

            </div>
        </div>
    )
}


export default ModalNewCard;
