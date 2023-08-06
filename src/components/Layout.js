import React from "react";
import Footer from "./Footer";
import Headers from "./Header";

const Layout = ({ children }) => (
  <>
    <Headers></Headers>
    {children}
    <Footer></Footer>
  </>
);

export { Layout };
