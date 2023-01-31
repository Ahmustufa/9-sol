import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
const Layout = (props) => {
  return (
    <div style={{overflowX: "hidden"}}>
      <Navbar />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
