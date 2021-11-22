import React from 'react'

const YoutubeIcon: React.FC<{ className: string }> = ({ className }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 21.805 15.43">
            <path id="Tracé_94" data-name="Tracé 94" d="M126.775,152.333H114.028a4.529,4.529,0,0,0-4.529,4.529v6.373a4.529,4.529,0,0,0,4.529,4.529h12.748a4.529,4.529,0,0,0,4.529-4.529v-6.373a4.529,4.529,0,0,0-4.529-4.529Zm-3.063,8.025L117.75,163.2a.239.239,0,0,1-.343-.216V157.12a.239.239,0,0,1,.348-.214l5.962,3.021a.239.239,0,0,1,0,.43Z" transform="translate(-109.499 -152.333)" fill="currentColor" />
        </svg>

    )
}

export default YoutubeIcon
