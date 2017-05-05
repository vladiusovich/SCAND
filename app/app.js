class Vector {
  constructor(x, y) {
    this.x = x || 0;
    this.y = y || 0;
  }

	set(v) {
		this.x = v.x;
		this.y = v.y;
	}

 	add(v) {
        this.x += v.x;
        this.y += v.y;
        return this;
    }

  sub(v) {
        this.x -= v.x;
        this.y -= v.y;
        return this;
    }

  scale(s) {
    if(s === 0) {
      this.x = 0;
      this.y = 0;
    } else {
      this.x *= s;
      this.y *= s;
    }
        return this;
    }

	length() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }

  normalize() {
      var m = Math.sqrt(this.x * this.x + this.y * this.y);
      if (m) {
          this.x /= m;
          this.y /= m;
      }
      return this;   }

  distanceTo(v) {
        var dx = v.x - this.x,
            dy = v.y - this.y;
        return Math.sqrt(dx * dx + dy * dy);
    }

  toString() {
        return '(x:' + this.x + ', y:' + this.y + ')';
    }

}

 // Particle
class Particle extends Vector {
	constructor(x, y, radius) {
		super(x, y);
		this.radius = radius || 4;
		this._latest = new Vector();
    this._speed  = new Vector();
	}

	addSpeed(d) {
		// console.log(this._speed);
		this._speed = this._speed.add(d);
   }

	invert() {
		this._speed = new Vector(-this._speed.x, -this._speed.y);
	}

	update() {
    let speedLength = this._speed.length();
    let maxSpeed = 8;
    let acceleration = .95;
        if (speedLength > maxSpeed) this._speed.normalize().scale(maxSpeed);
				if (speedLength > 0) {
					this._speed = new Vector(this._speed.x * acceleration, this._speed.y * acceleration);
				}
        this._latest = new Vector(this.x, this.y);
        this.add(this._speed);
    }

	watchTo(v) {
		var distance = this.distanceTo(v);
		if(distance < 120) {
			let newSpeed = new Vector(this.x - v.x, this.y - v.y);
			this.addSpeed(newSpeed);
		}
	}

	 _draw(ctx) {
        var grd, r;

        ctx.save();
        grd = ctx.createRadialGradient(this.x, this.y, this.radius, this.x, this.y, this.radius * 5);
        grd.addColorStop(0, '#7ab7bd');
        grd.addColorStop(1, '#4d9ba1');
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius * 5, 0, Math.PI * 2, false);
        ctx.fillStyle = grd;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = grd;
        ctx.fill();
        ctx.restore();
    }
}

class ArcBorder extends Vector {
	constructor(x, y, r){
		super(x, y);
		this.radius = r || 100;
	}

	getStartPosition() {
    return {
      x: this.x + Math.cos(0) * this.radius,
      y: this.y + Math.sin(0) * this.radius
    }
	}

	getStartVector() {
		return new Vector(this.getStartPosition().x - this.x, this.getStartPosition().y - this.y);
	}

	getBallvector(b) {
		return new Vector(b.x - this.x, b.y - this.y);
	}

	makeBorderFor(v) {
		let arcV = this.getStartVector();
		let ballV = this.getBallvector(v);

		let arcLength = Math.floor(arcV.length());
		let ballLength = Math.floor(ballV.length()) + v.radius * 5;
		if(ballLength  > arcLength) {
			v.set(v._latest);
	}

	}

	_draw(ctx) {
		ctx.beginPath();
		ctx.arc(this.x,  this.y,  this.radius, 0, 2 * Math.PI, false);
		ctx.fillStyle = '#dc9f91';
		ctx.fill();
  	ctx.lineWidth = 5;
  	ctx.strokeStyle = '#003300';
		ctx.stroke();
	}
}


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
let arc = new ArcBorder(canvas.width/2, canvas.height/2, canvas.width/2.5);
let ball = new Particle(canvas.width/2, canvas.height/2, 5);

//Events Listener
canvas.addEventListener("mousemove", mouseMoveHandler, false);


function draw() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);

  if(typeof canvas == "undefined") {
    console.log(mouseVector);
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
