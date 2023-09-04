import { createReducer, createSlice } from "@reduxjs/toolkit";
import { Dispatch } from "react";
import { getRequest } from "../API/API";

type initialStateType = {
  count: string;
  price: string;
};

const initialState: initialStateType = {
  count: "",
  price: "",
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
  },
});

let { setPrice } = contentSlice.actions;

// let valueOfPrice = () =>

export const getPriceThunk = () => async (dispatch: any) => {
  const result = await getRequest.getPrice();
  dispatch(setPrice(result[0].price));
};

export const { actions, reducer } = contentSlice;
