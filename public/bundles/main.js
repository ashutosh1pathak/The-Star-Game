/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/*!************************************!*\
  !*** multi ./src/renderers/dom.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/renderers/dom.js */"4qhl");


/***/ }),

/***/ "1a/L":
/*!**************************************!*\
  !*** ./src/components/playnumber.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"q1tI\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar PlayNumber = function PlayNumber(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    className: \"number\",\n    onClick: function onClick() {\n      return props.clicked(props.status, props.number);\n    },\n    style: {\n      backgroundColor: colors[props.status]\n    }\n  }, props.number));\n};\n\nvar colors = {\n  available: 'lightgray',\n  used: 'lightgreen',\n  wrong: 'lightcoral',\n  candidate: 'deepskyblue'\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (PlayNumber);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMWEvTC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3BsYXludW1iZXIuanM/ZDVhZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuXHJcblxyXG5jb25zdCBQbGF5TnVtYmVyID0gKHByb3BzKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHByb3BzLmNsaWNrZWQocHJvcHMuc3RhdHVzLCBwcm9wcy5udW1iZXIpfVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBjb2xvcnNbcHJvcHMuc3RhdHVzXSB9fVxyXG4gICAgICAgICAgICA+e3Byb3BzLm51bWJlcn08L2J1dHRvbj5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn1cclxuY29uc3QgY29sb3JzID0ge1xyXG4gICAgYXZhaWxhYmxlOiAnbGlnaHRncmF5JyxcclxuICAgIHVzZWQ6ICdsaWdodGdyZWVuJyxcclxuICAgIHdyb25nOiAnbGlnaHRjb3JhbCcsXHJcbiAgICBjYW5kaWRhdGU6ICdkZWVwc2t5Ymx1ZScsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQbGF5TnVtYmVyOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUZBO0FBTUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1a/L\n");

/***/ }),

/***/ "4qhl":
/*!******************************!*\
  !*** ./src/renderers/dom.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"q1tI\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"i8i4\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var components_App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/App */ \"r8ck\");\n/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/index.css */ \"VxdY\");\n/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_index_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nreact_dom__WEBPACK_IMPORTED_MODULE_1__[\"hydrate\"]( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](components_App__WEBPACK_IMPORTED_MODULE_2__[\"App\"], {\n  initialData: window.__R_DATA.initialData\n}), document.getElementById('root'));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNHFobC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9yZW5kZXJlcnMvZG9tLmpzP2UyYTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICogYXMgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcblxuaW1wb3J0IHsgQXBwIH0gZnJvbSAnY29tcG9uZW50cy9BcHAnO1xuXG5pbXBvcnQgJy4uL3N0eWxlcy9pbmRleC5jc3MnO1xuXG5SZWFjdERPTS5oeWRyYXRlKFxuICA8QXBwIGluaXRpYWxEYXRhPXt3aW5kb3cuX19SX0RBVEEuaW5pdGlhbERhdGF9IC8+LFxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpLFxuKTtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///4qhl\n");

/***/ }),

