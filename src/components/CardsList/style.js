import styled from "styled-components";

import { Card } from "@material-ui/core";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const CardCustom = styled(Card)`
  width: 250px;
  margin: 10px;

  div {
    font: 500 1rem Ubuntu;
    display: flex;
    padding: 2px 5px;
    justify-content: space-between;
    align-items: center;
  }
`;
