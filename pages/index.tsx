import type { NextPage } from 'next'
import Link from 'next/link'
import Banner from '../components/content/Banner'
import BannerContent from '../components/content/BannerContent'
import Services from '../components/content/Services'
import Typography from '../components/typography/Typography'
import Category from '../components/content/Category'
import Tab from '../components/layout/menu/Tab'
import { TabulationProvider } from '../contexts/TabulationContext'
import TabContent from '../components/layout/menu/TabContent'
import Product from '../components/content/Product'

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
      <section className="w-full mt-12 space-y-6 py-6 bg-tr-primary ">
        <Typography className="text-center" variant="h3" weight="bold" color="dark">
          Categories
        </Typography>
        <div className="flex justify-center flex-wrap w-full overflow-x-auto">
          <Category bg_img="/imgs/fruit.svg" title="Fruits" href="/category/Fruits" />
          <Category bg_img="/imgs/veget.svg" title="Vegetables" href="/category/Vegetebales" />
          <Category bg_img="/imgs/eggs.svg" title="Eggs" href="/category/Eggs" />
          <Category bg_img="/imgs/fruit.svg" title="Fruits" href="/category/Fruits" />
          <Category bg_img="/imgs/veget.svg" title="Vegetables" href="/category/Vegetebales" />
          <Category bg_img="/imgs/eggs.svg" title="Eggs" href="/category/Eggs" />
        </div>
      </section>
      {/**Featured products */}
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
          <TabContent id={1}>
            <TabulationProvider>
              <TabContent id={1} className="flex  flex-wrap">
                <Product className="mr-6 mb-6" name="Lemon" price={25.00} img="/imgs/olive.svg" />
                <Product className="mr-6 mb-6" name="Lemon" price={25.00} img="/imgs/olive.svg" />
                <Product className="mr-6 mb-6" name="Lemon" price={25.00} img="/imgs/olive.svg" />
                <Product className="mr-6 mb-6" name="Lemon" price={25.00} img="/imgs/olive.svg" />
                <Product className="mr-6 mb-6" name="Lemon" price={25.00} img="/imgs/olive.svg" />
                <Product className="mr-6 mb-6" name="Lemon" price={25.00} img="/imgs/olive.svg" />
                <Product className="mr-6 mb-6" name="Lemon" price={25.00} img="/imgs/olive.svg" />
                <Product className="mr-6 mb-6" name="Lemon" price={25.00} img="/imgs/olive.svg" />
              </TabContent>
              <TabContent id={2} className="flex  flex-wrap">
                <Product className="mr-6 mb-6" name="Lemon" price={25.00} img="/imgs/olive.svg" />
                <Product className="mr-6 mb-6" name="Lemon" price={25.00} img="/imgs/olive.svg" />
                <Product className="mr-6 mb-6" name="Lemon" price={25.00} img="/imgs/olive.svg" />
                <Product className="mr-6 mb-6" name="Lemon" price={25.00} img="/imgs/olive.svg" />
                <Product className="mr-6 mb-6" name="Lemon" price={25.00} img="/imgs/olive.svg" />
              </TabContent>
              <div className="flex justify-center space-x-2 mt-12">
                <Tab title="1" id={1} />
                <Tab title="2" id={2} />
                <Tab title="3" id={3} />
                <Tab title="4" id={4} />
              </div>

            </TabulationProvider>


          </TabContent>
          <TabContent id={2} className="flex justify-center flex-wrap"></TabContent>
          <TabContent id={3} className="flex justify-center flex-wrap"></TabContent>
          <TabContent id={4} className="flex justify-center flex-wrap"></TabContent>
          <TabContent id={5} className="flex justify-center flex-wrap">
            <Product className="mr-6 mb-6" name="Lemon" price={25.00} img="/imgs/olive.svg" />
          </TabContent>

        </TabulationProvider>
        {/**pagination */}



      </section>
      {/**spacial products */}
      <section className=" hidden lg:block w-full mt-12 space-y-6 py-6">
        <div className="flex justify-center flex-wrap  ">
          <div className="flex flex-col space-y-5 mb-8 mr-8">
            <Typography variant="h4" weight="bold" color="dark">Top Rated</Typography>
            <Product variant="minimal" className="mr-6 mb-6" name="Lemon" price={25.00} img="/imgs/olive.svg" />
            <Product variant="minimal" className="mr-6 mb-6" name="Lemon" price={25.00} img="/imgs/olive.svg" />
            <Product variant="minimal" className="mr-6 mb-6" name="Lemon" price={25.00} img="/imgs/olive.svg" />
          </div>
          <div className="flex flex-col space-y-5 mb-8 mr-8">
            <Typography variant="h4" weight="bold" color="dark">Best Selling</Typography>
            <Product variant="minimal" className="mr-6 mb-6" name="Lemon" price={25.00} img="/imgs/olive.svg" />
            <Product variant="minimal" className="mr-6 mb-6" name="Lemon" price={25.00} img="/imgs/olive.svg" />
            <Product variant="minimal" className="mr-6 mb-6" name="Lemon" price={25.00} img="/imgs/olive.svg" />
          </div>
          <div className="flex flex-col space-y-5 mb-8 mr-8">
            <Typography variant="h4" weight="bold" color="dark">On sale</Typography>
            <Product variant="minimal" className="mr-6 mb-6" name="Lemon" price={25.00} img="/imgs/olive.svg" />
            <Product variant="minimal" className="mr-6 mb-6" name="Lemon" price={25.00} img="/imgs/olive.svg" />
            <Product variant="minimal" className="mr-6 mb-6" name="Lemon" price={25.00} img="/imgs/olive.svg" />
          </div>
        </div>
      </section>
      {/**blogs */}
      <section className="hidden lg:block  w-full mt-12 space-y-6 py-6">
        <Typography className="text-center" variant="h3" weight="bold" color="dark">
          Latest Blogs
        </Typography>
        <div className="flex flex-col lg:flex-row lg:space-x-4 space-y-6 lg:space-y-0">
          <div className="flex flex-col w-full lg:w-1/2 shadow-lg">
            <img className="rounded-bl-5xl" src="/imgs/blog1.svg" alt="" />
            <div className="py-2 px-6 space-y-5">
              <Typography variant="h5" color="primary">Lorem Ipsum is simply dummy text?</Typography>
              <Typography className="text-sm" color="gray">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum is simply dummy text of the printing.
                <span className=" ml-4 text-primary font-semibold cursor-pointer">Read more</span>
              </Typography>
            </div>
          </div>
          <div className=" flex flex-row lg:flex-col w-full lg:w-1/2 space-x-4 lg:space-x-0 space-y-0 lg:space-y-4">
            <div className="flex flex-col lg:flex-row w-1/2 lg:w-full shadow-lg">
              <img className="  w-full h-auto lg:w-52 lg:h-52 flex-shrink-0" src="/imgs/blog3.svg" alt="" />
              <div className="flex-grow flex flex-col space-y-4 p-2">
                <Typography variant="h5" color="primary">Lorem Ipsum is simply dummy text?</Typography>
                <Typography className="text-sm" color="gray">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </Typography>
                <span className=" text-primary font-semibold cursor-pointer">Read more</span>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row w-1/2 lg:w-full shadow-lg">
              <img className="w-full h-auto lg:w-52 lg:h-52 flex-shrink-0" src="/imgs/blog2.svg" alt="" />
              <div className="flex-grow flex flex-col space-y-4 p-2">
                <Typography variant="h5" color="primary">Lorem Ipsum is simply dummy text?</Typography>
                <Typography className="text-sm" color="gray">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </Typography>
                <span className=" text-primary font-semibold cursor-pointer">Read more</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
