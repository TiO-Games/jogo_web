
// Criar a cena 0
const index = new Phaser.Scene("index");
var abertura; 

index.preload = function () {

  this.load.audio("abertura", "./sounds/music.mp3");
};

index.create = function () {
    //Som de abertura
    abertura = this.sound.add("abertura");
    abertura.play();
    abertura.setLoop(true);
};

index.update = function () {};

export { index };