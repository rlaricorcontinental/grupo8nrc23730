const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <img src={project.image} alt={project.name} />
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      <span>{project.language} - {project.date}</span>
    </div>
  );
};

export default ProjectCard;
