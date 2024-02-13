import { RiLockPasswordLine } from "react-icons/ri";
import { MdOutlineEmail } from "react-icons/md";

import { Input } from "../../components/Input";

import { Container, Form, Background } from "./styles";
import { Button } from "../../components/Button";
import { ToLink } from "../../components/ToLink";

export function SignIn() {
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <span>Aplicação para acompanhar tudo que assistir.</span>

        <h3>Faça Seu Login</h3>

        <div>
          <Input placeholder="E-mail" icon={RiLockPasswordLine} />
          <Input placeholder="Senha" icon={MdOutlineEmail} />
          <Button title="Entrar" />
        </div>

        <ToLink title="Criar conta" />
      </Form>

      <Background />
    </Container>
  );
}
