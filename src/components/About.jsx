import './About.css'

const About = () => {
  const whatWeDo = [
    'BIM and CAD workflow automation',
    'Custom software development for AEC teams',
    'API-driven integrations and data pipelines',
    'AI-assisted design and documentation tools',
  ]

  return (
    <main className="about-page">
      <div className="about-container">
        <header className="about-header">
          <h1 className="about-title">About Architexor</h1>
        </header>

        <div className="about-content">
          <p className="about-lead">
            Architexor is a technology-driven company focused on automation solutions for the architecture, engineering, and construction (AEC) industry.
          </p>

          <p>
            We design and develop tools that streamline design workflows, reduce repetitive manual work, and improve data quality across BIM and CAD environments. Our products and services support teams working with complex architectural and engineering data, enabling faster delivery and more reliable outcomes.
          </p>

          <p>
            Architexor combines deep domain knowledge in AEC processes with modern software engineering to build practical, scalable solutions for real-world production environments.
          </p>

          <section className="about-section">
            <h2 className="about-heading">What We Do</h2>
            <ul className="about-list">
              {whatWeDo.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="about-section">
            <h2 className="about-heading">Our Mission</h2>
            <p>
              To help design and engineering teams work more efficiently by replacing manual, error-prone processes with intelligent automation.
            </p>
          </section>

          <p className="about-contact-cta">
            For inquiries, partnerships, or support, contact us at{' '}
            <a href="mailto:contact@architexor.com">contact@architexor.com</a>.
          </p>
        </div>
      </div>
    </main>
  )
}

export default About
