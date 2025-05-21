import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import WorkDetailsPage from "../pages/WorkDetailsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/work/:id",
    element: <WorkDetailsPage />,
  },
]);

export default router;
