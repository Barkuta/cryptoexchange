import { createSlice } from "@reduxjs/toolkit";
import { getRequest } from "../API/API";
import { AppDispatch } from "./store";

type initialStateType = {
  count: number;
  price: number;
  coinIdSend: string;
  coinIdGet: string;
  switcher: boolean;
};

const initialState: initialStateType = {
  count: 0,
  price: 0,
  coinIdSend: "BTC",
  coinIdGet: "USDT",
  switcher: false,
};

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
    setSwitchCondition: (
      state = initialState,
      { payload: value }
    ): initialStateType => {
      return {
        ...state,
        switcher: value,
      };
    },
  },
});

let { setPrice } = contentSlice.actions;
let { setSwitchCondition } = contentSlice.actions;

export const getPriceThunk =
  (coinIdSend?: string, coinIdGet?: string) =>
  async (dispatch: AppDispatch) => {
    if (coinIdSend !== coinIdGet) {
      let result = await getRequest.getPrice(coinIdSend, coinIdGet);
      if (!result) {
        result = await getRequest.getPrice(coinIdGet, coinIdSend);
        dispatch(setPrice(Math.abs(result.price)));
        dispatch(setSwitchCondition(true));
        console.log("Error2");
      } else dispatch(setSwitchCondition(false));
      dispatch(setPrice(Math.abs(result.price)));
    } //Можно alert || true/false swithcer
  };

export const { actions, reducer } = contentSlice;
