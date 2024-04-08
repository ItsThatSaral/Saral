import React, { Fragment } from "react";

import "./AppLayout.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";

const AppLayout = ({ children }) => {
  return (
    <Fragment>
      <Header />
      {children}
      <Footer />
    </Fragment>
  );
};

export default AppLayout;
