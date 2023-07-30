import { NavLink } from "react-router-dom";
import { baseUrl } from "../../utils/constants";
import styles from "./Menu.module.scss";

const Menu: React.FC = () => {
  return (
    <ul className={styles.menu}>
      <li>
        <NavLink
          to={baseUrl}
          className={({ isActive }) =>
            isActive
              ? `${styles["menu-link"]} ${styles["link-active"]}`
              : styles["menu-link"]
          }
          end
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={`${baseUrl}login`}
          className={({ isActive }) =>
            isActive
              ? `${styles["menu-link"]} ${styles["link-active"]}`
              : styles["menu-link"]
          }
        >
          Log In
        </NavLink>
      </li>
      <li>
        <NavLink
          to={`${baseUrl}register`}
          className={({ isActive }) =>
            isActive
              ? `${styles["menu-link"]} ${styles["link-active"]}`
              : styles["menu-link"]
          }
        >
          Sign Up
        </NavLink>
      </li>
    </ul>
  );
};

export default Menu;
