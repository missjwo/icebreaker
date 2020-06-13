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
/*!***********************!*\
  !*** ./src/blocks.js ***!
  \***********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__block_block_js__ = __webpack_require__(/*! ./block/block.js */ 1);\n/**\n * Gutenberg Blocks\n *\n * All blocks related JavaScript files should be imported here.\n * You can create a new block folder in this dir and include code\n * for that block here as well.\n *\n * All blocks should be included here since this is the file that\n * Webpack is compiling as the input file.\n */\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MuanM/N2I1YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEd1dGVuYmVyZyBCbG9ja3NcbiAqXG4gKiBBbGwgYmxvY2tzIHJlbGF0ZWQgSmF2YVNjcmlwdCBmaWxlcyBzaG91bGQgYmUgaW1wb3J0ZWQgaGVyZS5cbiAqIFlvdSBjYW4gY3JlYXRlIGEgbmV3IGJsb2NrIGZvbGRlciBpbiB0aGlzIGRpciBhbmQgaW5jbHVkZSBjb2RlXG4gKiBmb3IgdGhhdCBibG9jayBoZXJlIGFzIHdlbGwuXG4gKlxuICogQWxsIGJsb2NrcyBzaG91bGQgYmUgaW5jbHVkZWQgaGVyZSBzaW5jZSB0aGlzIGlzIHRoZSBmaWxlIHRoYXRcbiAqIFdlYnBhY2sgaXMgY29tcGlsaW5nIGFzIHRoZSBpbnB1dCBmaWxlLlxuICovXG5cbmltcG9ydCAnLi9ibG9jay9ibG9jay5qcyc7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2tzLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!****************************!*\
  !*** ./src/block/block.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__attributes__ = __webpack_require__(/*! ./attributes */ 2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wordpress_api_fetch__ = __webpack_require__(/*! @wordpress/api-fetch */ 3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wordpress_api_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__wordpress_api_fetch__);\n/**\n * BLOCK: icebreaker\n *\n * Registering a basic block with Gutenberg.\n * Simple block, renders and saves the same content without any interactivity.\n */\n\nvar __ = wp.i18n.__; // Import __() from wp.i18n\n\n\n\n\nvar registerBlockType = wp.blocks.registerBlockType; // Import registerBlockType() from wp.blocks\n// Import the element creator function (React abstraction layer)\n\nvar el = wp.element.createElement;\n/**\n * Snowflake SVG path\n*/\nvar iconEl = el('svg', { width: 24, height: 24, viewBox: \"0 0 100 100\" }, el('path', { d: \"M97.5,50c0,1.7-1.4,3.1-3.1,3.1h-8l4,4c1.2,1.2,1.2,3.2,0,4.4c-0.6,0.6-1.4,0.9-2.2,0.9c-0.8,0-1.6-0.3-2.2-0.9l-8.4-8.4  H57.4l14.3,14.3h11.9c1.7,0,3.1,1.4,3.1,3.1s-1.4,3.1-3.1,3.1H78l5.6,5.6c1.2,1.2,1.2,3.2,0,4.4c-0.6,0.6-1.4,0.9-2.2,0.9  s-1.6-0.3-2.2-0.9L73.6,78v5.7c0,1.7-1.4,3.1-3.1,3.1s-3.1-1.4-3.1-3.1V71.8L53.1,57.4v20.1l8.4,8.4c1.2,1.2,1.2,3.2,0,4.4  c-0.6,0.6-1.4,0.9-2.2,0.9c-0.8,0-1.6-0.3-2.2-0.9l-4-4v8.2c0,1.7-1.4,3.1-3.1,3.1s-3.1-1.4-3.1-3.1v-8.2l-4,4  c-0.6,0.6-1.4,0.9-2.2,0.9s-1.6-0.3-2.2-0.9c-1.2-1.2-1.2-3.2,0-4.4l8.4-8.4v-20L32.7,71.8v11.9c0,1.7-1.4,3.1-3.1,3.1  c-1.7,0-3.1-1.4-3.1-3.1V78l-5.6,5.6c-0.6,0.6-1.4,0.9-2.2,0.9c-0.8,0-1.6-0.3-2.2-0.9c-1.2-1.2-1.2-3.2,0-4.4l5.6-5.6h-5.7  c-1.7,0-3.1-1.4-3.1-3.1s1.4-3.1,3.1-3.1h11.9l14.3-14.3H22.5l-8.4,8.4c-0.6,0.6-1.4,0.9-2.2,0.9c-0.8,0-1.6-0.3-2.2-0.9  c-1.2-1.2-1.2-3.2,0-4.4l4-4H5.6c-1.7,0-3.1-1.4-3.1-3.1s1.4-3.1,3.1-3.1h8.2l-4-4c-1.2-1.2-1.2-3.2,0-4.4c1.2-1.2,3.2-1.2,4.4,0  l8.4,8.4h20.1L28.4,32.7H16.5c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1h5.7l-5.8-5.8c-1.2-1.2-1.2-3.2,0-4.4  c1.2-1.2,3.2-1.2,4.4,0l5.8,5.8v-5.7c0-1.7,1.4-3.1,3.1-3.1c1.7,0,3.1,1.4,3.1,3.1v11.9l14.2,14.2V22.3l-8.4-8.4  c-1.2-1.2-1.2-3.2,0-4.4c1.2-1.2,3.2-1.2,4.4,0l4,4v-8c0-1.7,1.4-3.1,3.1-3.1s3.1,1.4,3.1,3.1v8l4-4c1.2-1.2,3.2-1.2,4.4,0  c1.2,1.2,1.2,3.2,0,4.4l-8.4,8.4v20.4l14.3-14.3V16.5c0-1.7,1.4-3.1,3.1-3.1s3.1,1.4,3.1,3.1v5.7l5.8-5.8c1.2-1.2,3.2-1.2,4.4,0  c1.2,1.2,1.2,3.2,0,4.4L78,26.5h5.7c1.7,0,3.1,1.4,3.1,3.1c0,1.7-1.4,3.1-3.1,3.1H71.8L57.6,46.9h20.1l8.4-8.4  c1.2-1.2,3.2-1.2,4.4,0c1.2,1.2,1.2,3.2,0,4.4l-4,4h8C96.1,46.9,97.5,48.3,97.5,50z\" }));\n\nfunction getRandomIntInclusive(min, max) {\n\tmin = Math.ceil(min);\n\tmax = Math.floor(max);\n\treturn Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive \n}\n\n/**\n * Register: Random icebreaker question Gutenberg Block.\n *\n * Registers a new block provided a unique name and an object defining its\n * behavior. Once registered, the block is made editor as an option to any\n * editor interface where blocks are implemented.\n *\n * @link https://wordpress.org/gutenberg/handbook/block-api/\n * @param  {string}   name     Block name.\n * @param  {Object}   settings Block settings.\n * @return {?WPBlock}          The block, if it has been successfully\n *                             registered; otherwise `undefined`.\n */\nregisterBlockType('jw/block-icebreaker', {\n\t// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.\n\ttitle: __('Icebreaker - random'), // Block title.\n\ticon: iconEl,\n\tcategory: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.\n\tkeywords: [__('Icebreaker — random'), __('Icebreaker'), __('random')],\n\n\tattributes: __WEBPACK_IMPORTED_MODULE_0__attributes__[\"a\" /* default */],\n\n\t/**\n  * The edit function describes the structure of your block in the context of the editor.\n  * This represents what the editor will render when the block is used.\n  *\n  * The \"edit\" property must be a valid function.\n  *\n  * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/\n  *\n  * @param {Object} props Props.\n  * @returns {Mixed} JSX Component.\n  */\n\tedit: function edit(props) {\n\t\tvar setAttributes = props.setAttributes;\n\n\n\t\tif (props.attributes.randomQuestion === '') {\n\t\t\t__WEBPACK_IMPORTED_MODULE_1__wordpress_api_fetch___default()({ path: '/wp/v2/icebreakers' }).then(function (response) {\n\t\t\t\tvar i = getRandomIntInclusive(0, response.length - 1);\n\t\t\t\tsetAttributes({ randomQuestion: response[i].title.rendered });\n\t\t\t});\n\t\t}\n\n\t\treturn wp.element.createElement(\n\t\t\t'div',\n\t\t\t{ className: props.className },\n\t\t\twp.element.createElement(\n\t\t\t\t'p',\n\t\t\t\tnull,\n\t\t\t\tprops.attributes.randomQuestion\n\t\t\t)\n\t\t);\n\t},\n\n\t/**\n  * The save function defines the way in which the different attributes should be combined\n  * into the final markup, which is then serialized by Gutenberg into post_content.\n  *\n  * The \"save\" property must be specified and must be a valid function.\n  *\n  * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/\n  *\n  * @param {Object} props Props.\n  * @returns {Mixed} JSX Frontend HTML.\n  */\n\tsave: function save(props) {\n\t\treturn wp.element.createElement(\n\t\t\t'div',\n\t\t\t{ className: props.className },\n\t\t\twp.element.createElement(\n\t\t\t\t'p',\n\t\t\t\tnull,\n\t\t\t\tprops.attributes.randomQuestion\n\t\t\t)\n\t\t);\n\t}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9ibG9jay5qcz85MjFkIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQkxPQ0s6IGljZWJyZWFrZXJcbiAqXG4gKiBSZWdpc3RlcmluZyBhIGJhc2ljIGJsb2NrIHdpdGggR3V0ZW5iZXJnLlxuICogU2ltcGxlIGJsb2NrLCByZW5kZXJzIGFuZCBzYXZlcyB0aGUgc2FtZSBjb250ZW50IHdpdGhvdXQgYW55IGludGVyYWN0aXZpdHkuXG4gKi9cblxudmFyIF9fID0gd3AuaTE4bi5fXzsgLy8gSW1wb3J0IF9fKCkgZnJvbSB3cC5pMThuXG5cbmltcG9ydCBhdHRyaWJ1dGVzIGZyb20gJy4vYXR0cmlidXRlcyc7XG5pbXBvcnQgYXBpRmV0Y2ggZnJvbSAnQHdvcmRwcmVzcy9hcGktZmV0Y2gnO1xuXG52YXIgcmVnaXN0ZXJCbG9ja1R5cGUgPSB3cC5ibG9ja3MucmVnaXN0ZXJCbG9ja1R5cGU7IC8vIEltcG9ydCByZWdpc3RlckJsb2NrVHlwZSgpIGZyb20gd3AuYmxvY2tzXG4vLyBJbXBvcnQgdGhlIGVsZW1lbnQgY3JlYXRvciBmdW5jdGlvbiAoUmVhY3QgYWJzdHJhY3Rpb24gbGF5ZXIpXG5cbnZhciBlbCA9IHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudDtcbi8qKlxuICogU25vd2ZsYWtlIFNWRyBwYXRoXG4qL1xudmFyIGljb25FbCA9IGVsKCdzdmcnLCB7IHdpZHRoOiAyNCwgaGVpZ2h0OiAyNCwgdmlld0JveDogXCIwIDAgMTAwIDEwMFwiIH0sIGVsKCdwYXRoJywgeyBkOiBcIk05Ny41LDUwYzAsMS43LTEuNCwzLjEtMy4xLDMuMWgtOGw0LDRjMS4yLDEuMiwxLjIsMy4yLDAsNC40Yy0wLjYsMC42LTEuNCwwLjktMi4yLDAuOWMtMC44LDAtMS42LTAuMy0yLjItMC45bC04LjQtOC40ICBINTcuNGwxNC4zLDE0LjNoMTEuOWMxLjcsMCwzLjEsMS40LDMuMSwzLjFzLTEuNCwzLjEtMy4xLDMuMUg3OGw1LjYsNS42YzEuMiwxLjIsMS4yLDMuMiwwLDQuNGMtMC42LDAuNi0xLjQsMC45LTIuMiwwLjkgIHMtMS42LTAuMy0yLjItMC45TDczLjYsNzh2NS43YzAsMS43LTEuNCwzLjEtMy4xLDMuMXMtMy4xLTEuNC0zLjEtMy4xVjcxLjhMNTMuMSw1Ny40djIwLjFsOC40LDguNGMxLjIsMS4yLDEuMiwzLjIsMCw0LjQgIGMtMC42LDAuNi0xLjQsMC45LTIuMiwwLjljLTAuOCwwLTEuNi0wLjMtMi4yLTAuOWwtNC00djguMmMwLDEuNy0xLjQsMy4xLTMuMSwzLjFzLTMuMS0xLjQtMy4xLTMuMXYtOC4ybC00LDQgIGMtMC42LDAuNi0xLjQsMC45LTIuMiwwLjlzLTEuNi0wLjMtMi4yLTAuOWMtMS4yLTEuMi0xLjItMy4yLDAtNC40bDguNC04LjR2LTIwTDMyLjcsNzEuOHYxMS45YzAsMS43LTEuNCwzLjEtMy4xLDMuMSAgYy0xLjcsMC0zLjEtMS40LTMuMS0zLjFWNzhsLTUuNiw1LjZjLTAuNiwwLjYtMS40LDAuOS0yLjIsMC45Yy0wLjgsMC0xLjYtMC4zLTIuMi0wLjljLTEuMi0xLjItMS4yLTMuMiwwLTQuNGw1LjYtNS42aC01LjcgIGMtMS43LDAtMy4xLTEuNC0zLjEtMy4xczEuNC0zLjEsMy4xLTMuMWgxMS45bDE0LjMtMTQuM0gyMi41bC04LjQsOC40Yy0wLjYsMC42LTEuNCwwLjktMi4yLDAuOWMtMC44LDAtMS42LTAuMy0yLjItMC45ICBjLTEuMi0xLjItMS4yLTMuMiwwLTQuNGw0LTRINS42Yy0xLjcsMC0zLjEtMS40LTMuMS0zLjFzMS40LTMuMSwzLjEtMy4xaDguMmwtNC00Yy0xLjItMS4yLTEuMi0zLjIsMC00LjRjMS4yLTEuMiwzLjItMS4yLDQuNCwwICBsOC40LDguNGgyMC4xTDI4LjQsMzIuN0gxNi41Yy0xLjcsMC0zLjEtMS40LTMuMS0zLjFjMC0xLjcsMS40LTMuMSwzLjEtMy4xaDUuN2wtNS44LTUuOGMtMS4yLTEuMi0xLjItMy4yLDAtNC40ICBjMS4yLTEuMiwzLjItMS4yLDQuNCwwbDUuOCw1Ljh2LTUuN2MwLTEuNywxLjQtMy4xLDMuMS0zLjFjMS43LDAsMy4xLDEuNCwzLjEsMy4xdjExLjlsMTQuMiwxNC4yVjIyLjNsLTguNC04LjQgIGMtMS4yLTEuMi0xLjItMy4yLDAtNC40YzEuMi0xLjIsMy4yLTEuMiw0LjQsMGw0LDR2LThjMC0xLjcsMS40LTMuMSwzLjEtMy4xczMuMSwxLjQsMy4xLDMuMXY4bDQtNGMxLjItMS4yLDMuMi0xLjIsNC40LDAgIGMxLjIsMS4yLDEuMiwzLjIsMCw0LjRsLTguNCw4LjR2MjAuNGwxNC4zLTE0LjNWMTYuNWMwLTEuNywxLjQtMy4xLDMuMS0zLjFzMy4xLDEuNCwzLjEsMy4xdjUuN2w1LjgtNS44YzEuMi0xLjIsMy4yLTEuMiw0LjQsMCAgYzEuMiwxLjIsMS4yLDMuMiwwLDQuNEw3OCwyNi41aDUuN2MxLjcsMCwzLjEsMS40LDMuMSwzLjFjMCwxLjctMS40LDMuMS0zLjEsMy4xSDcxLjhMNTcuNiw0Ni45aDIwLjFsOC40LTguNCAgYzEuMi0xLjIsMy4yLTEuMiw0LjQsMGMxLjIsMS4yLDEuMiwzLjIsMCw0LjRsLTQsNGg4Qzk2LjEsNDYuOSw5Ny41LDQ4LjMsOTcuNSw1MHpcIiB9KSk7XG5cbmZ1bmN0aW9uIGdldFJhbmRvbUludEluY2x1c2l2ZShtaW4sIG1heCkge1xuXHRtaW4gPSBNYXRoLmNlaWwobWluKTtcblx0bWF4ID0gTWF0aC5mbG9vcihtYXgpO1xuXHRyZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pbjsgLy9UaGUgbWF4aW11bSBpcyBpbmNsdXNpdmUgYW5kIHRoZSBtaW5pbXVtIGlzIGluY2x1c2l2ZSBcbn1cblxuLyoqXG4gKiBSZWdpc3RlcjogUmFuZG9tIGljZWJyZWFrZXIgcXVlc3Rpb24gR3V0ZW5iZXJnIEJsb2NrLlxuICpcbiAqIFJlZ2lzdGVycyBhIG5ldyBibG9jayBwcm92aWRlZCBhIHVuaXF1ZSBuYW1lIGFuZCBhbiBvYmplY3QgZGVmaW5pbmcgaXRzXG4gKiBiZWhhdmlvci4gT25jZSByZWdpc3RlcmVkLCB0aGUgYmxvY2sgaXMgbWFkZSBlZGl0b3IgYXMgYW4gb3B0aW9uIHRvIGFueVxuICogZWRpdG9yIGludGVyZmFjZSB3aGVyZSBibG9ja3MgYXJlIGltcGxlbWVudGVkLlxuICpcbiAqIEBsaW5rIGh0dHBzOi8vd29yZHByZXNzLm9yZy9ndXRlbmJlcmcvaGFuZGJvb2svYmxvY2stYXBpL1xuICogQHBhcmFtICB7c3RyaW5nfSAgIG5hbWUgICAgIEJsb2NrIG5hbWUuXG4gKiBAcGFyYW0gIHtPYmplY3R9ICAgc2V0dGluZ3MgQmxvY2sgc2V0dGluZ3MuXG4gKiBAcmV0dXJuIHs/V1BCbG9ja30gICAgICAgICAgVGhlIGJsb2NrLCBpZiBpdCBoYXMgYmVlbiBzdWNjZXNzZnVsbHlcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWdpc3RlcmVkOyBvdGhlcndpc2UgYHVuZGVmaW5lZGAuXG4gKi9cbnJlZ2lzdGVyQmxvY2tUeXBlKCdqdy9ibG9jay1pY2VicmVha2VyJywge1xuXHQvLyBCbG9jayBuYW1lLiBCbG9jayBuYW1lcyBtdXN0IGJlIHN0cmluZyB0aGF0IGNvbnRhaW5zIGEgbmFtZXNwYWNlIHByZWZpeC4gRXhhbXBsZTogbXktcGx1Z2luL215LWN1c3RvbS1ibG9jay5cblx0dGl0bGU6IF9fKCdJY2VicmVha2VyIC0gcmFuZG9tJyksIC8vIEJsb2NrIHRpdGxlLlxuXHRpY29uOiBpY29uRWwsXG5cdGNhdGVnb3J5OiAnY29tbW9uJywgLy8gQmxvY2sgY2F0ZWdvcnkg4oCUIEdyb3VwIGJsb2NrcyB0b2dldGhlciBiYXNlZCBvbiBjb21tb24gdHJhaXRzIEUuZy4gY29tbW9uLCBmb3JtYXR0aW5nLCBsYXlvdXQgd2lkZ2V0cywgZW1iZWQuXG5cdGtleXdvcmRzOiBbX18oJ0ljZWJyZWFrZXIg4oCUIHJhbmRvbScpLCBfXygnSWNlYnJlYWtlcicpLCBfXygncmFuZG9tJyldLFxuXG5cdGF0dHJpYnV0ZXM6IGF0dHJpYnV0ZXMsXG5cblx0LyoqXG4gICogVGhlIGVkaXQgZnVuY3Rpb24gZGVzY3JpYmVzIHRoZSBzdHJ1Y3R1cmUgb2YgeW91ciBibG9jayBpbiB0aGUgY29udGV4dCBvZiB0aGUgZWRpdG9yLlxuICAqIFRoaXMgcmVwcmVzZW50cyB3aGF0IHRoZSBlZGl0b3Igd2lsbCByZW5kZXIgd2hlbiB0aGUgYmxvY2sgaXMgdXNlZC5cbiAgKlxuICAqIFRoZSBcImVkaXRcIiBwcm9wZXJ0eSBtdXN0IGJlIGEgdmFsaWQgZnVuY3Rpb24uXG4gICpcbiAgKiBAbGluayBodHRwczovL3dvcmRwcmVzcy5vcmcvZ3V0ZW5iZXJnL2hhbmRib29rL2Jsb2NrLWFwaS9ibG9jay1lZGl0LXNhdmUvXG4gICpcbiAgKiBAcGFyYW0ge09iamVjdH0gcHJvcHMgUHJvcHMuXG4gICogQHJldHVybnMge01peGVkfSBKU1ggQ29tcG9uZW50LlxuICAqL1xuXHRlZGl0OiBmdW5jdGlvbiBlZGl0KHByb3BzKSB7XG5cdFx0dmFyIHNldEF0dHJpYnV0ZXMgPSBwcm9wcy5zZXRBdHRyaWJ1dGVzO1xuXG5cblx0XHRpZiAocHJvcHMuYXR0cmlidXRlcy5yYW5kb21RdWVzdGlvbiA9PT0gJycpIHtcblx0XHRcdGFwaUZldGNoKHsgcGF0aDogJy93cC92Mi9pY2VicmVha2VycycgfSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcblx0XHRcdFx0dmFyIGkgPSBnZXRSYW5kb21JbnRJbmNsdXNpdmUoMCwgcmVzcG9uc2UubGVuZ3RoIC0gMSk7XG5cdFx0XHRcdHNldEF0dHJpYnV0ZXMoeyByYW5kb21RdWVzdGlvbjogcmVzcG9uc2VbaV0udGl0bGUucmVuZGVyZWQgfSk7XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRyZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0J2RpdicsXG5cdFx0XHR7IGNsYXNzTmFtZTogcHJvcHMuY2xhc3NOYW1lIH0sXG5cdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdCdwJyxcblx0XHRcdFx0bnVsbCxcblx0XHRcdFx0cHJvcHMuYXR0cmlidXRlcy5yYW5kb21RdWVzdGlvblxuXHRcdFx0KVxuXHRcdCk7XG5cdH0sXG5cblx0LyoqXG4gICogVGhlIHNhdmUgZnVuY3Rpb24gZGVmaW5lcyB0aGUgd2F5IGluIHdoaWNoIHRoZSBkaWZmZXJlbnQgYXR0cmlidXRlcyBzaG91bGQgYmUgY29tYmluZWRcbiAgKiBpbnRvIHRoZSBmaW5hbCBtYXJrdXAsIHdoaWNoIGlzIHRoZW4gc2VyaWFsaXplZCBieSBHdXRlbmJlcmcgaW50byBwb3N0X2NvbnRlbnQuXG4gICpcbiAgKiBUaGUgXCJzYXZlXCIgcHJvcGVydHkgbXVzdCBiZSBzcGVjaWZpZWQgYW5kIG11c3QgYmUgYSB2YWxpZCBmdW5jdGlvbi5cbiAgKlxuICAqIEBsaW5rIGh0dHBzOi8vd29yZHByZXNzLm9yZy9ndXRlbmJlcmcvaGFuZGJvb2svYmxvY2stYXBpL2Jsb2NrLWVkaXQtc2F2ZS9cbiAgKlxuICAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wcyBQcm9wcy5cbiAgKiBAcmV0dXJucyB7TWl4ZWR9IEpTWCBGcm9udGVuZCBIVE1MLlxuICAqL1xuXHRzYXZlOiBmdW5jdGlvbiBzYXZlKHByb3BzKSB7XG5cdFx0cmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdCdkaXYnLFxuXHRcdFx0eyBjbGFzc05hbWU6IHByb3BzLmNsYXNzTmFtZSB9LFxuXHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHQncCcsXG5cdFx0XHRcdG51bGwsXG5cdFx0XHRcdHByb3BzLmF0dHJpYnV0ZXMucmFuZG9tUXVlc3Rpb25cblx0XHRcdClcblx0XHQpO1xuXHR9XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9jay9ibG9jay5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!*********************************!*\
  !*** ./src/block/attributes.js ***!
  \*********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony default export */ __webpack_exports__[\"a\"] = ({\n\trandomQuestion: {\n\t\ttype: 'string',\n\t\tselector: 'p'\n\t}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9hdHRyaWJ1dGVzLmpzPzg4MDEiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xuXHRyYW5kb21RdWVzdGlvbjoge1xuXHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdHNlbGVjdG9yOiAncCdcblx0fVxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9jay9hdHRyaWJ1dGVzLmpzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!******************************!*\
  !*** external "wp.apiFetch" ***!
  \******************************/
/*! dynamic exports provided */
/*! exports used: default */
/***/ (function(module, exports) {

module.exports = wp.apiFetch;

/***/ })
/******/ ]);