import React from "react";
import styled from "styled-components";
import { BiSearch } from "react-icons/bi";

const Nav = styled.ul`
  display: none;
  height: 50px;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
  }
`;

const Item = styled.li`
  padding: 5px 10px;
  font-family: var(--fuente-secundaria);
  text-transform: uppercase;
  font-weight: 600;
  svg {
    font-size: 20px;
  }
  &:last-child {
    margin-left: 20px;
  }
`;

const NavDesktop = () => {
  return (
    <Nav>
      <Item>Peliculas</Item>
      <Item>Series</Item>
      <Item>Generos</Item>
      <Item>Actores</Item>
      <Item>
        <BiSearch></BiSearch>
      </Item>
    </Nav>
  );
};

export default NavDesktop;
