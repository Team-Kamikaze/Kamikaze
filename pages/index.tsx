import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Body from "../components/Body";
import Image from "next/image";
import TopBar from "../components/TopBar";
import Sidebar from "../components/Sidebar";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import { searchValueAtom } from "../atoms";

const Home: NextPage = () => {
  const feedfilter = ["React", "NextJS", "CSS", "HTML", "PAPAREACT"];
  const [data, setData] = useState([]);
  const searchValue = useRecoilValue(searchValueAtom);

  const handleSearch = () => {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${searchValue}&maxResults=10&key=${process.env.NEXT_PUBLIC_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => setData(data.items));
  };

  return (
    <div className="">
      <Head>
        <title>Kamikaze</title>
        <link rel="icon" href="/images/KAMIKAZE icon.ico" />
      </Head>
      <Header handleSearch={handleSearch} />
      <div className="flex">
        <Sidebar />
        <div>
          <TopBar feedfilter={feedfilter} />
          <Body data={data} />
        </div>
      </div>
    </div>
  );
};

export default Home;
