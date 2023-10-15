import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";
import ContentWithSwitcher from "./Components/Content/ContentContainer";
import Header from "./Components/Header/Header";
import graph from "../src/Images/acetone-2023913-23048-968.png";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Rules from "./Components/Rules/Rules";
import Aml from "./Components/AML/Aml";
import Contacts from "./Components/Contacts/Contacts";
import InfoboardContainer from "./Components/Infoboard/InfoboardContainer";
import FinishContainer from "./Components/Finish/FinishContainer";
import Footer from "./Components/Footer/Footer";

function App(props: any) {
  return (
    <div className="App-wrapper">
      {/* <div className="backgroungGraph">
        <img src={graph} alt="" />
      </div> */}
      <Header />
      <Routes>
        <Route
          path="/"
          element={<ContentWithSwitcher switchFn={function () {}} />}
        />
        <Route path="/infoboard" element={<InfoboardContainer />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/amlpolicy" element={<Aml />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/finish" element={<FinishContainer />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
