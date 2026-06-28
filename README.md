# Avoria Studio — Sito vetrina (link-in-bio)

Sito a pagina singola, statico, per la bio Instagram **@avor.iastudio**.
Tema 100% on-brand: palette, font Playfair/Inter, logo "Arco", golden hour, grana 35mm.

## 🌐 LIVE
**https://avoriastudio.github.io/** — pubblicato con **GitHub Pages** da questo repo.
Da incollare in: Instagram → Modifica profilo → **Sito web / Link**.

## Contenuto
- ✅ Email: **avoriastudio@outlook.it** · CTA "Scrivici in DM" → instagram.com/avor.iastudio
- ✅ 4 foto reali Higgsfield nella sezione "Mondi impossibili" (Soglia · Dune · Oro · Cielo) + `assets/og.jpg`
- ✅ Mobile-first, accessibile (AA), Open Graph, structured data GEO/AEO (Organization + FAQPage)

## ✍️ Aggiornare il sito
È ospitato da GitHub Pages: ogni modifica va **committata e pushata** su `main` → si ripubblica da sola in ~1 minuto.
```bash
# dentro questa cartella
git add -A && git commit -m "aggiorna sito" && git push
```
- **Cambiare una foto:** sostituisci il file in `assets/` (stesso nome, 4:5) → commit → push.
- **Aggiungere una foto:** in `index.html`, sezione `.frames`, duplica un blocco:
  ```html
  <figure class="frame reveal"><img class="frame-img" src="assets/NUOVA.jpg" alt="descrizione"/><span class="scrim"></span><figcaption class="cap">Etichetta</figcaption></figure>
  ```
- **Dominio personalizzato** (es. avoriastudio.com, in futuro): Settings → Pages → Custom domain.

## 📁 Struttura
```
index.html
.nojekyll                ← serve i file statici senza Jekyll
assets/
  soglia.jpg dune.jpg oro.jpg cielo.jpg   ← i 4 mondi (dal reel, recuperati da Higgsfield)
  og.jpg                                  ← anteprima social
README.md
```

> Le foto sono i mondi del reel manifesto già approvati. Originali full-res nello storico Higgsfield; gli altri asset stanno sul Mac.
