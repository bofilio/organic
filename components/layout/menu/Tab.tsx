import React,{MouseEventHandler, useContext} from 'react'
import { TabulationContext } from '../../../contexts/TabulationContext'
const Tab:React.FC<{title:string,id:number,className?:string}> = ({ children, title,id,className="" }) => {
    const [active, setActive] = useContext(TabulationContext)  
    const changeActiveTab=(tab_id:number)=>{ 
        setActive(tab_id);
    }
    return (
            <div className={`${className} ${active==id?"border-b-2 border-primary":""} 
             flex items-center justify-center cursor-pointer`}
            onClick={()=>changeActiveTab(id)}
            >
                {children}
                <span>
                    {title}
                </span>
            </div>
    )
}

export default Tab