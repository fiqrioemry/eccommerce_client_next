import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Banner from "@/components/home/Banner";
import Categories from "@/components/home/Categories";
import RecommendProduct from "@/components/home/RecommendProduct";

const Home = async () => {
  return (
    <section className="py-6 md:py-10 space-y-6 md:space-y-10">
      <Banner />
      <Categories />
      <RecommendProduct />
    </section>
  );
};

export default Home;
