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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _passages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./passages */ "./src/passages.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ "./src/util.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var Game =
/*#__PURE__*/
function () {
  function Game() {
    var _this = this;

    _classCallCheck(this, Game);

    _defineProperty(this, "startRace", function () {
      _this.startTime = new Date();
    });

    this.passage = "";
    this.userInput = "";
    this.remainingPassage = "";
    this.currentFragment = "";
    this.keystrokes = 0;
    this.startTime = "";
    this.finishTime = "";
  }

  _createClass(Game, [{
    key: "receiveUserInput",
    value: function receiveUserInput(e) {
      this.keystrokes++;
      this.currentFragment = e.target.value;
      this.userInput.concat(this.currentFragment) === this.passage.slice(0, this.userInput.length + this.currentFragment.length) && this.updateUserInput();
    }
  }, {
    key: "updateUserInput",
    value: function updateUserInput() {
      //if (this.currentFragment[this.currentFragment.length - 1] === " " || this.userInput.length + this.currentFragment.length === this.passage.length) {
      this.userInput += this.currentFragment;
      this.remainingPassage = this.passage.slice(this.userInput.length);
      document.getElementById("user-input").value = ""; //}
    }
  }, {
    key: "getPassage",
    value: function getPassage(passage) {
      this.passage = passage || Object(_passages__WEBPACK_IMPORTED_MODULE_0__["randomPassage"])();
      this.remainingPassage = this.passage;
    }
  }, {
    key: "reset",
    value: function reset() {
      this.userInput = "";
      this.keystrokes = 0;
      this.startTime = "";
      this.finishTime = "";
    }
  }, {
    key: "checkStatus",
    value: function checkStatus() {
      this.passage === this.userInput && this.finishRace();
    }
  }, {
    key: "finishRace",
    value: function finishRace() {
      this.finishTime = new Date();
      var totalTime = Object(_util__WEBPACK_IMPORTED_MODULE_1__["calculateElapsedTime"])(this.startTime, this.finishTime);
      console.log("Your WPM is ".concat(Object(_util__WEBPACK_IMPORTED_MODULE_1__["calculateWPM"])(totalTime, this.passage)));
      console.log("Elapsed time: ".concat(totalTime, "s"));
      console.log("Accuracy: ".concat(Object(_util__WEBPACK_IMPORTED_MODULE_1__["calculateAccuracy"])(this.keystrokes, this.passage), "%"));
    }
  }, {
    key: "isFinished",
    value: function isFinished() {
      return this.passage === this.userInput;
    }
  }]);

  return Game;
}();

Game.DIM_X = 500;
Game.DIM_Y = 150;
/* harmony default export */ __webpack_exports__["default"] = (Game);

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var GameView =
/*#__PURE__*/
function () {
  function GameView(game, ctx) {
    var _this = this;

    _classCallCheck(this, GameView);

    _defineProperty(this, "inputEventHandler", function (e) {
      _this.game.receiveUserInput(e);

      _this.userInput.value = "";

      _this.displayPassageLetters();

      _this.game.isFinished() && _this.completeRace();
    });

    _defineProperty(this, "handleKey", function (action) {
      return function (e) {
        e.code === 'Tab' && e.preventDefault();
        var key = document.querySelector(".keyboard-key[data-key=".concat(e.code, "]"));
        key && key.classList[action]('pressed');
      };
    });

    _defineProperty(this, "beginCountdown", function (time) {
      var timer = setInterval(function () {
        console.log(time);
        time--;

        if (time <= 0) {
          clearInterval(timer);
          _this.userInput.disabled = false;

          _this.userInput.focus();

          _this.game.startRace();

          console.log("GO");
        }
      }, 1000);
    });

    _defineProperty(this, "start", function (e) {
      e.preventDefault();

      _this.reset();

      _this.bindInputListeners();

      _this.game.getPassage();

      _this.displayPassageLetters();

      _this.beginCountdown(3);
    });

    this.ctx = ctx;
    this.game = game;
    this.container = document.getElementById('passage-container');
    this.userInput = document.getElementById('user-input');
    this.startBtn = document.getElementById('start');
    this.startBtn.addEventListener('click', this.start);
    this.container.addEventListener('click', function () {
      return _this.userInput.focus();
    });
    this.userInput.disabled = true;
  }

  _createClass(GameView, [{
    key: "displayPassage",
    value: function displayPassage() {
      this.container.innerHTML = "\n      <span id=\"completed-passage\">\n        ".concat(this.game.userInput, "\n      </span>\n      <span id=\"remaining-passage\">\n        ").concat(this.game.remainingPassage, "\n      </span>\n    ");
    }
  }, {
    key: "displayPassageLetters",
    value: function displayPassageLetters() {
      var completed = Array.from(this.game.userInput, function (c) {
        return "<span class=\"letter completed\">".concat(c, "</span>");
      }).join('');
      var remaining = Array.from(this.game.remainingPassage, function (c, i) {
        return "<span class=\"letter remaining ".concat(i === 0 ? "cursor" : "", "\">").concat(c, "</span>");
      }).join('');
      this.container.innerHTML = "".concat(completed).concat(remaining);
    }
  }, {
    key: "reset",
    value: function reset() {
      while (this.container.firstChild) {
        this.container.removeChild(this.container.firstChild);
      }

      this.game.reset();
    }
  }, {
    key: "bindInputListeners",
    value: function bindInputListeners() {
      this.userInput.addEventListener('input', this.inputEventHandler);
      this.userInput.addEventListener('keydown', this.handleKey('add'));
      this.userInput.addEventListener('keyup', this.handleKey('remove'));
    }
  }, {
    key: "completeRace",
    value: function completeRace() {
      this.game.finishRace();
      this.userInput.disabled = true;
    }
  }]);

  return GameView;
}();

