import styled from "styled-components";

const Contenedor = styled.div`
  width: 100%;
  padding: 0px 15px;
  max-width: 540px;
  margin: 0 auto;
  z-index: 4;
  @media (min-width: 768px) {
    max-width: 720px;
  }
  @media (min-width: 1024px) {
    max-width: 960px;
  }
  @media (min-width: 1240px) {
    max-width: 1100px;
  }
  @media (min-width: 1440px) {
    max-width: 1260px;
  }
`;

export default Contenedor;
