import { createBrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";
import App from "../App";

const DetailsPage = lazy(() => import("../pages/DetailsPage/DetailsPage"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/featured-work/:slug",
    element: (
      <Suspense fallback={null}>
        <DetailsPage />
      </Suspense>
    ),
  },
]);

export default router;
