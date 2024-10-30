import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledPage = styled.div`
  display: flex;
  justify-content: center;
`;

const NotFound = () => {
  <StyledPage>
    404 Page Not found <Link to="/">Home</Link>
  </StyledPage>;
};

export default NotFound;
