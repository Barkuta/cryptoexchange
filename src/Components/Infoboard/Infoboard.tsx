import s from "./Infoboard.module.css";
import btc from "../../Images/bitcoin.svg";
import eth from "../../Images/ethereum-eth.svg";
import usdt from "../../Images/tether-1.svg";
import axios from "axios";
import React, { useEffect, useState, memo } from "react";
import { connect } from "react-redux";
import { RootState } from "../../Redux/store";
import { useActions } from "../../hooks/useActions";
import Preloader from "./Preloader";
import ProgressBar from "react-bootstrap/ProgressBar";
import { Link, useNavigate } from "react-router-dom";

// export type TypeArray = { id: number; count: number };

export type TypeArray = any;

export type PropsType = {
  coinIdSend: string;
  coinIdGet: string;
  isFetching: boolean;
};

const Infoboard: React.FC<PropsType> = memo((props: PropsType) => {
  const [info, setInfo] = useState<TypeArray[]>([{ id: 1 }]);

  useEffect(() => {
    {
      getInfoDescription();
    }
  }, []);

  const { toggleIsFetching } = useActions();

  const getInfoDescription = () => {
    toggleIsFetching(true);
    axios.get("https://vercel-back-indol.vercel.app/api/").then((response) => {
      setInfo(response.data);
      toggleIsFetching(false);
    });
  };

  console.log(info);

  const navigate = useNavigate();

  const submit = () => {
    navigate("/finish");
  };

  const submit1 = () => {
    navigate("/");
  };

  return (
    <form>
      <div className={s.wrapper}>
        <div className={s.header}>
          <span>Ожидается оплата</span>
        </div>
        <div className={s.detailsBlock}>
          <div className={s.detailsBlockHeader}>
            <span>Детали обмена</span>
          </div>
          <div className={s.exchangeBlock}>
            <div className={s.send}>
              <div className={s.sendInfo}>
                <div className={s.sendInfoText}>
                  <span>Вы отдаете</span>
                </div>
                <div className={s.sendInfoTicker}>
                  <span>{`${info[info.length - 1].count} ${
                    info[info.length - 1].ticker1
                  }`}</span>
                </div>
              </div>
              <div className={s.sendItem}>
                {props.coinIdSend === "BTC" && <img src={btc} alt="" />}
                {props.coinIdSend === "ETH" && <img src={eth} alt="" />}
                {props.coinIdSend === "USDT" && <img src={usdt} alt="" />}
              </div>
            </div>
            <div className={s.point}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="46"
                viewBox="0 0 32 46"
                fill="none"
                style={{ width: "100%", verticalAlign: "middle" }}
              >
                <path
                  d="M5 5L26.9375 23L5 41"
                  stroke="white"
                  stroke-width="5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div className={s.get}>
              <div className={s.getItem}>
                {props.coinIdGet === "BTC" && <img src={btc} alt="" />}
                {props.coinIdGet === "ETH" && <img src={eth} alt="" />}
                {props.coinIdGet === "USDT" && <img src={usdt} alt="" />}
              </div>
              <div className={s.getInfo}>
                <div className={s.getInfoText}>
                  <span>Вы получаете</span>
                </div>
                <div className={s.getInfoTicker}>
                  <span>{`${info[info.length - 1].total_price} ${
                    info[info.length - 1].ticker2
                  }`}</span>
                </div>
              </div>
            </div>
          </div>
          <div className={s.walletText}>
            <span>{`Получаете на: ${info[info.length - 1].wallet} `}</span>
          </div>
        </div>
        <div className={s.description}>
          <div className={s.app}>
            <span>{`Номер заявки: ${info[info.length - 1].id}`}</span>
          </div>
          <div className={s.date}>
            <span>{`Дата заявки: ${info[info.length - 1].created_at}`}</span>
          </div>
          <div className={s.infoBlock}>
            <span>{`Отдаете: ${info[info.length - 1].count} ${
              info[info.length - 1].ticker1
            }`}</span>
            <span>{`Получаете: ${info[info.length - 1].total_price} ${
              info[info.length - 1].ticker2
            }`}</span>
            <span>Курс 1 BTC = 1 ETH</span>
          </div>
        </div>
        <div className={s.requisites}>
          <div className={s.qrBlock}>
            <div className={s.qr}></div>
          </div>
          <div className={s.acceptBlock}>
            <div className={s.acceptBlockText}>Переведите на: </div>
            <div className={s.acceptWallet}>
              {props.coinIdSend === "BTC" && (
                <span>1NHMsCR3NoBaJGMRgRPQj3msHyfgE3m4b5</span>
              )}
              {props.coinIdSend === "ETH" && (
                <span>0xa323a68df12cef13a8c7b94fa305040713388c9e</span>
              )}
              {props.coinIdSend === "USDT" && (
                <span>TGQBbdypCCHMBiNot2hdtfer72noaDtDto</span>
              )}
            </div>
            <div className={s.submitDescription}>
              <span>
                После осуществления перевода, обязательно нажмите кнопку
                "Оплатил" и ожидайте завершения обмена.
              </span>
            </div>
            <div className={s.buttonWrapper}>
              <div className={s.button1}>
                <button onClick={submit}>Оплатил</button>
              </div>
              <div className={s.button2}>
                <button onClick={submit1}>Отмена</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
});

export default Infoboard;
