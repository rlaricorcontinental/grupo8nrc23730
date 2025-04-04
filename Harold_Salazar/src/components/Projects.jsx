import ProjectCard from "./ProjectCard";

const projects = [
  { name: "Sistema de Gestión de Biblioteca", language: "Java", description: "Administra préstamos y devoluciones.", image: `${import.meta.env.BASE_URL}biblioteca.jpg`, date: "2023" },
  { name: "Plataforma de E-Learning", language: "C#", description: "Sistema web para cursos en línea.", image: `${import.meta.env.BASE_URL}elearning.jpg`, date: "2022" },
  { name: "E-Commerce para Venta de Ropa", language: "PHP", description: "Tienda en línea con carrito de compras.", image: `${import.meta.env.BASE_URL}ecommerce.jpg`, date: "2023" },
  { name: "Sistema de Reservas Médicas", language: "C++", description: "Gestión de citas médicas.", image: `${import.meta.env.BASE_URL}medico.jpg`, date: "2021" },
  { name: "Sistema de Control de Inventarios", language: "Java", description: "Maneja productos y stock en tiempo real.", image: `${import.meta.env.BASE_URL}inventario.jpg`, date: "2022" },
  { name: "Red Social para Estudiantes", language: "PHP", description: "Conecta alumnos en una comunidad interactiva.", image: `${import.meta.env.BASE_URL}redsocial.jpg`, date: "2023" },
  { name: "Gestión de Recursos Humanos", language: "C#", description: "Administra empleados, salarios y asistencia.", image: `${import.meta.env.BASE_URL}rrhh.jpg`, date: "2021" },
  { name: "Aplicación de Finanzas Personales", language: "C++", description: "Ayuda a controlar gastos e ingresos.", image: `${import.meta.env.BASE_URL}finanzas.jpg`, date: "2023" }
];

const Projects = () => {
  return (
    <div className="projects">
      <h2>Mis Proyectos</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
