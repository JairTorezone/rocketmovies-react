import { Container } from "./styles";
import { CiStar } from "react-icons/ci";
import star from "../../assets/star.svg";

export function Star({ children, ...rest }) {
  return (
    <Container type="button" {...rest}>
      <CiStar />
    </Container>
  );
}
