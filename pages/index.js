import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Banner from '@/components/Banner'
import Categories from '@/components/Categories'
import LastSearch from '@/components/LastSearch'

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
      </main>
      </div>

      
    </div>
  )
}
