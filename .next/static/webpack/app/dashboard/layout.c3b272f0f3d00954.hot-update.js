"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/dashboard/layout",{

/***/ "(app-pages-browser)/./src/app/dashboard/components/header/index.tsx":
/*!*******************************************************!*\
  !*** ./src/app/dashboard/components/header/index.tsx ***!
  \*******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DashboardHeader: function() { return /* binding */ DashboardHeader; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components */ \"(app-pages-browser)/./src/components/index.ts\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ DashboardHeader auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction DashboardHeader() {\n    _s();\n    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.usePathname)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_1__.Container, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n            className: \"w-full bg-gray-700 my-4 rounded flex gap-4 items-center shadow-slate-900\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    passHref: true,\n                    href: \"/dashboard\",\n                    className: \"text-white hover:bg-slate-700 hover:duration-300 hover:animate-pulse p-3\",\n                    children: \"Chamados\"\n                }, void 0, false, {\n                    fileName: \"/home/juliofreitas/devController/src/app/dashboard/components/header/index.tsx\",\n                    lineNumber: 12,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    passHref: true,\n                    href: \"/dashboard/customer\",\n                    className: \"text-white hover:bg-slate-700 hover:animate-pulse p-3\",\n                    children: \"Clientes\"\n                }, void 0, false, {\n                    fileName: \"/home/juliofreitas/devController/src/app/dashboard/components/header/index.tsx\",\n                    lineNumber: 19,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/juliofreitas/devController/src/app/dashboard/components/header/index.tsx\",\n            lineNumber: 11,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/juliofreitas/devController/src/app/dashboard/components/header/index.tsx\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, this);\n}\n_s(DashboardHeader, \"xbyQPtUVMO7MNj7WjJlpdWqRcTo=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.usePathname\n    ];\n});\n_c = DashboardHeader;\nvar _c;\n$RefreshReg$(_c, \"DashboardHeader\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZGFzaGJvYXJkL2NvbXBvbmVudHMvaGVhZGVyL2luZGV4LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDeUM7QUFDWjtBQUNpQjtBQUV2QyxTQUFTRzs7SUFDZCxNQUFNQyxXQUFZRiw0REFBV0E7SUFDN0IscUJBQ0UsOERBQUNGLGtEQUFTQTtrQkFFUiw0RUFBQ0s7WUFBT0MsV0FBVTs7OEJBQ2hCLDhEQUFDTCxrREFBSUE7b0JBQ0hNLFFBQVE7b0JBQ1JDLE1BQUs7b0JBQ0xGLFdBQVU7OEJBQ1g7Ozs7Ozs4QkFHRCw4REFBQ0wsa0RBQUlBO29CQUNITSxRQUFRO29CQUNSQyxNQUFLO29CQUNMRixXQUFVOzhCQUNYOzs7Ozs7Ozs7Ozs7Ozs7OztBQU1UO0dBdkJnQkg7O1FBQ0lELHdEQUFXQTs7O0tBRGZDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvZGFzaGJvYXJkL2NvbXBvbmVudHMvaGVhZGVyL2luZGV4LnRzeD9lMTY1Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSBcIkAvY29tcG9uZW50c1wiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgdXNlUGF0aG5hbWUgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBEYXNoYm9hcmRIZWFkZXIoKSB7XG4gIGNvbnN0IHBhdGhuYW1lICA9IHVzZVBhdGhuYW1lKClcbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuXG4gICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cInctZnVsbCBiZy1ncmF5LTcwMCBteS00IHJvdW5kZWQgZmxleCBnYXAtNCBpdGVtcy1jZW50ZXIgc2hhZG93LXNsYXRlLTkwMFwiPlxuICAgICAgICA8TGlua1xuICAgICAgICAgIHBhc3NIcmVmXG4gICAgICAgICAgaHJlZj1cIi9kYXNoYm9hcmRcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgaG92ZXI6Ymctc2xhdGUtNzAwIGhvdmVyOmR1cmF0aW9uLTMwMCBob3ZlcjphbmltYXRlLXB1bHNlIHAtM1wiXG4gICAgICAgID5cbiAgICAgICAgICBDaGFtYWRvc1xuICAgICAgICA8L0xpbms+XG4gICAgICAgIDxMaW5rXG4gICAgICAgICAgcGFzc0hyZWZcbiAgICAgICAgICBocmVmPVwiL2Rhc2hib2FyZC9jdXN0b21lclwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBob3ZlcjpiZy1zbGF0ZS03MDAgaG92ZXI6YW5pbWF0ZS1wdWxzZSBwLTNcIlxuICAgICAgICA+XG4gICAgICAgICAgQ2xpZW50ZXNcbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9oZWFkZXI+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiQ29udGFpbmVyIiwiTGluayIsInVzZVBhdGhuYW1lIiwiRGFzaGJvYXJkSGVhZGVyIiwicGF0aG5hbWUiLCJoZWFkZXIiLCJjbGFzc05hbWUiLCJwYXNzSHJlZiIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/dashboard/components/header/index.tsx\n"));

/***/ })

});