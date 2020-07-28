import {GameSequence} from "./GameSequence.js";

const inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById('console__input');
  const outputElement: HTMLTextAreaElement = <HTMLTextAreaElement>document.getElementById('console__output');

  let game = new GameSequence(inputElement, outputElement);
//game.initialize().then(() => {
  game.initializeState().then(() => {
    game.main();
  });
//})
