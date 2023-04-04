$numeroJugadores = document.querySelector('#numeroJugadores') 
$numeroPartidas = document.querySelector('#numeroPartidas') 

function actualizarNumeros() {
  const jugadores = Math.floor(Math.random() * 10000) + 10000;
  const partidas = Math.floor(Math.random() * 10000) + 21000;

  $numeroJugadores.innerHTML = jugadores;
  $numeroPartidas.innerHTML = partidas;
}

setInterval(actualizarNumeros, 1000);