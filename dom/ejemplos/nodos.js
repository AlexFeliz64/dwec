"use strict";

//Referencia al campo 1
let campo1 = document.getElementById("campo1");
campo1.value = 10;

let campos = document.getElementsByTagName("input");

for(let c of campos){
    c.value="1";
}

let campos2 = document.getElementsByName("campo2")

for(let b of campos2){
    b.value="2";
}

let campos3 = document.querySelectorAll(".campo3")

for(let b of campos2){
    b.value="3";
}