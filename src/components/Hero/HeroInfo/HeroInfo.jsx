import css from "./HeroInfo.module.css";
import hero from "../../../images/hero.jpg";
import nerdwallet from "../../../images/nerdwallet.png";
import investopedia from "../../../images/investopedia.png";
import star from "../../../images/star.png";

const HeroInfo = () => {
  return (
    <div className={css.container}>
      <img className={css.img} src={hero} alt="hero" />
      <div className={css.infoContainer}>
        <h1 className={css.title}>Make wealth your own</h1>
        <p className={css.subtitle}>
          Personalized, Automated, Effortless, Investing and Savings.
        </p>
        <button className={css.button} type="button">
          Get started
        </button>
      </div>
      <ul className={css.subtitleContainer}>
        <li>
          <p className={css.advantage}>
            <img src={nerdwallet} alt="" />
          </p>
          <p className={css.advantageInfo}>Best Robo-advisor, 2019</p>
          <p className={css.advantageInfo}>Best Cash Management App, 2020</p>
        </li>
        <li>
          <p className={css.advantage}>
            <img src={investopedia} alt="" />
          </p>
          <p className={css.advantageInfo}>Best Robo-advisor, 2020</p>
        </li>
        <li>
          <p className={css.advantage}>450K+</p>
          <p className={css.advantageInfo}>Trusted clients</p>
        </li>
        <li>
          <p className={css.advantage}>$26B+</p>
          <p className={css.advantageInfo}>In clients funds</p>
        </li>
        <li>
          <p className={css.advantage}>
            4.9 <img src={star} alt="" />
          </p>
          <p className={css.advantageInfo}>Apple App Store</p>
        </li>
        <li>
          <p className={css.advantage}>
            4.5 <img src={star} alt="" />
          </p>
          <p className={css.advantageInfo}>Google Play Store</p>
        </li>
      </ul>
    </div>
  );
};

export default HeroInfo;
