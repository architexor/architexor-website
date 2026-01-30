import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-copyright">
          © {currentYear} Architexor. All rights reserved.
        </p>
        <p className="footer-tagline">Architecture & Engineering Automation</p>
        <a href="mailto:contact@architexor.com" className="footer-email">
          contact@architexor.com
        </a>
        <div className="footer-social">
          <a href="https://github.com/architexor" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <span className="footer-sep">|</span>
          <a href="https://www.linkedin.com/company/architexor" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>
        <nav className="footer-links">
          <Link to="/about">About</Link>
          <span className="footer-sep">|</span>
          <Link to="/privacy-policy">Privacy Policy</Link>
          <span className="footer-sep">|</span>
          <Link to="/terms">Terms of Service</Link>
        </nav>
      </div>
    </footer>
  )
}

export default Footer
