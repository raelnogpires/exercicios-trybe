let numbers = [5, 9, 3, 19, 70, 8, 83, 1, 35, 27];
let minValue = Number.POSITIVE_INFINITY;

for (const value of numbers) {
    minValue = Math.min(minValue, value)
}

console.log(minValue)

//for (let index = 0; index < numbers.length; index += 1) {
//    number = numbers[index];
//    minValue = Math.min(minValue, number)
//}
//console.log(minValue);
