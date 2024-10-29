import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";

const StyledStore = styled.div`
  display: flex;
`;
const StyledCart = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  flex-shrink: 0;
  background-color: #e7d9d9;
  gap: 16px;
`;

const StyledCartItem = styled.div`
  display: flex;
  justify-content: space-around;

  button {
    width: 70px;
    height: 30px;
    background-color: white;
    border-radius: 8px;
  }

  select {
    width: 50px;
    height: 30px;
    background-color: white;
    text-align: center;
  }
`;

const StyledCartItemTitle = styled.div`
  width: 180px;
  text-align: start;
`;
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
  text-decoration: none;
  color: darkviolet;

  img {
    height: 200px;
    width: 170px;
  }

  .product-title {
    height: 50px;
  }

  button {
    padding: 8px;
    width: 180px;
    border-radius: 10px;
    background-color: #e7d9d9;
  }
`;

const ProductsView = ({ products }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (id) => {
    const product = products.find((product) => product.id === id);
    const itemInCart = cart.find((product) => product.id === id);
    if (itemInCart) {
      const newCart = cart.map((cartItem) => {
        if (cartItem.id === id) {
          return { ...cartItem, quantity: cartItem.quantity + 1 };
        }
        return cartItem;
      });
      setCart(newCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };
  const handleQuantityChange = (id, quantity) => {
    const newCart = cart.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: quantity };
      }
      return item;
    });
    setCart(newCart);
  };

  const handleDelete = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  };

  const quantityArray = [...Array(5).keys()];

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  return (
    <StyledStore>
      <StyledProducts>
        {products &&
          products.map((product) => {
            return (
              <StyledCard key={product.id}>
                <Link to={`products/${product.id}`}>
                  <img src={product.image} alt={product.title} />
                  <div className="product-title">{product.title}</div>
                </Link>
                <div>${product.price}</div>
                <button onClick={() => addToCart(product.id)}>
                  Add to cart
                </button>
              </StyledCard>
            );
          })}
      </StyledProducts>
      <StyledCart>
        <h3>Cart</h3>
        {cart &&
          cart.map((item) => {
            return (
              <StyledCartItem key={item.id}>
                <StyledCartItemTitle>{item.title}</StyledCartItemTitle>
                <div>${item.price}</div>
                <select
                  value={item.quantity || 1}
                  onChange={(e) =>
                    handleQuantityChange(item.id, e.target.value)
                  }
                >
                  {quantityArray.map((item) => {
                    return (
                      <option key={item} value={item + 1}>
                        {item + 1}
                      </option>
                    );
                  })}
                </select>
                <button onClick={() => handleDelete(item.id)}>Remove</button>
              </StyledCartItem>
            );
          })}
        <h3>Total: {total.toFixed(2)}</h3>
      </StyledCart>
    </StyledStore>
  );
};

export default ProductsView;
