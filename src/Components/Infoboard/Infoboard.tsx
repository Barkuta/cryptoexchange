import s from "./Infoboard.module.css";
import btc from "../../Images/bitcoin.svg";
import eth from "../../Images/ethereum-eth.svg";

const Infoboard: React.FC = () => {
  return (
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
                <span>1 Bitcoin</span>
              </div>
            </div>
            <div className={s.sendItem}>
              <img src={btc} alt="" />
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
              <img src={eth} alt="" />
            </div>
            <div className={s.getInfo}>
              <div className={s.getInfoText}>
                <span>Вы получаете</span>
              </div>
              <div className={s.getInfoTicker}>
                <span>1 Bitcoin</span>
              </div>
            </div>
          </div>
        </div>
        <div className={s.walletText}>
          <span>Получаете на: </span>
        </div>
      </div>
      <div className={s.description}>
        <div className={s.app}>
          <span>Номер заявки: XXXX</span>
        </div>
        <div className={s.date}>
          <span>Дата заявки: xx.xx.xxxx</span>
        </div>
        <div className={s.infoBlock}>
          <span>Отдаете: 1 BTC</span>
          <span>Получаете: 1 ETH</span>
          <span>Курс 1 BTC = 1 ETH</span>
        </div>
      </div>
      <div className={s.requisites}>
        <div className={s.qrBlock}>
          <div className={s.qr}></div>
        </div>
        <div className={s.acceptBlock}>
          <div className={s.acceptWallet}></div>
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
  );
};

export default Infoboard;
