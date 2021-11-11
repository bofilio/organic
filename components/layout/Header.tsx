import React from 'react'
import ArrowDownIcon from '../icons/ArrowDownIcon'
import PhoneIcon from '../icons/PhoneIcon'
import Typography from '../typography/Typography'
import Logo from '../util/Logo'
import Link from 'next/link'
import SearchIcon from '../icons/SearchIcon'
import HeartIcon from '../icons/HeartIcon'
import CartIcon from '../icons/CartIcon'
import Badge from '../util/Badge'
import MenuIcon from '../icons/MenuIcon'
import { ModalProvider } from '../../contexts/ModalContext'
import OpenModal from '../modals/OpenModal'
import Modal from '../modals/Modal'
import SideMenu from './modals/SideMenu'
import Menu from './menu/Menu'
const Header = () => {
    return (
        <header>
            <div className=" py-2 border-b-2 border-gray-100 text-gray">
                <div className="mycontainer flex justify-between px-4">
                    <div className="space-x-2 sm:flex items-center hidden">
                        <PhoneIcon className="text-primary w-5 h-5" />
                        <span>Call us : +1900220033</span>
                    </div>
                    <div className=" flex space-x-6">
                        <div className="flex items-center space-x-1">
                            <span>USD</span>
                            <ArrowDownIcon className="text-primary w-4 h-4" />
                        </div>
                        <div className="flex items-center space-x-1">
                            <span>Language</span>
                            <ArrowDownIcon className="text-primary w-4 h-4" />
                        </div>
                    </div>
                </div>
            </div>
            <div className=" py-8 border-b-2 border-gray-100 ">
                <div className="mycontainer px-4 flex justify-between ">
                    <div className=" flex items-center space-x-4">
                        <ModalProvider>
                            <OpenModal>
                                <MenuIcon className="inline-block sm:hidden w-8 h-8 text-gray" />
                            </OpenModal>
                            <SideMenu />
                        </ModalProvider>
                        <Logo className=" w-36 h-11" />
                    </div>
                    <div className="flex max-w-sm w-auto sm:w-full ">
                        <input className=" hidden sm:block text-gray flex-grow pl-4 focus:outline-none border-0 sm:border-2 " type="text" placeholder="Search for products ..." />
                        <div className="sm:bg-primary cursor-pointer bg-transparent flex-shrink-0 text-white p-3"><SearchIcon className="w-5 h-5 text-gray sm:text-white" /></div>
                    </div>
                    <div className=" hidden sm:flex items-center text-gray space-x-6">
                        <Badge variant="sm" count={0} color="primary">
                            <HeartIcon className="w-6 h-6" />
                        </Badge>
                        <Badge variant="sm" count={0} color="primary">
                            <CartIcon className="w-6 h-6" />
                        </Badge>
                    </div>
                </div>

            </div>
            <div className="mycontainer hidden sm:block">
                <Menu variant="topbar" />

            </div>
            <div className=" relative w-full h-72  sm:h-96 bg-cover bg-no-repeat" style={{ backgroundImage: 'url("/imgs/banner.png")' }}>
                <div className="absolute flex flex-col items-center justify-center h-5/6 w-11/12 max-w-lg bg-white bg-opacity-50 top-1/2 
                                    left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 rounded-tr-7xl rounded-bl-7xl p-4" >
                    <Typography className="uppercase" variant="h5" color="primary" weight="bold" >
                        organic food
                    </Typography>
                    <Typography className="text-center mt-4 text-3xl sm:text-5xl " color="dark" weight="bold">
                        Looking for the fresh Organic Food
                    </Typography>
                    <button className="py-1 px-4 bg-primary mt-8 ">
                        <Typography className="uppercase" color="white" variant="h5">
                            Shop now
                        </Typography>
                    </button>
                </div>
            </div>
            <div className="mycontainer hidden sm:flex justify-around text-center space-x-4 p-4">
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



        </header>
    )
}

export default Header
