const About = () => {
  return (
    <div className="about">
      <h2>Sobre Mí</h2>
      <p>Soy Harold Ernesto Salazar Astudillo, estudiante de Ingeniería de Sistemas e Informática en la Universidad Continental. Apasionado por la tecnología, el desarrollo de software y la innovación en el mundo digital.</p>

      <div className="about-info">
        <div className="info-box">
          <h3>Información Personal</h3>
          <p><strong>📍 Dirección:</strong> Av. Amapolas 751, Lima, Perú</p>
          <p><strong>📧 Correo:</strong> harold.salazar19001@gmail.com</p>
          <p><strong>📞 Teléfono:</strong> +51 987 101 729</p>
        </div>

        <div className="info-box">
          <h3>Redes Sociales</h3>
          <div className="social-links">
            <a href="https://www.linkedin.com/" target="_blank">
              <img src={`${import.meta.env.BASE_URL}linkedin.png`} alt="LinkedIn" />
            </a>
            <a href="https://github.com/" target="_blank">
              <img src={`${import.meta.env.BASE_URL}github.png`} alt="GitHub" />
            </a>
            <a href="https://twitter.com/" target="_blank">
              <img src={`${import.meta.env.BASE_URL}twitter.png`} alt="Twitter" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
