import { useState } from 'react'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
      console.log('Form submitted:', formData)
      setSubmitStatus('success')
      setIsSubmitting(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      })
      
      // Reset status message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000)
    }, 1000)
  }

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="section-header">
          <h2 className="section-title">Contact Us</h2>
          <p className="section-subtitle">
            If you have questions about our products or services, or would like to discuss a potential collaboration, we'd be happy to hear from you.
          </p>
        </div>
        <div className="contact-content">
          <div className="contact-info">
            <div className="info-item">
              <div className="info-icon">📧</div>
              <div>
                <h3>Email</h3>
                <p>
                  <a href="mailto:contact@architexor.com">contact@architexor.com</a>
                </p>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon">🕐</div>
              <div>
                <h3>Operating Hours</h3>
                <p>Monday – Friday, 9:00 to 18:00 (UTC)</p>
              </div>
            </div>
            <p className="contact-note">
              We aim to respond to all inquiries within one business day.
            </p>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your full name"
              />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 (555) 123-4567"
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="service">Service Interest</label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
              >
                <option value="">Select a service</option>
                <option value="architectural">Architectural Design</option>
                <option value="structural">Structural Engineering</option>
                <option value="aec">AEC Industry Services</option>
                <option value="plugins">AutoCAD & Revit Plugins</option>
                <option value="bim">BIM Software Development</option>
                <option value="web">Website Development</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                placeholder="Tell us about your project..."
              ></textarea>
            </div>
            {submitStatus === 'success' && (
              <div className="form-success">
                ✓ Thank you! Your message has been sent successfully.
              </div>
            )}
            <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
