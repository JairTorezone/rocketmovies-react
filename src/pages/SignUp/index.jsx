import { FiUser } from "react-icons/fi";
import { RiLockPasswordLine } from "react-icons/ri";
import { MdOutlineEmail } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa";

import { Input } from "../../components/Input";

import { Container, Form, Background } from "./styles";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";

export function SignUp() {
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <span>Aplicação para acompanhar tudo que assistir.</span>
        <h3>Crie sua conta</h3>
        <div>
          <Input placeholder="Nome" icon={FiUser} />
          <Input placeholder="E-mail" icon={RiLockPasswordLine} />
          <Input placeholder="Senha" icon={MdOutlineEmail} />
          <Button title="Cadstrar" icon={FaPlus} />
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
