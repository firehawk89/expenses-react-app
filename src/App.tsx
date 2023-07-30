import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";

const baseUrl = import.meta.env.BASE_URL;

const router = createBrowserRouter([{ path: baseUrl, element: <HomePage /> }]);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
