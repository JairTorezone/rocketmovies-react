import { Container } from "./styles";

import { Tag } from "../Tag";
import { Star } from "../Star";

import { api } from "../../services/api";

import { useEffect, useState } from "react";

export function Note({ data, ...rest }) {
  const [note, setNote] = useState(null);
  const [numStar, setNumStar] = useState(5);

  const listStar = countStar(numStar);

  function countStar(qtdStar) {
    let stars = [];
    for (let i = 0; i < qtdStar; i++) {
      stars.push(i);
    }

    return stars;
  }

  useEffect(() => {
    async function fetch() {
      const response = await api.get(`/movies/${data.id}`);
      setNote(response.data);

      if (response.data.rating !== null) {
        const star = Number(response.data.rating);

        setNumStar(star);
      } else {
        setNumStar(1);
      }
    }

    fetch();
  }, []);

  return (
    <Container {...rest}>
      <h1>{data.title}</h1>

      <span>
        {listStar.map((index) => (
          <Star key={index} />
        ))}
      </span>

      <p>{data.description}</p>

      {data.tags && (
        <footer>
          {data.tags.map((tag) => (
            <Tag key={tag.id} title={tag.name} />
          ))}
        </footer>
      )}
    </Container>
  );
}
