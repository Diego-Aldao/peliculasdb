import React from "react";
import styled from "styled-components";
import Contenedor from "../Contenedor";
import { FiPlay } from "react-icons/fi";
import banner from "../../assets/banner.jpg";

const Contenido = styled.div`
  position: relative;
  color: white;
  padding: 5px;
  padding-top: 200px;
  font-family: var(--fuente-principal);
  transition: all 0.3s ease-in-out;
  padding-bottom: 20px;
  .contenedor-score {
    display: flex;
    align-items: center;

    p {
      color: #d6e40d;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 1px;
    }
  }
  &:hover {
    background: #00000030;
    backdrop-filter: blur(2px);
  }
`;
const MiniTexto = styled.span`
  border-left: 3px solid #6b4bdd;
  text-transform: uppercase;
  font-family: var(--fuente-secundaria);
  font-weight: 800;
  color: #d4d4d4;
  padding-left: 5px;
  font-size: clamp(12px, 1.5vw, 16px);
`;

const Titulo = styled.h2`
  font-size: clamp(50px, 8vw, 92px);
  text-transform: capitalize;
  font-weight: 800;
  line-height: 1.2;
  max-width: 700px;
`;

const Score = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  color: #d6e40d;
  background: black;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #d6e40d;
  font-weight: 600;
  margin-right: 20px;
`;

const Año = styled.span`
  font-weight: 600;
  display: block;
  margin: 20px 0px;
`;
const Generos = styled.div`
  font-weight: 600;
  text-transform: uppercase;
  display: flex;
  p {
    margin-right: 15px;
    display: flex;
    align-items: center;
    span {
      width: 5px;
      height: 5px;
      border-radius: 50%;
      background: #8570cf;
      margin-right: 5px;
    }
  }
`;

const Descripcion = styled.p`
  font-size: 17px;
  margin-top: 20px;
  line-height: 1.4;
  font-weight: 500;
  letter-spacing: 0.5px;
  font-family: var(--fuente-secundaria);
  text-transform: capitalize;
  max-width: 700px;
`;

const Boton = styled.button`
  margin-top: 20px;
  padding: 15px 25px;
  text-transform: uppercase;
  background: black;
  color: white;
  border: none;
  border-left: 3px solid #a8aff1;
  color: #a8aff1;
  font-size: 16px;
  letter-spacing: 1px;
  font-weight: 800;
  font-family: var(--fuente-principal);
  display: flex;
  align-items: center;
  white-space: nowrap;
  p {
    padding: 1px 10px 0px 0px;
  }
  svg {
    font-size: 20px;
  }
`;

const ContenidoHeader = () => {
  return (
    <Contenedor>
      <Contenido>
        <MiniTexto>nuevos lanzamientos</MiniTexto>
        <Titulo>avengers: endgame</Titulo>
        <div className="contenedor-score">
          <Score>5.4</Score>
          <p>imdb rating</p>
        </div>
        <Año>AÑO: 2022</Año>
        <Generos>
          <p>generos:</p>
          <p>
            <span></span>ciencia ficcion
          </p>
          <p>
            <span></span>accion
          </p>
        </Generos>
        <Descripcion>
          After the devastating events of Avengers: Infinity War (2018), the
          universe is in ruins. With the help of remaining allies, the Avengers
          assemble once more in order to reverse Thanos' actions and restore
          balance to the universe.
        </Descripcion>
        <Boton>
          <p>ver trailer</p> <FiPlay></FiPlay>
        </Boton>
      </Contenido>
    </Contenedor>
  );
};

export default ContenidoHeader;
