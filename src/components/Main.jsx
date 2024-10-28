import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Products from "./Products";
import ProductDetails from "./ProductDetails";
import RegistrationForm from "./RegistrationForm";
import Nav from "./Nav";

const Main = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Nav />,
      children: [
        { path: "/", element: <Products /> },
        { path: "/products/:productId", element: <ProductDetails /> },
        { path: "/register", element: <RegistrationForm /> },
      ],
    },
  ]);
  return (
    <main>
      <RouterProvider router={router} />
    </main>
  );
};

export default Main;
