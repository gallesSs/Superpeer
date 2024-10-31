import logo from "../../images/logo.png";
import Btn from "../Extra/Btn";
import css from "./Header.module.css";

const Header = () => {
  return (
    <div className={css.container}>
      <img src={logo} alt="logo" />
      <nav>
        <ul className={css.navBar}>
          <li>
            <a className={css.navLink} href="#">
              Home
            </a>
          </li>
          <li>
            <a className={css.navLink} href="#">
              Features
            </a>
          </li>
          <li>
            <a className={css.navLink} href="#">
              About us
            </a>
          </li>
        </ul>
      </nav>
      <div>
        <ul className={css.btnList}>
          <li>
            <button className={css.btnSign} type="button">
              Sign In
            </button>
          </li>
          <li>
            <Btn />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
