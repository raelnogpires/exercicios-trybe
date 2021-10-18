const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

const [greeting, printGreeting] = saudacoes;

// saudacoes[1](saudacoes[0]); // Olá

printGreeting(greeting);

// Produza o mesmo resultado acima, porém utilizando array destructuring