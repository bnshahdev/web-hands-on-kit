import React, { useContext } from "react";
import ReactDOM from "react-dom/client";
import "../index.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import { ResturantDetails } from "./components/ResturantDetails";
import SearchContext from "./utils/SearchContext";
import { useState } from "react";
import { Provider } from "react-redux";
import store from "./utils/store";
import Cart from "./components/Cart";

const AppLayout = () => {
  const [searchFor, setSearchFor] = useState("");
  return (
    <div>
      <Provider store={store}>
        <SearchContext.Provider
          value={{
            searchFor,
            setSearchFor,
          }}
        >
          <Header />
          <Outlet />
          <Footer />
        </SearchContext.Provider>
      </Provider>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: () => <h1>404</h1>,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/resturant/:id",
        element: <ResturantDetails />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
