import { SubmitHandler, useForm, UseFormRegister } from "react-hook-form";
import { IShippingFields } from "../../../app.interface";
import s from "./CustomerInfo.module.css";

type PropsType = {
  switcher: boolean;

  register: UseFormRegister<IShippingFields>;
};

const CustomerInfo: React.FC<PropsType> = (props) => {
  return (
    <form className={s.personInfo}>
      <div className={s.getTitle}>
        <span>Личные данные</span>
      </div>
      <div className={s.emailBlock}>
        <span>E-mail*</span>
        <input {...props.register("email")} />
      </div>
      <div className={s.button}>
        <button>Обменять</button>
      </div>
    </form>
  );
};

export default CustomerInfo;
