/* eslint-disable no-unused-vars */
import { Outlet, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Header title={"React JS Blog"} />
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
