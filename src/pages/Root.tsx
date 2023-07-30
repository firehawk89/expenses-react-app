import { Outlet } from "react-router-dom";
import Header from "../components/Layout/Header";

const RootLayout: React.FC = () => {
  return (
    <>
      <Header />;
      <main style={{ padding: "3rem 0" }}>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
