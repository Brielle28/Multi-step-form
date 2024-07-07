import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Layout from "./Components/Dashboard/Layout";
import PersonalInfo from "./Components/Dashboard/PersonalInfo/PersonalInfo";
import Plan from "./Components/Dashboard/Plan/Plan";
import AddOns from "./Components/Dashboard/AddOns/AddOns";
import Summary from "./Components/Dashboard/Summary/Summary";
import HomePage from "./Components/HomePage/HomePage";

const routing = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      // { 
      //   path: "", 
      //   element: <PersonalInfo /> 
      // }, // Using path: "",
      {
        index: true,
        element: <PersonalInfo />,
      },
      {
        path: "personalinfo",
        element: <PersonalInfo />,
      },
      {
        path: "plan",
        element: <Plan />,
      },
      {
        path: "addons",
        element: <AddOns />,
      },
      {
        path: "summary",
        element: <Summary />,
      },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={routing} />;
};

export default AppRouter;
