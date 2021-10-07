const correct = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const student = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const compare = (template, answered) => {
  let score = 0.0;
  let errors = 0.0;

  for(let i = 0; i < answered.length; i += 1) {
    if ((answered[i] !== template[i]) && (answered[i] !== 'N.A')) errors += 0.5;
    if (answered[i] === template[i]) score += 1;
  }

  return score - errors;
};

const testScore = (rightAnswer, studentAnswer, callback) => {
  const score = callback(rightAnswer, studentAnswer);
  return `Sua nota foi ${score}.`;
};

console.log(testScore(correct, student, compare));
