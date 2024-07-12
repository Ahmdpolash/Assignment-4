import App from "@/App";
import Dashboard from "@/components/Dashboard/Dashboard";
import DashboardHome from "@/components/Dashboard/DashboardHome";
import MyCarts from "@/components/Dashboard/MyCarts";
import Order from "@/components/Dashboard/Order";
import About from "@/pages/about/About";
import Cart from "@/pages/Cart/Cart";
import Home from "@/pages/Home/Home";
import Login from "@/pages/Login/Login";
import Products from "@/pages/products/Products";
import Register from "@/pages/register/Register";
import SingleProduct from "@/pages/singleProduct/SingleProduct";

import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about-us",
        element: <About />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/products/:id",
        element: <SingleProduct />,
      },
      {
        path: "/carts",
        element: <Cart />,
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
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "my-dashboard",
        element: <DashboardHome />,
      },
      {
        path: "my-orders",
        element: <Order />,
      },
      {
        path: "my-carts",
        element: <MyCarts />,
      },
    ],
  },
]);
