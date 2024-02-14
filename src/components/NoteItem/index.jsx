import { FiPlus, FiX } from "react-icons/fi";

import { Container } from "./styles";

export function NoteItem({ isNew = false, title, value, ...rest }) {
  return (
    <Container isNew={isNew}>
      {isNew ? <FiPlus /> : <FiX />}
      {title}
    </Container>
  );
}
