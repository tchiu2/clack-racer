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
    this.results = {};
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
      this.userInput += this.currentFragment;
      this.remainingPassage = this.passage.slice(this.userInput.length);
      document.getElementById("user-input").value = "";
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
      this.passage === this.userInput && this.calculateResults();
    }
  }, {
    key: "calculateResults",
    value: function calculateResults() {
      this.finishTime = new Date();
      var totalTime = Object(_util__WEBPACK_IMPORTED_MODULE_1__["calculateElapsedTime"])(this.startTime, this.finishTime);
      this.results = {
        wpm: Object(_util__WEBPACK_IMPORTED_MODULE_1__["calculateWPM"])(totalTime, this.passage),
        time: totalTime,
        accuracy: Object(_util__WEBPACK_IMPORTED_MODULE_1__["calculateAccuracy"])(this.keystrokes, this.passage)
      };
    }
  }, {
    key: "isFinished",
    value: function isFinished() {
      return this.passage === this.userInput;
    }
  }, {
    key: "percentComplete",
    value: function percentComplete() {
      return this.userInput.length / this.passage.length;
    }
  }]);

  return Game;
}();

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
/* harmony import */ var _results__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./results */ "./src/results.js");
/* harmony import */ var _keyboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keyboard */ "./src/keyboard.js");
/* harmony import */ var _racer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./racer */ "./src/racer.js");
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

    _defineProperty(this, "toggleKeyboardDisplay", function (e) {
      var main = document.getElementById('main');
      main.lastElementChild.innerHTML = _this.keyboardShown ? "" : _keyboard__WEBPACK_IMPORTED_MODULE_1__["keyboardHTML"];
      _this.keyboardShown = !_this.keyboardShown;
    });

    _defineProperty(this, "inputEventHandler", function (e) {
      _this.game.receiveUserInput(e);

      _this.userInput.value = "";

      _this.displayPassageLetters();

      _this.racer.update(_this.game.percentComplete());

      _this.racer.render();

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
      _this.drawCountdown(time);

      var timer = setInterval(function () {
        time--;

        _this.drawCountdown(time);

        if (time <= 0) {
          _this.drawCountdown(time);

          clearInterval(timer);
          _this.userInput.disabled = false;

          _this.userInput.focus();

          _this.game.startRace();
        }
      }, 1000);
    });

    _defineProperty(this, "drawCountdown", function (time) {
      var fontSize = _this.ctx.canvas.width * 0.04;

      _this.ctx.clearRect(_this.ctx.canvas.width * 0.5 - fontSize, _this.ctx.canvas.height - fontSize * 1.5, 35, 35);

      _this.ctx.fillStyle = "#eee";

      _this.ctx.fillRect(0, _this.ctx.canvas.height - fontSize * 2, _this.ctx.canvas.width, _this.ctx.canvas.height);

      _this.ctx.fillStyle = "black";
      _this.ctx.font = "".concat(fontSize, "px sans-serif");
      _this.ctx.textBaseline = "top";

      _this.ctx.fillText(time <= 0 ? "Go!" : " ".concat(time, " "), _this.ctx.canvas.width * 0.5 - fontSize, _this.ctx.canvas.height - fontSize * 1.5);
    });

    _defineProperty(this, "start", function (e) {
      e.preventDefault();

      _this.reset();

      _this.bindInputListeners();

      _this.game.getPassage();

      _this.displayPassageLetters();

      _this.displayRacer();

      _this.startBtn.disabled = true;

      _this.beginCountdown(3);
    });

    this.ctx = ctx;
    this.game = game;
    this.keyboardShown = false;
    this.container = document.getElementById('passage-container');
    this.userInput = document.getElementById('user-input');
    this.startBtn = document.getElementById('start');
    this.toggleKeyboardShow = document.getElementById('keyboard-toggle');
    this.timer = document.getElementById('timer');
    this.startBtn.addEventListener('click', this.start);
    this.toggleKeyboardShow.addEventListener('click', this.toggleKeyboardDisplay);
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
    key: "displayRacer",
    value: function displayRacer() {
      this.racer = new _racer__WEBPACK_IMPORTED_MODULE_2__["default"]({
        context: this.ctx,
        width: this.ctx.canvas.width * 0.12,
        height: this.ctx.canvas.height * 0.12 * 2
      });
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

      this.timer.innerHTML = "";
      this.timer.hidden = true;
      this.timer.classList.remove('fade-out');
      this.game.reset();
      this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
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
      this.game.calculateResults();
      this.userInput.disabled = true;
      this.startBtn.disabled = false;
      Object(_results__WEBPACK_IMPORTED_MODULE_0__["showResults"])(this.game.results, this.container);
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
  canvas.height = window.innerHeight * 0.2;
  canvas.width = window.innerWidth * 0.5;
  var ctx = canvas.getContext("2d");
  var game = new _game__WEBPACK_IMPORTED_MODULE_0__["default"]();
  new _game_view__WEBPACK_IMPORTED_MODULE_1__["default"](game, ctx);
});

