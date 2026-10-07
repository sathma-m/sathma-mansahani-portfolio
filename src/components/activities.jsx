function Activities() {
  const zeroPlasticProjects = [
  {
    title: "Thuru 2.0",
    role: "Event Coordinator",
    image: "/images/activities/zero-plastic/thuru.jpeg",
    description:
      "Supported the coordination of an environmental awareness initiative that distributed plants to school children and encouraged them to protect nature."
  },
  {
    title: "Greenshift",
    role: "Delegate Coordinator",
    image: "/images/activities/zero-plastic/Greenshift.jpeg",
    description:
      "Held a leadership role in organizing an orientation programme aimed at empowering the next generation to advocate for a plastic-free future."
  },
  {
    title: "Nature Advocates",
    role: "Committee Member",
    image: "/images/activities/zero-plastic/Nature Advocates.jpeg",
    description:
      "Engaged with preschool children through fun and educational activities that taught them the importance of reducing, reusing, and being mindful of plastic use."
  },
  {
    title: "Green Force - Phase 03",
    role: "Volunteer",
    image: "/images/activities/zero-plastic/Green Force.jpeg",
    description:
      "Supported a programme aimed at raising awareness about the harmful effects of plastic pollution and promoting sustainable practices among school children."
  }
]

const artsClub = [
  {
    title: "Dancing Circle Coordinator",
    role: "Coordinator",
   image: "/images/activities/arts club/xx.jpeg",
    description:
      "Participated in university cultural activities and performances while developing teamwork, coordination and communication skills."
  }
]

  return (
    <section id="activities" className="activities-section py-5">
      <div className="container">

        <h2 className="section-title text-center mb-5">
          Extracurricular Activities
        </h2>

        {/* Zero Plastic */}
        <div className="activity-category mb-5">

          <div className="text-center mb-4">
            <h3 className="activity-category-title">
              Zero Plastic Colombo Community
            </h3>

            <p className="activity-category-subtitle">
              University of Colombo
            </p>
          </div>

          <div className="row g-4 justify-content-center">

            {zeroPlasticProjects.map((project, index) => (
              <div
                className="col-lg-5 col-md-6"
                key={index}
              >
                <div className="activity-project-card h-100">

                  <img
                    src={project.image}
                    alt={`${project.title} Project`}
                    className="activity-project-image"
                  />

                  <div className="activity-project-content">

                    <h4>{project.title}</h4>

                    <span className="activity-role">
                      {project.role}
                    </span>

                    <p className="activity-description">
  {project.description}
</p>

                  </div>

                </div>
              </div>
            ))}

          </div>
        </div>

        {/* Dancing Circle */}
        <div className="activity-category mb-5">

          <div className="text-center mb-4">
            <h3 className="activity-category-title">
              Arts Club - Faculty of Technology
            </h3>
        
            <p className="activity-category-subtitle">
              University of Colombo
            </p>
          </div>

          <div className="row g-4 justify-content-center">

            {artsClub.map((project, index) => (
              <div
                className="col-lg-5 col-md-6"
                key={index}
              >
                <div className="activity-project-card h-100">

                  <img
                    src={project.image}
                    alt={`${project.title} Project`}
                    className="activity-project-image"
                  />

                  <div className="activity-project-content">

                    <h4>{project.title}</h4>

                    <span className="activity-role">
                      {project.role}
                    </span>

                    <p className="activity-description">
  {project.description}
</p>

                  </div>

                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  )
}

export default Activities