import React from 'react'
import Typography from '../typography/Typography'
const BannerContent:React.FC<{title:string,slag:string|string[]|undefined}> = ({title,slag,children}) => {
    return (
        <div className="absolute flex flex-col items-center justify-center h-5/6 w-11/12 max-w-lg bg-white bg-opacity-50 top-1/2 
                            left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 rounded-tr-7xl rounded-bl-7xl p-4" >
            <Typography className="uppercase" variant="h5" color="primary" weight="bold" >
                {title}
            </Typography>
            <Typography className="text-center mt-4 text-3xl sm:text-5xl " color="dark" weight="bold">
                {slag}
            </Typography>
            {children}
        </div>
    )
}

export default BannerContent
