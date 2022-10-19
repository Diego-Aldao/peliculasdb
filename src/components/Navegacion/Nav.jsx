import React from "react";
import styled from "styled-components";
import NavMovil from "./NavMovil";
import { MdOutlineMovieFilter } from "react-icons/md";
import NavDesktop from "./NavDesktop";

const Navegacion = styled.nav`
  width: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  color: white;
  padding: 15px;
  display: flex;
`;

const Logo = styled.div`
  height: 50px;
  margin-right: auto;
  display: flex;
  align-items: center;
  p {
    text-transform: uppercase;
    font-family: var(--fuente-principal);
    font-weight: 700;
    letter-spacing: 1px;
    font-size: 24px;
  }
  svg {
    font-size: 42px;
    fill: hsla(235, 63%, 84%, 1);
  }
`;

const Nav = () => {
  return (
    <Navegacion>
      <Logo>
        <MdOutlineMovieFilter></MdOutlineMovieFilter>
        <p>flixdata</p>
      </Logo>
      <NavMovil />
      <NavDesktop />
    </Navegacion>
  );
};

export default Nav;
