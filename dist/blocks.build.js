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
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__attributes__ = __webpack_require__(/*! ./attributes */ 2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wordpress_api_fetch__ = __webpack_require__(/*! @wordpress/api-fetch */ 3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wordpress_api_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__wordpress_api_fetch__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wordpress_components__ = __webpack_require__(/*! @wordpress/components */ 4);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wordpress_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__wordpress_components__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__wordpress_block_editor__ = __webpack_require__(/*! @wordpress/block-editor */ 5);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__wordpress_block_editor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__wordpress_block_editor__);\n/**\r\n * BLOCK: icebreaker\r\n *\r\n * Registering a basic block with Gutenberg.\r\n * Simple block, renders and saves the same content without any interactivity.\r\n */\n\nvar __ = wp.i18n.__; // Import __() from wp.i18n\n\n\n\n\n\n\nvar registerBlockType = wp.blocks.registerBlockType; // Import registerBlockType() from wp.blocks\n// Import the element creator function (React abstraction layer)\n\nvar el = wp.element.createElement;\n/**\r\n * Snowflake SVG path\r\n*/\nvar iconEl = el('svg', { width: 24, height: 24, viewBox: \"0 0 100 100\" }, el('path', { d: \"M97.5,50c0,1.7-1.4,3.1-3.1,3.1h-8l4,4c1.2,1.2,1.2,3.2,0,4.4c-0.6,0.6-1.4,0.9-2.2,0.9c-0.8,0-1.6-0.3-2.2-0.9l-8.4-8.4  H57.4l14.3,14.3h11.9c1.7,0,3.1,1.4,3.1,3.1s-1.4,3.1-3.1,3.1H78l5.6,5.6c1.2,1.2,1.2,3.2,0,4.4c-0.6,0.6-1.4,0.9-2.2,0.9  s-1.6-0.3-2.2-0.9L73.6,78v5.7c0,1.7-1.4,3.1-3.1,3.1s-3.1-1.4-3.1-3.1V71.8L53.1,57.4v20.1l8.4,8.4c1.2,1.2,1.2,3.2,0,4.4  c-0.6,0.6-1.4,0.9-2.2,0.9c-0.8,0-1.6-0.3-2.2-0.9l-4-4v8.2c0,1.7-1.4,3.1-3.1,3.1s-3.1-1.4-3.1-3.1v-8.2l-4,4  c-0.6,0.6-1.4,0.9-2.2,0.9s-1.6-0.3-2.2-0.9c-1.2-1.2-1.2-3.2,0-4.4l8.4-8.4v-20L32.7,71.8v11.9c0,1.7-1.4,3.1-3.1,3.1  c-1.7,0-3.1-1.4-3.1-3.1V78l-5.6,5.6c-0.6,0.6-1.4,0.9-2.2,0.9c-0.8,0-1.6-0.3-2.2-0.9c-1.2-1.2-1.2-3.2,0-4.4l5.6-5.6h-5.7  c-1.7,0-3.1-1.4-3.1-3.1s1.4-3.1,3.1-3.1h11.9l14.3-14.3H22.5l-8.4,8.4c-0.6,0.6-1.4,0.9-2.2,0.9c-0.8,0-1.6-0.3-2.2-0.9  c-1.2-1.2-1.2-3.2,0-4.4l4-4H5.6c-1.7,0-3.1-1.4-3.1-3.1s1.4-3.1,3.1-3.1h8.2l-4-4c-1.2-1.2-1.2-3.2,0-4.4c1.2-1.2,3.2-1.2,4.4,0  l8.4,8.4h20.1L28.4,32.7H16.5c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1h5.7l-5.8-5.8c-1.2-1.2-1.2-3.2,0-4.4  c1.2-1.2,3.2-1.2,4.4,0l5.8,5.8v-5.7c0-1.7,1.4-3.1,3.1-3.1c1.7,0,3.1,1.4,3.1,3.1v11.9l14.2,14.2V22.3l-8.4-8.4  c-1.2-1.2-1.2-3.2,0-4.4c1.2-1.2,3.2-1.2,4.4,0l4,4v-8c0-1.7,1.4-3.1,3.1-3.1s3.1,1.4,3.1,3.1v8l4-4c1.2-1.2,3.2-1.2,4.4,0  c1.2,1.2,1.2,3.2,0,4.4l-8.4,8.4v20.4l14.3-14.3V16.5c0-1.7,1.4-3.1,3.1-3.1s3.1,1.4,3.1,3.1v5.7l5.8-5.8c1.2-1.2,3.2-1.2,4.4,0  c1.2,1.2,1.2,3.2,0,4.4L78,26.5h5.7c1.7,0,3.1,1.4,3.1,3.1c0,1.7-1.4,3.1-3.1,3.1H71.8L57.6,46.9h20.1l8.4-8.4  c1.2-1.2,3.2-1.2,4.4,0c1.2,1.2,1.2,3.2,0,4.4l-4,4h8C96.1,46.9,97.5,48.3,97.5,50z\" }));\n\nfunction getRandomIntInclusive(min, max) {\n\tmin = Math.ceil(min);\n\tmax = Math.floor(max);\n\treturn Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive \n}\n\nfunction getNewQuestion(props) {\n\tvar setAttributes = props.setAttributes;\n\n\n\t__WEBPACK_IMPORTED_MODULE_1__wordpress_api_fetch___default()({ path: '/wp/v2/icebreakers' }).then(function (response) {\n\t\tvar i = getRandomIntInclusive(0, response.length - 1);\n\t\tsetAttributes({ randomQuestion: response[i].title.rendered });\n\t});\n}\n/**\r\n * Register: Random icebreaker question Gutenberg Block.\r\n *\r\n * Registers a new block provided a unique name and an object defining its\r\n * behavior. Once registered, the block is made editor as an option to any\r\n * editor interface where blocks are implemented.\r\n *\r\n * @link https://wordpress.org/gutenberg/handbook/block-api/\r\n * @param  {string}   name     Block name.\r\n * @param  {Object}   settings Block settings.\r\n * @return {?WPBlock}          The block, if it has been successfully\r\n *                             registered; otherwise `undefined`.\r\n */\nregisterBlockType('jw/icebreaker', {\n\t// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.\n\ttitle: __('Icebreaker - random'), // Block title.\n\ticon: iconEl,\n\tcategory: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.\n\tkeywords: [__('Icebreaker — random'), __('Icebreaker'), __('random')],\n\n\tattributes: __WEBPACK_IMPORTED_MODULE_0__attributes__[\"a\" /* default */],\n\n\t/**\r\n  * The edit function describes the structure of your block in the context of the editor.\r\n  * This represents what the editor will render when the block is used.\r\n  *\r\n  * The \"edit\" property must be a valid function.\r\n  *\r\n  * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/\r\n  *\r\n  * @param {Object} props Props.\r\n  * @returns {Mixed} JSX Component.\r\n  */\n\tedit: function edit(props) {\n\n\t\tif (props.attributes.randomQuestion === undefined) {\n\t\t\tgetNewQuestion(props);\n\t\t}\n\n\t\treturn wp.element.createElement(\n\t\t\tReact.Fragment,\n\t\t\tnull,\n\t\t\twp.element.createElement(\n\t\t\t\t__WEBPACK_IMPORTED_MODULE_3__wordpress_block_editor__[\"BlockControls\"],\n\t\t\t\tnull,\n\t\t\t\twp.element.createElement(\n\t\t\t\t\t__WEBPACK_IMPORTED_MODULE_2__wordpress_components__[\"Toolbar\"],\n\t\t\t\t\tnull,\n\t\t\t\t\twp.element.createElement(__WEBPACK_IMPORTED_MODULE_2__wordpress_components__[\"Button\"], {\n\t\t\t\t\t\tlabel: 'Pick a new random question',\n\t\t\t\t\t\ticon: 'controls-repeat',\n\t\t\t\t\t\tclassName: 'jwicebreaker-refresh-button',\n\t\t\t\t\t\tonClick: function onClick() {\n\t\t\t\t\t\t\treturn getNewQuestion(props);\n\t\t\t\t\t\t}\n\t\t\t\t\t})\n\t\t\t\t)\n\t\t\t),\n\t\t\twp.element.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ className: props.className },\n\t\t\t\twp.element.createElement(\n\t\t\t\t\t'p',\n\t\t\t\t\tnull,\n\t\t\t\t\tprops.attributes.randomQuestion\n\t\t\t\t)\n\t\t\t)\n\t\t);\n\t},\n\n\t/**\r\n  * The save function defines the way in which the different attributes should be combined\r\n  * into the final markup, which is then serialized by Gutenberg into post_content.\r\n  *\r\n  * The \"save\" property must be specified and must be a valid function.\r\n  *\r\n  * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/\r\n  *\r\n  * @param {Object} props Props.\r\n  * @returns {Mixed} JSX Frontend HTML.\r\n  */\n\tsave: function save(props) {\n\t\treturn wp.element.createElement(\n\t\t\t'div',\n\t\t\t{ className: props.className },\n\t\t\twp.element.createElement(\n\t\t\t\t'p',\n\t\t\t\tnull,\n\t\t\t\tprops.attributes.randomQuestion\n\t\t\t)\n\t\t);\n\t}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9ibG9jay5qcz85MjFkIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBCTE9DSzogaWNlYnJlYWtlclxyXG4gKlxyXG4gKiBSZWdpc3RlcmluZyBhIGJhc2ljIGJsb2NrIHdpdGggR3V0ZW5iZXJnLlxyXG4gKiBTaW1wbGUgYmxvY2ssIHJlbmRlcnMgYW5kIHNhdmVzIHRoZSBzYW1lIGNvbnRlbnQgd2l0aG91dCBhbnkgaW50ZXJhY3Rpdml0eS5cclxuICovXG5cbnZhciBfXyA9IHdwLmkxOG4uX187IC8vIEltcG9ydCBfXygpIGZyb20gd3AuaTE4blxuXG5pbXBvcnQgYXR0cmlidXRlcyBmcm9tICcuL2F0dHJpYnV0ZXMnO1xuaW1wb3J0IGFwaUZldGNoIGZyb20gJ0B3b3JkcHJlc3MvYXBpLWZldGNoJztcbmltcG9ydCB7IFRvb2xiYXIsIEJ1dHRvbiB9IGZyb20gJ0B3b3JkcHJlc3MvY29tcG9uZW50cyc7XG5pbXBvcnQgeyBCbG9ja0NvbnRyb2xzIH0gZnJvbSAnQHdvcmRwcmVzcy9ibG9jay1lZGl0b3InO1xuXG52YXIgcmVnaXN0ZXJCbG9ja1R5cGUgPSB3cC5ibG9ja3MucmVnaXN0ZXJCbG9ja1R5cGU7IC8vIEltcG9ydCByZWdpc3RlckJsb2NrVHlwZSgpIGZyb20gd3AuYmxvY2tzXG4vLyBJbXBvcnQgdGhlIGVsZW1lbnQgY3JlYXRvciBmdW5jdGlvbiAoUmVhY3QgYWJzdHJhY3Rpb24gbGF5ZXIpXG5cbnZhciBlbCA9IHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudDtcbi8qKlxyXG4gKiBTbm93Zmxha2UgU1ZHIHBhdGhcclxuKi9cbnZhciBpY29uRWwgPSBlbCgnc3ZnJywgeyB3aWR0aDogMjQsIGhlaWdodDogMjQsIHZpZXdCb3g6IFwiMCAwIDEwMCAxMDBcIiB9LCBlbCgncGF0aCcsIHsgZDogXCJNOTcuNSw1MGMwLDEuNy0xLjQsMy4xLTMuMSwzLjFoLThsNCw0YzEuMiwxLjIsMS4yLDMuMiwwLDQuNGMtMC42LDAuNi0xLjQsMC45LTIuMiwwLjljLTAuOCwwLTEuNi0wLjMtMi4yLTAuOWwtOC40LTguNCAgSDU3LjRsMTQuMywxNC4zaDExLjljMS43LDAsMy4xLDEuNCwzLjEsMy4xcy0xLjQsMy4xLTMuMSwzLjFINzhsNS42LDUuNmMxLjIsMS4yLDEuMiwzLjIsMCw0LjRjLTAuNiwwLjYtMS40LDAuOS0yLjIsMC45ICBzLTEuNi0wLjMtMi4yLTAuOUw3My42LDc4djUuN2MwLDEuNy0xLjQsMy4xLTMuMSwzLjFzLTMuMS0xLjQtMy4xLTMuMVY3MS44TDUzLjEsNTcuNHYyMC4xbDguNCw4LjRjMS4yLDEuMiwxLjIsMy4yLDAsNC40ICBjLTAuNiwwLjYtMS40LDAuOS0yLjIsMC45Yy0wLjgsMC0xLjYtMC4zLTIuMi0wLjlsLTQtNHY4LjJjMCwxLjctMS40LDMuMS0zLjEsMy4xcy0zLjEtMS40LTMuMS0zLjF2LTguMmwtNCw0ICBjLTAuNiwwLjYtMS40LDAuOS0yLjIsMC45cy0xLjYtMC4zLTIuMi0wLjljLTEuMi0xLjItMS4yLTMuMiwwLTQuNGw4LjQtOC40di0yMEwzMi43LDcxLjh2MTEuOWMwLDEuNy0xLjQsMy4xLTMuMSwzLjEgIGMtMS43LDAtMy4xLTEuNC0zLjEtMy4xVjc4bC01LjYsNS42Yy0wLjYsMC42LTEuNCwwLjktMi4yLDAuOWMtMC44LDAtMS42LTAuMy0yLjItMC45Yy0xLjItMS4yLTEuMi0zLjIsMC00LjRsNS42LTUuNmgtNS43ICBjLTEuNywwLTMuMS0xLjQtMy4xLTMuMXMxLjQtMy4xLDMuMS0zLjFoMTEuOWwxNC4zLTE0LjNIMjIuNWwtOC40LDguNGMtMC42LDAuNi0xLjQsMC45LTIuMiwwLjljLTAuOCwwLTEuNi0wLjMtMi4yLTAuOSAgYy0xLjItMS4yLTEuMi0zLjIsMC00LjRsNC00SDUuNmMtMS43LDAtMy4xLTEuNC0zLjEtMy4xczEuNC0zLjEsMy4xLTMuMWg4LjJsLTQtNGMtMS4yLTEuMi0xLjItMy4yLDAtNC40YzEuMi0xLjIsMy4yLTEuMiw0LjQsMCAgbDguNCw4LjRoMjAuMUwyOC40LDMyLjdIMTYuNWMtMS43LDAtMy4xLTEuNC0zLjEtMy4xYzAtMS43LDEuNC0zLjEsMy4xLTMuMWg1LjdsLTUuOC01LjhjLTEuMi0xLjItMS4yLTMuMiwwLTQuNCAgYzEuMi0xLjIsMy4yLTEuMiw0LjQsMGw1LjgsNS44di01LjdjMC0xLjcsMS40LTMuMSwzLjEtMy4xYzEuNywwLDMuMSwxLjQsMy4xLDMuMXYxMS45bDE0LjIsMTQuMlYyMi4zbC04LjQtOC40ICBjLTEuMi0xLjItMS4yLTMuMiwwLTQuNGMxLjItMS4yLDMuMi0xLjIsNC40LDBsNCw0di04YzAtMS43LDEuNC0zLjEsMy4xLTMuMXMzLjEsMS40LDMuMSwzLjF2OGw0LTRjMS4yLTEuMiwzLjItMS4yLDQuNCwwICBjMS4yLDEuMiwxLjIsMy4yLDAsNC40bC04LjQsOC40djIwLjRsMTQuMy0xNC4zVjE2LjVjMC0xLjcsMS40LTMuMSwzLjEtMy4xczMuMSwxLjQsMy4xLDMuMXY1LjdsNS44LTUuOGMxLjItMS4yLDMuMi0xLjIsNC40LDAgIGMxLjIsMS4yLDEuMiwzLjIsMCw0LjRMNzgsMjYuNWg1LjdjMS43LDAsMy4xLDEuNCwzLjEsMy4xYzAsMS43LTEuNCwzLjEtMy4xLDMuMUg3MS44TDU3LjYsNDYuOWgyMC4xbDguNC04LjQgIGMxLjItMS4yLDMuMi0xLjIsNC40LDBjMS4yLDEuMiwxLjIsMy4yLDAsNC40bC00LDRoOEM5Ni4xLDQ2LjksOTcuNSw0OC4zLDk3LjUsNTB6XCIgfSkpO1xuXG5mdW5jdGlvbiBnZXRSYW5kb21JbnRJbmNsdXNpdmUobWluLCBtYXgpIHtcblx0bWluID0gTWF0aC5jZWlsKG1pbik7XG5cdG1heCA9IE1hdGguZmxvb3IobWF4KTtcblx0cmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW47IC8vVGhlIG1heGltdW0gaXMgaW5jbHVzaXZlIGFuZCB0aGUgbWluaW11bSBpcyBpbmNsdXNpdmUgXG59XG5cbmZ1bmN0aW9uIGdldE5ld1F1ZXN0aW9uKHByb3BzKSB7XG5cdHZhciBzZXRBdHRyaWJ1dGVzID0gcHJvcHMuc2V0QXR0cmlidXRlcztcblxuXG5cdGFwaUZldGNoKHsgcGF0aDogJy93cC92Mi9pY2VicmVha2VycycgfSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcblx0XHR2YXIgaSA9IGdldFJhbmRvbUludEluY2x1c2l2ZSgwLCByZXNwb25zZS5sZW5ndGggLSAxKTtcblx0XHRzZXRBdHRyaWJ1dGVzKHsgcmFuZG9tUXVlc3Rpb246IHJlc3BvbnNlW2ldLnRpdGxlLnJlbmRlcmVkIH0pO1xuXHR9KTtcbn1cbi8qKlxyXG4gKiBSZWdpc3RlcjogUmFuZG9tIGljZWJyZWFrZXIgcXVlc3Rpb24gR3V0ZW5iZXJnIEJsb2NrLlxyXG4gKlxyXG4gKiBSZWdpc3RlcnMgYSBuZXcgYmxvY2sgcHJvdmlkZWQgYSB1bmlxdWUgbmFtZSBhbmQgYW4gb2JqZWN0IGRlZmluaW5nIGl0c1xyXG4gKiBiZWhhdmlvci4gT25jZSByZWdpc3RlcmVkLCB0aGUgYmxvY2sgaXMgbWFkZSBlZGl0b3IgYXMgYW4gb3B0aW9uIHRvIGFueVxyXG4gKiBlZGl0b3IgaW50ZXJmYWNlIHdoZXJlIGJsb2NrcyBhcmUgaW1wbGVtZW50ZWQuXHJcbiAqXHJcbiAqIEBsaW5rIGh0dHBzOi8vd29yZHByZXNzLm9yZy9ndXRlbmJlcmcvaGFuZGJvb2svYmxvY2stYXBpL1xyXG4gKiBAcGFyYW0gIHtzdHJpbmd9ICAgbmFtZSAgICAgQmxvY2sgbmFtZS5cclxuICogQHBhcmFtICB7T2JqZWN0fSAgIHNldHRpbmdzIEJsb2NrIHNldHRpbmdzLlxyXG4gKiBAcmV0dXJuIHs/V1BCbG9ja30gICAgICAgICAgVGhlIGJsb2NrLCBpZiBpdCBoYXMgYmVlbiBzdWNjZXNzZnVsbHlcclxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZ2lzdGVyZWQ7IG90aGVyd2lzZSBgdW5kZWZpbmVkYC5cclxuICovXG5yZWdpc3RlckJsb2NrVHlwZSgnancvaWNlYnJlYWtlcicsIHtcblx0Ly8gQmxvY2sgbmFtZS4gQmxvY2sgbmFtZXMgbXVzdCBiZSBzdHJpbmcgdGhhdCBjb250YWlucyBhIG5hbWVzcGFjZSBwcmVmaXguIEV4YW1wbGU6IG15LXBsdWdpbi9teS1jdXN0b20tYmxvY2suXG5cdHRpdGxlOiBfXygnSWNlYnJlYWtlciAtIHJhbmRvbScpLCAvLyBCbG9jayB0aXRsZS5cblx0aWNvbjogaWNvbkVsLFxuXHRjYXRlZ29yeTogJ2NvbW1vbicsIC8vIEJsb2NrIGNhdGVnb3J5IOKAlCBHcm91cCBibG9ja3MgdG9nZXRoZXIgYmFzZWQgb24gY29tbW9uIHRyYWl0cyBFLmcuIGNvbW1vbiwgZm9ybWF0dGluZywgbGF5b3V0IHdpZGdldHMsIGVtYmVkLlxuXHRrZXl3b3JkczogW19fKCdJY2VicmVha2VyIOKAlCByYW5kb20nKSwgX18oJ0ljZWJyZWFrZXInKSwgX18oJ3JhbmRvbScpXSxcblxuXHRhdHRyaWJ1dGVzOiBhdHRyaWJ1dGVzLFxuXG5cdC8qKlxyXG4gICogVGhlIGVkaXQgZnVuY3Rpb24gZGVzY3JpYmVzIHRoZSBzdHJ1Y3R1cmUgb2YgeW91ciBibG9jayBpbiB0aGUgY29udGV4dCBvZiB0aGUgZWRpdG9yLlxyXG4gICogVGhpcyByZXByZXNlbnRzIHdoYXQgdGhlIGVkaXRvciB3aWxsIHJlbmRlciB3aGVuIHRoZSBibG9jayBpcyB1c2VkLlxyXG4gICpcclxuICAqIFRoZSBcImVkaXRcIiBwcm9wZXJ0eSBtdXN0IGJlIGEgdmFsaWQgZnVuY3Rpb24uXHJcbiAgKlxyXG4gICogQGxpbmsgaHR0cHM6Ly93b3JkcHJlc3Mub3JnL2d1dGVuYmVyZy9oYW5kYm9vay9ibG9jay1hcGkvYmxvY2stZWRpdC1zYXZlL1xyXG4gICpcclxuICAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wcyBQcm9wcy5cclxuICAqIEByZXR1cm5zIHtNaXhlZH0gSlNYIENvbXBvbmVudC5cclxuICAqL1xuXHRlZGl0OiBmdW5jdGlvbiBlZGl0KHByb3BzKSB7XG5cblx0XHRpZiAocHJvcHMuYXR0cmlidXRlcy5yYW5kb21RdWVzdGlvbiA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRnZXROZXdRdWVzdGlvbihwcm9wcyk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFJlYWN0LkZyYWdtZW50LFxuXHRcdFx0bnVsbCxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0QmxvY2tDb250cm9scyxcblx0XHRcdFx0bnVsbCxcblx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdFRvb2xiYXIsXG5cdFx0XHRcdFx0bnVsbCxcblx0XHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoQnV0dG9uLCB7XG5cdFx0XHRcdFx0XHRsYWJlbDogJ1BpY2sgYSBuZXcgcmFuZG9tIHF1ZXN0aW9uJyxcblx0XHRcdFx0XHRcdGljb246ICdjb250cm9scy1yZXBlYXQnLFxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lOiAnandpY2VicmVha2VyLXJlZnJlc2gtYnV0dG9uJyxcblx0XHRcdFx0XHRcdG9uQ2xpY2s6IGZ1bmN0aW9uIG9uQ2xpY2soKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBnZXROZXdRdWVzdGlvbihwcm9wcyk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0KVxuXHRcdFx0KSxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0J2RpdicsXG5cdFx0XHRcdHsgY2xhc3NOYW1lOiBwcm9wcy5jbGFzc05hbWUgfSxcblx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdCdwJyxcblx0XHRcdFx0XHRudWxsLFxuXHRcdFx0XHRcdHByb3BzLmF0dHJpYnV0ZXMucmFuZG9tUXVlc3Rpb25cblx0XHRcdFx0KVxuXHRcdFx0KVxuXHRcdCk7XG5cdH0sXG5cblx0LyoqXHJcbiAgKiBUaGUgc2F2ZSBmdW5jdGlvbiBkZWZpbmVzIHRoZSB3YXkgaW4gd2hpY2ggdGhlIGRpZmZlcmVudCBhdHRyaWJ1dGVzIHNob3VsZCBiZSBjb21iaW5lZFxyXG4gICogaW50byB0aGUgZmluYWwgbWFya3VwLCB3aGljaCBpcyB0aGVuIHNlcmlhbGl6ZWQgYnkgR3V0ZW5iZXJnIGludG8gcG9zdF9jb250ZW50LlxyXG4gICpcclxuICAqIFRoZSBcInNhdmVcIiBwcm9wZXJ0eSBtdXN0IGJlIHNwZWNpZmllZCBhbmQgbXVzdCBiZSBhIHZhbGlkIGZ1bmN0aW9uLlxyXG4gICpcclxuICAqIEBsaW5rIGh0dHBzOi8vd29yZHByZXNzLm9yZy9ndXRlbmJlcmcvaGFuZGJvb2svYmxvY2stYXBpL2Jsb2NrLWVkaXQtc2F2ZS9cclxuICAqXHJcbiAgKiBAcGFyYW0ge09iamVjdH0gcHJvcHMgUHJvcHMuXHJcbiAgKiBAcmV0dXJucyB7TWl4ZWR9IEpTWCBGcm9udGVuZCBIVE1MLlxyXG4gICovXG5cdHNhdmU6IGZ1bmN0aW9uIHNhdmUocHJvcHMpIHtcblx0XHRyZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0J2RpdicsXG5cdFx0XHR7IGNsYXNzTmFtZTogcHJvcHMuY2xhc3NOYW1lIH0sXG5cdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdCdwJyxcblx0XHRcdFx0bnVsbCxcblx0XHRcdFx0cHJvcHMuYXR0cmlidXRlcy5yYW5kb21RdWVzdGlvblxuXHRcdFx0KVxuXHRcdCk7XG5cdH1cbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Jsb2NrL2Jsb2NrLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

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