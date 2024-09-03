import Banner from "@/components/home/Banner";
import Collaboration from "@/components/home/Collaboration";
import ProductGroups from "@/components/home/ProductGroups";
import Products from "@/components/home/Products";


const Home = () => {
  return (
    <main>
      <Banner />
      <Products />
      <Collaboration />
      <ProductGroups />
    </main>
  );
};

export default Home;
