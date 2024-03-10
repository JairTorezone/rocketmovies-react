import { useState } from "react";

import { FaArrowLeft } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { RiLockPasswordLine } from "react-icons/ri";
import { MdOutlineEmail } from "react-icons/md";

import { Input } from "../../components/Input";
import { CiCamera } from "react-icons/ci";

import { Container, Header, Form, Avatar } from "./styles";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";

import { useAuth } from "../../hooks/auth";

import { api } from "../../services/api";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";

export function Profile() {
  const { user, updateProfile } = useAuth();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [passwodOld, setPasswodOld] = useState();
  const [passwordNew, setPasswordNew] = useState();

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;

  const [avatar, setAvatar] = useState(avatarUrl);
  const [avatarFile, setAvatarFile] = useState(null);

  async function handleUpdate() {
    const user = {
      name,
      email,
      password: passwordNew,
      old_password: passwodOld,
    };

    await updateProfile({ user, avatarFile });
  }

  async function handleChangeAvatar(event) {
    const file = event.target.files[0];
    setAvatarFile(file);

    const imagePreview = URL.createObjectURL(file);
    setAvatar(imagePreview);
  }

  return (
    <Container>
      <Header>
        <Link to="/home">
          <FaArrowLeft />
          Voltar
        </Link>
      </Header>

      <main>
        <Form>
          <Avatar>
            <img
              src={avatar}
              // src="https://github.com/jairtorezone.png"
              alt="Foto do usuário"
            />
            <label htmlFor="avatar">
              <CiCamera />
              <input id="avatar" type="file" onChange={handleChangeAvatar} />
            </label>
          </Avatar>

          <Input
            icon={FiUser}
            type="text"
            value={name}
            placeholder="Nome"
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            icon={RiLockPasswordLine}
            type="text"
            value={email}
            placeholder="E-mail"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            icon={MdOutlineEmail}
            type="password"
            placeholder="Senha atual"
            onChange={(e) => setPasswodOld(e.target.value)}
          />
          <Input
            icon={RiLockPasswordLine}
            type="password"
            placeholder="Nova senha"
            onChange={(e) => setPasswordNew(e.target.value)}
          />

          <Button title="Salvar" onClick={handleUpdate} />
        </Form>
      </main>
    </Container>
  );
}