/* harmony default export */ __webpack_exports__["default"] = (GameView);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./src/game.js");
/* harmony import */ var _game_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game_view */ "./src/game_view.js");


document.addEventListener("DOMContentLoaded", function () {
  var canvas = document.getElementById("canvas");
  canvas.width = _game__WEBPACK_IMPORTED_MODULE_0__["default"].DIM_X;
  canvas.height = _game__WEBPACK_IMPORTED_MODULE_0__["default"].DIM_Y;
  var ctx = canvas.getContext("2d");
  ctx.fillStyle = 'lightgrey';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  var game = new _game__WEBPACK_IMPORTED_MODULE_0__["default"]();
  new _game_view__WEBPACK_IMPORTED_MODULE_1__["default"](game, ctx);
});

/***/ }),

/***/ "./src/passages.js":
/*!*************************!*\
  !*** ./src/passages.js ***!
  \*************************/
/*! exports provided: randomPassage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randomPassage", function() { return randomPassage; });
var PASSAGES = ["From this point on, we will be using the command line and pry to test our code, navigate our computer, and perform many other amazing tasks. This means that we are not using repl.it anymore to test our code. Getting comfortable with these tools early will be very important in becoming an efficient developer. After learning them, these tools will make just about any operation you can think of faster than using a GUI and mouse.", "Provided for you here are some Sudoku puzzles in .txt format. Download these to a folder on your computer. In the same folder, we're going to write a Ruby program to read in the puzzle files and let us solve them!", "The path of the righteous man is beset on all sides by the inequities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of darkness, for he is truly his brother's keeper and the finder of lost children. And I will strike down upon thee with great vengeance and furious anger those who attempt to poison and destroy my brothers. And you will know my name is the Lord when I lay my vengeance upon you.", "I really don't understand the whole mechanical keyboard fad. I imagine these people who obsess over these and talk down about \"browns vs red\" to be like the wine snobs of the PC world. Anyone care to explain why a mechanical keyboard offers any real benefit other than \"it makes clicky noises.\"", "Oh noes, the clever TAs at App Academy made this \"super useful\" library, but it keeps throwing ugly error messages that are hard to understand. Let's revamp the library to throw more descriptive errors and prevent incorrect usage.", "The quick brown fox jumps over the lazy dog."];
var randomPassage = function randomPassage() {
  var randIndex = Math.floor(Math.random() * PASSAGES.length);
  return PASSAGES[randIndex];
};

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! exports provided: calculateElapsedTime, calculateWPM, calculateAccuracy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateElapsedTime", function() { return calculateElapsedTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateWPM", function() { return calculateWPM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateAccuracy", function() { return calculateAccuracy; });
var calculateElapsedTime = function calculateElapsedTime(start, end) {
  return Math.ceil((end - start) / 1000);
};
var calculateWPM = function calculateWPM(time, passage) {
  return Math.ceil(passage.length / 5 / (time / 60));
};
var calculateAccuracy = function calculateAccuracy(keystrokes, passage) {
  var length = passage.length;
  return 100 - parseFloat((keystrokes - length) * 0.75 / length).toFixed(3) * 100;
};

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map