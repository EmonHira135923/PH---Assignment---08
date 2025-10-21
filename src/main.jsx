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
import AppsDetails from "./Compontets/AppsComponts/AppsDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      { index: true, loader: () => fetch("/AllCard.json"), Component: Home },
      { path: "/app", loader: () => fetch("/AllCard.json"), Component: Apps },
      {
        path: "app/app-details/:id",
        loader: () => fetch("/AllCard.json"),
        Component: AppsDetails,
      },
      { path: "/install", Component: Installation },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
