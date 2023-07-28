import ReactDOM from "react-dom/client";

import "./index.scss";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("page-root") as HTMLDivElement
);

root.render(<App />);