/***/ "B0f2":
/*!**************************************!*\
  !*** ./src/components/math.utils.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Math science\nvar utils = {\n  // Sum an array\n  sum: function sum(arr) {\n    return arr.reduce(function (acc, curr) {\n      return acc + curr;\n    }, 0);\n  },\n  // create an array of numbers between min and max (edges included)\n  range: function range(min, max) {\n    return Array.from({\n      length: max - min + 1\n    }, function (_, i) {\n      return min + i;\n    });\n  },\n  // pick a random number between min and max (edges included)\n  random: function random(min, max) {\n    return min + Math.floor(Math.random() * (max - min + 1));\n  },\n  // Given an array of numbers and a max...\n  // Pick a random sum (< max) from the set of all available sums in arr\n  randomSumIn: function randomSumIn(arr, max) {\n    var sets = [[]];\n    var sums = [];\n\n    for (var i = 0; i < arr.length; i++) {\n      for (var j = 0, len = sets.length; j < len; j++) {\n        var candidateSet = sets[j].concat(arr[i]);\n        var candidateSum = utils.sum(candidateSet);\n\n        if (candidateSum <= max) {\n          sets.push(candidateSet);\n          sums.push(candidateSum);\n        }\n      }\n    }\n\n    return sums[utils.random(0, sums.length - 1)];\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (utils);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQjBmMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL21hdGgudXRpbHMuanM/MDc0NyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBNYXRoIHNjaWVuY2VcclxuY29uc3QgdXRpbHMgPSB7XHJcbiAgICAvLyBTdW0gYW4gYXJyYXlcclxuICAgIHN1bTogYXJyID0+IGFyci5yZWR1Y2UoKGFjYywgY3VycikgPT4gYWNjICsgY3VyciwgMCksXHJcblxyXG4gICAgLy8gY3JlYXRlIGFuIGFycmF5IG9mIG51bWJlcnMgYmV0d2VlbiBtaW4gYW5kIG1heCAoZWRnZXMgaW5jbHVkZWQpXHJcbiAgICByYW5nZTogKG1pbiwgbWF4KSA9PiBBcnJheS5mcm9tKHsgbGVuZ3RoOiBtYXggLSBtaW4gKyAxIH0sIChfLCBpKSA9PiBtaW4gKyBpKSxcclxuXHJcbiAgICAvLyBwaWNrIGEgcmFuZG9tIG51bWJlciBiZXR3ZWVuIG1pbiBhbmQgbWF4IChlZGdlcyBpbmNsdWRlZClcclxuICAgIHJhbmRvbTogKG1pbiwgbWF4KSA9PiBtaW4gKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpLFxyXG5cclxuICAgIC8vIEdpdmVuIGFuIGFycmF5IG9mIG51bWJlcnMgYW5kIGEgbWF4Li4uXHJcbiAgICAvLyBQaWNrIGEgcmFuZG9tIHN1bSAoPCBtYXgpIGZyb20gdGhlIHNldCBvZiBhbGwgYXZhaWxhYmxlIHN1bXMgaW4gYXJyXHJcbiAgICByYW5kb21TdW1JbjogKGFyciwgbWF4KSA9PiB7XHJcbiAgICAgICAgY29uc3Qgc2V0cyA9IFtbXV07XHJcbiAgICAgICAgY29uc3Qgc3VtcyA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwLCBsZW4gPSBzZXRzLmxlbmd0aDsgaiA8IGxlbjsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjYW5kaWRhdGVTZXQgPSBzZXRzW2pdLmNvbmNhdChhcnJbaV0pO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2FuZGlkYXRlU3VtID0gdXRpbHMuc3VtKGNhbmRpZGF0ZVNldCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2FuZGlkYXRlU3VtIDw9IG1heCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldHMucHVzaChjYW5kaWRhdGVTZXQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHN1bXMucHVzaChjYW5kaWRhdGVTdW0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzdW1zW3V0aWxzLnJhbmRvbSgwLCBzdW1zLmxlbmd0aCAtIDEpXTtcclxuICAgIH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1dGlsczsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUExQkE7QUE2QkEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///B0f2\n");

/***/ }),

/***/ "VxdY":
/*!******************************!*\
  !*** ./src/styles/index.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVnhkWS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguY3NzPzRlNDIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///VxdY\n");

/***/ }),

/***/ "b8tF":
/*!*************************************!*\
  !*** ./src/components/playagain.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"q1tI\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar PlayAgain = function PlayAgain(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"game-done\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"message\",\n    style: {\n      color: props.stats == 'won' ? 'blue' : 'red'\n    }\n  }, props.stats == 'won' ? 'Well Done' : 'Try Again'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    onClick: props.clicked\n  }, \"Play Again\"));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (PlayAgain);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYjh0Ri5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3BsYXlhZ2Fpbi5qcz82ZmNiIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IFBsYXlBZ2FpbiA9IChwcm9wcykgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZ2FtZS1kb25lJz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21lc3NhZ2UnXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogcHJvcHMuc3RhdHMgPT0gJ3dvbicgPyAnYmx1ZScgOiAncmVkJyB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7cHJvcHMuc3RhdHMgPT0gJ3dvbicgPyAnV2VsbCBEb25lJyA6ICdUcnkgQWdhaW4nfVxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17cHJvcHMuY2xpY2tlZH0+UGxheSBBZ2FpbjwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBQbGF5QWdhaW47Il0sIm1hcHBpbmdzIjoiQUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQURBO0FBTUE7QUFBQTtBQUdBO0FBQ0E7QUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///b8tF\n");

/***/ }),

