import React from "react";
import Header from "../components/header";
import Hero from "../components/hero";
import Deals from "../components/deal";
import InteriarProduct from "../components/interiarProduct";
import TechProducts from "../components/techProducts";
import RecommendedItems from "../components/recommendedItems";
import Extra from "../components/extra";
import Regions from "../components/regions";
import Supplier from "../components/supplierRequest";

import Footer from "../components/footer";

import "../css/home.css";

function Home() {
  return (
    <div className="Home">
      <Header />
      <Hero />

      <div className="dealArea"><Deals /></div>

      <InteriarProduct />
      <TechProducts />
      <Supplier/>
      <RecommendedItems />
      <Extra />
      <Regions />
      <Footer />
    </div>
  );
}

export default Home;
