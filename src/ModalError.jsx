import React from 'react';
import './Modal.css';
import './ModalError.css';
import { BiError } from "react-icons/bi";

const ModalError = () => {
    return (
        <div className="modal modalerror">
            <div className='modal__contanair'>
                <BiError size={100} color='#ff1100' />
                <h4>Falha ao enviar</h4>
                <h4 id='modal__h4'>Tenta novamente</h4>
            </div>
        </div>
    )
}

export default ModalError;