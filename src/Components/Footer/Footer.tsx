import s from "./Footer.module.css";
import bestchange from "../../Images/bestchange.webp";

const Footer = () => {
  return (
    <footer className="footer">
      <div className={s.logo}>
        <img src={bestchange} alt="" />
      </div>
    </footer>
  );
};

export default Footer;
