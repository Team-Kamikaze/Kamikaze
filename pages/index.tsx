import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
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
      <Topbar feedfilter={feedfilter} />
    </div>
  );
};

export default Home;
