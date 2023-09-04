import axios from "axios";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getPriceThunk } from "../../Redux/contentSlice";
import Content from "./Content";

let mapStateToProps = (state: any) => {
  return {
    price: state.contentReducer.price,
  };
};

const ContentContainer: React.FC = connect(
  mapStateToProps,
  getPriceThunk
)(Content);
export default ContentContainer;
