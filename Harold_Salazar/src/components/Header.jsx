import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>@Dev_Harold_Salazar </h1>
      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/projects">Proyectos</Link>
        <Link to="/about">Sobre mí</Link>
      </nav>
    </header>
  );
};

export default Header;
