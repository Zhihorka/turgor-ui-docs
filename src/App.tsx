import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from "./components/utility/layout/Layout"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
  },
  {
    path: "breadcrumb",
    element: <Layout/>,
  },
  {
    path: "button",
    element: <Layout/>,
  },
]);

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
