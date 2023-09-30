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
    axios.post("https://vercel-back-indol.vercel.app/api/", data).then(() => {
      console.log(data);
      toggleIsFetching(false);
      navigate("/infoboard");
    });
  };

  return (
    <>
      {props.isFetching ? (
        <div className={s.preloader}>
          <svg
            version="1.1"
            id="L9"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 100 100"
            enable-background="new 0 0 0 0"
            xmlSpace="preserve"
          >
            <path
              fill="#2E5788"
              d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50"
            >
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="rotate"
                dur="1s"
                from="0 50 50"
                to="360 50 50"
                repeatCount="indefinite"
              />
            </path>
          </svg>
        </div>
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
