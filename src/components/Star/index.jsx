import { Container } from "./styles";
import { CiStar } from "react-icons/ci";

export function Star({ children, ...rest }) {
  return (
    <Container type="button" {...rest}>
      <CiStar />
    </Container>
  );
}
