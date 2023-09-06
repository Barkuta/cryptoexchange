import { createReducer, createSlice } from "@reduxjs/toolkit";
import { Dispatch } from "react";
import { getRequest } from "../API/API";
import { AppDispatch } from "./store";

type initialStateType = {
  count: number;
  price: number;
};

const initialState: initialStateType = {
  count: 0,
  price: 0,
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

export const getPriceThunk = () => async (dispatch: AppDispatch) => {
  const result = await getRequest.getPrice();
  dispatch(setPrice(Math.abs(result.price)));
};

export const { actions, reducer } = contentSlice;
