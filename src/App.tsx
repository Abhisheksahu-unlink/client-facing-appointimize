import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.scss";
import HomePage from "./pages/home";
import FrequentlyAskedQuestionsPage from "./pages/faq";
import TermsAndConditionsPage from "./pages/terms-and-conditions";
import "./style.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/faq",
    element: <FrequentlyAskedQuestionsPage />,
  },
  {
    path: "/terms-and-conditions",
    element: <TermsAndConditionsPage />,
  },
]);

const rootElement = document.getElementById('app')

if (!rootElement) throw new Error('Failed to find the root element')

const root = ReactDOM.createRoot(rootElement as HTMLElement)

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


