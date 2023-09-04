import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAppDispatch } from "../../hooks/hooks";
import { useActions } from "../../hooks/useActions";
import { useText } from "../../hooks/useSelector";
import { actions, getPriceThunk } from "../../Redux/contentSlice";
import {
  startPriceListening,
  stopPriceListening,
} from "../../Redux/priceSlice";
import s from "./Content.module.css";

let socket = new WebSocket("wss://stream.binance.com:9443/ws/btcusdt@trade");

const Content: React.FC = (props: any) => {
  const [consist, setConsist] = useState(false);
  const [secondConsist, setSecondConsist] = useState(false);
  const contentReducer = useText(); // связь со стейтом определенного редьюсера
  const [pr, setPr] = useState({ p: 0 });

  useEffect(() => {
    socket.addEventListener("message", (e) => {
      setPr(JSON.parse(e.data));
    });
  });

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(startPriceListening());
    return () => {
      dispatch(stopPriceListening());
    };
  }, []);

  console.log(pr);

  const { writeText } = useActions(); // диспатч

  let select = () => {
    let selectItem = document.querySelectorAll(".Content_select__item__AiEiR");

    selectItem.forEach((item) => {
      item.addEventListener("click", selectChoose);
    });

    function selectChoose(this: any) {
      let text = this.innerText;
      let currentText = this.closest(".Content_select__G7xdn").querySelector(
        ".Content_select__current__uMmDJ"
      );
      currentText.innerText = text;
    }
  };

  select();

  // let request = props.request;
  // useEffect(() => {
  //   getRequest.getApi();
  // }, []);

  // const getRequest = {
  //   getApi() {
  //     return axios
  //       .get("https://data-api.binance.vision/api/v3/ticker/price", {})
  //       .then((response) => {
  //         setResult(response.data);
  //       });
  //   },
  // };

  // console.log(result);

  // let request = getRequest.getApi().then((response) => console.log(response));

  // console.log(request);

  // inputEl.addEventListener("1", () => {
  //   inputEl.value = inputEl.value.replace(/[^0-9]/g, "");
  // });

  // let secondSelect = () => {
  //   let selectItem = document.querySelectorAll(".Content_select__item__AiEiR");

  //   selectItem.forEach((item) => {
  //     item.addEventListener("click", selectChoose);
  //   });

  //   function selectChoose() {
  //     let text = this.innerText;
  //     let currentText = this.closest(".Content_select2__3cIMW").querySelector(
  //       ".Content_select2__current__0WGzW"
  //     );
  //     currentText.innerText = text;
  //   }
  // };

  // secondSelect();

  // let mapingResult = result.map((result) => <div>{result[0]}</div>);

  // console.log(props.result.price);

  return (
    <div className={s.wrapper}>
      <div>
        <span>{Math.abs(pr.p)}</span>
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
                secondConsist == false
                  ? s.select__body2
                  : s.select__body__active2
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
      <div className={s.personInfo}>
        <div className={s.getTitle}>
          <span>Личные данные</span>
        </div>
        <div className={s.emailBlock}>
          <span>E-mail*</span>
          <input type="email" />
        </div>
        <div className={s.button}>
          <button>Обменять</button>
        </div>
      </div>
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
    </div>
  );
};

export default Content;
