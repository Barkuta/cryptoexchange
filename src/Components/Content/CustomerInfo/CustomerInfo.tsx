import { SubmitHandler, useForm, UseFormRegister } from "react-hook-form";
import { IShippingFields } from "../../../app.interface";
import s from "./CustomerInfo.module.css";

type PropsType = {
  switcher: boolean;
  setInputs: any;
  inputs: any;
  register: UseFormRegister<IShippingFields>;
};

const CustomerInfo: React.FC<PropsType> = (props) => {
  // const handleSubmit = (event: any) => {
  //   event.preventDefault();

  //   console.log(props.inputs);
  // };

  // const { register, handleSubmit, watch } = useForm<IShippingFields>();

  // const onSubmit: SubmitHandler<IShippingFields> = (data) => {
  //   console.log(data);
  // };
  // console.log(watch("Email"));

  return (
    <form
      // nSubmit={handleSubmit(onSubmit)}
      className={s.personInfo}
    >
      <div className={s.getTitle}>
        <span>Личные данные</span>
      </div>
      <div className={s.emailBlock}>
        <span>E-mail*</span>
        <input
          // {...register("Email")}
          {...props.register("Email")}
        />
      </div>
      <div className={s.button}>
        <button>Обменять</button>
      </div>
    </form>
  );
};

export default CustomerInfo;
