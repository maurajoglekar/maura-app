import { useProducts } from "../useProduct";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ProductsView from "./ProductsView";

const Products = () => {
  const products = useProducts();
  return <ProductsView products={products} />;
};

export default Products;
