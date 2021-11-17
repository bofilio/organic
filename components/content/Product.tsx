import React from 'react'
import CartIcon from '../icons/CartIcon'
import HeartIcon from '../icons/HeartIcon'
import Typography from '../typography/Typography'
const Product: React.FC<{ className?: string, img: string, price: number, name: string }> = ({ className = "", img, price, name }) => {
    const [hovered, sethovered] = React.useState(false)
    const handleHover=()=>{
        sethovered(!hovered);
    }
    return (
        <div className={`${className}`} onMouseEnter={handleHover} onMouseLeave={handleHover}>
            <div className=" relative h-72 w-64 bg-tr-primary bg-cover bg-no-repeat hover:border-green-200
                            border-white border-2 rounded-bl-4xl rounded-tr-4xl"
                style={{ backgroundImage: `url("${img}")` }} 
            >
                <div className={` ${hovered?"flex":"hidden"} justify-center space-x-6 absolute text-white bg-tr45-primary w-full left-0  bottom-1/4  p-2`}>
                    <CartIcon className="w-6 h-6"/>
                    <HeartIcon className="w-6 h-6"/>
                </div>
            </div>
            <div className="text-primary">
                <Typography className="text-left">{name}</Typography>
                <div className="flex items-center space-x-5">
                    <Typography>${price}</Typography>
                    <Typography>${price}</Typography>
                </div>
            </div>
        </div>
    )
}

export default Product
