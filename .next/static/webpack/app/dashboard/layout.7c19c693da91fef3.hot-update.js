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

/***/ "(app-pages-browser)/./src/components/modal/index.tsx":
/*!****************************************!*\
  !*** ./src/components/modal/index.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ModalTicket: function() { return /* binding */ ModalTicket; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _app_utils_phonemask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/utils/phonemask */ \"(app-pages-browser)/./src/app/utils/phonemask.ts\");\n/* harmony import */ var _context_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/context/modal */ \"(app-pages-browser)/./src/context/modal/index.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _barrel_optimize_names_FiXCircle_react_icons_fi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=FiXCircle!=!react-icons/fi */ \"(app-pages-browser)/./node_modules/react-icons/fi/index.esm.js\");\n/* __next_internal_client_entry_do_not_use__ ModalTicket auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction ModalTicket() {\n    var _ticket_customer, _ticket_customer1, _ticket_customer2;\n    _s();\n    const { handleModalVisible, ticket } = (0,_context_modal__WEBPACK_IMPORTED_MODULE_2__.useModalProvider)();\n    const modalRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);\n    const handleClickOutsideModal = (target)=>{\n        if (modalRef.current && !modalRef.current.contains(target)) handleModalVisible();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        onClick: (e)=>handleClickOutsideModal(e.target),\n        className: \"absolute bg-gray-800/80 w-full min-h-screen\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"absolute inset-0 flex items-center justify-center bg-slate-600\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                ref: modalRef,\n                className: \"bg-white shadow-lg w-4/5 md:w-1/2 max-w-2xl p-3 rounded-md\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center justify-between mb-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"font-bold text-lg md:text-2xl\",\n                                children: \"Detalhes do Chamado\"\n                            }, void 0, false, {\n                                fileName: \"/home/juliofreitas/devController/src/components/modal/index.tsx\",\n                                lineNumber: 28,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"button\",\n                                className: \"py-1 px-2  text-white\",\n                                onClick: handleModalVisible,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FiXCircle_react_icons_fi__WEBPACK_IMPORTED_MODULE_4__.FiXCircle, {\n                                    size: 24,\n                                    color: \"red\"\n                                }, void 0, false, {\n                                    fileName: \"/home/juliofreitas/devController/src/components/modal/index.tsx\",\n                                    lineNumber: 36,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/home/juliofreitas/devController/src/components/modal/index.tsx\",\n                                lineNumber: 31,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/juliofreitas/devController/src/components/modal/index.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-wrap-gap-1 mb-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"font-bold\",\n                                children: \"Nome:\"\n                            }, void 0, false, {\n                                fileName: \"/home/juliofreitas/devController/src/components/modal/index.tsx\",\n                                lineNumber: 41,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: ticket === null || ticket === void 0 ? void 0 : ticket.ticket.name\n                            }, void 0, false, {\n                                fileName: \"/home/juliofreitas/devController/src/components/modal/index.tsx\",\n                                lineNumber: 42,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/juliofreitas/devController/src/components/modal/index.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col gap-1 mb-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"font-bold\",\n                                children: \"Descri\\xe7\\xe3o:\"\n                            }, void 0, false, {\n                                fileName: \"/home/juliofreitas/devController/src/components/modal/index.tsx\",\n                                lineNumber: 46,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: ticket === null || ticket === void 0 ? void 0 : ticket.ticket.description\n                            }, void 0, false, {\n                                fileName: \"/home/juliofreitas/devController/src/components/modal/index.tsx\",\n                                lineNumber: 47,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/juliofreitas/devController/src/components/modal/index.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"border-2 border-s-cyan-200 my-3\"\n                    }, void 0, false, {\n                        fileName: \"/home/juliofreitas/devController/src/components/modal/index.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col gap-1 mb-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"font-bold\",\n                                children: \"Detalhes do cliente\"\n                            }, void 0, false, {\n                                fileName: \"/home/juliofreitas/devController/src/components/modal/index.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex gap-2\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        className: \"font-bold\",\n                                        children: \"Nome:\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/juliofreitas/devController/src/components/modal/index.tsx\",\n                                        lineNumber: 54,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: ticket === null || ticket === void 0 ? void 0 : (_ticket_customer = ticket.customer) === null || _ticket_customer === void 0 ? void 0 : _ticket_customer.name\n                                    }, void 0, false, {\n                                        fileName: \"/home/juliofreitas/devController/src/components/modal/index.tsx\",\n                                        lineNumber: 55,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/juliofreitas/devController/src/components/modal/index.tsx\",\n                                lineNumber: 53,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex gap-2\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        className: \"font-bold\",\n                                        children: \"Telefone:\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/juliofreitas/devController/src/components/modal/index.tsx\",\n                                        lineNumber: 58,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: (0,_app_utils_phonemask__WEBPACK_IMPORTED_MODULE_1__.phoneMask)(ticket === null || ticket === void 0 ? void 0 : (_ticket_customer1 = ticket.customer) === null || _ticket_customer1 === void 0 ? void 0 : _ticket_customer1.phone)\n                                    }, void 0, false, {\n                                        fileName: \"/home/juliofreitas/devController/src/components/modal/index.tsx\",\n                                        lineNumber: 59,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/juliofreitas/devController/src/components/modal/index.tsx\",\n                                lineNumber: 57,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex gap-2\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        className: \"font-bold\",\n                                        children: \"Email:\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/juliofreitas/devController/src/components/modal/index.tsx\",\n                                        lineNumber: 62,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: ticket === null || ticket === void 0 ? void 0 : (_ticket_customer2 = ticket.customer) === null || _ticket_customer2 === void 0 ? void 0 : _ticket_customer2.email\n                                    }, void 0, false, {\n                                        fileName: \"/home/juliofreitas/devController/src/components/modal/index.tsx\",\n                                        lineNumber: 63,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/juliofreitas/devController/src/components/modal/index.tsx\",\n                                lineNumber: 61,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/juliofreitas/devController/src/components/modal/index.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/juliofreitas/devController/src/components/modal/index.tsx\",\n                lineNumber: 23,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/juliofreitas/devController/src/components/modal/index.tsx\",\n            lineNumber: 22,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/juliofreitas/devController/src/components/modal/index.tsx\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, this);\n}\n_s(ModalTicket, \"jEARcw0Rn3YlAtQ3Paumyh0I93o=\", false, function() {\n    return [\n        _context_modal__WEBPACK_IMPORTED_MODULE_2__.useModalProvider\n    ];\n});\n_c = ModalTicket;\nvar _c;\n$RefreshReg$(_c, \"ModalTicket\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL21vZGFsL2luZGV4LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFFa0Q7QUFDQztBQUNEO0FBQ1A7QUFFcEMsU0FBU0k7UUErQ0VDLGtCQUlXQSxtQkFJWEE7O0lBdERoQixNQUFNLEVBQUVDLGtCQUFrQixFQUFFRCxNQUFNLEVBQUUsR0FBR0osZ0VBQWdCQTtJQUN2RCxNQUFNTSxXQUFXTCw2Q0FBTUEsQ0FBd0I7SUFFL0MsTUFBTU0sMEJBQTBCLENBQUNDO1FBQy9CLElBQUlGLFNBQVNHLE9BQU8sSUFBSSxDQUFDSCxTQUFTRyxPQUFPLENBQUNDLFFBQVEsQ0FBQ0YsU0FDakRIO0lBQ0o7SUFFQSxxQkFDRSw4REFBQ007UUFDQ0MsU0FBUyxDQUFDQyxJQUFNTix3QkFBd0JNLEVBQUVMLE1BQU07UUFDaERNLFdBQVU7a0JBRVYsNEVBQUNDO1lBQUlELFdBQVU7c0JBQ2IsNEVBQUNDO2dCQUNDQyxLQUFLVjtnQkFDTFEsV0FBVTs7a0NBRVYsOERBQUNDO3dCQUFJRCxXQUFVOzswQ0FDYiw4REFBQ0c7Z0NBQUdILFdBQVU7MENBQWdDOzs7Ozs7MENBRzlDLDhEQUFDSTtnQ0FDQ0MsTUFBSztnQ0FDTEwsV0FBVTtnQ0FDVkYsU0FBU1A7MENBRVQsNEVBQUNILHNGQUFTQTtvQ0FBQ2tCLE1BQU07b0NBQUlDLE9BQU07Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUkvQiw4REFBQ047d0JBQUlELFdBQVU7OzBDQUNiLDhEQUFDUTtnQ0FBR1IsV0FBVTswQ0FBWTs7Ozs7OzBDQUMxQiw4REFBQ1M7MENBQUduQixtQkFBQUEsNkJBQUFBLE9BQVFBLE1BQU0sQ0FBQ29CLElBQUk7Ozs7Ozs7Ozs7OztrQ0FHekIsOERBQUNUO3dCQUFJRCxXQUFVOzswQ0FDYiw4REFBQ1E7Z0NBQUdSLFdBQVU7MENBQVk7Ozs7OzswQ0FDMUIsOERBQUNTOzBDQUFHbkIsbUJBQUFBLDZCQUFBQSxPQUFRQSxNQUFNLENBQUNxQixXQUFXOzs7Ozs7Ozs7Ozs7a0NBRWhDLDhEQUFDVjt3QkFBSUQsV0FBVTs7Ozs7O2tDQUVmLDhEQUFDQzt3QkFBSUQsV0FBVTs7MENBQ2IsOERBQUNRO2dDQUFHUixXQUFVOzBDQUFZOzs7Ozs7MENBQzFCLDhEQUFDQztnQ0FBSUQsV0FBVTs7a0RBQ2IsOERBQUNZO3dDQUFHWixXQUFVO2tEQUFZOzs7Ozs7a0RBQzFCLDhEQUFDUztrREFBR25CLG1CQUFBQSw4QkFBQUEsbUJBQUFBLE9BQVF1QixRQUFRLGNBQWhCdkIsdUNBQUFBLGlCQUFrQm9CLElBQUk7Ozs7Ozs7Ozs7OzswQ0FFNUIsOERBQUNUO2dDQUFJRCxXQUFVOztrREFDYiw4REFBQ1k7d0NBQUdaLFdBQVU7a0RBQVk7Ozs7OztrREFDMUIsOERBQUNTO2tEQUFJeEIsK0RBQVNBLENBQUNLLG1CQUFBQSw4QkFBQUEsb0JBQUFBLE9BQVF1QixRQUFRLGNBQWhCdkIsd0NBQUFBLGtCQUFrQndCLEtBQUs7Ozs7Ozs7Ozs7OzswQ0FFeEMsOERBQUNiO2dDQUFJRCxXQUFVOztrREFDYiw4REFBQ1k7d0NBQUdaLFdBQVU7a0RBQVk7Ozs7OztrREFDMUIsOERBQUNTO2tEQUFHbkIsbUJBQUFBLDhCQUFBQSxvQkFBQUEsT0FBUXVCLFFBQVEsY0FBaEJ2Qix3Q0FBQUEsa0JBQWtCeUIsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU96QztHQTlEZ0IxQjs7UUFDeUJILDREQUFnQkE7OztLQUR6Q0ciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbW9kYWwvaW5kZXgudHN4PzFlZmQiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCB7IHBob25lTWFzayB9IGZyb20gXCJAL2FwcC91dGlscy9waG9uZW1hc2tcIjtcbmltcG9ydCB7IHVzZU1vZGFsUHJvdmlkZXIgfSBmcm9tIFwiQC9jb250ZXh0L21vZGFsXCI7XG5pbXBvcnQgeyBNb3VzZUV2ZW50SGFuZGxlciwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGaVhDaXJjbGUgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmlcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIE1vZGFsVGlja2V0KCkge1xuICBjb25zdCB7IGhhbmRsZU1vZGFsVmlzaWJsZSwgdGlja2V0IH0gPSB1c2VNb2RhbFByb3ZpZGVyKCk7XG4gIGNvbnN0IG1vZGFsUmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50IHwgbnVsbD4obnVsbCk7XG5cbiAgY29uc3QgaGFuZGxlQ2xpY2tPdXRzaWRlTW9kYWwgPSAodGFyZ2V0OiBOb2RlKSA9PiB7XG4gICAgaWYgKG1vZGFsUmVmLmN1cnJlbnQgJiYgIW1vZGFsUmVmLmN1cnJlbnQuY29udGFpbnModGFyZ2V0KSlcbiAgICAgIGhhbmRsZU1vZGFsVmlzaWJsZSgpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb25cbiAgICAgIG9uQ2xpY2s9eyhlKSA9PiBoYW5kbGVDbGlja091dHNpZGVNb2RhbChlLnRhcmdldCBhcyBOb2RlKX1cbiAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIGJnLWdyYXktODAwLzgwIHctZnVsbCBtaW4taC1zY3JlZW5cIlxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBiZy1zbGF0ZS02MDBcIj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIHJlZj17bW9kYWxSZWZ9XG4gICAgICAgICAgY2xhc3NOYW1lPVwiYmctd2hpdGUgc2hhZG93LWxnIHctNC81IG1kOnctMS8yIG1heC13LTJ4bCBwLTMgcm91bmRlZC1tZFwiXG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBtYi00XCI+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtbGcgbWQ6dGV4dC0yeGxcIj5cbiAgICAgICAgICAgICAgRGV0YWxoZXMgZG8gQ2hhbWFkb1xuICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB5LTEgcHgtMiAgdGV4dC13aGl0ZVwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZU1vZGFsVmlzaWJsZX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEZpWENpcmNsZSBzaXplPXsyNH0gY29sb3I9XCJyZWRcIiAvPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwLWdhcC0xIG1iLTJcIj5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJmb250LWJvbGRcIj5Ob21lOjwvaDI+XG4gICAgICAgICAgICA8cD57dGlja2V0Py50aWNrZXQubmFtZX08L3A+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLTEgbWItMlwiPlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiPkRlc2NyacOnw6NvOjwvaDI+XG4gICAgICAgICAgICA8cD57dGlja2V0Py50aWNrZXQuZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyLTIgYm9yZGVyLXMtY3lhbi0yMDAgbXktM1wiPjwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGdhcC0xIG1iLTJcIj5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJmb250LWJvbGRcIj5EZXRhbGhlcyBkbyBjbGllbnRlPC9oMj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtMlwiPlxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+Tm9tZTo8L2gzPlxuICAgICAgICAgICAgICA8cD57dGlja2V0Py5jdXN0b21lcj8ubmFtZX08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtMlwiPlxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+VGVsZWZvbmU6PC9oMz5cbiAgICAgICAgICAgICAgPHA+eyBwaG9uZU1hc2sodGlja2V0Py5jdXN0b21lcj8ucGhvbmUgYXMgc3RyaW5nKX08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtMlwiPlxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+RW1haWw6PC9oMz5cbiAgICAgICAgICAgICAgPHA+e3RpY2tldD8uY3VzdG9tZXI/LmVtYWlsfTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJwaG9uZU1hc2siLCJ1c2VNb2RhbFByb3ZpZGVyIiwidXNlUmVmIiwiRmlYQ2lyY2xlIiwiTW9kYWxUaWNrZXQiLCJ0aWNrZXQiLCJoYW5kbGVNb2RhbFZpc2libGUiLCJtb2RhbFJlZiIsImhhbmRsZUNsaWNrT3V0c2lkZU1vZGFsIiwidGFyZ2V0IiwiY3VycmVudCIsImNvbnRhaW5zIiwic2VjdGlvbiIsIm9uQ2xpY2siLCJlIiwiY2xhc3NOYW1lIiwiZGl2IiwicmVmIiwiaDEiLCJidXR0b24iLCJ0eXBlIiwic2l6ZSIsImNvbG9yIiwiaDIiLCJwIiwibmFtZSIsImRlc2NyaXB0aW9uIiwiaDMiLCJjdXN0b21lciIsInBob25lIiwiZW1haWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/modal/index.tsx\n"));

/***/ })

});