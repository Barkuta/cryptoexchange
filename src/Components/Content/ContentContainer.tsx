import axios from "axios";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { getPriceThunk } from "../../Redux/contentSlice";
import { RootState } from "../../Redux/store";
import Content from "./Content";

type StateType = {
  price: number;
  count: number;
  getPriceThunk: () => void;
  coinIdSend: string;
  coinIdGet: string;
};

const ContentContainer: React.FC<StateType> = (props) => {
  return (
    <Content
      price={props.price}
      count={props.count}
      getPriceThunk={props.getPriceThunk}
      coinIdSend={props.coinIdSend}
      coinIdGet={props.coinIdGet}
    />
  );
};

let mapStateToProps = (state: RootState) => {
  return {
    price: state.contentReducer.price,
    count: state.contentReducer.count,
    coinIdSend: state.contentReducer.coinIdSend,
    coinIdGet: state.contentReducer.coinIdGet,
  };
};

export default connect(mapStateToProps, { getPriceThunk })(ContentContainer);
