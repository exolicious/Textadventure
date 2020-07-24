import { GameSequence } from "./GameSequence.js";
const inputElement = document.getElementById('console__input');
const outputElement = document.getElementById('console__output');
let currentGame = new GameSequence(inputElement, outputElement);
//game.initialize().then(() => {
currentGame.initializeState().then(() => {
    currentGame.main();
});
//})
//# sourceMappingURL=main.js.map