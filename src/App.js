import React, { useState, useEffect } from "react";
import Footer from "./Component/Footer/Footer";
import Main from "./Component/Main/Main";
import Navbar from "./Component/Navbar/Navbar";
import "./Loader.css";
import ScrollToTopButton from "./Component/ScrollToTop/ScrollToTop";
import Aboutus from "./Component/Aboutus/Aboutus";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {loading ? (
        <div className="loader">
          <div className="loading-logo">
            <div className="logo-part part1"></div>
            <div className="logo-part part2"></div>
            <div className="logo-part part3"></div>
            <div className="logo-part part4"></div>
          </div>
          <h1>Welcome To Global Infotech</h1>
        </div>
      ) : (
        <>
          <Navbar />
          <Main />
          <Aboutus />
          <Footer />
          <ScrollToTopButton />
        </>
      )}
    </>
  );
}

export default App;
