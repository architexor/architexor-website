import './Hero.css'

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Architecture, Engineering & Construction
            <span className="highlight"> Solutions</span>
          </h1>
          <p className="hero-subtitle">
            Transforming visions into reality through innovative design, 
            structural engineering, and cutting-edge technology solutions 
            for the AEC industry.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={() => scrollToSection('products')}>
              View Products
            </button>
            <button className="btn btn-secondary" onClick={() => scrollToSection('contact')}>
              Get In Touch
            </button>
          </div>
        </div>
        <div className="hero-visual">
          <div className="geometric-shape"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero
