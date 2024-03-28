import { useAuth } from "../../hooks/auth";

import { IoTimeOutline } from "react-icons/io5";
import { FaArrowLeft } from "react-icons/fa";

import { Container } from "./styles";
import { Header } from "../../components/Header";

import { Star } from "../../components/Star";
import { Tag } from "../../components/Tag";
import { Button } from "../../components/Button";

import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../services/api";

export function Details() {
  const [note, setNotes] = useState(null);
  const [numStar, setNumStar] = useState(1);

  const { user } = useAuth();

  const params = useParams();
  const navigate = useNavigate();

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;

  const listStar = countStar(numStar);

  function countStar(qtdStar) {
    let stars = [];
    for (let i = 0; i < qtdStar; i++) {
      stars.push(i);
    }

    return stars;
  }

  async function handleDeleteMovie() {
    const confirm = window.confirm("Deseja realmente remover este filme?");

    if (confirm) {
      await api.delete(`/movies/${params.id}`);
    }

    navigate("/");
  }

  useEffect(() => {
    async function fetchNoteMovie() {
      const response = await api.get(`/movies/${params.id}`);
      setNotes(response.data);

      if (response.data.rating !== null) {
        const stars = Number(response.data.rating);
        setNumStar(stars);
      }
    }

    fetchNoteMovie();
  }, [note]);

  return (
    <Container>
      <Header />

      {note && (
        <main>
          <Link to="/home">
            <FaArrowLeft />
            Voltar
          </Link>

          <section className="title">
            <h2> {note.title} </h2>

            <div className="stars">
              {listStar.map((item, index) => (
                <Star key={index} />
              ))}
            </div>
          </section>

          <section className="created-at">
            <div className="user">
              <img src={avatarUrl} alt="icone user" />
              <span>{`Por ${user.name}`}</span>

              <div className="times">
                <IoTimeOutline />
                <span> {note.created_at} </span>
              </div>
            </div>
          </section>

          {note.tags && (
            <div className="tags">
              {note.tags.map((tag) => (
                <Tag key={String(tag.id)} title={tag.name} />
              ))}
            </div>
          )}

          <div className="description">
            <p>{note.description}</p>
          </div>

          <Button isblack title="Excluir filme" onClick={handleDeleteMovie} />
        </main>
      )}
    </Container>
  );
}
