import React, { useEffect, useState } from 'react';
import './Modal.css';
import { MdClose } from "react-icons/md";
import { LuSend } from "react-icons/lu";
import LoadearPopup from './LoadearPopup';
import ModalSuccess from './ModalSuccess';
import ModalError from './ModalError';
import axios from 'axios';

const inventoryData = [
    'Tipo de Serviço:',
    "Serviços Aduaneiros e Transitários",
    'Transporte de Mercadorias',
    'Porta Máquinas',
    'Reboque',
    'Máquina Retroescavadeira',
    'Rent a Car',
    'Venda de Água Potavel',
    'Oficina de Pesados',
];

function Modal({closeModal}) {
    const [options, setOptions] = useState([]);
    const [formData, setFormData] = useState({
        email: '',
        subject: '',
        message: '',
    });
    const [errors, setErrors] = useState({
        email: 'E-mail é Obrigatório',
        subject: 'Selecione tipo de Serviço',
        message: 'Mensagem é Obrigatória',
    });
    const [show, setShow] = useState(false);
    const [isModalLoading, setIsModalLoading] = useState(false);
    const [isModalSuccess, setIsModalSuccess] = useState(false);
    const [isModalError, setIsModalError] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: validateField(name, value) }); // Update errors on change
    };

    useEffect(() => {
        setOptions([...inventoryData]);
    }, [inventoryData]);

    const validateField = (fieldName, value) => {
        let error = '';
        switch (fieldName) {
          case 'email':
            if (!value.trim()) {
              error = 'E-mail é Obrigatório.';
            } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
              error = 'Formato de Email Inválido.';
            }
            break;
          case 'subject':
            if (value === 'Tipo de Serviço:') {
              error = 'Selecione tipo de Serviço.';
            }
            break;
          case 'message':
            if (!value.trim()) {
              error = 'Mensagem é Obrigatória.';
            }
            break;
          default:
            break;
        }
        return error;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        setShow(true);
    
        // Client-side validation
        const validationErrors = Object.values(errors).filter(Boolean);
        if (validationErrors.length > 0) {
            // alert('Please fix the following errors:\n' + validationErrors.join('\n'));
            return;
        }
    
        handleOpenLoading();

        let message = '';
        let subject = '';
        let email = '';

        Object.keys(formData).forEach((key) => {
            if (key === 'email') {
                email = formData[key];
            } else if (key === 'subject') {
                subject = formData[key];
            } else if (key === 'message') {
                message = formData[key];
            }
        });
    
        try {
            const url = 'https://www.api.transpc.ao/sendemail.php';
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            };
    
            const response = await axios.get(url, {params :{ email, subject, message }}, config);
    
            if (response.status === 200) {
                if(response.data === 'Email sent successfully!'){
                    handleCloseLoading();
                    setIsModalSuccess(true);
                    setTimeout(() => {
                        setIsModalSuccess(false);
                        closeModal();
                    }, 3500);
                } else {
                    handleCloseLoading();
                    setIsModalError(true);
                    setTimeout(() => {
                        setIsModalError(false);
                        closeModal();
                    }, 3500);                    
                }
            } else {
                handleCloseLoading();
                setIsModalError(true);
                setTimeout(() => {
                    setIsModalError(false);
                    closeModal();
                }, 3500);
            }
        } catch (error) {
            console.error('Error sending email:', error);
            handleCloseLoading();
            setIsModalError(true);
            setTimeout(() => {
                setIsModalError(false);
                closeModal();
            }, 3500);
        }
    };
    

    const handleOpenLoading = () =>{
        setIsModalLoading(true);
    }
    const handleCloseLoading = () => {
        setIsModalLoading(false);
    };

    return (
        <>
            <div className="modal" >
                <div className="modal__closemodal">
                    <button onClick={closeModal}>
                        <MdClose size={34} color='#000' />
                    </button>
                </div>
                <div className='modal__contanair'>
                    <div className="modal__select">
                        <form encType="application/json" onSubmit={handleSubmit}>
                            <h2>Solicitar Um Serviço</h2>
                            <div>
                                {/* <label>Email:</label> */}
                                <input 
                                    type='email' 
                                    placeholder='Email:'
                                    name='email' 
                                    value={formData.email}
                                    onChange={handleInputChange}
                                />
                            </div>
                            {show && errors.email && <span className="error">{errors.email}</span>}
                            <div>
                                {/* <label>Tipo de Serviço:</label> */}
                                <select
                                    value={formData.subject}
                                    onChange={handleInputChange}
                                    name='subject'
                                >
                                    {options.map((option, key) => (
                                        <option key={key} value={option}>
                                            {option}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            {show && errors.subject && <span className="error">{errors.subject}</span>}
                            <div>
                                {/* <label>Assunto:</label> */}
                                <textarea 
                                    name="message"
                                    placeholder="Escreva a sua mensagem aqui!"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                />
                            </div>
                            {show && errors.message && <span className="error">{errors.message}</span>}
                            <button type="submit">Enviar <LuSend size={22}/></button>
                            
                            <div className='modal__adrress'>
                                <h4>President Business Center Largo 4 de fevereiro, </h4>
                                <h4>4ª Andar, Sala 420-422 Luanda Angola</h4>
                            </div>
                        </form>
                    </div> 
                </div>
            </div>
            {isModalLoading && (
                <LoadearPopup />
            )}
            
            {isModalSuccess && (
                <ModalSuccess />
            )}
            
            {isModalError && (
                <ModalError />
            )}
        </>
    )
}

export default Modal;