import dynamic from "next/dynamic";

const Header = dynamic(() => import("../components/Header"));
const Background = dynamic(() => import("../components/Background"));
const Overview = dynamic(() => import("../components/Overview"));
const Rating = dynamic(() => import("../components/Rating"));
const Customers = dynamic(() => import("../components/Customers"));
const Questions = dynamic(() => import("../components/Questions"));
const Action = dynamic(() => import("../components/Action"));
const Show = dynamic(() => import("../components/Show"));

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
