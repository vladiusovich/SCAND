export default class Vector {
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


// module.exports = Vector;
