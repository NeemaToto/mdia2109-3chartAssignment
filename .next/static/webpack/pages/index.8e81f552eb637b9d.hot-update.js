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

/***/ "./components/LineChart/index.js":
/*!***************************************!*\
  !*** ./components/LineChart/index.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ LineChart; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _LineChart_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LineChart.module.css */ \"./components/LineChart/LineChart.module.css\");\n/* harmony import */ var _LineChart_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_LineChart_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-chartjs-2 */ \"./node_modules/react-chartjs-2/dist/index.js\");\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chart.js */ \"./node_modules/chart.js/dist/chart.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nchart_js__WEBPACK_IMPORTED_MODULE_2__.Chart.register(chart_js__WEBPACK_IMPORTED_MODULE_2__.CategoryScale, chart_js__WEBPACK_IMPORTED_MODULE_2__.LinearScale, chart_js__WEBPACK_IMPORTED_MODULE_2__.PointElement, chart_js__WEBPACK_IMPORTED_MODULE_2__.LineElement, chart_js__WEBPACK_IMPORTED_MODULE_2__.Title, chart_js__WEBPACK_IMPORTED_MODULE_2__.Tooltip, chart_js__WEBPACK_IMPORTED_MODULE_2__.Legend);\nfunction LineChart() {\n    _s();\n    const [chartData, setChartData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        datasets: []\n    });\n    const [chartOptions, setChartOptions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setChartData({\n            labels: [\n                \"Sun\",\n                \"Mon\",\n                \"Tues\",\n                \"Wed\",\n                \"Thurs\",\n                \"Fri\",\n                \"Sat\"\n            ],\n            datasets: [\n                {\n                    label: \"$CAD Sales\",\n                    data: [\n                        7000,\n                        12500,\n                        1,\n                        24520,\n                        10532,\n                        30143,\n                        13896\n                    ],\n                    borderColor: \"rgb(53,162,235)\",\n                    backgroundColor: \"rgba(53,162,235,0.4)\"\n                }\n            ]\n        });\n        setChartOptions({\n            plugins: {\n                legend: {\n                    position: \"top\"\n                },\n                title: {\n                    display: true,\n                    text: \"Daily Revenue\"\n                }\n            },\n            maintainAspectRatio: false,\n            responsive: true\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_LineChart_module_css__WEBPACK_IMPORTED_MODULE_3___default().container),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_4__.Line, {\n                data: chartData,\n                options: chartOptions\n            }, void 0, false, {\n                fileName: \"/Users/ntotonchi1/Desktop/mdia2109-3chartAssignment/components/LineChart/index.js\",\n                lineNumber: 65,\n                columnNumber: 13\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/ntotonchi1/Desktop/mdia2109-3chartAssignment/components/LineChart/index.js\",\n            lineNumber: 64,\n            columnNumber: 9\n        }, this)\n    }, void 0, false);\n}\n_s(LineChart, \"AGxoyunMg/uLCjHExtm+3p25aEI=\");\n_c = LineChart;\nvar _c;\n$RefreshReg$(_c, \"LineChart\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xpbmVDaGFydC9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUE0QztBQUNBO0FBRUw7QUFVckI7QUFFbEJLLG9EQUFnQixDQUNaQyxtREFBYUEsRUFDYkMsaURBQVdBLEVBQ1hDLGtEQUFZQSxFQUNaQyxpREFBV0EsRUFDWEMsMkNBQUtBLEVBQ0xDLDZDQUFPQSxFQUNQQyw0Q0FBTUE7QUFHSyxTQUFTRSxZQUFXOztJQUUvQixNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR2hCLCtDQUFRQSxDQUFDO1FBQ3ZDaUIsVUFBVSxFQUFFO0lBQ2hCO0lBRUEsTUFBTSxDQUFDQyxjQUFjQyxnQkFBZ0IsR0FBR25CLCtDQUFRQSxDQUFDLENBQUM7SUFFbERDLGdEQUFTQSxDQUFDLElBQU07UUFDWmUsYUFBYTtZQUNUSSxRQUFRO2dCQUFDO2dCQUFPO2dCQUFPO2dCQUFRO2dCQUFPO2dCQUFTO2dCQUFPO2FBQU07WUFDNURILFVBQVU7Z0JBQ047b0JBQ0lJLE9BQU87b0JBQ1BDLE1BQU07d0JBQUM7d0JBQU07d0JBQU87d0JBQUc7d0JBQU87d0JBQU87d0JBQU87cUJBQU07b0JBQ2xEQyxhQUFhO29CQUNiQyxpQkFBaUI7Z0JBQ3JCO2FBQ0g7UUFDTDtRQUVBTCxnQkFBZ0I7WUFDWk0sU0FBUztnQkFDTEMsUUFBUTtvQkFDSkMsVUFBVTtnQkFDZDtnQkFDQUMsT0FBTztvQkFDSEMsU0FBUyxJQUFJO29CQUNiQyxNQUFNO2dCQUNWO1lBQ0o7WUFDQUMscUJBQXFCLEtBQUs7WUFDMUJDLFlBQVksSUFBSTtRQUNwQjtJQUNKLEdBQUcsRUFBRTtJQUVMLHFCQUNJO2tCQUNBLDRFQUFDQztZQUFJQyxXQUFXaEMsd0VBQWdCO3NCQUM1Qiw0RUFBQ0MsaURBQUlBO2dCQUFDbUIsTUFBTVA7Z0JBQVdxQixTQUFTbEI7Ozs7Ozs7Ozs7OztBQUk1QyxDQUFDO0dBM0N1Qko7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MaW5lQ2hhcnQvaW5kZXguanM/NjU1MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0xpbmVDaGFydC5tb2R1bGUuY3NzJztcblxuaW1wb3J0IHsgTGluZSB9IGZyb20gJ3JlYWN0LWNoYXJ0anMtMic7XG5pbXBvcnQge1xuICAgIENoYXJ0IGFzIENoYXJ0SlMsXG4gICAgQ2F0ZWdvcnlTY2FsZSxcbiAgICBMaW5lYXJTY2FsZSxcbiAgICBQb2ludEVsZW1lbnQsXG4gICAgTGluZUVsZW1lbnQsXG4gICAgVGl0bGUsXG4gICAgVG9vbHRpcCxcbiAgICBMZWdlbmRcbn0gZnJvbSAnY2hhcnQuanMnO1xuXG5DaGFydEpTLnJlZ2lzdGVyKFxuICAgIENhdGVnb3J5U2NhbGUsXG4gICAgTGluZWFyU2NhbGUsXG4gICAgUG9pbnRFbGVtZW50LFxuICAgIExpbmVFbGVtZW50LFxuICAgIFRpdGxlLFxuICAgIFRvb2x0aXAsXG4gICAgTGVnZW5kXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMaW5lQ2hhcnQoKXtcblxuICAgIGNvbnN0IFtjaGFydERhdGEsIHNldENoYXJ0RGF0YV0gPSB1c2VTdGF0ZSh7XG4gICAgICAgIGRhdGFzZXRzOiBbXVxuICAgIH0pXG5cbiAgICBjb25zdCBbY2hhcnRPcHRpb25zLCBzZXRDaGFydE9wdGlvbnNdID0gdXNlU3RhdGUoe30pXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBzZXRDaGFydERhdGEoe1xuICAgICAgICAgICAgbGFiZWxzOiBbXCJTdW5cIiwgXCJNb25cIiwgXCJUdWVzXCIsIFwiV2VkXCIsIFwiVGh1cnNcIiwgXCJGcmlcIiwgXCJTYXRcIl0sXG4gICAgICAgICAgICBkYXRhc2V0czogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICckQ0FEIFNhbGVzJyxcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogWzcwMDAsIDEyNTAwLCAxLCAyNDUyMCwgMTA1MzIsIDMwMTQzLCAxMzg5Nl0sXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAncmdiKDUzLDE2MiwyMzUpJyxcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSg1MywxNjIsMjM1LDAuNCknXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICB9KVxuXG4gICAgICAgIHNldENoYXJ0T3B0aW9ucyh7XG4gICAgICAgICAgICBwbHVnaW5zOiB7XG4gICAgICAgICAgICAgICAgbGVnZW5kOiB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAndG9wJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJEYWlseSBSZXZlbnVlXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbWFpbnRhaW5Bc3BlY3RSYXRpbzogZmFsc2UsXG4gICAgICAgICAgICByZXNwb25zaXZlOiB0cnVlXG4gICAgICAgIH0pXG4gICAgfSwgW10pXG5cbiAgICByZXR1cm4oXG4gICAgICAgIDw+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgICAgICAgIDxMaW5lIGRhdGE9e2NoYXJ0RGF0YX0gb3B0aW9ucz17Y2hhcnRPcHRpb25zfS8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cbiAgICApXG59Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0Iiwic3R5bGVzIiwiTGluZSIsIkNoYXJ0IiwiQ2hhcnRKUyIsIkNhdGVnb3J5U2NhbGUiLCJMaW5lYXJTY2FsZSIsIlBvaW50RWxlbWVudCIsIkxpbmVFbGVtZW50IiwiVGl0bGUiLCJUb29sdGlwIiwiTGVnZW5kIiwicmVnaXN0ZXIiLCJMaW5lQ2hhcnQiLCJjaGFydERhdGEiLCJzZXRDaGFydERhdGEiLCJkYXRhc2V0cyIsImNoYXJ0T3B0aW9ucyIsInNldENoYXJ0T3B0aW9ucyIsImxhYmVscyIsImxhYmVsIiwiZGF0YSIsImJvcmRlckNvbG9yIiwiYmFja2dyb3VuZENvbG9yIiwicGx1Z2lucyIsImxlZ2VuZCIsInBvc2l0aW9uIiwidGl0bGUiLCJkaXNwbGF5IiwidGV4dCIsIm1haW50YWluQXNwZWN0UmF0aW8iLCJyZXNwb25zaXZlIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwib3B0aW9ucyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/LineChart/index.js\n"));

/***/ })

});