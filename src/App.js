import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ProductDescription from "./Components/ProductDescription/ProductDescription"
import Cart from "./Pages/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/cart",
    element: <Cart />
  },
  {
    path: "/product/:id",
    element: <ProductDescription />
  }
]);

function App() {


  return (
    <RouterProvider router={router} />
  );
}

export default App;


