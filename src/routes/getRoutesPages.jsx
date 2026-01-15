import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import DetailsPage from "../pages/DetailsPage/DetailsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/work/:slug",
    element: <DetailsPage />,
  },
]);

export default router;
