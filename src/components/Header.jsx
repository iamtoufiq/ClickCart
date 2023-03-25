import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/">
        <img
          style={{ width: "50px", borderRadius: "50%" }}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgA3e-b4_Xz7Gd1b8LB2IvsPdddSMaHz3VDG2QFFw&s"
          alt="my logo img"
        />
      </NavLink>
      <Navbar />
    </MainHeader>
  );
};

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  .logo {
    height: 5rem;
  }
`;
export default Header;
