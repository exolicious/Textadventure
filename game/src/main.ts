import {MainMenuSequence} from "./classes/sequences/MainMenuSequence.js";

  let game: MainMenuSequence = MainMenuSequence.getInstance();
//game.initialize().then(() => {
  game.main();
//})
