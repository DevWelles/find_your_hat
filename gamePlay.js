module.exports = class Game {
  constructor(field,character,questions) {
    this.field = field;
    this.character = character;
    this.questions = questions;
  }

  runGame() {
    let playing = true;
    while (playing) {
      this.field.print();
      this.questions.movement();
      if (!this.isInBounds()) {
        console.log('Out of bounds instruction!');
        playing = false;
        break;
      } else if (this.isHole()) {
        console.log('Sorry, you fell down a hole!');
        playing = false;
        break;
      } else if (this.isHat()) {
        console.log('Congrats, you found your hat!');
        playing = false;
        break;
      }
      // Update the current location on the map
      this.field.arr[this.character.locationY][this.character.locationX] = this.character.avatar;
    }
  }

  isInBounds() {
    return (
      this.character.locationY >= 0 &&
      this.character.locationX >= 0 &&
      this.character.locationY < this.field.arr.length &&
      this.character.locationX < this.field.arr[0].length
    );
  }

  isHat() {
    return this.field.arr[this.character.locationY][this.character.locationX] === this.field.hat;
  }

  isHole() {
    return this.field.arr[this.character.locationY][this.character.locationX] === this.field.hole;
  }

}