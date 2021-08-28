let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
let average;

for (let index = 0; index < numbers.length; index += 1) {
    sum += numbers[index];
}

average = sum / numbers.length;
console.log("A média aritmética é", average);

if (average > 20) {
    console.log("Valor maior que 20");
} else {
    console.log("Valor menor que 20");
}
