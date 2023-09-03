import { useSelector } from "react-redux";
import { useAppSelector } from "./hooks";

export const useText = () => {
  const contentReducer = useAppSelector((state) => state.contentReducer); // связь со стейтом определенного редьюсера
  return contentReducer;
};