/***/ }),

/***/ "./src/keyboard.js":
/*!*************************!*\
  !*** ./src/keyboard.js ***!
  \*************************/
/*! exports provided: keyboardHTML */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyboardHTML", function() { return keyboardHTML; });
var keyboardHTML = "\n      <div class=\"keyboard-container\">\n        <svg class=\"keyboard\" viewBox=\"0 0 678 256\">\n          <svg class=\"keyboard-layout\" x=\"26\" y=\"26\">\n            <svg class=\"keyboard-key\" data-key=\"Backquote\" x=\"0\" y=\"0\">\n              <rect class=\"keyboard-button\" x=\"0\" y=\"0\" width=\"40\" height=\"40\"></rect> \n              <text class=\"keyboard-key-multi-label\" x=\"10\" y=\"15\">~</text> \n              <text class=\"keyboard-key-multi-label\" x=\"10\" y=\"30\">`</text> \n            </svg>\n            <svg class=\"keyboard-key\" data-key=\"Digit1\" x=\"42\" y=\"0\">\n              <rect class=\"keyboard-button\" x=\"0\" y=\"0\" width=\"40\" height=\"40\"></rect> \n              <text class=\"keyboard-key-multi-label\" x=\"10\" y=\"15\">!</text> \n              <text class=\"keyboard-key-multi-label\" x=\"10\" y=\"30\">1</text> \n            </svg>\n            <svg class=\"keyboard-key\" data-key=\"Digit2\" x=\"84\" y=\"0\">\n              <rect class=\"keyboard-button\" x=\"0\" y=\"0\" width=\"40\" height=\"40\"></rect> \n              <text class=\"keyboard-key-multi-label\" x=\"10\" y=\"15\">@</text> \n              <text class=\"keyboard-key-multi-label\" x=\"10\" y=\"30\">2</text> \n            </svg>\n            <svg class=\"keyboard-key\" data-key=\"Digit3\" x=\"126\" y=\"0\">\n              <rect class=\"keyboard-button\" x=\"0\" y=\"0\" width=\"40\" height=\"40\"></rect> \n              <text class=\"keyboard-key-multi-label\" x=\"10\" y=\"15\">#</text> \n              <text class=\"keyboard-key-multi-label\" x=\"10\" y=\"30\">3</text> \n            </svg>\n            <svg class=\"keyboard-key\" data-key=\"Digit4\" x=\"168\" y=\"0\">\n              <rect class=\"keyboard-button\" x=\"0\" y=\"0\" width=\"40\" height=\"40\"></rect> \n              <text class=\"keyboard-key-multi-label\" x=\"10\" y=\"15\">$</text> \n              <text class=\"keyboard-key-multi-label\" x=\"10\" y=\"30\">4</text> \n            </svg>\n            <svg class=\"keyboard-key\" data-key=\"Digit5\" x=\"210\" y=\"0\">\n              <rect class=\"keyboard-button\" x=\"0\" y=\"0\" width=\"40\" height=\"40\"></rect> \n              <text class=\"keyboard-key-multi-label\" x=\"10\" y=\"15\">%</text> \n              <text class=\"keyboard-key-multi-label\" x=\"10\" y=\"30\">5</text> \n            </svg>\n            <svg class=\"keyboard-key\" data-key=\"Digit6\" x=\"252\" y=\"0\">\n              <rect class=\"keyboard-button\" x=\"0\" y=\"0\" width=\"40\" height=\"40\"></rect> \n              <text class=\"keyboard-key-multi-label\" x=\"10\" y=\"15\">^</text> \n              <text class=\"keyboard-key-multi-label\" x=\"10\" y=\"30\">6</text> \n            </svg>\n            <svg class=\"keyboard-key\" data-key=\"Digit7\" x=\"294\" y=\"0\">\n              <rect class=\"keyboard-button\" x=\"0\" y=\"0\" width=\"40\" height=\"40\"></rect> \n              <text class=\"keyboard-key-multi-label\" x=\"10\" y=\"15\">&amp;</text> \n              <text class=\"keyboard-key-multi-label\" x=\"10\" y=\"30\">7</text> \n            </svg>\n            <svg class=\"keyboard-key\" data-key=\"Digit8\" x=\"336\" y=\"0\">\n              <rect class=\"keyboard-button\" x=\"0\" y=\"0\" width=\"40\" height=\"40\"></rect> \n              <text class=\"keyboard-key-multi-label\" x=\"10\" y=\"15\">*</text> \n              <text class=\"keyboard-key-multi-label\" x=\"10\" y=\"30\">8</text> \n            </svg>\n            <svg class=\"keyboard-key\" data-key=\"Digit9\" x=\"378\" y=\"0\">\n              <rect class=\"keyboard-button\" x=\"0\" y=\"0\" width=\"40\" height=\"40\"></rect> \n              <text class=\"keyboard-key-multi-label\" x=\"10\" y=\"15\">(</text> \n              <text class=\"keyboard-key-multi-label\" x=\"10\" y=\"30\">9</text> \n            </svg>\n            <svg class=\"keyboard-key\" data-key=\"Digit0\" x=\"420\" y=\"0\">\n              <rect class=\"keyboard-button\" x=\"0\" y=\"0\" width=\"40\" height=\"40\"></rect> \n              <text class=\"keyboard-key-multi-label\" x=\"10\" y=\"15\">)</text> \n              <text class=\"keyboard-key-multi-label\" x=\"10\" y=\"30\">0</text> \n            </svg>\n            <svg class=\"keyboard-key\" data-key=\"Minus\" x=\"462\" y=\"0\">\n              <rect class=\"keyboard-button\" x=\"0\" y=\"0\" width=\"40\" height=\"40\"></rect> \n              <text class=\"keyboard-key-multi-label\" x=\"10\" y=\"15\">_</text> \n              <text class=\"keyboard-key-multi-label\" x=\"10\" y=\"30\">-</text> \n            </svg>\n            <svg class=\"keyboard-key\" data-key=\"Equal\" x=\"504\" y=\"0\">\n              <rect class=\"keyboard-button\" x=\"0\" y=\"0\" width=\"40\" height=\"40\"></rect> \n              <text class=\"keyboard-key-multi-label\" x=\"10\" y=\"15\">+</text> \n              <text class=\"keyboard-key-multi-label\" x=\"10\" y=\"30\">=</text> \n            </svg>\n            <svg class=\"keyboard-key\" data-key=\"Backspace\" x=\"546\" y=\"0\">\n              <rect class=\"keyboard-button\" x=\"0\" y=\"0\" width=\"80\" height=\"40\"></rect> \n              <text class=\"keyboard-key-mod-label\" x=\"8\" y=\"25\">Backspace</text> \n            </svg>\n            <svg class=\"keyboard-key\" data-key=\"Tab\" x=\"0\" y=\"42\">\n              <rect class=\"keyboard-button\" x=\"0\" y=\"0\" width=\"60\" height=\"40\"></rect> \n              <text class=\"keyboard-key-mod-label\" x=\"18\" y=\"25\">Tab</text> \n            </svg>\n            <svg class=\"keyboard-key\" data-key=\"KeyQ\" x=\"62\" y=\"42\">\n              <rect class=\"keyboard-button\" x=\"0\" y=\"0\" width=\"40\" height=\"40\"></rect> \n              <text class=\"keyboard-key-single-label\" x=\"15\" y=\"25\">Q</text> \n            </svg>\n            <svg class=\"keyboard-key\" data-key=\"KeyW\" x=\"104\" y=\"42\">\n              <rect class=\"keyboard-button\" x=\"0\" y=\"0\" width=\"40\" height=\"40\"></rect> \n              <text class=\"keyboard-key-single-label\" x=\"15\" y=\"25\">W</text> \n            </svg>\n            <svg class=\"keyboard-key\" data-key=\"KeyE\" x=\"146\" y=\"42\">\n              <rect class=\"keyboard-button\" x=\"0\" y=\"0\" width=\"40\" height=\"40\"></rect> \n              <text class=\"keyboard-key-single-label\" x=\"15\" y=\"25\">E</text> \n            </svg>\n            <svg class=\"keyboard-key\" data-key=\"KeyR\" x=\"188\" y=\"42\">\n              <rect class=\"keyboard-button\" x=\"0\" y=\"0\" width=\"40\" height=\"40\"></rect> \n              <text class=\"keyboard-key-single-label\" x=\"15\" y=\"25\">R</text> \n            </svg>\n            <svg class=\"keyboard-key\" data-key=\"KeyT\" x=\"230\" y=\"42\">\n              <rect class=\"keyboard-button\" x=\"0\" y=\"0\" width=\"40\" height=\"40\"></rect> \n              <text class=\"keyboard-key-single-label\" x=\"15\" y=\"25\">T</text> \n            </svg>\n            <svg class=\"keyboard-key\" data-key=\"KeyY\" x=\"272\" y=\"42\">\n              <rect class=\"keyboard-button\" x=\"0\" y=\"0\" width=\"40\" height=\"40\"></rect> \n              <text class=\"keyboard-key-single-label\" x=\"15\" y=\"25\">Y</text> \n            </svg>\n            <svg class=\"keyboard-key\" data-key=\"KeyU\" x=\"314\" y=\"42\">\n              <rect class=\"keyboard-button\" x=\"0\" y=\"0\" width=\"40\" height=\"40\"></rect> \n              <text class=\"keyboard-key-single-label\" x=\"15\" y=\"25\">U</text> \n            </svg>\n            <svg class=\"keyboard-key\" data-key=\"KeyI\" x=\"356\" y=\"42\">\n              <rect class=\"keyboard-button\" x=\"0\" y=\"0\" width=\"40\" height=\"40\"></rect> \n              <text class=\"keyboard-key-single-label\" x=\"15\" y=\"25\">I</text> \n            </svg>\n            <svg class=\"keyboard-key\" data-key=\"KeyO\" x=\"398\" y=\"42\">\n              <rect class=\"keyboard-button\" x=\"0\" y=\"0\" width=\"40\" height=\"40\"></rect> \n              <text class=\"keyboard-key-single-label\" x=\"15\" y=\"25\">O</text> \n            </svg>\n            <svg class=\"keyboard-key\" data-key=\"KeyP\" x=\"440\" y=\"42\">\n              <rect class=\"keyboard-button\" x=\"0\" y=\"0\" width=\"40\" height=\"40\"></rect> \n              <text class=\"keyboard-key-single-label\" x=\"15\" y=\"25\">P</text> \n            </svg>\n            <svg class=\"keyboard-key\" data-key=\"BracketLeft\" x=\"482\" y=\"42\">\n              <rect class=\"keyboard-button\" x=\"0\" y=\"0\" width=\"40\" height=\"40\"></rect> \n              <text class=\"keyboard-key-multi-label\" x=\"10\" y=\"15\">{</text> \n              <text class=\"keyboard-key-multi-label\" x=\"10\" y=\"30\">[</text> \n            </svg>\n            <svg class=\"keyboard-key\" data-key=\"BracketRight\" x=\"524\" y=\"42\">\n              <rect class=\"keyboard-button\" x=\"0\" y=\"0\" width=\"40\" height=\"40\"></rect> \n              <text class=\"keyboard-key-multi-label\" x=\"10\" y=\"15\">}</text> \n              <text class=\"keyboard-key-multi-label\" x=\"10\" y=\"30\">]</text> \n            </svg>\n            <svg class=\"keyboard-key\" data-key=\"Backslash\" x=\"566\" y=\"42\">\n              <rect class=\"keyboard-button\" x=\"0\" y=\"0\" width=\"60\" height=\"40\"></rect> \n              <text class=\"keyboard-key-multi-label\" x=\"15\" y=\"15\">|</text> \n              <text class=\"keyboard-key-multi-label\" x=\"15\" y=\"30\"></text> \n            </svg>\n            <svg class=\"keyboard-key\" data-key=\"CapsLock\" x=\"0\" y=\"84\">\n              <rect class=\"keyboard-button\" x=\"0\" y=\"0\" width=\"70\" height=\"40\"></rect> \n              <text class=\"keyboard-key-mod-label\" x=\"6\" y=\"25\">CapsLock</text> \n            </svg>\n            <svg class=\"keyboard-key\" data-key=\"KeyA\" x=\"72\" y=\"84\">\n              <rect class=\"keyboard-button\" x=\"0\" y=\"0\" width=\"40\" height=\"40\"></rect> \n              <text class=\"keyboard-key-single-label\" x=\"15\" y=\"25\">A</text> \n            </svg>\n            <svg class=\"keyboard-key\" data-key=\"KeyS\" x=\"114\" y=\"84\">\n              <rect class=\"keyboard-button\" x=\"0\" y=\"0\" width=\"40\" height=\"40\"></rect> \n              <text class=\"keyboard-key-single-label\" x=\"15\" y=\"25\">S</text> \n            </svg>\n            <svg class=\"keyboard-key\" data-key=\"KeyD\" x=\"156\" y=\"84\">\n              <rect class=\"keyboard-button\" x=\"0\" y=\"0\" width=\"40\" height=\"40\"></rect> \n              <text class=\"keyboard-key-single-label\" x=\"15\" y=\"25\">D</text> \n            </svg>\n            <svg class=\"keyboard-key\" data-key=\"KeyF\" x=\"198\" y=\"84\">\n              <rect class=\"keyboard-button\" x=\"0\" y=\"0\" width=\"40\" height=\"40\"></rect> \n              <text class=\"keyboard-key-single-label\" x=\"15\" y=\"25\">F</text> \n            </svg>\n            <svg class=\"keyboard-key\" data-key=\"KeyG\" x=\"240\" y=\"84\">\n              <rect class=\"keyboard-button\" x=\"0\" y=\"0\" width=\"40\" height=\"40\"></rect> \n              <text class=\"keyboard-key-single-label\" x=\"15\" y=\"25\">G</text>\n            </svg>\n            <svg class=\"keyboard-key\" data-key=\"KeyH\" x=\"282\" y=\"84\">\n              <rect class=\"keyboard-button\" x=\"0\" y=\"0\" width=\"40\" height=\"40\"></rect> \n              <text class=\"keyboard-key-single-label\" x=\"15\" y=\"25\">H</text> \n            </svg>\n            <svg class=\"keyboard-key\" data-key=\"KeyJ\" x=\"324\" y=\"84\">\n              <rect class=\"keyboard-button\" x=\"0\" y=\"0\" width=\"40\" height=\"40\"></rect> \n              <text class=\"keyboard-key-single-label\" x=\"15\" y=\"25\">J</text> \n            </svg>\n            <svg class=\"keyboard-key\" data-key=\"KeyK\" x=\"366\" y=\"84\">\n              <rect class=\"keyboard-button\" x=\"0\" y=\"0\" width=\"40\" height=\"40\"></rect> \n              <text class=\"keyboard-key-single-label\" x=\"15\" y=\"25\">K</text> \n            </svg>\n            <svg class=\"keyboard-key\" data-key=\"KeyL\" x=\"408\" y=\"84\">\n              <rect class=\"keyboard-button\" x=\"0\" y=\"0\" width=\"40\" height=\"40\"></rect> \n              <text class=\"keyboard-key-single-label\" x=\"15\" y=\"25\">L</text> \n            </svg>\n            <svg class=\"keyboard-key\" data-key=\"Semicolon\" x=\"450\" y=\"84\">\n              <rect class=\"keyboard-button\" x=\"0\" y=\"0\" width=\"40\" height=\"40\"></rect> \n              <text class=\"keyboard-key-multi-label\" x=\"15\" y=\"15\">:</text> \n              <text class=\"keyboard-key-multi-label\" x=\"15\" y=\"30\">;</text> \n            </svg>\n            <svg class=\"keyboard-key\" data-key=\"Quote\" x=\"492\" y=\"84\">\n              <rect class=\"keyboard-button\" x=\"0\" y=\"0\" width=\"40\" height=\"40\"></rect> \n              <text class=\"keyboard-key-multi-label\" x=\"15\" y=\"15\">\"</text> \n              <text class=\"keyboard-key-multi-label\" x=\"15\" y=\"30\">'</text> \n            </svg>\n            <svg class=\"keyboard-key\" data-key=\"Enter\" x=\"534\" y=\"84\">\n              <rect class=\"keyboard-button\" x=\"0\" y=\"0\" width=\"92\" height=\"40\"></rect> \n              <text class=\"keyboard-key-mod-label\" x=\"30\" y=\"25\">Enter</text> \n            </svg>\n            <svg class=\"keyboard-key\" data-key=\"ShiftLeft\" x=\"0\" y=\"126\">\n              <rect class=\"keyboard-button\" x=\"0\" y=\"0\" width=\"84\" height=\"40\"></rect> \n              <text class=\"keyboard-key-mod-label\" x=\"25\" y=\"25\">Shift</text> \n            </svg>\n            <svg class=\"keyboard-key\" data-key=\"KeyZ\" x=\"86\" y=\"126\">\n              <rect class=\"keyboard-button\" x=\"0\" y=\"0\" width=\"40\" height=\"40\"></rect> \n              <text class=\"keyboard-key-single-label\" x=\"15\" y=\"25\">Z</text> \n            </svg>\n            <svg class=\"keyboard-key\" data-key=\"KeyX\" x=\"128\" y=\"126\">\n              <rect class=\"keyboard-button\" x=\"0\" y=\"0\" width=\"40\" height=\"40\"></rect> \n              <text class=\"keyboard-key-single-label\" x=\"15\" y=\"25\">X</text> \n            </svg>\n            <svg class=\"keyboard-key\" data-key=\"KeyC\" x=\"170\" y=\"126\">\n              <rect class=\"keyboard-button\" x=\"0\" y=\"0\" width=\"40\" height=\"40\"></rect> \n              <text class=\"keyboard-key-single-label\" x=\"15\" y=\"25\">C</text> \n            </svg>\n            <svg class=\"keyboard-key\" data-key=\"KeyV\" x=\"212\" y=\"126\">\n              <rect class=\"keyboard-button\" x=\"0\" y=\"0\" width=\"40\" height=\"40\"></rect> \n              <text class=\"keyboard-key-single-label\" x=\"15\" y=\"25\">V</text> \n            </svg>\n            <svg class=\"keyboard-key\" data-key=\"KeyB\" x=\"254\" y=\"126\">\n              <rect class=\"keyboard-button\" x=\"0\" y=\"0\" width=\"40\" height=\"40\"></rect> \n              <text class=\"keyboard-key-single-label\" x=\"15\" y=\"25\">B</text> \n            </svg>\n            <svg class=\"keyboard-key\" data-key=\"KeyN\" x=\"296\" y=\"126\">\n              <rect class=\"keyboard-button\" x=\"0\" y=\"0\" width=\"40\" height=\"40\"></rect> \n              <text class=\"keyboard-key-single-label\" x=\"15\" y=\"25\">N</text> \n            </svg>\n            <svg class=\"keyboard-key\" data-key=\"KeyM\" x=\"338\" y=\"126\">\n              <rect class=\"keyboard-button\" x=\"0\" y=\"0\" width=\"40\" height=\"40\"></rect> \n              <text class=\"keyboard-key-single-label\" x=\"15\" y=\"25\">M</text> \n            </svg>\n            <svg class=\"keyboard-key\" data-key=\"Comma\" x=\"380\" y=\"126\">\n              <rect class=\"keyboard-button\" x=\"0\" y=\"0\" width=\"40\" height=\"40\"></rect> \n              <text class=\"keyboard-key-multi-label\" x=\"15\" y=\"15\">&lt;</text> \n              <text class=\"keyboard-key-multi-label\" x=\"15\" y=\"30\">,</text> \n            </svg>\n            <svg class=\"keyboard-key\" data-key=\"Period\" x=\"422\" y=\"126\">\n              <rect class=\"keyboard-button\" x=\"0\" y=\"0\" width=\"40\" height=\"40\"></rect> \n              <text class=\"keyboard-key-multi-label\" x=\"15\" y=\"15\">&gt;</text> \n              <text class=\"keyboard-key-multi-label\" x=\"15\" y=\"30\">.</text> \n            </svg>\n            <svg class=\"keyboard-key\" data-key=\"Slash\" x=\"464\" y=\"126\">\n              <rect class=\"keyboard-button\" x=\"0\" y=\"0\" width=\"40\" height=\"40\"></rect> \n              <text class=\"keyboard-key-multi-label\" x=\"15\" y=\"15\">?</text> \n              <text class=\"keyboard-key-multi-label\" x=\"15\" y=\"30\">/</text> \n            </svg>\n            <svg class=\"keyboard-key\" data-key=\"ShiftRight\" x=\"506\" y=\"126\">\n              <rect class=\"keyboard-button\" x=\"0\" y=\"0\" width=\"120\" height=\"40\"></rect> \n              <text class=\"keyboard-key-mod-label\" x=\"40\" y=\"25\">Shift</text> \n            </svg>\n            <svg class=\"keyboard-key\" data-key=\"Space\" x=\"156\" y=\"168\">\n              <rect class=\"keyboard-button\" x=\"0\" y=\"0\" width=\"242\" height=\"40\"></rect> \n            </svg>\n          </svg>\n        </svg>\n      </div>\n  ";

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

