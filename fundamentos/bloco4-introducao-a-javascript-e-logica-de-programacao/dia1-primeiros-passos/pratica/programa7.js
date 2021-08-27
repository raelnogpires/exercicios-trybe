var nota = 102;

if (nota >= 90 && nota <= 100) {
    console.log("Nota A.");
} else if (nota >= 80 && nota <= 89) {
    console.log("Nota B.");
} else if (nota >= 70 && nota <= 79) {
    console.log("Nota C.");
} else if (nota >= 60 && nota <= 69) {
    console.log("Nota D.");
} else if (nota >= 50 && nota <= 59) {
    console.log("Nota E.");
} else if (nota < 50 && nota > 0) {
    console.log("Nota F.");
} else {
    console.log("ERRO, nota invalida.");
}
