import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import "./index.css";

import MainRouter from "./Routes/MainRouter.js";

const router = createBrowserRouter(MainRouter);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider
      router={router}
      hydrateFallbackElement={() => <h1>Loading...</h1>}
    />
  </StrictMode>,
);
