import React from 'react'
import Link from 'next/link'
import Typography from '../typography/Typography'
const Category:React.FC<{bg_img:string,title:string,href:string}> = ({bg_img,title,href}) => {
    return (
        <Link href={href}>
          <a className=" flex justify-center space-x-8 ">
            <div className="flex flex-col items-center">
              <div className="h-32 w-32 bg-cover bg-no-repeat flex-shrink-0" style={{ backgroundImage: `url("${bg_img}")` }}>

              </div>
              <Typography color="primary">{title}</Typography>
            </div>
          </a>
        </Link>
    )
}

export default Category
