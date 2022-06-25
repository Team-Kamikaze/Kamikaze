import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Body from '../components/Body'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Body />

    </div>
  )
}

export default Home
