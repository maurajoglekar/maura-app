import styled from "styled-components";
import "./App.css";
import Main from "./components/Main";

// get products and navigate to product details using router
// use API: https://fakestoreapi.com/products
// write unit tests

const StyledAppContainer = styled.div`
  background-color: lightgray;
  text-align: center;
  display: flex;
  flex-direction: column;
  height: 100vh;

  main {
    flex-grow: 1;
  }

  header,
  footer {
    font-size: 16px;
    padding: 24px;
    background-color: gray;
    color: white;
  }

  header {
    text-transform: uppercase;
    font-size: 24px;
  }
`;

function App() {
  return (
    <StyledAppContainer>
      <header>ecommerce site</header>
      <Main />
      <footer>Copyright 2024</footer>
    </StyledAppContainer>
  );
}

export default App;
