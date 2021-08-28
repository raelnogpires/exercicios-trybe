let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

function findOddNumbers(value) {
    if (value % 2 == 1) 
    return value;
}

let oddNumbers = numbers.filter(findOddNumbers);

if (oddNumbers.length > 0) {
    console.log(oddNumbers);
} else {
    console.log("No odd value find.");
}
