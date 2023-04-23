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

const AppLayout = () => {
  const [searchFor, setSearchFor] = useState("");
  return (
    <div>
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
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
