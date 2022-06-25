import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Body from '../components/Body'
import Image from "next/image";
import Topbar from "../components/Topbar";




const Home: NextPage = () => {
  const feedfilter = ["React", "NextJS", "CSS", "HTML", "PAPAREACT"];
  return (
    <div className="">
      <Head>
        <title>Kamikaze</title>
        <link rel="icon" href="/images/KAMIKAZE icon.ico" />
      </Head>
      <Header />
      <Body />

      <Topbar feedfilter={feedfilter} />
    </div>
  );
};

export default Home;
