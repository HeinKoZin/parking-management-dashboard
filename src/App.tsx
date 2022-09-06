import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Header from "@components/Header";
import { Sidebar } from "@components/Sidebar";
import { useRoutes } from "react-router-dom";
import { Dashboard } from "@components/Dashboard";
import MainLayout from "@layouts/MainLayout";
import UserLayout from "@layouts/Usrelayout";
import { User } from "@components/User";
import ServiceLayout from "@layouts/ServiceLayout";
import { Service } from "@components/Service";
import EmployeeLayout from "@layouts/EmployeeLayout";
import { Employee } from "@components/Employee";

function App() {
  let element = useRoutes([
    {
      path: "/",
      element: <MainLayout />,

      children: [
        {
          index: true,
          element: <Dashboard />,
        },
        {
          path: "users",
          element: <UserLayout />,
          children: [
            {
              index: true,
              element: <User />,
            },
            // {
            //   path: "edit-user/:id",
            //   element: <EditUserPage />,
            // },
          ],
        },
        {
          path: "services",
          element: <ServiceLayout />,
          children: [
            {
              index: true,
              element: <Service />,
            },
            // {
            //   path: "edit-user/:id",
            //   element: <EditUserPage />,
            // },
          ],
        },
        {
          path: "employees",
          element: <EmployeeLayout />,
          children: [
            {
              index: true,
              element: <Employee />,
            },
            // {
            //   path: "edit-user/:id",
            //   element: <EditUserPage />,
            // },
          ],
        },
      ],
    },
  ]);
  return element;
}

export default App;
