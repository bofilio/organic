import React, { useState, useEffect, useContext } from 'react'
import { ModalContext } from '../../contexts/ModalContext';
import CloseModal from './CloseModal';

const Modal:React.FC<{className:string}> = ({ children,className }) => {
    const [open, toggleOpen] = React.useContext(ModalContext);
    return (
        <div className={`${open ? "flex" : "hidden"} z-50 ${className}`} style={{marginTop:0,marginLeft:0}}>
            <CloseModal className="absolute w-full h-full bg-dark opacity-50">
            </CloseModal>
            {children}
        </div>
    )
}

export default Modal
