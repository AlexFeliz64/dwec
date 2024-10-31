"use stric";

window.addEventListener("load",() => {
    for (let i = 1; i <= 20; i++) {
        const input = document.createElement('input');
        input.id = `campo${i}`;
        input.value = `${i+i}`;
        document.body.appendChild(input); 
        input.addEventListener('click', clickCelda);
    }
});

function clickCelda(e){
    const campoId = e.target.id;
    const valor = e.target.value; 
    console.log(`Campo ${campoId}: ${valor}`);
}
