import { useEffect, useState } from "react";
import { useActions } from "../../../hooks/useActions";
import { handelClick, select } from "../Assets";
import s from "./SendBlock.module.css";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { IShippingFields } from "../../../app.interface";

type PropsType = {
  price?: number;
  count?: number;
  getPriceThunk: (arg1: string, arg2: string) => void;
  coinIdSend: string;
  coinIdGet: string;
  register: UseFormRegister<IShippingFields>;
  errors: any;
};

const SendBlock: React.FC<PropsType> = (props) => {
  const [consist, setConsist] = useState(false);
  const { writeText } = useActions(); // диспатч
  let { setCurrentSendId } = useActions();

  useEffect(() => {
    props.getPriceThunk(props.coinIdSend, props.coinIdGet);
  }, [props.coinIdSend]);

  select(
    ".SendBlock_select__item__Glk1Z",
    ".SendBlock_select__uB-sj",
    ".SendBlock_select__current__IwlkI"
  );

  return (
    <div className={s.sendWrapper}>
      <div className={s.sendTitle}>
        <span>Отдаете</span>
      </div>
      <form className={s.send}>
        <div className={s.sendBlock}>
          <div className={s.inputBlock}>
            <div
              onClick={() => {
                consist == false ? setConsist(true) : setConsist(false);
              }}
              className={s.select}
            >
              <div className={s.select__header}>
                <span
                  className={s.select__current}
                  {...props.register("ticker1")}
                >
                  Bitcoin
                </span>
                <div className={s.select__icon}></div>
              </div>
              <div
                className={
                  consist == false ? s.select__body : s.select__body__active
                }
              >
                <div
                  id="BTC"
                  onClick={() => setCurrentSendId(handelClick("BTC"))}
                  className={s.select__item}
                >
                  Bitcoin
                </div>
                <div
                  id="ETH"
                  onClick={() => setCurrentSendId(handelClick("ETH"))}
                  className={s.select__item}
                >
                  Ethereum
                </div>
                <div
                  id="USDT"
                  onClick={() => setCurrentSendId(handelClick("USDT"))}
                  className={s.select__item}
                >
                  Tether TRC20 (USDT)
                </div>
                <div
                  id="USDT"
                  onClick={() => setCurrentSendId(handelClick("USDT"))}
                  className={s.select__item}
                >
                  Tether ERC20 (USDT)
                </div>
                <div
                  id="USDT"
                  onClick={() => setCurrentSendId(handelClick("USDT"))}
                  className={s.select__item}
                >
                  Tether BEP20 (USDT)
                </div>
                <div className={s.select__item}>Наличные RUB</div>
                <div className={s.select__item}>Наличные USD</div>
              </div>
            </div>
            <input
              id="1"
              type="text"
              placeholder="Count"
              {...props.register("count", {
                onChange: (e) => {
                  writeText(e.target.value);
                },
                required: true,
              })}
            />
          </div>
          {props.errors.count && (
            <span className={s.errorCount}>This field is required</span>
          )}
          <div className={s.rateInfo}>
            <span>Курс обмена:</span>
            <span className={s.span2}>Объем:</span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SendBlock;
