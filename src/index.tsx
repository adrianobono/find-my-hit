import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./config/store";
import Router from "./config/routes";
import "./globals.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <Router />
  </Provider>
);
