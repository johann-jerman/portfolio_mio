export const winCondition = (game) => {
  let draw = [];
  for (let i = 0; i < game.length; i++) {
    let one = game[i][0];
    let two = game[i][1];
    let three = game[i][2];
    //checheamos las filas
    if (one == "X" && two == "X" && three == "X") return "X";
    if (one == "O" && two == "O" && three == "O") return "O";

    for (let j = 0; j < game[i].length; j++) {
      if (game[i][j] == "X" || game[i][j] == "O") {
        draw.push(true);
        if (draw.length == 9) return "Empate";
      }
    }

    if (draw.length == 9) return "Tie";
  }
  //chequemos las columnas
  //columna izquierda
  if (game[0][0] == "X" && game[1][0] == "X" && game[2][0] == "X") return "X";
  if (game[0][0] == "O" && game[1][0] == "O" && game[2][0] == "O") return "O";
  //columna central
  if (game[0][1] == "X" && game[1][1] == "X" && game[2][1] == "X") return "X";
  if (game[0][1] == "O" && game[1][1] == "O" && game[2][1] == "O") return "O";
  //columna derecha
  if (game[0][2] == "X" && game[1][2] == "X" && game[2][2] == "X") return "X";
  if (game[0][2] == "O" && game[1][2] == "O" && game[2][2] == "O") return "O";

  //chequamos las diagonales
  if (game[0][0] == "X" && game[1][1] == "X" && game[2][2] == "X") return "X";
  if (game[0][0] == "O" && game[1][1] == "O" && game[2][2] == "O") return "O";
  if (game[0][2] == "X" && game[1][1] == "X" && game[2][0] == "X") return "X";
  if (game[0][2] == "O" && game[1][1] == "O" && game[2][0] == "O") return "O";
  // draw = [];
  return "0";
};
