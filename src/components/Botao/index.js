import React from 'react'
import './Botao.css'

const enviarMensagenToWhatsApp = () => {

    const contatoTEL = '5511913400833'
    const menssage = "Olá! Gostaria de marca um horário: n/${}"

    const formattedPhoneNumber = contatoTEL.replace(/[-()]/g, '');

    const url = `https://wa.me/${formattedPhoneNumber}?text=${encodeURIComponent(menssage)}`

    window.open(url);
}

const Botao = (props) => {
    return (
        <button className='botao' onClick={enviarMensagenToWhatsApp}>
            {props.children}
        </button>
    )
}

export default Botao