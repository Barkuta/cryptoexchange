import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";
import Content from "./Components/Content/Content";
import ContentContainer from "./Components/Content/ContentContainer";
import Header from "./Components/Header/Header";
// import { store } from "./Redux/store";

function App(props: any) {
  return (
    <div className="App-wrapper">
      <Header />
      <ContentContainer />
      <footer className="footer"></footer>
    </div>
  );
}

export default App;
