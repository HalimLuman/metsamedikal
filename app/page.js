import dynamic from "next/dynamic";

const Banner = dynamic(() => import("@/components/home/Banner"));
const Collaboration = dynamic(() => import("@/components/home/Collaboration"));
const Products = dynamic(() => import("@/components/home/products"));


const Home = () => {
  return (
    <main>
      <Banner />
      <Products />
      <Collaboration />
    </main>
  );
};

export default Home;
