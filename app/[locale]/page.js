import Banner from "@/components/home/Banner";
import Products from "@/components/home/Products";
import Collaboration from "@/components/home/Collaboration";
import ProductGroups from "@/components/home/ProductGroups";

export default function Home() {
  return (
    <main>
      <Banner />
      <Products />
      <Collaboration />
      <ProductGroups />
    </main>
  );
}
