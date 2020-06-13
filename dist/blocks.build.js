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
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__block_block_js__ = __webpack_require__(/*! ./block/block.js */ 1);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__block_block_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__block_block_js__);\n/**\n * Gutenberg Blocks\n *\n * All blocks related JavaScript files should be imported here.\n * You can create a new block folder in this dir and include code\n * for that block here as well.\n *\n * All blocks should be included here since this is the file that\n * Webpack is compiling as the input file.\n */\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MuanM/N2I1YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEd1dGVuYmVyZyBCbG9ja3NcbiAqXG4gKiBBbGwgYmxvY2tzIHJlbGF0ZWQgSmF2YVNjcmlwdCBmaWxlcyBzaG91bGQgYmUgaW1wb3J0ZWQgaGVyZS5cbiAqIFlvdSBjYW4gY3JlYXRlIGEgbmV3IGJsb2NrIGZvbGRlciBpbiB0aGlzIGRpciBhbmQgaW5jbHVkZSBjb2RlXG4gKiBmb3IgdGhhdCBibG9jayBoZXJlIGFzIHdlbGwuXG4gKlxuICogQWxsIGJsb2NrcyBzaG91bGQgYmUgaW5jbHVkZWQgaGVyZSBzaW5jZSB0aGlzIGlzIHRoZSBmaWxlIHRoYXRcbiAqIFdlYnBhY2sgaXMgY29tcGlsaW5nIGFzIHRoZSBpbnB1dCBmaWxlLlxuICovXG5cbmltcG9ydCAnLi9ibG9jay9ibG9jay5qcyc7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2tzLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!****************************!*\
  !*** ./src/block/block.js ***!
  \****************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("/**\n * BLOCK: icebreaker\n *\n * Registering a basic block with Gutenberg.\n * Simple block, renders and saves the same content without any interactivity.\n */\n\nvar __ = wp.i18n.__; // Import __() from wp.i18n\n\nvar registerBlockType = wp.blocks.registerBlockType; // Import registerBlockType() from wp.blocks\n// Import the element creator function (React abstraction layer)\n\nvar el = wp.element.createElement;\n\n/**\n * Example of a custom SVG path taken from fontastic\n*/\nvar iconEl = el('svg', { width: 24, height: 24, viewBox: \"0 0 100 100\" }, el('path', { d: \"M97.5,50c0,1.7-1.4,3.1-3.1,3.1h-8l4,4c1.2,1.2,1.2,3.2,0,4.4c-0.6,0.6-1.4,0.9-2.2,0.9c-0.8,0-1.6-0.3-2.2-0.9l-8.4-8.4  H57.4l14.3,14.3h11.9c1.7,0,3.1,1.4,3.1,3.1s-1.4,3.1-3.1,3.1H78l5.6,5.6c1.2,1.2,1.2,3.2,0,4.4c-0.6,0.6-1.4,0.9-2.2,0.9  s-1.6-0.3-2.2-0.9L73.6,78v5.7c0,1.7-1.4,3.1-3.1,3.1s-3.1-1.4-3.1-3.1V71.8L53.1,57.4v20.1l8.4,8.4c1.2,1.2,1.2,3.2,0,4.4  c-0.6,0.6-1.4,0.9-2.2,0.9c-0.8,0-1.6-0.3-2.2-0.9l-4-4v8.2c0,1.7-1.4,3.1-3.1,3.1s-3.1-1.4-3.1-3.1v-8.2l-4,4  c-0.6,0.6-1.4,0.9-2.2,0.9s-1.6-0.3-2.2-0.9c-1.2-1.2-1.2-3.2,0-4.4l8.4-8.4v-20L32.7,71.8v11.9c0,1.7-1.4,3.1-3.1,3.1  c-1.7,0-3.1-1.4-3.1-3.1V78l-5.6,5.6c-0.6,0.6-1.4,0.9-2.2,0.9c-0.8,0-1.6-0.3-2.2-0.9c-1.2-1.2-1.2-3.2,0-4.4l5.6-5.6h-5.7  c-1.7,0-3.1-1.4-3.1-3.1s1.4-3.1,3.1-3.1h11.9l14.3-14.3H22.5l-8.4,8.4c-0.6,0.6-1.4,0.9-2.2,0.9c-0.8,0-1.6-0.3-2.2-0.9  c-1.2-1.2-1.2-3.2,0-4.4l4-4H5.6c-1.7,0-3.1-1.4-3.1-3.1s1.4-3.1,3.1-3.1h8.2l-4-4c-1.2-1.2-1.2-3.2,0-4.4c1.2-1.2,3.2-1.2,4.4,0  l8.4,8.4h20.1L28.4,32.7H16.5c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1h5.7l-5.8-5.8c-1.2-1.2-1.2-3.2,0-4.4  c1.2-1.2,3.2-1.2,4.4,0l5.8,5.8v-5.7c0-1.7,1.4-3.1,3.1-3.1c1.7,0,3.1,1.4,3.1,3.1v11.9l14.2,14.2V22.3l-8.4-8.4  c-1.2-1.2-1.2-3.2,0-4.4c1.2-1.2,3.2-1.2,4.4,0l4,4v-8c0-1.7,1.4-3.1,3.1-3.1s3.1,1.4,3.1,3.1v8l4-4c1.2-1.2,3.2-1.2,4.4,0  c1.2,1.2,1.2,3.2,0,4.4l-8.4,8.4v20.4l14.3-14.3V16.5c0-1.7,1.4-3.1,3.1-3.1s3.1,1.4,3.1,3.1v5.7l5.8-5.8c1.2-1.2,3.2-1.2,4.4,0  c1.2,1.2,1.2,3.2,0,4.4L78,26.5h5.7c1.7,0,3.1,1.4,3.1,3.1c0,1.7-1.4,3.1-3.1,3.1H71.8L57.6,46.9h20.1l8.4-8.4  c1.2-1.2,3.2-1.2,4.4,0c1.2,1.2,1.2,3.2,0,4.4l-4,4h8C96.1,46.9,97.5,48.3,97.5,50z\" }));\n/**\n * Register: aa Gutenberg Block.\n *\n * Registers a new block provided a unique name and an object defining its\n * behavior. Once registered, the block is made editor as an option to any\n * editor interface where blocks are implemented.\n *\n * @link https://wordpress.org/gutenberg/handbook/block-api/\n * @param  {string}   name     Block name.\n * @param  {Object}   settings Block settings.\n * @return {?WPBlock}          The block, if it has been successfully\n *                             registered; otherwise `undefined`.\n */\nregisterBlockType('jw/block-icebreaker', {\n\t// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.\n\ttitle: __('Icebreaker - random'), // Block title.\n\ticon: iconEl,\n\tcategory: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.\n\tkeywords: [__('Icebreaker — random'), __('Icebreaker'), __('random')],\n\n\t/**\n  * The edit function describes the structure of your block in the context of the editor.\n  * This represents what the editor will render when the block is used.\n  *\n  * The \"edit\" property must be a valid function.\n  *\n  * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/\n  *\n  * @param {Object} props Props.\n  * @returns {Mixed} JSX Component.\n  */\n\tedit: function edit(props) {\n\t\t// Creates a <p class='wp-block-cgb-block-icebreaker'></p>.\n\t\treturn wp.element.createElement(\n\t\t\t'div',\n\t\t\t{ className: props.className },\n\t\t\twp.element.createElement(\n\t\t\t\t'p',\n\t\t\t\tnull,\n\t\t\t\t'Icebreaker placeholder'\n\t\t\t)\n\t\t);\n\t},\n\n\t/**\n  * The save function defines the way in which the different attributes should be combined\n  * into the final markup, which is then serialized by Gutenberg into post_content.\n  *\n  * The \"save\" property must be specified and must be a valid function.\n  *\n  * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/\n  *\n  * @param {Object} props Props.\n  * @returns {Mixed} JSX Frontend HTML.\n  */\n\tsave: function save(props) {\n\t\treturn wp.element.createElement(\n\t\t\t'div',\n\t\t\t{ className: props.className },\n\t\t\twp.element.createElement(\n\t\t\t\t'p',\n\t\t\t\tnull,\n\t\t\t\t'Icebreaker frontend.'\n\t\t\t)\n\t\t);\n\t}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9ibG9jay5qcz85MjFkIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQkxPQ0s6IGljZWJyZWFrZXJcbiAqXG4gKiBSZWdpc3RlcmluZyBhIGJhc2ljIGJsb2NrIHdpdGggR3V0ZW5iZXJnLlxuICogU2ltcGxlIGJsb2NrLCByZW5kZXJzIGFuZCBzYXZlcyB0aGUgc2FtZSBjb250ZW50IHdpdGhvdXQgYW55IGludGVyYWN0aXZpdHkuXG4gKi9cblxudmFyIF9fID0gd3AuaTE4bi5fXzsgLy8gSW1wb3J0IF9fKCkgZnJvbSB3cC5pMThuXG5cbnZhciByZWdpc3RlckJsb2NrVHlwZSA9IHdwLmJsb2Nrcy5yZWdpc3RlckJsb2NrVHlwZTsgLy8gSW1wb3J0IHJlZ2lzdGVyQmxvY2tUeXBlKCkgZnJvbSB3cC5ibG9ja3Ncbi8vIEltcG9ydCB0aGUgZWxlbWVudCBjcmVhdG9yIGZ1bmN0aW9uIChSZWFjdCBhYnN0cmFjdGlvbiBsYXllcilcblxudmFyIGVsID0gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50O1xuXG4vKipcbiAqIEV4YW1wbGUgb2YgYSBjdXN0b20gU1ZHIHBhdGggdGFrZW4gZnJvbSBmb250YXN0aWNcbiovXG52YXIgaWNvbkVsID0gZWwoJ3N2ZycsIHsgd2lkdGg6IDI0LCBoZWlnaHQ6IDI0LCB2aWV3Qm94OiBcIjAgMCAxMDAgMTAwXCIgfSwgZWwoJ3BhdGgnLCB7IGQ6IFwiTTk3LjUsNTBjMCwxLjctMS40LDMuMS0zLjEsMy4xaC04bDQsNGMxLjIsMS4yLDEuMiwzLjIsMCw0LjRjLTAuNiwwLjYtMS40LDAuOS0yLjIsMC45Yy0wLjgsMC0xLjYtMC4zLTIuMi0wLjlsLTguNC04LjQgIEg1Ny40bDE0LjMsMTQuM2gxMS45YzEuNywwLDMuMSwxLjQsMy4xLDMuMXMtMS40LDMuMS0zLjEsMy4xSDc4bDUuNiw1LjZjMS4yLDEuMiwxLjIsMy4yLDAsNC40Yy0wLjYsMC42LTEuNCwwLjktMi4yLDAuOSAgcy0xLjYtMC4zLTIuMi0wLjlMNzMuNiw3OHY1LjdjMCwxLjctMS40LDMuMS0zLjEsMy4xcy0zLjEtMS40LTMuMS0zLjFWNzEuOEw1My4xLDU3LjR2MjAuMWw4LjQsOC40YzEuMiwxLjIsMS4yLDMuMiwwLDQuNCAgYy0wLjYsMC42LTEuNCwwLjktMi4yLDAuOWMtMC44LDAtMS42LTAuMy0yLjItMC45bC00LTR2OC4yYzAsMS43LTEuNCwzLjEtMy4xLDMuMXMtMy4xLTEuNC0zLjEtMy4xdi04LjJsLTQsNCAgYy0wLjYsMC42LTEuNCwwLjktMi4yLDAuOXMtMS42LTAuMy0yLjItMC45Yy0xLjItMS4yLTEuMi0zLjIsMC00LjRsOC40LTguNHYtMjBMMzIuNyw3MS44djExLjljMCwxLjctMS40LDMuMS0zLjEsMy4xICBjLTEuNywwLTMuMS0xLjQtMy4xLTMuMVY3OGwtNS42LDUuNmMtMC42LDAuNi0xLjQsMC45LTIuMiwwLjljLTAuOCwwLTEuNi0wLjMtMi4yLTAuOWMtMS4yLTEuMi0xLjItMy4yLDAtNC40bDUuNi01LjZoLTUuNyAgYy0xLjcsMC0zLjEtMS40LTMuMS0zLjFzMS40LTMuMSwzLjEtMy4xaDExLjlsMTQuMy0xNC4zSDIyLjVsLTguNCw4LjRjLTAuNiwwLjYtMS40LDAuOS0yLjIsMC45Yy0wLjgsMC0xLjYtMC4zLTIuMi0wLjkgIGMtMS4yLTEuMi0xLjItMy4yLDAtNC40bDQtNEg1LjZjLTEuNywwLTMuMS0xLjQtMy4xLTMuMXMxLjQtMy4xLDMuMS0zLjFoOC4ybC00LTRjLTEuMi0xLjItMS4yLTMuMiwwLTQuNGMxLjItMS4yLDMuMi0xLjIsNC40LDAgIGw4LjQsOC40aDIwLjFMMjguNCwzMi43SDE2LjVjLTEuNywwLTMuMS0xLjQtMy4xLTMuMWMwLTEuNywxLjQtMy4xLDMuMS0zLjFoNS43bC01LjgtNS44Yy0xLjItMS4yLTEuMi0zLjIsMC00LjQgIGMxLjItMS4yLDMuMi0xLjIsNC40LDBsNS44LDUuOHYtNS43YzAtMS43LDEuNC0zLjEsMy4xLTMuMWMxLjcsMCwzLjEsMS40LDMuMSwzLjF2MTEuOWwxNC4yLDE0LjJWMjIuM2wtOC40LTguNCAgYy0xLjItMS4yLTEuMi0zLjIsMC00LjRjMS4yLTEuMiwzLjItMS4yLDQuNCwwbDQsNHYtOGMwLTEuNywxLjQtMy4xLDMuMS0zLjFzMy4xLDEuNCwzLjEsMy4xdjhsNC00YzEuMi0xLjIsMy4yLTEuMiw0LjQsMCAgYzEuMiwxLjIsMS4yLDMuMiwwLDQuNGwtOC40LDguNHYyMC40bDE0LjMtMTQuM1YxNi41YzAtMS43LDEuNC0zLjEsMy4xLTMuMXMzLjEsMS40LDMuMSwzLjF2NS43bDUuOC01LjhjMS4yLTEuMiwzLjItMS4yLDQuNCwwICBjMS4yLDEuMiwxLjIsMy4yLDAsNC40TDc4LDI2LjVoNS43YzEuNywwLDMuMSwxLjQsMy4xLDMuMWMwLDEuNy0xLjQsMy4xLTMuMSwzLjFINzEuOEw1Ny42LDQ2LjloMjAuMWw4LjQtOC40ICBjMS4yLTEuMiwzLjItMS4yLDQuNCwwYzEuMiwxLjIsMS4yLDMuMiwwLDQuNGwtNCw0aDhDOTYuMSw0Ni45LDk3LjUsNDguMyw5Ny41LDUwelwiIH0pKTtcbi8qKlxuICogUmVnaXN0ZXI6IGFhIEd1dGVuYmVyZyBCbG9jay5cbiAqXG4gKiBSZWdpc3RlcnMgYSBuZXcgYmxvY2sgcHJvdmlkZWQgYSB1bmlxdWUgbmFtZSBhbmQgYW4gb2JqZWN0IGRlZmluaW5nIGl0c1xuICogYmVoYXZpb3IuIE9uY2UgcmVnaXN0ZXJlZCwgdGhlIGJsb2NrIGlzIG1hZGUgZWRpdG9yIGFzIGFuIG9wdGlvbiB0byBhbnlcbiAqIGVkaXRvciBpbnRlcmZhY2Ugd2hlcmUgYmxvY2tzIGFyZSBpbXBsZW1lbnRlZC5cbiAqXG4gKiBAbGluayBodHRwczovL3dvcmRwcmVzcy5vcmcvZ3V0ZW5iZXJnL2hhbmRib29rL2Jsb2NrLWFwaS9cbiAqIEBwYXJhbSAge3N0cmluZ30gICBuYW1lICAgICBCbG9jayBuYW1lLlxuICogQHBhcmFtICB7T2JqZWN0fSAgIHNldHRpbmdzIEJsb2NrIHNldHRpbmdzLlxuICogQHJldHVybiB7P1dQQmxvY2t9ICAgICAgICAgIFRoZSBibG9jaywgaWYgaXQgaGFzIGJlZW4gc3VjY2Vzc2Z1bGx5XG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVnaXN0ZXJlZDsgb3RoZXJ3aXNlIGB1bmRlZmluZWRgLlxuICovXG5yZWdpc3RlckJsb2NrVHlwZSgnancvYmxvY2staWNlYnJlYWtlcicsIHtcblx0Ly8gQmxvY2sgbmFtZS4gQmxvY2sgbmFtZXMgbXVzdCBiZSBzdHJpbmcgdGhhdCBjb250YWlucyBhIG5hbWVzcGFjZSBwcmVmaXguIEV4YW1wbGU6IG15LXBsdWdpbi9teS1jdXN0b20tYmxvY2suXG5cdHRpdGxlOiBfXygnSWNlYnJlYWtlciAtIHJhbmRvbScpLCAvLyBCbG9jayB0aXRsZS5cblx0aWNvbjogaWNvbkVsLFxuXHRjYXRlZ29yeTogJ2NvbW1vbicsIC8vIEJsb2NrIGNhdGVnb3J5IOKAlCBHcm91cCBibG9ja3MgdG9nZXRoZXIgYmFzZWQgb24gY29tbW9uIHRyYWl0cyBFLmcuIGNvbW1vbiwgZm9ybWF0dGluZywgbGF5b3V0IHdpZGdldHMsIGVtYmVkLlxuXHRrZXl3b3JkczogW19fKCdJY2VicmVha2VyIOKAlCByYW5kb20nKSwgX18oJ0ljZWJyZWFrZXInKSwgX18oJ3JhbmRvbScpXSxcblxuXHQvKipcbiAgKiBUaGUgZWRpdCBmdW5jdGlvbiBkZXNjcmliZXMgdGhlIHN0cnVjdHVyZSBvZiB5b3VyIGJsb2NrIGluIHRoZSBjb250ZXh0IG9mIHRoZSBlZGl0b3IuXG4gICogVGhpcyByZXByZXNlbnRzIHdoYXQgdGhlIGVkaXRvciB3aWxsIHJlbmRlciB3aGVuIHRoZSBibG9jayBpcyB1c2VkLlxuICAqXG4gICogVGhlIFwiZWRpdFwiIHByb3BlcnR5IG11c3QgYmUgYSB2YWxpZCBmdW5jdGlvbi5cbiAgKlxuICAqIEBsaW5rIGh0dHBzOi8vd29yZHByZXNzLm9yZy9ndXRlbmJlcmcvaGFuZGJvb2svYmxvY2stYXBpL2Jsb2NrLWVkaXQtc2F2ZS9cbiAgKlxuICAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wcyBQcm9wcy5cbiAgKiBAcmV0dXJucyB7TWl4ZWR9IEpTWCBDb21wb25lbnQuXG4gICovXG5cdGVkaXQ6IGZ1bmN0aW9uIGVkaXQocHJvcHMpIHtcblx0XHQvLyBDcmVhdGVzIGEgPHAgY2xhc3M9J3dwLWJsb2NrLWNnYi1ibG9jay1pY2VicmVha2VyJz48L3A+LlxuXHRcdHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHQnZGl2Jyxcblx0XHRcdHsgY2xhc3NOYW1lOiBwcm9wcy5jbGFzc05hbWUgfSxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0J3AnLFxuXHRcdFx0XHRudWxsLFxuXHRcdFx0XHQnSWNlYnJlYWtlciBwbGFjZWhvbGRlcidcblx0XHRcdClcblx0XHQpO1xuXHR9LFxuXG5cdC8qKlxuICAqIFRoZSBzYXZlIGZ1bmN0aW9uIGRlZmluZXMgdGhlIHdheSBpbiB3aGljaCB0aGUgZGlmZmVyZW50IGF0dHJpYnV0ZXMgc2hvdWxkIGJlIGNvbWJpbmVkXG4gICogaW50byB0aGUgZmluYWwgbWFya3VwLCB3aGljaCBpcyB0aGVuIHNlcmlhbGl6ZWQgYnkgR3V0ZW5iZXJnIGludG8gcG9zdF9jb250ZW50LlxuICAqXG4gICogVGhlIFwic2F2ZVwiIHByb3BlcnR5IG11c3QgYmUgc3BlY2lmaWVkIGFuZCBtdXN0IGJlIGEgdmFsaWQgZnVuY3Rpb24uXG4gICpcbiAgKiBAbGluayBodHRwczovL3dvcmRwcmVzcy5vcmcvZ3V0ZW5iZXJnL2hhbmRib29rL2Jsb2NrLWFwaS9ibG9jay1lZGl0LXNhdmUvXG4gICpcbiAgKiBAcGFyYW0ge09iamVjdH0gcHJvcHMgUHJvcHMuXG4gICogQHJldHVybnMge01peGVkfSBKU1ggRnJvbnRlbmQgSFRNTC5cbiAgKi9cblx0c2F2ZTogZnVuY3Rpb24gc2F2ZShwcm9wcykge1xuXHRcdHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHQnZGl2Jyxcblx0XHRcdHsgY2xhc3NOYW1lOiBwcm9wcy5jbGFzc05hbWUgfSxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0J3AnLFxuXHRcdFx0XHRudWxsLFxuXHRcdFx0XHQnSWNlYnJlYWtlciBmcm9udGVuZC4nXG5cdFx0XHQpXG5cdFx0KTtcblx0fVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2svYmxvY2suanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n");

/***/ })
/******/ ]);