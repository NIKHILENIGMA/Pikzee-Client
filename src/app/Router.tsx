import { type FC } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import { Home, About, Service, NotFound } from "../pages";
import { MainLayout } from "../layout";
import { LoginPage, SignupPage } from "../features/auth";
import EditorPage from "@/features/block/pages/Editor";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <div>Contact Page</div>,
      },
      {
        path: "services",
        element: <Service />,
      },
    ],
  },
  {
    path: "/auth",
    children: [
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "signup",
        element: <SignupPage />,
      },
    ],
  },
  {
    path: "/editor",
    element: <EditorPage />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

const Router: FC = () => {
  return <RouterProvider router={router} />;
};

export default Router;