/***/ "r8ck":
/*!*******************************!*\
  !*** ./src/components/App.js ***!
  \*******************************/
/*! exports provided: App */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"App\", function() { return App; });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"J4zp\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"q1tI\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _math_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./math.utils */ \"B0f2\");\n/* harmony import */ var _stardisplay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stardisplay */ \"wRT7\");\n/* harmony import */ var _playnumber__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./playnumber */ \"1a/L\");\n/* harmony import */ var _playagain__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./playagain */ \"b8tF\");\n\n\n\n\n\n\nfunction App() {\n  // STAR MATCH - V2\n  var Game = function Game(props) {\n    var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(_math_utils__WEBPACK_IMPORTED_MODULE_2__[\"default\"].random(1, 9)),\n        _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),\n        stars = _useState2[0],\n        setStars = _useState2[1];\n\n    var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(_math_utils__WEBPACK_IMPORTED_MODULE_2__[\"default\"].range(1, 9)),\n        _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState3, 2),\n        avail = _useState4[0],\n        setavail = _useState4[1];\n\n    var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(10),\n        _useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState5, 2),\n        sec = _useState6[0],\n        setsec = _useState6[1];\n\n    var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]),\n        _useState8 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState7, 2),\n        candidate = _useState8[0],\n        setcandidate = _useState8[1];\n\n    Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n      if (sec > 0 && avail.length > 0) {\n        var timerID = setTimeout(function () {\n          setsec(sec - 1);\n        }, 1000);\n        return function () {\n          return clearTimeout(timerID);\n        };\n      }\n    });\n    var candidatesums = _math_utils__WEBPACK_IMPORTED_MODULE_2__[\"default\"].sum(candidate) < stars;\n\n    var OnNumberClick = function OnNumberClick(currstatus, number) {\n      console.log(currstatus);\n\n      if (currstatus == \"used\" || gamestatus !== 'active') {\n        return;\n      }\n\n      var newcandidatesum = [];\n\n      if (currstatus == 'available') {\n        newcandidatesum = candidate.concat(number);\n      } else {\n        newcandidatesum = candidate.filter(function (cn) {\n          return cn !== number;\n        });\n        console.log('comes');\n      }\n\n      if (_math_utils__WEBPACK_IMPORTED_MODULE_2__[\"default\"].sum(newcandidatesum) !== stars) {\n        setcandidate(newcandidatesum);\n        console.log(newcandidatesum);\n      } else {\n        var newavilablesum = avail.filter(function (n) {\n          return !newcandidatesum.includes(n);\n        });\n        setStars(_math_utils__WEBPACK_IMPORTED_MODULE_2__[\"default\"].randomSumIn(newavilablesum, 9));\n        setavail(newavilablesum);\n        setcandidate([]);\n      }\n    };\n\n    var OnButtonClick = function OnButtonClick(a) {\n      if (!avail.includes(a)) {\n        return 'used';\n      }\n\n      if (candidate.includes(a)) {\n        return candidatesums ? 'candidate' : 'wrong';\n      }\n\n      return 'available';\n    };\n\n    var gameisdone = avail.length == 0;\n    var gamestatus = avail.length == 0 ? 'won' : sec == 0 ? 'lost' : 'active';\n    console.log('num' + gameisdone);\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n      className: \"game\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n      className: \"help\"\n    }, \"Pick 1 or more numbers that sum to the number of stars\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n      className: \"body\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n      className: \"left\"\n    }, gamestatus !== 'active' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_playagain__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      clicked: props.startnewgame,\n      stats: gamestatus\n    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_stardisplay__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      count: stars\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n      className: \"right\"\n    }, _math_utils__WEBPACK_IMPORTED_MODULE_2__[\"default\"].range(1, 9).map(function (number) {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_playnumber__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        status: OnButtonClick(number),\n        number: number,\n        clicked: OnNumberClick\n      });\n    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n      className: \"timer\"\n    }, \"Time Remaining: \", sec));\n  };\n\n  var StarMatch = function StarMatch(props) {\n    var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(1),\n        _useState10 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState9, 2),\n        game = _useState10[0],\n        id = _useState10[1];\n\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Game, {\n      key: game,\n      startnewgame: function startnewgame() {\n        id(game + 1);\n      }\n    });\n  }; // Color Theme\n\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StarMatch, null);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicjhjay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0FwcC5qcz9hZmM3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHV0aWxzIGZyb20gXCIuL21hdGgudXRpbHNcIjtcbmltcG9ydCBTdGFyc0Rpc3BsYXkgZnJvbSBcIi4vc3RhcmRpc3BsYXlcIjtcbmltcG9ydCBQbGF5TnVtYmVyIGZyb20gXCIuL3BsYXludW1iZXJcIjtcbmltcG9ydCBQbGF5QWdhaW4gZnJvbSBcIi4vcGxheWFnYWluXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBBcHAoKSB7XG4gIC8vIFNUQVIgTUFUQ0ggLSBWMlxuXG4gIGNvbnN0IEdhbWUgPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCBbc3RhcnMsIHNldFN0YXJzXSA9IHVzZVN0YXRlKHV0aWxzLnJhbmRvbSgxLCA5KSk7XG4gICAgY29uc3QgW2F2YWlsLCBzZXRhdmFpbF0gPSB1c2VTdGF0ZSh1dGlscy5yYW5nZSgxLCA5KSk7XG4gICAgY29uc3QgW3NlYywgc2V0c2VjXSA9IHVzZVN0YXRlKDEwKTtcbiAgICBjb25zdCBbY2FuZGlkYXRlLCBzZXRjYW5kaWRhdGVdID0gdXNlU3RhdGUoW10pXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIGlmIChzZWMgPiAwICYmIGF2YWlsLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY29uc3QgdGltZXJJRCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHNldHNlYyhzZWMgLSAxKTtcbiAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgIHJldHVybiAoKSA9PiBjbGVhclRpbWVvdXQodGltZXJJRClcbiAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zdCBjYW5kaWRhdGVzdW1zID0gdXRpbHMuc3VtKGNhbmRpZGF0ZSkgPCBzdGFycztcbiAgICBjb25zdCBPbk51bWJlckNsaWNrID0gKGN1cnJzdGF0dXMsIG51bWJlcikgPT4ge1xuICAgICAgY29uc29sZS5sb2coY3VycnN0YXR1cyk7XG4gICAgICBpZiAoY3VycnN0YXR1cyA9PSBcInVzZWRcIiB8fCBnYW1lc3RhdHVzICE9PSAnYWN0aXZlJykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB2YXIgbmV3Y2FuZGlkYXRlc3VtID0gW107XG4gICAgICBpZiAoY3VycnN0YXR1cyA9PSAnYXZhaWxhYmxlJykge1xuICAgICAgICBuZXdjYW5kaWRhdGVzdW0gPSBjYW5kaWRhdGUuY29uY2F0KG51bWJlcik7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgbmV3Y2FuZGlkYXRlc3VtID0gY2FuZGlkYXRlLmZpbHRlcihjbiA9PiBjbiAhPT0gbnVtYmVyKTtcbiAgICAgICAgY29uc29sZS5sb2coJ2NvbWVzJyk7XG4gICAgICB9XG5cbiAgICAgIGlmICh1dGlscy5zdW0obmV3Y2FuZGlkYXRlc3VtKSAhPT0gc3RhcnMpIHtcbiAgICAgICAgc2V0Y2FuZGlkYXRlKG5ld2NhbmRpZGF0ZXN1bSk7XG4gICAgICAgIGNvbnNvbGUubG9nKG5ld2NhbmRpZGF0ZXN1bSk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgY29uc3QgbmV3YXZpbGFibGVzdW0gPSBhdmFpbC5maWx0ZXIoXG4gICAgICAgICAgbiA9PiAhbmV3Y2FuZGlkYXRlc3VtLmluY2x1ZGVzKG4pXG4gICAgICAgICk7XG4gICAgICAgIHNldFN0YXJzKHV0aWxzLnJhbmRvbVN1bUluKG5ld2F2aWxhYmxlc3VtLCA5KSk7XG4gICAgICAgIHNldGF2YWlsKG5ld2F2aWxhYmxlc3VtKTtcbiAgICAgICAgc2V0Y2FuZGlkYXRlKFtdKVxuICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBPbkJ1dHRvbkNsaWNrID0gKGEpID0+IHtcbiAgICAgIGlmICghYXZhaWwuaW5jbHVkZXMoYSkpIHtcbiAgICAgICAgcmV0dXJuICd1c2VkJztcbiAgICAgIH1cbiAgICAgIGlmIChjYW5kaWRhdGUuaW5jbHVkZXMoYSkpIHtcbiAgICAgICAgcmV0dXJuIGNhbmRpZGF0ZXN1bXMgPyAnY2FuZGlkYXRlJyA6ICd3cm9uZyc7XG4gICAgICB9XG4gICAgICByZXR1cm4gJ2F2YWlsYWJsZSc7XG4gICAgfTtcbiAgICBjb25zdCBnYW1laXNkb25lID0gYXZhaWwubGVuZ3RoID09IDA7XG4gICAgY29uc3QgZ2FtZXN0YXR1cyA9IGF2YWlsLmxlbmd0aCA9PSAwID8gJ3dvbicgOiBzZWMgPT0gMCA/ICdsb3N0JyA6ICdhY3RpdmUnO1xuICAgIGNvbnNvbGUubG9nKCdudW0nICsgZ2FtZWlzZG9uZSk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2FtZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlbHBcIj5cbiAgICAgICAgICBQaWNrIDEgb3IgbW9yZSBudW1iZXJzIHRoYXQgc3VtIHRvIHRoZSBudW1iZXIgb2Ygc3RhcnNcbiAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvZHlcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZnRcIj5cbiAgICAgICAgICAgIHtnYW1lc3RhdHVzICE9PSAnYWN0aXZlJyA/IDxQbGF5QWdhaW4gY2xpY2tlZD17cHJvcHMuc3RhcnRuZXdnYW1lfSBzdGF0cz17Z2FtZXN0YXR1c30gLz4gOiA8U3RhcnNEaXNwbGF5IGNvdW50PXtzdGFyc30gLz59XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodFwiPlxuICAgICAgICAgICAge3V0aWxzLnJhbmdlKDEsIDkpLm1hcChudW1iZXIgPT5cbiAgICAgICAgICAgICAgPFBsYXlOdW1iZXIgc3RhdHVzPXtPbkJ1dHRvbkNsaWNrKG51bWJlcil9IG51bWJlcj17bnVtYmVyfSBjbGlja2VkPXtPbk51bWJlckNsaWNrfSAvPlxuXG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aW1lclwiPlRpbWUgUmVtYWluaW5nOiB7c2VjfTwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfTtcbiAgY29uc3QgU3Rhck1hdGNoID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgW2dhbWUsIGlkXSA9IHVzZVN0YXRlKDEpO1xuICAgIHJldHVybiAoXG4gICAgICA8R2FtZSBrZXk9e2dhbWV9IHN0YXJ0bmV3Z2FtZT17KCkgPT4geyBpZChnYW1lICsgMSkgfX0gLz5cbiAgICApO1xuICB9XG5cbiAgLy8gQ29sb3IgVGhlbWVcblxuXG5cblxuXG4gIHJldHVybiAoXG4gICAgPFN0YXJNYXRjaCAvPlxuXG4gICk7XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBTUE7QUFBQTtBQUdBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFNQTtBQUlBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///r8ck\n");

/***/ }),

/***/ "wRT7":
/*!***************************************!*\
  !*** ./src/components/stardisplay.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"q1tI\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _math_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./math.utils */ \"B0f2\");\n\n\n\nvar StarsDisplay = function StarsDisplay(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, _math_utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].range(1, props.count).map(function (starId) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      key: starId,\n      className: \"star\"\n    });\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (StarsDisplay);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid1JUNy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3N0YXJkaXNwbGF5LmpzP2MxMTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB1dGlscyBmcm9tIFwiLi9tYXRoLnV0aWxzXCI7XHJcbmNvbnN0IFN0YXJzRGlzcGxheSA9IChwcm9wcykgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICB7dXRpbHMucmFuZ2UoMSwgcHJvcHMuY291bnQpLm1hcChzdGFySWQgPT5cclxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtzdGFySWR9IGNsYXNzTmFtZT1cInN0YXJcIiAvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBTdGFyc0Rpc3BsYXk7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQURBO0FBS0E7QUFDQTtBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///wRT7\n");

/***/ })

/******/ });