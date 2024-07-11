import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Sidebar from '@/components/Sidebar'
import PostsFeed from '@/components/PostsFeed'
import Trending from '@/components/Trending'
import Banner from '@/components/Banner'
import { useSelector } from 'react-redux'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const username = useSelector(state => state.user.username)
  console.log(username)


  return (
    <div className='bg-black'>
    <div className='flex bg-black min-h-screen text-[#E7E9EA] max-w-[1400px] mx-auto'>
      <Sidebar />
      <PostsFeed />
      <Trending />
    </div>
  {!username && <Banner/>}
    </div>

  )
}
