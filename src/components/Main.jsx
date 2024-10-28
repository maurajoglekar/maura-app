import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Products from "./Products";
import ProductDetails from "./ProductDetails";
import RegistrationForm from "./RegistrationForm";

const Main = () => {
  const router = createBrowserRouter([
    { path: "/", element: <Products /> },
    { path: "/products/:productId", element: <ProductDetails /> },
    { path: "/register", element: <RegistrationForm /> },
  ]);
  return (
    <main>
      <RouterProvider router={router} />
    </main>
  );
};

export default Main;
