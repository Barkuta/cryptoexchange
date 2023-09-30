import s from "./Infoboard.module.css";
import btc from "../../Images/bitcoin.svg";
import eth from "../../Images/ethereum-eth.svg";
import usdt from "../../Images/tether-1.svg";
import axios from "axios";
import React, { useEffect, useState, memo } from "react";
import { connect } from "react-redux";
import { RootState } from "../../Redux/store";
import preloader from "../../Images/826.gif";
import { useActions } from "../../hooks/useActions";

export type TypeArray = any;

export type PropsType = {
  coinIdSend: string;
  coinIdGet: string;
  isFetching: boolean;
};

const Infoboard: React.FC<PropsType> = memo((props: PropsType) => {
  const [info, setInfo] = useState<TypeArray>([{ id: 1 }]);

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

  return (
    <div>
      {props.isFetching ? (
        <div className={s.preloader}>
          <svg
            version="1.1"
            id="L9"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 100 100"
            enable-background="new 0 0 0 0"
            xmlSpace="preserve"
          >
            <path
              fill="#2E5788"
              d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50"
            >
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="rotate"
                dur="1s"
                from="0 50 50"
                to="360 50 50"
                repeatCount="indefinite"
              />
            </path>
          </svg>
        </div>
      ) : null}
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
            <div className={s.submitDescription}></div>
            <div className={s.buttonWrapper}>
              <div className={s.button1}>
                <button>Оплатил</button>
              </div>
              <div className={s.button2}>
                <button>Отмена</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

const mapStateToProps = (state: RootState) => {
  return {
    coinIdSend: state.contentReducer.coinIdSend,
    coinIdGet: state.contentReducer.coinIdGet,
    isFetching: state.contentReducer.isFetching,
  };
};

export default connect(mapStateToProps)(Infoboard);
