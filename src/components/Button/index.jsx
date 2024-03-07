import { Container } from "./styles";

export function Button({ isBlack = false, icon: Icon, title, ...rest }) {
  return (
    <Container isBlack={isBlack} type="button" {...rest}>
      {Icon && <Icon size={16} />}

      {title}
    </Container>
  );
}
