import { createBrowserRouter } from "react-router";
import Homepage from "./pages/Homepage";
import Agribusiness from "./pages/Agribusiness";
import Donors from "./pages/Donors";
import Companies from "./pages/Companies";
import { ScrollRestoration } from "./components/ScrollRestoration";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ScrollRestoration />
      {children}
    </>
  );
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Homepage />
      </Layout>
    ),
  },
  {
    path: "/agribusiness",
    element: (
      <Layout>
        <Agribusiness />
      </Layout>
    ),
  },
  {
    path: "/donors",
    element: (
      <Layout>
        <Donors />
      </Layout>
    ),
  },
  {
    path: "/companies",
    element: (
      <Layout>
        <Companies />
      </Layout>
    ),
  },
]);