module.exports = class Field {
  constructor (arr,character) {
    this.arr = arr;
    this.hat = '^';
    this.hole = 'O';
    this.fieldCharacter = '░';
    this.character = character;
    // Set the "home" position of your character before the game starts
    this.arr[0][0] = character.avatar;
  }

  // print () {
  //   console.log(this.arr.join('\n'));
  // }

  print() {
    const displayString = this.arr.map(row => {
        return row.join('');
      }).join('\n');
    console.log(displayString);
  }


  
generateField(height, width, percentage = 0.1) {
    const field = new Array(height).fill(0).map(el => new Array(width));
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const prob = Math.random();
        field[y][x] = prob > percentage ? this.fieldCharacter : this.hole;
      }
    }
    // Set character.avatar location
    field[0][0] = this.character.avatar;
    // Set the "hat" location
    const hatLocation = {
      x: Math.floor(Math.random() * width),
      y: Math.floor(Math.random() * height)
    };
    // Make sure the "hat" is not at the starting point
    while (hatLocation.x === 0 && hatLocation.y === 0) {
      hatLocation.x = Math.floor(Math.random() * width);
      hatLocation.y = Math.floor(Math.random() * height);
    }
    field[hatLocation.y][hatLocation.x] = this.hat;
    this.arr = field;
  }
}