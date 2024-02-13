import { FaArrowLeft } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { RiLockPasswordLine } from "react-icons/ri";
import { MdOutlineEmail } from "react-icons/md";

import { ToLink } from "../../components/ToLink";
import { Input } from "../../components/Input";
import { CiCamera } from "react-icons/ci";

import { Container, Header, Form, ProfileImg } from "./styles";
import { Button } from "../../components/Button";

export function Profile() {
  return (
    <Container>
      <Header>
        <ToLink icon={FaArrowLeft} title="Voltar" />
      </Header>

      <main>
        <ProfileImg>
          <img
            src="https://github.com/jairtorezone.png"
            alt="Foto do usuário"
          />
          <button>
            <CiCamera />
          </button>
        </ProfileImg>

        <Form>
          <Input icon={FiUser} placeholder="Jair Torezone" />
          <Input icon={MdOutlineEmail} placeholder="Senha atual" />
          <Input
            icon={RiLockPasswordLine}
            placeholder="jairtorezone@gmail.com"
          />
          <Input icon={RiLockPasswordLine} placeholder="Nova senha" />

          <Button title="Salvar" />
        </Form>
      </main>
    </Container>
  );
}
