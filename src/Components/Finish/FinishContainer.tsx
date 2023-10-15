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

import Finish from "./Finish";
import Preloader from "../Infoboard/Preloader";

type StateType = {
  isFetching: boolean;
};

const FinishContainer: React.FC<StateType> = (props) => {
  return (
    <>
      {props.isFetching ? (
        <Preloader coinIdSend={""} coinIdGet={""} isFetching={false} />
      ) : null}
      <Finish isFetching={props.isFetching} />
    </>
  );
};

const mapStateToProps = (state: RootState) => {
  return {
    isFetching: state.contentReducer.isFetching,
  };
};

export default connect(mapStateToProps)(FinishContainer);
