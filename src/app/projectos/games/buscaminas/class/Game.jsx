"use client";
export class Game {
  board;
  width;
  boom = this.getBoom();
  boombsLocation = [];
  // cellsClicked = [];
  cases = [
    [1, 0],
    [1, 1],
    [1, -1],
    [-1, 0],
    [-1, 1],
    [-1, -1],
    [0, 1],
    [0, -1],
  ];

  constructor(width) {
    this.width = width;
    this.board = Array.from({ length: width }, () =>
      Array.from({ length: width }, () => 0)
    );
    this.genBooms();
  }

  genBooms() {
    let booms = [];
    for (let i = this.width; i > 0; i--) {
      let y = Math.floor(Math.random() * this.width);
      let x = Math.floor(Math.random() * this.width);
      if (booms.includes(`${y}-${x}`)) {
        i++;
        continue;
      }
      booms.push(`${y}-${x}`);
      this.boombsLocation.push(`${y}-${x}`);
      this.board[y][x] = this.boom;
      this.addNaerbyBooms(y, x);
    }
  }

  getBoom() {
    if (new Date().getMonth() == 9) return "🎃";
    return "💣";
  }
  getBoomsLocation() {
    return this.boombsLocation;
  }
  getNeabyCeros(y, x) {
    let ceros = [];
    for (let i = 0; i < this.cases.length; i++) {
      let newY = y + this.cases[i][0];
      let newX = x + this.cases[i][1];

      if (
        newY >= 0 &&
        newY < this.board.length &&
        newX >= 0 &&
        newX < this.board[0].length
      ) {
        let sting = `${newY}-${newX}`;
        if (this.board[newY][newX] !== undefined) {
          ceros.push(sting);
        }
      }
    }
    ceros.push(`${y}-${x}`);
    return ceros;
  }

  // getNeabyCeros(y, x) {
  //   let ceros = [];
  //   for (let i = 0; i < this.cases.length; i++) {
  //     let sting = `${y + this.cases[i][0]}-${x + this.cases[i][1]}`;
  //     if (
  //       this.board[y + this.cases[i][0]][x + this.cases[i][1]] !== undefined
  //     ) {
  //       ceros.push(sting);
  //     }
  //   }
  //   ceros.push(`${y}-${x}`);
  //   return ceros;
  // }
  addNaerbyBooms(y, x) {
    for (let i = 0; i < this.cases.length; i++) {
      let newY = y + this.cases[i][0];
      let newX = x + this.cases[i][1];
      if (
        this.board[newY]?.[newX] != this.boom &&
        this.board[newY]?.[newX] != undefined
      ) {
        this.board[newY][newX] += 1;
      }
    }
  }
}
