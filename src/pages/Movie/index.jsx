import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { FaArrowLeft } from "react-icons/fa";

import { Container, Form } from "./styles";
import { NoteItem } from "../../components/NoteItem";
import { Button } from "../../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import { api } from "../../services/api";

export function Movie() {
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState(0);
  const [description, setDescription] = useState("");

  const [tags, setTags] = useState([]);
  const [newTags, setNewTags] = useState("");

  const navigate = useNavigate();

  function handleAddTags() {
    setTags((prevState) => [...prevState, newTags]);
    setNewTags("");
  }

  function handleRemoveTags(deleted) {
    setTags((prevState) => prevState.filter((tag) => tag !== deleted));
  }

  async function handleSaveMovie() {
    if (!title) {
      return alert("Digite o título do filme");
    }

    if (!rating) {
      return alert("Informe a nota de 1 a 5");
    }

    if (rating < 1 || rating > 5) {
      return alert("A avaliação tem que está entre (1 e 5 )");
      //  console.log(rating);
    }

    if (!description) {
      return alert("Informe a descrição, a sinopse do filme");
    }

    if (newTags) {
      return alert(
        "Você deixou uma tag no campo para adicionar, mas não clicou em adicionar. Clique para adicionar ou deixe o campo vazio."
      );
    }

    await api.post("/movies", {
      title,
      rating,
      description,
      tags,
    });

    alert("Filme cadastrado com sucesso!");
    navigate("/");
  }

  return (
    <Container>
      <Header />

      <main>
        <header>
          <Link to="/home">
            <FaArrowLeft />
            Voltar
          </Link>

          <h2>Novo filme</h2>
        </header>

        <Form>
          <div>
            <Input
              placeholder="Título"
              type="text"
              onChange={(e) => setTitle(e.target.value)}
            />
            <Input
              placeholder="Sua nota (de 0 a 5)"
              type="number"
              min="1"
              max="5"
              onChange={(e) => setRating(e.target.value)}
            />
          </div>

          <Textarea
            placeholder="Observações"
            type="text"
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form>

        <section>
          <h3>Marcadores</h3>
          <div className="tags">
            {tags.map((tag, index) => (
              <NoteItem
                key={String(index)}
                value={tag}
                onClick={() => handleRemoveTags(tag)}
              />
            ))}

            <NoteItem
              isNew
              placeholder="Novo marcador"
              value={newTags}
              onChange={(e) => setNewTags(e.target.value)}
              onClick={handleAddTags}
            />
          </div>
        </section>

        <div className="logout">
          <Button isBlack title="Excluir filme" />
          <Button title="Salvar alterações" onClick={handleSaveMovie} />
        </div>
      </main>
    </Container>
  );
}
