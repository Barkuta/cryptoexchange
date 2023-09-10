import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getPriceThunk } from "../../Redux/contentSlice";
import {
  startPriceListening,
  stopPriceListening,
} from "../../Redux/priceSlice";
import { RootState } from "../../Redux/store";
import Content from "./Content";

type StateType = {
  price: number;
  count: number;
  getPriceThunk: () => void;
  coinIdSend: string;
  coinIdGet: string;
  switcher: boolean;
  startPriceListening: () => void;
  stopPriceListening: () => void;
};

const ContentContainer: React.FC<StateType> = (props) => {
  return (
    <Content
      price={props.price}
      count={props.count}
      getPriceThunk={props.getPriceThunk}
      coinIdSend={props.coinIdSend}
      coinIdGet={props.coinIdGet}
      switcher={props.switcher}
      startPriceListening={props.startPriceListening}
      stopPriceListening={props.stopPriceListening}
    />
  );
};

let mapStateToProps = (state: RootState) => {
  return {
    price: state.contentReducer.price,
    count: state.contentReducer.count,
    coinIdSend: state.contentReducer.coinIdSend,
    coinIdGet: state.contentReducer.coinIdGet,
    switcher: state.contentReducer.switcher,
  };
};

export default connect(mapStateToProps, {
  getPriceThunk,
  startPriceListening,
  stopPriceListening,
})(ContentContainer);
