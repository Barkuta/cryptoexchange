import { FieldErrors, UseFormRegister } from "react-hook-form";
import { IShippingFields } from "../../../app.interface";
import s from "./CustomerInfo.module.css";

type PropsType = {
  switcher: boolean;

  register: UseFormRegister<IShippingFields>;
  errors: FieldErrors<IShippingFields>;
};

const CustomerInfo: React.FC<PropsType> = (props) => {
  return (
    <div>
      <div className={s.getTitle}>
        <span>Личные данные</span>
      </div>
      <form className={s.personInfo}>
        <div className={s.emailBlock}>
          <span>E-mail*</span>
          <input
            {...props.register("email", {
              required: true,
              pattern:
                /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu,
            })}
          />
          {props.errors.email?.type === "pattern" && (
            <div className={s.errorEmail}>
              <span>The email is incorrect</span>
            </div>
          )}
          {props.errors.email?.type === "required" && (
            <div className={s.errorEmail}>
              <span>This field is required</span>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default CustomerInfo;
