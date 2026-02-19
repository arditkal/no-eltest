import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>No-EL – Norsk e-læring for eiendomsmeglere</title>
        <meta name="description" content="No-EL tilbyr profesjonell e-læring for eiendomsmeglere i Norge. Oppdater kompetansen din med fleksible nettkurs godkjent av Finanstilsynet." />
        <meta property="og:title" content="No-EL – Norsk e-læring for eiendomsmeglere" />
        <meta property="og:description" content="Profesjonell e-læring for eiendomsmeglere. Fleksible nettkurs du kan ta når som helst." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://no-el.no" />
        <link rel="canonical" href="https://no-el.no" />
      </Head>

      {/* Hero */}
      <section className="hero">
        <div className="hero-grid"></div>
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge animate-in">
              <span className="hero-badge-dot"></span>
              Norges ledende e-læringsplattform for meglere
            </div>
            <h1 className="animate-in delay-1">
              Oppdater din <em>megler&shy;kompetanse</em> – helt digitalt
            </h1>
            <p className="hero-text animate-in delay-2">
              Fleksible nettkurs utviklet av bransjeeksperter. Ta etterutdanningen din når det passer deg, fra hvor som helst i Norge.
            </p>
            <div className="hero-actions animate-in delay-3">
              <a href="#kurs" className="btn btn-primary">Utforsk kurs →</a>
              <Link href="/om-oss" className="btn btn-outline">Les mer om oss</Link>
            </div>
            <div className="hero-stats animate-in delay-4">
              <div>
                <div className="hero-stat-num">1 200+</div>
                <div className="hero-stat-label">Aktive brukere</div>
              </div>
              <div>
                <div className="hero-stat-num">15+</div>
                <div className="hero-stat-label">Nettkurs</div>
              </div>
              <div>
                <div className="hero-stat-num">98%</div>
                <div className="hero-stat-label">Bestått-rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section features" id="fordeler">
        <div className="container">
          <div className="features-header">
            <span className="section-label">Hvorfor No-EL</span>
            <h2>Alt du trenger for å holde kompetansen oppdatert</h2>
            <p>Vi gjør etterutdanning enkelt, fleksibelt og relevant for norske eiendomsmeglere.</p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon gold">🎓</div>
              <h3>Godkjente kurs</h3>
              <p>Alle kurs er utviklet i tråd med kravene fra Finanstilsynet for etterutdanning av eiendomsmeglere.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon blue">⏱️</div>
              <h3>Fleksibel læring</h3>
              <p>Ta kursene i ditt eget tempo, når og hvor det passer. Pause og fortsett akkurat der du slapp.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon green">📊</div>
              <h3>Spor fremgangen</h3>
              <p>Oversiktlig dashboard som viser fullførte kurs, sertifikater og kommende frister for etterutdanning.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon blue">🏠</div>
              <h3>Bransjerelevant</h3>
              <p>Innhold laget av erfarne eiendomsmeglere og juridiske eksperter med praktisk bransjeerfaring.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon gold">📱</div>
              <h3>Tilgjengelig overalt</h3>
              <p>Fungerer på mobil, nettbrett og PC. Perfekt for travle meglere som er mye på farten.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon green">✅</div>
              <h3>Sertifikat ved bestått</h3>
              <p>Motta dokumentasjon du kan bruke overfor arbeidsgiver og tilsynsmyndigheter etter fullført kurs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Courses */}
      <section className="section" id="kurs">
        <div className="container">
          <div className="courses-header">
            <span className="section-label">Våre kurs</span>
            <h2>Populære kurs for eiendomsmeglere</h2>
            <p>Oppdatert fagstoff som dekker de viktigste temaene for norske meglere.</p>
          </div>
          <div className="courses-grid">
            <article className="course-card">
              <div className="course-thumb">
                <div className="course-thumb-bg bg-1"></div>
                <div className="course-thumb-pattern"></div>
                <span className="course-badge">Etterutdanning</span>
                <span className="course-thumb-icon">🏛️</span>
              </div>
              <div className="course-body">
                <h3>Eiendomsmeglingsloven</h3>
                <p>Oppdatert gjennomgang av sentrale lovbestemmelser og nyere rettspraksis relevant for meglere.</p>
                <div className="course-meta">
                  <span>12 timer</span>
                  <span>⭐ 4.8</span>
                </div>
              </div>
            </article>
            <article className="course-card">
              <div className="course-thumb">
                <div className="course-thumb-bg bg-2"></div>
                <div className="course-thumb-pattern"></div>
                <span className="course-badge">Populært</span>
                <span className="course-thumb-icon">📋</span>
              </div>
              <div className="course-body">
                <h3>Hvitvaskingsregelverket</h3>
                <p>Lær om megleres plikter etter hvitvaskingsloven, med praktiske eksempler og caseoppgaver.</p>
                <div className="course-meta">
                  <span>8 timer</span>
                  <span>⭐ 4.9</span>
                </div>
              </div>
            </article>
            <article className="course-card">
              <div className="course-thumb">
                <div className="course-thumb-bg bg-3"></div>
                <div className="course-thumb-pattern"></div>
                <span className="course-badge">Nytt kurs</span>
                <span className="course-thumb-icon">🤝</span>
              </div>
              <div className="course-body">
                <h3>Etikk og god meglerskikk</h3>
                <p>Dilemmabasert kurs om etiske problemstillinger i hverdagen som eiendomsmegler.</p>
                <div className="course-meta">
                  <span>6 timer</span>
                  <span>⭐ 4.7</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section testimonials">
        <div className="container">
          <div className="testimonials-header">
            <span className="section-label">Tilbakemeldinger</span>
            <h2>Hva meglerne sier</h2>
            <p>Over 1 200 eiendomsmeglere bruker No-EL for sin etterutdanning.</p>
          </div>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-text">&quot;Endelig en læringsplattform som skjønner hverdagen til en megler. Fleksibelt og relevant innhold som jeg kan ta mellom visningene.&quot;</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">KL</div>
                <div>
                  <div className="testimonial-name">Kristine L.</div>
                  <div className="testimonial-role">Eiendomsmegler, Oslo</div>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-text">&quot;Kvaliteten på kursene er imponerende. Jeg føler meg tryggere i jobben etter å ha gjennomført hvitvaskingskurset.&quot;</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">TB</div>
                <div>
                  <div className="testimonial-name">Thomas B.</div>
                  <div className="testimonial-role">Eiendomsmegler, Bergen</div>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-text">&quot;No-EL gjør det enkelt å holde styr på etterutdanningen. Dashboard-funksjonen er genial for å se hva jeg mangler.&quot;</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">MH</div>
                <div>
                  <div className="testimonial-name">Maria H.</div>
                  <div className="testimonial-role">Eiendomsmegler, Trondheim</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsor */}
      <section className="section" style={{ textAlign: 'center', paddingBottom: '2rem' }}>
        <div className="container">
          <p style={{ fontSize: '0.95rem', color: '#5A7A8F', maxWidth: '600px', margin: '0 auto' }}>
            Denne nettsiden er sponset av{' '}
            <a href="https://meglertipset.no" target="_blank" rel="noopener noreferrer" style={{ color: '#D4922C', textDecoration: 'underline', fontWeight: 600 }}>
              Meglertipset.no
            </a>
            {' '}– som hjelper deg å finne{' '}
            <a href="https://meglertipset.no/eiendomsmegler-oslo" target="_blank" rel="noopener noreferrer" style={{ color: '#D4922C', textDecoration: 'underline' }}>
              eiendomsmegler i Oslo
            </a>
            {' '}og{' '}
            <a href="https://meglertipset.no/eiendomsmegler-bergen" target="_blank" rel="noopener noreferrer" style={{ color: '#D4922C', textDecoration: 'underline' }}>
              eiendomsmegler i Bergen
            </a>.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <h2>Klar til å komme i gang?</h2>
          <p>Registrer deg i dag og få tilgang til alle våre kurs for eiendomsmeglere.</p>
          <a href="#kurs" className="btn btn-dark">Kom i gang nå →</a>
        </div>
      </section>
    </Layout>
  )
}
