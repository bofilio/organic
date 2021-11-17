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
import SideMenu from './modals/SideMenu'
import Menu from './menu/Menu'
const Header = () => {
    const [search, setsearch] = React.useState("")
    const hundleChange = (e: any) => {
        e.preventDefault();
        setsearch(e.target.value)
    }
    return (
        <header>
            <div className=" py-2 border-b-2 border-gray-100 text-gray">
                <div className="mycontainer flex justify-between px-4">
                    <div className="space-x-2 sm:flex items-center hidden">
                        <PhoneIcon className="text-primary w-5 h-5" />
                        <span>Call us : +1900220033</span>
                    </div>
                    <div className=" flex text-xs space-x-6">
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
                    <form className="flex max-w-sm w-auto sm:w-full ">
                        <input onChange={hundleChange} className=" hidden sm:block text-gray flex-grow pl-4 focus:outline-none border-0 sm:border-2 " type="text" placeholder="Search for products ..." />
                        <Link href={`/search?qr=${search}`}>
                            <a className="sm:bg-primary cursor-pointer bg-transparent flex-shrink-0 text-white p-3">
                                <SearchIcon className="w-5 h-5 text-gray sm:text-white" />
                            </a>
                        </Link>
                    </form>
                    <div className=" hidden sm:flex items-center text-gray space-x-6">

                        <Link href="/wishlist">
                            <a>
                                <Badge variant="sm" count={0} color="primary">
                                    <HeartIcon className="w-6 h-6" />
                                </Badge>
                            </a>
                        </Link>
                        <Link href="/cart">
                            <a>
                                <Badge variant="sm" count={0} color="primary">
                                    <CartIcon className="w-6 h-6" />
                                </Badge>
                            </a>
                        </Link>

                    </div>
                </div>

            </div>
            <div className="mycontainer hidden sm:block">
                <Menu variant="topbar" />
            </div>


        </header>
    )
}

export default Header
