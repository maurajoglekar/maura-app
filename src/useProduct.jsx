import { useState, useEffect } from "react";

export const useProducts = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.log("Error when getting products: ${error}");
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return products;
};
