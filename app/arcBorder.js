import Vector from './Vector';
export default class ArcBorder extends Vector {
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
