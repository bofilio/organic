import React from 'react'
import Banner from '../../components/content/Banner'
import BannerContent from '../../components/content/BannerContent'
import {useRouter} from 'next/router'

const Category = () => {
  const router=useRouter();
  const {name}=router.query 
    return (
        <Banner bgimg="/imgs/banner.png">
          <BannerContent title="Organic food" slag={name}/>
        </Banner>
    )
}

export default Category
