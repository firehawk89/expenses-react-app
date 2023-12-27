import { NavLink } from "react-router-dom";
import { baseUrl } from "../../utils/constants";

const Menu: React.FC = () => {
  return (
    <ul className="flex items-center gap-8">
      <li>
        <NavLink
          to={baseUrl}
          className={({ isActive }) =>
            isActive
              ? "relative after:absolute after:content-[''] after:left-0 after:right-0 after:-bottom-1.5 after:w-full after:h-0.5 after:bg-light no-underline text-light"
              : "text-light no-underline"
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
              ? "relative after:absolute after:content-[''] after:left-0 after:right-0 after:-bottom-1.5 after:w-full after:h-0.5 after:bg-light no-underline text-light"
              : "text-light no-underline"
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
              ? "relative after:absolute after:content-[''] after:left-0 after:right-0 after:-bottom-1.5 after:w-full after:h-0.5 after:bg-light no-underline text-light"
              : "text-light no-underline"
          }
        >
          Sign Up
        </NavLink>
      </li>
    </ul>
  );
};

export default Menu;
