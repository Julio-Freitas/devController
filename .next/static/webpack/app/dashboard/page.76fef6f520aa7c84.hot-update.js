"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/dashboard/page",{

/***/ "(app-pages-browser)/./src/components/modal/index.tsx":
/*!****************************************!*\
  !*** ./src/components/modal/index.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ModalTicket: function() { return /* binding */ ModalTicket; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _app_utils_phonemask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/utils/phonemask */ \"(app-pages-browser)/./src/app/utils/phonemask.ts\");\n/* harmony import */ var _context_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/context/modal */ \"(app-pages-browser)/./src/context/modal/index.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _barrel_optimize_names_FiXCircle_react_icons_fi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=FiXCircle!=!react-icons/fi */ \"(app-pages-browser)/./node_modules/react-icons/fi/index.esm.js\");\n/* __next_internal_client_entry_do_not_use__ ModalTicket auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction ModalTicket() {\n    var _ticket_customer, _ticket_customer1, _ticket_customer2;\n    _s();\n    const { handleModalVisible, ticket } = (0,_context_modal__WEBPACK_IMPORTED_MODULE_2__.useModalProvider)();\n    const modalRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);\n    const handleClickOutsideModal = (target)=>{\n        if (modalRef.current && !modalRef.current.contains(target)) handleModalVisible();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        onClick: (e)=>handleClickOutsideModal(e.target),\n        tabIndex: \"-1\",\n        \"aria-hidden\": \"true\",\n        className: \"absolute bg-gray-800/80 w-full min-h-screen \",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"absolute inset-0 flex items-center justify-center \",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                ref: modalRef,\n                className: \"bg-white shadow-lg w-4/5 md:w-1/2 max-w-2xl p-3 rounded-md\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center justify-between mb-4 bg-slate-600\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"font-bold text-lg md:text-2xl\",\n                                children: \"Detalhes do Chamado\"\n                            }, void 0, false, {\n                                fileName: \"/home/juliofreitas/devController/src/components/modal/index.tsx\",\n                                lineNumber: 30,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"button\",\n                                className: \"py-1 px-2  text-white\",\n                                onClick: handleModalVisible,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FiXCircle_react_icons_fi__WEBPACK_IMPORTED_MODULE_4__.FiXCircle, {\n                                    size: 24,\n                                    color: \"red\"\n                                }, void 0, false, {\n                                    fileName: \"/home/juliofreitas/devController/src/components/modal/index.tsx\",\n                                    lineNumber: 38,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/home/juliofreitas/devController/src/components/modal/index.tsx\",\n                                lineNumber: 33,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/juliofreitas/devController/src/components/modal/index.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-wrap-gap-1 mb-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"font-bold\",\n                                children: \"Nome:\"\n                            }, void 0, false, {\n                                fileName: \"/home/juliofreitas/devController/src/components/modal/index.tsx\",\n                                lineNumber: 43,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: ticket === null || ticket === void 0 ? void 0 : ticket.ticket.name\n                            }, void 0, false, {\n                                fileName: \"/home/juliofreitas/devController/src/components/modal/index.tsx\",\n                                lineNumber: 44,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/juliofreitas/devController/src/components/modal/index.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col gap-1 mb-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"font-bold\",\n                                children: \"Descri\\xe7\\xe3o:\"\n                            }, void 0, false, {\n                                fileName: \"/home/juliofreitas/devController/src/components/modal/index.tsx\",\n                                lineNumber: 48,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: ticket === null || ticket === void 0 ? void 0 : ticket.ticket.description\n                            }, void 0, false, {\n                                fileName: \"/home/juliofreitas/devController/src/components/modal/index.tsx\",\n                                lineNumber: 49,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/juliofreitas/devController/src/components/modal/index.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"border-2 border-s-cyan-200 my-3\"\n                    }, void 0, false, {\n                        fileName: \"/home/juliofreitas/devController/src/components/modal/index.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col gap-1 mb-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"font-bold\",\n                                children: \"Detalhes do cliente\"\n                            }, void 0, false, {\n                                fileName: \"/home/juliofreitas/devController/src/components/modal/index.tsx\",\n                                lineNumber: 54,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex gap-2\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        className: \"font-bold\",\n                                        children: \"Nome:\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/juliofreitas/devController/src/components/modal/index.tsx\",\n                                        lineNumber: 56,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: ticket === null || ticket === void 0 ? void 0 : (_ticket_customer = ticket.customer) === null || _ticket_customer === void 0 ? void 0 : _ticket_customer.name\n                                    }, void 0, false, {\n                                        fileName: \"/home/juliofreitas/devController/src/components/modal/index.tsx\",\n                                        lineNumber: 57,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/juliofreitas/devController/src/components/modal/index.tsx\",\n                                lineNumber: 55,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex gap-2\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        className: \"font-bold\",\n                                        children: \"Telefone:\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/juliofreitas/devController/src/components/modal/index.tsx\",\n                                        lineNumber: 60,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: (0,_app_utils_phonemask__WEBPACK_IMPORTED_MODULE_1__.phoneMask)(ticket === null || ticket === void 0 ? void 0 : (_ticket_customer1 = ticket.customer) === null || _ticket_customer1 === void 0 ? void 0 : _ticket_customer1.phone)\n                                    }, void 0, false, {\n                                        fileName: \"/home/juliofreitas/devController/src/components/modal/index.tsx\",\n                                        lineNumber: 61,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/juliofreitas/devController/src/components/modal/index.tsx\",\n                                lineNumber: 59,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex gap-2\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        className: \"font-bold\",\n                                        children: \"Email:\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/juliofreitas/devController/src/components/modal/index.tsx\",\n                                        lineNumber: 64,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: ticket === null || ticket === void 0 ? void 0 : (_ticket_customer2 = ticket.customer) === null || _ticket_customer2 === void 0 ? void 0 : _ticket_customer2.email\n                                    }, void 0, false, {\n                                        fileName: \"/home/juliofreitas/devController/src/components/modal/index.tsx\",\n                                        lineNumber: 65,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/juliofreitas/devController/src/components/modal/index.tsx\",\n                                lineNumber: 63,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/juliofreitas/devController/src/components/modal/index.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/juliofreitas/devController/src/components/modal/index.tsx\",\n                lineNumber: 25,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/juliofreitas/devController/src/components/modal/index.tsx\",\n            lineNumber: 24,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/juliofreitas/devController/src/components/modal/index.tsx\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, this);\n}\n_s(ModalTicket, \"jEARcw0Rn3YlAtQ3Paumyh0I93o=\", false, function() {\n    return [\n        _context_modal__WEBPACK_IMPORTED_MODULE_2__.useModalProvider\n    ];\n});\n_c = ModalTicket;\nvar _c;\n$RefreshReg$(_c, \"ModalTicket\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL21vZGFsL2luZGV4LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFFa0Q7QUFDQztBQUNEO0FBQ1A7QUFFcEMsU0FBU0k7UUFpREVDLGtCQUlVQSxtQkFJVkE7O0lBeERoQixNQUFNLEVBQUVDLGtCQUFrQixFQUFFRCxNQUFNLEVBQUUsR0FBR0osZ0VBQWdCQTtJQUN2RCxNQUFNTSxXQUFXTCw2Q0FBTUEsQ0FBd0I7SUFFL0MsTUFBTU0sMEJBQTBCLENBQUNDO1FBQy9CLElBQUlGLFNBQVNHLE9BQU8sSUFBSSxDQUFDSCxTQUFTRyxPQUFPLENBQUNDLFFBQVEsQ0FBQ0YsU0FDakRIO0lBQ0o7SUFFQSxxQkFDRSw4REFBQ007UUFDQ0MsU0FBUyxDQUFDQyxJQUFNTix3QkFBd0JNLEVBQUVMLE1BQU07UUFDaERNLFVBQVM7UUFDVEMsZUFBWTtRQUNaQyxXQUFVO2tCQUVWLDRFQUFDQztZQUFJRCxXQUFVO3NCQUNiLDRFQUFDQztnQkFDQ0MsS0FBS1o7Z0JBQ0xVLFdBQVU7O2tDQUVWLDhEQUFDQzt3QkFBSUQsV0FBVTs7MENBQ2IsOERBQUNHO2dDQUFHSCxXQUFVOzBDQUFnQzs7Ozs7OzBDQUc5Qyw4REFBQ0k7Z0NBQ0NDLE1BQUs7Z0NBQ0xMLFdBQVU7Z0NBQ1ZKLFNBQVNQOzBDQUVULDRFQUFDSCxzRkFBU0E7b0NBQUNvQixNQUFNO29DQUFJQyxPQUFNOzs7Ozs7Ozs7Ozs7Ozs7OztrQ0FJL0IsOERBQUNOO3dCQUFJRCxXQUFVOzswQ0FDYiw4REFBQ1E7Z0NBQUdSLFdBQVU7MENBQVk7Ozs7OzswQ0FDMUIsOERBQUNTOzBDQUFHckIsbUJBQUFBLDZCQUFBQSxPQUFRQSxNQUFNLENBQUNzQixJQUFJOzs7Ozs7Ozs7Ozs7a0NBR3pCLDhEQUFDVDt3QkFBSUQsV0FBVTs7MENBQ2IsOERBQUNRO2dDQUFHUixXQUFVOzBDQUFZOzs7Ozs7MENBQzFCLDhEQUFDUzswQ0FBR3JCLG1CQUFBQSw2QkFBQUEsT0FBUUEsTUFBTSxDQUFDdUIsV0FBVzs7Ozs7Ozs7Ozs7O2tDQUVoQyw4REFBQ1Y7d0JBQUlELFdBQVU7Ozs7OztrQ0FFZiw4REFBQ0M7d0JBQUlELFdBQVU7OzBDQUNiLDhEQUFDUTtnQ0FBR1IsV0FBVTswQ0FBWTs7Ozs7OzBDQUMxQiw4REFBQ0M7Z0NBQUlELFdBQVU7O2tEQUNiLDhEQUFDWTt3Q0FBR1osV0FBVTtrREFBWTs7Ozs7O2tEQUMxQiw4REFBQ1M7a0RBQUdyQixtQkFBQUEsOEJBQUFBLG1CQUFBQSxPQUFReUIsUUFBUSxjQUFoQnpCLHVDQUFBQSxpQkFBa0JzQixJQUFJOzs7Ozs7Ozs7Ozs7MENBRTVCLDhEQUFDVDtnQ0FBSUQsV0FBVTs7a0RBQ2IsOERBQUNZO3dDQUFHWixXQUFVO2tEQUFZOzs7Ozs7a0RBQzFCLDhEQUFDUztrREFBRzFCLCtEQUFTQSxDQUFDSyxtQkFBQUEsOEJBQUFBLG9CQUFBQSxPQUFReUIsUUFBUSxjQUFoQnpCLHdDQUFBQSxrQkFBa0IwQixLQUFLOzs7Ozs7Ozs7Ozs7MENBRXZDLDhEQUFDYjtnQ0FBSUQsV0FBVTs7a0RBQ2IsOERBQUNZO3dDQUFHWixXQUFVO2tEQUFZOzs7Ozs7a0RBQzFCLDhEQUFDUztrREFBR3JCLG1CQUFBQSw4QkFBQUEsb0JBQUFBLE9BQVF5QixRQUFRLGNBQWhCekIsd0NBQUFBLGtCQUFrQjJCLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPekM7R0FoRWdCNUI7O1FBQ3lCSCw0REFBZ0JBOzs7S0FEekNHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL21vZGFsL2luZGV4LnRzeD8xZWZkIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgeyBwaG9uZU1hc2sgfSBmcm9tIFwiQC9hcHAvdXRpbHMvcGhvbmVtYXNrXCI7XG5pbXBvcnQgeyB1c2VNb2RhbFByb3ZpZGVyIH0gZnJvbSBcIkAvY29udGV4dC9tb2RhbFwiO1xuaW1wb3J0IHsgTW91c2VFdmVudEhhbmRsZXIsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRmlYQ2lyY2xlIH0gZnJvbSBcInJlYWN0LWljb25zL2ZpXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBNb2RhbFRpY2tldCgpIHtcbiAgY29uc3QgeyBoYW5kbGVNb2RhbFZpc2libGUsIHRpY2tldCB9ID0gdXNlTW9kYWxQcm92aWRlcigpO1xuICBjb25zdCBtb2RhbFJlZiA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudCB8IG51bGw+KG51bGwpO1xuXG4gIGNvbnN0IGhhbmRsZUNsaWNrT3V0c2lkZU1vZGFsID0gKHRhcmdldDogTm9kZSkgPT4ge1xuICAgIGlmIChtb2RhbFJlZi5jdXJyZW50ICYmICFtb2RhbFJlZi5jdXJyZW50LmNvbnRhaW5zKHRhcmdldCkpXG4gICAgICBoYW5kbGVNb2RhbFZpc2libGUoKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uXG4gICAgICBvbkNsaWNrPXsoZSkgPT4gaGFuZGxlQ2xpY2tPdXRzaWRlTW9kYWwoZS50YXJnZXQgYXMgTm9kZSl9XG4gICAgICB0YWJJbmRleD1cIi0xXCJcbiAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSBiZy1ncmF5LTgwMC84MCB3LWZ1bGwgbWluLWgtc2NyZWVuIFwiXG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIFwiPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgcmVmPXttb2RhbFJlZn1cbiAgICAgICAgICBjbGFzc05hbWU9XCJiZy13aGl0ZSBzaGFkb3ctbGcgdy00LzUgbWQ6dy0xLzIgbWF4LXctMnhsIHAtMyByb3VuZGVkLW1kXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIG1iLTQgYmctc2xhdGUtNjAwXCI+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtbGcgbWQ6dGV4dC0yeGxcIj5cbiAgICAgICAgICAgICAgRGV0YWxoZXMgZG8gQ2hhbWFkb1xuICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB5LTEgcHgtMiAgdGV4dC13aGl0ZVwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZU1vZGFsVmlzaWJsZX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEZpWENpcmNsZSBzaXplPXsyNH0gY29sb3I9XCJyZWRcIiAvPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwLWdhcC0xIG1iLTJcIj5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJmb250LWJvbGRcIj5Ob21lOjwvaDI+XG4gICAgICAgICAgICA8cD57dGlja2V0Py50aWNrZXQubmFtZX08L3A+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLTEgbWItMlwiPlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiPkRlc2NyacOnw6NvOjwvaDI+XG4gICAgICAgICAgICA8cD57dGlja2V0Py50aWNrZXQuZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyLTIgYm9yZGVyLXMtY3lhbi0yMDAgbXktM1wiPjwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGdhcC0xIG1iLTJcIj5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJmb250LWJvbGRcIj5EZXRhbGhlcyBkbyBjbGllbnRlPC9oMj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtMlwiPlxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+Tm9tZTo8L2gzPlxuICAgICAgICAgICAgICA8cD57dGlja2V0Py5jdXN0b21lcj8ubmFtZX08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtMlwiPlxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+VGVsZWZvbmU6PC9oMz5cbiAgICAgICAgICAgICAgPHA+e3Bob25lTWFzayh0aWNrZXQ/LmN1c3RvbWVyPy5waG9uZSBhcyBzdHJpbmcpfTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC0yXCI+XG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmb250LWJvbGRcIj5FbWFpbDo8L2gzPlxuICAgICAgICAgICAgICA8cD57dGlja2V0Py5jdXN0b21lcj8uZW1haWx9PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufVxuIl0sIm5hbWVzIjpbInBob25lTWFzayIsInVzZU1vZGFsUHJvdmlkZXIiLCJ1c2VSZWYiLCJGaVhDaXJjbGUiLCJNb2RhbFRpY2tldCIsInRpY2tldCIsImhhbmRsZU1vZGFsVmlzaWJsZSIsIm1vZGFsUmVmIiwiaGFuZGxlQ2xpY2tPdXRzaWRlTW9kYWwiLCJ0YXJnZXQiLCJjdXJyZW50IiwiY29udGFpbnMiLCJzZWN0aW9uIiwib25DbGljayIsImUiLCJ0YWJJbmRleCIsImFyaWEtaGlkZGVuIiwiY2xhc3NOYW1lIiwiZGl2IiwicmVmIiwiaDEiLCJidXR0b24iLCJ0eXBlIiwic2l6ZSIsImNvbG9yIiwiaDIiLCJwIiwibmFtZSIsImRlc2NyaXB0aW9uIiwiaDMiLCJjdXN0b21lciIsInBob25lIiwiZW1haWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/modal/index.tsx\n"));

/***/ })

});