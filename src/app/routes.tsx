import { createBrowserRouter } from "react-router";
import Homepage from "./pages/Homepage";
import Agribusiness from "./pages/Agribusiness";
import Donors from "./pages/Donors";
import Companies from "./pages/Companies";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import { ScrollRestoration } from "./components/ScrollRestoration";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ScrollRestoration />
      {children}
    </>
  );
}

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-6xl font-black text-gray-900 mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-8">Page not found</p>
        <a 
          href="/" 
          className="inline-flex items-center gap-2 bg-[#162F21] hover:bg-[#1a3826] text-white px-6 py-3 rounded-lg font-semibold transition-colors"
        >
          Go Home
        </a>
      </div>
    </div>
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
  {
    path: "/privacy-policy",
    element: (
      <Layout>
        <PrivacyPolicy />
      </Layout>
    ),
  },
  {
    path: "/terms-of-service",
    element: (
      <Layout>
        <TermsOfService />
      </Layout>
    ),
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);