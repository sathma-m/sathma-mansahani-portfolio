function Education() {
  return (
    <section id="education" className="education-section py-5">
      <div className="container">

        <h2 className="section-title text-center mb-5">
          Education
        </h2>

        {/* University */}
        <div className="education-card mx-auto mb-4">

          <h3>
            Bachelor of Information and Communication Technology
          </h3>

          <h5>University of Colombo</h5>

          <p>Faculty of Technology</p>

          <span className="education-badge">
            BICT Undergraduate
          </span>

        </div>


        {/* A/L */}
        <div className="education-card mx-auto">

          <h3>
            G.C.E. Advanced Level - Engineering Technology Stream
          </h3>

          <h5>Taxila Central College</h5>

          <p className="mb-2">
            Engineering Technology - A &nbsp; | &nbsp;
            Information & Communication Technology - A &nbsp; | &nbsp;
            Science for Technology - B
          </p>

          <p>
            <strong>Z-Score:</strong> 2.2116
          </p>

        </div>

      </div>
    </section>
  )
}

export default Education