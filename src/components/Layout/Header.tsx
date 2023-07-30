import Container from "../UI/Container";
import Menu from "./Menu";
import styles from "./Header.module.scss";
import Brand from "../UI/Brand";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles["header-body"]}>
          <Brand />
          <nav>
            <Menu />
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default Header;
