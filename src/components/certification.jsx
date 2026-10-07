function Certifications() {
  return (
    <section id="certifications" className="certifications-section py-5">
      <div className="container">

        <h2 className="section-title text-center mb-5">
          Certifications & Learning
        </h2>

        <div className="row g-4 justify-content-center">

          {/* QA */}
          <div className="col-md-6 col-lg-4">
            <div className="certification-card h-100">
              <i className="bi bi-patch-check certification-icon"></i>

              <h4>Introduction to software quality assurance </h4>

              <p>
                University of Moratuwa
              </p>
            </div>
          </div>

          {/* QA */}
          <div className="col-md-6 col-lg-4">
            <div className="certification-card h-100">
              <i className="bi bi-patch-check certification-icon"></i>

              <h4>Introduction to software quality assurance</h4>

              <p>
                Coursera
              </p>
            </div>
          </div>

          {/* Python */}
          <div className="col-md-6 col-lg-4">
            <div className="certification-card h-100">
              <i className="bi bi-code-slash certification-icon"></i>

              <h4>Python for Beginners </h4>

              <p>
                University of Moratuwa
              </p>
            </div>
          </div>

          {/* Python */}
          <div className="col-md-6 col-lg-4">
            <div className="certification-card h-100">
              <i className="bi bi-terminal certification-icon"></i>

              <h4>Python Programming </h4>

              <p>
                University of Moratuwa
              </p>
            </div>
          </div>

          {/* Linux */}
          <div className="col-md-6 col-lg-4">
            <div className="certification-card h-100">
              <i className="bi bi-terminal-fill certification-icon"></i>

              <h4>Red Hat Training: Getting Started with Linux Fundamentals (RH104 - RHA) - Ver. 9.1 </h4>

             
            </div>
          </div>



        </div>

      </div>
    </section>
  )
}

export default Certifications