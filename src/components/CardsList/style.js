import styled from "styled-components";

import { Card } from "@material-ui/core";

export const List = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const CardCustom = styled(Card)`
  margin: 10px;
  width: 30%;
  max-width: 300px;

  p {
    font: 600 1.3rem Poppins, sans-serif;
    padding: 10px;
  }

  @media (max-width: 800px) {
    width: 60%;
  }
`;
