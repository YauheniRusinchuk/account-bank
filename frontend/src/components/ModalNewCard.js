import React from 'react'
import icon_close from '../assets/close.png'

function ModalNewCard({handleClose}) {


    function handleSubmit(e) {
        e.preventDefault();
        console.log("CLICK NEW CARD")
    }


    return (
        <div className='modal_card'>
            <img onClick={handleClose} className='close_icon_btn' src={icon_close} alt='close_icon' />
            <div className='modal_card_body'>
                <p>НОВАЯ КАРТА</p>
                <form onClick={handleSubmit} className='form_modal'>
                    <span>номер карты</span>
                    <input type='text' placeholder='4232-4222-2232-222' />
                    <span>годна до</span>
                    <input className='card_3_nubmer' type='text' placeholder='10/20' />
                    <span>3 цифры</span>
                    <input className='card_3_nubmer' type='text' placeholder='123' />
                    <span>имя и фамилия</span>
                    <input type='text' placeholder='Имя' />
                    <input type='text' placeholder='Фамилия' />
                    <button>ДОБАВИТЬ</button>
            </form>
            </div>
        </div>
    )
}


export default ModalNewCard;
