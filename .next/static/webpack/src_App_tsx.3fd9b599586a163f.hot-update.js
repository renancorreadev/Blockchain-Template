"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("src_App_tsx",{

/***/ "./src/components/Navbar/styles.ts":
/*!*****************************************!*\
  !*** ./src/components/Navbar/styles.ts ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"HeaderContainer\": function() { return /* binding */ HeaderContainer; },\n/* harmony export */   \"HeaderContent\": function() { return /* binding */ HeaderContent; },\n/* harmony export */   \"HeaderLogo\": function() { return /* binding */ HeaderLogo; },\n/* harmony export */   \"Nav\": function() { return /* binding */ Nav; },\n/* harmony export */   \"Link\": function() { return /* binding */ Link; },\n/* harmony export */   \"ConnectButton\": function() { return /* binding */ ConnectButton; }\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _hooks_Web3Connector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../hooks/Web3Connector */ \"./src/hooks/Web3Connector.tsx\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = _taggedTemplateLiteral([\n        \"\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = _taggedTemplateLiteral([\n        \"\"\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  margin-left: 5rem;\\n  height: 5rem;\\n\"\n    ]);\n    _templateObject3 = function _templateObject3() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: center;\\n\\n  & + a {\\n    margin-left: 2rem;\\n  }\\n\\n  &:hover {\\n    color: white;\\n  }\\n\\n  &.active {\\n    color: white;\\n    font-weight: bold;\\n  }\\n\\n  &.active::after {\\n    content: '';\\n    height: 3px;\\n    border-radius: 3px 3px 0 0;\\n    width: 100%;\\n    position: absolute;\\n    bottom: 1px;\\n    left: 0;\\n    background: orange;\\n  }\\n\"\n    ]);\n    _templateObject4 = function _templateObject4() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject5() {\n    var data = _taggedTemplateLiteral([\n        \"\"\n    ]);\n    _templateObject5 = function _templateObject5() {\n        return data;\n    };\n    return data;\n}\nvar HeaderContainer = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Container)(_templateObject());\nvar HeaderContent = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Row)(_templateObject1());\nvar HeaderLogo = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].img(_templateObject2());\nvar Nav = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].nav(_templateObject3());\nvar Link = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].a(_templateObject4());\nvar ConnectButton = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_hooks_Web3Connector__WEBPACK_IMPORTED_MODULE_0__.Web3Connector)(_templateObject5());\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9OYXZiYXIvc3R5bGVzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBc0M7QUFDbUI7QUFDVDs7Ozs7Ozs7Ozs7OztRQUVDOzs7Ozs7Ozs7UUFDUjs7Ozs7Ozs7O1FBQ0o7Ozs7Ozs7OztRQUVQLENBRzlCOzs7Ozs7Ozs7UUFDNkIsQ0E0QjdCOzs7Ozs7Ozs7UUFFbUQ7Ozs7Ozs7QUF0QzVDLEdBQUssQ0FBQ0ksZUFBZSxHQUFHSiw2REFBTSxDQUFDRSxzREFBUztBQUN4QyxHQUFLLENBQUNHLGFBQWEsR0FBR0wsNkRBQU0sQ0FBQ0csZ0RBQUc7QUFDaEMsR0FBSyxDQUFDRyxVQUFVLEdBQUdOLDZEQUFVO0FBRTdCLEdBQUssQ0FBQ1EsR0FBRyxHQUFHUiw2REFBVTtBQUl0QixHQUFLLENBQUNVLElBQUksR0FBR1YsMkRBQVE7QUE4QnJCLEdBQUssQ0FBQ1ksYUFBYSxHQUFHWiw2REFBTSxDQUFDQywrREFBYSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9OYXZiYXIvc3R5bGVzLnRzPzdiNWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCB7IFdlYjNDb25uZWN0b3IgfSBmcm9tICcuLi8uLi9ob29rcy9XZWIzQ29ubmVjdG9yJ1xuaW1wb3J0IHsgQ29udGFpbmVyLCBSb3cgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnXG5cbmV4cG9ydCBjb25zdCBIZWFkZXJDb250YWluZXIgPSBzdHlsZWQoQ29udGFpbmVyKWBgXG5leHBvcnQgY29uc3QgSGVhZGVyQ29udGVudCA9IHN0eWxlZChSb3cpYGBcbmV4cG9ydCBjb25zdCBIZWFkZXJMb2dvID0gc3R5bGVkLmltZ2BgXG5cbmV4cG9ydCBjb25zdCBOYXYgPSBzdHlsZWQubmF2YFxuICBtYXJnaW4tbGVmdDogNXJlbTtcbiAgaGVpZ2h0OiA1cmVtO1xuYFxuZXhwb3J0IGNvbnN0IExpbmsgPSBzdHlsZWQuYWBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgJiArIGEge1xuICAgIG1hcmdpbi1sZWZ0OiAycmVtO1xuICB9XG5cbiAgJjpob3ZlciB7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG5cbiAgJi5hY3RpdmUge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuXG4gICYuYWN0aXZlOjphZnRlciB7XG4gICAgY29udGVudDogJyc7XG4gICAgaGVpZ2h0OiAzcHg7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4IDNweCAwIDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMXB4O1xuICAgIGxlZnQ6IDA7XG4gICAgYmFja2dyb3VuZDogb3JhbmdlO1xuICB9XG5gXG5cbmV4cG9ydCBjb25zdCBDb25uZWN0QnV0dG9uID0gc3R5bGVkKFdlYjNDb25uZWN0b3IpYGBcbiJdLCJuYW1lcyI6WyJzdHlsZWQiLCJXZWIzQ29ubmVjdG9yIiwiQ29udGFpbmVyIiwiUm93IiwiSGVhZGVyQ29udGFpbmVyIiwiSGVhZGVyQ29udGVudCIsIkhlYWRlckxvZ28iLCJpbWciLCJOYXYiLCJuYXYiLCJMaW5rIiwiYSIsIkNvbm5lY3RCdXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Navbar/styles.ts\n");

/***/ })

});