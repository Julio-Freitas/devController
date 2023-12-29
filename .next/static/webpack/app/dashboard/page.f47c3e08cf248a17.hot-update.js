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

/***/ "(app-pages-browser)/./src/app/dashboard/components/ticket/index.tsx":
/*!*******************************************************!*\
  !*** ./src/app/dashboard/components/ticket/index.tsx ***!
  \*******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   TicketItem: function() { return /* binding */ TicketItem; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _barrel_optimize_names_FiCheckSquare_FiEye_react_icons_fi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=FiCheckSquare,FiEye!=!react-icons/fi */ \"(app-pages-browser)/./node_modules/react-icons/fi/index.esm.js\");\n/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/api */ \"(app-pages-browser)/./src/lib/api.ts\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _context_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/context/modal */ \"(app-pages-browser)/./src/context/modal/index.tsx\");\n/* __next_internal_client_entry_do_not_use__ TicketItem auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction TicketItem(param) {\n    let { ticket, customer } = param;\n    var _ticket_created_at;\n    _s();\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const { handleModalVisible, handleSetTicket } = (0,_context_modal__WEBPACK_IMPORTED_MODULE_4__.useModalProvider)();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const onDeleteTicket = async ()=>{\n        try {\n            setLoading(true);\n            await _lib_api__WEBPACK_IMPORTED_MODULE_1__.api.patch(\"/api/ticket\", {\n                id: ticket.id\n            });\n            router.refresh();\n        } catch (error) {\n            console.log(error);\n        } finally{\n            setLoading(false);\n        }\n    };\n    const handleModal = ()=>{\n        handleModalVisible();\n        if (customer) handleSetTicket({\n            customer,\n            ticket\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n        className: \"border-b-2 border-b-slate-200 h-16 last:border-b-0 bg-slate-100 hover:bg-gray-200 duration-300 data-[loading=true]:pointer-events-none data-[loading=true]:bg-slate-500 data-[loading=true]:opacity-30 data-[loading=true]:animate-pulse\",\n        \"data-loading\": loading,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                className: \"text-left py-2\",\n                children: ticket.name\n            }, void 0, false, {\n                fileName: \"/home/juliofreitas/devController/src/app/dashboard/components/ticket/index.tsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                className: \"text-left py-2 hidden sm:table-cell\",\n                children: (_ticket_created_at = ticket.created_at) === null || _ticket_created_at === void 0 ? void 0 : _ticket_created_at.toLocaleDateString(\"pt-br\")\n            }, void 0, false, {\n                fileName: \"/home/juliofreitas/devController/src/app/dashboard/components/ticket/index.tsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                className: \"text-left py-2\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"px-2 py-1 bg-green-700 text-white font-bold rounded-md text-sm\",\n                    children: ticket.status\n                }, void 0, false, {\n                    fileName: \"/home/juliofreitas/devController/src/app/dashboard/components/ticket/index.tsx\",\n                    lineNumber: 43,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/juliofreitas/devController/src/app/dashboard/components/ticket/index.tsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                className: \"text-left py-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"button\",\n                        onClick: onDeleteTicket,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FiCheckSquare_FiEye_react_icons_fi__WEBPACK_IMPORTED_MODULE_5__.FiCheckSquare, {\n                            size: 24,\n                            color: \"#131313\"\n                        }, void 0, false, {\n                            fileName: \"/home/juliofreitas/devController/src/app/dashboard/components/ticket/index.tsx\",\n                            lineNumber: 49,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/juliofreitas/devController/src/app/dashboard/components/ticket/index.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"ml-2\",\n                        type: \"button\",\n                        onClick: handleModal,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FiCheckSquare_FiEye_react_icons_fi__WEBPACK_IMPORTED_MODULE_5__.FiEye, {\n                            size: 24,\n                            color: \"#131313\"\n                        }, void 0, false, {\n                            fileName: \"/home/juliofreitas/devController/src/app/dashboard/components/ticket/index.tsx\",\n                            lineNumber: 53,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/juliofreitas/devController/src/app/dashboard/components/ticket/index.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/juliofreitas/devController/src/app/dashboard/components/ticket/index.tsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/juliofreitas/devController/src/app/dashboard/components/ticket/index.tsx\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, this);\n}\n_s(TicketItem, \"4My5RKwhp/QKxb7q6RVhLmFi3mg=\", false, function() {\n    return [\n        _context_modal__WEBPACK_IMPORTED_MODULE_4__.useModalProvider,\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = TicketItem;\nvar _c;\n$RefreshReg$(_c, \"TicketItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZGFzaGJvYXJkL2NvbXBvbmVudHMvdGlja2V0L2luZGV4LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUN3RTtBQUV4QztBQUNZO0FBQ1g7QUFDa0I7QUFHNUMsU0FBU00sV0FBVyxLQUF3RDtRQUF4RCxFQUFFQyxNQUFNLEVBQUVDLFFBQVEsRUFBc0MsR0FBeEQ7UUE4QmxCRDs7SUE3QlAsTUFBTSxDQUFDRSxTQUFTQyxXQUFXLEdBQUdOLCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU0sRUFBRU8sa0JBQWtCLEVBQUVDLGVBQWUsRUFBRSxHQUFHUCxnRUFBZ0JBO0lBQ2hFLE1BQU1RLFNBQVNWLDBEQUFTQTtJQUN4QixNQUFNVyxpQkFBaUI7UUFDckIsSUFBSTtZQUNGSixXQUFXO1lBQ1gsTUFBTVIseUNBQUdBLENBQUNhLEtBQUssQ0FBQyxlQUFlO2dCQUM3QkMsSUFBSVQsT0FBT1MsRUFBRTtZQUNmO1lBQ0FILE9BQU9JLE9BQU87UUFDaEIsRUFBRSxPQUFPQyxPQUFPO1lBQ2RDLFFBQVFDLEdBQUcsQ0FBQ0Y7UUFDZCxTQUFVO1lBQ1JSLFdBQVc7UUFDYjtJQUNGO0lBRUEsTUFBTVcsY0FBYztRQUNsQlY7UUFFQSxJQUFJSCxVQUFVSSxnQkFBZ0I7WUFBRUo7WUFBVUQ7UUFBTztJQUNuRDtJQUNBLHFCQUNFLDhEQUFDZTtRQUNDQyxXQUFVO1FBQ1ZDLGdCQUFjZjs7MEJBRWQsOERBQUNnQjtnQkFBR0YsV0FBVTswQkFBa0JoQixPQUFPbUIsSUFBSTs7Ozs7OzBCQUMzQyw4REFBQ0Q7Z0JBQUdGLFdBQVU7MkJBQ1hoQixxQkFBQUEsT0FBT29CLFVBQVUsY0FBakJwQix5Q0FBQUEsbUJBQW1CcUIsa0JBQWtCLENBQUM7Ozs7OzswQkFFekMsOERBQUNIO2dCQUFHRixXQUFVOzBCQUNaLDRFQUFDTTtvQkFBS04sV0FBVTs4QkFDYmhCLE9BQU91QixNQUFNOzs7Ozs7Ozs7OzswQkFHbEIsOERBQUNMO2dCQUFHRixXQUFVOztrQ0FDWiw4REFBQ1E7d0JBQU9DLE1BQUs7d0JBQVNDLFNBQVNuQjtrQ0FDN0IsNEVBQUNiLG9HQUFhQTs0QkFBQ2lDLE1BQU07NEJBQUlDLE9BQU07Ozs7Ozs7Ozs7O2tDQUdqQyw4REFBQ0o7d0JBQU9SLFdBQVU7d0JBQU9TLE1BQUs7d0JBQVNDLFNBQVNaO2tDQUM5Qyw0RUFBQ3JCLDRGQUFLQTs0QkFBQ2tDLE1BQU07NEJBQUlDLE9BQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS2pDO0dBaERnQjdCOztRQUVrQ0QsNERBQWdCQTtRQUNqREYsc0RBQVNBOzs7S0FIVkciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9kYXNoYm9hcmQvY29tcG9uZW50cy90aWNrZXQvaW5kZXgudHN4PzUxYjgiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgeyBGaUZpbGUsIEZpRXllLCBGaUV5ZU9mZiwgRmlDaGVja1NxdWFyZSB9IGZyb20gXCJyZWFjdC1pY29ucy9maVwiO1xuaW1wb3J0IHsgQ29tcG9uZW50VGlja2V0UHJvcHMsIFRpY2tldFByb3BzIH0gZnJvbSBcIi4vdHlwZXNcIjtcbmltcG9ydCB7IGFwaSB9IGZyb20gXCJAL2xpYi9hcGlcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VNb2RhbFByb3ZpZGVyIH0gZnJvbSBcIkAvY29udGV4dC9tb2RhbFwiO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBUaWNrZXRJdGVtKHsgdGlja2V0LCBjdXN0b21lciB9OiBUaWNrZXRQcm9wcyAmIENvbXBvbmVudFRpY2tldFByb3BzKSB7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgeyBoYW5kbGVNb2RhbFZpc2libGUsIGhhbmRsZVNldFRpY2tldCB9ID0gdXNlTW9kYWxQcm92aWRlcigpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3Qgb25EZWxldGVUaWNrZXQgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgICBhd2FpdCBhcGkucGF0Y2goXCIvYXBpL3RpY2tldFwiLCB7XG4gICAgICAgIGlkOiB0aWNrZXQuaWQsXG4gICAgICB9KTtcbiAgICAgIHJvdXRlci5yZWZyZXNoKCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZU1vZGFsID0gKCkgPT4ge1xuICAgIGhhbmRsZU1vZGFsVmlzaWJsZSgpO1xuXG4gICAgaWYgKGN1c3RvbWVyKSBoYW5kbGVTZXRUaWNrZXQoeyBjdXN0b21lciwgdGlja2V0IH0pO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDx0clxuICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyLWItMiBib3JkZXItYi1zbGF0ZS0yMDAgaC0xNiBsYXN0OmJvcmRlci1iLTAgYmctc2xhdGUtMTAwIGhvdmVyOmJnLWdyYXktMjAwIGR1cmF0aW9uLTMwMCBkYXRhLVtsb2FkaW5nPXRydWVdOnBvaW50ZXItZXZlbnRzLW5vbmUgZGF0YS1bbG9hZGluZz10cnVlXTpiZy1zbGF0ZS01MDAgZGF0YS1bbG9hZGluZz10cnVlXTpvcGFjaXR5LTMwIGRhdGEtW2xvYWRpbmc9dHJ1ZV06YW5pbWF0ZS1wdWxzZVwiXG4gICAgICBkYXRhLWxvYWRpbmc9e2xvYWRpbmd9XG4gICAgPlxuICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtbGVmdCBweS0yXCI+e3RpY2tldC5uYW1lfTwvdGQ+XG4gICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1sZWZ0IHB5LTIgaGlkZGVuIHNtOnRhYmxlLWNlbGxcIj5cbiAgICAgICAge3RpY2tldC5jcmVhdGVkX2F0Py50b0xvY2FsZURhdGVTdHJpbmcoXCJwdC1iclwiKX1cbiAgICAgIDwvdGQ+XG4gICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1sZWZ0IHB5LTJcIj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHgtMiBweS0xIGJnLWdyZWVuLTcwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCByb3VuZGVkLW1kIHRleHQtc21cIj5cbiAgICAgICAgICB7dGlja2V0LnN0YXR1c31cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC90ZD5cbiAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LWxlZnQgcHktMlwiPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtvbkRlbGV0ZVRpY2tldH0+XG4gICAgICAgICAgPEZpQ2hlY2tTcXVhcmUgc2l6ZT17MjR9IGNvbG9yPVwiIzEzMTMxM1wiIC8+XG4gICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibWwtMlwiIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtoYW5kbGVNb2RhbH0+XG4gICAgICAgICAgPEZpRXllIHNpemU9ezI0fSBjb2xvcj1cIiMxMzEzMTNcIiAvPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvdGQ+XG4gICAgPC90cj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJGaUV5ZSIsIkZpQ2hlY2tTcXVhcmUiLCJhcGkiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsInVzZU1vZGFsUHJvdmlkZXIiLCJUaWNrZXRJdGVtIiwidGlja2V0IiwiY3VzdG9tZXIiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImhhbmRsZU1vZGFsVmlzaWJsZSIsImhhbmRsZVNldFRpY2tldCIsInJvdXRlciIsIm9uRGVsZXRlVGlja2V0IiwicGF0Y2giLCJpZCIsInJlZnJlc2giLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVNb2RhbCIsInRyIiwiY2xhc3NOYW1lIiwiZGF0YS1sb2FkaW5nIiwidGQiLCJuYW1lIiwiY3JlYXRlZF9hdCIsInRvTG9jYWxlRGF0ZVN0cmluZyIsInNwYW4iLCJzdGF0dXMiLCJidXR0b24iLCJ0eXBlIiwib25DbGljayIsInNpemUiLCJjb2xvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/dashboard/components/ticket/index.tsx\n"));

/***/ })

});