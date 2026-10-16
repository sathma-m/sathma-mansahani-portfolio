function Projects() {

  const projects = [
    {
      title: "DemoBlaze Web Application Testing",
      type: "Manual Testing",
      image: "/images/projects/Demoblaze.jpg",

      description:
        "Performed manual testing on the DemoBlaze e-commerce website, covering major functionalities such as registration, login, product browsing, cart, ordering and contact features.",

      skills: [
        "Manual Testing",
        "Functional Testing",
        "UI Testing"
      ],

      tools: "Excel, Word, GitHub, Browser DevTools",

      github:
        "https://github.com/sathma-m/DemoBlaze---Manual-testing-"
    },

    {
      title: "JSONPlaceholder API Testing",
      type: "API Testing",
      image: "/images/projects/APItesting.jpg",

      description:
        "Tested REST API endpoints using Postman, covering CRUD operations, positive and negative scenarios, status codes, response data, headers and response time.",

      skills: [
        "Postman",
        "REST API",
        "CRUD",
        "API Validation"
      ],

      tools: "Postman, Excel, GitHub",

      github:
        "https://github.com/sathma-m/JsonPlacrholdaer-API-Testing"
    },

    {
      title: "Expense Tracker Web Application",
      type: "Frontend Web Development ",
      image: "/images/projects/Expense tracker.jpg",

      description:
        "Developed the frontend of a responsive Expense Tracker application for managing monthly income and expenses, including expense categorization, balance calculation and monthly expense tracking.",

      skills: [
        "React",
        "JavaScript",
        "Bootstrap",
        "LocalStorage"
      ],

      tools: "React, Bootstrap, GitHub, VS Code",

      github:
        "https://github.com/sathma-m/Expense-Tracker-Web-Application"
    },

    {
      title: "Kids Reading Task Manager App",
      type: "Android Development",
      image: "/images/projects/To do.jpg",

      description:
        "Developed a kids-friendly task management Android application with user authentication and task-list functionality.",

      skills: [
        "Android",
        "Firebase",
        "RecyclerView"
      ],

      tools: "Android Studio, Firebase, GitHub",

      github:
        "https://github.com/sathma-m/Task_Manager"
    }
  ]


  return (
    <section id="projects" className="projects-section py-5">

      <div className="container">

        <h2 className="section-title text-center mb-5">
          Projects
        </h2>


        <div className="row g-4 justify-content-center">

          {projects.map((project, index) => (

            <div
              className="col-lg-5 col-md-6"
              key={index}
            >

              <div className="project-card h-100">

                {/* Project Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />


                {/* Project Type */}
                <span className="project-type">
                  {project.type}
                </span>


                {/* Project Title */}
                <h3>
                  {project.title}
                </h3>


                {/* Description */}
                <p>
                  {project.description}
                </p>


                {/* Skills */}
                <div className="project-skills">

                  {project.skills.map((skill, skillIndex) => (
                    <span key={skillIndex}>
                      {skill}
                    </span>
                  ))}

                </div>


                {/* Tools */}
                <p className="project-tools">
                  <strong>Tools:</strong> {project.tools}
                </p>


                {/* GitHub Button */}
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

          ))}

        </div>

      </div>

    </section>
  )
}

export default Projects