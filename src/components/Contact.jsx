import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

function Contact() {
  const form = useRef()
  const [status, setStatus] = useState('')
  const [sending, setSending] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault()

    setSending(true)
    setStatus('')

    emailjs
      .sendForm(
        'service_abc123',
        'template_6m75u9r',
        form.current,
        {
          publicKey: 'I05nuMriVvn1GulYe',
        }
      )
      .then(
        () => {
          setStatus('Message sent successfully!')
          setSending(false)
          form.current.reset()
        },
        (error) => {
          console.error('EmailJS error:', error)
          setStatus('Failed to send message. Please try again.')
          setSending(false)
        }
      )
  }

  return (
    <section id="contact" className="contact-section py-5">
      <div className="container">

        <h2 className="section-title text-center mb-5">
          Reach Me
        </h2>

        <div className="contact-box">

          <div className="contact-info">
            <h3>Let's Connect</h3>

            <p>
              Thank you for visiting my portfolio!
            </p>

            <p>
              Feel free to contact me regarding internship opportunities,
              QA-related opportunities, or professional networking.
            </p>
          </div>

          <div className="contact-form-container">

            <form ref={form} onSubmit={sendEmail}>

              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>

                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-control"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="message" className="form-label">
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  className="form-control"
                  rows="5"
                  placeholder="Enter your message"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="contact-submit-btn"
                disabled={sending}
              >
                {sending ? 'Sending...' : 'Send'}
                {!sending && (
                  <i className="bi bi-send ms-2"></i>
                )}
              </button>

              {status && (
                <p className="contact-status mt-3">
                  {status}
                </p>
              )}

            </form>

          </div>

        </div>

      </div>
    </section>
  )
}

export default Contact