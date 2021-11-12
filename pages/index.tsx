import type { NextPage } from 'next'
import Banner from '../components/content/Banner'
import BannerContent from '../components/content/BannerContent'
import Services from '../components/content/Services'
import Typography from '../components/typography/Typography'


const Home: NextPage = () => {
  return (
    <div>
        <Banner bgimg="/imgs/banner.png">
          <BannerContent title="Organic food" slag="Looking for the fresh Organic Food">
            <button className="py-1 px-4 bg-primary mt-8 ">
              <Typography className="uppercase" color="white" variant="h5">
                Shop now
              </Typography>
            </button>
          </BannerContent>
        </Banner>
        <Services />
      
    </div>
  )
}

export default Home