/***/ "./src/racer.js":
/*!**********************!*\
  !*** ./src/racer.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Racer = function Racer(options) {
  var _this = this;

  _classCallCheck(this, Racer);

  _defineProperty(this, "update", function (position) {
    _this.frameIndex = _this.frameIndex < _this.numberOfFrames - 1 ? _this.frameIndex + 1 : 1;
    _this.position = position;
  });

  _defineProperty(this, "render", function () {
    _this.context.clearRect(_this.position * _this.context.canvas.width * 0.8 + _this.context.canvas.width * 0.05, _this.context.canvas.height * 0.1, _this.width, _this.height);

    _this.context.drawImage(_this.image, _this.frameIndex * 240, 0, 240, 180, _this.position * _this.context.canvas.width * 0.8 + _this.context.canvas.width * 0.05, _this.context.canvas.height * 0.1, _this.width, _this.height);
  });

  var racerImage = new Image();
  racerImage.src = "./images/brown_switch.png";
  racerImage.addEventListener('load', this.render);
  this.context = options.context;
  this.width = options.width;
  this.height = options.height;
  this.image = racerImage;
  this.position = 0;
  this.frameIndex = 0;
  this.numberOfFrames = 9;
};

;
/* harmony default export */ __webpack_exports__["default"] = (Racer);

