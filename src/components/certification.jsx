
function Certifications() {
  const certificates = [
    {
      title: "Introduction to Software Quality Assurance",
      organization: "University of Moratuwa",
      image: "images/Certificates/QA_moratuwa.jpg",
    },
    {
      title: "Introduction to Software Quality Assurance",
      organization: "Coursera",
      image: "images/Certificates/QA_coursers.jpg",
    },
    {
      title: "Python for Beginners",
      organization: "University of Moratuwa",
      image: "images/Certificates/Python_for_beginners.jpg",
    },
    {
      title: "Python Programming",
      organization: "University of Moratuwa",
      image: "images/Certificates/Python.jpg",
    },
    {
      title: "Red Hat Training: Getting Started with Linux Fundamentals (RH104 - RHA) - Ver. 9.1",
      organization: "Red Hat Academy",
      image: "images/Certificates/Red Hat.jpg",
    },
  ];

  return (
    <section id="certifications" className="certifications-section py-5">
      <div className="container">

        <h2 className="section-title text-center mb-5">
          Certifications & Learning
        </h2>

        <div className="row g-4 justify-content-center">
          {certificates.map((certificate, index) => (
            <div className="col-lg-5 col-md-6" key={index}>
              <div className="certification-card h-100">

                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="certificate-image"
                />

                <h4>{certificate.title}</h4>

                <p>{certificate.organization}</p>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Certifications;
