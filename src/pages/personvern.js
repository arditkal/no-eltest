import Head from 'next/head'
import Layout from '../components/Layout'

export default function Personvern() {
  return (
    <Layout>
      <Head>
        <title>Personvernerklæring – No-EL | Norsk e-læring for eiendomsmeglere</title>
        <meta name="description" content="Les No-ELs personvernerklæring. Vi tar personvernet ditt på alvor og behandler dine data i samsvar med GDPR." />
        <meta property="og:title" content="Personvernerklæring – No-EL" />
        <link rel="canonical" href="https://no-el.no/personvern" />
      </Head>

      <header className="page-header">
        <div className="container">
          <span className="section-label" style={{ color: 'var(--color-accent-warm)' }}>Juridisk</span>
          <h1>Personvernerklæring</h1>
          <p>Sist oppdatert: Februar 2026</p>
        </div>
      </header>

      <section className="page-content">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2>1. Innledning</h2>
          <p>
            Denne personvernerklæringen beskriver hvordan No-EL (heretter &quot;vi&quot;, &quot;oss&quot; eller &quot;vår&quot;)
            samler inn, bruker, lagrer og beskytter personopplysninger når du bruker vår
            e-læringsplattform på no-el.no. Vi behandler personopplysninger i samsvar med den
            norske personopplysningsloven og EUs personvernforordning (GDPR).
          </p>

          <h2>2. Behandlingsansvarlig</h2>
          <p>
            No-EL er behandlingsansvarlig for de personopplysningene som samles inn gjennom
            våre tjenester. For spørsmål om vår behandling av personopplysninger, kontakt oss
            på <a href="mailto:personvern@no-el.no" style={{ color: 'var(--color-accent-deep)', textDecoration: 'underline' }}>personvern@no-el.no</a>.
          </p>

          <h2>3. Hvilke personopplysninger samler vi inn?</h2>
          <p>Vi kan samle inn følgende kategorier av personopplysninger:</p>
          <ul>
            <li><strong>Kontaktopplysninger:</strong> Navn, e-postadresse, telefonnummer og adresse som du oppgir ved registrering.</li>
            <li><strong>Brukerkontoinformasjon:</strong> Brukernavn, passord (kryptert) og profilinnstillinger.</li>
            <li><strong>Kursdata:</strong> Informasjon om kurs du har meldt deg på, fremgang, testresultater og sertifikater.</li>
            <li><strong>Betalingsinformasjon:</strong> Fakturainformasjon og betalingshistorikk. Kortopplysninger behandles av vår betalingsleverandør og lagres ikke hos oss.</li>
            <li><strong>Teknisk informasjon:</strong> IP-adresse, nettlesertype, enhetsinformasjon og bruksmønstre via informasjonskapsler (cookies).</li>
            <li><strong>Kommunikasjon:</strong> Henvendelser du sender oss via kontaktskjema, e-post eller telefon.</li>
          </ul>

          <h2>4. Formål og rettslig grunnlag</h2>
          <p>Vi behandler personopplysninger for følgende formål:</p>
          <ul>
            <li><strong>Levering av tjenester</strong> (rettslig grunnlag: avtale) – For å opprette og administrere din brukerkonto, gi tilgang til kurs, og utstede sertifikater.</li>
            <li><strong>Kommunikasjon</strong> (rettslig grunnlag: avtale/berettiget interesse) – For å svare på henvendelser og sende relevant informasjon om tjenestene.</li>
            <li><strong>Forbedring av tjenestene</strong> (rettslig grunnlag: berettiget interesse) – For å analysere bruksmønstre og forbedre brukeropplevelsen.</li>
            <li><strong>Markedsføring</strong> (rettslig grunnlag: samtykke) – For å sende nyhetsbrev og informasjon om nye kurs, kun dersom du har gitt samtykke.</li>
            <li><strong>Juridiske forpliktelser</strong> (rettslig grunnlag: lov) – For å oppfylle regnskapsloven og annen lovgivning.</li>
          </ul>

          <h2>5. Deling av personopplysninger</h2>
          <p>
            Vi deler ikke personopplysninger med tredjeparter for markedsføringsformål.
            Personopplysninger kan deles med:
          </p>
          <ul>
            <li>Betalingsleverandører for behandling av betalinger.</li>
            <li>Hostingleverandører som lagrer data på våre vegne (innenfor EØS).</li>
            <li>Offentlige myndigheter dersom vi er pålagt dette ved lov.</li>
          </ul>
          <p>
            Alle tredjeparter som behandler personopplysninger på våre vegne er bundet av
            databehandleravtaler i tråd med GDPR.
          </p>

          <h2>6. Informasjonskapsler (cookies)</h2>
          <p>
            Vi bruker informasjonskapsler for å forbedre brukeropplevelsen. Ved ditt første besøk
            vil du bli bedt om å samtykke til bruk av cookies. Du kan når som helst endre dine
            cookie-preferanser i nettleseren din. Vi bruker:
          </p>
          <ul>
            <li><strong>Nødvendige cookies:</strong> Påkrevd for at plattformen skal fungere korrekt.</li>
            <li><strong>Analytiske cookies:</strong> Hjelper oss å forstå hvordan brukere navigerer på nettstedet.</li>
            <li><strong>Funksjonelle cookies:</strong> Husker dine preferanser og innstillinger.</li>
          </ul>

          <h2>7. Lagring og sikkerhet</h2>
          <p>
            Personopplysninger lagres så lenge det er nødvendig for å oppfylle formålet med
            behandlingen, eller så lenge det er påkrevd ved lov. Kursdata og sertifikater lagres
            i minimum fem år etter siste kursgjennomføring. Vi benytter bransjestandarder for
            kryptering og sikkerhet for å beskytte dine data.
          </p>

          <h2>8. Dine rettigheter</h2>
          <p>
            I henhold til GDPR har du følgende rettigheter:
          </p>
          <ul>
            <li><strong>Innsyn:</strong> Du kan be om innsyn i hvilke personopplysninger vi har registrert om deg.</li>
            <li><strong>Retting:</strong> Du kan be om å få uriktige opplysninger rettet.</li>
            <li><strong>Sletting:</strong> Du kan i visse tilfeller be om at opplysninger slettes.</li>
            <li><strong>Begrensning:</strong> Du kan be om at behandlingen begrenses.</li>
            <li><strong>Dataportabilitet:</strong> Du kan be om å få utlevert dine data i et maskinlesbart format.</li>
            <li><strong>Protest:</strong> Du kan protestere mot behandling basert på berettiget interesse.</li>
            <li><strong>Tilbaketrekking av samtykke:</strong> Du kan når som helst trekke tilbake samtykke du har gitt.</li>
          </ul>
          <p>
            For å utøve dine rettigheter, kontakt oss på{' '}
            <a href="mailto:personvern@no-el.no" style={{ color: 'var(--color-accent-deep)', textDecoration: 'underline' }}>personvern@no-el.no</a>.
          </p>

          <h2>9. Klage til tilsynsmyndighet</h2>
          <p>
            Dersom du mener at vår behandling av personopplysninger ikke er i samsvar med
            personvernregelverket, har du rett til å klage til Datatilsynet. Mer informasjon
            finnes på{' '}
            <a href="https://www.datatilsynet.no" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-accent-deep)', textDecoration: 'underline' }}>datatilsynet.no</a>.
          </p>

          <h2>10. Endringer</h2>
          <p>
            Vi forbeholder oss retten til å oppdatere denne personvernerklæringen. Vesentlige
            endringer vil bli varslet via e-post eller på nettsiden. Vi anbefaler at du jevnlig
            leser gjennom denne erklæringen.
          </p>

          <h2>11. Kontakt</h2>
          <p>
            Har du spørsmål om vår behandling av personopplysninger, ta kontakt med oss:
          </p>
          <p>
            <strong>No-EL</strong><br />
            E-post:{' '}
            <a href="mailto:personvern@no-el.no" style={{ color: 'var(--color-accent-deep)', textDecoration: 'underline' }}>personvern@no-el.no</a><br />
            Adresse: Oslo, Norge
          </p>
        </div>
      </section>
    </Layout>
  )
}
