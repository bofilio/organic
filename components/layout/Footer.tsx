import React from 'react'
import FacebookIcon from '../icons/FacebookIcon'
import TwiterIcon from '../icons/TwiterIcon'
import YoutubeIcon from '../icons/YoutubeIcon'
import Typography from '../typography/Typography'
import Logo from '../util/Logo'

const Footer = () => {
    return (
        <div className="bg-tr-primary w-full py-16 mt-12 px-3">
            <div className="mycontainer flex flex-col sm:flex-row space-y-8 sm:space-x-8 items-center">
                <div className="w-full sm:w-1/3 space-y-6 text-gray">
                    <Logo className="h-10 w-36"/>
                    <p >
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                     Lorem Ipsum has been the industry's standard dumm
                    </p>
                    <div className="space-y-2">
                       <h5>Fellow us</h5>
                       <div className="flex items-center space-x-4">
                           <FacebookIcon className="w-5 h-5 text-primary"/>
                           <TwiterIcon className="w-5 h-5 text-primary"/>
                           <YoutubeIcon className="w-5 h-5 text-primary"/>
                       </div>
                    </div>
                </div>
                <div className="w-full sm:w-2/3 flex">
                    <div className="space-y-2 flex flex-col text-gray w-1/3">
                        <a className="text-primary">Home</a>
                        <a >Blog</a>
                        <a >About</a>
                        <a >Contact</a>
                    </div>
                    <div className="w-2/3 flex flex-col space-y-2">
                        <Typography variant="h5" color="gray">NewsLetter</Typography>
                        <input className="focus:outline-none p-2 bg-tr-primary border-2 border-primary text-gray" placeholder="your email" />
                        <button className="py-2 px-4 bg-primary w-20 text-light">Send</button>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Footer
