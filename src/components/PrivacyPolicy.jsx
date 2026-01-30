import './PrivacyPolicy.css'

const PrivacyPolicy = () => {
  const infoWeCollect = [
    'Name',
    'Email address',
    'Information submitted through contact forms',
  ]

  const howWeUse = [
    'Respond to inquiries',
    'Provide requested services',
    'Improve our website and offerings',
  ]

  return (
    <main className="privacy-page">
      <div className="privacy-container">
        <header className="privacy-header">
          <h1 className="privacy-title">Privacy Policy</h1>
        </header>

        <div className="privacy-content">
          <p className="privacy-lead">
            Architexor respects your privacy and is committed to protecting any personal information you provide.
          </p>

          <section className="privacy-section">
            <h2 className="privacy-heading">Information We Collect</h2>
            <p>We may collect limited personal information such as:</p>
            <ul className="privacy-list">
              {infoWeCollect.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <p>We do not knowingly collect sensitive personal data.</p>
          </section>

          <section className="privacy-section">
            <h2 className="privacy-heading">How We Use Information</h2>
            <p>Information collected is used solely to:</p>
            <ul className="privacy-list">
              {howWeUse.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="privacy-section">
            <h2 className="privacy-heading">Cookies</h2>
            <p>
              Our website may use basic cookies for functionality and analytics. You may disable cookies in your browser settings if desired.
            </p>
          </section>

          <section className="privacy-section">
            <h2 className="privacy-heading">Data Sharing</h2>
            <p>
              We do not sell, rent, or trade personal information to third parties.
            </p>
          </section>

          <section className="privacy-section">
            <h2 className="privacy-heading">Data Security</h2>
            <p>
              We implement reasonable technical and organizational measures to protect your data against unauthorized access or disclosure.
            </p>
          </section>

          <section className="privacy-section">
            <h2 className="privacy-heading">Contact</h2>
            <p>
              If you have questions about this Privacy Policy, please contact us at:{' '}
              <a href="mailto:contact@architexor.com">contact@architexor.com</a>
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}

export default PrivacyPolicy
