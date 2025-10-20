import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import "./index.css";
import App from "./App.jsx";
import Home from "./Compontets/Homecomponets/Home.jsx";
import Install from "./Compontets/InstallationComponet/Install.jsx";
import Root from "./Root/Root.jsx";
import Errorpage from "./Compontets/404PageComponet/Errorpage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Errorpage></Errorpage>,
    children: [
      { index: true, Component: Home },

      { path: "/app", Component: App },
      { path: "/install", Component: Install },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
