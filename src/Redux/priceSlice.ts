import { createReducer, createSlice, Dispatch } from "@reduxjs/toolkit";
import { getRequest } from "../API/API";
import { InfoPriceType, priceAPI } from "../API/price-api";

type initialStateType = {};

const initialState: initialStateType = {
  p: [] as InfoPriceType[],
};

export const priceSlice = createSlice({
  name: "content",
  initialState,
  reducers: {
    setP: (state = initialState, { payload: info }): initialStateType => {
      return {
        ...state,
        p: info,
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

export const startPriceListening = () => async (dispatch: any) => {
  priceAPI.start();
  priceAPI.subscride(newPriceHandlerCreator(dispatch));
};

export const stopPriceListening = () => async (dispatch: any) => {
  priceAPI.unsubscribe(newPriceHandlerCreator(dispatch));
  priceAPI.stop();
};

export const { actions, reducer } = priceSlice;
