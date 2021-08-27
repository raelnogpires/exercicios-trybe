var salarioBruto = 3000;
var descontoInss;
var descontoIr;
var salarioBase;
var salarioLiquido;

if (salarioBruto <= 1556.94) { // INSS
    descontoInss = (salarioBruto / 100) * 8;
} else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
    descontoInss = (salarioBruto / 100) * 9;
} else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
    descontoInss = (salarioBruto / 100) * 11;
} else {
    descontoInss = 570.88;
}

salarioBase = salarioBruto - descontoInss;

if (salarioBase <= 1903.98) { // Imposto de Renda - IR
    console.log("Isento de IR.");
} else if (salarioBase >= 1903.99 && salarioBase <= 2826.65) {
    descontoIr = (salarioBase / 100) * 7.5 - 142.80;
} else if (salarioBase >= 2826.66 && salarioBase <= 3751.05) {
    descontoIr = (salarioBase / 100) * 15 - 354.80;
} else if (salarioBase >= 3751.06 && salarioBase <= 4.664,68) {
    descontoIr = (salarioBase / 100) * 22.5 - 636.13;
} else { //if (salarioBruto > 4.664,68) {
    descontoIr = (salarioBase / 100) * 27.5 - 869.36;
}

salarioLiquido = salarioBase - descontoIr;

console.log("Seu salário líquido é de R$", salarioLiquido);
