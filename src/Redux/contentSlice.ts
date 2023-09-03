import { createReducer, createSlice } from "@reduxjs/toolkit";
import { getRequest } from "../API/API";

const initialState = {
  count: "",
  price: "",
};

export const contentSlice = createSlice({
  name: "content",
  initialState,
  reducers: {
    writeText: (state = initialState, { payload: text }) => {
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
    setPrice: (state = initialState, { payload: data }) => {
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
