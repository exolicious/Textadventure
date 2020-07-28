import { GameSequence } from "./GameSequence.js";
const inputElement = document.getElementById('console__input');
const outputElement = document.getElementById('console__output');
let game = new GameSequence(inputElement, outputElement);
//game.initialize().then(() => {
game.initializeState().then(() => {
    game.main();
});
//})
//# sourceMappingURL=main.js.map