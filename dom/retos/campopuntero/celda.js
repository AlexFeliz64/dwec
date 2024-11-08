window.addEventListener("load",() => {
    const input = document.getElementById('campo');
    input.addEventListener('blur', salir);
    input.addEventListener('mouseover', entrar);
  });

function salir(e){
    setTimeout(() => {e.target.classList.add('red');}, 1000);
}

function entrar(e){
    e.target.classList.remove('red');
}