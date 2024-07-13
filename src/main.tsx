import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Transactions, Wallet, Error } from './pages';

export enum RoutePaths {
  wallet = "/",
  transactions = "/transactions",
}

const router = createBrowserRouter([
  {
    path: RoutePaths.wallet,
    element: <Wallet />,
    errorElement: <Error />,
  },
  {
    path: RoutePaths.transactions,
    element: <Transactions />,
    errorElement: <Error />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
