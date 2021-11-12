import React from 'react'
import Typography from '../typography/Typography'
const Services = () => {
    return (
        <div className="mycontainer mt-12 hidden sm:flex justify-around text-center space-x-4 p-4">
            <div className="flex flex-col items-center space-y-2">
                <img className="w-12 h-12" src="/imgs/fast-delivery.svg" alt="fast delivery" />
                <Typography variant="h5" color="dark">Free Shipping</Typography>
                <Typography className="text-xs" color="gray">free shiping for all us orders</Typography>
            </div>
            <div className="flex flex-col items-center space-y-2 ">
                <img className="w-12 h-12" src="/imgs/headphones.svg" alt="fast delivery" />
                <Typography variant="h5" color="dark">Support 24/27</Typography>
                <Typography className="text-xs" color="gray">We support 24h a day</Typography>
            </div>
            <div className="flex flex-col items-center space-y-2">
                <img className="w-12 h-12" src="/imgs/money-back.svg" alt="fast delivery" />
                <Typography variant="h5" color="dark">100% Money Back </Typography>
                <Typography className="text-xs" color="gray">You have 30 days to return</Typography>
            </div>
            <div className="flex flex-col items-center space-y-2">
                <img className="w-12 h-12" src="/imgs/verify.svg" alt="fast delivery" />
                <Typography variant="h5" color="dark">Payment Secure </Typography>
                <Typography className="text-xs" color="gray">We ensure secure payment</Typography>
            </div>
        </div>
    )
}

export default Services
