import './TermsOfService.css'

const TermsOfService = () => {
  return (
    <main className="terms-page">
      <div className="terms-container">
        <header className="terms-header">
          <h1 className="terms-title">Terms of Service</h1>
        </header>

        <div className="terms-content">
          <p className="terms-lead">
            By accessing or using the Architexor website, you agree to the following terms.
          </p>

          <section className="terms-section">
            <h2 className="terms-heading">Use of Website</h2>
            <p>
              You agree to use this website for lawful purposes only and not to engage in activities that could harm, disrupt, or misuse our services or infrastructure.
            </p>
          </section>

          <section className="terms-section">
            <h2 className="terms-heading">Intellectual Property</h2>
            <p>
              All content on this website, including text, graphics, logos, and software, is the property of Architexor unless otherwise stated and may not be used without permission.
            </p>
          </section>

          <section className="terms-section">
            <h2 className="terms-heading">Disclaimer</h2>
            <p>
              The website and its content are provided &ldquo;as is&rdquo; without warranties of any kind. Architexor does not guarantee the accuracy or completeness of information presented.
            </p>
          </section>

          <section className="terms-section">
            <h2 className="terms-heading">Limitation of Liability</h2>
            <p>
              Architexor shall not be liable for any direct or indirect damages arising from the use of this website.
            </p>
          </section>

          <section className="terms-section">
            <h2 className="terms-heading">Changes</h2>
            <p>
              We may update these Terms of Service from time to time. Continued use of the website constitutes acceptance of any changes.
            </p>
          </section>

          <section className="terms-section">
            <h2 className="terms-heading">Contact</h2>
            <p>
              For questions regarding these terms, please contact:{' '}
              <a href="mailto:contact@architexor.com">contact@architexor.com</a>
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}

export default TermsOfService
