function ProjectCard({ project }) {
  return (
    <div className="col-lg-6 col-md-6">
      <div className="project-card h-100">

        <div className="project-image-container">
          <img
            src={project.image}
            alt={project.title}
            className="project-image"
          />
        </div>

        <div className="project-card-content">

          <span className="project-type">
            {project.type}
          </span>

          <h3>{project.title}</h3>

          <p>
            {project.description}
          </p>

          <div className="project-skills">
            {project.skills.map((skill, index) => (
              <span key={index}>{skill}</span>
            ))}
          </div>

          <p className="project-tools">
            <strong>Tools:</strong> {project.tools}
          </p>

          <a
            href={project.github}
            className="btn project-btn"
            target="_blank"
            rel="noreferrer"
          >
            View on GitHub
          </a>

        </div>

      </div>
    </div>
  )
}

export default ProjectCard