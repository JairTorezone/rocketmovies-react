import { RiLockPasswordLine } from "react-icons/ri";
import { MdOutlineEmail } from "react-icons/md";
import { Link } from "react-router-dom";

import { Input } from "../../components/Input";

import { Container, Form, Background } from "./styles";
import { Button } from "../../components/Button";

export function SignIn() {
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <span>Aplicação para acompanhar tudo que assistir.</span>

        <h3>Faça Seu Login</h3>

        <div>
          <Input placeholder="E-mail" icon={MdOutlineEmail} />
          <Input
            placeholder="Senha"
            type="password"
            icon={RiLockPasswordLine}
          />
          <Button title="Entrar" />
        </div>

        <Link to="/register"> Criar conta</Link>
      </Form>

      <Background />
    </Container>
  );
}
