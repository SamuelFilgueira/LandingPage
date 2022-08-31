import { Container } from "./style";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaReact } from "react-icons/fa";

const Footer = () => {
  return (
    <Container>
      <div className="footer-menu">

        <h1 style={{cursor: 'pointer'}} ><FaReact/></h1>

        <ul>
          <li>
            <a href="">SOBRE NÓS</a>
          </li>
          <li>
            <a href="">DÚVIDAS FREQUENTES</a>
          </li>
          <li>
            <a href="">NOVIDADES</a>
          </li>
        </ul>

        <ul>
          <li>
            <a href="">TRABALHE CONOSCO</a>
          </li>
          <li>
            <a href="">PROJETOS</a>
          </li>
          <li>
            <a href="">CONSUMIDOR</a>
          </li>
        </ul>

        <ul className="social">
          <h4>SIGA-NOS:</h4>
          <li>
            <a href="">
              <FaFacebookF />
            </a>
          </li>
          <li>
            <a href="">
              <FaInstagram />
            </a>
          </li>
          <li>
            <a href="">
              <FaTwitter />
            </a>
          </li>
        </ul>
      </div>
    </Container>
  );
};

export default Footer;
