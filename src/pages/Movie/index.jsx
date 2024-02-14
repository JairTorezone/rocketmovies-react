import { Header } from "../../components/Header";
import { ToLink } from "../../components/ToLink";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { FaArrowLeft } from "react-icons/fa";

import { Container, Form } from "./styles";
import { NoteItem } from "../../components/NoteItem";
import { Button } from "../../components/Button";

export function Movie() {
  return (
    <Container>
      <Header />

      <main>
        <header>
          <ToLink icon={FaArrowLeft} title="Voltar" />
          <h2>Novo filme</h2>
        </header>

        <Form>
          <div>
            <Input placeholder="Título" />
            <Input placeholder="Sua nota (de 0 a 5)" />
          </div>

          <Textarea placeholder="Observações" />
        </Form>

        <section>
          <h3>Marcadores</h3>
          <div className="tags">
            <NoteItem title="react" />
            <NoteItem isNew title="Novo marcador" />
          </div>
        </section>

        <div className="logout">
          <Button isBlack title="Excluir filme" />
          <Button title="Salvar alterações" />
        </div>
      </main>
    </Container>
  );
}
