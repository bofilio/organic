import React from 'react'


const Typography: React.FC<{ className?: string, variant?: string, color?: string, weight?: string }> =
    ({ className, variant = "span", color = '', weight = "normal", children }) => {
        switch (variant) {
            //60px
            case "h1":
                return (
                    <h1 className={`${className} text-6xl text-${color} font-${weight} `}>
                        {children}
                    </h1>
                )
            //48px
            case "h2":
                return (
                    <h2 className={`text-5xl text-${color} font-${weight} ${className}`}>
                        {children}
                    </h2>
                )
            //30px
            case "h3":
                return (
                    <h3 className={`text-3xl text-${color} font-${weight} ${className}`}>
                        {children}
                    </h3>
                )
            //24px
            case "h4":
                return (
                    <h4 className={`text-2xl text-${color} font-${weight} ${className}`}>
                        {children}
                    </h4>
                )
            //20px
            case "h5":
                return (
                    <h4 className={`text-xl text-${color} font-${weight} ${className}`}>
                        {children}
                    </h4>
                )
            //16px
            default:
                return (
                    <div className={` ${className} text-${color} font-${weight}`}>
                        {children}
                    </div>
                )

        }


    }

export default Typography
