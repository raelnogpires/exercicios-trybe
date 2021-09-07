let infoMargarida = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald'
};

let infoPatinhas = {
  personagem: 'Tio Patinhas',
  origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
  nota: 'O último MacPatinhas',
  recorrente: 'Sim'
};

console.log('Bem vinda, ' + infoMargarida.personagem);

infoMargarida['recorrente'] = 'Sim';

console.log(infoMargarida);

for (let key in infoMargarida) {
  console.log(key);
}

for (let key in infoMargarida, infoPatinhas) {
  console.log(infoMargarida[key] + " e " + infoPatinhas[key]);
}

if (infoMargarida.recorrente == "Sim" && infoPatinhas.recorrente == "Sim") {
  console.log("Ambos recorrentes");
}
