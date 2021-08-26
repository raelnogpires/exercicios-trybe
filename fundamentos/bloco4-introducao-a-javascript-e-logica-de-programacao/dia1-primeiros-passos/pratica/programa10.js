var costValue = 15; // valor de custo
var saleValue = 50; // valor de venda

const totalSales = saleValue * 1000;
const totalCost = costValue * 1000;
const valueWithTaxes = (totalCost / 100 * 20) + totalCost; // valor de custo total (com imposto de 20%)
const profit = totalSales - valueWithTaxes; // lucro total (abatendo valor de custo com imposto)

if (costValue < 0 || saleValue < 0) {
    console.log("ERRO!");
} else {
    console.log("You had a profit of $", profit);
}
