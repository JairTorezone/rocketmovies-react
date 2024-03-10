import { useState } from "react";
import { RiLockPasswordLine } from "react-icons/ri";
import { MdOutlineEmail } from "react-icons/md";
import { Link } from "react-router-dom";

import { Input } from "../../components/Input";

import { Container, Form, Background } from "./styles";
import { Button } from "../../components/Button";

import { useAuth } from "../../hooks/auth";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useAuth();

  function handleSignIn() {
    console.log(email, password);
    signIn({ email, password });
  }

  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <span>Aplicação para acompanhar tudo que assistir.</span>

        <h3>Faça Seu Login</h3>

        <div>
          <Input
            placeholder="E-mail"
            type="text"
            icon={MdOutlineEmail}
            onChange={(event) => setEmail(event.target.value)}
          />

          <Input
            placeholder="Senha"
            type="password"
            icon={RiLockPasswordLine}
            onChange={(event) => setPassword(event.target.value)}
          />
          <Button title="Entrar" onClick={handleSignIn} />
        </div>

        <Link to="/register"> Criar conta</Link>
      </Form>

      <Background />
    </Container>
  );
}
