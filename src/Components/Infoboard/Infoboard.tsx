import s from "./Infoboard.module.css";
import btc from "../../Images/bitcoin.svg";
import eth from "../../Images/ethereum-eth.svg";
import usdt from "../../Images/tether-1.svg";
import trx from "../../Images/trx.png";
import xrp from "../../Images/xrp.png";
import sol from "../../Images/sol.png";
import bnb from "../../Images/bnb.png";
import matic from "../../Images/matic.png";
import dot from "../../Images/DOT.webp";

import axios from "axios";
import React, { useEffect, useState, memo } from "react";
import { connect } from "react-redux";
import { RootState } from "../../Redux/store";
import { useActions } from "../../hooks/useActions";
import Preloader from "./Preloader";
import ProgressBar from "react-bootstrap/ProgressBar";
import { Link, useNavigate } from "react-router-dom";

// export type TypeArray = { id: number; count: number };

export type TypeArray = {
  created_at: string;
  id: number;
  count: string;
  total_price: string;
  wallet: string;
  email: string;
  ticker1: string;
  ticker2: string;
  memo: string;
};

export type PropsType = {
  coinIdSend: string;
  coinIdGet: string;
  isFetching: boolean;
};

const Infoboard: React.FC<PropsType> = memo((props: PropsType) => {
  const [info, setInfo] = useState<TypeArray>({
    id: 0,
    count: "",
    total_price: "",
    wallet: "",
    email: "",
    ticker1: "",
    ticker2: "",
    memo: "",
    created_at: "",
  });

  useEffect(() => {
    {
      getInfoDescription();
    }
  }, []);

  const { toggleIsFetching } = useActions();

  const getInfoDescription = () => {
    toggleIsFetching(true);
    axios.get("https://vercel-back-v1.vercel.app/api").then((response) => {
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
                  <span>{`${info.count} ${info.ticker1}`}</span>
                </div>
              </div>
              <div className={s.sendItem}>
                {info.ticker1 === "Bitcoin(BTC)" && <img src={btc} alt="" />}
                {info.ticker1 === "Ethereum(ETH)" && <img src={eth} alt="" />}
                {info.ticker1 === "Tether TRC20(USDT)" && (
                  <img src={usdt} alt="" />
                )}
                {info.ticker1 === "Tron(TRX)" && <img src={trx} alt="" />}
                {info.ticker1 === "Ripple(XRP)" && <img src={xrp} alt="" />}
                {info.ticker1 === "Solana(SOL)" && <img src={sol} alt="" />}
                {info.ticker1 === "Binance Coin(BNB)" && (
                  <img src={bnb} alt="" />
                )}
                {info.ticker1 === "Polygon(MATIC)" && (
                  <img src={matic} alt="" />
                )}
                {info.ticker1 === "Polkadot(DOT)" && <img src={dot} alt="" />}
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
                {info.ticker2 === "Bitcoin(BTC)" && <img src={btc} alt="" />}
                {info.ticker2 === "Ethereum(ETH)" && <img src={eth} alt="" />}
                {info.ticker2 === "Tether TRC20(USDT)" && (
                  <img src={usdt} alt="" />
                )}
                {info.ticker2 === "Tron(TRX)" && <img src={trx} alt="" />}
                {info.ticker2 === "Ripple(XRP)" && <img src={xrp} alt="" />}
                {info.ticker2 === "Solana(SOL)" && <img src={sol} alt="" />}
                {info.ticker2 === "Binance Coin(BNB)" && (
                  <img src={bnb} alt="" />
                )}
                {info.ticker2 === "Polygon(MATIC)" && (
                  <img src={matic} alt="" />
                )}
                {info.ticker2 === "Polkadot(DOT)" && <img src={dot} alt="" />}
              </div>
              <div className={s.getInfo}>
                <div className={s.getInfoText}>
                  <span>Вы получаете</span>
                </div>
                <div className={s.getInfoTicker}>
                  <span>{`${info.total_price} ${info.ticker2}`}</span>
                </div>
              </div>
            </div>
          </div>
          <div className={s.walletText}>
            <span>{`Получаете на: ${info.wallet} `}</span>
          </div>
        </div>
        <div className={s.description}>
          <div className={s.app}>
            <span>{`Номер заявки: ${info.id}`}</span>
          </div>
          <div className={s.date}>
            <span>{`Дата заявки: ${info.created_at}`}</span>
          </div>
          <div className={s.infoBlock}>
            <span>{`Отдаете: ${info.count} ${info.ticker1}`}</span>
            <span>{`Получаете: ${info.total_price} ${info.ticker2}`}</span>
          </div>
        </div>
        <div className={s.requisites}>
          <div className={s.acceptBlock}>
            <div className={s.acceptBlockText}>Как перевести: </div>
            {/* <div className={s.acceptWallet}>
              {props.coinIdSend === "BTC" && (
                <span>1NHMsCR3NoBaJGMRgRPQj3msHyfgE3m4b5</span>
              )}
              {props.coinIdSend === "ETH" && (
                <span>0xa323a68df12cef13a8c7b94fa305040713388c9e</span>
              )}
              {props.coinIdSend === "USDT" && (
                <span>TGQBbdypCCHMBiNot2hdtfer72noaDtDto</span>
              )}
            </div> */}
            <div className={s.submitDescription1}>
              <span>
                1. Выполните вход в свою платежную систему
                <br />
                2. Выберите нужную валюту {info.ticker1}
                <br />
                3. Переведите указанную сумму на адрес:
                <br />
                {info.ticker1 === "Bitcoin(BTC)" && (
                  <div>
                    <span style={{ color: "green", wordBreak: "break-all" }}>
                      bc1qu8q32s8zwyut5p09hev2mmqpxarmwmxxy9f9qm
                    </span>
                    <br />
                    <span>(Сеть перевода: Bictoin(BTC))</span>
                  </div>
                )}
                {info.ticker1 === "Ethereum(ETH)" && (
                  <div>
                    <span style={{ color: "green", wordBreak: "break-all" }}>
                      0x3eba112b6459B6BCedcEbD029f50e3B411Fa2FC5
                    </span>
                    <br />
                    <span>(Сеть перевода: Ethereum(ERC20))</span>
                  </div>
                )}
                {info.ticker1 === "Tether TRC20(USDT)" && (
                  <div>
                    <span style={{ color: "green", wordBreak: "break-all" }}>
                      TXH67P4K8pWHhgQCE797h1V8HceNjwpDS2
                    </span>
                    <br />
                    <span>(Сеть перевода: TRC20)</span>
                  </div>
                )}
                {info.ticker1 === "Tron(TRX)" && (
                  <div>
                    <span style={{ color: "green", wordBreak: "break-all" }}>
                      TXH67P4K8pWHhgQCE797h1V8HceNjwpDS2
                    </span>
                    <br />
                    <span>(Сеть перевода: TRC20)</span>
                  </div>
                )}
                {info.ticker1 === "Ripple(XRP)" && (
                  <div>
                    <span style={{ color: "green", wordBreak: "break-all" }}>
                      rUrzsNPsYc2ZXVsjoiuV23VxZvV667buCc
                    </span>
                    <br />
                    <span>(Сеть перевода: Ripple(XRP))</span>
                  </div>
                )}
                {info.ticker1 === "Solana(SOL)" && (
                  <div>
                    <span style={{ color: "green", wordBreak: "break-all" }}>
                      5dJJiibAZAhfh99phmz8q8zg7xm7PghHwvrdxKwRvUAj
                    </span>
                    <br />
                    <span>(Сеть перевода: Solana)</span>
                  </div>
                )}
                {info.ticker1 === "Binance Coin(BNB)" && (
                  <div>
                    <span style={{ color: "green", wordBreak: "break-all" }}>
                      0x3eba112b6459B6BCedcEbD029f50e3B411Fa2FC5
                    </span>
                    <br />
                    <span>(Сеть перевода: BEP20)</span>
                  </div>
                )}
                {info.ticker1 === "Polygon(MATIC)" && (
                  <div>
                    <span style={{ color: "green", wordBreak: "break-all" }}>
                      0x3eba112b6459B6BCedcEbD029f50e3B411Fa2FC5
                    </span>
                    <br />
                    <span>(Сеть перевода: Polygon)</span>
                  </div>
                )}
                {info.ticker1 === "Polkadot(DOT)" && (
                  <div>
                    <span style={{ color: "green", wordBreak: "break-all" }}>
                      16Xn3hnxRqMF5CfDraHo291vB61vVJwcg4mUFbanQzCZSyt5
                    </span>
                    <br />
                    <span>(Сеть перевода: Polkadot)</span>
                  </div>
                )}
              </span>
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
