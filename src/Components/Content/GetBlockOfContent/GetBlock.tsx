import { useEffect, useState } from "react";
import { useActions } from "../../../hooks/useActions";
import { handelClick, select } from "../Assets";
import s from "./GetBlock.module.css";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { IShippingFields } from "../../../app.interface";

type PropsType = {
  register: UseFormRegister<IShippingFields>;
  switchFn: () => any;
  setSecondConsist: React.Dispatch<React.SetStateAction<boolean>>;
  secondConsist: boolean;
  errors: FieldErrors<IShippingFields>;
  coinIdGet: string;
};

const GetBlock: React.FC<PropsType> = (props) => {
  let { setCurrentGetId } = useActions();

  select(
    ".GetBlock_select__item__-ZAU6",
    ".GetBlock_select2__6fd2U",
    ".GetBlock_select2__current__vsVe1"
  );

  return (
    <div className={s.getWrapper}>
      <div className={s.getTitle}>
        <span>Получаете</span>
      </div>
      <form className={s.get}>
        <div className={s.inputBlock}>
          <div
            onClick={() => {
              props.secondConsist == false
                ? props.setSecondConsist(true)
                : props.setSecondConsist(false);
            }}
            className={s.select2}
          >
            <div className={s.select2__header}>
              <span
                className={s.select2__current}
                {...props.register("ticker2")}
              >
                Tether TRC20(USDT)
              </span>
              <div className={s.select2__icon}></div>
            </div>
            <div
              className={
                props.secondConsist == false
                  ? s.select__body2
                  : s.select__body__active2
              }
            >
              <div
                id="BTC"
                onClick={() => setCurrentGetId(handelClick("BTC"))}
                className={s.select__item}
              >
                Bitcoin(BTC)
              </div>
              <div
                id="ETH"
                onClick={() => setCurrentGetId(handelClick("ETH"))}
                className={s.select__item}
              >
                Ethereum(ETH)
              </div>
              <div
                id="USDT"
                onClick={() => setCurrentGetId(handelClick("USDT"))}
                className={s.select__item}
              >
                Tether TRC20(USDT)
              </div>
              <div
                id="TRX"
                onClick={() => setCurrentGetId(handelClick("TRX"))}
                className={s.select__item}
              >
                Tron(TRX)
              </div>
              <div
                id="XRP"
                onClick={() => setCurrentGetId(handelClick("XRP"))}
                className={s.select__item}
              >
                Ripple(XRP)
              </div>
              <div
                id="SOL"
                onClick={() => setCurrentGetId(handelClick("SOL"))}
                className={s.select__item}
              >
                Solana(SOL)
              </div>
              <div
                id="BNB"
                onClick={() => setCurrentGetId(handelClick("BNB"))}
                className={s.select__item}
              >
                Binance Coin(BNB)
              </div>
              <div
                id="MATIC"
                onClick={() => setCurrentGetId(handelClick("MATIC"))}
                className={s.select__item}
              >
                Polygon(MATIC)
              </div>
              <div
                id="DOT"
                onClick={() => setCurrentGetId(handelClick("DOT"))}
                className={s.select__item}
              >
                Polkadot(DOT)
              </div>
            </div>
          </div>
          <input
            type="text"
            id="ticker2"
            value={props.switchFn()}
            {...props.register("total_price")}
          />
        </div>
        <div className={s.wallet}>
          <div className={s.walletTextBlock}>
            <span>
              На кошелек в сети {props.coinIdGet == "USDT" && "TRC20"}
              {props.coinIdGet == "BTC" && "Bictoin(BTC)"}
              {props.coinIdGet == "ETH" && "Ethereum(ERC20)"}
              {props.coinIdGet == "TRX" && "Tron(TRC20)"}
              {props.coinIdGet == "DOT" && "Polkadot(DOT)"}
              {props.coinIdGet == "XRP" && "Ripple"}
              {props.coinIdGet == "SOL" && "Solana(SOL)"}
              {props.coinIdGet == "BNB" && "BEP20"}
              {props.coinIdGet == "MATIC" && "Polygon(MATIC)"}*
            </span>
          </div>
          <input
            {...props.register("wallet", {
              required: true,
            })}
          />
          {props.errors.wallet && (
            <span className={s.errorWallet}>This field is required</span>
          )}
        </div>
        {props.coinIdGet == "XRP" && (
          <div className={s.wallet}>
            <div className={s.walletTextBlock}>MEMO(если требуется):</div>
            <input
              {...props.register("memo", {
                required: false,
                value: "0",
              })}
            />
          </div>
        )}
      </form>
    </div>
  );
};

export default GetBlock;
