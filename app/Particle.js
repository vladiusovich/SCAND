import Vector from './Vector';

// Particle
export default class Particle extends Vector {
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