/***/ }),

/***/ "./src/results.js":
/*!************************!*\
  !*** ./src/results.js ***!
  \************************/
/*! exports provided: showResults */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showResults", function() { return showResults; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./src/util.js");

var showResults = function showResults(results, container) {
  var wpm = results.wpm,
      time = results.time,
      accuracy = results.accuracy;
  container.innerHTML = "\n    <div id=\"results\">\n      <div>Your WPM is <strong>".concat(wpm, "<strong></div>\n      <div>Time: <strong>").concat(Object(_util__WEBPACK_IMPORTED_MODULE_0__["formatTime"])(time), "<strong></div>\n      <div>Accuracy: <strong>").concat(accuracy, "%<strong></div>\n    </div>\n  ");
};

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! exports provided: calculateElapsedTime, calculateWPM, calculateAccuracy, formatTime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateElapsedTime", function() { return calculateElapsedTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateWPM", function() { return calculateWPM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateAccuracy", function() { return calculateAccuracy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatTime", function() { return formatTime; });
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
var formatTime = function formatTime(seconds) {
  var minutes = 0;

  if (seconds > 59) {
    minutes = Math.floor(seconds / 60);
    seconds = seconds % 60;
  }

  return "".concat(minutes, ":").concat(seconds < 10 ? "0".concat(seconds) : seconds);
};

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map