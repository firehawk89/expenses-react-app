import logo from "../../assets/img/logo.png";
import styles from "./Brand.module.scss";

const Brand: React.FC = () => {
  return (
    <div className={styles.brand}>
      <img
        className={styles["brand-logo"]}
        src={logo}
        alt="Expenses React App Logo"
      />
      <span className={styles["brand-name"]}>Expense Tracker</span>
    </div>
  );
};

export default Brand;
