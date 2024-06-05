"use strict";
(self["webpackChunkodin_javascript_battleship"] = self["webpackChunkodin_javascript_battleship"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/DelaGothicOne-Regular.ttf */ "./src/fonts/DelaGothicOne-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/PatrickHand-Regular.ttf */ "./src/fonts/PatrickHand-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
    font-family: 'Header-text';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

@font-face {
    font-family: 'Handwritten-text';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --ocean-blue: #4fc1fe;
    --ship-gray: #a0bbc6;
    font-size: 16px;
}

body {
    background-color: var(--ocean-blue);
    height: 100vh;
    display: grid;
    grid-template-rows: min(100px, 10vh) 50px 1fr 30px;
}

a:visited {
    color: black;
}

header,
footer {
    font-family: 'Header-text', 'Franklin Gothic Medium', 'Arial Narrow', Arial,
        sans-serif;
    text-align: center;
    color: black;
}

header {
    font-size: min(6.5vw, 60px);
}

footer {
    font-size: min(2.5vw, 1rem);
    display: flex;
    justify-content: center;
    align-items: end;
}

.text-output {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    font-family: 'Handwritten-text';
}

.main-wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(375px, 1fr));
    row-gap: 20px;
}

.main-wrapper-left,
.main-wrapper-right {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    justify-content: center;
    font-family: 'Handwritten-text';
    font-size: 1rem;
}

.player-board,
.opponent-board {
    width: min(80%, 475px);
    aspect-ratio: 1/1;
    border: 2px solid black;

    display: grid;
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: repeat(10, 1fr);
}

.player-board div,
.opponent-board div {
    border: 1px solid black;
    background-color: white;
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Handwritten-text', 'Franklin Gothic Medium', 'Arial Narrow',
        Arial, sans-serif;
}

div.ship {
    background-color: var(--ship-gray);
}

div.opponent-hit {
    background-color: red;
}

div.opponent-miss {
    background-color: rgb(71, 233, 71);
}

div.player-hit {
    border: 2px solid red;
    text-shadow: 1px 1px 2px red;
}

