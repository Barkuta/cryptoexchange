import React, { useState } from "react";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { IShippingFields } from "../../app.interface";
import { useAppDispatch } from "../../hooks/hooks";
import { usePrice } from "../../hooks/useSelector";

import {
  startPriceListening,
  stopPriceListening,
} from "../../Redux/priceSlice";
import s from "./Content.module.css";
import CustomerInfo from "./CustomerInfo/CustomerInfo";
import GetBlock from "./GetBlockOfContent/GetBlock";
import SendBlock from "./SendBlockOfContent/SendBlock";

type PropsType = {
  price: number;
  count: number;
  getPriceThunk: () => void;
  coinIdSend: string;
  coinIdGet: string;
  switcher: boolean;
  startPriceListening: () => void;
  stopPriceListening: () => void;
};

const Content: React.FC<PropsType> = (props) => {
  const [inputs, setInputs] = useState();

  const [ticker2Value, setTicker2Value] = useState(0);

  const price = usePrice();

  const dispatch = useAppDispatch();

  // useEffect(() => {
  //   dispatch(props.startPriceListening);
  //   return () => {
  //     dispatch(props.stopPriceListening);
  //   };
  // }, []);

  const { register, handleSubmit, watch, formState, setValue } =
    useForm<IShippingFields>();

  const { dirtyFields, touchedFields, isDirty } = formState;
  const onSubmit: SubmitHandler<IShippingFields> = (data) => {
    console.log(data);
  };

  let switchFn1: () => any = () => {
    if (props.switcher) {
      return Math.abs(props.count / props.price);
    } else {
      return Math.abs(props.count * props.price);
    }

    // const name = event.target.name;
    // const value = document.getElementById("ticker2");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={s.wrapper}>
      <div>
        <span>{Math.abs(price.p)}</span>
        <br />
        <span>{props.price}</span>
      </div>
      <div className={s.attention}>
        <div className={s.titleOne}>
          <span>Внимание!</span>
        </div>
        <div className={s.description}>
          <span>
            Уважаемые клиенты, сумма к получению фиксируется, если изменение
            курса было не более чем на 0.3%.Если сумма к получению изменилась,
            более чем на 0.3%, заявка будет пересчитана или произведен возврат
            согласно правилам сайта. Комиссия за возврат криптовалюты вычитается
            из полученной суммы.
          </span>
        </div>
      </div>
      <SendBlock
        getPriceThunk={props.getPriceThunk}
        coinIdSend={props.coinIdSend}
        coinIdGet={props.coinIdGet}
        setInputs={setInputs}
        inputs={inputs}
        ticker2Value={ticker2Value}
        register={register}
      />
      <GetBlock
        count={props.count}
        price={props.price}
        getPriceThunk={props.getPriceThunk}
        coinIdSend={props.coinIdSend}
        coinIdGet={props.coinIdGet}
        switcher={props.switcher}
        setInputs={setInputs}
        inputs={inputs}
        setTicker2Value={setTicker2Value}
        ticker2Value={ticker2Value}
        register={register}
        dirtyFields={dirtyFields}
        touchedFields={touchedFields}
        isDirty={isDirty}
      />
      <CustomerInfo
        switcher={props.switcher}
        setInputs={setInputs}
        inputs={inputs}
        register={register}
      />

      <button onClick={() => setValue("total_price", String(switchFn1()))}>
        IT
      </button>

      <div className={s.personInfo}>
        <div className={s.getTitle}>
          <span>Обмен</span>
        </div>
        <div className={s.change}>
          <ol>
            <li>
              Заполните все поля представленной формы. Нажмите кнопку
              «Обменять».
            </li>
            <li>
              Ознакомьтесь с условиями договора на оказание услуг обмена, если
              вы принимаете их, поставьте галочку в соответствующем поле и
              нажмите кнопку «Создать заявку».
            </li>
            <li>
              Оплатите заявку. Для этого следует совершить перевод необходимой
              суммы, следуя инструкциям на нашем сайте.
            </li>
            <li>
              После выполнения указанных действий, система переместит Вас на
              страницу «Состояние заявки», где будет указан статус вашего
              перевода.
            </li>
          </ol>
        </div>
      </div>
    </form>
  );
};

export default Content;
