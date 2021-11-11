import React, { FC } from 'react'

const Badge: FC<{ className?: string, variant: string, color: string,count?:number }> = ({ className, variant,color, children,count=0 }) => {
    switch (variant) {
        case "sm":
            return (
                <div className=" relative">
                   {children}
                <div className={` bg-${color} text-white flex items-center justify-center absolute w-3 h-3 text-xxs -top-1 -right-1  rounded-full`}>{count}</div>
                </div>

            )
        default:
            return (
                <div className={`bg-tr-${color} text-${color} ${className}`}>
                    {children}
                </div>
            )

    }

}

export default Badge
