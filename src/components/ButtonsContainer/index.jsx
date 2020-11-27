import { Container } from "./style";

import Button from "../Button";

const ButtonsContainer = ({ prevPage, nextPage }) => {
  return (
    <Container>
      <Button onClick={prevPage}>Página anterior</Button>
      <Button onClick={nextPage}>Pŕoxima página</Button>
    </Container>
  );
};

export default ButtonsContainer;
