let numbers = [2, 4, 6, 7, 10, 0, -3];

function smallerNumber() {
  let minValue = 0;

  for (const value of numbers) {
    minValue = Math.min(minValue, value);
  }

  console.log("The smallest value is " + minValue);
}

smallerNumber(numbers);
