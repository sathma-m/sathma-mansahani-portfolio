function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark portfolio-navbar sticky-top">
      <div className="container">

        <a className="navbar-brand fw-bold" href="#home">
          Sathma Mansahani
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#portfolioNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse"
          id="portfolioNavbar"
        >
          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <a className="nav-link" href="#home">Home</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#about">About</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#skills">Skills</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#projects">Projects</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#education">Education</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#certifications">
                Certifications
              </a>
            </li>

            <li className="nav-item">
  <a className="nav-link" href="#activities">
    Extracurricular Activities
  </a>
</li>

            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  )
}

export default Navbar