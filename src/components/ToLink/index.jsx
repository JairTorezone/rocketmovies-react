import { Container } from "./styles";

export function ToLink({ icon: Icon, title, ...rest }) {
  return (
    <Container>
      {Icon && <Icon size={16} />}
      {title}
    </Container>
  );
}
