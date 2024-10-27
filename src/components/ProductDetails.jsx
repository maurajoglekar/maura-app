import { useParams } from "react-router-dom";
import { useProducts } from "../hooks/useProduct";

import ProductDetailsView from "./ProductDetailsView";

const ProductDetails = () => {
  const products = useProducts();
  const { productId } = useParams();
  const details = products.find(
    (product) => product.id === parseInt(productId)
  );
  return <ProductDetailsView details={details} />;
};

export default ProductDetails;
