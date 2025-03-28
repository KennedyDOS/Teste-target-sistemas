const isFibonacci = (num) =>{
    let a = 0, b = 1, temp;

    while (b < num) {
        temp = a + b;
        a = b;
        b = temp;
    }

    return b === num || num === 0;
}

let numero = 21;

if (isFibonacci(numero)) {
    console.log(`${numero} pertence à sequência de Fibonacci.`);
} else {
    console.log(`${numero} não pertence à sequência de Fibonacci.`);
}
