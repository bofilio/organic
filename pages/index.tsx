import type { NextPage } from 'next'
import Link from 'next/link'
import Banner from '../components/content/Banner'
import BannerContent from '../components/content/BannerContent'
import Services from '../components/content/Services'
import Typography from '../components/typography/Typography'
import Category from '../components/content/Category'
import Tab from '../components/layout/menu/Tab'
import { TabulationProvider } from '../contexts/TabulationContext'
import Product from '../components/content/Product'
import TabContent from '../components/layout/menu/TabContent'


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
      <section className="w-full mt-12 space-y-6 py-6 bg-tr-primary text-center">
        <Typography variant="h3" weight="bold" color="dark">
          Top Categories
        </Typography>
        <div className="flex justify-center space-x-6 w-full overflow-x-auto">
          <Category bg_img="/imgs/fruit.svg" title="Fruits" href="/category/Fruits" />
          <Category bg_img="/imgs/veget.svg" title="Vegetables" href="/category/Vegetebales" />
          <Category bg_img="/imgs/eggs.svg" title="Eggs" href="/category/Eggs" />
        </div>
      </section>
      <section className="w-full mt-12 space-y-6 py-6  text-center">
        <Typography variant="h3" weight="bold" color="primary">
          Trendy Foods
        </Typography>
        <TabulationProvider>
          <div className="flex justify-center space-x-5">
            <Tab id={1} title="All" className="text-primary" />
            <Tab id={2} title="Featured" className="text-primary" />
            <Tab id={3} title="New" className="text-primary" />
            <Tab id={4} title="Onsale" className="text-primary" />
            <Tab id={5} title="Deal" className="text-primary" />
          </div>
          <TabContent id={1} className="flex justify-center flex-wrap">
            <Product className="mr-6 mb-6" name="Lemon" price={25.00} img="/imgs/olive.svg" />
            <Product className="mr-6 mb-6" name="Lemon" price={25.00} img="/imgs/olive.svg" />
            <Product className="mr-6 mb-6" name="Lemon" price={25.00} img="/imgs/olive.svg" />
            <Product className="mr-6 mb-6" name="Lemon" price={25.00} img="/imgs/olive.svg" />
            <Product className="mr-6 mb-6" name="Lemon" price={25.00} img="/imgs/olive.svg" />
            <Product className="mr-6 mb-6" name="Lemon" price={25.00} img="/imgs/olive.svg" />
            <Product className="mr-6 mb-6" name="Lemon" price={25.00} img="/imgs/olive.svg" />
            <Product className="mr-6 mb-6" name="Lemon" price={25.00} img="/imgs/olive.svg" />
          </TabContent>
          <TabContent id={2} className="flex justify-center flex-wrap"></TabContent>
          <TabContent id={3} className="flex justify-center flex-wrap"></TabContent>
          <TabContent id={4} className="flex justify-center flex-wrap"></TabContent>
          <TabContent id={5} className="flex justify-center flex-wrap">
            <Product className="mr-6 mb-6" name="Lemon" price={25.00} img="/imgs/olive.svg" />
          </TabContent>

        </TabulationProvider>
      </section>


    </div>
  )
}

export default Home
