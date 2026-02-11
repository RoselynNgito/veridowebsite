import { createBrowserRouter } from "react-router";
import Homepage from "./pages/Homepage";
import Agribusiness from "./pages/Agribusiness";
import Donors from "./pages/Donors";
import Companies from "./pages/Companies";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Homepage,
  },
  {
    path: "/agribusiness",
    Component: Agribusiness,
  },
  {
    path: "/donors",
    Component: Donors,
  },
  {
    path: "/companies",
    Component: Companies,
  },
]);
