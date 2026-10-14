// FILE: base/scorre.js — accende il movimento dei siti d'esempio: a ogni scroll scrive --e (entrata) e --p (passaggio) sugli elementi
// [data-scorre]. Col movimento ridotto non fa niente; senza script la pagina resta quella ferma e leggibile (base.css)
import { entrata, passaggio, inFondo } from './scorre-logica.js';

const radice = document.documentElement;
const elementi = [...document.querySelectorAll('[data-scorre]')];
let chiesto = false;

function aggiorna() {
  chiesto = false;
  const schermo = innerHeight;
  const fondo = inFondo(scrollY, radice.scrollHeight, schermo);
  for (const el of elementi) {
    const r = el.getBoundingClientRect();
    el.style.setProperty('--e', entrata(r.top, schermo, fondo).toFixed(3));
    el.style.setProperty('--p', passaggio(r.top, r.height, schermo).toFixed(3));
  }
}
const chiedi = () => { if (!chiesto) { chiesto = true; requestAnimationFrame(aggiorna); } };

if (!matchMedia('(prefers-reduced-motion: reduce)').matches) {
  aggiorna();
  radice.classList.add('scorre-attivo');
  addEventListener('scroll', chiedi, { passive: true });
  addEventListener('resize', chiedi);
}
