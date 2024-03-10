import { useState } from "react";
import { FiUser } from "react-icons/fi";
import { RiLockPasswordLine } from "react-icons/ri";
import { MdOutlineEmail } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa";

import { Input } from "../../components/Input";

import { Container, Form, Background } from "./styles";
import { Button } from "../../components/Button";
import { Link, useNavigate } from "react-router-dom";

import { api } from "../../services/api";

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSignUp() {
    if (!name || !email || !password) {
      alert("Preencha todos os campos!");
    }

    api
      .post("/users", { name, email, password })
      .then(() => {
        alert("Usuário cadastrado com sucesso!");
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("Náo foi possível cadastrar");
        }
      });
  }

  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <span>Aplicação para acompanhar tudo que assistir.</span>
        <h3>Crie sua conta</h3>
        <div>
          <Input
            placeholder="Nome"
            icon={FiUser}
            onChange={(event) => setName(event.target.value)}
          />

          <Input
            placeholder="E-mail"
            icon={MdOutlineEmail}
            onChange={(event) => setEmail(event.target.value)}
          />

          <Input
            placeholder="Senha"
            icon={RiLockPasswordLine}
            type="password"
            onChange={(event) => setPassword(event.target.value)}
          />

          <Button title="Cadstrar" icon={FaPlus} onClick={handleSignUp} />
        </div>

        <Link to="/">
          <FaArrowLeft />
          Voltar para o login
        </Link>
      </Form>

      <Background />
    </Container>
  );
}
