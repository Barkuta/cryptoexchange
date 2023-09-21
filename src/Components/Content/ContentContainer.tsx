import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { WithSwitchTickersHOC } from "../../HOC/withSwitchTickersHOC";
import { getPriceThunk } from "../../Redux/contentSlice";
import {
  startPriceListening,
  stopPriceListening,
} from "../../Redux/priceSlice";
import { RootState } from "../../Redux/store";
import Content from "./Content";
import { usePrice } from "../../hooks/useSelector";
import { SubmitHandler, useForm } from "react-hook-form";
import { IShippingFields } from "../../app.interface";
import axios from "axios";
import { useNavigate } from "react-router-dom";

type StateType = {
  price: number;
  count: number;
  getPriceThunk: () => void;
  coinIdSend: string;
  coinIdGet: string;
  switcher: boolean;
  startPriceListening: () => void;
  stopPriceListening: () => void;
  switchFn: () => any;
};

const ContentContainer: React.FC<StateType> = (props) => {
  const websocketPrice = usePrice();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IShippingFields>();

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<IShippingFields> = (data) => {
    axios.post("http://localhost:8888/api/exchangeInfo/save", data).then(() => {
      console.log(data);
      navigate("/infoboard");
    });
  };

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
      switchFn={props.switchFn}
      websocketPrice={websocketPrice}
      register={register}
      handleSubmit={handleSubmit}
      setValue={setValue}
      onSubmit={onSubmit}
      errors={errors}
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

const ContentWithSwitcher = WithSwitchTickersHOC(ContentContainer);

export default connect(mapStateToProps, {
  getPriceThunk,
  startPriceListening,
  stopPriceListening,
})(ContentWithSwitcher);
