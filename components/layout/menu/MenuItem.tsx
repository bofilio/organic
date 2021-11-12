import React from 'react'
import Typography from '../../typography/Typography'
import Link from 'next/link'
import CloseModal from '../../modals/CloseModal'
const MenuItem: React.FC<{ placement: string, count?: number, title: string, href: string, className?: string }> = ({ placement, count = 0, title, href, className = "", children }) => {

    switch (placement) {
        case 'sidebar':
            return (
                <CloseModal>
                    <Link href={href}>
                        <a className={`flex text-gray items-center justify-between ${className}`}>
                            <div className="flex items-center space-x-5">
                                {children}
                                <Typography >{title}</Typography>
                            </div>

                            {
                                count > 0 &&
                                <div className={`bg-primary w-2 h-2 rounded-full relative`}>
                                    <span className={`bg-primary animate-ping absolute inline-flex h-full w-full rounded-full  opacity-75`}></span>
                                </div>
                            }
                        </a>
                    </Link>
                </CloseModal>

            );
        case 'topbar':
            return (
                <Link href={href} >
                    <a className={className}>
                        <Typography className=" px-6 py-2">{title}</Typography>
                    </a>
                </Link>
            )
        default:
            return (
                <div className="bg-yellow-700"> placement not valid!</div>
            )

    }

}

export default MenuItem
