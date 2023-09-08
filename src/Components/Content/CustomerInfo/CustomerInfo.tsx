import s from "./CustomerInfo.module.css";

type PropsType = {
  switcher: boolean;
};

const CustomerInfo: React.FC<PropsType> = (props) => {
  return (
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
  );
};

export default CustomerInfo;
