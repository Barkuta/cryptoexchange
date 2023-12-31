import { useMemo } from "react";
import { bindActionCreators } from "redux";
import { actions } from "../Redux/contentSlice";
import { useAppDispatch } from "./hooks";

const rootActions = {
  ...actions,
};

export const useActions = () => {
  const dispatch = useAppDispatch();
  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch]);
};
