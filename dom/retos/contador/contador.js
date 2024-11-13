let contador = 0;
window.addEventListener("load",() => {
const contadorElemento = document.getElementById('contador');
const sumar = document.getElementById('btnrestar');
const restar = document.getElementById('btnsumar');

sumar.addEventListener('click', () => {
  contador--;
  actualizarContador();
});

restar.addEventListener('click', () => {
  contador++;
  actualizarContador();
});

function actualizarContador() {
  contadorElemento.innerText = contador;
}
});