let numbers = [2, 3, 5, 7, 10, 1];

function biggerNumber(whole) {
	let maxValue = 0;
	let number = 0; 

	for (let index = 0; index < numbers.length; index += 1) {
		number = numbers[index];
		maxValue = Math.max(maxValue, number);
	}

	console.log(maxValue);
}

biggerNumber(numbers);
