import React from "react";
import Header from "../../components/blog/header/Header";

import Body from "../../components/blog/views/body/Body";
import Footer from "../../components/blog/views/footer/Footer";
import bg from "../../assets/backg.png";

function HomeBlog() {
  return (
    <div className="d-flex flex-column mb-3">
      <div className="navbar"  style={{ backgroundImage: `url(${bg})` }}>
       
      <Header/>
      </div>
     
      <div className="body" style={{ marginTop: "1.5%" }}>
        <Body />
      </div>
      
      <div className="footer">
        <Footer/>
      </div>
      
    </div>
  );
}

export default HomeBlog;
