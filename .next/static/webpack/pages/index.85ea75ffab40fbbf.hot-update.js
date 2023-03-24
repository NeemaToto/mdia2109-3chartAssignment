"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/RadarChart/index.js":
/*!****************************************!*\
  !*** ./components/RadarChart/index.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ RadarChart; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _RadarChart_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RadarChart.module.css */ \"./components/RadarChart/RadarChart.module.css\");\n/* harmony import */ var _RadarChart_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_RadarChart_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-chartjs-2 */ \"./node_modules/react-chartjs-2/dist/index.js\");\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chart.js */ \"./node_modules/chart.js/dist/chart.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nchart_js__WEBPACK_IMPORTED_MODULE_2__.Chart.register(chart_js__WEBPACK_IMPORTED_MODULE_2__.RadialLinearScale, chart_js__WEBPACK_IMPORTED_MODULE_2__.PointElement, chart_js__WEBPACK_IMPORTED_MODULE_2__.LineElement, chart_js__WEBPACK_IMPORTED_MODULE_2__.Filler, chart_js__WEBPACK_IMPORTED_MODULE_2__.Tooltip, chart_js__WEBPACK_IMPORTED_MODULE_2__.Legend);\nfunction RadarChart() {\n    _s();\n    const [chartData, setChartData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        datasets: []\n    });\n    const [chartOptions, setChartOptions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setChartData({\n            labels: [\n                \"Strength\",\n                \"Endurance\",\n                \"Intelligence\",\n                \"Charisma\",\n                \"\",\n                \"Fri\",\n                \"Sat\"\n            ],\n            datasets: [\n                {\n                    label: \"Attributes\",\n                    data: [\n                        10,\n                        8,\n                        5,\n                        6,\n                        7,\n                        2,\n                        7\n                    ],\n                    borderColor: \"rgb(53,162,235)\",\n                    backgroundColor: \"rgba(53,162,235,0.4)\"\n                }\n            ]\n        });\n        setChartOptions({\n            plugins: {\n                legend: {\n                    position: \"top\"\n                },\n                title: {\n                    display: true,\n                    text: \"Daily Revenue\"\n                }\n            },\n            maintainAspectRatio: false,\n            responsive: true\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_RadarChart_module_css__WEBPACK_IMPORTED_MODULE_3___default().container),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_4__.Radar, {\n                data: chartData,\n                options: chartOptions\n            }, void 0, false, {\n                fileName: \"/Users/ntotonchi1/Desktop/mdia2109-3chartAssignment/components/RadarChart/index.js\",\n                lineNumber: 63,\n                columnNumber: 13\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/ntotonchi1/Desktop/mdia2109-3chartAssignment/components/RadarChart/index.js\",\n            lineNumber: 62,\n            columnNumber: 9\n        }, this)\n    }, void 0, false);\n}\n_s(RadarChart, \"AGxoyunMg/uLCjHExtm+3p25aEI=\");\n_c = RadarChart;\nvar _c;\n$RefreshReg$(_c, \"RadarChart\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1JhZGFyQ2hhcnQvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBNEM7QUFDQztBQUVMO0FBU3RCO0FBRWxCSyxvREFBZ0IsQ0FDWkMsdURBQWlCQSxFQUNuQkMsa0RBQVlBLEVBQ1pDLGlEQUFXQSxFQUNYQyw0Q0FBTUEsRUFDTkMsNkNBQU9BLEVBQ1BDLDRDQUFNQTtBQUdPLFNBQVNFLGFBQVk7O0lBRWhDLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHZiwrQ0FBUUEsQ0FBQztRQUN2Q2dCLFVBQVUsRUFBRTtJQUNoQjtJQUVBLE1BQU0sQ0FBQ0MsY0FBY0MsZ0JBQWdCLEdBQUdsQiwrQ0FBUUEsQ0FBQyxDQUFDO0lBRWxEQyxnREFBU0EsQ0FBQyxJQUFNO1FBQ1pjLGFBQWE7WUFDVEksUUFBUTtnQkFBQztnQkFBWTtnQkFBYTtnQkFBZ0I7Z0JBQVk7Z0JBQUk7Z0JBQU87YUFBTTtZQUMvRUgsVUFBVTtnQkFDTjtvQkFDSUksT0FBTztvQkFDUEMsTUFBTTt3QkFBQzt3QkFBSTt3QkFBRzt3QkFBRzt3QkFBRzt3QkFBRzt3QkFBRztxQkFBRTtvQkFDNUJDLGFBQWE7b0JBQ2JDLGlCQUFpQjtnQkFDckI7YUFDSDtRQUNMO1FBRUFMLGdCQUFnQjtZQUNaTSxTQUFTO2dCQUNMQyxRQUFRO29CQUNKQyxVQUFVO2dCQUNkO2dCQUNBQyxPQUFPO29CQUNIQyxTQUFTLElBQUk7b0JBQ2JDLE1BQU07Z0JBQ1Y7WUFDSjtZQUNBQyxxQkFBcUIsS0FBSztZQUMxQkMsWUFBWSxJQUFJO1FBQ3BCO0lBQ0osR0FBRyxFQUFFO0lBRUwscUJBQ0k7a0JBQ0EsNEVBQUNDO1lBQUlDLFdBQVcvQix5RUFBZ0I7c0JBQzVCLDRFQUFDQyxrREFBS0E7Z0JBQUNrQixNQUFNUDtnQkFBV3FCLFNBQVNsQjs7Ozs7Ozs7Ozs7O0FBSTdDLENBQUM7R0EzQ3VCSjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1JhZGFyQ2hhcnQvaW5kZXguanM/NTQ2YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1JhZGFyQ2hhcnQubW9kdWxlLmNzcyc7XG5cbmltcG9ydCB7IFJhZGFyIH0gZnJvbSAncmVhY3QtY2hhcnRqcy0yJztcbmltcG9ydCB7XG4gICAgQ2hhcnQgYXMgQ2hhcnRKUyxcbiAgUmFkaWFsTGluZWFyU2NhbGUsXG4gIFBvaW50RWxlbWVudCxcbiAgTGluZUVsZW1lbnQsXG4gIEZpbGxlcixcbiAgVG9vbHRpcCxcbiAgTGVnZW5kLFxufSBmcm9tICdjaGFydC5qcyc7XG5cbkNoYXJ0SlMucmVnaXN0ZXIoXG4gICAgUmFkaWFsTGluZWFyU2NhbGUsXG4gIFBvaW50RWxlbWVudCxcbiAgTGluZUVsZW1lbnQsXG4gIEZpbGxlcixcbiAgVG9vbHRpcCxcbiAgTGVnZW5kXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSYWRhckNoYXJ0KCl7XG5cbiAgICBjb25zdCBbY2hhcnREYXRhLCBzZXRDaGFydERhdGFdID0gdXNlU3RhdGUoe1xuICAgICAgICBkYXRhc2V0czogW11cbiAgICB9KVxuXG4gICAgY29uc3QgW2NoYXJ0T3B0aW9ucywgc2V0Q2hhcnRPcHRpb25zXSA9IHVzZVN0YXRlKHt9KVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgc2V0Q2hhcnREYXRhKHtcbiAgICAgICAgICAgIGxhYmVsczogW1wiU3RyZW5ndGhcIiwgXCJFbmR1cmFuY2VcIiwgXCJJbnRlbGxpZ2VuY2VcIiwgXCJDaGFyaXNtYVwiLCBcIlwiLCBcIkZyaVwiLCBcIlNhdFwiXSxcbiAgICAgICAgICAgIGRhdGFzZXRzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ0F0dHJpYnV0ZXMnLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBbMTAsIDgsIDUsIDYsIDcsIDIsIDddLFxuICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJ3JnYig1MywxNjIsMjM1KScsXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoNTMsMTYyLDIzNSwwLjQpJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfSlcblxuICAgICAgICBzZXRDaGFydE9wdGlvbnMoe1xuICAgICAgICAgICAgcGx1Z2luczoge1xuICAgICAgICAgICAgICAgIGxlZ2VuZDoge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3RvcCdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiRGFpbHkgUmV2ZW51ZVwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1haW50YWluQXNwZWN0UmF0aW86IGZhbHNlLFxuICAgICAgICAgICAgcmVzcG9uc2l2ZTogdHJ1ZVxuICAgICAgICB9KVxuICAgIH0sIFtdKVxuXG4gICAgcmV0dXJuKFxuICAgICAgICA8PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgICAgICA8UmFkYXIgZGF0YT17Y2hhcnREYXRhfSBvcHRpb25zPXtjaGFydE9wdGlvbnN9Lz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvPlxuICAgIClcbn0iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJzdHlsZXMiLCJSYWRhciIsIkNoYXJ0IiwiQ2hhcnRKUyIsIlJhZGlhbExpbmVhclNjYWxlIiwiUG9pbnRFbGVtZW50IiwiTGluZUVsZW1lbnQiLCJGaWxsZXIiLCJUb29sdGlwIiwiTGVnZW5kIiwicmVnaXN0ZXIiLCJSYWRhckNoYXJ0IiwiY2hhcnREYXRhIiwic2V0Q2hhcnREYXRhIiwiZGF0YXNldHMiLCJjaGFydE9wdGlvbnMiLCJzZXRDaGFydE9wdGlvbnMiLCJsYWJlbHMiLCJsYWJlbCIsImRhdGEiLCJib3JkZXJDb2xvciIsImJhY2tncm91bmRDb2xvciIsInBsdWdpbnMiLCJsZWdlbmQiLCJwb3NpdGlvbiIsInRpdGxlIiwiZGlzcGxheSIsInRleHQiLCJtYWludGFpbkFzcGVjdFJhdGlvIiwicmVzcG9uc2l2ZSIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsIm9wdGlvbnMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/RadarChart/index.js\n"));

/***/ })

});