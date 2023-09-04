import { useAppSelector } from "./hooks";

export const useText = () => {
  const contentReducer = useAppSelector((state) => state.contentReducer); // связь со стейтом определенного редьюсера
  return contentReducer;
};

export const usePrice = () => {
  const price = useAppSelector((state) => state.priceSlice.infoPrice); // связь со стейтом определенного редьюсера
  return price;
};
