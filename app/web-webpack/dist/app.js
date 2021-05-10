/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../../packages/js-cjs/src/main.js":
/*!*****************************************!*\
  !*** ../../packages/js-cjs/src/main.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

exports.default = () => {
  const getNumber = __webpack_require__(/*! ./sub */ "../../packages/js-cjs/src/sub.js").getNumber
  return 100 + getNumber()
}






/***/ }),

/***/ "../../packages/js-cjs/src/sub.js":
/*!****************************************!*\
  !*** ../../packages/js-cjs/src/sub.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports) => {

const getNumber = () => {
    return 100
}

exports.getNumber = getNumber;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var js_cjs_src_main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js-cjs/src/main */ "../../packages/js-cjs/src/main.js");


const bodyText = js_cjs_src_main__WEBPACK_IMPORTED_MODULE_0__();

document.getElementById('body').innerHTML = `
 ${bodyText}
`
// for debug
console.log(bodyText)

})();

/******/ })()
;