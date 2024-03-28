import { Container } from "./styles";
import starImg from "../../assets/star.svg";

export function Star({ children, ...rest }) {
  return (
    <Container {...rest}>
      <img src={starImg} alt="star" />
    </Container>
  );
}
