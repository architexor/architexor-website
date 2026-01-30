import { Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import About from './components/About'
import PrivacyPolicy from './components/PrivacyPolicy'
import TermsOfService from './components/TermsOfService'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/about"
          element={
            <>
              <Navbar activeSection={null} />
              <About />
              <Footer />
            </>
          }
        />
        <Route
          path="/privacy-policy"
          element={
            <>
              <Navbar activeSection={null} />
              <PrivacyPolicy />
              <Footer />
            </>
          }
        />
        <Route
          path="/terms"
          element={
            <>
              <Navbar activeSection={null} />
              <TermsOfService />
              <Footer />
            </>
          }
        />
      </Routes>
    </div>
  )
}

export default App
