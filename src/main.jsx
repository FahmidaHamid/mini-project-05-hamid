import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import "./index.css";

import MainRouter from "./Routes/MainRouter.jsx";
import AuthProvider from "./contexts/AuthProvider.jsx";

const router = createBrowserRouter(MainRouter);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider
        router={router}
        hydrateFallbackElement={() => <h1>Loading...</h1>}
      />
    </AuthProvider>
  </StrictMode>,
);
