import { Outlet } from "react-router-dom";
import Header from "../components/Layout/Header";
import Container from "../components/UI/Container";

const RootLayout: React.FC = () => {
  return (
    <>
      <Header />
      <main style={{ padding: "3rem 0" }}>
        <Container>
          <Outlet />
        </Container>
      </main>
    </>
  );
};

export default RootLayout;
