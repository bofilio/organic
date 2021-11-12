import React from 'react'
import Banner from '../../components/content/Banner'
import BannerContent from '../../components/content/BannerContent'
const checkout = () => {
    return (
        <Banner bgimg="/imgs/banner.png">
          <BannerContent title="Organic food" slag="Checkout"/>
        </Banner>
    )
}

export default checkout