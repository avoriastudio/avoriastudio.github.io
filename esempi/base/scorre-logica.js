// FILE: base/scorre-logica.js — i conti dello scroll dei siti d'esempio, puri (si provano con node --test). La pagina avanza con lo
// scroll e si ferma quando ci si ferma: niente tempo, solo la posizione.
// È un .js e non un .mjs: molti server mandano il .mjs come file binario, e il browser rifiuta di caricarlo
export const ENTRATA = 0.35;   // un elemento è entrato del tutto quando la sua cima è salita di un terzo abbondante dello schermo
const tra01 = (x) => Math.min(1, Math.max(0, x));

// quanto è entrato un elemento dal basso: 0 sotto lo schermo, 1 quando la cima è salita di ENTRATA × lo schermo. In fondo alla
// pagina tutto ciò che si vede conta come entrato: l'ultima sezione non può salire oltre, e resterebbe mezza spenta
export function entrata(cima, schermo, inFondo) {
  if (inFondo && cima < schermo) return 1;
  return tra01((schermo - cima) / (schermo * ENTRATA));
}

// a che punto è il passaggio di un elemento: 0 quando la cima tocca il fondo dello schermo, 1 quando il fondo esce in alto
export function passaggio(cima, alto, schermo) {
  return tra01((schermo - cima) / (schermo + alto));
}

export function inFondo(scrollY, altezzaPagina, schermo) {
  return scrollY + schermo >= altezzaPagina - 2;
}
