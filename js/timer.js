function atualizaContador() {
  const timerEl = document.getElementById("timer");
  const tituloEl = document.getElementById("contador-titulo");
  const agora = new Date();
  const final = new Date("2025-11-22T00:00:00");
  let diff = final - agora;

  if (diff <= 0) {
    if (tituloEl) tituloEl.style.display = "none";
    timerEl.innerHTML = "Bora marchar pelo direito de plantar!";
    timerEl.style.color = "green";
    timerEl.style.border = "2px solid black";
    timerEl.style.padding = "10px";
    timerEl.style.borderRadius = "8px";
    return;
  }

  let s = Math.floor(diff / 1000) % 60;
  let m = Math.floor(diff / 60000) % 60;
  let h = Math.floor(diff / 3600000) % 24;
  let d = Math.floor(diff / 86400000);

  // Aqui uma versão mais simples: mostra só dias, horas, minutos, segundos.
  timerEl.innerHTML = 
    d + " dias, " +
    String(h).padStart(2,"0") + ":" +
    String(m).padStart(2,"0") + ":" +
    String(s).padStart(2,"0");

  setTimeout(atualizaContador, 1000);
}

atualizaContador();
