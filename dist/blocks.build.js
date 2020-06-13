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
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__attributes__ = __webpack_require__(/*! ./attributes */ 2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wordpress_api_fetch__ = __webpack_require__(/*! @wordpress/api-fetch */ 3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wordpress_api_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__wordpress_api_fetch__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wordpress_components__ = __webpack_require__(/*! @wordpress/components */ 4);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wordpress_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__wordpress_components__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__wordpress_block_editor__ = __webpack_require__(/*! @wordpress/block-editor */ 5);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__wordpress_block_editor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__wordpress_block_editor__);\n/**\n * BLOCK: icebreaker\n *\n * Registering a basic block with Gutenberg.\n * Simple block, renders and saves the same content without any interactivity.\n */\n\nvar __ = wp.i18n.__; // Import __() from wp.i18n\n\n\n\n\n\n\nvar registerBlockType = wp.blocks.registerBlockType; // Import registerBlockType() from wp.blocks\n// Import the element creator function (React abstraction layer)\n\nvar el = wp.element.createElement;\n/**\n * Snowflake SVG path\n*/\nvar iconEl = el('svg', { width: 24, height: 24, viewBox: \"0 0 100 100\" }, el('path', { d: \"M97.5,50c0,1.7-1.4,3.1-3.1,3.1h-8l4,4c1.2,1.2,1.2,3.2,0,4.4c-0.6,0.6-1.4,0.9-2.2,0.9c-0.8,0-1.6-0.3-2.2-0.9l-8.4-8.4  H57.4l14.3,14.3h11.9c1.7,0,3.1,1.4,3.1,3.1s-1.4,3.1-3.1,3.1H78l5.6,5.6c1.2,1.2,1.2,3.2,0,4.4c-0.6,0.6-1.4,0.9-2.2,0.9  s-1.6-0.3-2.2-0.9L73.6,78v5.7c0,1.7-1.4,3.1-3.1,3.1s-3.1-1.4-3.1-3.1V71.8L53.1,57.4v20.1l8.4,8.4c1.2,1.2,1.2,3.2,0,4.4  c-0.6,0.6-1.4,0.9-2.2,0.9c-0.8,0-1.6-0.3-2.2-0.9l-4-4v8.2c0,1.7-1.4,3.1-3.1,3.1s-3.1-1.4-3.1-3.1v-8.2l-4,4  c-0.6,0.6-1.4,0.9-2.2,0.9s-1.6-0.3-2.2-0.9c-1.2-1.2-1.2-3.2,0-4.4l8.4-8.4v-20L32.7,71.8v11.9c0,1.7-1.4,3.1-3.1,3.1  c-1.7,0-3.1-1.4-3.1-3.1V78l-5.6,5.6c-0.6,0.6-1.4,0.9-2.2,0.9c-0.8,0-1.6-0.3-2.2-0.9c-1.2-1.2-1.2-3.2,0-4.4l5.6-5.6h-5.7  c-1.7,0-3.1-1.4-3.1-3.1s1.4-3.1,3.1-3.1h11.9l14.3-14.3H22.5l-8.4,8.4c-0.6,0.6-1.4,0.9-2.2,0.9c-0.8,0-1.6-0.3-2.2-0.9  c-1.2-1.2-1.2-3.2,0-4.4l4-4H5.6c-1.7,0-3.1-1.4-3.1-3.1s1.4-3.1,3.1-3.1h8.2l-4-4c-1.2-1.2-1.2-3.2,0-4.4c1.2-1.2,3.2-1.2,4.4,0  l8.4,8.4h20.1L28.4,32.7H16.5c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1h5.7l-5.8-5.8c-1.2-1.2-1.2-3.2,0-4.4  c1.2-1.2,3.2-1.2,4.4,0l5.8,5.8v-5.7c0-1.7,1.4-3.1,3.1-3.1c1.7,0,3.1,1.4,3.1,3.1v11.9l14.2,14.2V22.3l-8.4-8.4  c-1.2-1.2-1.2-3.2,0-4.4c1.2-1.2,3.2-1.2,4.4,0l4,4v-8c0-1.7,1.4-3.1,3.1-3.1s3.1,1.4,3.1,3.1v8l4-4c1.2-1.2,3.2-1.2,4.4,0  c1.2,1.2,1.2,3.2,0,4.4l-8.4,8.4v20.4l14.3-14.3V16.5c0-1.7,1.4-3.1,3.1-3.1s3.1,1.4,3.1,3.1v5.7l5.8-5.8c1.2-1.2,3.2-1.2,4.4,0  c1.2,1.2,1.2,3.2,0,4.4L78,26.5h5.7c1.7,0,3.1,1.4,3.1,3.1c0,1.7-1.4,3.1-3.1,3.1H71.8L57.6,46.9h20.1l8.4-8.4  c1.2-1.2,3.2-1.2,4.4,0c1.2,1.2,1.2,3.2,0,4.4l-4,4h8C96.1,46.9,97.5,48.3,97.5,50z\" }));\n\nfunction getRandomIntInclusive(min, max) {\n\tmin = Math.ceil(min);\n\tmax = Math.floor(max);\n\treturn Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive \n}\n\nfunction getNewQuestion(props) {\n\tvar setAttributes = props.setAttributes;\n\n\n\t__WEBPACK_IMPORTED_MODULE_1__wordpress_api_fetch___default()({ path: '/wp/v2/icebreakers' }).then(function (response) {\n\t\tvar i = getRandomIntInclusive(0, response.length - 1);\n\t\tsetAttributes({ randomQuestion: response[i].title.rendered });\n\t});\n}\n/**\n * Register: Random icebreaker question Gutenberg Block.\n *\n * Registers a new block provided a unique name and an object defining its\n * behavior. Once registered, the block is made editor as an option to any\n * editor interface where blocks are implemented.\n *\n * @link https://wordpress.org/gutenberg/handbook/block-api/\n * @param  {string}   name     Block name.\n * @param  {Object}   settings Block settings.\n * @return {?WPBlock}          The block, if it has been successfully\n *                             registered; otherwise `undefined`.\n */\nregisterBlockType('jw/icebreaker', {\n\t// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.\n\ttitle: __('Icebreaker - random'), // Block title.\n\ticon: iconEl,\n\tcategory: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.\n\tkeywords: [__('Icebreaker — random'), __('Icebreaker'), __('random')],\n\n\tattributes: __WEBPACK_IMPORTED_MODULE_0__attributes__[\"a\" /* default */],\n\n\t/**\n  * The edit function describes the structure of your block in the context of the editor.\n  * This represents what the editor will render when the block is used.\n  *\n  * The \"edit\" property must be a valid function.\n  *\n  * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/\n  *\n  * @param {Object} props Props.\n  * @returns {Mixed} JSX Component.\n  */\n\tedit: function edit(props) {\n\n\t\tif (props.attributes.randomQuestion === undefined) {\n\t\t\tgetNewQuestion(props);\n\t\t}\n\n\t\treturn wp.element.createElement(\n\t\t\tReact.Fragment,\n\t\t\tnull,\n\t\t\twp.element.createElement(\n\t\t\t\t__WEBPACK_IMPORTED_MODULE_3__wordpress_block_editor__[\"BlockControls\"],\n\t\t\t\tnull,\n\t\t\t\twp.element.createElement(\n\t\t\t\t\t__WEBPACK_IMPORTED_MODULE_2__wordpress_components__[\"Toolbar\"],\n\t\t\t\t\tnull,\n\t\t\t\t\twp.element.createElement(__WEBPACK_IMPORTED_MODULE_2__wordpress_components__[\"Button\"], {\n\t\t\t\t\t\tlabel: 'Pick a new random question',\n\t\t\t\t\t\ticon: 'controls-repeat',\n\t\t\t\t\t\tclassName: 'jwicebreaker-refresh-button',\n\t\t\t\t\t\tonClick: function onClick() {\n\t\t\t\t\t\t\treturn getNewQuestion(props);\n\t\t\t\t\t\t}\n\t\t\t\t\t})\n\t\t\t\t)\n\t\t\t),\n\t\t\twp.element.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ className: props.className },\n\t\t\t\twp.element.createElement(\n\t\t\t\t\t'p',\n\t\t\t\t\tnull,\n\t\t\t\t\tprops.attributes.randomQuestion\n\t\t\t\t)\n\t\t\t)\n\t\t);\n\t},\n\n\t/**\n  * The save function defines the way in which the different attributes should be combined\n  * into the final markup, which is then serialized by Gutenberg into post_content.\n  *\n  * The \"save\" property must be specified and must be a valid function.\n  *\n  * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/\n  *\n  * @param {Object} props Props.\n  * @returns {Mixed} JSX Frontend HTML.\n  */\n\tsave: function save(props) {\n\t\treturn wp.element.createElement(\n\t\t\t'div',\n\t\t\t{ className: props.className },\n\t\t\twp.element.createElement(\n\t\t\t\t'p',\n\t\t\t\tnull,\n\t\t\t\tprops.attributes.randomQuestion\n\t\t\t)\n\t\t);\n\t}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9ibG9jay5qcz85MjFkIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQkxPQ0s6IGljZWJyZWFrZXJcbiAqXG4gKiBSZWdpc3RlcmluZyBhIGJhc2ljIGJsb2NrIHdpdGggR3V0ZW5iZXJnLlxuICogU2ltcGxlIGJsb2NrLCByZW5kZXJzIGFuZCBzYXZlcyB0aGUgc2FtZSBjb250ZW50IHdpdGhvdXQgYW55IGludGVyYWN0aXZpdHkuXG4gKi9cblxudmFyIF9fID0gd3AuaTE4bi5fXzsgLy8gSW1wb3J0IF9fKCkgZnJvbSB3cC5pMThuXG5cbmltcG9ydCBhdHRyaWJ1dGVzIGZyb20gJy4vYXR0cmlidXRlcyc7XG5pbXBvcnQgYXBpRmV0Y2ggZnJvbSAnQHdvcmRwcmVzcy9hcGktZmV0Y2gnO1xuaW1wb3J0IHsgVG9vbGJhciwgQnV0dG9uIH0gZnJvbSAnQHdvcmRwcmVzcy9jb21wb25lbnRzJztcbmltcG9ydCB7IEJsb2NrQ29udHJvbHMgfSBmcm9tICdAd29yZHByZXNzL2Jsb2NrLWVkaXRvcic7XG5cbnZhciByZWdpc3RlckJsb2NrVHlwZSA9IHdwLmJsb2Nrcy5yZWdpc3RlckJsb2NrVHlwZTsgLy8gSW1wb3J0IHJlZ2lzdGVyQmxvY2tUeXBlKCkgZnJvbSB3cC5ibG9ja3Ncbi8vIEltcG9ydCB0aGUgZWxlbWVudCBjcmVhdG9yIGZ1bmN0aW9uIChSZWFjdCBhYnN0cmFjdGlvbiBsYXllcilcblxudmFyIGVsID0gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50O1xuLyoqXG4gKiBTbm93Zmxha2UgU1ZHIHBhdGhcbiovXG52YXIgaWNvbkVsID0gZWwoJ3N2ZycsIHsgd2lkdGg6IDI0LCBoZWlnaHQ6IDI0LCB2aWV3Qm94OiBcIjAgMCAxMDAgMTAwXCIgfSwgZWwoJ3BhdGgnLCB7IGQ6IFwiTTk3LjUsNTBjMCwxLjctMS40LDMuMS0zLjEsMy4xaC04bDQsNGMxLjIsMS4yLDEuMiwzLjIsMCw0LjRjLTAuNiwwLjYtMS40LDAuOS0yLjIsMC45Yy0wLjgsMC0xLjYtMC4zLTIuMi0wLjlsLTguNC04LjQgIEg1Ny40bDE0LjMsMTQuM2gxMS45YzEuNywwLDMuMSwxLjQsMy4xLDMuMXMtMS40LDMuMS0zLjEsMy4xSDc4bDUuNiw1LjZjMS4yLDEuMiwxLjIsMy4yLDAsNC40Yy0wLjYsMC42LTEuNCwwLjktMi4yLDAuOSAgcy0xLjYtMC4zLTIuMi0wLjlMNzMuNiw3OHY1LjdjMCwxLjctMS40LDMuMS0zLjEsMy4xcy0zLjEtMS40LTMuMS0zLjFWNzEuOEw1My4xLDU3LjR2MjAuMWw4LjQsOC40YzEuMiwxLjIsMS4yLDMuMiwwLDQuNCAgYy0wLjYsMC42LTEuNCwwLjktMi4yLDAuOWMtMC44LDAtMS42LTAuMy0yLjItMC45bC00LTR2OC4yYzAsMS43LTEuNCwzLjEtMy4xLDMuMXMtMy4xLTEuNC0zLjEtMy4xdi04LjJsLTQsNCAgYy0wLjYsMC42LTEuNCwwLjktMi4yLDAuOXMtMS42LTAuMy0yLjItMC45Yy0xLjItMS4yLTEuMi0zLjIsMC00LjRsOC40LTguNHYtMjBMMzIuNyw3MS44djExLjljMCwxLjctMS40LDMuMS0zLjEsMy4xICBjLTEuNywwLTMuMS0xLjQtMy4xLTMuMVY3OGwtNS42LDUuNmMtMC42LDAuNi0xLjQsMC45LTIuMiwwLjljLTAuOCwwLTEuNi0wLjMtMi4yLTAuOWMtMS4yLTEuMi0xLjItMy4yLDAtNC40bDUuNi01LjZoLTUuNyAgYy0xLjcsMC0zLjEtMS40LTMuMS0zLjFzMS40LTMuMSwzLjEtMy4xaDExLjlsMTQuMy0xNC4zSDIyLjVsLTguNCw4LjRjLTAuNiwwLjYtMS40LDAuOS0yLjIsMC45Yy0wLjgsMC0xLjYtMC4zLTIuMi0wLjkgIGMtMS4yLTEuMi0xLjItMy4yLDAtNC40bDQtNEg1LjZjLTEuNywwLTMuMS0xLjQtMy4xLTMuMXMxLjQtMy4xLDMuMS0zLjFoOC4ybC00LTRjLTEuMi0xLjItMS4yLTMuMiwwLTQuNGMxLjItMS4yLDMuMi0xLjIsNC40LDAgIGw4LjQsOC40aDIwLjFMMjguNCwzMi43SDE2LjVjLTEuNywwLTMuMS0xLjQtMy4xLTMuMWMwLTEuNywxLjQtMy4xLDMuMS0zLjFoNS43bC01LjgtNS44Yy0xLjItMS4yLTEuMi0zLjIsMC00LjQgIGMxLjItMS4yLDMuMi0xLjIsNC40LDBsNS44LDUuOHYtNS43YzAtMS43LDEuNC0zLjEsMy4xLTMuMWMxLjcsMCwzLjEsMS40LDMuMSwzLjF2MTEuOWwxNC4yLDE0LjJWMjIuM2wtOC40LTguNCAgYy0xLjItMS4yLTEuMi0zLjIsMC00LjRjMS4yLTEuMiwzLjItMS4yLDQuNCwwbDQsNHYtOGMwLTEuNywxLjQtMy4xLDMuMS0zLjFzMy4xLDEuNCwzLjEsMy4xdjhsNC00YzEuMi0xLjIsMy4yLTEuMiw0LjQsMCAgYzEuMiwxLjIsMS4yLDMuMiwwLDQuNGwtOC40LDguNHYyMC40bDE0LjMtMTQuM1YxNi41YzAtMS43LDEuNC0zLjEsMy4xLTMuMXMzLjEsMS40LDMuMSwzLjF2NS43bDUuOC01LjhjMS4yLTEuMiwzLjItMS4yLDQuNCwwICBjMS4yLDEuMiwxLjIsMy4yLDAsNC40TDc4LDI2LjVoNS43YzEuNywwLDMuMSwxLjQsMy4xLDMuMWMwLDEuNy0xLjQsMy4xLTMuMSwzLjFINzEuOEw1Ny42LDQ2LjloMjAuMWw4LjQtOC40ICBjMS4yLTEuMiwzLjItMS4yLDQuNCwwYzEuMiwxLjIsMS4yLDMuMiwwLDQuNGwtNCw0aDhDOTYuMSw0Ni45LDk3LjUsNDguMyw5Ny41LDUwelwiIH0pKTtcblxuZnVuY3Rpb24gZ2V0UmFuZG9tSW50SW5jbHVzaXZlKG1pbiwgbWF4KSB7XG5cdG1pbiA9IE1hdGguY2VpbChtaW4pO1xuXHRtYXggPSBNYXRoLmZsb29yKG1heCk7XG5cdHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluOyAvL1RoZSBtYXhpbXVtIGlzIGluY2x1c2l2ZSBhbmQgdGhlIG1pbmltdW0gaXMgaW5jbHVzaXZlIFxufVxuXG5mdW5jdGlvbiBnZXROZXdRdWVzdGlvbihwcm9wcykge1xuXHR2YXIgc2V0QXR0cmlidXRlcyA9IHByb3BzLnNldEF0dHJpYnV0ZXM7XG5cblxuXHRhcGlGZXRjaCh7IHBhdGg6ICcvd3AvdjIvaWNlYnJlYWtlcnMnIH0pLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG5cdFx0dmFyIGkgPSBnZXRSYW5kb21JbnRJbmNsdXNpdmUoMCwgcmVzcG9uc2UubGVuZ3RoIC0gMSk7XG5cdFx0c2V0QXR0cmlidXRlcyh7IHJhbmRvbVF1ZXN0aW9uOiByZXNwb25zZVtpXS50aXRsZS5yZW5kZXJlZCB9KTtcblx0fSk7XG59XG4vKipcbiAqIFJlZ2lzdGVyOiBSYW5kb20gaWNlYnJlYWtlciBxdWVzdGlvbiBHdXRlbmJlcmcgQmxvY2suXG4gKlxuICogUmVnaXN0ZXJzIGEgbmV3IGJsb2NrIHByb3ZpZGVkIGEgdW5pcXVlIG5hbWUgYW5kIGFuIG9iamVjdCBkZWZpbmluZyBpdHNcbiAqIGJlaGF2aW9yLiBPbmNlIHJlZ2lzdGVyZWQsIHRoZSBibG9jayBpcyBtYWRlIGVkaXRvciBhcyBhbiBvcHRpb24gdG8gYW55XG4gKiBlZGl0b3IgaW50ZXJmYWNlIHdoZXJlIGJsb2NrcyBhcmUgaW1wbGVtZW50ZWQuXG4gKlxuICogQGxpbmsgaHR0cHM6Ly93b3JkcHJlc3Mub3JnL2d1dGVuYmVyZy9oYW5kYm9vay9ibG9jay1hcGkvXG4gKiBAcGFyYW0gIHtzdHJpbmd9ICAgbmFtZSAgICAgQmxvY2sgbmFtZS5cbiAqIEBwYXJhbSAge09iamVjdH0gICBzZXR0aW5ncyBCbG9jayBzZXR0aW5ncy5cbiAqIEByZXR1cm4gez9XUEJsb2NrfSAgICAgICAgICBUaGUgYmxvY2ssIGlmIGl0IGhhcyBiZWVuIHN1Y2Nlc3NmdWxseVxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZ2lzdGVyZWQ7IG90aGVyd2lzZSBgdW5kZWZpbmVkYC5cbiAqL1xucmVnaXN0ZXJCbG9ja1R5cGUoJ2p3L2ljZWJyZWFrZXInLCB7XG5cdC8vIEJsb2NrIG5hbWUuIEJsb2NrIG5hbWVzIG11c3QgYmUgc3RyaW5nIHRoYXQgY29udGFpbnMgYSBuYW1lc3BhY2UgcHJlZml4LiBFeGFtcGxlOiBteS1wbHVnaW4vbXktY3VzdG9tLWJsb2NrLlxuXHR0aXRsZTogX18oJ0ljZWJyZWFrZXIgLSByYW5kb20nKSwgLy8gQmxvY2sgdGl0bGUuXG5cdGljb246IGljb25FbCxcblx0Y2F0ZWdvcnk6ICdjb21tb24nLCAvLyBCbG9jayBjYXRlZ29yeSDigJQgR3JvdXAgYmxvY2tzIHRvZ2V0aGVyIGJhc2VkIG9uIGNvbW1vbiB0cmFpdHMgRS5nLiBjb21tb24sIGZvcm1hdHRpbmcsIGxheW91dCB3aWRnZXRzLCBlbWJlZC5cblx0a2V5d29yZHM6IFtfXygnSWNlYnJlYWtlciDigJQgcmFuZG9tJyksIF9fKCdJY2VicmVha2VyJyksIF9fKCdyYW5kb20nKV0sXG5cblx0YXR0cmlidXRlczogYXR0cmlidXRlcyxcblxuXHQvKipcbiAgKiBUaGUgZWRpdCBmdW5jdGlvbiBkZXNjcmliZXMgdGhlIHN0cnVjdHVyZSBvZiB5b3VyIGJsb2NrIGluIHRoZSBjb250ZXh0IG9mIHRoZSBlZGl0b3IuXG4gICogVGhpcyByZXByZXNlbnRzIHdoYXQgdGhlIGVkaXRvciB3aWxsIHJlbmRlciB3aGVuIHRoZSBibG9jayBpcyB1c2VkLlxuICAqXG4gICogVGhlIFwiZWRpdFwiIHByb3BlcnR5IG11c3QgYmUgYSB2YWxpZCBmdW5jdGlvbi5cbiAgKlxuICAqIEBsaW5rIGh0dHBzOi8vd29yZHByZXNzLm9yZy9ndXRlbmJlcmcvaGFuZGJvb2svYmxvY2stYXBpL2Jsb2NrLWVkaXQtc2F2ZS9cbiAgKlxuICAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wcyBQcm9wcy5cbiAgKiBAcmV0dXJucyB7TWl4ZWR9IEpTWCBDb21wb25lbnQuXG4gICovXG5cdGVkaXQ6IGZ1bmN0aW9uIGVkaXQocHJvcHMpIHtcblxuXHRcdGlmIChwcm9wcy5hdHRyaWJ1dGVzLnJhbmRvbVF1ZXN0aW9uID09PSB1bmRlZmluZWQpIHtcblx0XHRcdGdldE5ld1F1ZXN0aW9uKHByb3BzKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0UmVhY3QuRnJhZ21lbnQsXG5cdFx0XHRudWxsLFxuXHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRCbG9ja0NvbnRyb2xzLFxuXHRcdFx0XHRudWxsLFxuXHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0VG9vbGJhcixcblx0XHRcdFx0XHRudWxsLFxuXHRcdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChCdXR0b24sIHtcblx0XHRcdFx0XHRcdGxhYmVsOiAnUGljayBhIG5ldyByYW5kb20gcXVlc3Rpb24nLFxuXHRcdFx0XHRcdFx0aWNvbjogJ2NvbnRyb2xzLXJlcGVhdCcsXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU6ICdqd2ljZWJyZWFrZXItcmVmcmVzaC1idXR0b24nLFxuXHRcdFx0XHRcdFx0b25DbGljazogZnVuY3Rpb24gb25DbGljaygpIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGdldE5ld1F1ZXN0aW9uKHByb3BzKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KVxuXHRcdFx0XHQpXG5cdFx0XHQpLFxuXHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHQnZGl2Jyxcblx0XHRcdFx0eyBjbGFzc05hbWU6IHByb3BzLmNsYXNzTmFtZSB9LFxuXHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0J3AnLFxuXHRcdFx0XHRcdG51bGwsXG5cdFx0XHRcdFx0cHJvcHMuYXR0cmlidXRlcy5yYW5kb21RdWVzdGlvblxuXHRcdFx0XHQpXG5cdFx0XHQpXG5cdFx0KTtcblx0fSxcblxuXHQvKipcbiAgKiBUaGUgc2F2ZSBmdW5jdGlvbiBkZWZpbmVzIHRoZSB3YXkgaW4gd2hpY2ggdGhlIGRpZmZlcmVudCBhdHRyaWJ1dGVzIHNob3VsZCBiZSBjb21iaW5lZFxuICAqIGludG8gdGhlIGZpbmFsIG1hcmt1cCwgd2hpY2ggaXMgdGhlbiBzZXJpYWxpemVkIGJ5IEd1dGVuYmVyZyBpbnRvIHBvc3RfY29udGVudC5cbiAgKlxuICAqIFRoZSBcInNhdmVcIiBwcm9wZXJ0eSBtdXN0IGJlIHNwZWNpZmllZCBhbmQgbXVzdCBiZSBhIHZhbGlkIGZ1bmN0aW9uLlxuICAqXG4gICogQGxpbmsgaHR0cHM6Ly93b3JkcHJlc3Mub3JnL2d1dGVuYmVyZy9oYW5kYm9vay9ibG9jay1hcGkvYmxvY2stZWRpdC1zYXZlL1xuICAqXG4gICogQHBhcmFtIHtPYmplY3R9IHByb3BzIFByb3BzLlxuICAqIEByZXR1cm5zIHtNaXhlZH0gSlNYIEZyb250ZW5kIEhUTUwuXG4gICovXG5cdHNhdmU6IGZ1bmN0aW9uIHNhdmUocHJvcHMpIHtcblx0XHRyZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0J2RpdicsXG5cdFx0XHR7IGNsYXNzTmFtZTogcHJvcHMuY2xhc3NOYW1lIH0sXG5cdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdCdwJyxcblx0XHRcdFx0bnVsbCxcblx0XHRcdFx0cHJvcHMuYXR0cmlidXRlcy5yYW5kb21RdWVzdGlvblxuXHRcdFx0KVxuXHRcdCk7XG5cdH1cbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Jsb2NrL2Jsb2NrLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

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

/***/ }),
/* 4 */
/*!********************************!*\
  !*** external "wp.components" ***!
  \********************************/
/*! dynamic exports provided */
/*! exports used: Button, Toolbar */
/***/ (function(module, exports) {

module.exports = wp.components;

/***/ }),
/* 5 */
/*!*********************************!*\
  !*** external "wp.blockEditor" ***!
  \*********************************/
/*! dynamic exports provided */
/*! exports used: BlockControls */
/***/ (function(module, exports) {

module.exports = wp.blockEditor;

/***/ })
/******/ ]);