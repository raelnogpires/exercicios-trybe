var piece = "rook";

switch (piece.toUpperCase()){
    case "PAWN":
        console.log("Diagonals.");
    break;
    case "BISHOP":
        console.log("Diagonals.");
    break;
    case "KNIGHT":
        console.log("L.");
    break;
    case "ROOK":
        console.log("Straigth line.");
    break;
    case "QUEEN":
        console.log("Has peculiar movements.");
    break;
    case "KING":
        console.log("1 square per play in any direction.");
    break;
    default:
        console.log("ERROR, invalid piece.");
}
