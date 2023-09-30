import { useEffect, useState } from "react";
import { select } from "../Assets";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { IShippingFields } from "../../../app.interface";
import GetBlock from "./GetBlock";
import { WithSwitchTickersHOC } from "../../../HOC/withSwitchTickersHOC";

type PropsType = {
  price: number;
  count: number;
  getPriceThunk: (arg1: string, arg2: string) => void;
  coinIdSend: string;
  coinIdGet: string;
  switcher: boolean;
  register: UseFormRegister<IShippingFields>;
  switchFn: () => any;
  errors: FieldErrors<IShippingFields>;
};

const GetBlockContainer: React.FC<PropsType> = (props) => {
  const [secondConsist, setSecondConsist] = useState(false);

  select(
    ".GetBlock_select__item__-ZAU6",
    ".GetBlock_select2__6fd2U",
    ".GetBlock_select2__current__vsVe1"
  );

  useEffect(() => {
    props.getPriceThunk(props.coinIdSend, props.coinIdGet);
  }, [props.coinIdGet]);

  return (
    <GetBlock
      setSecondConsist={setSecondConsist}
      secondConsist={secondConsist}
      {...props}
      errors={props.errors}
      switchFn={props.switchFn}
    />
  );
};

const GetBlockWithSwitcher = WithSwitchTickersHOC(GetBlockContainer);

export default GetBlockWithSwitcher;
