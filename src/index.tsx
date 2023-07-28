import ReactDOM from "react-dom/client";

import "./index.scss";
import App from "./App";
import ModalContextProvider from "./store/modal-context";

const root = ReactDOM.createRoot(
  document.getElementById("page-root") as HTMLDivElement
);

root.render(
  <ModalContextProvider>
    <App />
  </ModalContextProvider>
);
