import {GameSequence} from "./GameSequence.js";

const inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById('console__input');
const outputElement: HTMLTextAreaElement = <HTMLTextAreaElement>document.getElementById('console__output');

let currentGame = new GameSequence(inputElement, outputElement);
//game.initialize().then(() => {
currentGame.initializeState().then(() => {
  currentGame.main();
});
//})
