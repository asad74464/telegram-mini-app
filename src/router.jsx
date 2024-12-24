import { createBrowserRouter } from "react-router-dom";
import { Suspense } from "react";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    element: <Home />,
    children: [{ index: "true", path: "/", element: <Home /> }],
  },

  {
    path: "*",
    element: (
      <Suspense fallback={<p className="text-info">در حال بارگذاری ...</p>}>
        <NotFound />
      </Suspense>
    ),
  },
]);

export default router;
