namespace TextAdventure {
  const inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById('console__input');
  const outputElement: HTMLTextAreaElement = <HTMLTextAreaElement>document.getElementById('console__output');

  let game = new Game(inputElement, outputElement);
  game.main();
}