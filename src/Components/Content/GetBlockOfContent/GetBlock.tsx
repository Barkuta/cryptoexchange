import { useEffect, useState } from "react";
import { useAppDispatch } from "../../../hooks/hooks";
import { useActions } from "../../../hooks/useActions";
import { handelClick, select } from "../Assets";
import s from "./GetBlock.module.css";
import $, { event, when } from "jquery";
import { visitLexicalEnvironment } from "typescript";
import { toHaveFormValues } from "@testing-library/jest-dom/matchers";
import {
  SubmitHandler,
  useForm,
  UseFormRegister,
  useFormState,
} from "react-hook-form";
import { IShippingFields } from "../../../app.interface";

type PropsType = {
  price: number;
  count: number;
  getPriceThunk: (arg1: string, arg2: string) => void;
  coinIdSend: string;
  coinIdGet: string;
  switcher: boolean;
  setInputs: any;
  inputs: any;
  setTicker2Value: any;
  ticker2Value: any;
  register: UseFormRegister<IShippingFields>;
  dirtyFields: any;
  touchedFields: any;
  isDirty: any;
};

const GetBlock: React.FC<PropsType> = (props) => {
  const [secondConsist, setSecondConsist] = useState(false);

  let { setCurrentGetId } = useActions();

  select(
    ".GetBlock_select__item__-ZAU6",
    ".GetBlock_select2__6fd2U",
    ".GetBlock_select2__current__vsVe1"
  );

  useEffect(() => {
    props.getPriceThunk(props.coinIdSend, props.coinIdGet);
  }, [props.coinIdGet]);

  let switchFn: () => any = () => {
    if (props.switcher) {
      return Math.abs(props.count / props.price);
    } else {
      return Math.abs(props.count * props.price);
    }

    // const name = event.target.name;
    // const value = document.getElementById("ticker2");
  };

  // let handleChangeGet = (event: any) => {
  //   let name = event.target.name;
  //   let value = event.target.value;
  //   props.setInputs((values: any) => ({ ...values, [name]: value }));
  // };

  // let handleChangeGetTicker2 = (event: any) => {
  //   const name = event.target.name;
  //   const value = document.getElementById("ticker2");
  //   console.log(value);
  //   props.setInputs((values: any) => ({ ...values, [name]: value }));
  // };

  // const { register, handleSubmit, watch } = useForm<IShippingFields>();

  return (
    <form className={s.get}>
      <div className={s.getTitle}>
        <span>Получаете</span>
      </div>
      <div className={s.inputBlock}>
        <div
          onClick={() => {
            secondConsist == false
              ? setSecondConsist(true)
              : setSecondConsist(false);
          }}
          className={s.select2}
        >
          <div className={s.select2__header}>
            <span className={s.select2__current}> Tether TRC20 (USDT)</span>
            <div className={s.select2__icon}></div>
          </div>
          <div
            className={
              secondConsist == false ? s.select__body2 : s.select__body__active2
            }
          >
            <div
              id="BTC"
              onClick={() => setCurrentGetId(handelClick("BTC"))}
              className={s.select__item}
            >
              Bitcoin
            </div>
            <div
              id="ETH"
              onClick={() => setCurrentGetId(handelClick("ETH"))}
              className={s.select__item}
            >
              Ethereum
            </div>
            <div
              id="USDT"
              onClick={() => setCurrentGetId(handelClick("USDT"))}
              className={s.select__item}
            >
              Tether TRC20 (USDT)
            </div>
            <div
              id="USDT"
              onClick={() => setCurrentGetId(handelClick("USDT"))}
              className={s.select__item}
            >
              Tether ERC20 (USDT)
            </div>
            <div
              id="USDT"
              onClick={() => setCurrentGetId(handelClick("USDT"))}
              className={s.select__item}
            >
              Tether BEP20 (USDT)
            </div>
            <div className={s.select__item}>Наличные RUB</div>
            <div className={s.select__item}>Наличные USD</div>
          </div>
        </div>
        <input
          type="text"
          id="ticker2"
          value={switchFn()}
          // onChange={handleChangeGetTicker2}
          {...props.register("total_price", {
            setValueAs: () => {
              return switchFn();
            },
          })}
        />
      </div>
      <div className={s.wallet}>
        <span>На кошелек*</span>
        <input
          // type="text"
          //  name="Wallet"
          // {...register("wallet")}
          // onChange={handleChangeGet}
          {...props.register("wallet")}
        />
      </div>
    </form>
  );
};

export default GetBlock;
