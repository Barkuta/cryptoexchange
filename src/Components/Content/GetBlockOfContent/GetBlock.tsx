import { useEffect, useState } from "react";
import { handelClick, select } from "../Assets";
import s from "./GetBlock.module.css";

type PropsType = {
  price: number;
  count: number;
};

const GetBlock: React.FC<PropsType> = (props) => {
  const [secondConsist, setSecondConsist] = useState(false);

  select(
    ".GetBlock_select__item__-ZAU6",
    ".GetBlock_select2__6fd2U",
    ".GetBlock_select2__current__vsVe1"
  );

  return (
    <div className={s.get}>
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
            <span className={s.select2__current}>Bitcoin</span>
            <div className={s.select2__icon}></div>
          </div>
          <div
            className={
              secondConsist == false ? s.select__body2 : s.select__body__active2
            }
          >
            <div
              id="BTC"
              onClick={() => handelClick("BTC")}
              className={s.select__item}
            >
              Bitcoin
            </div>
            <div
              id="ETH"
              onClick={() => handelClick("ETH")}
              className={s.select__item}
            >
              Ethereum
            </div>
            <div
              id="USDT"
              onClick={() => handelClick("USDT")}
              className={s.select__item}
            >
              Tether TRC20 (USDT)
            </div>
            <div
              id="USDT"
              onClick={() => handelClick("USDT")}
              className={s.select__item}
            >
              Tether ERC20 (USDT)
            </div>
            <div
              id="USDT"
              onClick={() => handelClick("USDT")}
              className={s.select__item}
            >
              Tether BEP20 (USDT)
            </div>
            <div className={s.select__item}>Наличные RUB</div>
            <div className={s.select__item}>Наличные USD</div>
          </div>
        </div>
        <input type="text" value={props.count * props.price} />
      </div>
      <div className={s.wallet}>
        <span>На кошелек*</span>
        <input type="text" />
      </div>
    </div>
  );
};

export default GetBlock;
