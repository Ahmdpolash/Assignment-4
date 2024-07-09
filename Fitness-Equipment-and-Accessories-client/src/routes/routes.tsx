import App from "@/App";
import About from "@/pages/about/About";
import Login from "@/pages/Login/Login";
import Products from "@/pages/products/Products";
import Register from "@/pages/register/Register";

import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/about-us",
        element: <About />,
      },
      {
        path: "/products",
        element: <Products />,
      },
    ],
  },
  {
    path: "/sign-in",
    element: <Login />,
  },
  {
    path: "/sign-up",
    element: <Register />,
  },
]);