div.player-miss {
    border: 2px solid rgb(71, 233, 71);
    text-shadow: 1px 1px 2px rgb(71, 233, 71);
}
`, "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAAA;IACI,0BAA0B;IAC1B,4CAA8C;AAClD;;AAEA;IACI,+BAA+B;IAC/B,4CAA4C;AAChD;;AAEA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;AAC1B;;AAEA;IACI,qBAAqB;IACrB,oBAAoB;IACpB,eAAe;AACnB;;AAEA;IACI,mCAAmC;IACnC,aAAa;IACb,aAAa;IACb,kDAAkD;AACtD;;AAEA;IACI,YAAY;AAChB;;AAEA;;IAEI;kBACc;IACd,kBAAkB;IAClB,YAAY;AAChB;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,2BAA2B;IAC3B,aAAa;IACb,uBAAuB;IACvB,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,iBAAiB;IACjB,+BAA+B;AACnC;;AAEA;IACI,aAAa;IACb,2DAA2D;IAC3D,aAAa;AACjB;;AAEA;;IAEI,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,mBAAmB;IACnB,uBAAuB;IACvB,+BAA+B;IAC/B,eAAe;AACnB;;AAEA;;IAEI,sBAAsB;IACtB,iBAAiB;IACjB,uBAAuB;;IAEvB,aAAa;IACb,sCAAsC;IACtC,mCAAmC;AACvC;;AAEA;;IAEI,uBAAuB;IACvB,uBAAuB;IACvB,iBAAiB;IACjB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB;yBACqB;AACzB;;AAEA;IACI,kCAAkC;AACtC;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,kCAAkC;AACtC;;AAEA;IACI,qBAAqB;IACrB,4BAA4B;AAChC;;AAEA;IACI,kCAAkC;IAClC,yCAAyC;AAC7C","sourcesContent":["@font-face {\n    font-family: 'Header-text';\n    src: url('../fonts/DelaGothicOne-Regular.ttf');\n}\n\n@font-face {\n    font-family: 'Handwritten-text';\n    src: url('../fonts/PatrickHand-Regular.ttf');\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n:root {\n    --ocean-blue: #4fc1fe;\n    --ship-gray: #a0bbc6;\n    font-size: 16px;\n}\n\nbody {\n    background-color: var(--ocean-blue);\n    height: 100vh;\n    display: grid;\n    grid-template-rows: min(100px, 10vh) 50px 1fr 30px;\n}\n\na:visited {\n    color: black;\n}\n\nheader,\nfooter {\n    font-family: 'Header-text', 'Franklin Gothic Medium', 'Arial Narrow', Arial,\n        sans-serif;\n    text-align: center;\n    color: black;\n}\n\nheader {\n    font-size: min(6.5vw, 60px);\n}\n\nfooter {\n    font-size: min(2.5vw, 1rem);\n    display: flex;\n    justify-content: center;\n    align-items: end;\n}\n\n.text-output {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 1.5rem;\n    font-family: 'Handwritten-text';\n}\n\n.main-wrapper {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(375px, 1fr));\n    row-gap: 20px;\n}\n\n.main-wrapper-left,\n.main-wrapper-right {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    align-items: center;\n    justify-content: center;\n    font-family: 'Handwritten-text';\n    font-size: 1rem;\n}\n\n.player-board,\n.opponent-board {\n    width: min(80%, 475px);\n    aspect-ratio: 1/1;\n    border: 2px solid black;\n\n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n    grid-template-rows: repeat(10, 1fr);\n}\n\n.player-board div,\n.opponent-board div {\n    border: 1px solid black;\n    background-color: white;\n    font-size: 1.5rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-family: 'Handwritten-text', 'Franklin Gothic Medium', 'Arial Narrow',\n        Arial, sans-serif;\n}\n\ndiv.ship {\n    background-color: var(--ship-gray);\n}\n\ndiv.opponent-hit {\n    background-color: red;\n}\n\ndiv.opponent-miss {\n    background-color: rgb(71, 233, 71);\n}\n\ndiv.player-hit {\n    border: 2px solid red;\n    text-shadow: 1px 1px 2px red;\n}\n\ndiv.player-miss {\n    border: 2px solid rgb(71, 233, 71);\n    text-shadow: 1px 1px 2px rgb(71, 233, 71);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/scripts/DOMController.js":
/*!**************************************!*\
  !*** ./src/scripts/DOMController.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clearBoards: () => (/* binding */ clearBoards),
/* harmony export */   loadPage: () => (/* binding */ loadPage),
/* harmony export */   renderOpponentBoard: () => (/* binding */ renderOpponentBoard),
/* harmony export */   renderPlayerBoardAttacks: () => (/* binding */ renderPlayerBoardAttacks),
/* harmony export */   renderPlayerBoardShips: () => (/* binding */ renderPlayerBoardShips),
/* harmony export */   updateTextOutput: () => (/* binding */ updateTextOutput)
/* harmony export */ });
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/style.css */ "./src/styles/style.css");


const loadPage = () => {
    // create main sections
    const header = document.createElement('header');
    const main = document.createElement('div');
    main.classList.add('main-wrapper');
    const footer = document.createElement('footer');

    // add a div to display text to the user
    const textOutputDiv = document.createElement('div');
    textOutputDiv.classList.add('text-output');
    textOutputDiv.textContent = 'Welcome to Battleship';

    // add to body
    document.body.appendChild(header);
    document.body.appendChild(textOutputDiv);
    document.body.appendChild(main);
    document.body.appendChild(footer);

    // add header text
    header.textContent = 'BATTLESHIP';

    // add hyperlink to GitHub page
    const gitHubLink = document.createElement('a');
    gitHubLink.textContent = 'Github';
    gitHubLink.href =
        'https://github.com/danielkurtsawyer/odin-javascript-battleship';
    gitHubLink.target = '_blank';
    gitHubLink.rel = 'noopener noreferrer';

    // append link to footer
    footer.appendChild(gitHubLink);

    // make left and right divs within the main-wrapper
    const left = document.createElement('div');
    left.classList.add('main-wrapper-left');

    const right = document.createElement('div');
    right.classList.add('main-wrapper-right');

    // append to the main-wrapper
    main.appendChild(left);
    main.appendChild(right);

    // add divs for the labels
    const playerBoardLabel = document.createElement('div');
    playerBoardLabel.textContent = 'Player Board';
    const opponentBoardLabel = document.createElement('div');
    opponentBoardLabel.textContent = 'Opponent Board';

    // append the label divs to left & right divs
    left.appendChild(playerBoardLabel);
    right.appendChild(opponentBoardLabel);

    // add divs for the boards
    const playerBoard = document.createElement('div');
    playerBoard.classList.add('player-board');

    const opponentBoard = document.createElement('div');
    opponentBoard.classList.add('opponent-board');

    // append the playerboard to the left div
    left.appendChild(playerBoard);

    // append the opponentboard to the right div
    right.appendChild(opponentBoard);

    // divide the board into individual squares to form a 10x10 grid

    // remember the numbering convention
    // coordinate - [i, j]
    // store this in a custom css attribute for use
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            const playerSquare = document.createElement('div');
            const opponentSquare = document.createElement('div');

            // the i and j values are swapped
            // rows going down will be i, and colums going right will be j
            // since grid fills left to right before moving down, we swap to
            // ensure the i and j values are consistent with the implementation
            playerSquare.setAttribute('i', j);
            playerSquare.setAttribute('j', i);
            opponentSquare.setAttribute('i', j);
            opponentSquare.setAttribute('j', i);

            // append each div to the respective board
            playerBoard.appendChild(playerSquare);
            opponentBoard.appendChild(opponentSquare);
        }
    }
};

const renderPlayerBoardShips = (playerBoardArray) => {
    // render ships
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            if (playerBoardArray[i][j] !== 0) {
                const shipSquare = document.querySelector(
                    `.player-board div[i="${i}"][j="${j}"]`
                );
                shipSquare.classList.add('ship');
            }
        }
    }
};

const renderPlayerBoardAttacks = (playerBoardArray, attacks) => {
    // render attacks
    attacks.forEach((coordinatePair) => {
        const i = coordinatePair[0];
        const j = coordinatePair[1];
        const attackedSquare = document.querySelector(
            `.player-board div[i="${i}"][j="${j}"]`
        );
        // if the square isn't a 0, it's a ship
        if (playerBoardArray[i][j] !== 0) {
            // fill the space with an X to mark a hit
            attackedSquare.textContent = 'X';
            attackedSquare.classList.add('player-hit');
        } else {
            // if it is, then its an empty space
            // fill the space with an O to mark a miss
            attackedSquare.textContent = 'O';
            attackedSquare.classList.add('player-miss');
        }
    });
};

const renderOpponentBoard = (opponentBoardArray, attacks) => {
    attacks.forEach((coordinatePair) => {
        const i = coordinatePair[0];
        const j = coordinatePair[1];
        const attackedSquare = document.querySelector(
            `.opponent-board div[i="${i}"][j="${j}"]`
        );
        // if the square isn't a 0, it's a ship
        if (opponentBoardArray[i][j] !== 0) {
            // fill the space with an X to mark a hit
            attackedSquare.textContent = 'X';
            attackedSquare.classList.add('opponent-hit');
        } else {
            // if it is, then its an empty space
            // fill the space with an O to mark a miss
            attackedSquare.textContent = 'O';
            attackedSquare.classList.add('opponent-miss');
        }
    });
};

const updateTextOutput = (string) => {
    const text = document.querySelector('.text-output');
    text.textContent = string;
};

const clearBoards = () => {
    // clear the views for both boards
    const squares = document.querySelectorAll(
        '.player-board div, .opponent-board div'
    );
    squares.forEach((square) => {
        square.classList = '';
        square.textContent = '';
    });
};




/***/ }),

/***/ "./src/scripts/battleship.js":
/*!***********************************!*\
  !*** ./src/scripts/battleship.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Ship)
/* harmony export */ });
class Ship {
    constructor(length) {
        this._length = length;
        this._hits = 0;
    }

    get length() {
        return this._length;
    }

    hit() {
        this._hits++;
    }

    isSunk() {
        if (this._hits >= this._length) {
            return true;
        } else {
            return false;
        }
    }
}


/***/ }),

/***/ "./src/scripts/gameDriver.js":
/*!***********************************!*\
  !*** ./src/scripts/gameDriver.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player.js */ "./src/scripts/player.js");
/* harmony import */ var _gameboard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboard.js */ "./src/scripts/gameboard.js");
/* harmony import */ var _battleship_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./battleship.js */ "./src/scripts/battleship.js");
/* harmony import */ var _DOMController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DOMController */ "./src/scripts/DOMController.js");





// this value allows us to keep track of the turn
let playerTurn = false;

const placePlayerShips = () => {
    _DOMController__WEBPACK_IMPORTED_MODULE_3__.updateTextOutput(`Planning Phase`);

    // prompt player to place ships
    // 1 two space, 1 three space, 2 four space, and 1 five space

    const shipLengths = [2, 3, 4, 4, 5];

    let currentLength = shipLengths.shift();

    // variable to determine whether all required ships have been placed
    let allShipsPlaced = false;

    while (!allShipsPlaced) {
        const startCoordinateString = prompt(
            'Enter the start coordinate for a ship of length ' +
                currentLength +
                ' in the following format: (column, row): \n Columns are numbered 0-9 from left to right, and rows are numbered 0-9 from top to bottom'
        );

        if (!/\([0-9], *[0-9]\)/.test(startCoordinateString)) {
            alert(
                'Invalid input. Coordinate must be in the form (column, row). Please try again.'
            );
            // for invalid inputs return to the beginning
            continue;
        }

        // input is valid
        // let's extract the i and j values
        let match = startCoordinateString.match(/\(([0-9], *[0-9])\)/);
        const iStart = +match[1][0];
        const jStart = +match[1][2];
        const startCoordinate = [iStart, jStart];

        console.log('Start coordinate: ' + startCoordinate);

        // now let's prompt for an end coordinate
        let validEndCoordinate = false;

        let endCoordinateString = null;

        while (!validEndCoordinate) {
            endCoordinateString = prompt(
                'Enter the end coordinate for a ship of length ' +
                    currentLength +
                    ' in the following format: (column, row): \n Columns are numbered 0-9 from left to right, and rows are numbered 0-9 from top to bottom'
            );
            if (!/\([0-9], *[0-9]\)/.test(endCoordinateString)) {
                alert(
                    'Invalid input. Coordinate must be in the form (column, row). Please try again.'
                );
                // this will return to the start of the nested while loop
                // since we don't want to have to return all the way to the top of the while loop
            } else {
                // valid input, update validEndCoordinate value
                validEndCoordinate = true;
            }
        }
        // input is valid
        // let's extract the i and j values
        match = endCoordinateString.match(/\(([0-9], *[0-9])\)/);
        const iEnd = +match[1][0];
        const jEnd = +match[1][2];
        const endCoordinate = [iEnd, jEnd];

        console.log('End coordinate: ' + endCoordinate);

        if (
            player.gameboard.placeShip(
                startCoordinate,
                endCoordinate,
                currentLength
            )
        ) {
            // render the player board by sending the 2d array representation of the board and the attacks array
            _DOMController__WEBPACK_IMPORTED_MODULE_3__.renderPlayerBoardShips(player.gameboard.board);

            // if successful, move to the next ship length
            currentLength = shipLengths.shift();
            // if the current length is now undefined, there is nothing in the shipLengths array
            // so we have placed all of the required ships
            if (currentLength === undefined) {
                // set allShipsPlaced to true so we can break out of the loop
                allShipsPlaced = true;
            }
        } else {
            // if the placement was unsuccessful, alert the user that it was an invalid placement
            alert(
                "Invalid ship placement. Check the coordinates are on the same x or y plane and don't overlap, and that each ship has a one square buffer all the way around. Also ensure that the coordinates span the correct length of the ship you are placing."
            );
            // and allow the flow to return to the beginning of the loop to try the ship placement again
        }
    }

    // once the board is filled up, render the player board by sending the 2d array representation of the board and the attacks array
    _DOMController__WEBPACK_IMPORTED_MODULE_3__.renderPlayerBoardShips(player.gameboard.board);
};

const placeOpponentShips = () => {
    const shipLengths = [2, 3, 3, 4, 5];

    let currentLength = shipLengths.shift();

    // variable to determine whether all required ships have been placed
    let allShipsPlaced = false;

    // run while all ships haven't been placed
    while (!allShipsPlaced) {
        // place a ship of length currentLength
        // generate random start coordinate:
        let startCoordinate = [
            Math.floor(Math.random() * 10),
            Math.floor(Math.random() * 10),
        ];
        // generate list of possible moves using length of ship
        let endCoordinates = [];
        // left
        endCoordinates.push([
            startCoordinate[0] - (currentLength - 1),
            startCoordinate[1],
        ]);
        // right
        endCoordinates.push([
            startCoordinate[0] + (currentLength - 1),
            startCoordinate[1],
        ]);
        // up
        endCoordinates.push([
            startCoordinate[0],
            startCoordinate[1] - (currentLength - 1),
        ]);
        // down
        endCoordinates.push([
            startCoordinate[0],
            startCoordinate[1] + (currentLength - 1),
        ]);

        // filter out moves off the board
        endCoordinates = endCoordinates.filter(
            (coordinate) =>
                coordinate[0] >= 0 &&
                coordinate[0] < 10 &&
                coordinate[1] >= 0 &&
                coordinate[1] < 10
        );

        // variable to determine whether a ship has been placed
        let validMoveFound = false;
        // run while a valid placement hasn't been found and there are still move options available
        while (endCoordinates.length > 0 && validMoveFound === false) {
            let randIndex = Math.floor(Math.random() * endCoordinates.length);
            let endCoordinate = endCoordinates.splice(randIndex, 1)[0];
            if (
                opponent.gameboard.placeShip(
                    startCoordinate,
                    endCoordinate,
                    currentLength
                )
            ) {
                // if placeShip returns true, ship was placed successfully
                validMoveFound = true;
            }
        }

        if (validMoveFound) {
            // if a valid move is found, then we move on to the next length ship
            currentLength = shipLengths.shift();
            if (currentLength === undefined) {
                // if the currentLength variable is now undefined, we have placed all the ships
                // update the while loop condition to stop running the placement loop
                allShipsPlaced = true;
            }
        }
        // if a valid move wasn't found, then we go return to the top of the loop and
        // regenerate a new start coordinate to try
    }
};

const startGame = () => {
    player.gameboard.clear();
    opponent.gameboard.clear();
    _DOMController__WEBPACK_IMPORTED_MODULE_3__.clearBoards();
    placeOpponentShips();
    placePlayerShips();
    _DOMController__WEBPACK_IMPORTED_MODULE_3__.updateTextOutput('Player turn');
    playerTurn = true;

    // add event listeners to the opponent board squares
    const opponentSquares = document.querySelectorAll('.opponent-board div');
    opponentSquares.forEach((square) =>
        square.addEventListener('click', () =>
            triggerPlayerAttack(
                +square.getAttribute('i'),
                +square.getAttribute('j')
            )
        )
    );
};

const triggerPlayerAttack = (i, j) => {
    // only run when it is the player turn using the playerTurn variable
    // we don't want the user to just be able to click a ton of times in a row before the computer can finish its move
    if (playerTurn) {
        // send the attack to the opponent game board
        opponent.gameboard.receiveAttack([i, j]);
        // render the opponent's board to show the result of the newest attack
        _DOMController__WEBPACK_IMPORTED_MODULE_3__.renderOpponentBoard(
            opponent.gameboard.board,
            opponent.gameboard.attacks
        );
        // change the turn tracker variable
        playerTurn = false;

        // check to see if the game is over
        if (isGameOver()) {
            // game is over
            endGame();
        } else {
            // game is not over

            // update the display text
            _DOMController__WEBPACK_IMPORTED_MODULE_3__.updateTextOutput('Opponent turn');
            // wait 1 second before triggering the opponent attack
            setTimeout(triggerOpponentAttack, 1000);
        }
    }
};

const triggerOpponentAttack = () => {
    // create random coordinate
    let i = Math.floor(Math.random() * 10);
    let j = Math.floor(Math.random() * 10);
    // check to make sure it's valid (not in the array of previous attacks)
    while (
        JSON.stringify(opponent.gameboard.attacks).includes(
            JSON.stringify([i, j])
        )
    ) {
        // while invalid, keep creating new random coordinates
        i = Math.floor(Math.random() * 10);
        j = Math.floor(Math.random() * 10);
    }

    // once the attacks array doesn't include the coordinate, we can attack
    player.gameboard.receiveAttack([i, j]);
    // render the player board to show the result of the newest attack
    _DOMController__WEBPACK_IMPORTED_MODULE_3__.renderPlayerBoardAttacks(
        player.gameboard.board,
        player.gameboard.attacks
    );

    // check if the game is Over
    if (isGameOver()) {
        endGame();
    } else {
        // Change display text
        _DOMController__WEBPACK_IMPORTED_MODULE_3__.updateTextOutput('Player turn');
        // change the turn tracker variable
        playerTurn = true;
    }
};

const isGameOver = () => {
    if (player.gameboard.allShipsSunk() || opponent.gameboard.allShipsSunk()) {
        return true;
    } else {
        return false;
    }
};

const endGame = () => {
    playerTurn = false;
    if (player.gameboard.allShipsSunk()) {
        restartGame(10, false);
    } else if (opponent.gameboard.allShipsSunk()) {
        restartGame(10, true);
    }
};

const restartGame = (time, playerWon) => {
    if (playerWon) {
        const interval = setInterval(() => {
            _DOMController__WEBPACK_IMPORTED_MODULE_3__.updateTextOutput(
                `Player won! Restarting game in ${time--} seconds...`
            );
            if (time < 0) {
                clearInterval(interval);
                startGame();
            }
        }, 1000);
    } else {
        const interval = setInterval(() => {
            _DOMController__WEBPACK_IMPORTED_MODULE_3__.updateTextOutput(
                `Player won! Restarting game in ${time--} seconds...`
            );
            if (time < 0) {
                clearInterval(interval);
                startGame();
            }
        }, 1000);
    }
};

_DOMController__WEBPACK_IMPORTED_MODULE_3__.loadPage();

const player = new _player_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
const opponent = new _player_js__WEBPACK_IMPORTED_MODULE_0__["default"]();

_DOMController__WEBPACK_IMPORTED_MODULE_3__.updateTextOutput('Game starting momentarily');

setTimeout(startGame, 500);


/***/ }),

/***/ "./src/scripts/gameboard.js":
/*!**********************************!*\
  !*** ./src/scripts/gameboard.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Gameboard)
/* harmony export */ });
/* harmony import */ var _battleship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./battleship */ "./src/scripts/battleship.js");


class Gameboard {
    // create a board
    constructor() {
        // the board is represented by a 10x10 2-dimensional array
        // 0s are empty spaces, ship spaces contain a reference to the ship occupying that space
        this.clear();
    }

    // sets the board to all 0s and sets variables to starting values
    clear() {
        this._board = [];
        for (let i = 0; i < 10; i++) {
            this._board[i] = [];
            for (let j = 0; j < 10; j++) {
                this._board[i][j] = 0;
            }
        }
        this._attacks = [];
        this._ships = 0;
        this._sunkenShips = 0;
    }

    // get the array representation of the board
    // @return the 2d array representation of the board
    get board() {
        return this._board;
    }

    // get a list of coordinates that have been attacked
    // @return an array of coordinates previously attacked
    get attacks() {
        return this._attacks;
    }

    // places a ship on the board, filling the coordinates with a number representing the length of the ship
    // @param startCoordinate the starting coordinate of the first point of the ship being placed
    // @param endCoordinate the ending coordinate of the last point of the ship being placed
    // @param length the length of the ship being placed
    // @return true if placeement is successful
    // @return false if placement is unsuccessful
    placeShip(startCoordinate, endCoordinate, length) {
        if (
            this.checkShipCoordinateValidity(
                startCoordinate,
                endCoordinate,
                length
            )
        ) {
            // create the new ship object to be placed
            const ship = new _battleship__WEBPACK_IMPORTED_MODULE_0__["default"](length);

            // place the ship, fill the coordinates with
            // the reference to the ship object
            if (startCoordinate[0] === endCoordinate[0]) {
                // horizontal placement
                const i = startCoordinate[0];
                const jStart = Math.min(startCoordinate[1], endCoordinate[1]);
                const jEnd = Math.max(startCoordinate[1], endCoordinate[1]);
                // console.log('horizontal placement', jStart, jEnd);
                for (let j = jStart; j <= jEnd; j++) {
                    this._board[i][j] = ship;
                }
            } else if (startCoordinate[1] === endCoordinate[1]) {
                // vertical placement
                const j = startCoordinate[1];
                const iStart = Math.min(startCoordinate[0], endCoordinate[0]);
                const iEnd = Math.max(startCoordinate[0], endCoordinate[0]);
                // console.log('vertical placement', iStart, iEnd);
                for (let i = iStart; i <= iEnd; i++) {
                    this._board[i][j] = ship;
                }
            }
            // placement successful
            this._ships++;
            return true;
        } else {
            // this isn't a valid path for a ship,
            return false;
        }
    }

    // check if the coordinates are on the board, and match the length of the ship
    // @param startCoordinate the starting coordinate of the first point of the ship being placed
    // @param endCoordinate the ending coordinate of the last point of the ship being placed
    // @param length the length of the ship being placed
    // @return true if the ship can be placed on those coordinates
    // @return false if the ship cannot be placed on those coordinates
    checkShipCoordinateValidity(startCoordinate, endCoordinate, length) {
        // check to ensure coordinates are within board bounds
        if (
            startCoordinate[0] < 0 ||
            startCoordinate[0] >= 10 ||
            startCoordinate[1] < 0 ||
            startCoordinate[1] >= 10 ||
            endCoordinate[0] < 0 ||
            endCoordinate[0] >= 10 ||
            endCoordinate[1] < 0 ||
            endCoordinate[1] >= 10
        ) {
            return false;
        }

        // check to ensure that the ship is only placed horizontally or vertically
        // we can tell this by checking if either the x or y coordinates of the start or end both don't match
        // since if one matches, then we must either be in the same row, or column
        if (
            startCoordinate[0] !== endCoordinate[0] &&
            startCoordinate[1] !== endCoordinate[1]
        ) {
            return false;
        }

        // now just test if the length matches the distance between the coordinates
        if (startCoordinate[0] === endCoordinate[0]) {
            if (
                Math.max(startCoordinate[1], endCoordinate[1]) -
                    Math.min(startCoordinate[1], endCoordinate[1]) +
                    1 !==
                length
            ) {
                return false;
            }
        } else if (startCoordinate[1] === endCoordinate[1]) {
            if (
                Math.max(startCoordinate[0], endCoordinate[0]) -
                    Math.min(startCoordinate[0], endCoordinate[0]) +
                    1 !==
                length
            ) {
                return false;
            }
        }

        // if the coordinates are valid, we next have to check to make sure the ship
        // doesn't overlap with pre-existing ships
        if (startCoordinate[0] === endCoordinate[0]) {
            // vertical placement
            const i = startCoordinate[0];
            const jStart = Math.min(startCoordinate[1], endCoordinate[1]);
            const jEnd = Math.max(startCoordinate[1], endCoordinate[1]);
            // console.log('vertical placement', jStart, jEnd);
            for (let j = jStart; j <= jEnd; j++) {
                if (this._board[i][j] !== 0) {
                    return false;
                }
            }
        } else if (startCoordinate[1] === endCoordinate[1]) {
            // horizontal placement
            const j = startCoordinate[1];
            const iStart = Math.min(startCoordinate[0], endCoordinate[0]);
            const iEnd = Math.max(startCoordinate[0], endCoordinate[0]);
            // console.log('horizontal placement', iStart, iEnd);
            for (let i = iStart; i <= iEnd; i++) {
                if (this._board[i][j] !== 0) {
                    return false;
                }
            }
        }

        // and also ensure that there is a one square buffer between ships

        // vertical placement
        if (startCoordinate[0] === endCoordinate[0]) {
            const i = startCoordinate[0];
            const jStart = Math.min(startCoordinate[1], endCoordinate[1]);
            const jEnd = Math.max(startCoordinate[1], endCoordinate[1]);
            let bufferSquares = [];
            // get the surrounding buffer squares on either side
            for (let j = jStart - 1; j <= jEnd + 1; j++) {
                bufferSquares.push([i - 1, j]);
                bufferSquares.push([i + 1, j]);
            }

            // also add the same column start/end squares
            bufferSquares.push([i, jStart - 1]);
            bufferSquares.push([i, jEnd + 1]);

            // filter out moves not on board
            bufferSquares = bufferSquares.filter(
                (coordinate) =>
                    coordinate[0] >= 0 &&
                    coordinate[0] < 10 &&
                    coordinate[1] >= 0 &&
                    coordinate[1] < 10
            );

            for (let x = 0; x < bufferSquares.length; x++) {
                const coordinate = bufferSquares[x];
                if (this._board[coordinate[0]][coordinate[1]] !== 0) {
                    // console.log('buffer not intact');
                    return false;
                }
            }
        } else if (startCoordinate[1] === endCoordinate[1]) {
            // vertical placement
            const j = startCoordinate[1];
            const iStart = Math.min(startCoordinate[0], endCoordinate[0]);
            const iEnd = Math.max(startCoordinate[0], endCoordinate[0]);
            let bufferSquares = [];
            // get the surrounding buffer squares on either side
            for (let i = iStart - 1; i <= iEnd + 1; i++) {
                bufferSquares.push([i, j - 1]);
                bufferSquares.push([i, j + 1]);
            }

            // also add the same row start/end squares
            bufferSquares.push([iStart - 1, j]);
            bufferSquares.push([iEnd + 1, j]);

            // filter out moves not on board
            bufferSquares = bufferSquares.filter(
                (coordinate) =>
                    coordinate[0] >= 0 &&
                    coordinate[0] < 10 &&
                    coordinate[1] >= 0 &&
                    coordinate[1] < 10
            );

            for (let x = 0; x < bufferSquares.length; x++) {
                const coordinate = bufferSquares[x];
                if (this._board[coordinate[0]][coordinate[1]] !== 0) {
                    // console.log('buffer not intact');
                    return false;
                }
            }
        }

        // at this point, the move has been proven valid
        return true;
    }

    // receives and processes an attack
    // @param coordinate
    // @return true if attack hits an unattacked ship square
    // @return false if attack misses or hits an already attacked ship square
    receiveAttack(coordinate) {
        const i = coordinate[0];
        const j = coordinate[1];

        // return false for moves off the game board
        if (i < 0 || i >= 10 || j < 0 || j >= 10) {
            return false;
            // don't worry about storing them since they won't be displayed
        }

        // if it is a valid move, then we can check if it was a previously attacked square
        if (
            JSON.stringify(this._attacks).includes(JSON.stringify(coordinate))
        ) {
            // if so, return false
            return false;
        }

        // if it is a valid move to an untouched square, check to see if it hit a ship
        if (this._board[i][j] !== 0) {
            // if it's not 0, then we hit a ship
            // send the hit message to the Ship
            this._board[i][j].hit();
            // record the attack
            this._attacks.push(coordinate);

            // check to see if the ship is sunk
            if (this._board[i][j].isSunk()) {
                // if so, increment the sunkenShips variable
                this._sunkenShips++;
            }

            // and return true
            return true;
        } else {
            // if it is 0, then no ships were harmed
            // record the coordinate in the attacks array
            this._attacks.push(coordinate);
            // and return false
            return false;
        }
    }

    // find if all ships on the gameboard are sunk
    // @returns true if all ships in play have been sunk
    // @returns false if not all ships in play have been sunk
    allShipsSunk() {
        if (this._sunkenShips >= this._ships) {
            return true;
        } else {
            return false;
        }
    }
}


/***/ }),

/***/ "./src/scripts/player.js":
/*!*******************************!*\
  !*** ./src/scripts/player.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/scripts/gameboard.js");
/* harmony import */ var _battleship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./battleship */ "./src/scripts/battleship.js");



class Player {
    constructor() {
        this._gameboard = new _gameboard__WEBPACK_IMPORTED_MODULE_0__["default"]();
    }
    get gameboard() {
        return this._gameboard;
    }
}


/***/ }),

/***/ "./src/fonts/DelaGothicOne-Regular.ttf":
/*!*********************************************!*\
  !*** ./src/fonts/DelaGothicOne-Regular.ttf ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a8761c8c6d54ccaa44db.ttf";

/***/ }),

/***/ "./src/fonts/PatrickHand-Regular.ttf":
/*!*******************************************!*\
  !*** ./src/fonts/PatrickHand-Regular.ttf ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ec54a049bdef4be52511.ttf";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/scripts/gameDriver.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLGtFQUFvQzs7QUFFaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUksa0VBQW9DO0FBQ3hDOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUksdURBQXlCO0FBQzdCO0FBQ0E7QUFDQSxJQUFJLDREQUE4QjtBQUNsQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSwrREFBaUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjs7QUFFQTtBQUNBLFlBQVksNERBQThCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLG9FQUFzQztBQUMxQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsUUFBUSw0REFBOEI7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWSw0REFBOEI7QUFDMUMsa0RBQWtELFFBQVE7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxNQUFNO0FBQ047QUFDQSxZQUFZLDREQUE4QjtBQUMxQyxrREFBa0QsUUFBUTtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUEsb0RBQXNCOztBQUV0QixtQkFBbUIsa0RBQU07QUFDekIscUJBQXFCLGtEQUFNOztBQUUzQiw0REFBOEI7O0FBRTlCOzs7Ozs7Ozs7Ozs7Ozs7O0FDL1RnQzs7QUFFakI7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLFFBQVE7QUFDaEM7QUFDQSw0QkFBNEIsUUFBUTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLG1EQUFJOztBQUVqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLFdBQVc7QUFDaEQ7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLFdBQVc7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLFdBQVc7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxXQUFXO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsZUFBZTtBQUNwRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNEJBQTRCLDBCQUEwQjtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLGVBQWU7QUFDcEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDRCQUE0QiwwQkFBMEI7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsU29DO0FBQ0o7O0FBRWpCO0FBQ2Y7QUFDQSw4QkFBOEIsa0RBQVM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tamF2YXNjcmlwdC1iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi1qYXZhc2NyaXB0LWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4tamF2YXNjcmlwdC1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9vZGluLWphdmFzY3JpcHQtYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW4tamF2YXNjcmlwdC1iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3M/ZmY5NCIsIndlYnBhY2s6Ly9vZGluLWphdmFzY3JpcHQtYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGluLWphdmFzY3JpcHQtYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1qYXZhc2NyaXB0LWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1qYXZhc2NyaXB0LWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1qYXZhc2NyaXB0LWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLWphdmFzY3JpcHQtYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW4tamF2YXNjcmlwdC1iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdHMvRE9NQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9vZGluLWphdmFzY3JpcHQtYmF0dGxlc2hpcC8uL3NyYy9zY3JpcHRzL2JhdHRsZXNoaXAuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1qYXZhc2NyaXB0LWJhdHRsZXNoaXAvLi9zcmMvc2NyaXB0cy9nYW1lRHJpdmVyLmpzIiwid2VicGFjazovL29kaW4tamF2YXNjcmlwdC1iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdHMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL29kaW4tamF2YXNjcmlwdC1iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdHMvcGxheWVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9EZWxhR290aGljT25lLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvUGF0cmlja0hhbmQtUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ0hlYWRlci10ZXh0JztcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdIYW5kd3JpdHRlbi10ZXh0JztcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcbn1cblxuKiB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuOnJvb3Qge1xuICAgIC0tb2NlYW4tYmx1ZTogIzRmYzFmZTtcbiAgICAtLXNoaXAtZ3JheTogI2EwYmJjNjtcbiAgICBmb250LXNpemU6IDE2cHg7XG59XG5cbmJvZHkge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9jZWFuLWJsdWUpO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbigxMDBweCwgMTB2aCkgNTBweCAxZnIgMzBweDtcbn1cblxuYTp2aXNpdGVkIHtcbiAgICBjb2xvcjogYmxhY2s7XG59XG5cbmhlYWRlcixcbmZvb3RlciB7XG4gICAgZm9udC1mYW1pbHk6ICdIZWFkZXItdGV4dCcsICdGcmFua2xpbiBHb3RoaWMgTWVkaXVtJywgJ0FyaWFsIE5hcnJvdycsIEFyaWFsLFxuICAgICAgICBzYW5zLXNlcmlmO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogYmxhY2s7XG59XG5cbmhlYWRlciB7XG4gICAgZm9udC1zaXplOiBtaW4oNi41dncsIDYwcHgpO1xufVxuXG5mb290ZXIge1xuICAgIGZvbnQtc2l6ZTogbWluKDIuNXZ3LCAxcmVtKTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBlbmQ7XG59XG5cbi50ZXh0LW91dHB1dCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIGZvbnQtZmFtaWx5OiAnSGFuZHdyaXR0ZW4tdGV4dCc7XG59XG5cbi5tYWluLXdyYXBwZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzNzVweCwgMWZyKSk7XG4gICAgcm93LWdhcDogMjBweDtcbn1cblxuLm1haW4td3JhcHBlci1sZWZ0LFxuLm1haW4td3JhcHBlci1yaWdodCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMTBweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZvbnQtZmFtaWx5OiAnSGFuZHdyaXR0ZW4tdGV4dCc7XG4gICAgZm9udC1zaXplOiAxcmVtO1xufVxuXG4ucGxheWVyLWJvYXJkLFxuLm9wcG9uZW50LWJvYXJkIHtcbiAgICB3aWR0aDogbWluKDgwJSwgNDc1cHgpO1xuICAgIGFzcGVjdC1yYXRpbzogMS8xO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuXG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcbn1cblxuLnBsYXllci1ib2FyZCBkaXYsXG4ub3Bwb25lbnQtYm9hcmQgZGl2IHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZm9udC1mYW1pbHk6ICdIYW5kd3JpdHRlbi10ZXh0JywgJ0ZyYW5rbGluIEdvdGhpYyBNZWRpdW0nLCAnQXJpYWwgTmFycm93JyxcbiAgICAgICAgQXJpYWwsIHNhbnMtc2VyaWY7XG59XG5cbmRpdi5zaGlwIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaGlwLWdyYXkpO1xufVxuXG5kaXYub3Bwb25lbnQtaGl0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG59XG5cbmRpdi5vcHBvbmVudC1taXNzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzEsIDIzMywgNzEpO1xufVxuXG5kaXYucGxheWVyLWhpdCB7XG4gICAgYm9yZGVyOiAycHggc29saWQgcmVkO1xuICAgIHRleHQtc2hhZG93OiAxcHggMXB4IDJweCByZWQ7XG59XG5cbmRpdi5wbGF5ZXItbWlzcyB7XG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDcxLCAyMzMsIDcxKTtcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAycHggcmdiKDcxLCAyMzMsIDcxKTtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSwwQkFBMEI7SUFDMUIsNENBQThDO0FBQ2xEOztBQUVBO0lBQ0ksK0JBQStCO0lBQy9CLDRDQUE0QztBQUNoRDs7QUFFQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLG9CQUFvQjtJQUNwQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksbUNBQW1DO0lBQ25DLGFBQWE7SUFDYixhQUFhO0lBQ2Isa0RBQWtEO0FBQ3REOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTs7SUFFSTtrQkFDYztJQUNkLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLGFBQWE7SUFDYiwyREFBMkQ7SUFDM0QsYUFBYTtBQUNqQjs7QUFFQTs7SUFFSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLCtCQUErQjtJQUMvQixlQUFlO0FBQ25COztBQUVBOztJQUVJLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsdUJBQXVCOztJQUV2QixhQUFhO0lBQ2Isc0NBQXNDO0lBQ3RDLG1DQUFtQztBQUN2Qzs7QUFFQTs7SUFFSSx1QkFBdUI7SUFDdkIsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQjt5QkFDcUI7QUFDekI7O0FBRUE7SUFDSSxrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksa0NBQWtDO0lBQ2xDLHlDQUF5QztBQUM3Q1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdIZWFkZXItdGV4dCc7XFxuICAgIHNyYzogdXJsKCcuLi9mb250cy9EZWxhR290aGljT25lLVJlZ3VsYXIudHRmJyk7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ0hhbmR3cml0dGVuLXRleHQnO1xcbiAgICBzcmM6IHVybCgnLi4vZm9udHMvUGF0cmlja0hhbmQtUmVndWxhci50dGYnKTtcXG59XFxuXFxuKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgICAtLW9jZWFuLWJsdWU6ICM0ZmMxZmU7XFxuICAgIC0tc2hpcC1ncmF5OiAjYTBiYmM2O1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcbmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vY2Vhbi1ibHVlKTtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4oMTAwcHgsIDEwdmgpIDUwcHggMWZyIDMwcHg7XFxufVxcblxcbmE6dmlzaXRlZCB7XFxuICAgIGNvbG9yOiBibGFjaztcXG59XFxuXFxuaGVhZGVyLFxcbmZvb3RlciB7XFxuICAgIGZvbnQtZmFtaWx5OiAnSGVhZGVyLXRleHQnLCAnRnJhbmtsaW4gR290aGljIE1lZGl1bScsICdBcmlhbCBOYXJyb3cnLCBBcmlhbCxcXG4gICAgICAgIHNhbnMtc2VyaWY7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgICBmb250LXNpemU6IG1pbig2LjV2dywgNjBweCk7XFxufVxcblxcbmZvb3RlciB7XFxuICAgIGZvbnQtc2l6ZTogbWluKDIuNXZ3LCAxcmVtKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBlbmQ7XFxufVxcblxcbi50ZXh0LW91dHB1dCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgZm9udC1mYW1pbHk6ICdIYW5kd3JpdHRlbi10ZXh0JztcXG59XFxuXFxuLm1haW4td3JhcHBlciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzc1cHgsIDFmcikpO1xcbiAgICByb3ctZ2FwOiAyMHB4O1xcbn1cXG5cXG4ubWFpbi13cmFwcGVyLWxlZnQsXFxuLm1haW4td3JhcHBlci1yaWdodCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZvbnQtZmFtaWx5OiAnSGFuZHdyaXR0ZW4tdGV4dCc7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLnBsYXllci1ib2FyZCxcXG4ub3Bwb25lbnQtYm9hcmQge1xcbiAgICB3aWR0aDogbWluKDgwJSwgNDc1cHgpO1xcbiAgICBhc3BlY3QtcmF0aW86IDEvMTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG59XFxuXFxuLnBsYXllci1ib2FyZCBkaXYsXFxuLm9wcG9uZW50LWJvYXJkIGRpdiB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LWZhbWlseTogJ0hhbmR3cml0dGVuLXRleHQnLCAnRnJhbmtsaW4gR290aGljIE1lZGl1bScsICdBcmlhbCBOYXJyb3cnLFxcbiAgICAgICAgQXJpYWwsIHNhbnMtc2VyaWY7XFxufVxcblxcbmRpdi5zaGlwIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2hpcC1ncmF5KTtcXG59XFxuXFxuZGl2Lm9wcG9uZW50LWhpdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuZGl2Lm9wcG9uZW50LW1pc3Mge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzEsIDIzMywgNzEpO1xcbn1cXG5cXG5kaXYucGxheWVyLWhpdCB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcXG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggMnB4IHJlZDtcXG59XFxuXFxuZGl2LnBsYXllci1taXNzIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDcxLCAyMzMsIDcxKTtcXG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggMnB4IHJnYig3MSwgMjMzLCA3MSk7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi4vc3R5bGVzL3N0eWxlLmNzcyc7XG5cbmNvbnN0IGxvYWRQYWdlID0gKCkgPT4ge1xuICAgIC8vIGNyZWF0ZSBtYWluIHNlY3Rpb25zXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1haW4uY2xhc3NMaXN0LmFkZCgnbWFpbi13cmFwcGVyJyk7XG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XG5cbiAgICAvLyBhZGQgYSBkaXYgdG8gZGlzcGxheSB0ZXh0IHRvIHRoZSB1c2VyXG4gICAgY29uc3QgdGV4dE91dHB1dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRleHRPdXRwdXREaXYuY2xhc3NMaXN0LmFkZCgndGV4dC1vdXRwdXQnKTtcbiAgICB0ZXh0T3V0cHV0RGl2LnRleHRDb250ZW50ID0gJ1dlbGNvbWUgdG8gQmF0dGxlc2hpcCc7XG5cbiAgICAvLyBhZGQgdG8gYm9keVxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRleHRPdXRwdXREaXYpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobWFpbik7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChmb290ZXIpO1xuXG4gICAgLy8gYWRkIGhlYWRlciB0ZXh0XG4gICAgaGVhZGVyLnRleHRDb250ZW50ID0gJ0JBVFRMRVNISVAnO1xuXG4gICAgLy8gYWRkIGh5cGVybGluayB0byBHaXRIdWIgcGFnZVxuICAgIGNvbnN0IGdpdEh1YkxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgZ2l0SHViTGluay50ZXh0Q29udGVudCA9ICdHaXRodWInO1xuICAgIGdpdEh1YkxpbmsuaHJlZiA9XG4gICAgICAgICdodHRwczovL2dpdGh1Yi5jb20vZGFuaWVsa3VydHNhd3llci9vZGluLWphdmFzY3JpcHQtYmF0dGxlc2hpcCc7XG4gICAgZ2l0SHViTGluay50YXJnZXQgPSAnX2JsYW5rJztcbiAgICBnaXRIdWJMaW5rLnJlbCA9ICdub29wZW5lciBub3JlZmVycmVyJztcblxuICAgIC8vIGFwcGVuZCBsaW5rIHRvIGZvb3RlclxuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChnaXRIdWJMaW5rKTtcblxuICAgIC8vIG1ha2UgbGVmdCBhbmQgcmlnaHQgZGl2cyB3aXRoaW4gdGhlIG1haW4td3JhcHBlclxuICAgIGNvbnN0IGxlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZWZ0LmNsYXNzTGlzdC5hZGQoJ21haW4td3JhcHBlci1sZWZ0Jyk7XG5cbiAgICBjb25zdCByaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHJpZ2h0LmNsYXNzTGlzdC5hZGQoJ21haW4td3JhcHBlci1yaWdodCcpO1xuXG4gICAgLy8gYXBwZW5kIHRvIHRoZSBtYWluLXdyYXBwZXJcbiAgICBtYWluLmFwcGVuZENoaWxkKGxlZnQpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQocmlnaHQpO1xuXG4gICAgLy8gYWRkIGRpdnMgZm9yIHRoZSBsYWJlbHNcbiAgICBjb25zdCBwbGF5ZXJCb2FyZExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcGxheWVyQm9hcmRMYWJlbC50ZXh0Q29udGVudCA9ICdQbGF5ZXIgQm9hcmQnO1xuICAgIGNvbnN0IG9wcG9uZW50Qm9hcmRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG9wcG9uZW50Qm9hcmRMYWJlbC50ZXh0Q29udGVudCA9ICdPcHBvbmVudCBCb2FyZCc7XG5cbiAgICAvLyBhcHBlbmQgdGhlIGxhYmVsIGRpdnMgdG8gbGVmdCAmIHJpZ2h0IGRpdnNcbiAgICBsZWZ0LmFwcGVuZENoaWxkKHBsYXllckJvYXJkTGFiZWwpO1xuICAgIHJpZ2h0LmFwcGVuZENoaWxkKG9wcG9uZW50Qm9hcmRMYWJlbCk7XG5cbiAgICAvLyBhZGQgZGl2cyBmb3IgdGhlIGJvYXJkc1xuICAgIGNvbnN0IHBsYXllckJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcGxheWVyQm9hcmQuY2xhc3NMaXN0LmFkZCgncGxheWVyLWJvYXJkJyk7XG5cbiAgICBjb25zdCBvcHBvbmVudEJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgb3Bwb25lbnRCb2FyZC5jbGFzc0xpc3QuYWRkKCdvcHBvbmVudC1ib2FyZCcpO1xuXG4gICAgLy8gYXBwZW5kIHRoZSBwbGF5ZXJib2FyZCB0byB0aGUgbGVmdCBkaXZcbiAgICBsZWZ0LmFwcGVuZENoaWxkKHBsYXllckJvYXJkKTtcblxuICAgIC8vIGFwcGVuZCB0aGUgb3Bwb25lbnRib2FyZCB0byB0aGUgcmlnaHQgZGl2XG4gICAgcmlnaHQuYXBwZW5kQ2hpbGQob3Bwb25lbnRCb2FyZCk7XG5cbiAgICAvLyBkaXZpZGUgdGhlIGJvYXJkIGludG8gaW5kaXZpZHVhbCBzcXVhcmVzIHRvIGZvcm0gYSAxMHgxMCBncmlkXG5cbiAgICAvLyByZW1lbWJlciB0aGUgbnVtYmVyaW5nIGNvbnZlbnRpb25cbiAgICAvLyBjb29yZGluYXRlIC0gW2ksIGpdXG4gICAgLy8gc3RvcmUgdGhpcyBpbiBhIGN1c3RvbSBjc3MgYXR0cmlidXRlIGZvciB1c2VcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICAgICAgICBjb25zdCBwbGF5ZXJTcXVhcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGNvbnN0IG9wcG9uZW50U3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgICAgIC8vIHRoZSBpIGFuZCBqIHZhbHVlcyBhcmUgc3dhcHBlZFxuICAgICAgICAgICAgLy8gcm93cyBnb2luZyBkb3duIHdpbGwgYmUgaSwgYW5kIGNvbHVtcyBnb2luZyByaWdodCB3aWxsIGJlIGpcbiAgICAgICAgICAgIC8vIHNpbmNlIGdyaWQgZmlsbHMgbGVmdCB0byByaWdodCBiZWZvcmUgbW92aW5nIGRvd24sIHdlIHN3YXAgdG9cbiAgICAgICAgICAgIC8vIGVuc3VyZSB0aGUgaSBhbmQgaiB2YWx1ZXMgYXJlIGNvbnNpc3RlbnQgd2l0aCB0aGUgaW1wbGVtZW50YXRpb25cbiAgICAgICAgICAgIHBsYXllclNxdWFyZS5zZXRBdHRyaWJ1dGUoJ2knLCBqKTtcbiAgICAgICAgICAgIHBsYXllclNxdWFyZS5zZXRBdHRyaWJ1dGUoJ2onLCBpKTtcbiAgICAgICAgICAgIG9wcG9uZW50U3F1YXJlLnNldEF0dHJpYnV0ZSgnaScsIGopO1xuICAgICAgICAgICAgb3Bwb25lbnRTcXVhcmUuc2V0QXR0cmlidXRlKCdqJywgaSk7XG5cbiAgICAgICAgICAgIC8vIGFwcGVuZCBlYWNoIGRpdiB0byB0aGUgcmVzcGVjdGl2ZSBib2FyZFxuICAgICAgICAgICAgcGxheWVyQm9hcmQuYXBwZW5kQ2hpbGQocGxheWVyU3F1YXJlKTtcbiAgICAgICAgICAgIG9wcG9uZW50Qm9hcmQuYXBwZW5kQ2hpbGQob3Bwb25lbnRTcXVhcmUpO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuY29uc3QgcmVuZGVyUGxheWVyQm9hcmRTaGlwcyA9IChwbGF5ZXJCb2FyZEFycmF5KSA9PiB7XG4gICAgLy8gcmVuZGVyIHNoaXBzXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgICAgICAgaWYgKHBsYXllckJvYXJkQXJyYXlbaV1bal0gIT09IDApIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzaGlwU3F1YXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICAgICAgYC5wbGF5ZXItYm9hcmQgZGl2W2k9XCIke2l9XCJdW2o9XCIke2p9XCJdYFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgc2hpcFNxdWFyZS5jbGFzc0xpc3QuYWRkKCdzaGlwJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5jb25zdCByZW5kZXJQbGF5ZXJCb2FyZEF0dGFja3MgPSAocGxheWVyQm9hcmRBcnJheSwgYXR0YWNrcykgPT4ge1xuICAgIC8vIHJlbmRlciBhdHRhY2tzXG4gICAgYXR0YWNrcy5mb3JFYWNoKChjb29yZGluYXRlUGFpcikgPT4ge1xuICAgICAgICBjb25zdCBpID0gY29vcmRpbmF0ZVBhaXJbMF07XG4gICAgICAgIGNvbnN0IGogPSBjb29yZGluYXRlUGFpclsxXTtcbiAgICAgICAgY29uc3QgYXR0YWNrZWRTcXVhcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgYC5wbGF5ZXItYm9hcmQgZGl2W2k9XCIke2l9XCJdW2o9XCIke2p9XCJdYFxuICAgICAgICApO1xuICAgICAgICAvLyBpZiB0aGUgc3F1YXJlIGlzbid0IGEgMCwgaXQncyBhIHNoaXBcbiAgICAgICAgaWYgKHBsYXllckJvYXJkQXJyYXlbaV1bal0gIT09IDApIHtcbiAgICAgICAgICAgIC8vIGZpbGwgdGhlIHNwYWNlIHdpdGggYW4gWCB0byBtYXJrIGEgaGl0XG4gICAgICAgICAgICBhdHRhY2tlZFNxdWFyZS50ZXh0Q29udGVudCA9ICdYJztcbiAgICAgICAgICAgIGF0dGFja2VkU3F1YXJlLmNsYXNzTGlzdC5hZGQoJ3BsYXllci1oaXQnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGlmIGl0IGlzLCB0aGVuIGl0cyBhbiBlbXB0eSBzcGFjZVxuICAgICAgICAgICAgLy8gZmlsbCB0aGUgc3BhY2Ugd2l0aCBhbiBPIHRvIG1hcmsgYSBtaXNzXG4gICAgICAgICAgICBhdHRhY2tlZFNxdWFyZS50ZXh0Q29udGVudCA9ICdPJztcbiAgICAgICAgICAgIGF0dGFja2VkU3F1YXJlLmNsYXNzTGlzdC5hZGQoJ3BsYXllci1taXNzJyk7XG4gICAgICAgIH1cbiAgICB9KTtcbn07XG5cbmNvbnN0IHJlbmRlck9wcG9uZW50Qm9hcmQgPSAob3Bwb25lbnRCb2FyZEFycmF5LCBhdHRhY2tzKSA9PiB7XG4gICAgYXR0YWNrcy5mb3JFYWNoKChjb29yZGluYXRlUGFpcikgPT4ge1xuICAgICAgICBjb25zdCBpID0gY29vcmRpbmF0ZVBhaXJbMF07XG4gICAgICAgIGNvbnN0IGogPSBjb29yZGluYXRlUGFpclsxXTtcbiAgICAgICAgY29uc3QgYXR0YWNrZWRTcXVhcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgYC5vcHBvbmVudC1ib2FyZCBkaXZbaT1cIiR7aX1cIl1baj1cIiR7an1cIl1gXG4gICAgICAgICk7XG4gICAgICAgIC8vIGlmIHRoZSBzcXVhcmUgaXNuJ3QgYSAwLCBpdCdzIGEgc2hpcFxuICAgICAgICBpZiAob3Bwb25lbnRCb2FyZEFycmF5W2ldW2pdICE9PSAwKSB7XG4gICAgICAgICAgICAvLyBmaWxsIHRoZSBzcGFjZSB3aXRoIGFuIFggdG8gbWFyayBhIGhpdFxuICAgICAgICAgICAgYXR0YWNrZWRTcXVhcmUudGV4dENvbnRlbnQgPSAnWCc7XG4gICAgICAgICAgICBhdHRhY2tlZFNxdWFyZS5jbGFzc0xpc3QuYWRkKCdvcHBvbmVudC1oaXQnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGlmIGl0IGlzLCB0aGVuIGl0cyBhbiBlbXB0eSBzcGFjZVxuICAgICAgICAgICAgLy8gZmlsbCB0aGUgc3BhY2Ugd2l0aCBhbiBPIHRvIG1hcmsgYSBtaXNzXG4gICAgICAgICAgICBhdHRhY2tlZFNxdWFyZS50ZXh0Q29udGVudCA9ICdPJztcbiAgICAgICAgICAgIGF0dGFja2VkU3F1YXJlLmNsYXNzTGlzdC5hZGQoJ29wcG9uZW50LW1pc3MnKTtcbiAgICAgICAgfVxuICAgIH0pO1xufTtcblxuY29uc3QgdXBkYXRlVGV4dE91dHB1dCA9IChzdHJpbmcpID0+IHtcbiAgICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRleHQtb3V0cHV0Jyk7XG4gICAgdGV4dC50ZXh0Q29udGVudCA9IHN0cmluZztcbn07XG5cbmNvbnN0IGNsZWFyQm9hcmRzID0gKCkgPT4ge1xuICAgIC8vIGNsZWFyIHRoZSB2aWV3cyBmb3IgYm90aCBib2FyZHNcbiAgICBjb25zdCBzcXVhcmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICAgICAgJy5wbGF5ZXItYm9hcmQgZGl2LCAub3Bwb25lbnQtYm9hcmQgZGl2J1xuICAgICk7XG4gICAgc3F1YXJlcy5mb3JFYWNoKChzcXVhcmUpID0+IHtcbiAgICAgICAgc3F1YXJlLmNsYXNzTGlzdCA9ICcnO1xuICAgICAgICBzcXVhcmUudGV4dENvbnRlbnQgPSAnJztcbiAgICB9KTtcbn07XG5cbmV4cG9ydCB7XG4gICAgbG9hZFBhZ2UsXG4gICAgcmVuZGVyUGxheWVyQm9hcmRTaGlwcyxcbiAgICByZW5kZXJQbGF5ZXJCb2FyZEF0dGFja3MsXG4gICAgcmVuZGVyT3Bwb25lbnRCb2FyZCxcbiAgICB1cGRhdGVUZXh0T3V0cHV0LFxuICAgIGNsZWFyQm9hcmRzLFxufTtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNoaXAge1xuICAgIGNvbnN0cnVjdG9yKGxlbmd0aCkge1xuICAgICAgICB0aGlzLl9sZW5ndGggPSBsZW5ndGg7XG4gICAgICAgIHRoaXMuX2hpdHMgPSAwO1xuICAgIH1cblxuICAgIGdldCBsZW5ndGgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9sZW5ndGg7XG4gICAgfVxuXG4gICAgaGl0KCkge1xuICAgICAgICB0aGlzLl9oaXRzKys7XG4gICAgfVxuXG4gICAgaXNTdW5rKCkge1xuICAgICAgICBpZiAodGhpcy5faGl0cyA+PSB0aGlzLl9sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IFBsYXllciBmcm9tICcuL3BsYXllci5qcyc7XG5pbXBvcnQgR2FtZWJvYXJkIGZyb20gJy4vZ2FtZWJvYXJkLmpzJztcbmltcG9ydCBTaGlwIGZyb20gJy4vYmF0dGxlc2hpcC5qcyc7XG5pbXBvcnQgKiBhcyBET01Db250cm9sbGVyIGZyb20gJy4vRE9NQ29udHJvbGxlcic7XG5cbi8vIHRoaXMgdmFsdWUgYWxsb3dzIHVzIHRvIGtlZXAgdHJhY2sgb2YgdGhlIHR1cm5cbmxldCBwbGF5ZXJUdXJuID0gZmFsc2U7XG5cbmNvbnN0IHBsYWNlUGxheWVyU2hpcHMgPSAoKSA9PiB7XG4gICAgRE9NQ29udHJvbGxlci51cGRhdGVUZXh0T3V0cHV0KGBQbGFubmluZyBQaGFzZWApO1xuXG4gICAgLy8gcHJvbXB0IHBsYXllciB0byBwbGFjZSBzaGlwc1xuICAgIC8vIDEgdHdvIHNwYWNlLCAxIHRocmVlIHNwYWNlLCAyIGZvdXIgc3BhY2UsIGFuZCAxIGZpdmUgc3BhY2VcblxuICAgIGNvbnN0IHNoaXBMZW5ndGhzID0gWzIsIDMsIDQsIDQsIDVdO1xuXG4gICAgbGV0IGN1cnJlbnRMZW5ndGggPSBzaGlwTGVuZ3Rocy5zaGlmdCgpO1xuXG4gICAgLy8gdmFyaWFibGUgdG8gZGV0ZXJtaW5lIHdoZXRoZXIgYWxsIHJlcXVpcmVkIHNoaXBzIGhhdmUgYmVlbiBwbGFjZWRcbiAgICBsZXQgYWxsU2hpcHNQbGFjZWQgPSBmYWxzZTtcblxuICAgIHdoaWxlICghYWxsU2hpcHNQbGFjZWQpIHtcbiAgICAgICAgY29uc3Qgc3RhcnRDb29yZGluYXRlU3RyaW5nID0gcHJvbXB0KFxuICAgICAgICAgICAgJ0VudGVyIHRoZSBzdGFydCBjb29yZGluYXRlIGZvciBhIHNoaXAgb2YgbGVuZ3RoICcgK1xuICAgICAgICAgICAgICAgIGN1cnJlbnRMZW5ndGggK1xuICAgICAgICAgICAgICAgICcgaW4gdGhlIGZvbGxvd2luZyBmb3JtYXQ6IChjb2x1bW4sIHJvdyk6IFxcbiBDb2x1bW5zIGFyZSBudW1iZXJlZCAwLTkgZnJvbSBsZWZ0IHRvIHJpZ2h0LCBhbmQgcm93cyBhcmUgbnVtYmVyZWQgMC05IGZyb20gdG9wIHRvIGJvdHRvbSdcbiAgICAgICAgKTtcblxuICAgICAgICBpZiAoIS9cXChbMC05XSwgKlswLTldXFwpLy50ZXN0KHN0YXJ0Q29vcmRpbmF0ZVN0cmluZykpIHtcbiAgICAgICAgICAgIGFsZXJ0KFxuICAgICAgICAgICAgICAgICdJbnZhbGlkIGlucHV0LiBDb29yZGluYXRlIG11c3QgYmUgaW4gdGhlIGZvcm0gKGNvbHVtbiwgcm93KS4gUGxlYXNlIHRyeSBhZ2Fpbi4nXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgLy8gZm9yIGludmFsaWQgaW5wdXRzIHJldHVybiB0byB0aGUgYmVnaW5uaW5nXG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGlucHV0IGlzIHZhbGlkXG4gICAgICAgIC8vIGxldCdzIGV4dHJhY3QgdGhlIGkgYW5kIGogdmFsdWVzXG4gICAgICAgIGxldCBtYXRjaCA9IHN0YXJ0Q29vcmRpbmF0ZVN0cmluZy5tYXRjaCgvXFwoKFswLTldLCAqWzAtOV0pXFwpLyk7XG4gICAgICAgIGNvbnN0IGlTdGFydCA9ICttYXRjaFsxXVswXTtcbiAgICAgICAgY29uc3QgalN0YXJ0ID0gK21hdGNoWzFdWzJdO1xuICAgICAgICBjb25zdCBzdGFydENvb3JkaW5hdGUgPSBbaVN0YXJ0LCBqU3RhcnRdO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKCdTdGFydCBjb29yZGluYXRlOiAnICsgc3RhcnRDb29yZGluYXRlKTtcblxuICAgICAgICAvLyBub3cgbGV0J3MgcHJvbXB0IGZvciBhbiBlbmQgY29vcmRpbmF0ZVxuICAgICAgICBsZXQgdmFsaWRFbmRDb29yZGluYXRlID0gZmFsc2U7XG5cbiAgICAgICAgbGV0IGVuZENvb3JkaW5hdGVTdHJpbmcgPSBudWxsO1xuXG4gICAgICAgIHdoaWxlICghdmFsaWRFbmRDb29yZGluYXRlKSB7XG4gICAgICAgICAgICBlbmRDb29yZGluYXRlU3RyaW5nID0gcHJvbXB0KFxuICAgICAgICAgICAgICAgICdFbnRlciB0aGUgZW5kIGNvb3JkaW5hdGUgZm9yIGEgc2hpcCBvZiBsZW5ndGggJyArXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRMZW5ndGggK1xuICAgICAgICAgICAgICAgICAgICAnIGluIHRoZSBmb2xsb3dpbmcgZm9ybWF0OiAoY29sdW1uLCByb3cpOiBcXG4gQ29sdW1ucyBhcmUgbnVtYmVyZWQgMC05IGZyb20gbGVmdCB0byByaWdodCwgYW5kIHJvd3MgYXJlIG51bWJlcmVkIDAtOSBmcm9tIHRvcCB0byBib3R0b20nXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaWYgKCEvXFwoWzAtOV0sICpbMC05XVxcKS8udGVzdChlbmRDb29yZGluYXRlU3RyaW5nKSkge1xuICAgICAgICAgICAgICAgIGFsZXJ0KFxuICAgICAgICAgICAgICAgICAgICAnSW52YWxpZCBpbnB1dC4gQ29vcmRpbmF0ZSBtdXN0IGJlIGluIHRoZSBmb3JtIChjb2x1bW4sIHJvdykuIFBsZWFzZSB0cnkgYWdhaW4uJ1xuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgLy8gdGhpcyB3aWxsIHJldHVybiB0byB0aGUgc3RhcnQgb2YgdGhlIG5lc3RlZCB3aGlsZSBsb29wXG4gICAgICAgICAgICAgICAgLy8gc2luY2Ugd2UgZG9uJ3Qgd2FudCB0byBoYXZlIHRvIHJldHVybiBhbGwgdGhlIHdheSB0byB0aGUgdG9wIG9mIHRoZSB3aGlsZSBsb29wXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIHZhbGlkIGlucHV0LCB1cGRhdGUgdmFsaWRFbmRDb29yZGluYXRlIHZhbHVlXG4gICAgICAgICAgICAgICAgdmFsaWRFbmRDb29yZGluYXRlID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBpbnB1dCBpcyB2YWxpZFxuICAgICAgICAvLyBsZXQncyBleHRyYWN0IHRoZSBpIGFuZCBqIHZhbHVlc1xuICAgICAgICBtYXRjaCA9IGVuZENvb3JkaW5hdGVTdHJpbmcubWF0Y2goL1xcKChbMC05XSwgKlswLTldKVxcKS8pO1xuICAgICAgICBjb25zdCBpRW5kID0gK21hdGNoWzFdWzBdO1xuICAgICAgICBjb25zdCBqRW5kID0gK21hdGNoWzFdWzJdO1xuICAgICAgICBjb25zdCBlbmRDb29yZGluYXRlID0gW2lFbmQsIGpFbmRdO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKCdFbmQgY29vcmRpbmF0ZTogJyArIGVuZENvb3JkaW5hdGUpO1xuXG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIHBsYXllci5nYW1lYm9hcmQucGxhY2VTaGlwKFxuICAgICAgICAgICAgICAgIHN0YXJ0Q29vcmRpbmF0ZSxcbiAgICAgICAgICAgICAgICBlbmRDb29yZGluYXRlLFxuICAgICAgICAgICAgICAgIGN1cnJlbnRMZW5ndGhcbiAgICAgICAgICAgIClcbiAgICAgICAgKSB7XG4gICAgICAgICAgICAvLyByZW5kZXIgdGhlIHBsYXllciBib2FyZCBieSBzZW5kaW5nIHRoZSAyZCBhcnJheSByZXByZXNlbnRhdGlvbiBvZiB0aGUgYm9hcmQgYW5kIHRoZSBhdHRhY2tzIGFycmF5XG4gICAgICAgICAgICBET01Db250cm9sbGVyLnJlbmRlclBsYXllckJvYXJkU2hpcHMocGxheWVyLmdhbWVib2FyZC5ib2FyZCk7XG5cbiAgICAgICAgICAgIC8vIGlmIHN1Y2Nlc3NmdWwsIG1vdmUgdG8gdGhlIG5leHQgc2hpcCBsZW5ndGhcbiAgICAgICAgICAgIGN1cnJlbnRMZW5ndGggPSBzaGlwTGVuZ3Rocy5zaGlmdCgpO1xuICAgICAgICAgICAgLy8gaWYgdGhlIGN1cnJlbnQgbGVuZ3RoIGlzIG5vdyB1bmRlZmluZWQsIHRoZXJlIGlzIG5vdGhpbmcgaW4gdGhlIHNoaXBMZW5ndGhzIGFycmF5XG4gICAgICAgICAgICAvLyBzbyB3ZSBoYXZlIHBsYWNlZCBhbGwgb2YgdGhlIHJlcXVpcmVkIHNoaXBzXG4gICAgICAgICAgICBpZiAoY3VycmVudExlbmd0aCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgLy8gc2V0IGFsbFNoaXBzUGxhY2VkIHRvIHRydWUgc28gd2UgY2FuIGJyZWFrIG91dCBvZiB0aGUgbG9vcFxuICAgICAgICAgICAgICAgIGFsbFNoaXBzUGxhY2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGlmIHRoZSBwbGFjZW1lbnQgd2FzIHVuc3VjY2Vzc2Z1bCwgYWxlcnQgdGhlIHVzZXIgdGhhdCBpdCB3YXMgYW4gaW52YWxpZCBwbGFjZW1lbnRcbiAgICAgICAgICAgIGFsZXJ0KFxuICAgICAgICAgICAgICAgIFwiSW52YWxpZCBzaGlwIHBsYWNlbWVudC4gQ2hlY2sgdGhlIGNvb3JkaW5hdGVzIGFyZSBvbiB0aGUgc2FtZSB4IG9yIHkgcGxhbmUgYW5kIGRvbid0IG92ZXJsYXAsIGFuZCB0aGF0IGVhY2ggc2hpcCBoYXMgYSBvbmUgc3F1YXJlIGJ1ZmZlciBhbGwgdGhlIHdheSBhcm91bmQuIEFsc28gZW5zdXJlIHRoYXQgdGhlIGNvb3JkaW5hdGVzIHNwYW4gdGhlIGNvcnJlY3QgbGVuZ3RoIG9mIHRoZSBzaGlwIHlvdSBhcmUgcGxhY2luZy5cIlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIC8vIGFuZCBhbGxvdyB0aGUgZmxvdyB0byByZXR1cm4gdG8gdGhlIGJlZ2lubmluZyBvZiB0aGUgbG9vcCB0byB0cnkgdGhlIHNoaXAgcGxhY2VtZW50IGFnYWluXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBvbmNlIHRoZSBib2FyZCBpcyBmaWxsZWQgdXAsIHJlbmRlciB0aGUgcGxheWVyIGJvYXJkIGJ5IHNlbmRpbmcgdGhlIDJkIGFycmF5IHJlcHJlc2VudGF0aW9uIG9mIHRoZSBib2FyZCBhbmQgdGhlIGF0dGFja3MgYXJyYXlcbiAgICBET01Db250cm9sbGVyLnJlbmRlclBsYXllckJvYXJkU2hpcHMocGxheWVyLmdhbWVib2FyZC5ib2FyZCk7XG59O1xuXG5jb25zdCBwbGFjZU9wcG9uZW50U2hpcHMgPSAoKSA9PiB7XG4gICAgY29uc3Qgc2hpcExlbmd0aHMgPSBbMiwgMywgMywgNCwgNV07XG5cbiAgICBsZXQgY3VycmVudExlbmd0aCA9IHNoaXBMZW5ndGhzLnNoaWZ0KCk7XG5cbiAgICAvLyB2YXJpYWJsZSB0byBkZXRlcm1pbmUgd2hldGhlciBhbGwgcmVxdWlyZWQgc2hpcHMgaGF2ZSBiZWVuIHBsYWNlZFxuICAgIGxldCBhbGxTaGlwc1BsYWNlZCA9IGZhbHNlO1xuXG4gICAgLy8gcnVuIHdoaWxlIGFsbCBzaGlwcyBoYXZlbid0IGJlZW4gcGxhY2VkXG4gICAgd2hpbGUgKCFhbGxTaGlwc1BsYWNlZCkge1xuICAgICAgICAvLyBwbGFjZSBhIHNoaXAgb2YgbGVuZ3RoIGN1cnJlbnRMZW5ndGhcbiAgICAgICAgLy8gZ2VuZXJhdGUgcmFuZG9tIHN0YXJ0IGNvb3JkaW5hdGU6XG4gICAgICAgIGxldCBzdGFydENvb3JkaW5hdGUgPSBbXG4gICAgICAgICAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCksXG4gICAgICAgICAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCksXG4gICAgICAgIF07XG4gICAgICAgIC8vIGdlbmVyYXRlIGxpc3Qgb2YgcG9zc2libGUgbW92ZXMgdXNpbmcgbGVuZ3RoIG9mIHNoaXBcbiAgICAgICAgbGV0IGVuZENvb3JkaW5hdGVzID0gW107XG4gICAgICAgIC8vIGxlZnRcbiAgICAgICAgZW5kQ29vcmRpbmF0ZXMucHVzaChbXG4gICAgICAgICAgICBzdGFydENvb3JkaW5hdGVbMF0gLSAoY3VycmVudExlbmd0aCAtIDEpLFxuICAgICAgICAgICAgc3RhcnRDb29yZGluYXRlWzFdLFxuICAgICAgICBdKTtcbiAgICAgICAgLy8gcmlnaHRcbiAgICAgICAgZW5kQ29vcmRpbmF0ZXMucHVzaChbXG4gICAgICAgICAgICBzdGFydENvb3JkaW5hdGVbMF0gKyAoY3VycmVudExlbmd0aCAtIDEpLFxuICAgICAgICAgICAgc3RhcnRDb29yZGluYXRlWzFdLFxuICAgICAgICBdKTtcbiAgICAgICAgLy8gdXBcbiAgICAgICAgZW5kQ29vcmRpbmF0ZXMucHVzaChbXG4gICAgICAgICAgICBzdGFydENvb3JkaW5hdGVbMF0sXG4gICAgICAgICAgICBzdGFydENvb3JkaW5hdGVbMV0gLSAoY3VycmVudExlbmd0aCAtIDEpLFxuICAgICAgICBdKTtcbiAgICAgICAgLy8gZG93blxuICAgICAgICBlbmRDb29yZGluYXRlcy5wdXNoKFtcbiAgICAgICAgICAgIHN0YXJ0Q29vcmRpbmF0ZVswXSxcbiAgICAgICAgICAgIHN0YXJ0Q29vcmRpbmF0ZVsxXSArIChjdXJyZW50TGVuZ3RoIC0gMSksXG4gICAgICAgIF0pO1xuXG4gICAgICAgIC8vIGZpbHRlciBvdXQgbW92ZXMgb2ZmIHRoZSBib2FyZFxuICAgICAgICBlbmRDb29yZGluYXRlcyA9IGVuZENvb3JkaW5hdGVzLmZpbHRlcihcbiAgICAgICAgICAgIChjb29yZGluYXRlKSA9PlxuICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVbMF0gPj0gMCAmJlxuICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVbMF0gPCAxMCAmJlxuICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVbMV0gPj0gMCAmJlxuICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVbMV0gPCAxMFxuICAgICAgICApO1xuXG4gICAgICAgIC8vIHZhcmlhYmxlIHRvIGRldGVybWluZSB3aGV0aGVyIGEgc2hpcCBoYXMgYmVlbiBwbGFjZWRcbiAgICAgICAgbGV0IHZhbGlkTW92ZUZvdW5kID0gZmFsc2U7XG4gICAgICAgIC8vIHJ1biB3aGlsZSBhIHZhbGlkIHBsYWNlbWVudCBoYXNuJ3QgYmVlbiBmb3VuZCBhbmQgdGhlcmUgYXJlIHN0aWxsIG1vdmUgb3B0aW9ucyBhdmFpbGFibGVcbiAgICAgICAgd2hpbGUgKGVuZENvb3JkaW5hdGVzLmxlbmd0aCA+IDAgJiYgdmFsaWRNb3ZlRm91bmQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBsZXQgcmFuZEluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZW5kQ29vcmRpbmF0ZXMubGVuZ3RoKTtcbiAgICAgICAgICAgIGxldCBlbmRDb29yZGluYXRlID0gZW5kQ29vcmRpbmF0ZXMuc3BsaWNlKHJhbmRJbmRleCwgMSlbMF07XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgb3Bwb25lbnQuZ2FtZWJvYXJkLnBsYWNlU2hpcChcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRDb29yZGluYXRlLFxuICAgICAgICAgICAgICAgICAgICBlbmRDb29yZGluYXRlLFxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50TGVuZ3RoXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgLy8gaWYgcGxhY2VTaGlwIHJldHVybnMgdHJ1ZSwgc2hpcCB3YXMgcGxhY2VkIHN1Y2Nlc3NmdWxseVxuICAgICAgICAgICAgICAgIHZhbGlkTW92ZUZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2YWxpZE1vdmVGb3VuZCkge1xuICAgICAgICAgICAgLy8gaWYgYSB2YWxpZCBtb3ZlIGlzIGZvdW5kLCB0aGVuIHdlIG1vdmUgb24gdG8gdGhlIG5leHQgbGVuZ3RoIHNoaXBcbiAgICAgICAgICAgIGN1cnJlbnRMZW5ndGggPSBzaGlwTGVuZ3Rocy5zaGlmdCgpO1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRMZW5ndGggPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIC8vIGlmIHRoZSBjdXJyZW50TGVuZ3RoIHZhcmlhYmxlIGlzIG5vdyB1bmRlZmluZWQsIHdlIGhhdmUgcGxhY2VkIGFsbCB0aGUgc2hpcHNcbiAgICAgICAgICAgICAgICAvLyB1cGRhdGUgdGhlIHdoaWxlIGxvb3AgY29uZGl0aW9uIHRvIHN0b3AgcnVubmluZyB0aGUgcGxhY2VtZW50IGxvb3BcbiAgICAgICAgICAgICAgICBhbGxTaGlwc1BsYWNlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gaWYgYSB2YWxpZCBtb3ZlIHdhc24ndCBmb3VuZCwgdGhlbiB3ZSBnbyByZXR1cm4gdG8gdGhlIHRvcCBvZiB0aGUgbG9vcCBhbmRcbiAgICAgICAgLy8gcmVnZW5lcmF0ZSBhIG5ldyBzdGFydCBjb29yZGluYXRlIHRvIHRyeVxuICAgIH1cbn07XG5cbmNvbnN0IHN0YXJ0R2FtZSA9ICgpID0+IHtcbiAgICBwbGF5ZXIuZ2FtZWJvYXJkLmNsZWFyKCk7XG4gICAgb3Bwb25lbnQuZ2FtZWJvYXJkLmNsZWFyKCk7XG4gICAgRE9NQ29udHJvbGxlci5jbGVhckJvYXJkcygpO1xuICAgIHBsYWNlT3Bwb25lbnRTaGlwcygpO1xuICAgIHBsYWNlUGxheWVyU2hpcHMoKTtcbiAgICBET01Db250cm9sbGVyLnVwZGF0ZVRleHRPdXRwdXQoJ1BsYXllciB0dXJuJyk7XG4gICAgcGxheWVyVHVybiA9IHRydWU7XG5cbiAgICAvLyBhZGQgZXZlbnQgbGlzdGVuZXJzIHRvIHRoZSBvcHBvbmVudCBib2FyZCBzcXVhcmVzXG4gICAgY29uc3Qgb3Bwb25lbnRTcXVhcmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm9wcG9uZW50LWJvYXJkIGRpdicpO1xuICAgIG9wcG9uZW50U3F1YXJlcy5mb3JFYWNoKChzcXVhcmUpID0+XG4gICAgICAgIHNxdWFyZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+XG4gICAgICAgICAgICB0cmlnZ2VyUGxheWVyQXR0YWNrKFxuICAgICAgICAgICAgICAgICtzcXVhcmUuZ2V0QXR0cmlidXRlKCdpJyksXG4gICAgICAgICAgICAgICAgK3NxdWFyZS5nZXRBdHRyaWJ1dGUoJ2onKVxuICAgICAgICAgICAgKVxuICAgICAgICApXG4gICAgKTtcbn07XG5cbmNvbnN0IHRyaWdnZXJQbGF5ZXJBdHRhY2sgPSAoaSwgaikgPT4ge1xuICAgIC8vIG9ubHkgcnVuIHdoZW4gaXQgaXMgdGhlIHBsYXllciB0dXJuIHVzaW5nIHRoZSBwbGF5ZXJUdXJuIHZhcmlhYmxlXG4gICAgLy8gd2UgZG9uJ3Qgd2FudCB0aGUgdXNlciB0byBqdXN0IGJlIGFibGUgdG8gY2xpY2sgYSB0b24gb2YgdGltZXMgaW4gYSByb3cgYmVmb3JlIHRoZSBjb21wdXRlciBjYW4gZmluaXNoIGl0cyBtb3ZlXG4gICAgaWYgKHBsYXllclR1cm4pIHtcbiAgICAgICAgLy8gc2VuZCB0aGUgYXR0YWNrIHRvIHRoZSBvcHBvbmVudCBnYW1lIGJvYXJkXG4gICAgICAgIG9wcG9uZW50LmdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKFtpLCBqXSk7XG4gICAgICAgIC8vIHJlbmRlciB0aGUgb3Bwb25lbnQncyBib2FyZCB0byBzaG93IHRoZSByZXN1bHQgb2YgdGhlIG5ld2VzdCBhdHRhY2tcbiAgICAgICAgRE9NQ29udHJvbGxlci5yZW5kZXJPcHBvbmVudEJvYXJkKFxuICAgICAgICAgICAgb3Bwb25lbnQuZ2FtZWJvYXJkLmJvYXJkLFxuICAgICAgICAgICAgb3Bwb25lbnQuZ2FtZWJvYXJkLmF0dGFja3NcbiAgICAgICAgKTtcbiAgICAgICAgLy8gY2hhbmdlIHRoZSB0dXJuIHRyYWNrZXIgdmFyaWFibGVcbiAgICAgICAgcGxheWVyVHVybiA9IGZhbHNlO1xuXG4gICAgICAgIC8vIGNoZWNrIHRvIHNlZSBpZiB0aGUgZ2FtZSBpcyBvdmVyXG4gICAgICAgIGlmIChpc0dhbWVPdmVyKCkpIHtcbiAgICAgICAgICAgIC8vIGdhbWUgaXMgb3ZlclxuICAgICAgICAgICAgZW5kR2FtZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gZ2FtZSBpcyBub3Qgb3ZlclxuXG4gICAgICAgICAgICAvLyB1cGRhdGUgdGhlIGRpc3BsYXkgdGV4dFxuICAgICAgICAgICAgRE9NQ29udHJvbGxlci51cGRhdGVUZXh0T3V0cHV0KCdPcHBvbmVudCB0dXJuJyk7XG4gICAgICAgICAgICAvLyB3YWl0IDEgc2Vjb25kIGJlZm9yZSB0cmlnZ2VyaW5nIHRoZSBvcHBvbmVudCBhdHRhY2tcbiAgICAgICAgICAgIHNldFRpbWVvdXQodHJpZ2dlck9wcG9uZW50QXR0YWNrLCAxMDAwKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbmNvbnN0IHRyaWdnZXJPcHBvbmVudEF0dGFjayA9ICgpID0+IHtcbiAgICAvLyBjcmVhdGUgcmFuZG9tIGNvb3JkaW5hdGVcbiAgICBsZXQgaSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICBsZXQgaiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAvLyBjaGVjayB0byBtYWtlIHN1cmUgaXQncyB2YWxpZCAobm90IGluIHRoZSBhcnJheSBvZiBwcmV2aW91cyBhdHRhY2tzKVxuICAgIHdoaWxlIChcbiAgICAgICAgSlNPTi5zdHJpbmdpZnkob3Bwb25lbnQuZ2FtZWJvYXJkLmF0dGFja3MpLmluY2x1ZGVzKFxuICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoW2ksIGpdKVxuICAgICAgICApXG4gICAgKSB7XG4gICAgICAgIC8vIHdoaWxlIGludmFsaWQsIGtlZXAgY3JlYXRpbmcgbmV3IHJhbmRvbSBjb29yZGluYXRlc1xuICAgICAgICBpID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgICBqID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgIH1cblxuICAgIC8vIG9uY2UgdGhlIGF0dGFja3MgYXJyYXkgZG9lc24ndCBpbmNsdWRlIHRoZSBjb29yZGluYXRlLCB3ZSBjYW4gYXR0YWNrXG4gICAgcGxheWVyLmdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKFtpLCBqXSk7XG4gICAgLy8gcmVuZGVyIHRoZSBwbGF5ZXIgYm9hcmQgdG8gc2hvdyB0aGUgcmVzdWx0IG9mIHRoZSBuZXdlc3QgYXR0YWNrXG4gICAgRE9NQ29udHJvbGxlci5yZW5kZXJQbGF5ZXJCb2FyZEF0dGFja3MoXG4gICAgICAgIHBsYXllci5nYW1lYm9hcmQuYm9hcmQsXG4gICAgICAgIHBsYXllci5nYW1lYm9hcmQuYXR0YWNrc1xuICAgICk7XG5cbiAgICAvLyBjaGVjayBpZiB0aGUgZ2FtZSBpcyBPdmVyXG4gICAgaWYgKGlzR2FtZU92ZXIoKSkge1xuICAgICAgICBlbmRHYW1lKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gQ2hhbmdlIGRpc3BsYXkgdGV4dFxuICAgICAgICBET01Db250cm9sbGVyLnVwZGF0ZVRleHRPdXRwdXQoJ1BsYXllciB0dXJuJyk7XG4gICAgICAgIC8vIGNoYW5nZSB0aGUgdHVybiB0cmFja2VyIHZhcmlhYmxlXG4gICAgICAgIHBsYXllclR1cm4gPSB0cnVlO1xuICAgIH1cbn07XG5cbmNvbnN0IGlzR2FtZU92ZXIgPSAoKSA9PiB7XG4gICAgaWYgKHBsYXllci5nYW1lYm9hcmQuYWxsU2hpcHNTdW5rKCkgfHwgb3Bwb25lbnQuZ2FtZWJvYXJkLmFsbFNoaXBzU3VuaygpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59O1xuXG5jb25zdCBlbmRHYW1lID0gKCkgPT4ge1xuICAgIHBsYXllclR1cm4gPSBmYWxzZTtcbiAgICBpZiAocGxheWVyLmdhbWVib2FyZC5hbGxTaGlwc1N1bmsoKSkge1xuICAgICAgICByZXN0YXJ0R2FtZSgxMCwgZmFsc2UpO1xuICAgIH0gZWxzZSBpZiAob3Bwb25lbnQuZ2FtZWJvYXJkLmFsbFNoaXBzU3VuaygpKSB7XG4gICAgICAgIHJlc3RhcnRHYW1lKDEwLCB0cnVlKTtcbiAgICB9XG59O1xuXG5jb25zdCByZXN0YXJ0R2FtZSA9ICh0aW1lLCBwbGF5ZXJXb24pID0+IHtcbiAgICBpZiAocGxheWVyV29uKSB7XG4gICAgICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgRE9NQ29udHJvbGxlci51cGRhdGVUZXh0T3V0cHV0KFxuICAgICAgICAgICAgICAgIGBQbGF5ZXIgd29uISBSZXN0YXJ0aW5nIGdhbWUgaW4gJHt0aW1lLS19IHNlY29uZHMuLi5gXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaWYgKHRpbWUgPCAwKSB7XG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICAgICAgICAgICAgc3RhcnRHYW1lKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDEwMDApO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgRE9NQ29udHJvbGxlci51cGRhdGVUZXh0T3V0cHV0KFxuICAgICAgICAgICAgICAgIGBQbGF5ZXIgd29uISBSZXN0YXJ0aW5nIGdhbWUgaW4gJHt0aW1lLS19IHNlY29uZHMuLi5gXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaWYgKHRpbWUgPCAwKSB7XG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICAgICAgICAgICAgc3RhcnRHYW1lKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDEwMDApO1xuICAgIH1cbn07XG5cbkRPTUNvbnRyb2xsZXIubG9hZFBhZ2UoKTtcblxuY29uc3QgcGxheWVyID0gbmV3IFBsYXllcigpO1xuY29uc3Qgb3Bwb25lbnQgPSBuZXcgUGxheWVyKCk7XG5cbkRPTUNvbnRyb2xsZXIudXBkYXRlVGV4dE91dHB1dCgnR2FtZSBzdGFydGluZyBtb21lbnRhcmlseScpO1xuXG5zZXRUaW1lb3V0KHN0YXJ0R2FtZSwgNTAwKTtcbiIsImltcG9ydCBTaGlwIGZyb20gJy4vYmF0dGxlc2hpcCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVib2FyZCB7XG4gICAgLy8gY3JlYXRlIGEgYm9hcmRcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgLy8gdGhlIGJvYXJkIGlzIHJlcHJlc2VudGVkIGJ5IGEgMTB4MTAgMi1kaW1lbnNpb25hbCBhcnJheVxuICAgICAgICAvLyAwcyBhcmUgZW1wdHkgc3BhY2VzLCBzaGlwIHNwYWNlcyBjb250YWluIGEgcmVmZXJlbmNlIHRvIHRoZSBzaGlwIG9jY3VweWluZyB0aGF0IHNwYWNlXG4gICAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICB9XG5cbiAgICAvLyBzZXRzIHRoZSBib2FyZCB0byBhbGwgMHMgYW5kIHNldHMgdmFyaWFibGVzIHRvIHN0YXJ0aW5nIHZhbHVlc1xuICAgIGNsZWFyKCkge1xuICAgICAgICB0aGlzLl9ib2FyZCA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuX2JvYXJkW2ldID0gW107XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9ib2FyZFtpXVtqXSA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fYXR0YWNrcyA9IFtdO1xuICAgICAgICB0aGlzLl9zaGlwcyA9IDA7XG4gICAgICAgIHRoaXMuX3N1bmtlblNoaXBzID0gMDtcbiAgICB9XG5cbiAgICAvLyBnZXQgdGhlIGFycmF5IHJlcHJlc2VudGF0aW9uIG9mIHRoZSBib2FyZFxuICAgIC8vIEByZXR1cm4gdGhlIDJkIGFycmF5IHJlcHJlc2VudGF0aW9uIG9mIHRoZSBib2FyZFxuICAgIGdldCBib2FyZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2JvYXJkO1xuICAgIH1cblxuICAgIC8vIGdldCBhIGxpc3Qgb2YgY29vcmRpbmF0ZXMgdGhhdCBoYXZlIGJlZW4gYXR0YWNrZWRcbiAgICAvLyBAcmV0dXJuIGFuIGFycmF5IG9mIGNvb3JkaW5hdGVzIHByZXZpb3VzbHkgYXR0YWNrZWRcbiAgICBnZXQgYXR0YWNrcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2F0dGFja3M7XG4gICAgfVxuXG4gICAgLy8gcGxhY2VzIGEgc2hpcCBvbiB0aGUgYm9hcmQsIGZpbGxpbmcgdGhlIGNvb3JkaW5hdGVzIHdpdGggYSBudW1iZXIgcmVwcmVzZW50aW5nIHRoZSBsZW5ndGggb2YgdGhlIHNoaXBcbiAgICAvLyBAcGFyYW0gc3RhcnRDb29yZGluYXRlIHRoZSBzdGFydGluZyBjb29yZGluYXRlIG9mIHRoZSBmaXJzdCBwb2ludCBvZiB0aGUgc2hpcCBiZWluZyBwbGFjZWRcbiAgICAvLyBAcGFyYW0gZW5kQ29vcmRpbmF0ZSB0aGUgZW5kaW5nIGNvb3JkaW5hdGUgb2YgdGhlIGxhc3QgcG9pbnQgb2YgdGhlIHNoaXAgYmVpbmcgcGxhY2VkXG4gICAgLy8gQHBhcmFtIGxlbmd0aCB0aGUgbGVuZ3RoIG9mIHRoZSBzaGlwIGJlaW5nIHBsYWNlZFxuICAgIC8vIEByZXR1cm4gdHJ1ZSBpZiBwbGFjZWVtZW50IGlzIHN1Y2Nlc3NmdWxcbiAgICAvLyBAcmV0dXJuIGZhbHNlIGlmIHBsYWNlbWVudCBpcyB1bnN1Y2Nlc3NmdWxcbiAgICBwbGFjZVNoaXAoc3RhcnRDb29yZGluYXRlLCBlbmRDb29yZGluYXRlLCBsZW5ndGgpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgdGhpcy5jaGVja1NoaXBDb29yZGluYXRlVmFsaWRpdHkoXG4gICAgICAgICAgICAgICAgc3RhcnRDb29yZGluYXRlLFxuICAgICAgICAgICAgICAgIGVuZENvb3JkaW5hdGUsXG4gICAgICAgICAgICAgICAgbGVuZ3RoXG4gICAgICAgICAgICApXG4gICAgICAgICkge1xuICAgICAgICAgICAgLy8gY3JlYXRlIHRoZSBuZXcgc2hpcCBvYmplY3QgdG8gYmUgcGxhY2VkXG4gICAgICAgICAgICBjb25zdCBzaGlwID0gbmV3IFNoaXAobGVuZ3RoKTtcblxuICAgICAgICAgICAgLy8gcGxhY2UgdGhlIHNoaXAsIGZpbGwgdGhlIGNvb3JkaW5hdGVzIHdpdGhcbiAgICAgICAgICAgIC8vIHRoZSByZWZlcmVuY2UgdG8gdGhlIHNoaXAgb2JqZWN0XG4gICAgICAgICAgICBpZiAoc3RhcnRDb29yZGluYXRlWzBdID09PSBlbmRDb29yZGluYXRlWzBdKSB7XG4gICAgICAgICAgICAgICAgLy8gaG9yaXpvbnRhbCBwbGFjZW1lbnRcbiAgICAgICAgICAgICAgICBjb25zdCBpID0gc3RhcnRDb29yZGluYXRlWzBdO1xuICAgICAgICAgICAgICAgIGNvbnN0IGpTdGFydCA9IE1hdGgubWluKHN0YXJ0Q29vcmRpbmF0ZVsxXSwgZW5kQ29vcmRpbmF0ZVsxXSk7XG4gICAgICAgICAgICAgICAgY29uc3QgakVuZCA9IE1hdGgubWF4KHN0YXJ0Q29vcmRpbmF0ZVsxXSwgZW5kQ29vcmRpbmF0ZVsxXSk7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2hvcml6b250YWwgcGxhY2VtZW50JywgalN0YXJ0LCBqRW5kKTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0galN0YXJ0OyBqIDw9IGpFbmQ7IGorKykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9ib2FyZFtpXVtqXSA9IHNoaXA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChzdGFydENvb3JkaW5hdGVbMV0gPT09IGVuZENvb3JkaW5hdGVbMV0pIHtcbiAgICAgICAgICAgICAgICAvLyB2ZXJ0aWNhbCBwbGFjZW1lbnRcbiAgICAgICAgICAgICAgICBjb25zdCBqID0gc3RhcnRDb29yZGluYXRlWzFdO1xuICAgICAgICAgICAgICAgIGNvbnN0IGlTdGFydCA9IE1hdGgubWluKHN0YXJ0Q29vcmRpbmF0ZVswXSwgZW5kQ29vcmRpbmF0ZVswXSk7XG4gICAgICAgICAgICAgICAgY29uc3QgaUVuZCA9IE1hdGgubWF4KHN0YXJ0Q29vcmRpbmF0ZVswXSwgZW5kQ29vcmRpbmF0ZVswXSk7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3ZlcnRpY2FsIHBsYWNlbWVudCcsIGlTdGFydCwgaUVuZCk7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IGlTdGFydDsgaSA8PSBpRW5kOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fYm9hcmRbaV1bal0gPSBzaGlwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHBsYWNlbWVudCBzdWNjZXNzZnVsXG4gICAgICAgICAgICB0aGlzLl9zaGlwcysrO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyB0aGlzIGlzbid0IGEgdmFsaWQgcGF0aCBmb3IgYSBzaGlwLFxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gY2hlY2sgaWYgdGhlIGNvb3JkaW5hdGVzIGFyZSBvbiB0aGUgYm9hcmQsIGFuZCBtYXRjaCB0aGUgbGVuZ3RoIG9mIHRoZSBzaGlwXG4gICAgLy8gQHBhcmFtIHN0YXJ0Q29vcmRpbmF0ZSB0aGUgc3RhcnRpbmcgY29vcmRpbmF0ZSBvZiB0aGUgZmlyc3QgcG9pbnQgb2YgdGhlIHNoaXAgYmVpbmcgcGxhY2VkXG4gICAgLy8gQHBhcmFtIGVuZENvb3JkaW5hdGUgdGhlIGVuZGluZyBjb29yZGluYXRlIG9mIHRoZSBsYXN0IHBvaW50IG9mIHRoZSBzaGlwIGJlaW5nIHBsYWNlZFxuICAgIC8vIEBwYXJhbSBsZW5ndGggdGhlIGxlbmd0aCBvZiB0aGUgc2hpcCBiZWluZyBwbGFjZWRcbiAgICAvLyBAcmV0dXJuIHRydWUgaWYgdGhlIHNoaXAgY2FuIGJlIHBsYWNlZCBvbiB0aG9zZSBjb29yZGluYXRlc1xuICAgIC8vIEByZXR1cm4gZmFsc2UgaWYgdGhlIHNoaXAgY2Fubm90IGJlIHBsYWNlZCBvbiB0aG9zZSBjb29yZGluYXRlc1xuICAgIGNoZWNrU2hpcENvb3JkaW5hdGVWYWxpZGl0eShzdGFydENvb3JkaW5hdGUsIGVuZENvb3JkaW5hdGUsIGxlbmd0aCkge1xuICAgICAgICAvLyBjaGVjayB0byBlbnN1cmUgY29vcmRpbmF0ZXMgYXJlIHdpdGhpbiBib2FyZCBib3VuZHNcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgc3RhcnRDb29yZGluYXRlWzBdIDwgMCB8fFxuICAgICAgICAgICAgc3RhcnRDb29yZGluYXRlWzBdID49IDEwIHx8XG4gICAgICAgICAgICBzdGFydENvb3JkaW5hdGVbMV0gPCAwIHx8XG4gICAgICAgICAgICBzdGFydENvb3JkaW5hdGVbMV0gPj0gMTAgfHxcbiAgICAgICAgICAgIGVuZENvb3JkaW5hdGVbMF0gPCAwIHx8XG4gICAgICAgICAgICBlbmRDb29yZGluYXRlWzBdID49IDEwIHx8XG4gICAgICAgICAgICBlbmRDb29yZGluYXRlWzFdIDwgMCB8fFxuICAgICAgICAgICAgZW5kQ29vcmRpbmF0ZVsxXSA+PSAxMFxuICAgICAgICApIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNoZWNrIHRvIGVuc3VyZSB0aGF0IHRoZSBzaGlwIGlzIG9ubHkgcGxhY2VkIGhvcml6b250YWxseSBvciB2ZXJ0aWNhbGx5XG4gICAgICAgIC8vIHdlIGNhbiB0ZWxsIHRoaXMgYnkgY2hlY2tpbmcgaWYgZWl0aGVyIHRoZSB4IG9yIHkgY29vcmRpbmF0ZXMgb2YgdGhlIHN0YXJ0IG9yIGVuZCBib3RoIGRvbid0IG1hdGNoXG4gICAgICAgIC8vIHNpbmNlIGlmIG9uZSBtYXRjaGVzLCB0aGVuIHdlIG11c3QgZWl0aGVyIGJlIGluIHRoZSBzYW1lIHJvdywgb3IgY29sdW1uXG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIHN0YXJ0Q29vcmRpbmF0ZVswXSAhPT0gZW5kQ29vcmRpbmF0ZVswXSAmJlxuICAgICAgICAgICAgc3RhcnRDb29yZGluYXRlWzFdICE9PSBlbmRDb29yZGluYXRlWzFdXG4gICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gbm93IGp1c3QgdGVzdCBpZiB0aGUgbGVuZ3RoIG1hdGNoZXMgdGhlIGRpc3RhbmNlIGJldHdlZW4gdGhlIGNvb3JkaW5hdGVzXG4gICAgICAgIGlmIChzdGFydENvb3JkaW5hdGVbMF0gPT09IGVuZENvb3JkaW5hdGVbMF0pIHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBNYXRoLm1heChzdGFydENvb3JkaW5hdGVbMV0sIGVuZENvb3JkaW5hdGVbMV0pIC1cbiAgICAgICAgICAgICAgICAgICAgTWF0aC5taW4oc3RhcnRDb29yZGluYXRlWzFdLCBlbmRDb29yZGluYXRlWzFdKSArXG4gICAgICAgICAgICAgICAgICAgIDEgIT09XG4gICAgICAgICAgICAgICAgbGVuZ3RoXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoc3RhcnRDb29yZGluYXRlWzFdID09PSBlbmRDb29yZGluYXRlWzFdKSB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgTWF0aC5tYXgoc3RhcnRDb29yZGluYXRlWzBdLCBlbmRDb29yZGluYXRlWzBdKSAtXG4gICAgICAgICAgICAgICAgICAgIE1hdGgubWluKHN0YXJ0Q29vcmRpbmF0ZVswXSwgZW5kQ29vcmRpbmF0ZVswXSkgK1xuICAgICAgICAgICAgICAgICAgICAxICE9PVxuICAgICAgICAgICAgICAgIGxlbmd0aFxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gaWYgdGhlIGNvb3JkaW5hdGVzIGFyZSB2YWxpZCwgd2UgbmV4dCBoYXZlIHRvIGNoZWNrIHRvIG1ha2Ugc3VyZSB0aGUgc2hpcFxuICAgICAgICAvLyBkb2Vzbid0IG92ZXJsYXAgd2l0aCBwcmUtZXhpc3Rpbmcgc2hpcHNcbiAgICAgICAgaWYgKHN0YXJ0Q29vcmRpbmF0ZVswXSA9PT0gZW5kQ29vcmRpbmF0ZVswXSkge1xuICAgICAgICAgICAgLy8gdmVydGljYWwgcGxhY2VtZW50XG4gICAgICAgICAgICBjb25zdCBpID0gc3RhcnRDb29yZGluYXRlWzBdO1xuICAgICAgICAgICAgY29uc3QgalN0YXJ0ID0gTWF0aC5taW4oc3RhcnRDb29yZGluYXRlWzFdLCBlbmRDb29yZGluYXRlWzFdKTtcbiAgICAgICAgICAgIGNvbnN0IGpFbmQgPSBNYXRoLm1heChzdGFydENvb3JkaW5hdGVbMV0sIGVuZENvb3JkaW5hdGVbMV0pO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3ZlcnRpY2FsIHBsYWNlbWVudCcsIGpTdGFydCwgakVuZCk7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0galN0YXJ0OyBqIDw9IGpFbmQ7IGorKykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9ib2FyZFtpXVtqXSAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHN0YXJ0Q29vcmRpbmF0ZVsxXSA9PT0gZW5kQ29vcmRpbmF0ZVsxXSkge1xuICAgICAgICAgICAgLy8gaG9yaXpvbnRhbCBwbGFjZW1lbnRcbiAgICAgICAgICAgIGNvbnN0IGogPSBzdGFydENvb3JkaW5hdGVbMV07XG4gICAgICAgICAgICBjb25zdCBpU3RhcnQgPSBNYXRoLm1pbihzdGFydENvb3JkaW5hdGVbMF0sIGVuZENvb3JkaW5hdGVbMF0pO1xuICAgICAgICAgICAgY29uc3QgaUVuZCA9IE1hdGgubWF4KHN0YXJ0Q29vcmRpbmF0ZVswXSwgZW5kQ29vcmRpbmF0ZVswXSk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnaG9yaXpvbnRhbCBwbGFjZW1lbnQnLCBpU3RhcnQsIGlFbmQpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IGlTdGFydDsgaSA8PSBpRW5kOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fYm9hcmRbaV1bal0gIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGFuZCBhbHNvIGVuc3VyZSB0aGF0IHRoZXJlIGlzIGEgb25lIHNxdWFyZSBidWZmZXIgYmV0d2VlbiBzaGlwc1xuXG4gICAgICAgIC8vIHZlcnRpY2FsIHBsYWNlbWVudFxuICAgICAgICBpZiAoc3RhcnRDb29yZGluYXRlWzBdID09PSBlbmRDb29yZGluYXRlWzBdKSB7XG4gICAgICAgICAgICBjb25zdCBpID0gc3RhcnRDb29yZGluYXRlWzBdO1xuICAgICAgICAgICAgY29uc3QgalN0YXJ0ID0gTWF0aC5taW4oc3RhcnRDb29yZGluYXRlWzFdLCBlbmRDb29yZGluYXRlWzFdKTtcbiAgICAgICAgICAgIGNvbnN0IGpFbmQgPSBNYXRoLm1heChzdGFydENvb3JkaW5hdGVbMV0sIGVuZENvb3JkaW5hdGVbMV0pO1xuICAgICAgICAgICAgbGV0IGJ1ZmZlclNxdWFyZXMgPSBbXTtcbiAgICAgICAgICAgIC8vIGdldCB0aGUgc3Vycm91bmRpbmcgYnVmZmVyIHNxdWFyZXMgb24gZWl0aGVyIHNpZGVcbiAgICAgICAgICAgIGZvciAobGV0IGogPSBqU3RhcnQgLSAxOyBqIDw9IGpFbmQgKyAxOyBqKyspIHtcbiAgICAgICAgICAgICAgICBidWZmZXJTcXVhcmVzLnB1c2goW2kgLSAxLCBqXSk7XG4gICAgICAgICAgICAgICAgYnVmZmVyU3F1YXJlcy5wdXNoKFtpICsgMSwgal0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBhbHNvIGFkZCB0aGUgc2FtZSBjb2x1bW4gc3RhcnQvZW5kIHNxdWFyZXNcbiAgICAgICAgICAgIGJ1ZmZlclNxdWFyZXMucHVzaChbaSwgalN0YXJ0IC0gMV0pO1xuICAgICAgICAgICAgYnVmZmVyU3F1YXJlcy5wdXNoKFtpLCBqRW5kICsgMV0pO1xuXG4gICAgICAgICAgICAvLyBmaWx0ZXIgb3V0IG1vdmVzIG5vdCBvbiBib2FyZFxuICAgICAgICAgICAgYnVmZmVyU3F1YXJlcyA9IGJ1ZmZlclNxdWFyZXMuZmlsdGVyKFxuICAgICAgICAgICAgICAgIChjb29yZGluYXRlKSA9PlxuICAgICAgICAgICAgICAgICAgICBjb29yZGluYXRlWzBdID49IDAgJiZcbiAgICAgICAgICAgICAgICAgICAgY29vcmRpbmF0ZVswXSA8IDEwICYmXG4gICAgICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVbMV0gPj0gMCAmJlxuICAgICAgICAgICAgICAgICAgICBjb29yZGluYXRlWzFdIDwgMTBcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgYnVmZmVyU3F1YXJlcy5sZW5ndGg7IHgrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvb3JkaW5hdGUgPSBidWZmZXJTcXVhcmVzW3hdO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9ib2FyZFtjb29yZGluYXRlWzBdXVtjb29yZGluYXRlWzFdXSAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnYnVmZmVyIG5vdCBpbnRhY3QnKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChzdGFydENvb3JkaW5hdGVbMV0gPT09IGVuZENvb3JkaW5hdGVbMV0pIHtcbiAgICAgICAgICAgIC8vIHZlcnRpY2FsIHBsYWNlbWVudFxuICAgICAgICAgICAgY29uc3QgaiA9IHN0YXJ0Q29vcmRpbmF0ZVsxXTtcbiAgICAgICAgICAgIGNvbnN0IGlTdGFydCA9IE1hdGgubWluKHN0YXJ0Q29vcmRpbmF0ZVswXSwgZW5kQ29vcmRpbmF0ZVswXSk7XG4gICAgICAgICAgICBjb25zdCBpRW5kID0gTWF0aC5tYXgoc3RhcnRDb29yZGluYXRlWzBdLCBlbmRDb29yZGluYXRlWzBdKTtcbiAgICAgICAgICAgIGxldCBidWZmZXJTcXVhcmVzID0gW107XG4gICAgICAgICAgICAvLyBnZXQgdGhlIHN1cnJvdW5kaW5nIGJ1ZmZlciBzcXVhcmVzIG9uIGVpdGhlciBzaWRlXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gaVN0YXJ0IC0gMTsgaSA8PSBpRW5kICsgMTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgYnVmZmVyU3F1YXJlcy5wdXNoKFtpLCBqIC0gMV0pO1xuICAgICAgICAgICAgICAgIGJ1ZmZlclNxdWFyZXMucHVzaChbaSwgaiArIDFdKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gYWxzbyBhZGQgdGhlIHNhbWUgcm93IHN0YXJ0L2VuZCBzcXVhcmVzXG4gICAgICAgICAgICBidWZmZXJTcXVhcmVzLnB1c2goW2lTdGFydCAtIDEsIGpdKTtcbiAgICAgICAgICAgIGJ1ZmZlclNxdWFyZXMucHVzaChbaUVuZCArIDEsIGpdKTtcblxuICAgICAgICAgICAgLy8gZmlsdGVyIG91dCBtb3ZlcyBub3Qgb24gYm9hcmRcbiAgICAgICAgICAgIGJ1ZmZlclNxdWFyZXMgPSBidWZmZXJTcXVhcmVzLmZpbHRlcihcbiAgICAgICAgICAgICAgICAoY29vcmRpbmF0ZSkgPT5cbiAgICAgICAgICAgICAgICAgICAgY29vcmRpbmF0ZVswXSA+PSAwICYmXG4gICAgICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVbMF0gPCAxMCAmJlxuICAgICAgICAgICAgICAgICAgICBjb29yZGluYXRlWzFdID49IDAgJiZcbiAgICAgICAgICAgICAgICAgICAgY29vcmRpbmF0ZVsxXSA8IDEwXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IGJ1ZmZlclNxdWFyZXMubGVuZ3RoOyB4KyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb29yZGluYXRlID0gYnVmZmVyU3F1YXJlc1t4XTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fYm9hcmRbY29vcmRpbmF0ZVswXV1bY29vcmRpbmF0ZVsxXV0gIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2J1ZmZlciBub3QgaW50YWN0Jyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBhdCB0aGlzIHBvaW50LCB0aGUgbW92ZSBoYXMgYmVlbiBwcm92ZW4gdmFsaWRcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLy8gcmVjZWl2ZXMgYW5kIHByb2Nlc3NlcyBhbiBhdHRhY2tcbiAgICAvLyBAcGFyYW0gY29vcmRpbmF0ZVxuICAgIC8vIEByZXR1cm4gdHJ1ZSBpZiBhdHRhY2sgaGl0cyBhbiB1bmF0dGFja2VkIHNoaXAgc3F1YXJlXG4gICAgLy8gQHJldHVybiBmYWxzZSBpZiBhdHRhY2sgbWlzc2VzIG9yIGhpdHMgYW4gYWxyZWFkeSBhdHRhY2tlZCBzaGlwIHNxdWFyZVxuICAgIHJlY2VpdmVBdHRhY2soY29vcmRpbmF0ZSkge1xuICAgICAgICBjb25zdCBpID0gY29vcmRpbmF0ZVswXTtcbiAgICAgICAgY29uc3QgaiA9IGNvb3JkaW5hdGVbMV07XG5cbiAgICAgICAgLy8gcmV0dXJuIGZhbHNlIGZvciBtb3ZlcyBvZmYgdGhlIGdhbWUgYm9hcmRcbiAgICAgICAgaWYgKGkgPCAwIHx8IGkgPj0gMTAgfHwgaiA8IDAgfHwgaiA+PSAxMCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgLy8gZG9uJ3Qgd29ycnkgYWJvdXQgc3RvcmluZyB0aGVtIHNpbmNlIHRoZXkgd29uJ3QgYmUgZGlzcGxheWVkXG4gICAgICAgIH1cblxuICAgICAgICAvLyBpZiBpdCBpcyBhIHZhbGlkIG1vdmUsIHRoZW4gd2UgY2FuIGNoZWNrIGlmIGl0IHdhcyBhIHByZXZpb3VzbHkgYXR0YWNrZWQgc3F1YXJlXG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHRoaXMuX2F0dGFja3MpLmluY2x1ZGVzKEpTT04uc3RyaW5naWZ5KGNvb3JkaW5hdGUpKVxuICAgICAgICApIHtcbiAgICAgICAgICAgIC8vIGlmIHNvLCByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGlmIGl0IGlzIGEgdmFsaWQgbW92ZSB0byBhbiB1bnRvdWNoZWQgc3F1YXJlLCBjaGVjayB0byBzZWUgaWYgaXQgaGl0IGEgc2hpcFxuICAgICAgICBpZiAodGhpcy5fYm9hcmRbaV1bal0gIT09IDApIHtcbiAgICAgICAgICAgIC8vIGlmIGl0J3Mgbm90IDAsIHRoZW4gd2UgaGl0IGEgc2hpcFxuICAgICAgICAgICAgLy8gc2VuZCB0aGUgaGl0IG1lc3NhZ2UgdG8gdGhlIFNoaXBcbiAgICAgICAgICAgIHRoaXMuX2JvYXJkW2ldW2pdLmhpdCgpO1xuICAgICAgICAgICAgLy8gcmVjb3JkIHRoZSBhdHRhY2tcbiAgICAgICAgICAgIHRoaXMuX2F0dGFja3MucHVzaChjb29yZGluYXRlKTtcblxuICAgICAgICAgICAgLy8gY2hlY2sgdG8gc2VlIGlmIHRoZSBzaGlwIGlzIHN1bmtcbiAgICAgICAgICAgIGlmICh0aGlzLl9ib2FyZFtpXVtqXS5pc1N1bmsoKSkge1xuICAgICAgICAgICAgICAgIC8vIGlmIHNvLCBpbmNyZW1lbnQgdGhlIHN1bmtlblNoaXBzIHZhcmlhYmxlXG4gICAgICAgICAgICAgICAgdGhpcy5fc3Vua2VuU2hpcHMrKztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gYW5kIHJldHVybiB0cnVlXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGlmIGl0IGlzIDAsIHRoZW4gbm8gc2hpcHMgd2VyZSBoYXJtZWRcbiAgICAgICAgICAgIC8vIHJlY29yZCB0aGUgY29vcmRpbmF0ZSBpbiB0aGUgYXR0YWNrcyBhcnJheVxuICAgICAgICAgICAgdGhpcy5fYXR0YWNrcy5wdXNoKGNvb3JkaW5hdGUpO1xuICAgICAgICAgICAgLy8gYW5kIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gZmluZCBpZiBhbGwgc2hpcHMgb24gdGhlIGdhbWVib2FyZCBhcmUgc3Vua1xuICAgIC8vIEByZXR1cm5zIHRydWUgaWYgYWxsIHNoaXBzIGluIHBsYXkgaGF2ZSBiZWVuIHN1bmtcbiAgICAvLyBAcmV0dXJucyBmYWxzZSBpZiBub3QgYWxsIHNoaXBzIGluIHBsYXkgaGF2ZSBiZWVuIHN1bmtcbiAgICBhbGxTaGlwc1N1bmsoKSB7XG4gICAgICAgIGlmICh0aGlzLl9zdW5rZW5TaGlwcyA+PSB0aGlzLl9zaGlwcykge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgR2FtZWJvYXJkIGZyb20gJy4vZ2FtZWJvYXJkJztcbmltcG9ydCBTaGlwIGZyb20gJy4vYmF0dGxlc2hpcCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuX2dhbWVib2FyZCA9IG5ldyBHYW1lYm9hcmQoKTtcbiAgICB9XG4gICAgZ2V0IGdhbWVib2FyZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dhbWVib2FyZDtcbiAgICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=