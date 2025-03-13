import React, { useState } from "react";
import "./index.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("best sellers");

  return (
    <>
      <div className="min-h-screen bg-gray-900">
        <Navbar handleSearch={(term) => setSearchQuery(term)} />
        <Banner />
        <Hero searchQuery={searchQuery} />
      </div>
      <Footer />
    </>
  );
};

export default App;
