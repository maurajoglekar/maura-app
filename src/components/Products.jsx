import { useProducts } from "../hooks/useProduct";
import ProductsView from "./ProductsView";

const Products = () => {
  const products = useProducts();
  return <ProductsView products={products} />;
};

export default Products;
