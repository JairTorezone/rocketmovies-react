import { Container } from "./styles";
import { CiStar } from "react-icons/ci";

export function Star({ children, ...rest }) {
  return (
    <Container {...rest}>
      <CiStar />
    </Container>
  );
}
