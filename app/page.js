import React from "react";
import Header from "../components/Header";
import Background from "../components/Background";
import Overview from "../components/Overview";
import Rating from "../components/Rating";
import Customers from "../components/Customers";
import Questions from "../components/Questions";
import Action from "../components/Action";
import Show from "../components/Show";

const Page = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
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
