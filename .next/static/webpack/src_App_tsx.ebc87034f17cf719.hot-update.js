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

/***/ "./src/pages/api/Home/index.tsx":
/*!**************************************!*\
  !*** ./src/pages/api/Home/index.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Home\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var _Users_nlwsoft_Desktop_Blockchain_Template_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/regenerator-runtime/runtime.js */ \"./node_modules/next/node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_nlwsoft_Desktop_Blockchain_Template_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_nlwsoft_Desktop_Blockchain_Template_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _s = $RefreshSig$();\nfunction Home() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), actived = ref[0], setActived = ref[1];\n    _asyncToGenerator(_Users_nlwsoft_Desktop_Blockchain_Template_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(param) {\n        var useIsActive;\n        return _Users_nlwsoft_Desktop_Blockchain_Template_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    useIsActive = param.hooks.useIsActive;\n                    if (!useIsActive) {\n                        _ctx.next = 6;\n                        break;\n                    }\n                    setActived(true);\n                    return _ctx.abrupt(\"return\", true);\n                case 6:\n                    setActived(false);\n                    return _ctx.abrupt(\"return\", false);\n                case 8:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    if (actived == true) {\n        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"h1\", {\n            __source: {\n                fileName: \"/Users/nlwsoft/Desktop/Blockchain Template/src/pages/api/Home/index.tsx\",\n                lineNumber: 25,\n                columnNumber: 12\n            },\n            __self: this,\n            children: \"Actived!!!\"\n        }));\n    } else {\n        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"h1\", {\n            __source: {\n                fileName: \"/Users/nlwsoft/Desktop/Blockchain Template/src/pages/api/Home/index.tsx\",\n                lineNumber: 27,\n                columnNumber: 12\n            },\n            __self: this,\n            children: \"Not Actived!!!\"\n        }));\n    }\n}\n_s(Home, \"Hdw5EO+DplCNBEJcNuH8tsP7WZ4=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYXBpL0hvbWUvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBdUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLaEMsU0FBU0UsSUFBSSxHQUFHLENBQUM7O0lBQ3RCLEdBQUssQ0FBeUJELEdBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLEdBQXJDRSxPQUFPLEdBQWdCRixHQUFlLEtBQTdCRyxVQUFVLEdBQUlILEdBQWU7MktBRTVDLFFBQVEsZ0JBS0gsQ0FBQztZQUpJSSxXQUFXOzs7O29CQUFYQSxXQUFXLFNBQXBCQyxLQUFLLENBQUlELFdBQVc7eUJBS2hCQSxXQUFXOzs7O29CQUNiRCxVQUFVLENBQUMsSUFBSTtpREFDUixJQUFJOztvQkFFWEEsVUFBVSxDQUFDLEtBQUs7aURBQ1QsS0FBSzs7Ozs7O0lBRWhCLENBQUM7SUFFRCxFQUFFLEVBQUVELE9BQU8sSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUNwQixNQUFNLHNFQUFFSSxDQUFFOzs7Ozs7O3NCQUFDLENBQVU7O0lBQ3ZCLENBQUMsTUFBTSxDQUFDO1FBQ04sTUFBTSxzRUFBRUEsQ0FBRTs7Ozs7OztzQkFBQyxDQUFjOztJQUMzQixDQUFDO0FBQ0gsQ0FBQztHQXZCZUwsSUFBSTtLQUFKQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9hcGkvSG9tZS9pbmRleC50c3g/NTY4NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHsgV2ViM1JlYWN0SG9va3MgfSBmcm9tICdAd2ViMy1yZWFjdC9jb3JlJ1xuaW1wb3J0IHsgTWV0YU1hc2sgfSBmcm9tICdAd2ViMy1yZWFjdC9tZXRhbWFzaydcblxuZXhwb3J0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFthY3RpdmVkLCBzZXRBY3RpdmVkXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIDthc3luYyAoe1xuICAgIGhvb2tzOiB7IHVzZUlzQWN0aXZlIH0sXG4gIH06IHtcbiAgICBjb25uZWN0b3I6IE1ldGFNYXNrXG4gICAgaG9va3M6IFdlYjNSZWFjdEhvb2tzXG4gIH0pID0+IHtcbiAgICBpZiAodXNlSXNBY3RpdmUpIHtcbiAgICAgIHNldEFjdGl2ZWQodHJ1ZSlcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSBlbHNlIHtcbiAgICAgIHNldEFjdGl2ZWQoZmFsc2UpXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gIH1cblxuICBpZiAoYWN0aXZlZCA9PSB0cnVlKSB7XG4gICAgcmV0dXJuIDxoMT5BY3RpdmVkISEhPC9oMT5cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gPGgxPk5vdCBBY3RpdmVkISEhPC9oMT5cbiAgfVxufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJIb21lIiwiYWN0aXZlZCIsInNldEFjdGl2ZWQiLCJ1c2VJc0FjdGl2ZSIsImhvb2tzIiwiaDEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/api/Home/index.tsx\n");

/***/ })

});