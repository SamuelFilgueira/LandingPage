import { Container, Description } from "./style";
import Headset from "../../Assets/headset1.png";
import HeadsetlATERAL from "../../Assets/headsetLateral.png";
import PessoaComHeadseat from "../../Assets/PessoaComHeadseat.jpeg";
import Comment from "../Comment";

const Home = () => {
  return (
    <Container>
      <div className="headset-container">
        <div className="headsetText">
          <h1>ELEVE O NÍVEL </h1>
          <h1>DO SEU</h1>
          <h1>
            {" "}
            <i>SOM</i>{" "}
          </h1>
        </div>

        <img src={Headset} alt="" />
      </div>

      <Description>
        <img src={PessoaComHeadseat} alt="" />

        <div className="description-text">
          <h1 className="description-title">Headset Gamer Redragon</h1>
          <p>
            Desenvolvido com as melhores tecnologias de som disponíveis no
            mercado. Escute seus adversários com precisão e nunca mais perca uma
            partida por estar desprevinido.
          </p>
        </div>
      </Description>

      <Description>
        <div className="description-text">
          <h1 className="description-title">MODERNO</h1>
          <p>
            O Redragon Hero possui corpo fosco e arco de cabeça revestido com
            courino, entregando um visual sóbrio e de extremo bom gosto.
          </p>
        </div>

        <img src={HeadsetlATERAL} alt="" />
      </Description>

      <Comment />
    </Container>
  );
};

export default Home;
