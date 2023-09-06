import { createReducer, createSlice, Dispatch } from "@reduxjs/toolkit";
import { getRequest } from "../API/API";
import { InfoPriceType, priceAPI } from "../API/price-api";
import { AppDispatch } from "./store";

export type initialStateType = {
  infoPrice: {
    e: string | null; // Event type
    E: number | null; // Event time
    s: string | null; // Symbol
    t: number | null; // Trade ID
    p: number; // Price
    q: string | null; // Quantity
    b: number | null; // Buyer order ID
    a: number | null; // Seller order ID
    T: number | null; // Trade time
    m: boolean | null; // Is the buyer the market maker?
    M: boolean | null; // Ignore
  };
};

const initialState: initialStateType = {
  infoPrice: {
    e: null, // Event type
    E: null, // Event time
    s: null, // Symbol
    t: null, // Trade ID
    p: 0, // Price
    q: null, // Quantity
    b: null, // Buyer order ID
    a: null, // Seller order ID
    T: null, // Trade time
    m: null, // Is the buyer the market maker?
    M: null, // Ignore
  },
};

export const priceSlice = createSlice({
  name: "content",
  initialState,
  reducers: {
    setP: (state = initialState, { payload: info }): initialStateType => {
      return {
        ...state,
        infoPrice: info,
      };
    },
  },
});

let { setP } = priceSlice.actions;

let _newPriceHandlerCreator: ((info: InfoPriceType[]) => void) | null = null;

const newPriceHandlerCreator = (dispatch: Dispatch) => {
  if (_newPriceHandlerCreator === null) {
    _newPriceHandlerCreator = (info) => {
      dispatch(setP(info));
    };
  }
  return _newPriceHandlerCreator;
};

export const startPriceListening = () => async (dispatch: AppDispatch) => {
  priceAPI.start();
  priceAPI.subscride(newPriceHandlerCreator(dispatch));
};

export const stopPriceListening = () => async (dispatch: AppDispatch) => {
  priceAPI.unsubscribe(newPriceHandlerCreator(dispatch));
  priceAPI.stop();
};

export const { actions, reducer } = priceSlice;
