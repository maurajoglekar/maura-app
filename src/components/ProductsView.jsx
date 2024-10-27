import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledProducts = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
  padding: 24px;
  background-color: lightgray;
`;

const StyledCard = styled(Link)`
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
  text-decoration: none;
  color: darkviolet;

  img {
    height: 10rem;
    width: 10rem;
  }

  .product-title {
    height: 50px;
  }
`;

const ProductsView = ({ products }) => {
  return (
    <StyledProducts>
      {products &&
        products.map((product) => {
          return (
            <StyledCard key={product.id} to={`products/${product.id}`}>
              <img src={product.image} alt={product.title} />
              <div className="product-title">{product.title}</div>
            </StyledCard>
          );
        })}
    </StyledProducts>
  );
};

export default ProductsView;
