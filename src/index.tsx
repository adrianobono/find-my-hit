import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./config/store";
import Router from "./config/routes";
import FindMyHitContainer from "./presentation/pages/FindMyHitContainer/FindMyHitContainer";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <FindMyHitContainer /> */}
      <Router />
    </Provider>
  </React.StrictMode>
);
