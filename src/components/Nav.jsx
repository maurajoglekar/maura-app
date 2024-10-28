import { NavLink, Outlet } from "react-router-dom";

import styled from "styled-components";

const styleActive = ({ isActive }) => {
  return isActive ? { color: "blue" } : { color: "black" };
};

const StyledNav = styled.div`
  font-size: 24px;
  ul {
    display: flex;
    gap: 36px;
    justify-content: center;
  }
  a {
    text-decoration: none;
  }
`;
const StyledLinks = styled(NavLink)`
  color: red;
  text-decoration: none;
  display: block;
  padding: 8px 0;
`;
const Nav = () => {
  return (
    <StyledNav>
      <nav>
        <ul>
          <StyledLinks style={styleActive} to="/">
            Products
          </StyledLinks>
          <StyledLinks style={styleActive} to="/register">
            Registration Form
          </StyledLinks>
        </ul>
      </nav>
      <Outlet />
    </StyledNav>
  );
};

export default Nav;
