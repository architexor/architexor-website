import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import Hero from './Hero'
import Services from './Services'
import Products from './Products'
import Contact from './Contact'
import Footer from './Footer'

const HomePage = () => {
  const [activeSection, setActiveSection] = useState('home')
  const location = useLocation()

  useEffect(() => {
    const hash = location.hash?.slice(1)
    if (hash) {
      const el = document.getElementById(hash)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [location.pathname, location.hash])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'products', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <Navbar activeSection={activeSection} />
      <Hero />
      <Services />
      <Products />
      <Contact />
      <Footer />
    </>
  )
}

export default HomePage
