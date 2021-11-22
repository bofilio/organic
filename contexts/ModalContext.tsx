import React,{FC,useState,createContext} from 'react'

export const ModalContext =createContext<[Boolean,Function]>([false,()=>{}]);
export const ModalProvider:FC<{}> = ({children}) => {
    const [open, setopen] = useState(false)
    const toggleOpen:Function=()=>{
        setopen(!open);
    }
    return (
        <ModalContext.Provider value={[open,toggleOpen]}>
            {children}
        </ModalContext.Provider>
    )
}
