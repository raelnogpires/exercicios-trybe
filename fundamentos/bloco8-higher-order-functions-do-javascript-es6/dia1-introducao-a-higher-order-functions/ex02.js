const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'),
    id2: callback('Luiza Drumond'),
    id3: callback('Carla Paiva'),
  }

  return employees;
};

const generateEmail = (fullName) => {
   const split = fullName.toLowerCase().split(' ').join('_');
  const info = {
    name: fullName,
    email: `${split}@trybe.com`,
  }

  return info;
};

console.log(newEmployees(generateEmail));
