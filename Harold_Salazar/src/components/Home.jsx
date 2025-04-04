import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <img src={`${import.meta.env.BASE_URL}logo-continental.png`} alt="Universidad Continental" className="logo-uni" />
      <img src={`${import.meta.env.BASE_URL}perfil.png`} alt="Harold Salazar" className="profile-img" />

      <h1>Harold Ernesto Salazar Astudillo</h1>
      <h2>Estudiante de Ingeniería de Sistemas e Informática</h2>
      <p>Apasionado por la tecnología, el desarrollo de software y la innovación.</p>

      <Link to="/projects" className="btn-main">Ver Proyectos</Link>

      <div className="social-links">
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
          <img src={`${import.meta.env.BASE_URL}linkedin.png`} alt="LinkedIn" />
        </a>
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
          <img src={`${import.meta.env.BASE_URL}github.png`} alt="GitHub" />
        </a>
      </div>
    </div>
  );
};

export default Home;
