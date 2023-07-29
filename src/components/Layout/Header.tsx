import logo from "../../assets/img/logo.png";
import Container from "../UI/Container";
import Menu from "./Menu";

const Header: React.FC = () => {
  return (
    <header className="header">
      <Container>
        <div className="header__body">
          <img
            className="header__logo"
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
