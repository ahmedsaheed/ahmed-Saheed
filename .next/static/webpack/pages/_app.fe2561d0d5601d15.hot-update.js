"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[3].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[3].oneOf[8].use[2]!./styles/style.css":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[3].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[3].oneOf[8].use[2]!./styles/style.css ***!
  \******************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\n    --color-default: #fff;\\n    --text-color: #333;  \\n    --color-border:#e7e7e7;\\n    --header-height: 3.5rem;\\n\\n  }\\n  @media (prefers-color-scheme: dark){\\n      :root{\\n          --color-default: #181818;\\n          --text-color: #e0e0e0;\\n          --color-border:#e7e7e7;\\n          --header-height: 3.5rem;\\n\\n\\n      }\\n  }\\n  [data-theme='dark'] {\\n    --color-default: #181818;\\n    --text-color: #e0e0e0;\\n    --color-border:#e7e7e7;\\n    --header-height: 3.5rem;\\n\\n\\n  }\\n  [data-theme='light'] {\\n    --color-default: #fff;\\n    --text-color: #333;\\n    --header-height: 3.5rem;\\n\\n  }\\n\\n  body {\\n      background-color: var(--color-default);\\n      font-family: 100%/1.5 system-ui,helvetica,sans-serif;\\n      color: var(--text-color);\\n      --header-height: 3.5rem;\\n\\n  }\\n\\n  p {\\n    margin-bottom: 1.6rem;\\n    font-size: 1.125rem;\\n}\\n.feature :last-child {\\n    margin-bottom: 0;\\n}\\n.feature:hover{\\n    outline: 1px solid var(--text-color);\\n    border-radius: 10px;\\n}\\n.feature a {\\n    text-decoration: none;\\n    color: var(--text-color)\\n\\n}\\nh1, h2, h3, h4, h5 {\\n    line-height: 1.1;\\n}\\n\\n  .tagline {\\n    font-size: 1.5rem;\\n    font-weight: 300;\\n    max-width: 50ch;\\n    margin-left: auto;\\n    margin-right: auto;\\n    line-height: 1.3;\\n  }\\n\\n  .cta, .tagline {\\n    margin-bottom: 2rem;\\n}\\n\\n.feature-grid {\\n    display: flex;\\n    flex-wrap: wrap;\\n    justify-content: space-evenly;\\n    margin: 4rem auto;\\n    max-width: 80rem;\\n    padding: 0 2rem;\\n}\\n\\n.feature {\\n    flex: 1 1 33%;\\n    min-width: 300px;\\n    padding: 1rem;\\n}\\n\\n.feature-title {\\n    font-size: 2.2rem;\\n    margin-top: 0;\\n    margin-bottom: 0.5rem;\\n    font-weight: bold;\\n}\\n\\nh2 {\\n    font-family: 'Lobster', cursive;\\n    /*font-weight: bold;*/\\n    text-align: center;\\n    margin-top: 80px;\\n    margin-bottom: 60px;\\n}\\n.cta{\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n}\\n/* .btn, .is-hidden {\\n    white-space: nowrap;\\n} */\\n\\n.header {\\n    background: var(--color-default);\\n    position: fixed;\\n    top: 0;\\n    left: 0;\\n    z-index: 200;\\n    width: 100%;\\n    overflow: hidden;\\n    display: flex;\\n    justify-content: space-between;\\n    padding: 0 1rem;\\n    border-bottom: 0.0625rem solid var(--color-border);\\n    transition: background .3s;\\n}\\n.header, .header-area {\\n    height: var(--header-height);\\n}\\n\\n.menu-logo {\\n    font-weight: 700;\\n    font-size: 1.25rem;\\n}\\n.menu-item {\\n    align-items: center;\\n    padding: 0 1rem;\\n    font-size: 1rem;\\n    font-weight: 500;\\n}\\n\\n.menu, .menu-item {\\n    display: flex;\\n    height: 100%;\\n}\\n\\nh1{\\n    font-family: 'Lobster', cursive;\\n    /* text-align: center;\\n     margin-top: 250px;\\n    font-size: 6em; */\\n\\n}\\np{\\n    font-family: 'Lobster';\\n    font-size: 1.2em;\\n    \\n}\\ndiv.social-network a {\\n    background-color: var(--color-default);\\n    border-radius: 100%;\\n    color: #4f929f;\\n    padding: 5px 6px 5px 6px;\\n    position: relative; \\n    top: 25px;\\n\\n}\\n\\n.theme{\\n    padding-bottom: 30px;\\n    margin-left: 90px;\\n}\\n.footer {\\n    padding: 2rem 0;\\n    border-top: 0.0625rem solid var(--color-border);\\n}\\n\\n.footer-text{\\n    /* position: relative; */\\n    left: 50%;\\n    right: 50%\\n}\\n\\n.back-titre{\\n  \\n    display: flex;\\n    max-width: 40rem;\\n    align-items: center;\\n    justify-content: center;\\n    position: relative;\\n    margin: 4rem auto 2rem;\\n\\n}\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/style.css\"],\"names\":[],\"mappings\":\"AAAA;IACI,qBAAqB;IACrB,kBAAkB;IAClB,sBAAsB;IACtB,uBAAuB;;EAEzB;EACA;MACI;UACI,wBAAwB;UACxB,qBAAqB;UACrB,sBAAsB;UACtB,uBAAuB;;;MAG3B;EACJ;EACA;IACE,wBAAwB;IACxB,qBAAqB;IACrB,sBAAsB;IACtB,uBAAuB;;;EAGzB;EACA;IACE,qBAAqB;IACrB,kBAAkB;IAClB,uBAAuB;;EAEzB;;EAEA;MACI,sCAAsC;MACtC,oDAAoD;MACpD,wBAAwB;MACxB,uBAAuB;;EAE3B;;EAEA;IACE,qBAAqB;IACrB,mBAAmB;AACvB;AACA;IACI,gBAAgB;AACpB;AACA;IACI,oCAAoC;IACpC,mBAAmB;AACvB;AACA;IACI,qBAAqB;IACrB;;AAEJ;AACA;IACI,gBAAgB;AACpB;;EAEE;IACE,iBAAiB;IACjB,gBAAgB;IAChB,eAAe;IACf,iBAAiB;IACjB,kBAAkB;IAClB,gBAAgB;EAClB;;EAEA;IACE,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,eAAe;IACf,6BAA6B;IAC7B,iBAAiB;IACjB,gBAAgB;IAChB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,gBAAgB;IAChB,aAAa;AACjB;;AAEA;IACI,iBAAiB;IACjB,aAAa;IACb,qBAAqB;IACrB,iBAAiB;AACrB;;AAEA;IACI,+BAA+B;IAC/B,qBAAqB;IACrB,kBAAkB;IAClB,gBAAgB;IAChB,mBAAmB;AACvB;AACA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;AACA;;GAEG;;AAEH;IACI,gCAAgC;IAChC,eAAe;IACf,MAAM;IACN,OAAO;IACP,YAAY;IACZ,WAAW;IACX,gBAAgB;IAChB,aAAa;IACb,8BAA8B;IAC9B,eAAe;IACf,kDAAkD;IAClD,0BAA0B;AAC9B;AACA;IACI,4BAA4B;AAChC;;AAEA;IACI,gBAAgB;IAChB,kBAAkB;AACtB;AACA;IACI,mBAAmB;IACnB,eAAe;IACf,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,YAAY;AAChB;;AAEA;IACI,+BAA+B;IAC/B;;qBAEiB;;AAErB;AACA;IACI,sBAAsB;IACtB,gBAAgB;;AAEpB;AACA;IACI,sCAAsC;IACtC,mBAAmB;IACnB,cAAc;IACd,wBAAwB;IACxB,kBAAkB;IAClB,SAAS;;AAEb;;AAEA;IACI,oBAAoB;IACpB,iBAAiB;AACrB;AACA;IACI,eAAe;IACf,+CAA+C;AACnD;;AAEA;IACI,wBAAwB;IACxB,SAAS;IACT;AACJ;;AAEA;;IAEI,aAAa;IACb,gBAAgB;IAChB,mBAAmB;IACnB,uBAAuB;IACvB,kBAAkB;IAClB,sBAAsB;;AAE1B\",\"sourcesContent\":[\":root {\\n    --color-default: #fff;\\n    --text-color: #333;  \\n    --color-border:#e7e7e7;\\n    --header-height: 3.5rem;\\n\\n  }\\n  @media (prefers-color-scheme: dark){\\n      :root{\\n          --color-default: #181818;\\n          --text-color: #e0e0e0;\\n          --color-border:#e7e7e7;\\n          --header-height: 3.5rem;\\n\\n\\n      }\\n  }\\n  [data-theme='dark'] {\\n    --color-default: #181818;\\n    --text-color: #e0e0e0;\\n    --color-border:#e7e7e7;\\n    --header-height: 3.5rem;\\n\\n\\n  }\\n  [data-theme='light'] {\\n    --color-default: #fff;\\n    --text-color: #333;\\n    --header-height: 3.5rem;\\n\\n  }\\n\\n  body {\\n      background-color: var(--color-default);\\n      font-family: 100%/1.5 system-ui,helvetica,sans-serif;\\n      color: var(--text-color);\\n      --header-height: 3.5rem;\\n\\n  }\\n\\n  p {\\n    margin-bottom: 1.6rem;\\n    font-size: 1.125rem;\\n}\\n.feature :last-child {\\n    margin-bottom: 0;\\n}\\n.feature:hover{\\n    outline: 1px solid var(--text-color);\\n    border-radius: 10px;\\n}\\n.feature a {\\n    text-decoration: none;\\n    color: var(--text-color)\\n\\n}\\nh1, h2, h3, h4, h5 {\\n    line-height: 1.1;\\n}\\n\\n  .tagline {\\n    font-size: 1.5rem;\\n    font-weight: 300;\\n    max-width: 50ch;\\n    margin-left: auto;\\n    margin-right: auto;\\n    line-height: 1.3;\\n  }\\n\\n  .cta, .tagline {\\n    margin-bottom: 2rem;\\n}\\n\\n.feature-grid {\\n    display: flex;\\n    flex-wrap: wrap;\\n    justify-content: space-evenly;\\n    margin: 4rem auto;\\n    max-width: 80rem;\\n    padding: 0 2rem;\\n}\\n\\n.feature {\\n    flex: 1 1 33%;\\n    min-width: 300px;\\n    padding: 1rem;\\n}\\n\\n.feature-title {\\n    font-size: 2.2rem;\\n    margin-top: 0;\\n    margin-bottom: 0.5rem;\\n    font-weight: bold;\\n}\\n\\nh2 {\\n    font-family: 'Lobster', cursive;\\n    /*font-weight: bold;*/\\n    text-align: center;\\n    margin-top: 80px;\\n    margin-bottom: 60px;\\n}\\n.cta{\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n}\\n/* .btn, .is-hidden {\\n    white-space: nowrap;\\n} */\\n\\n.header {\\n    background: var(--color-default);\\n    position: fixed;\\n    top: 0;\\n    left: 0;\\n    z-index: 200;\\n    width: 100%;\\n    overflow: hidden;\\n    display: flex;\\n    justify-content: space-between;\\n    padding: 0 1rem;\\n    border-bottom: 0.0625rem solid var(--color-border);\\n    transition: background .3s;\\n}\\n.header, .header-area {\\n    height: var(--header-height);\\n}\\n\\n.menu-logo {\\n    font-weight: 700;\\n    font-size: 1.25rem;\\n}\\n.menu-item {\\n    align-items: center;\\n    padding: 0 1rem;\\n    font-size: 1rem;\\n    font-weight: 500;\\n}\\n\\n.menu, .menu-item {\\n    display: flex;\\n    height: 100%;\\n}\\n\\nh1{\\n    font-family: 'Lobster', cursive;\\n    /* text-align: center;\\n     margin-top: 250px;\\n    font-size: 6em; */\\n\\n}\\np{\\n    font-family: 'Lobster';\\n    font-size: 1.2em;\\n    \\n}\\ndiv.social-network a {\\n    background-color: var(--color-default);\\n    border-radius: 100%;\\n    color: #4f929f;\\n    padding: 5px 6px 5px 6px;\\n    position: relative; \\n    top: 25px;\\n\\n}\\n\\n.theme{\\n    padding-bottom: 30px;\\n    margin-left: 90px;\\n}\\n.footer {\\n    padding: 2rem 0;\\n    border-top: 0.0625rem solid var(--color-border);\\n}\\n\\n.footer-text{\\n    /* position: relative; */\\n    left: 50%;\\n    right: 50%\\n}\\n\\n.back-titre{\\n  \\n    display: flex;\\n    max-width: 40rem;\\n    align-items: center;\\n    justify-content: center;\\n    position: relative;\\n    margin: 4rem auto 2rem;\\n\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZls4XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbOF0udXNlWzJdIS4vc3R5bGVzL3N0eWxlLmNzcy5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBQTtBQUN3SDtBQUN4SCw4QkFBOEIsa0hBQTJCO0FBQ3pEO0FBQ0EsaURBQWlELDRCQUE0QiwyQkFBMkIsNkJBQTZCLDhCQUE4QixPQUFPLHdDQUF3QyxjQUFjLHFDQUFxQyxrQ0FBa0MsbUNBQW1DLG9DQUFvQyxhQUFhLEtBQUsseUJBQXlCLCtCQUErQiw0QkFBNEIsNkJBQTZCLDhCQUE4QixTQUFTLDBCQUEwQiw0QkFBNEIseUJBQXlCLDhCQUE4QixPQUFPLFlBQVksK0NBQStDLDZEQUE2RCxpQ0FBaUMsZ0NBQWdDLE9BQU8sU0FBUyw0QkFBNEIsMEJBQTBCLEdBQUcsd0JBQXdCLHVCQUF1QixHQUFHLGlCQUFpQiwyQ0FBMkMsMEJBQTBCLEdBQUcsY0FBYyw0QkFBNEIsbUNBQW1DLHNCQUFzQix1QkFBdUIsR0FBRyxnQkFBZ0Isd0JBQXdCLHVCQUF1QixzQkFBc0Isd0JBQXdCLHlCQUF5Qix1QkFBdUIsS0FBSyxzQkFBc0IsMEJBQTBCLEdBQUcsbUJBQW1CLG9CQUFvQixzQkFBc0Isb0NBQW9DLHdCQUF3Qix1QkFBdUIsc0JBQXNCLEdBQUcsY0FBYyxvQkFBb0IsdUJBQXVCLG9CQUFvQixHQUFHLG9CQUFvQix3QkFBd0Isb0JBQW9CLDRCQUE0Qix3QkFBd0IsR0FBRyxRQUFRLHNDQUFzQywwQkFBMEIsMkJBQTJCLHVCQUF1QiwwQkFBMEIsR0FBRyxPQUFPLG9CQUFvQiw4QkFBOEIsMEJBQTBCLEdB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QTBCLDJCQUEyQix1QkFBdUIsMEJBQTBCLEdBQUcsT0FBTyxvQkFBb0IsOEJBQThCLDBCQUEwQixHQUFHLHVCQUF1QiwwQkFBMEIsSUFBSSxlQUFlLHVDQUF1QyxzQkFBc0IsYUFBYSxjQUFjLG1CQUFtQixrQkFBa0IsdUJBQXVCLG9CQUFvQixxQ0FBcUMsc0JBQXNCLHlEQUF5RCxpQ0FBaUMsR0FBRyx5QkFBeUIsbUNBQW1DLEdBQUcsZ0JBQWdCLHVCQUF1Qix5QkFBeUIsR0FBRyxjQUFjLDBCQUEwQixzQkFBc0Isc0JBQXNCLHVCQUF1QixHQUFHLHVCQUF1QixvQkFBb0IsbUJBQW1CLEdBQUcsT0FBTyxzQ0FBc0MsNEJBQTRCLHlCQUF5QixzQkFBc0IsT0FBTyxJQUFJLDZCQUE2Qix1QkFBdUIsU0FBUyx3QkFBd0IsNkNBQTZDLDBCQUEwQixxQkFBcUIsK0JBQStCLDBCQUEwQixnQkFBZ0IsS0FBSyxXQUFXLDJCQUEyQix3QkFBd0IsR0FBRyxXQUFXLHNCQUFzQixzREFBc0QsR0FBRyxpQkFBaUIsNkJBQTZCLGtCQUFrQixtQkFBbUIsZ0JBQWdCLHdCQUF3Qix1QkFBdUIsMEJBQTBCLDhCQUE4Qix5QkFBeUIsNkJBQTZCLEtBQUsscUJBQXFCO0FBQ3g1UTtBQUNBLCtEQUFlLHVCQUF1QixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3N0eWxlcy9zdHlsZS5jc3M/NDQ5ZiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgICAtLWNvbG9yLWRlZmF1bHQ6ICNmZmY7XFxuICAgIC0tdGV4dC1jb2xvcjogIzMzMzsgIFxcbiAgICAtLWNvbG9yLWJvcmRlcjojZTdlN2U3O1xcbiAgICAtLWhlYWRlci1oZWlnaHQ6IDMuNXJlbTtcXG5cXG4gIH1cXG4gIEBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspe1xcbiAgICAgIDpyb290e1xcbiAgICAgICAgICAtLWNvbG9yLWRlZmF1bHQ6ICMxODE4MTg7XFxuICAgICAgICAgIC0tdGV4dC1jb2xvcjogI2UwZTBlMDtcXG4gICAgICAgICAgLS1jb2xvci1ib3JkZXI6I2U3ZTdlNztcXG4gICAgICAgICAgLS1oZWFkZXItaGVpZ2h0OiAzLjVyZW07XFxuXFxuXFxuICAgICAgfVxcbiAgfVxcbiAgW2RhdGEtdGhlbWU9J2RhcmsnXSB7XFxuICAgIC0tY29sb3ItZGVmYXVsdDogIzE4MTgxODtcXG4gICAgLS10ZXh0LWNvbG9yOiAjZTBlMGUwO1xcbiAgICAtLWNvbG9yLWJvcmRlcjojZTdlN2U3O1xcbiAgICAtLWhlYWRlci1oZWlnaHQ6IDMuNXJlbTtcXG5cXG5cXG4gIH1cXG4gIFtkYXRhLXRoZW1lPSdsaWdodCddIHtcXG4gICAgLS1jb2xvci1kZWZhdWx0OiAjZmZmO1xcbiAgICAtLXRleHQtY29sb3I6ICMzMzM7XFxuICAgIC0taGVhZGVyLWhlaWdodDogMy41cmVtO1xcblxcbiAgfVxcblxcbiAgYm9keSB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItZGVmYXVsdCk7XFxuICAgICAgZm9udC1mYW1pbHk6IDEwMCUvMS41IHN5c3RlbS11aSxoZWx2ZXRpY2Esc2Fucy1zZXJpZjtcXG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XFxuICAgICAgLS1oZWFkZXItaGVpZ2h0OiAzLjVyZW07XFxuXFxuICB9XFxuXFxuICBwIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMS42cmVtO1xcbiAgICBmb250LXNpemU6IDEuMTI1cmVtO1xcbn1cXG4uZmVhdHVyZSA6bGFzdC1jaGlsZCB7XFxuICAgIG1hcmdpbi1ib3R0b206IDA7XFxufVxcbi5mZWF0dXJlOmhvdmVye1xcbiAgICBvdXRsaW5lOiAxcHggc29saWQgdmFyKC0tdGV4dC1jb2xvcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcbi5mZWF0dXJlIGEge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKVxcblxcbn1cXG5oMSwgaDIsIGgzLCBoNCwgaDUge1xcbiAgICBsaW5lLWhlaWdodDogMS4xO1xcbn1cXG5cXG4gIC50YWdsaW5lIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgIG1heC13aWR0aDogNTBjaDtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG4gICAgbGluZS1oZWlnaHQ6IDEuMztcXG4gIH1cXG5cXG4gIC5jdGEsIC50YWdsaW5lIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG59XFxuXFxuLmZlYXR1cmUtZ3JpZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIG1hcmdpbjogNHJlbSBhdXRvO1xcbiAgICBtYXgtd2lkdGg6IDgwcmVtO1xcbiAgICBwYWRkaW5nOiAwIDJyZW07XFxufVxcblxcbi5mZWF0dXJlIHtcXG4gICAgZmxleDogMSAxIDMzJTtcXG4gICAgbWluLXdpZHRoOiAzMDBweDtcXG4gICAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxuLmZlYXR1cmUtdGl0bGUge1xcbiAgICBmb250LXNpemU6IDIuMnJlbTtcXG4gICAgbWFyZ2luLXRvcDogMDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuaDIge1xcbiAgICBmb250LWZhbWlseTogJ0xvYnN0ZXInLCBjdXJzaXZlO1xcbiAgICAvKmZvbnQtd2VpZ2h0OiBib2xkOyovXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogODBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogNjBweDtcXG59XFxuLmN0YXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi8qIC5idG4sIC5pcy1oaWRkZW4ge1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn0gKi9cXG5cXG4uaGVhZGVyIHtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItZGVmYXVsdCk7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB6LWluZGV4OiAyMDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHBhZGRpbmc6IDAgMXJlbTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMC4wNjI1cmVtIHNvbGlkIHZhcigtLWNvbG9yLWJvcmRlcik7XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgLjNzO1xcbn1cXG4uaGVhZGVyLCAuaGVhZGVyLWFyZWEge1xcbiAgICBoZWlnaHQ6IHZhcigtLWhlYWRlci1oZWlnaHQpO1xcbn1cXG5cXG4ubWVudS1sb2dvIHtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbn1cXG4ubWVudS1pdGVtIHtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMCAxcmVtO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbi5tZW51LCAubWVudS1pdGVtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5oMXtcXG4gICAgZm9udC1mYW1pbHk6ICdMb2JzdGVyJywgY3Vyc2l2ZTtcXG4gICAgLyogdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgbWFyZ2luLXRvcDogMjUwcHg7XFxuICAgIGZvbnQtc2l6ZTogNmVtOyAqL1xcblxcbn1cXG5we1xcbiAgICBmb250LWZhbWlseTogJ0xvYnN0ZXInO1xcbiAgICBmb250LXNpemU6IDEuMmVtO1xcbiAgICBcXG59XFxuZGl2LnNvY2lhbC1uZXR3b3JrIGEge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1kZWZhdWx0KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG4gICAgY29sb3I6ICM0ZjkyOWY7XFxuICAgIHBhZGRpbmc6IDVweCA2cHggNXB4IDZweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyBcXG4gICAgdG9wOiAyNXB4O1xcblxcbn1cXG5cXG4udGhlbWV7XFxuICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xcbiAgICBtYXJnaW4tbGVmdDogOTBweDtcXG59XFxuLmZvb3RlciB7XFxuICAgIHBhZGRpbmc6IDJyZW0gMDtcXG4gICAgYm9yZGVyLXRvcDogMC4wNjI1cmVtIHNvbGlkIHZhcigtLWNvbG9yLWJvcmRlcik7XFxufVxcblxcbi5mb290ZXItdGV4dHtcXG4gICAgLyogcG9zaXRpb246IHJlbGF0aXZlOyAqL1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHJpZ2h0OiA1MCVcXG59XFxuXFxuLmJhY2stdGl0cmV7XFxuICBcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgbWF4LXdpZHRoOiA0MHJlbTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbWFyZ2luOiA0cmVtIGF1dG8gMnJlbTtcXG5cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3N0eWxlcy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0Qix1QkFBdUI7O0VBRXpCO0VBQ0E7TUFDSTtVQUNJLHdCQUF3QjtVQUN4QixxQkFBcUI7VUFDckIsc0JBQXNCO1VBQ3RCLHVCQUF1Qjs7O01BRzNCO0VBQ0o7RUFDQTtJQUNFLHdCQUF3QjtJQUN4QixxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLHVCQUF1Qjs7O0VBR3pCO0VBQ0E7SUFDRSxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLHVCQUF1Qjs7RUFFekI7O0VBRUE7TUFDSSxzQ0FBc0M7TUFDdEMsb0RBQW9EO01BQ3BELHdCQUF3QjtNQUN4Qix1QkFBdUI7O0VBRTNCOztFQUVBO0lBQ0UscUJBQXFCO0lBQ3JCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxvQ0FBb0M7SUFDcEMsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckI7O0FBRUo7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjs7RUFFRTtJQUNFLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZiw2QkFBNkI7SUFDN0IsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksK0JBQStCO0lBQy9CLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7QUFDQTs7R0FFRzs7QUFFSDtJQUNJLGdDQUFnQztJQUNoQyxlQUFlO0lBQ2YsTUFBTTtJQUNOLE9BQU87SUFDUCxZQUFZO0lBQ1osV0FBVztJQUNYLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLGVBQWU7SUFDZixrREFBa0Q7SUFDbEQsMEJBQTBCO0FBQzlCO0FBQ0E7SUFDSSw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLCtCQUErQjtJQUMvQjs7cUJBRWlCOztBQUVyQjtBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLGdCQUFnQjs7QUFFcEI7QUFDQTtJQUNJLHNDQUFzQztJQUN0QyxtQkFBbUI7SUFDbkIsY0FBYztJQUNkLHdCQUF3QjtJQUN4QixrQkFBa0I7SUFDbEIsU0FBUzs7QUFFYjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGVBQWU7SUFDZiwrQ0FBK0M7QUFDbkQ7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsU0FBUztJQUNUO0FBQ0o7O0FBRUE7O0lBRUksYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixzQkFBc0I7O0FBRTFCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gICAgLS1jb2xvci1kZWZhdWx0OiAjZmZmO1xcbiAgICAtLXRleHQtY29sb3I6ICMzMzM7ICBcXG4gICAgLS1jb2xvci1ib3JkZXI6I2U3ZTdlNztcXG4gICAgLS1oZWFkZXItaGVpZ2h0OiAzLjVyZW07XFxuXFxuICB9XFxuICBAbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKXtcXG4gICAgICA6cm9vdHtcXG4gICAgICAgICAgLS1jb2xvci1kZWZhdWx0OiAjMTgxODE4O1xcbiAgICAgICAgICAtLXRleHQtY29sb3I6ICNlMGUwZTA7XFxuICAgICAgICAgIC0tY29sb3ItYm9yZGVyOiNlN2U3ZTc7XFxuICAgICAgICAgIC0taGVhZGVyLWhlaWdodDogMy41cmVtO1xcblxcblxcbiAgICAgIH1cXG4gIH1cXG4gIFtkYXRhLXRoZW1lPSdkYXJrJ10ge1xcbiAgICAtLWNvbG9yLWRlZmF1bHQ6ICMxODE4MTg7XFxuICAgIC0tdGV4dC1jb2xvcjogI2UwZTBlMDtcXG4gICAgLS1jb2xvci1ib3JkZXI6I2U3ZTdlNztcXG4gICAgLS1oZWFkZXItaGVpZ2h0OiAzLjVyZW07XFxuXFxuXFxuICB9XFxuICBbZGF0YS10aGVtZT0nbGlnaHQnXSB7XFxuICAgIC0tY29sb3ItZGVmYXVsdDogI2ZmZjtcXG4gICAgLS10ZXh0LWNvbG9yOiAjMzMzO1xcbiAgICAtLWhlYWRlci1oZWlnaHQ6IDMuNXJlbTtcXG5cXG4gIH1cXG5cXG4gIGJvZHkge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWRlZmF1bHQpO1xcbiAgICAgIGZvbnQtZmFtaWx5OiAxMDAlLzEuNSBzeXN0ZW0tdWksaGVsdmV0aWNhLHNhbnMtc2VyaWY7XFxuICAgICAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xcbiAgICAgIC0taGVhZGVyLWhlaWdodDogMy41cmVtO1xcblxcbiAgfVxcblxcbiAgcCB7XFxuICAgIG1hcmdpbi1ib3R0b206IDEuNnJlbTtcXG4gICAgZm9udC1zaXplOiAxLjEyNXJlbTtcXG59XFxuLmZlYXR1cmUgOmxhc3QtY2hpbGQge1xcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xcbn1cXG4uZmVhdHVyZTpob3ZlcntcXG4gICAgb3V0bGluZTogMXB4IHNvbGlkIHZhcigtLXRleHQtY29sb3IpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG4uZmVhdHVyZSBhIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcilcXG5cXG59XFxuaDEsIGgyLCBoMywgaDQsIGg1IHtcXG4gICAgbGluZS1oZWlnaHQ6IDEuMTtcXG59XFxuXFxuICAudGFnbGluZSB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBmb250LXdlaWdodDogMzAwO1xcbiAgICBtYXgtd2lkdGg6IDUwY2g7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjM7XFxuICB9XFxuXFxuICAuY3RhLCAudGFnbGluZSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XFxufVxcblxcbi5mZWF0dXJlLWdyaWQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBtYXJnaW46IDRyZW0gYXV0bztcXG4gICAgbWF4LXdpZHRoOiA4MHJlbTtcXG4gICAgcGFkZGluZzogMCAycmVtO1xcbn1cXG5cXG4uZmVhdHVyZSB7XFxuICAgIGZsZXg6IDEgMSAzMyU7XFxuICAgIG1pbi13aWR0aDogMzAwcHg7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbi5mZWF0dXJlLXRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAyLjJyZW07XFxuICAgIG1hcmdpbi10b3A6IDA7XFxuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbmgyIHtcXG4gICAgZm9udC1mYW1pbHk6ICdMb2JzdGVyJywgY3Vyc2l2ZTtcXG4gICAgLypmb250LXdlaWdodDogYm9sZDsqL1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDgwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDYwcHg7XFxufVxcbi5jdGF7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4vKiAuYnRuLCAuaXMtaGlkZGVuIHtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59ICovXFxuXFxuLmhlYWRlciB7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLWRlZmF1bHQpO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgei1pbmRleDogMjAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBwYWRkaW5nOiAwIDFyZW07XFxuICAgIGJvcmRlci1ib3R0b206IDAuMDYyNXJlbSBzb2xpZCB2YXIoLS1jb2xvci1ib3JkZXIpO1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIC4zcztcXG59XFxuLmhlYWRlciwgLmhlYWRlci1hcmVhIHtcXG4gICAgaGVpZ2h0OiB2YXIoLS1oZWFkZXItaGVpZ2h0KTtcXG59XFxuXFxuLm1lbnUtbG9nbyB7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG59XFxuLm1lbnUtaXRlbSB7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDAgMXJlbTtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4ubWVudSwgLm1lbnUtaXRlbSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuaDF7XFxuICAgIGZvbnQtZmFtaWx5OiAnTG9ic3RlcicsIGN1cnNpdmU7XFxuICAgIC8qIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgIG1hcmdpbi10b3A6IDI1MHB4O1xcbiAgICBmb250LXNpemU6IDZlbTsgKi9cXG5cXG59XFxucHtcXG4gICAgZm9udC1mYW1pbHk6ICdMb2JzdGVyJztcXG4gICAgZm9udC1zaXplOiAxLjJlbTtcXG4gICAgXFxufVxcbmRpdi5zb2NpYWwtbmV0d29yayBhIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItZGVmYXVsdCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxuICAgIGNvbG9yOiAjNGY5MjlmO1xcbiAgICBwYWRkaW5nOiA1cHggNnB4IDVweCA2cHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgXFxuICAgIHRvcDogMjVweDtcXG5cXG59XFxuXFxuLnRoZW1le1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDkwcHg7XFxufVxcbi5mb290ZXIge1xcbiAgICBwYWRkaW5nOiAycmVtIDA7XFxuICAgIGJvcmRlci10b3A6IDAuMDYyNXJlbSBzb2xpZCB2YXIoLS1jb2xvci1ib3JkZXIpO1xcbn1cXG5cXG4uZm9vdGVyLXRleHR7XFxuICAgIC8qIHBvc2l0aW9uOiByZWxhdGl2ZTsgKi9cXG4gICAgbGVmdDogNTAlO1xcbiAgICByaWdodDogNTAlXFxufVxcblxcbi5iYWNrLXRpdHJle1xcbiAgXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG1heC13aWR0aDogNDByZW07XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIG1hcmdpbjogNHJlbSBhdXRvIDJyZW07XFxuXFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[3].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[3].oneOf[8].use[2]!./styles/style.css\n");

/***/ })

});