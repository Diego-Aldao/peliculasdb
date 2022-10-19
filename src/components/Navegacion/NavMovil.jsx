import React from "react";
import styled from "styled-components";
import { CgMenuGridR } from "react-icons/cg";
import { BiSearch } from "react-icons/bi";

const Nav = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media (min-width: 728px) {
    display: none;
  }
`;

const Icono = styled.li`
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: var(--fuente-secundaria);
  text-transform: capitalize;
  margin-right: 15px;
  p {
    display: none;
    margin-right: 10px;
  }
  svg {
    font-size: 20px;
  }
  @media (min-width: 480px) {
    p {
      display: block;
    }
  }
`;

const Menu = styled.li`
  width: 35px;
  height: 35px;
  svg {
    width: 100%;
    height: 100%;
    path {
      fill: hsla(235, 63%, 84%, 1);
    }
  }
`;

const NavMovil = () => {
  return (
    <Nav>
      <Icono>
        <p>buscar</p>
        <BiSearch></BiSearch>
      </Icono>
      <Menu>
        <CgMenuGridR />
      </Menu>
    </Nav>
  );
};

export default NavMovil;
