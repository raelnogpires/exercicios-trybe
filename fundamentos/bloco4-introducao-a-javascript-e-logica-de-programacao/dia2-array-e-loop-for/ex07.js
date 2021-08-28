let numbers = [5, 9, 3, 19, 70, 8, 83, 2, 35, 27];
let maxValue = 0;
let number = 0; 

for (let index = 0; index < numbers.length; index += 1) {
    number = numbers[index]; // número atual que o loop está passando.
    maxValue = Math.max(maxValue, number) // compara o maior número com o número atual e atribui o maior.
}

console.log(maxValue);
