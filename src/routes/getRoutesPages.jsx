import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import DetailsPage from "../pages/DetailsPage/DetailsPage";
import DebugPage from "../components/DebugPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  // Add these test routes:
  {
    path: "/debug",
    element: <DebugPage />,
  },
  {
    path: "/work/:slug",
    element: <DetailsPage />,
  },
]);

export default router;
