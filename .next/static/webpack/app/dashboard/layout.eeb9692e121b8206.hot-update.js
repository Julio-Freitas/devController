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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ModalTicket: function() { return /* binding */ ModalTicket; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _app_utils_phonemask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/utils/phonemask */ \"(app-pages-browser)/./src/app/utils/phonemask.ts\");\n/* harmony import */ var _context_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/context/modal */ \"(app-pages-browser)/./src/context/modal/index.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _barrel_optimize_names_FiXCircle_react_icons_fi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=FiXCircle!=!react-icons/fi */ \"(app-pages-browser)/./node_modules/react-icons/fi/index.esm.js\");\n/* __next_internal_client_entry_do_not_use__ ModalTicket auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction ModalTicket() {\n    var _ticket_customer, _ticket_customer1, _ticket_customer2;\n    _s();\n    const { handleModalVisible, ticket } = (0,_context_modal__WEBPACK_IMPORTED_MODULE_2__.useModalProvider)();\n    const modalRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);\n    const handleClickOutsideModal = (target)=>{\n        if (modalRef.current && !modalRef.current.contains(target)) handleModalVisible();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        onClick: (e)=>handleClickOutsideModal(e.target),\n        tabIndex: -1,\n        \"aria-hidden\": \"true\",\n        className: \"absolute bg-gray-800/80 w-full min-h-screen \",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"absolute inset-0 flex items-center justify-center  \",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                ref: modalRef,\n                className: \"bg-white shadow-lg w-4/5 md:w-1/2 max-w-2xl p-3 rounded-md dark:bg-gray-700\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center justify-between mb-4 \",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"font-bold text-lg md:text-2xl text-gray-950 dark:text-white\",\n                                children: \"Detalhes do Chamado\"\n                            }, void 0, false, {\n                                fileName: \"/home/juliofreitas/devController/src/components/modal/index.tsx\",\n                                lineNumber: 30,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"button\",\n                                className: \"py-1 px-2  text-white\",\n                                onClick: handleModalVisible,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FiXCircle_react_icons_fi__WEBPACK_IMPORTED_MODULE_4__.FiXCircle, {\n                                    size: 24,\n                                    color: \"red\"\n                                }, void 0, false, {\n                                    fileName: \"/home/juliofreitas/devController/src/components/modal/index.tsx\",\n                                    lineNumber: 38,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/home/juliofreitas/devController/src/components/modal/index.tsx\",\n                                lineNumber: 33,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/juliofreitas/devController/src/components/modal/index.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-wrap-gap-1 mb-2 text-base leading-relaxed text-gray-500 dark:text-gray-400\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"font-bold\",\n                                children: \"Nome:\"\n                            }, void 0, false, {\n                                fileName: \"/home/juliofreitas/devController/src/components/modal/index.tsx\",\n                                lineNumber: 43,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"pl-2\",\n                                children: ticket === null || ticket === void 0 ? void 0 : ticket.ticket.name\n                            }, void 0, false, {\n                                fileName: \"/home/juliofreitas/devController/src/components/modal/index.tsx\",\n                                lineNumber: 44,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/juliofreitas/devController/src/components/modal/index.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col gap-1 mb-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"font-bold\",\n                                children: \"Descri\\xe7\\xe3o:\"\n                            }, void 0, false, {\n                                fileName: \"/home/juliofreitas/devController/src/components/modal/index.tsx\",\n                                lineNumber: 48,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: ticket === null || ticket === void 0 ? void 0 : ticket.ticket.description\n                            }, void 0, false, {\n                                fileName: \"/home/juliofreitas/devController/src/components/modal/index.tsx\",\n                                lineNumber: 49,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/juliofreitas/devController/src/components/modal/index.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"border-2 border-s-cyan-200 my-3\"\n                    }, void 0, false, {\n                        fileName: \"/home/juliofreitas/devController/src/components/modal/index.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col gap-1 mb-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"font-bold\",\n                                children: \"Detalhes do cliente\"\n                            }, void 0, false, {\n                                fileName: \"/home/juliofreitas/devController/src/components/modal/index.tsx\",\n                                lineNumber: 54,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex gap-2\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        className: \"font-bold\",\n                                        children: \"Nome:\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/juliofreitas/devController/src/components/modal/index.tsx\",\n                                        lineNumber: 56,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: ticket === null || ticket === void 0 ? void 0 : (_ticket_customer = ticket.customer) === null || _ticket_customer === void 0 ? void 0 : _ticket_customer.name\n                                    }, void 0, false, {\n                                        fileName: \"/home/juliofreitas/devController/src/components/modal/index.tsx\",\n                                        lineNumber: 57,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/juliofreitas/devController/src/components/modal/index.tsx\",\n                                lineNumber: 55,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex gap-2\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        className: \"font-bold\",\n                                        children: \"Telefone:\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/juliofreitas/devController/src/components/modal/index.tsx\",\n                                        lineNumber: 60,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: (0,_app_utils_phonemask__WEBPACK_IMPORTED_MODULE_1__.phoneMask)(ticket === null || ticket === void 0 ? void 0 : (_ticket_customer1 = ticket.customer) === null || _ticket_customer1 === void 0 ? void 0 : _ticket_customer1.phone)\n                                    }, void 0, false, {\n                                        fileName: \"/home/juliofreitas/devController/src/components/modal/index.tsx\",\n                                        lineNumber: 61,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/juliofreitas/devController/src/components/modal/index.tsx\",\n                                lineNumber: 59,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex gap-2\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        className: \"font-bold\",\n                                        children: \"Email:\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/juliofreitas/devController/src/components/modal/index.tsx\",\n                                        lineNumber: 64,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: ticket === null || ticket === void 0 ? void 0 : (_ticket_customer2 = ticket.customer) === null || _ticket_customer2 === void 0 ? void 0 : _ticket_customer2.email\n                                    }, void 0, false, {\n                                        fileName: \"/home/juliofreitas/devController/src/components/modal/index.tsx\",\n                                        lineNumber: 65,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/juliofreitas/devController/src/components/modal/index.tsx\",\n                                lineNumber: 63,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/juliofreitas/devController/src/components/modal/index.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/juliofreitas/devController/src/components/modal/index.tsx\",\n                lineNumber: 25,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/juliofreitas/devController/src/components/modal/index.tsx\",\n            lineNumber: 24,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/juliofreitas/devController/src/components/modal/index.tsx\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, this);\n}\n_s(ModalTicket, \"jEARcw0Rn3YlAtQ3Paumyh0I93o=\", false, function() {\n    return [\n        _context_modal__WEBPACK_IMPORTED_MODULE_2__.useModalProvider\n    ];\n});\n_c = ModalTicket;\nvar _c;\n$RefreshReg$(_c, \"ModalTicket\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL21vZGFsL2luZGV4LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFFa0Q7QUFDQztBQUNEO0FBQ1A7QUFFcEMsU0FBU0k7UUFpREVDLGtCQUlVQSxtQkFJVkE7O0lBeERoQixNQUFNLEVBQUVDLGtCQUFrQixFQUFFRCxNQUFNLEVBQUUsR0FBR0osZ0VBQWdCQTtJQUN2RCxNQUFNTSxXQUFXTCw2Q0FBTUEsQ0FBd0I7SUFFL0MsTUFBTU0sMEJBQTBCLENBQUNDO1FBQy9CLElBQUlGLFNBQVNHLE9BQU8sSUFBSSxDQUFDSCxTQUFTRyxPQUFPLENBQUNDLFFBQVEsQ0FBQ0YsU0FDakRIO0lBQ0o7SUFFQSxxQkFDRSw4REFBQ007UUFDQ0MsU0FBUyxDQUFDQyxJQUFNTix3QkFBd0JNLEVBQUVMLE1BQU07UUFDaERNLFVBQVUsQ0FBQztRQUNYQyxlQUFZO1FBQ1pDLFdBQVU7a0JBRVYsNEVBQUNDO1lBQUlELFdBQVU7c0JBQ2IsNEVBQUNDO2dCQUNDQyxLQUFLWjtnQkFDTFUsV0FBVTs7a0NBRVYsOERBQUNDO3dCQUFJRCxXQUFVOzswQ0FDYiw4REFBQ0c7Z0NBQUdILFdBQVU7MENBQThEOzs7Ozs7MENBRzVFLDhEQUFDSTtnQ0FDQ0MsTUFBSztnQ0FDTEwsV0FBVTtnQ0FDVkosU0FBU1A7MENBRVQsNEVBQUNILHNGQUFTQTtvQ0FBQ29CLE1BQU07b0NBQUlDLE9BQU07Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUkvQiw4REFBQ047d0JBQUlELFdBQVU7OzBDQUNiLDhEQUFDUTtnQ0FBR1IsV0FBVTswQ0FBWTs7Ozs7OzBDQUMxQiw4REFBQ1M7Z0NBQUVULFdBQVU7MENBQVFaLG1CQUFBQSw2QkFBQUEsT0FBUUEsTUFBTSxDQUFDc0IsSUFBSTs7Ozs7Ozs7Ozs7O2tDQUcxQyw4REFBQ1Q7d0JBQUlELFdBQVU7OzBDQUNiLDhEQUFDUTtnQ0FBR1IsV0FBVTswQ0FBWTs7Ozs7OzBDQUMxQiw4REFBQ1M7MENBQUdyQixtQkFBQUEsNkJBQUFBLE9BQVFBLE1BQU0sQ0FBQ3VCLFdBQVc7Ozs7Ozs7Ozs7OztrQ0FFaEMsOERBQUNWO3dCQUFJRCxXQUFVOzs7Ozs7a0NBRWYsOERBQUNDO3dCQUFJRCxXQUFVOzswQ0FDYiw4REFBQ1E7Z0NBQUdSLFdBQVU7MENBQVk7Ozs7OzswQ0FDMUIsOERBQUNDO2dDQUFJRCxXQUFVOztrREFDYiw4REFBQ1k7d0NBQUdaLFdBQVU7a0RBQVk7Ozs7OztrREFDMUIsOERBQUNTO2tEQUFHckIsbUJBQUFBLDhCQUFBQSxtQkFBQUEsT0FBUXlCLFFBQVEsY0FBaEJ6Qix1Q0FBQUEsaUJBQWtCc0IsSUFBSTs7Ozs7Ozs7Ozs7OzBDQUU1Qiw4REFBQ1Q7Z0NBQUlELFdBQVU7O2tEQUNiLDhEQUFDWTt3Q0FBR1osV0FBVTtrREFBWTs7Ozs7O2tEQUMxQiw4REFBQ1M7a0RBQUcxQiwrREFBU0EsQ0FBQ0ssbUJBQUFBLDhCQUFBQSxvQkFBQUEsT0FBUXlCLFFBQVEsY0FBaEJ6Qix3Q0FBQUEsa0JBQWtCMEIsS0FBSzs7Ozs7Ozs7Ozs7OzBDQUV2Qyw4REFBQ2I7Z0NBQUlELFdBQVU7O2tEQUNiLDhEQUFDWTt3Q0FBR1osV0FBVTtrREFBWTs7Ozs7O2tEQUMxQiw4REFBQ1M7a0RBQUdyQixtQkFBQUEsOEJBQUFBLG9CQUFBQSxPQUFReUIsUUFBUSxjQUFoQnpCLHdDQUFBQSxrQkFBa0IyQixLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT3pDO0dBaEVnQjVCOztRQUN5QkgsNERBQWdCQTs7O0tBRHpDRyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9tb2RhbC9pbmRleC50c3g/MWVmZCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHsgcGhvbmVNYXNrIH0gZnJvbSBcIkAvYXBwL3V0aWxzL3Bob25lbWFza1wiO1xuaW1wb3J0IHsgdXNlTW9kYWxQcm92aWRlciB9IGZyb20gXCJAL2NvbnRleHQvbW9kYWxcIjtcbmltcG9ydCB7IE1vdXNlRXZlbnRIYW5kbGVyLCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEZpWENpcmNsZSB9IGZyb20gXCJyZWFjdC1pY29ucy9maVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gTW9kYWxUaWNrZXQoKSB7XG4gIGNvbnN0IHsgaGFuZGxlTW9kYWxWaXNpYmxlLCB0aWNrZXQgfSA9IHVzZU1vZGFsUHJvdmlkZXIoKTtcbiAgY29uc3QgbW9kYWxSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQgfCBudWxsPihudWxsKTtcblxuICBjb25zdCBoYW5kbGVDbGlja091dHNpZGVNb2RhbCA9ICh0YXJnZXQ6IE5vZGUpID0+IHtcbiAgICBpZiAobW9kYWxSZWYuY3VycmVudCAmJiAhbW9kYWxSZWYuY3VycmVudC5jb250YWlucyh0YXJnZXQpKVxuICAgICAgaGFuZGxlTW9kYWxWaXNpYmxlKCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvblxuICAgICAgb25DbGljaz17KGUpID0+IGhhbmRsZUNsaWNrT3V0c2lkZU1vZGFsKGUudGFyZ2V0IGFzIE5vZGUpfVxuICAgICAgdGFiSW5kZXg9ey0xfVxuICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIGJnLWdyYXktODAwLzgwIHctZnVsbCBtaW4taC1zY3JlZW4gXCJcbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgIFwiPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgcmVmPXttb2RhbFJlZn1cbiAgICAgICAgICBjbGFzc05hbWU9XCJiZy13aGl0ZSBzaGFkb3ctbGcgdy00LzUgbWQ6dy0xLzIgbWF4LXctMnhsIHAtMyByb3VuZGVkLW1kIGRhcms6YmctZ3JheS03MDBcIlxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gbWItNCBcIj5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC1sZyBtZDp0ZXh0LTJ4bCB0ZXh0LWdyYXktOTUwIGRhcms6dGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgICBEZXRhbGhlcyBkbyBDaGFtYWRvXG4gICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHktMSBweC0yICB0ZXh0LXdoaXRlXCJcbiAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlTW9kYWxWaXNpYmxlfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8RmlYQ2lyY2xlIHNpemU9ezI0fSBjb2xvcj1cInJlZFwiIC8+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAtZ2FwLTEgbWItMiB0ZXh0LWJhc2UgbGVhZGluZy1yZWxheGVkIHRleHQtZ3JheS01MDAgZGFyazp0ZXh0LWdyYXktNDAwXCI+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+Tm9tZTo8L2gyPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicGwtMlwiPnt0aWNrZXQ/LnRpY2tldC5uYW1lfTwvcD5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAtMSBtYi0yXCI+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+RGVzY3Jpw6fDo286PC9oMj5cbiAgICAgICAgICAgIDxwPnt0aWNrZXQ/LnRpY2tldC5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXItMiBib3JkZXItcy1jeWFuLTIwMCBteS0zXCI+PC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLTEgbWItMlwiPlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiPkRldGFsaGVzIGRvIGNsaWVudGU8L2gyPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC0yXCI+XG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmb250LWJvbGRcIj5Ob21lOjwvaDM+XG4gICAgICAgICAgICAgIDxwPnt0aWNrZXQ/LmN1c3RvbWVyPy5uYW1lfTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC0yXCI+XG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmb250LWJvbGRcIj5UZWxlZm9uZTo8L2gzPlxuICAgICAgICAgICAgICA8cD57cGhvbmVNYXNrKHRpY2tldD8uY3VzdG9tZXI/LnBob25lIGFzIHN0cmluZyl9PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTJcIj5cbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiPkVtYWlsOjwvaDM+XG4gICAgICAgICAgICAgIDxwPnt0aWNrZXQ/LmN1c3RvbWVyPy5lbWFpbH08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59XG4iXSwibmFtZXMiOlsicGhvbmVNYXNrIiwidXNlTW9kYWxQcm92aWRlciIsInVzZVJlZiIsIkZpWENpcmNsZSIsIk1vZGFsVGlja2V0IiwidGlja2V0IiwiaGFuZGxlTW9kYWxWaXNpYmxlIiwibW9kYWxSZWYiLCJoYW5kbGVDbGlja091dHNpZGVNb2RhbCIsInRhcmdldCIsImN1cnJlbnQiLCJjb250YWlucyIsInNlY3Rpb24iLCJvbkNsaWNrIiwiZSIsInRhYkluZGV4IiwiYXJpYS1oaWRkZW4iLCJjbGFzc05hbWUiLCJkaXYiLCJyZWYiLCJoMSIsImJ1dHRvbiIsInR5cGUiLCJzaXplIiwiY29sb3IiLCJoMiIsInAiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJoMyIsImN1c3RvbWVyIiwicGhvbmUiLCJlbWFpbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/modal/index.tsx\n"));

/***/ })

});