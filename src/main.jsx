import React from "react";
import ReactDOM from "react-dom/client";
import router from "./routes/getRoutesPages.jsx";
import { RouterProvider } from "react-router-dom";

import "./styles/fonts.css";
import "./styles/tokens.css";
import "./styles/reset.css";
import "./styles/global.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
