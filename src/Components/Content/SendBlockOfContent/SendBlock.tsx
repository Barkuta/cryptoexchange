import { useState } from "react";
import { useActions } from "../../../hooks/useActions";
import { select } from "../Assets";
import s from "./SendBlock.module.css";

const SendBlock: React.FC = (props: any) => {
  const [consist, setConsist] = useState(false);
  const { writeText } = useActions(); // диспатч

  select(
    ".SendBlock_select__item__Glk1Z",
    ".SendBlock_select__uB-sj",
    ".SendBlock_select__current__IwlkI"
  );

  return (
    <div className={s.send}>
      <div className={s.sendTitle}>
        <span>Отдаете</span>
      </div>
      <div className={s.sendBlock}>
        <div className={s.rateInfo}>
          <span>Курс обмена:</span>
          <span className={s.span2}>Объем:</span>
        </div>
        <div className={s.inputBlock}>
          <div
            onClick={() => {
              consist == false ? setConsist(true) : setConsist(false);
            }}
            className={s.select}
          >
            <div className={s.select__header}>
              <span className={s.select__current}>Bitcoin</span>
              <div className={s.select__icon}></div>
            </div>
            <div
              className={
                consist == false ? s.select__body : s.select__body__active
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
          <input
            id="1"
            type="text"
            placeholder="Count"
            onChange={(el) => writeText(el.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default SendBlock;
