import { createReducer, createSlice } from "@reduxjs/toolkit";
import { stringify } from "querystring";
import { getRequest } from "../API/API";
import { AppDispatch } from "./store";

type initialStateType = {
  count: number;
  price: number;
  coinIdSend: string;
  coinIdGet: string;
};

const initialState: initialStateType = {
  count: 0,
  price: 0,
  coinIdSend: "BTC",
  coinIdGet: "USDT",
};

let coinIdSend1 = initialState.coinIdSend;

let coinIdGet1 = initialState.coinIdGet;

export const contentSlice = createSlice({
  name: "content",
  initialState,
  reducers: {
    writeText: (state = initialState, { payload: text }): initialStateType => {
      // let newText = {
      //   //создаем переменную в которой описываем структуру итерируемого объекта
      //   id: 2,
      //   text: text,
      // };
      // return {
      //   // возвращаем копию state
      //   ...state,
      //   text: [newText, ...state.text], // возвращаем тот массив стейта, в котором будет итерироваться newState (переменная, содержазая структуру объекта)
      // };
      return {
        ...state,
        count: text, //text:(часть state) text(action)
      };
    },
    setPrice: (state = initialState, { payload: data }): initialStateType => {
      return {
        ...state,
        price: data,
      };
    },
    setCurrentSendId: (
      state = initialState,
      { payload: id }
    ): initialStateType => {
      return {
        ...state,
        coinIdSend: id,
      };
    },
    setCurrentGetId: (
      state = initialState,
      { payload: id2 }
    ): initialStateType => {
      return {
        ...state,
        coinIdGet: id2,
      };
    },
  },
});

let { setPrice } = contentSlice.actions;

// let valueOfPrice = () =>

export const getPriceThunk =
  (coinIdSend?: any, coinIdGet?: any) => async (dispatch: AppDispatch) => {
    const result = await getRequest.getPrice(coinIdSend, coinIdGet);
    dispatch(setPrice(Math.abs(result.price)));
  };

export const { actions, reducer } = contentSlice;
