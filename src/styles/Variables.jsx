import { css } from "styled-components";

const Variables = css`
  @import url("https://fonts.googleapis.com/css2?family=Anton&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;500;600&display=swap");

  :root {
    --color-1: linear-gradient(
      90deg,
      hsla(265, 52%, 88%, 1) 0%,
      hsla(348, 56%, 89%, 1) 25%,
      hsla(14, 51%, 89%, 1) 50%,
      hsla(58, 34%, 86%, 1) 75%,
      hsla(209, 71%, 93%, 1) 100%
    );
    --color-2: linear-gradient(
      90deg,
      hsla(145, 54%, 89%, 1) 0%,
      hsla(196, 87%, 79%, 1) 33%,
      hsla(238, 72%, 86%, 1) 66%,
      hsla(235, 63%, 84%, 1) 100%
    );

    --fuente-principal: "Anton", sans-serif;
    --fuente-secundaria: "Work Sans", sans-serif;
  }
`;

export default Variables;
