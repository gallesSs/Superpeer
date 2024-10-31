import logo from "../../images/logo.png";
import css from "./Header.module.css";
import logoSvg from "../../assets/Frame.svg";

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
            <button className={css.btnLog} type="button">
              <img src={logoSvg} alt="" className={css.svg} />
              Become a superpeer
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
