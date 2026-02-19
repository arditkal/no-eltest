# No-EL – Norsk e-læring for eiendomsmeglere

Nettside for [no-el.no](https://no-el.no) – Norges e-læringsplattform for eiendomsmeglere.

## Sider

- **Hjem** (`/`) – Landingsside med hero, fordeler, kurs og testimonials
- **Om oss** (`/om-oss`) – Historien, misjonen og verdiene
- **Kontakt** (`/kontakt`) – Kontaktskjema og kontaktinfo
- **Personvern** (`/personvern`) – Full GDPR-kompatibel personvernerklæring

## Kom i gang lokalt

```bash
npm install
npm run dev
```

Åpne [http://localhost:3000](http://localhost:3000).

## Deploy til Vercel

### Alternativ 1: Via Vercel Dashboard
1. Push prosjektet til GitHub/GitLab
2. Gå til [vercel.com](https://vercel.com)
3. Klikk "New Project" → Importer repo
4. Vercel oppdager Next.js automatisk → Klikk "Deploy"
5. Koble til domenet `no-el.no` under Settings → Domains

### Alternativ 2: Via CLI
```bash
npm i -g vercel
vercel
```

### Koble til domene
1. I Vercel Dashboard → Settings → Domains
2. Legg til `no-el.no`
3. Oppdater DNS hos domeneregistrar:
   - Type: `A` → `76.76.21.21`
   - Type: `CNAME` → `cname.vercel-dns.com` (for www)

## Teknologi

- **Next.js 14** – React-rammeverk med SSR
- **Vanilla CSS** – Ingen ekstra avhengigheter
- **Google Fonts** – DM Serif Display + Plus Jakarta Sans

## SEO

- Semantisk HTML med riktig heading-hierarki
- Open Graph meta-tagger på alle sider
- `robots.txt` og `sitemap.xml` inkludert
- `lang="nb"` for norsk bokmål
- Canonical URLs på alle sider
