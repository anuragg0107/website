import React, { useState, useEffect } from "react";
import Footer from "./Component/Footer/Footer";
import Main from "./Component/Main/Main";
import Navbar from "./Component/Navbar/Navbar";
import { Spinner } from "react-bootstrap";
import "./Loader.css";
import ScrollToTopButton from "./Component/ScrollToTop/ScrollToTop";
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {loading ? (
        <div className="loader ">
          <Spinner animation="border" role="status"></Spinner>
        </div>
      ) : (
        <>
          <Navbar />
          <Main />
          <Footer />
          <ScrollToTopButton />
        </>
      )}
    </>
  );
}

export default App;
