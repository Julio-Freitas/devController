"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/dashboard/new/page",{

/***/ "(app-pages-browser)/./src/context/modal/index.tsx":
/*!*************************************!*\
  !*** ./src/context/modal/index.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ModalContext: function() { return /* binding */ ModalContext; },\n/* harmony export */   ModalProvider: function() { return /* binding */ ModalProvider; },\n/* harmony export */   useModalProvider: function() { return /* binding */ useModalProvider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components */ \"(app-pages-browser)/./src/components/index.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ ModalContext,ModalProvider,useModalProvider auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\nconst ModalContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)({});\nconst ModalProvider = (param)=>{\n    let { children } = param;\n    _s();\n    const [visible, setVisible] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);\n    const [ticket, setTicket] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    const handleModalVisible = ()=>setVisible(!visible);\n    const handleSetTicket = (datail)=>setTicket(datail);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ModalContext.Provider, {\n        value: {\n            visible,\n            handleModalVisible,\n            ticket,\n            handleSetTicket\n        },\n        children: [\n            visible && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_1__.ModalTicket, {}, void 0, false, {\n                fileName: \"/home/juliofreitas/devController/src/context/modal/index.tsx\",\n                lineNumber: 31,\n                columnNumber: 19\n            }, undefined),\n            children\n        ]\n    }, void 0, true, {\n        fileName: \"/home/juliofreitas/devController/src/context/modal/index.tsx\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ModalProvider, \"wXOQ0E/XkMESS+iX0lozQFQo6MA=\");\n_c = ModalProvider;\nconst useModalProvider = ()=>{\n    _s1();\n    const context = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(ModalContext);\n    if (!context) throw new Error(\"useModalProvider only can be used inset <ModalProvider />\");\n    return context;\n};\n_s1(useModalProvider, \"b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=\");\nvar _c;\n$RefreshReg$(_c, \"ModalProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb250ZXh0L21vZGFsL2luZGV4LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFJMkM7QUFDaUI7QUFZckQsTUFBTUksNkJBQWVILG9EQUFhQSxDQUE0QixDQUFDLEdBQUc7QUFFbEUsTUFBTUksZ0JBQWdCO1FBQUMsRUFBRUMsUUFBUSxFQUEyQjs7SUFDakUsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdMLCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU0sQ0FBQ00sUUFBUUMsVUFBVSxHQUFHUCwrQ0FBUUE7SUFDcEMsTUFBTVEscUJBQXFCLElBQU1ILFdBQVcsQ0FBQ0Q7SUFDN0MsTUFBTUssa0JBQWtCLENBQUNDLFNBQXVCSCxVQUFVRztJQUcxRCxxQkFDRSw4REFBQ1QsYUFBYVUsUUFBUTtRQUNwQkMsT0FBTztZQUFFUjtZQUFTSTtZQUFvQkY7WUFBUUc7UUFBZ0I7O1lBRTdETCx5QkFBVyw4REFBQ1Asb0RBQVdBOzs7OztZQUN2Qk07Ozs7Ozs7QUFHUCxFQUFFO0dBZldEO0tBQUFBO0FBaUJOLE1BQU1XLG1CQUFtQjs7SUFDOUIsTUFBTUMsVUFBVWYsaURBQVVBLENBQUNFO0lBQzNCLElBQUksQ0FBQ2EsU0FDSCxNQUFNLElBQUlDLE1BQ1I7SUFFSixPQUFPRDtBQUNULEVBQUU7SUFQV0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHQvbW9kYWwvaW5kZXgudHN4PzFjYTkiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCB7IFRpY2tldFByb3BzIH0gZnJvbSBcIkAvYXBwL2Rhc2hib2FyZC9jb21wb25lbnRzL3RpY2tldC90eXBlc1wiO1xuaW1wb3J0IHsgY3VzdG9tZXJQcm9wcyB9IGZyb20gXCJAL2FwcC9kYXNoYm9hcmQvY3VzdG9tZXIvY29tcG9uZW50cy9jYXJkL3R5cGVcIjtcbmltcG9ydCB7IE1vZGFsVGlja2V0IH0gZnJvbSBcIkAvY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmludGVyZmFjZSBNb2RhbENvbnRleHREYXRhIHtcbiAgdmlzaWJsZTogYm9vbGVhbjtcbiAgaGFuZGxlTW9kYWxWaXNpYmxlOiAoKSA9PiB7fTtcbiAgdGlja2V0OiBUaWNrZXRJbmZvIHwgbnVsbDtcbiAgaGFuZGxlU2V0VGlja2V0OiAoZGF0YWlsczogVGlja2V0SW5mbykgPT4gdm9pZDtcbn1cblxuaW50ZXJmYWNlIFRpY2tldEluZm8ge1xuICB0aWNrZXQ6IFRpY2tldFByb3BzO1xuICBjdXN0b21lcjogY3VzdG9tZXJQcm9wcyB8IG51bGw7XG59XG5leHBvcnQgY29uc3QgTW9kYWxDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxNb2RhbENvbnRleHREYXRhIHwgb2JqZWN0Pih7fSk7XG5cbmV4cG9ydCBjb25zdCBNb2RhbFByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfTogUmVhY3QuUHJvcHNXaXRoQ2hpbGRyZW4pID0+IHtcbiAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFt0aWNrZXQsIHNldFRpY2tldF0gPSB1c2VTdGF0ZTxUaWNrZXRJbmZvPigpO1xuICBjb25zdCBoYW5kbGVNb2RhbFZpc2libGUgPSAoKSA9PiBzZXRWaXNpYmxlKCF2aXNpYmxlKTtcbiAgY29uc3QgaGFuZGxlU2V0VGlja2V0ID0gKGRhdGFpbDogVGlja2V0SW5mbykgPT4gc2V0VGlja2V0KGRhdGFpbCk7XG5cblxuICByZXR1cm4gKFxuICAgIDxNb2RhbENvbnRleHQuUHJvdmlkZXJcbiAgICAgIHZhbHVlPXt7IHZpc2libGUsIGhhbmRsZU1vZGFsVmlzaWJsZSwgdGlja2V0LCBoYW5kbGVTZXRUaWNrZXQgfX1cbiAgICA+XG4gICAgICB7dmlzaWJsZSAmJiA8TW9kYWxUaWNrZXQgLz59XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9Nb2RhbENvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgdXNlTW9kYWxQcm92aWRlciA9ICgpID0+IHtcbiAgY29uc3QgY29udGV4dCA9IHVzZUNvbnRleHQoTW9kYWxDb250ZXh0KTtcbiAgaWYgKCFjb250ZXh0KVxuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgIFwidXNlTW9kYWxQcm92aWRlciBvbmx5IGNhbiBiZSB1c2VkIGluc2V0IDxNb2RhbFByb3ZpZGVyIC8+XCJcbiAgICApO1xuICByZXR1cm4gY29udGV4dCBhcyBNb2RhbENvbnRleHREYXRhO1xufTtcbiJdLCJuYW1lcyI6WyJNb2RhbFRpY2tldCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwidXNlU3RhdGUiLCJNb2RhbENvbnRleHQiLCJNb2RhbFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ2aXNpYmxlIiwic2V0VmlzaWJsZSIsInRpY2tldCIsInNldFRpY2tldCIsImhhbmRsZU1vZGFsVmlzaWJsZSIsImhhbmRsZVNldFRpY2tldCIsImRhdGFpbCIsIlByb3ZpZGVyIiwidmFsdWUiLCJ1c2VNb2RhbFByb3ZpZGVyIiwiY29udGV4dCIsIkVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/context/modal/index.tsx\n"));

/***/ })

});