import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import "./index.css";
import Root from "./Root/Root.jsx";
import Home from "./Pages/HomePages/Home.jsx";
import Installation from "./Pages/InstallationPages/Installation.jsx";
import Apps from "./Pages/AppsPages/Apps.jsx";
import ErrorPage from "./Pages/404ErrorPages/ErrorPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      { index: true, Component: Home },
      { path: "/app", Component: Apps },
      { path: "/install", Component: Installation },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
