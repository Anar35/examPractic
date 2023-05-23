import AddBlog from "../pages/AddBlog";
import Home from "../pages/Home";
import MainRoot from "../pages/MainRoot";
import NotFound from "../pages/NotFound";

export const ROUTES = [
  {
    path: "/",
    element: <MainRoot />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "add-blog",
        element: <AddBlog />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
];
