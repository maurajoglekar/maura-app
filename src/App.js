import "./App.css";

import { useProducts } from "./useProduct";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Products from "./components/Products";
import ProductDetails from "./components/ProductDetails";
import styled from "styled-components";

// get products and navigate to product details using router
// use API: https://fakestoreapi.com/products
// write unit tests

const StyledAppContainer = styled.div`
  background-color: lightgray;
  text-align: center;

  header,
  footer {
    font-size: 24px;
    padding: 12px;
  }
`;
function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Products /> },
    { path: "/products/:productId", element: <ProductDetails /> },
  ]);
  return (
    <StyledAppContainer>
      <header>Maura's Store</header>
      <main>
        <RouterProvider router={router} />
      </main>
      <footer>Copyright 2024</footer>
    </StyledAppContainer>
  );
}

export default App;
