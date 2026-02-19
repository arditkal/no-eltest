import { useState } from 'react'
import Head from 'next/head'
import Layout from '../components/Layout'

export default function Kontakt() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <Layout>
      <Head>
        <title>Kontakt oss – No-EL | Norsk e-læring for eiendomsmeglere</title>
        <meta name="description" content="Ta kontakt med No-EL for spørsmål om kurs, samarbeid eller support. Vi hjelper deg gjerne." />
        <meta property="og:title" content="Kontakt oss – No-EL" />
        <meta property="og:description" content="Har du spørsmål om e-læring for eiendomsmeglere? Ta kontakt med oss." />
        <link rel="canonical" href="https://no-el.no/kontakt" />
      </Head>

      <header className="page-header">
        <div className="container">
          <span className="section-label" style={{ color: 'var(--color-accent-warm)' }}>Kontakt</span>
          <h1>Vi hører gjerne fra deg</h1>
          <p>Har du spørsmål om kurs, bedriftsavtaler eller teknisk support? Send oss en melding.</p>
        </div>
      </header>

      <section className="page-content">
        <div className="container">
          <div className="contact-grid">
            <div>
              {submitted ? (
                <div style={{
                  padding: 'var(--space-xl)',
                  background: 'var(--color-snow)',
                  borderRadius: 'var(--border-radius)',
                  textAlign: 'center'
                }}>
                  <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
                  <h3>Takk for din henvendelse!</h3>
                  <p style={{ marginTop: '0.5rem' }}>Vi svarer deg så raskt som mulig, vanligvis innen 1–2 virkedager.</p>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Fullt navn</label>
                    <input type="text" id="name" name="name" required placeholder="Ola Nordmann" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">E-postadresse</label>
                    <input type="email" id="email" name="email" required placeholder="ola@eksempel.no" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject">Emne</label>
                    <select id="subject" name="subject" required>
                      <option value="">Velg emne...</option>
                      <option value="kurs">Spørsmål om kurs</option>
                      <option value="bedrift">Bedriftsavtale</option>
                      <option value="teknisk">Teknisk support</option>
                      <option value="annet">Annet</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Melding</label>
                    <textarea id="message" name="message" required placeholder="Skriv din melding her..."></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary" style={{ alignSelf: 'flex-start' }}>
                    Send melding →
                  </button>
                </form>
              )}
            </div>

            <div>
              <div className="contact-info-card">
                <h3>Kontaktinformasjon</h3>

                <div className="contact-info-item">
                  <div className="contact-info-icon">📧</div>
                  <div>
                    <div className="contact-info-label">E-post</div>
                    <div className="contact-info-value">kontakt@no-el.no</div>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon">📞</div>
                  <div>
                    <div className="contact-info-label">Telefon</div>
                    <div className="contact-info-value">+47 22 00 00 00</div>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon">📍</div>
                  <div>
                    <div className="contact-info-label">Adresse</div>
                    <div className="contact-info-value">Oslo, Norge</div>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon">🕐</div>
                  <div>
                    <div className="contact-info-label">Åpningstider</div>
                    <div className="contact-info-value">Man–Fre: 08:00–16:00</div>
                  </div>
                </div>
              </div>

              <div className="contact-info-card" style={{ marginTop: 'var(--space-md)' }}>
                <h3>For bedrifter</h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--color-slate)' }}>
                  Ønsker du en skreddersydd løsning for ditt meglerforetak? Vi tilbyr
                  bedriftsavtaler med volumrabatt, administrasjonsverktøy og dedikert support.
                </p>
                <a href="mailto:bedrift@no-el.no" className="btn btn-primary" style={{ marginTop: 'var(--space-sm)', display: 'inline-flex' }}>
                  Kontakt bedriftssalg →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
