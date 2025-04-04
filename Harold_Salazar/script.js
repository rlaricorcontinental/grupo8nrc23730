const projects = [
    {
      name: "Sistema de Gestión de Biblioteca",
      language: "Java",
      description: "Administra préstamos y devoluciones.",
      image: "imagenes/biblioteca.jpg",
      date: "2023"
    },
    {
      name: "Plataforma de E-Learning",
      language: "C#",
      description: "Sistema web para cursos en línea.",
      image: "imagenes/elearning.jpg",
      date: "2022"
    },
    {
      name: "E-Commerce para Venta de Ropa",
      language: "PHP",
      description: "Tienda en línea con carrito de compras.",
      image: "imagenes/ecommerce.jpg",
      date: "2023"
    },
    {
      name: "Sistema de Reservas Médicas",
      language: "C++",
      description: "Gestión de citas médicas.",
      image: "imagenes/medico.jpg",
      date: "2021"
    },
    {
      name: "Sistema de Control de Inventarios",
      language: "Java",
      description: "Maneja productos y stock en tiempo real.",
      image: "imagenes/inventario.jpg",
      date: "2022"
    },
    {
      name: "Red Social para Estudiantes",
      language: "PHP",
      description: "Conecta alumnos en una comunidad interactiva.",
      image: "imagenes/redsocial.jpg",
      date: "2023"
    },
    {
      name: "Gestión de Recursos Humanos",
      language: "C#",
      description: "Administra empleados, salarios y asistencia.",
      image: "imagenes/rrhh.jpg",
      date: "2021"
    },
    {
      name: "Aplicación de Finanzas Personales",
      language: "C++",
      description: "Ayuda a controlar gastos e ingresos.",
      image: "imagenes/finanzas.jpg",
      date: "2023"
    }
  ];
  
  function renderProjects() {
    const grid = document.querySelector(".project-grid");
    projects.forEach(project => {
      const card = document.createElement("div");
      card.className = "project-card";
      card.innerHTML = `
        <img src="${project.image}" alt="${project.name}" />
        <h3>${project.name}</h3>
        <p>${project.description}</p>
        <span>${project.language} - ${project.date}</span>
      `;
      grid.appendChild(card);
    });
  }
  
  document.addEventListener("DOMContentLoaded", renderProjects);
  