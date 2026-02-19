import Head from 'next/head'
import Layout from '../components/Layout'

export default function OmOss() {
  return (
    <Layout>
      <Head>
        <title>Om oss – No-EL | Norsk e-læring for eiendomsmeglere</title>
        <meta name="description" content="No-EL er Norges ledende plattform for e-læring innen eiendomsmegling. Lær mer om hvem vi er og hva vi gjør." />
        <meta property="og:title" content="Om oss – No-EL" />
        <meta property="og:description" content="Norges ledende e-læringsplattform for eiendomsmeglere. Les om vår historie og misjon." />
        <link rel="canonical" href="https://no-el.no/om-oss" />
      </Head>

      <header className="page-header">
        <div className="container">
          <span className="section-label" style={{ color: 'var(--color-accent-warm)' }}>Om No-EL</span>
          <h1>Vi gjør etterutdanning enklere for meglere</h1>
          <p>No-EL ble grunnlagt med en enkel idé: eiendomsmeglere fortjener tilgang til oppdatert, relevant og fleksibel kompetanseutvikling.</p>
        </div>
      </header>

      <section className="page-content">
        <div className="container">
          <h2>Vår historie</h2>
          <p>
            No-EL ble etablert som et svar på et økende behov for fleksibel etterutdanning
            blant norske eiendomsmeglere. Med stadig strengere regulatoriske krav og en
            hektisk arbeidshverdag, så vi behovet for en moderne læringsplattform tilpasset
            bransjens virkelighet.
          </p>
          <p>
            Vår plattform er utviklet i tett samarbeid med erfarne eiendomsmeglere, jurister
            og pedagoger for å sikre at innholdet er både faglig sterkt og praktisk relevant.
          </p>

          <h2>Vår misjon</h2>
          <p>
            Vi ønsker å heve kompetansenivået i eiendomsmeglerbransjen ved å gjøre
            etterutdanning tilgjengelig, engasjerende og relevant. Vår overbevisning er at
            bedre utdannede meglere gir tryggere bolighandel for alle.
          </p>

          <div className="about-values">
            <div className="value-card">
              <h3>🎯 Kvalitet først</h3>
              <p>Alt innhold utvikles av fageksperter og kvalitetssikres grundig før publisering. Vi setter aldri kvantitet over kvalitet.</p>
            </div>
            <div className="value-card">
              <h3>🔄 Alltid oppdatert</h3>
              <p>Lovendringer og ny rettspraksis integreres løpende i kursene våre, slik at du alltid lærer det siste.</p>
            </div>
            <div className="value-card">
              <h3>💡 Praksisnær læring</h3>
              <p>Våre kurs er basert på virkelige caser og situasjoner fra meglerhverdagen, ikke bare teori.</p>
            </div>
            <div className="value-card">
              <h3>🤝 For bransjen, av bransjen</h3>
              <p>Teamet bak No-EL har bred erfaring fra eiendomsmegling, juss og utdanning i Norge.</p>
            </div>
          </div>

          <h2>Hvem er vi for?</h2>
          <p>
            No-EL er designet for alle som jobber med eiendomsmegling i Norge – fra nyutdannede
            meglere som trenger å bygge kompetanse, til erfarne meglere som skal oppfylle kravene
            til etterutdanning. Vi hjelper også meglerforetak med å administrere opplæringen for
            hele teamet.
          </p>

          <h2>Slik fungerer det</h2>
          <p>
            Registrer deg på plattformen, velg kursene du trenger, og start med en gang. Du kan
            ta kursene i ditt eget tempo, og du får tilgang til innholdet fra alle enheter – mobil,
            nettbrett eller datamaskin. Etter bestått eksamen mottar du et sertifikat som
            dokumenterer din kompetanse.
          </p>
        </div>
      </section>
    </Layout>
  )
}
