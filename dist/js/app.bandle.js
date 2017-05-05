/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Vector = function () {
  function Vector(x, y) {
    _classCallCheck(this, Vector);

    this.x = x || 0;
    this.y = y || 0;
  }

  _createClass(Vector, [{
    key: 'set',
    value: function set(v) {
      this.x = v.x;
      this.y = v.y;
    }
  }, {
    key: 'add',
    value: function add(v) {
      this.x += v.x;
      this.y += v.y;
      return this;
    }
  }, {
    key: 'sub',
    value: function sub(v) {
      this.x -= v.x;
      this.y -= v.y;
      return this;
    }
  }, {
    key: 'scale',
    value: function scale(s) {
      if (s === 0) {
        this.x = 0;
        this.y = 0;
      } else {
        this.x *= s;
        this.y *= s;
      }
      return this;
    }
  }, {
    key: 'length',
    value: function length() {
      return Math.sqrt(this.x * this.x + this.y * this.y);
    }
  }, {
    key: 'normalize',
    value: function normalize() {
      var m = Math.sqrt(this.x * this.x + this.y * this.y);
      if (m) {
        this.x /= m;
        this.y /= m;
      }
      return this;
    }
  }, {
    key: 'distanceTo',
    value: function distanceTo(v) {
      var dx = v.x - this.x,
          dy = v.y - this.y;
      return Math.sqrt(dx * dx + dy * dy);
    }
  }, {
    key: 'toString',
    value: function toString() {
      return '(x:' + this.x + ', y:' + this.y + ')';
    }
  }]);

  return Vector;
}();

// Particle


var Particle = function (_Vector) {
  _inherits(Particle, _Vector);

  function Particle(x, y, radius) {
    _classCallCheck(this, Particle);

    var _this = _possibleConstructorReturn(this, (Particle.__proto__ || Object.getPrototypeOf(Particle)).call(this, x, y));

    _this.radius = radius || 4;
    _this._latest = new Vector();
    _this._speed = new Vector();
    return _this;
  }

  _createClass(Particle, [{
    key: 'addSpeed',
    value: function addSpeed(d) {
      // console.log(this._speed);
      this._speed = this._speed.add(d);
    }
  }, {
    key: 'invert',
    value: function invert() {
      this._speed = new Vector(-this._speed.x, -this._speed.y);
    }
  }, {
    key: 'update',
    value: function update() {
      var speedLength = this._speed.length();
      var maxSpeed = 8;
      var acceleration = .95;
      if (speedLength > maxSpeed) this._speed.normalize().scale(maxSpeed);
      if (speedLength > 0) {
        this._speed = new Vector(this._speed.x * acceleration, this._speed.y * acceleration);
      }
      this._latest = new Vector(this.x, this.y);
      this.add(this._speed);
    }
  }, {
    key: 'watchTo',
    value: function watchTo(v) {
      var distance = this.distanceTo(v);
      if (distance < 120) {
        var newSpeed = new Vector(this.x - v.x, this.y - v.y);
        this.addSpeed(newSpeed);
      }
    }
  }, {
    key: '_draw',
    value: function _draw(ctx) {
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
  }]);

  return Particle;
}(Vector);

var ArcBorder = function (_Vector2) {
  _inherits(ArcBorder, _Vector2);

  function ArcBorder(x, y, r) {
    _classCallCheck(this, ArcBorder);

    var _this2 = _possibleConstructorReturn(this, (ArcBorder.__proto__ || Object.getPrototypeOf(ArcBorder)).call(this, x, y));

    _this2.radius = r || 100;
    return _this2;
  }

  _createClass(ArcBorder, [{
    key: 'getStartPosition',
    value: function getStartPosition() {
      return {
        x: this.x + Math.cos(0) * this.radius,
        y: this.y + Math.sin(0) * this.radius
      };
    }
  }, {
    key: 'getStartVector',
    value: function getStartVector() {
      return new Vector(this.getStartPosition().x - this.x, this.getStartPosition().y - this.y);
    }
  }, {
    key: 'getBallvector',
    value: function getBallvector(b) {
      return new Vector(b.x - this.x, b.y - this.y);
    }
  }, {
    key: 'makeBorderFor',
    value: function makeBorderFor(v) {
      var arcV = this.getStartVector();
      var ballV = this.getBallvector(v);

      var arcLength = Math.floor(arcV.length());
      var ballLength = Math.floor(ballV.length()) + v.radius * 5;
      if (ballLength > arcLength) {
        v.set(v._latest);
      }
    }
  }, {
    key: '_draw',
    value: function _draw(ctx) {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
      ctx.fillStyle = '#dc9f91';
      ctx.fill();
      ctx.lineWidth = 5;
      ctx.strokeStyle = '#003300';
      ctx.stroke();
    }
  }]);

  return ArcBorder;
}(Vector);

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

var mouseVector = void 0;
var arc = new ArcBorder(canvas.width / 2, canvas.height / 2, canvas.width / 2.5);
var ball = new Particle(canvas.width / 2, canvas.height / 2, 5);

//Events Listener
canvas.addEventListener("mousemove", mouseMoveHandler, false);

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (typeof canvas == "undefined") {
    console.log(mouseVector);
    return;
  }

  if (typeof mouseVector !== "undefined") {
    ball.watchTo(mouseVector);
  }

  arc.makeBorderFor(ball);

  arc._draw(ctx);
  ball._draw(ctx);
  ball.update();
}
setInterval(draw, 10);

/***/ })
/******/ ]);