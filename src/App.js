import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import styled from "styled-components";

// get products and navigate to product details using router
// use API: https://fakestoreapi.com/products
// write unit tests

const StyledProducts = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
  padding: 24px;
  background-color: lightgray;
`;

const StyledCard = styled.div`
  height: 300px;
  width: 250px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  padding: 16px 8px;
  text-align: center;
  background-color: white;

  img {
    height: 10rem;
    width: 10rem;
  }

  .product-title {
    height: 50px;
  }
`;

function App() {
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
  return (
    <StyledProducts>
      {products.map((product) => {
        return (
          <StyledCard key={product.id}>
            <img src={product.image} alt={product.title} />
            <div className="product-title">{product.title}</div>
          </StyledCard>
        );
      })}
    </StyledProducts>
  );
}

export default App;
