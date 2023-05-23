import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { ROUTES } from "./routes/ROUTES";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { BlogsContextProvider } from "./context/BlogsContext";

const routes = createBrowserRouter(ROUTES);

function App() {
  return (
    <BlogsContextProvider>
      <RouterProvider router={routes} />
    </BlogsContextProvider>
  );
}

export default App;
