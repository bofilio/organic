import React from 'react'
import Typography from '../typography/Typography'
import BannerContent from './BannerContent'
const Banner:React.FC<{bgimg:string}> = ({bgimg,children}) => {
    return (
        <div className=" relative w-full h-72  sm:h-96 bg-cover bg-no-repeat" style={{ backgroundImage: `url("${bgimg}")` }}>
            {children}
            
        </div>
    )
}

export default Banner
