import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { WithSwitchTickersHOC } from "../../HOC/withSwitchTickersHOC";
import { getPriceThunk } from "../../Redux/contentSlice";
import {
  startPriceListening,
  stopPriceListening,
} from "../../Redux/priceSlice";
import { RootState } from "../../Redux/store";
import { usePrice } from "../../hooks/useSelector";
import { SubmitHandler, useForm } from "react-hook-form";
import { IShippingFields } from "../../app.interface";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useActions } from "../../hooks/useActions";
import s from "./Content.module.css";
import Preloader from "./Preloader";
import Infoboard, { TypeArray } from "./Infoboard";

type StateType = {
  coinIdSend: string;
  coinIdGet: string;
  isFetching: boolean;
};

const InfoboardContainer: React.FC<StateType> = (props) => {
  return (
    <>
      {props.isFetching ? (
        <Preloader coinIdSend={""} coinIdGet={""} isFetching={false} />
      ) : null}
      <Infoboard
        coinIdSend={props.coinIdSend}
        coinIdGet={props.coinIdGet}
        isFetching={props.isFetching}
      />
    </>
  );
};

const mapStateToProps = (state: RootState) => {
  return {
    coinIdSend: state.contentReducer.coinIdSend,
    coinIdGet: state.contentReducer.coinIdGet,
    isFetching: state.contentReducer.isFetching,
  };
};

export default connect(mapStateToProps)(InfoboardContainer);
