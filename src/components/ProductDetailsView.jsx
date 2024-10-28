import styled from "styled-components";

const StyledProductContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
`;

const StyledProduct = styled.div`
  display: flex;
  gap: 40px;
  margin-top: 24px;

  img {
    width: 500px;
    height: 600px;
    border-radius: 12px;
    padding: 20px;
    background-color: white;
  }
`;

const StyledDetails = styled.div`
  display: flex;
  justify-content: start;
  flex-direction: column;
  width: 600px;
  align-items: start;
  gap: 30px;
  text-align: start;
`;

const ProductDetailsView = ({ details }) => {
  return (
    <StyledProductContainer>
      {details && (
        <StyledProduct>
          <img src={details.image} alt={details.title} />
          <StyledDetails>
            <h3 data-testid="title">{details.title}</h3>
            <div>{details.description}</div>
            <div>Price: ${details.price}</div>
            <div>Customer Rating: {details.rating.rate}</div>
          </StyledDetails>
        </StyledProduct>
      )}
    </StyledProductContainer>
  );
};

export default ProductDetailsView;
