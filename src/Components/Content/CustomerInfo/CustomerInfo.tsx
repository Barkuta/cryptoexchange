import {
  FieldErrors,
  SubmitHandler,
  useForm,
  UseFormRegister,
} from "react-hook-form";
import { IShippingFields } from "../../../app.interface";
import s from "./CustomerInfo.module.css";

type PropsType = {
  switcher: boolean;

  register: UseFormRegister<IShippingFields>;
  errors: FieldErrors<IShippingFields>;
};

const CustomerInfo: React.FC<PropsType> = (props) => {
  return (
    <form className={s.personInfo}>
      <div className={s.getTitle}>
        <span>Личные данные</span>
      </div>
      <div className={s.emailBlock}>
        <span>E-mail*</span>
        <input
          {...props.register("email", {
            required: true,
            pattern:
              /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu,
          })}
        />
      </div>
      {props.errors.email?.type === "pattern" && (
        <span className={s.errorEmail}>The email is incorrect</span>
      )}

      {props.errors.email?.type === "required" && (
        <span className={s.errorEmail}>This field is required</span>
      )}
      <div className={s.button}>
        <button>Обменять</button>
      </div>
    </form>
  );
};

export default CustomerInfo;
