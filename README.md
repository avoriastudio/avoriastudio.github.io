# Avoria Studio — Sito vetrina (link-in-bio)

Sito a pagina singola, statico, da collegare alla bio Instagram **@avor.iastudio**.
Tutto in `index.html` (HTML + CSS + un filo di JS, nessuna dipendenza) + cartella `assets/` con le foto.
Tema 100% on-brand: palette, font Playfair/Inter, logo "Arco", golden hour, grana 35mm.

---

## Stato attuale (pronto al deploy)
- ✅ Email impostata: **avoriastudio@outlook.it** (pulsante contatto + footer + schema dati).
- ✅ WhatsApp: non incluso (per scelta).
- ✅ Foto reali integrate: 4 mondi Higgsfield nella sezione "Mondi impossibili" (Soglia · Dune · Oro · Cielo).
- ✅ Immagine social `assets/og.jpg` (anteprima quando il link viene condiviso).
- ✅ CTA "Scrivici in DM" → `https://instagram.com/avor.iastudio` (funzionante).
- ⚠️ Resta solo: **deploy su Netlify** e mettere l'URL nella bio.

> URL provvisorio nei meta: `https://avoria-studio.netlify.app/`. Se al deploy Netlify assegna un altro nome, rinomina il sito in **avoria-studio** dalle impostazioni (Site settings → Change site name), oppure aggiorna `canonical`/`og:url` in `index.html` con l'URL reale.

---

## 🚀 Pubblicarlo su Netlify (1 minuto, €0)
1. Vai su **https://app.netlify.com/drop**
2. Accedi (Google o GitHub) e trascina **l'intera cartella `Avoria - Sito`** nella pagina.
3. Ricevi subito un link tipo `nome-a-caso.netlify.app`.
4. (Consigliato) Site settings → **Change site name** → `avoria-studio` → l'URL diventa `https://avoria-studio.netlify.app`.
5. Incolla l'URL in Instagram → Modifica profilo → **Sito web / Link**.

Alternative (se preferisci): Vercel, oppure GitHub Pages (posso configurarlo io via GitHub se vuoi).

---

## 🖼️ Cambiare o aggiungere foto
Le 4 foto vivono in `assets/` (`soglia.jpg`, `dune.jpg`, `oro.jpg`, `cielo.jpg`), ritagliate **4:5** e ottimizzate per il web.

- **Sostituirne una:** rimpiazza il file in `assets/` mantenendo lo stesso nome (formato 4:5, JPG/WebP).
- **Aggiungerne altre:** in `index.html`, nella sezione `.frames`, duplica un blocco:
  ```html
  <figure class="frame reveal"><img class="frame-img" src="assets/NUOVA.jpg" alt="descrizione"/><span class="scrim"></span><figcaption class="cap">Etichetta</figcaption></figure>
  ```

> Le foto sono i mondi del reel manifesto già approvati (recuperati dallo storico Higgsfield — costo zero). Originali full-res sullo storico Higgsfield; gli scatti ad alta risoluzione e gli altri asset stanno sul Mac.

---

## 📁 Struttura
```
Avoria - Sito/
├─ index.html
├─ assets/
│  ├─ soglia.jpg  dune.jpg  oro.jpg  cielo.jpg   ← i 4 mondi
│  └─ og.jpg                                     ← anteprima social
└─ README.md
```

## Note tecniche
- Mobile-first, responsive (375px → desktop), nessuno scroll orizzontale.
- Accessibile: contrasti AA, focus visibili, `prefers-reduced-motion` rispettato, `alt` su tutte le foto.
- SEO/social: meta description, Open Graph, Twitter Card, favicon Arco.
- **GEO/AEO** (coerente con la go-to-market di Avoria): structured data `Organization` + `FAQPage`,
  così i motori AI (ChatGPT, Perplexity, Google AI Overviews) possono citare lo studio.
- Anteprima locale: apri `index.html` nel browser, oppure `python -m http.server` nella cartella.
