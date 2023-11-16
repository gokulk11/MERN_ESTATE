import React from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";

const App = () => {
  console.log("Hello world");
  return (
    <>
      <Header/>
      <Outlet />
    </>
  );
};

export default App;
