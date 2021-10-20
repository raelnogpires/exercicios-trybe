const getNationality = ({ firstName, nationality = 'Brazilian' }) => `${firstName} is ${nationality}`;
// Alteracao no `nationality = 'Brazilian'`

const person = {
  firstName: 'João',
  lastName: 'Jr II',
};

const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};

console.log(getNationality(otherPerson)); // Ivan is Russian
console.log(getNationality(person));
