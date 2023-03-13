const inputNumber = parseInt(
  prompt(
    "Digite um número para verificar se ele pertence à sequência de Fibonacci:"
  )
);

let a = 0;
let b = 1;
let c;

while (b < inputNumber) {
  c = a + b;
  a = b;
  b = c;
}

if (b === inputNumber) {
  alert(`${inputNumber} pertence à sequência de Fibonacci.`);
} else {
  alert(`${inputNumber} não pertence à sequência de Fibonacci.`);
}
