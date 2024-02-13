import { Container } from "./styles";

export function Button({ icon: Icon, title, ...rest }) {
  return (
    <Container type="button">
      {Icon && <Icon size={16} />}
      {title}
    </Container>
  );
}
