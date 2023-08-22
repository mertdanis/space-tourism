import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./global.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./ui/Layout";

import Home from "./features/Home/Home";
import { Destination } from "./features/Destination/Destination";
import Crew from "./features/Crew/Crew";
import Technology from "./features/Technology/Technology";
import NotFound from "./ui/NotFound";

import { MainContext } from "./context/MainContext.jsx";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/destinations",
        element: <Destination />,
      },

      { path: "/crew", element: <Crew /> },

      { path: "/technology", element: <Technology /> },

      { path: "*", element: <NotFound /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <MainContext>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </MainContext>
);
