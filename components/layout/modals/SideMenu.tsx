import React, { useRef } from 'react'
import CartIcon from '../../icons/CartIcon'
import HeartIcon from '../../icons/HeartIcon'
import HomeIcon from '../../icons/HomeIcon'
import Modal from '../../modals/Modal'
import Typography from '../../typography/Typography'
import Logo from '../../util/Logo'
import Menu from '../menu/Menu'
import MenuItem from '../menu/MenuItem'
const SideMenu: React.FC<{ className?: string }> = ({ className = "" }) => {

  return (
    <Modal className="fixed top-0 left-0 w-full h-full sm:hidden">
      <nav className={`${className} flex w-3/4 max-w-xs fixed bg-light flex-col lg:items-stretch items-center h-screen max-h-screen overflow-y-auto`}>
        <div className="h-40 bg-yellow-200 w-full flex items-center justify-center">
          <Logo className=" w-36 h-11" />
        </div>
        <Menu variant="sidebar"/>
      </nav>
    </Modal>

  )
}

export default SideMenu
