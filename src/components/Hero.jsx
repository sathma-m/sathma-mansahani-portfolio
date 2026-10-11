function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="row align-items-center min-vh-100">

          <div className="col-lg-7">
            <p className="hero-hello">Hello, I'm</p>

            <h1 className="hero-name">
              Sathma Mansahani
            </h1>

            <h2 className="hero-title">
              BICT Undergraduate
            </h2>

            <p className="hero-description">
              Passionate about software quality and creating better
              user experiences.
            </p>

            <div className="hero-buttons">
  <a href="#projects" className="btn hero-btn">
    View My Projects
  </a>

 <a
  href="/CV/SathmaMansahani_QA_CV.pdf"
  target="_blank"
  rel="noreferrer"
  className="btn cv-btn"
>
  <i className="bi bi-file-earmark-person me-2"></i>
  View CV
</a>
</div>
<div className="hero-socials mt-4">
  <a
    href="https://github.com/sathma-m/"
    target="_blank"
    rel="noreferrer"
    aria-label="GitHub"
  >
    <i className="bi bi-github"></i>
  </a>

  <a
    href="https://www.linkedin.com/in/sathma-mansahani-98812b296"
    target="_blank"
    rel="noreferrer"
    aria-label="LinkedIn"
  >
    <i className="bi bi-linkedin"></i>
  </a>
</div>
          </div>

          <div className="col-lg-5 text-center">
           <div className="profile-circle">
  <img
    src="/images/profile.jpg"
    alt="Sathma Mansahani"
    className="profile-image"
  />
</div>
          </div>

        </div>
        
      </div>
    </section>
  )
}

export default Hero