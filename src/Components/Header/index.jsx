import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaReact } from "react-icons/fa";
import { FaStream } from "react-icons/fa";
import { Container, Nav } from "./style";

const Header = () => {

  const [active, setActive] = useState(false);
  const Toggle = () => {
    setActive(!active);
  }

  return (
    <Container>
      <h1 style={{ cursor: "pointer" }}>
        <FaReact />
      </h1>

      <Nav className={active ? "active" : ""}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">Sobre</Link>
        </li>
      </Nav>

      <FaStream className="menu_button" onClick={Toggle} />
    </Container>
  );
};

export default Header;
