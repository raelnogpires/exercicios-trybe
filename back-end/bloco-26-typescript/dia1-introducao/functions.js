"use strict";
exports.__esModule = true;
exports.rectangle = exports.square = exports.triangle = exports.sumArray = exports.add = exports.personAge = exports.greeter = void 0;
function greeter(name) {
    return "Ol\u00E1, ".concat(name, "! Como voc\u00EA est\u00E1?");
}
exports.greeter = greeter;
function personAge(name, years, birthday) {
    if (!birthday) {
        return "Ol\u00E1 ".concat(name, ", voc\u00EA tem ").concat(years, " anos!");
    }
    return "Ol\u00E1 ".concat(name, ", voc\u00EA tem ").concat(years, " anos. Espere, hoje \u00E9 seu anivers\u00E1rio? Parab\u00E9ns! :)");
}
exports.personAge = personAge;
function add(x, y) {
    return x + y;
}
exports.add = add;
function sumArray(numbers) {
    return numbers.reduce(add, 0);
}
exports.sumArray = sumArray;
function triangle(b, h) {
    return (b * h) / 2;
}
exports.triangle = triangle;
function square(side) {
    return Math.pow(side, 2);
}
exports.square = square;
function rectangle(b, h) {
    return b * h;
}
exports.rectangle = rectangle;
