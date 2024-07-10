import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Sidebar from '@/components/Sidebar'
import PostsFeed from '@/components/PostsFeed'
import Trending from '@/components/Trending'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='bg-black min-h-screen text-[#E7E9EA] max-w-[1400] ml-auto mr-auto flex'>
      <Sidebar />
      <PostsFeed />
      <Trending />
    </div>
  )
}
