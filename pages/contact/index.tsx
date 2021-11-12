import React from 'react'
import Banner from '../../components/content/Banner'
import BannerContent from '../../components/content/BannerContent'
const index = () => {
    return (
        <Banner bgimg="/imgs/banner.png">
          <BannerContent title="Organic food" slag="Contact us"/>
        </Banner>
    )
}

export default index