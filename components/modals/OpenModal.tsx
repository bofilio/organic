import React from 'react'
import { ModalContext } from '../../contexts/ModalContext'
const OpenModal:React.FC<{className?:string}> = ({children,className=""}) => {
    const [open,toggleopen]=React.useContext(ModalContext);
    const handleOpen=()=>{
        toggleopen();
    }
    return (
        <div className={`${className} cursor-pointer`} onClick={handleOpen}>
            {children}
        </div>
    )
}

export default OpenModal
