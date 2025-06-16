<<<<<<< HEAD
import dynamic from "next/dynamic";

const Header = dynamic(() => import("../components/Header"));
const Background = dynamic(() => import("../components/Background"));
const Overview = dynamic(() => import("../components/Overview"));
const Rating = dynamic(() => import("../components/Rating"));
const Customers = dynamic(() => import("../components/Customers"));
const Questions = dynamic(() => import("../components/Questions"));
const Action = dynamic(() => import("../components/Action"));
const Show = dynamic(() => import("../components/Show"));
=======
import React from "react";
import Header from "../components/Header";
import Background from "../components/Background";
import Overview from "../components/Overview";
import Rating from "../components/Rating";
import Customers from "../components/Customers";
import Questions from "../components/Questions";
import Action from "../components/Action";
import Show from "../components/Show";
>>>>>>> adf30627ee4742db125ba99e5b2f1323b9eb342d

const Page = () => {
  return (
    <main>
      <Header />
      <Background />
      <Overview />
      <Rating />
      <Customers />
      <Questions />
      <Action />
      <Show />
    </main>
  );
};

export default Page;
