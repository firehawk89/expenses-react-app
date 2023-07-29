import styles from "./Menu.module.scss";

const Menu: React.FC = () => {
  return (
    <ul className={styles.menu}>
      <li>
        <a className={styles["menu-link"]} href="">
          Home
        </a>
      </li>
      <li>
        <a className={styles["menu-link"]} href="">
          Log In
        </a>
      </li>
      <li>
        <a className={styles["menu-link"]} href="">
          Sign Up
        </a>
      </li>
    </ul>
  );
};

export default Menu;
