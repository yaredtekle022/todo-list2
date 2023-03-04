/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_variables_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/variables.js */ \"./src/modules/variables.js\");\n/* harmony import */ var _modules_complete_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/complete.js */ \"./src/modules/complete.js\");\n/* harmony import */ var _modules_add_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/add.js */ \"./src/modules/add.js\");\n\n\n\n\nlet LIST = JSON.parse(localStorage.getItem('TODO')) || [];\nlet id = 0;\n\nconst clear = document.querySelector('.clear');\nclear.addEventListener('click', () => {\n  localStorage.clear();\n  window.location.reload();\n});\n\nconst erase = document.querySelector('.erase');\nerase.addEventListener('click', () => {\n  const updateLocal = JSON.parse(localStorage.getItem('TODO'));\n\n  const currentList = updateLocal.filter((item) => item.done === false);\n  localStorage.setItem('TODO', JSON.stringify(currentList));\n  window.location.reload();\n});\nconst myData = JSON.parse(localStorage.getItem('TODO'));\n\nconst rerender = (myList) => {\n  if (myList) {\n    const container = document.createElement('div');\n    myList.forEach((item) => {\n      container.innerHTML += `<li class=\"item\">\n              <div class=\"left\">\n              <i class=\"fa-regular fa-square\" job=\"complete\" id=${item.id}></i>\n              <p class=\"text\" id=${item.id}>${item.todo}</p>\n              </div>\n              <button class=\"edit\" id=${id}${id}>Edit</button>\n              <i class=\"fa-solid fa-trash\" job=\"delete\" id=${id}></i>\n            </li>`;\n      _modules_variables_js__WEBPACK_IMPORTED_MODULE_0__.list.append(container);\n    });\n  }\n};\n\nrerender(myData);\n\n_modules_variables_js__WEBPACK_IMPORTED_MODULE_0__.addBtn.addEventListener('click', () => {\n  const todo = _modules_variables_js__WEBPACK_IMPORTED_MODULE_0__.input.value;\n\n  if (todo) {\n    (0,_modules_add_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(todo, id, false, false);\n    if (myData) {\n      LIST = myData;\n    }\n    LIST.push({\n      todo,\n      id: LIST.length,\n      done: false,\n      trash: false,\n    });\n\n    id += 1;\n    localStorage.setItem('TODO', JSON.stringify(LIST));\n  }\n\n  _modules_variables_js__WEBPACK_IMPORTED_MODULE_0__.input.value = '';\n});\nconst removeToDo = (element, elemenId) => {\n  element.parentNode.parentNode.removeChild(element.parentNode);\n  LIST[elemenId].trash = true;\n  const t = localStorage.getItem('TODO');\n  const parsedData = JSON.parse(t);\n  const data = parsedData[elemenId].id;\n\n  const currentList = parsedData.filter((item) => item.id !== data);\n  currentList.forEach((element, index) => {\n    element.id = index;\n  });\n\n  LIST = currentList;\n  window.location.reload();\n  localStorage.setItem('TODO', JSON.stringify(currentList));\n};\n\n_modules_variables_js__WEBPACK_IMPORTED_MODULE_0__.list.addEventListener('click', (event) => {\n  const element = event.target;\n  const elemenId = event.target.id;\n  const elementJob = element.attributes.job.value;\n  if (elementJob === 'complete') {\n    (0,_modules_complete_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(element, elemenId);\n  } else if (elementJob === 'delete') {\n    removeToDo(element, elemenId);\n  }\n});\n\n//# sourceURL=webpack://webpack-test/./src/index.js?");

/***/ }),

/***/ "./src/modules/add.js":
/*!****************************!*\
  !*** ./src/modules/add.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _variables_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables.js */ \"./src/modules/variables.js\");\n\n  \n  const addToDo = (todo, id, done, trash) => {\n    if (trash) {\n      return;\n    }\n    const Done = done ? _variables_js__WEBPACK_IMPORTED_MODULE_0__.check : _variables_js__WEBPACK_IMPORTED_MODULE_0__.uncheck;\n    const Line = done ? _variables_js__WEBPACK_IMPORTED_MODULE_0__.line : '';\n    const position = 'beforeend';\n  \n    const item = `<li class=\"item\">\n                  <div class=\"left\">\n                  <i class=\"fa-regular ${Done}\" job=\"complete\" id=${id}${id}></i>\n                  <p class=\"text ${Line}\" id=${todo}>${todo}</p>\n                  </div>\n                  <button class=\"edit\" id=${id}${id}>Edit</button>\n                    <i class=\"fa-solid fa-trash\" job=\"delete\" id=${id}></i>\n                </li>`;\n  \n    _variables_js__WEBPACK_IMPORTED_MODULE_0__.list.insertAdjacentHTML(position, item);\n  };\n  \n  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addToDo);\n\n//# sourceURL=webpack://webpack-test/./src/modules/add.js?");

/***/ }),

/***/ "./src/modules/complete.js":
/*!*********************************!*\
  !*** ./src/modules/complete.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _variables_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables.js */ \"./src/modules/variables.js\");\n\n\nconst completeToDo = (element, elemenId) => {\n  element.classList.toggle(_variables_js__WEBPACK_IMPORTED_MODULE_0__.check);\n  element.classList.toggle(_variables_js__WEBPACK_IMPORTED_MODULE_0__.uncheck);\n  element.parentNode.querySelector('.text').classList.toggle(_variables_js__WEBPACK_IMPORTED_MODULE_0__.line);\n\n  const localData = JSON.parse(localStorage.getItem('TODO'));\n\n  localData.forEach((element) => {\n    const idnum = Number(elemenId);\n    if (idnum === element.id) {\n      element.done = !element.done;\n    }\n    localStorage.setItem('TODO', JSON.stringify(localData));\n  });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (completeToDo);\n\n//# sourceURL=webpack://webpack-test/./src/modules/complete.js?");

/***/ }),

/***/ "./src/modules/variables.js":
/*!**********************************!*\
  !*** ./src/modules/variables.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addBtn\": () => (/* binding */ addBtn),\n/* harmony export */   \"check\": () => (/* binding */ check),\n/* harmony export */   \"input\": () => (/* binding */ input),\n/* harmony export */   \"line\": () => (/* binding */ line),\n/* harmony export */   \"list\": () => (/* binding */ list),\n/* harmony export */   \"uncheck\": () => (/* binding */ uncheck)\n/* harmony export */ });\nconst list = document.getElementById('list');\nconst input = document.getElementById('input');\nconst addBtn = document.querySelector('.add');\nconst check = 'fa-square-check';\nconst uncheck = 'fa-square';\nconst line = 'lineThrough';\n\n\n\n//# sourceURL=webpack://webpack-test/./src/modules/variables.js?");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;