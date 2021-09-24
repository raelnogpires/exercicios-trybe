const antonio = 'Antônio foi no banheiro e não sabemos o que aconteceu';

const splitPhrase = (phrase) => phrase.split(' ');

function biggerWord (splitPhrase) {
  let bigger = [];
  for (let i = 0; i < splitPhrase.length; i += 1) {
    let currentWord = splitPhrase[i];
    (currentWord.length > bigger.length) ? bigger = currentWord : null;
    }
  console.log(bigger);
}

biggerWord(splitPhrase(antonio));



// function biggerWord (splitPhrase) {
//   let bigger = [];
//   for (let i = 0; i < splitPhrase.length; i += 1) {
//     let currentWord = splitPhrase[i];
//     if (currentWord.length > bigger.length) {
//       bigger = currentWord;
//     }
//   }
//   console.log(bigger);
// }

// (currentWord.length > bigger.length) ? bigger = currentWord;



// function splitPhrase (phrase) {
//   const splited = phrase.split(' ');
//   console.log(splited);
// }

// splitPhrase('Antônio foi no banheiro e não sabemos o que aconteceu');
