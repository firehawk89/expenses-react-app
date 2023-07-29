import logo from "../../assets/img/logo.png";
import Container from "../UI/Container";
import Menu from "./Menu";
import styles from "./Header.module.scss";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles["header-body"]}>
          <img
            className={styles["header-logo"]}
            src={logo}
            alt="Expenses React App Logo"
          />
          <nav>
            <Menu />
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default Header;
