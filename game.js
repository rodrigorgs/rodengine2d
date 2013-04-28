// Inicialização
var canvas = document.getElementById("mycanvas");
var ctx = canvas.getContext('2d');

ASSET_MANAGER.loadAll([
	"8framewalk1.gif", 
	"disco.png", 
	"wood-horizontal.png"], start);

var gameManager = new GameManager(canvas, true);
console.log("start");

var player1 = new Player();
player1.setPos({x: 40, y: 20});

var player2 = new Player();
player2.setPos({x: 80, y: 30});

var player3 = new Player();
player3.setPos({x: 120, y: 40});
player3.setVel({x: 0, y: 1});

var bomb = new Bomb();
bomb.setPos({x: 320, y: 200});

var ball1 = new Ball();
ball1.setPos({x: 30, y: 10});
ball1.setVel({x: 200, y: 0});

var ball2 = new Ball();
ball2.setPos({x: 120, y: 10});

var wall = new Wall();
wall.setPos({x: 300, y: 200});

gameManager.addEntity(player1);
gameManager.addEntity(player2);
gameManager.addEntity(player3);
gameManager.addEntity(bomb);
gameManager.addEntity(ball1);
gameManager.addEntity(ball2);
gameManager.addEntity(wall);

function start() {
	setInterval(gameLoop, 1000.0 / 60);
}

function gameLoop() {
	gameManager.update();
	gameManager.draw();
}