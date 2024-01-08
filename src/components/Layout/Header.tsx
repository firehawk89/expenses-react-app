import { FC } from "react";
import Container from "../UI/Container";
import Menu from "./Menu";
import Brand from "../UI/Brand";

const Header: FC = () => {
  return (
    <header className="py-4 bg-primary">
      <Container>
        <div className="flex items-center justify-between">
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
