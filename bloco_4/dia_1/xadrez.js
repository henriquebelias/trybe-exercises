let piece = 'Bishop';
let namePiece = piece.toLowerCase();


switch (namePiece) {
  case 'king':
    console.log('vertical, horizontal, diagonal');
    break;
  case 'queen':
    console.log('vertical, horizontal, diagonal');
    break;
  case 'rook':
    console.log('vertical, horizontal');
    break;
  case 'bishop':
    console.log('diagonal');
    break;
  case 'knights':
    console.log('l shape');
    break;
  case 'pawn':
    console.log('verlical');
    break;
  default:
    console.log('invalid piece');
}
