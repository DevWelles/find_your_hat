const prompt = require('prompt-sync')({sigint: true});

module.exports = class Questions {
  constructor (character) {
    this.character = character
  }

  movement() {
    const answer = prompt('Which way? ').toUpperCase();
    switch (answer) {
      case 'W':
        this.character.locationY -= 1;
        break;
      case 'S':
        this.character.locationY += 1;
        break;
      case 'A':
        this.character.locationX -= 1;
        break;
      case 'D':
        this.character.locationX += 1;
        break;
      default:
        console.log('Enter W for up, S for down, A for left or D for right.');
        this.movement();
        break;
    }
  }
}