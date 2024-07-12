import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Layout from "./Components/Dashboard/Layout";
import PersonalInfo from "./Components/Dashboard/PersonalInfo/PersonalInfo";
import Plan from "./Components/Dashboard/Plan/Plan";
import AddOns from "./Components/Dashboard/AddOns/AddOns";
import Summary from "./Components/Dashboard/Summary/Summary";
import UserProvider from "./Components/Context/UserProvider";
import LastStep from "./Components/LastStep/LastStep";

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
      {
        path: "laststep",
        element: <LastStep />,
      },
    ],
  },
]);

const AppRouter = () => {
  return (
    <UserProvider>
      <RouterProvider router={routing} />
    </UserProvider>
  );
};

export default AppRouter;
