function chess(piece) {
  let namePiece = piece.toLowerCase();
  switch (namePiece) {
    case 'king':
      return('vertical, horizontal, diagonal');
      break;
    case 'queen':
      return('vertical, horizontal, diagonal');
      break;
    case 'rook':
      return('vertical, horizontal');
      break;
    case 'bishop':
      return('diagonal');
      break;
    case 'knight':
      return('l shape');
      break;
    case 'pawn':
      return('verlical');
      break;
    default:
      return('invalid piece');
  }
}

console.log(chess('king'));
console.log(chess('queen'));
console.log(chess('rook'));
console.log(chess('bishop'));
console.log(chess('knight'));
console.log(chess('pawn'));
