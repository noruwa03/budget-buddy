import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import AuthLayout from "./layouts/AuthLayout/AuthLayout";
import Login from "./pages/Auth/login";
import Register from "./pages/Auth/Register";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import DefaultLayout from "./layouts/DefaultLayout/DefaultLayout";
import Profile from "./pages/Profile";
import Transactions from "./pages/Transactions";
import Asset from "./pages/Asset";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/transactions",
        element: <Transactions />,
      },
      {
        path: "/assets",
        element: <Asset />,
      },
    ],
  },
  {
    path: "/join",
    element: <AuthLayout />,
    children: [
      {
        path: "",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "forgot-password",
        element: <ForgotPassword />,
      },
    ],
  },
]);

function App() {
  return (
    <main className="font-DMSans">
      <RouterProvider router={router} />
    </main>
  );
}

export default App;
