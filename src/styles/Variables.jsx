import { css } from "styled-components";
import "../styles/styles.css";

const Variables = css`
  :root {
    --color-1: linear-gradient(
      90deg,
      #ded0f0 0%,
      #f3d3da 25%,
      #f1dbd5 50%,
      #e7e7cf 75%,
      #e0eefa 100%
    );
    --color-2: linear-gradient(90deg, #80d2f0 0%, #b2b3f1 66%, #a8aff1 100%);

    --fuente-principal: "Urbanist", sans-serif;
    --fuente-secundaria: "Josefin Sans", sans-serif;
  }
`;

export default Variables;
