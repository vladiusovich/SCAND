import Vector from './Vector';
import Particle from './Particle';
import ArcBorder from './ArcBorder';

//Events
function mouseMoveHandler(e) {
  var relativeX = e.clientX - canvas.offsetLeft;
	var relativeY = e.clientY - canvas.offsetTop;
	mouseVector = new Particle(relativeX, relativeY);
}


//Init
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;

let mouseVector;

let ball = new Particle(canvas.width/2, canvas.height/2, 5);
let arc = new ArcBorder(canvas.width/2, canvas.height/2, canvas.width/2.5);

//Events Listener
canvas.addEventListener("mousemove", mouseMoveHandler, false);


function draw() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);

  if(typeof canvas == "undefined") {
    return;
  }

  if(typeof mouseVector !== "undefined") {
    ball.watchTo(mouseVector);
  }

	arc.makeBorderFor(ball);

	arc._draw(ctx);
	ball._draw(ctx);
	ball.update();
}

setInterval(draw, 10);
