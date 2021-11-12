import React from 'react'
import Link from 'next/link'
import Typography from '../../typography/Typography'
import MenuItem from './MenuItem'
import CartIcon from '../../icons/CartIcon'
import HeartIcon from '../../icons/HeartIcon'
import HomeIcon from '../../icons/HomeIcon'
import PhoneIcon from '../../icons/PhoneIcon'
import AboutIcon from '../../icons/AboutIcon'
import BlogIcon from '../../icons/BlogIcon'
import SettingsIcon from '../../icons/SettingsIcon'
const Menu: React.FC<{ variant: string, className?: string }> = ({ className = "", variant }) => {
    switch (variant) {
        case "sidebar":
            return (
                <div className={`flex flex-col space-y-6 w-full p-4 ${className}`}>
                    <MenuItem placement="sidebar" title="Home" href="/">
                        <HomeIcon className="w-6 h-6" />
                    </MenuItem>
                    <MenuItem placement="sidebar" title="Wishlist" count={2} href="/wishlist">
                        <HeartIcon className="w-6 h-6" />
                    </MenuItem>
                    <MenuItem placement="sidebar" title="Cart" count={2} href="/cart">
                        <CartIcon className="w-6 h-6" />
                    </MenuItem>
                    <MenuItem placement="sidebar" title="Blog" count={4} href="/blog">
                        <BlogIcon className="w-6 h-6" />
                    </MenuItem>
                    <MenuItem placement="sidebar" title="About" href="/about">
                        <AboutIcon className="w-6 h-6" />
                    </MenuItem>
                    <MenuItem placement="sidebar" title="Contact" href="/contact">
                        <PhoneIcon className="w-6 h-6" />
                    </MenuItem>
                    <MenuItem placement="sidebar" title="Settings" href="/settings">
                        <SettingsIcon className="w-6 h-6" />
                    </MenuItem>
                </div>
            )

        case "topbar":
            return (
                <nav className="flex items-center">
                    <MenuItem className="px-6 py-2 bg-primary text-white" placement="topbar" title="Shop by Category" href="/categories"/>
                    <MenuItem className="text-success" placement="topbar" title="Home" href="/"/>
                    <MenuItem className="text-primary" placement="topbar" title="Blog" href="/blog"/>
                    <MenuItem className="text-primary" placement="topbar" title="About" href="/about"/>
                    <MenuItem className="text-primary" placement="topbar" title="Contact" href="/contact"/>
                </nav>
            )
        default:
            return (
                <div>variant invalide</div>
            )
    }
    return (
        <nav className={className}>
            <Link href="#" >
                <Typography className="px-6 py-2 bg-primary text-white">Shop by Category</Typography>
            </Link>
            <Link href="#" >
                <a>
                    <Typography className=" px-6 py-2 text-success">Home</Typography>
                </a>
            </Link>
            <Link href="#">
                <a><Typography className="px-6 py-2 text-primary">Blog</Typography></a>
            </Link>
            <Link href="#">
                <a ><Typography className="px-6 py-2 text-primary">About</Typography></a>
            </Link>
            <Link href="#">
                <a><Typography className="px-6 py-2 text-primary">Contact</Typography></a>
            </Link>

        </nav>
    )
}

export default Menu
