import axios from "axios";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getPriceThunk } from "../../Redux/contentSlice";
import { RootState } from "../../Redux/store";
import Content from "./Content";

let mapStateToProps = (state: RootState) => {
  return {
    price: state.contentReducer.price,
    count: state.contentReducer.count,
  };
};

const ContentContainer: React.FC = connect(
  mapStateToProps,
  getPriceThunk
)(Content);
export default ContentContainer;
