import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function helmet(props) {
  return (
    <div className="helmet">
      <Header />
      {props.children}
      <Footer />
    </div>
  );
}

export default helmet;
