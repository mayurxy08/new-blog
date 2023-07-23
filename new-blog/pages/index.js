import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Fragment } from 'react'
import Hero from '@/components/home-page/hero'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Fragment>
      <Hero />
      <Featured
    </Fragment>
  )
}
