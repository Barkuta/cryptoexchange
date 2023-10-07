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
import { useActions } from "../../hooks/useActions";
import s from "./Content.module.css";
import Preloader from "../Infoboard/Preloader";

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
  isFetching: boolean;
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

  const { toggleIsFetching } = useActions();

  const onSubmit: SubmitHandler<IShippingFields> = (data) => {
    toggleIsFetching(true);
    axios.post(" https://back2-gamma.vercel.app/api ", data).then(() => {
      console.log(data);
      toggleIsFetching(false);
      navigate("/infoboard");
    });
  };

  // https://vercel-back-indol.vercel.app/api/   https://back2-gamma.vercel.app/api //fo development

  return (
    <>
      {props.isFetching ? (
        <Preloader coinIdSend={""} coinIdGet={""} isFetching={false} />
      ) : null}
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
    </>
  );
};

let mapStateToProps = (state: RootState) => {
  return {
    price: state.contentReducer.price,
    count: state.contentReducer.count,
    coinIdSend: state.contentReducer.coinIdSend,
    coinIdGet: state.contentReducer.coinIdGet,
    switcher: state.contentReducer.switcher,
    isFetching: state.contentReducer.isFetching,
  };
};

const ContentWithSwitcher = WithSwitchTickersHOC(ContentContainer);

export default connect(mapStateToProps, {
  getPriceThunk,
  startPriceListening,
  stopPriceListening,
})(ContentWithSwitcher);
