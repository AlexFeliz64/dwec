function suma(a, b) {
    if (b == undefined) {
        return a;
    } else {
        return a + b;
    }
}

console.log(suma());
console.log(suma(1));
console.log(suma(1,2));
