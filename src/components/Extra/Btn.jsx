import css from "./Btn.module.css";
import logoSvg from "../../assets/Frame.svg";

const Btn = ({ isOnline }) => {
  return (
    <button className={css.btnLog} type="button">
      <img src={logoSvg} alt="" className={css.svg} />
      Become a superpeer
    </button>
  );
};

export default Btn;
