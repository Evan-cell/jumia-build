import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Banner from '@/components/Banner'
import Categories from '@/components/Categories'
import LastSearch from '@/components/LastSearch'
import Flash from '@/components/Flash'
import Deals from '@/components/Deals'
import TopD from '@/components/TopD'
import Toprated from '@/components/Toprated'
import Carousel2 from '@/components/Carousel2'
import Stylish from '@/components/Stylish'
import Stores from '@/components/Stores'
import Faqs from '@/components/Faqs'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div
  className=''
    >
      <Header/>
      <div className='main'>
      <main className='max-w-screen-2xl mx-auto'>
        <Banner/>
        <Categories className=''/>
        <LastSearch className='p-2'/>
        <Flash/>
        <Deals/>
        <TopD/>
        <Toprated/>
        <Carousel2/>
        <Stylish/>
        <Toprated/>
        <Stores/>
        <Faqs/>
        
      </main>
      <Footer/>
      </div>

      
    </div>
  )
}
