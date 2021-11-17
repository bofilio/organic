import React,{FC,useState,createContext} from 'react'

export const TabulationContext =createContext<[number,React.Dispatch<React.SetStateAction<number>>]>([1,(id)=>{}])
export const TabulationProvider:FC<{}> = ({children}) => {
    const [active, setActive] = useState(1)
    return (
        <TabulationContext.Provider value={[active,setActive]}>
            {children}
        </TabulationContext.Provider>
    )
}