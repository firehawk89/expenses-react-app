import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { baseUrl } from "./utils/constants";
import HomePage from "./pages/Home";
import RegisterPage from "./pages/Register";
import LoginPage from "./pages/Login";
import RootLayout from "./pages/Root";

const router = createBrowserRouter([
  {
    path: baseUrl,
    element: <RootLayout />,
    children: [
      { path: baseUrl, element: <HomePage /> },
      { path: `${baseUrl}register`, element: <RegisterPage /> },
      { path: `${baseUrl}login`, element: <LoginPage /> },
    ],
  },
]);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
