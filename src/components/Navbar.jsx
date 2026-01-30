import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

const Navbar = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  const handleNavClick = (e, sectionId) => {
    if (location.pathname === '/') {
      e.preventDefault()
      scrollToSection(sectionId)
    }
    setIsMenuOpen(false)
  }

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo" onClick={() => setIsMenuOpen(false)}>
          <img src="/logo.webp" alt="Architexor" className="nav-logo-img" />
          <span className="logo-text">Architexor</span>
        </Link>
        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <Link
            to="/"
            onClick={(e) => handleNavClick(e, 'home')}
            className={activeSection === 'home' ? 'active' : ''}
          >
            Home
          </Link>
          <Link
            to="/#services"
            onClick={(e) => handleNavClick(e, 'services')}
            className={activeSection === 'services' ? 'active' : ''}
          >
            Services
          </Link>
          <Link
            to="/#products"
            onClick={(e) => handleNavClick(e, 'products')}
            className={activeSection === 'products' ? 'active' : ''}
          >
            Products
          </Link>
          <Link
            to="/#contact"
            onClick={(e) => handleNavClick(e, 'contact')}
            className={activeSection === 'contact' ? 'active' : ''}
          >
            Contact
          </Link>
        </div>
        <div className="nav-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
