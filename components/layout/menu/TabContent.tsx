import React, { Fragment, useContext } from 'react'
import { TabulationContext } from '../../../contexts/TabulationContext'

const TabContent:React.FC<{id:number,className?:string}> = ({ children, id,className="" }) => {
    const [active_id, activateTab] = useContext(TabulationContext)
    return (
        <div className={`${className} ${id == active_id ? "" : "hidden"}`}>
            {children}
        </div>
    )
}

export default TabContent