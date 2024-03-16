import { createBrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";
import App from "../App";
import Loading from "../components/common/Loading";
import RepositoryLink from "../components/RepoLink";
import { Explore } from "../pages/Explore/Explore";
import { Wisdom } from "../pages/Wisdom/Wisdom";
import { Library } from "../pages/Library/Library";
const Login = lazy(() => import("../components/login"));
const Signup = lazy(() => import("../components/login/subComponents/Signup"));
const ForgotPassword = lazy(
  () => import("../components/login/subComponents/ForgotPassword")
);

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <RepositoryLink />,
      },
      {
        path: "/library",
        element: <Library />,
      },
      {
        path: "/explore",
        element: <Explore />,
      },
      {
        path: "/wisdom",
        element: <Wisdom />,
      },
    ],
  },

  {
    path: "/login",
    element: (
      <Suspense fallback={<Loading />}>
        <Login />
      </Suspense>
    ),
  },
  {
    path: "/signup",
    element: (
      <Suspense fallback={<Loading />}>
        <Signup />
      </Suspense>
    ),
  },
  {
    path: "/forgot-password",
    element: (
      <Suspense fallback={<Loading />}>
        <ForgotPassword />
      </Suspense>
    ),
  },
]);

export default appRouter;
