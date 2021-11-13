const Field = require('./field');
const Questions = require('./questions');
const Character = require('./character');
const Game = require('./gamePlay');

const myCharacter = new Character('*')
const myField = new Field([
  ['*', '░', 'O'],
  ['░', 'O', '░'],
  ['░', '^', '░'],
],myCharacter);
const questions = new Questions(myCharacter);
const myGame = new Game(myField, myCharacter, questions)

myField.generateField(10,10,0.2) // you can generate field like this or harcode it directly when invokign a new instance of field
// like we did it above on line 7


myGame.runGame()