import { useState } from "react";
import { select } from "../Assets";
import s from "./GetBlock.module.css";

const GetBlock: React.FC = (props: any) => {
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
            <div className={s.select__item}>Bitcoin</div>
            <div className={s.select__item}>Ethereum</div>
            <div className={s.select__item}>Tether TRC20 (USDT)</div>
            <div className={s.select__item}>Tether ERC20 (USDT)</div>
            <div className={s.select__item}>Tether BEP20 (USDT)</div>
            <div className={s.select__item}>Наличные RUB</div>
            <div className={s.select__item}>Наличные USD</div>
          </div>
        </div>
        <input type="text" />
      </div>
      <div className={s.wallet}>
        <span>На кошелек*</span>
        <input type="text" />
      </div>
    </div>
  );
};

export default GetBlock;
