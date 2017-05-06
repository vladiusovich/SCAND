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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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

// module.exports = Vector;


exports.default = Vector;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Vector2 = __webpack_require__(0);

var _Vector3 = _interopRequireDefault(_Vector2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ArcBorder = function (_Vector) {
	_inherits(ArcBorder, _Vector);

	function ArcBorder(x, y, r) {
		_classCallCheck(this, ArcBorder);

		var _this = _possibleConstructorReturn(this, (ArcBorder.__proto__ || Object.getPrototypeOf(ArcBorder)).call(this, x, y));

		_this.radius = r || 100;
		return _this;
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
			return new _Vector3.default(this.getStartPosition().x - this.x, this.getStartPosition().y - this.y);
		}
	}, {
		key: 'getBallvector',
		value: function getBallvector(b) {
			return new _Vector3.default(b.x - this.x, b.y - this.y);
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
}(_Vector3.default);

exports.default = ArcBorder;

/***/ })
/******/ ]);