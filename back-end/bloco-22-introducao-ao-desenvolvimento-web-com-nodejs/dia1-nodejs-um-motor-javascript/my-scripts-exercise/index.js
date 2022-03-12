const { questionInt } = require('readline-sync');

const scripts = [
  { name: 'IMC Calculator', script: './imc.js' },
  { name: 'Average Speed Calculator', script: './velocidade.js' },
  { name: 'Guess What Number Game', script: './sorteio.js' }
];

let numberedScripts = scripts.map((s, i) => `${i + 1} - ${s.name}`);

numberedScripts.unshift('Escolha um número para executar seu script: ');

numberedScripts = numberedScripts.join('\n');

const scriptNumber = questionInt(numberedScripts) - 1;

const runningScript = scripts[scriptNumber];

if (!scriptNumber) console.log('Número inválido.');

require(runningScript.script);
