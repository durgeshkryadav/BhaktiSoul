import "./assets/sass/_index.scss"
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import appRouter from "./route/index.tsx";
import { Provider } from "react-redux";
import { store } from "./redux/store/index.ts";
import { ThemeWatcher } from "./theme/ThemeWatcher.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeWatcher/>
      <RouterProvider router={appRouter} />
    </Provider>
  </React.StrictMode>
);
