import React from 'react';
import './Modal.css';
import './ModalSuccess.css';
import { GrStatusGood } from "react-icons/gr";

const ModalSuccess = () => {
    return (
        <div className="modal modalsuccess">
            <div className='modal__contanair'>
                <GrStatusGood size={100} color='#1fcb05'/>
                <h4>Email enviado com sucesso</h4>
            </div>
        </div>
    )
}

export default ModalSuccess;