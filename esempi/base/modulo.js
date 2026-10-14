// FILE: base/modulo.js — i moduli dei siti d'esempio non mandano niente: method="dialog" li ferma già senza script, e qui si dice
// perché. La riga di stato nasce vuota al caricamento, così il lettore di schermo la annuncia quando si riempie
for (const f of document.querySelectorAll('form[data-esempio]')) {
  const nota = document.createElement('p');
  nota.className = 'nota-esempio';
  nota.setAttribute('role', 'status');
  f.append(nota);
  f.addEventListener('submit', (e) => {
    e.preventDefault();
    nota.textContent = "Sito d'esempio: il modulo non invia niente.";
  });
}
