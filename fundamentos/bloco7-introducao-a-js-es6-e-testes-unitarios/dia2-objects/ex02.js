const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const addKeyAndValue = (object, keyName, value) => {
  object[keyName] = value;
}

addKeyAndValue(lesson2, 'turno', 'noite');

const listObjectKeys = (object) => Object.keys(object);

listObjectKeys(lesson3); // [ 'materia', 'numeroEstudantes', 'professor', 'turno' ]

const objectLength = (object) => Object.keys(object).length;

objectLength(lesson1); // 4

const listObjectValues = (object) => Object.values(object);

listObjectValues(lesson2); // [ 'História', 20, 'Carlos', 'noite' ]

const allLessons = {
  lesson1: {},
  lesson2: {},
  lesson3: {},
}

Object.assign(allLessons['lesson1'], lesson1);
Object.assign(allLessons['lesson2'], lesson2);
Object.assign(allLessons['lesson3'], lesson3);

// const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});

// console.log(allLessons);

const numberOfStudents = (object) => {
  let students = 0;
  const lessonsObject = Object.keys(object);
  for (i in lessonsObject) {
    students += object[lessonsObject[i]].numeroEstudantes;
  }
  return students;
}

// numberOfStudents(allLessons)

const getValueByNumber = (objKey, position) => Object.values(objKey)[position];

// console.log(getValueByNumber(lesson1, 0));

const verifyPair = (object, keyName, value) => {
  const keyValueArray = Object.entries(object);
  let result;
  for (let i = 0; i < keyValueArray.length; i += 1) {
    if (keyValueArray[i].includes(keyName) && keyValueArray[i].includes(value)) {
      result = true;
    } else {
      result = false;
    }
  }
  return result;
}

// console.log(verifyPair(lesson3, 'turno', 'noite'));
