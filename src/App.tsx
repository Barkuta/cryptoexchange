import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";
import Content from "./Components/Content/Content";
import ContentWithSwitcher from "./Components/Content/ContentContainer";
import Header from "./Components/Header/Header";
// import { store } from "./Redux/store";
import graph from "../src/Images/acetone-2023913-23048-968.png";

function App(props: any) {
  return (
    <div className="App-wrapper">
      <div className="backgroungGraph">
        <img src={graph} alt="" />
      </div>
      <Header />
      <ContentWithSwitcher switchFn={function () {}} />
      <footer className="footer"></footer>
    </div>
  );
}

export default App;
