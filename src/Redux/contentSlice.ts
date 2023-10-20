import { createSlice } from "@reduxjs/toolkit";
import { getRequest } from "../API/API";
import { AppDispatch } from "./store";

type initialStateType = {
  count: number;
  price: number;
  coinIdSend: string;
  coinIdGet: string;
  switcher: boolean;
  isFetching: boolean;
  error: boolean;
};

const initialState: initialStateType = {
  count: 0,
  price: 0,
  coinIdSend: "BTC",
  coinIdGet: "USDT",
  switcher: false,
  isFetching: false,
  error: false,
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
    toggleIsFetching: (
      state = initialState,
      { payload: isFetching }
    ): initialStateType => {
      return {
        ...state,
        isFetching: isFetching,
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
      let result2 = await getRequest.getPrice(coinIdGet, coinIdSend);
      if (!result && !result2) {
        dispatch(setPrice(0));
        alert("Пары не существует");
      }
      if (!result && result2) {
        dispatch(setPrice(Math.abs(result2.price)));
        dispatch(setSwitchCondition(true));
        console.log("Error2");
      } else if (result) {
        dispatch(setSwitchCondition(false));
        dispatch(setPrice(Math.abs(result.price)));
      }
    } else {
      alert("Пары не существует");
    } //Можно alert || true/false swithcer
  };

export const { actions, reducer } = contentSlice;
