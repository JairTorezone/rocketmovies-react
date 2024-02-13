import { CiStar } from "react-icons/ci";
import { Container, Star } from "./styles";
import { ButtonText } from "../ButtonText";

export function Card() {
  return (
    <Container>
      <h3>Interestellar</h3>
      <Star>
        <CiStar />
        <CiStar />
        <CiStar />
        <CiStar />
        <CiStar />
      </Star>
      <p>
        Pragas nas colheitas fizeram a civilização humana regredir para uma
        sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da
        NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de
        Cooper, acredita que seu quarto está assombrado por um fantasma que
        tenta se comunicar com ela.
      </p>

      <div>
        <ButtonText title="ficção científica" />
        <ButtonText title="Drama" />
        <ButtonText title="Família" />
      </div>
    </Container>
  );
}
