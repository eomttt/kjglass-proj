webpackHotUpdate_N_E("pages/index",{

/***/ "./components/main/ProductDetail.jsx":
/*!*******************************************!*\
  !*** ./components/main/ProductDetail.jsx ***!
  \*******************************************/
/*! exports provided: ProductDetail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ProductDetail\", function() { return ProductDetail; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _styles_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/style */ \"./styles/style.js\");\nvar _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"ProductDetail__Container\",\n  componentId: \"sc-1lm87n7-0\"\n})([\"position:absolute;top:0;right:0;bottom:0;left:0;background-color:rgba(0,0,0,0.3);\"]);\n_c = Container;\nvar Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"ProductDetail__Wrapper\",\n  componentId: \"sc-1lm87n7-1\"\n})([\"width:100%;height:100%;display:flex;justify-content:center;align-items:center;\"]);\n_c2 = Wrapper;\nvar Close = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].img.withConfig({\n  displayName: \"ProductDetail__Close\",\n  componentId: \"sc-1lm87n7-2\"\n})([\"position:absolute;top:\", \";\"], _styles_style__WEBPACK_IMPORTED_MODULE_2__[\"navBarHeight\"]);\n_c3 = Close;\nvar Content = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"ProductDetail__Content\",\n  componentId: \"sc-1lm87n7-3\"\n})([\"\"]);\n_c4 = Content;\nvar ProductId = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"ProductDetail__ProductId\",\n  componentId: \"sc-1lm87n7-4\"\n})([\"position:absolute;top:5px;right:5px;color:red;text-shadow:1px 1px 10px white;\"]);\n_c5 = ProductId;\nvar ProductDetail = function ProductDetail(_ref) {\n  _s();\n\n  var product = _ref.product;\n  var handleClickClose = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"])(function () {}, []);\n  return __jsx(Container, null, __jsx(Wrapper, null, __jsx(Close, {\n    src: \"https://user-images.githubusercontent.com/22593217/110236681-8b048900-7f7a-11eb-81ef-249448143231.png\",\n    alt: \"close\"\n  }), __jsx(Content, null, __jsx(ProductId, null, product.id), __jsx(\"img\", {\n    src: product.image,\n    alt: 'Product'\n  }))));\n};\n\n_s(ProductDetail, \"aDttQuIx7+tMDfZ0aLLGARd5tKo=\");\n\n_c6 = ProductDetail;\n\nvar _c, _c2, _c3, _c4, _c5, _c6;\n\n$RefreshReg$(_c, \"Container\");\n$RefreshReg$(_c2, \"Wrapper\");\n$RefreshReg$(_c3, \"Close\");\n$RefreshReg$(_c4, \"Content\");\n$RefreshReg$(_c5, \"ProductId\");\n$RefreshReg$(_c6, \"ProductDetail\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tYWluL1Byb2R1Y3REZXRhaWwuanN4Pzg5ZjMiXSwibmFtZXMiOlsiQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwiV3JhcHBlciIsIkNsb3NlIiwiaW1nIiwibmF2QmFySGVpZ2h0IiwiQ29udGVudCIsIlByb2R1Y3RJZCIsIlByb2R1Y3REZXRhaWwiLCJwcm9kdWN0IiwiaGFuZGxlQ2xpY2tDbG9zZSIsInVzZUNhbGxiYWNrIiwiaWQiLCJpbWFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLHlGQUFmO0tBQU1GLFM7QUFTTixJQUFNRyxPQUFPLEdBQUdGLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsc0ZBQWI7TUFBTUMsTztBQVFOLElBQU1DLEtBQUssR0FBR0gseURBQU0sQ0FBQ0ksR0FBVjtBQUFBO0FBQUE7QUFBQSxvQ0FFRkMsMERBRkUsQ0FBWDtNQUFNRixLO0FBS04sSUFBTUcsT0FBTyxHQUFHTix5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLFFBQWI7TUFBTUssTztBQUlOLElBQU1DLFNBQVMsR0FBR1AseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxxRkFBZjtNQUFNTSxTO0FBUUMsSUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixPQUFpQjtBQUFBOztBQUFBLE1BQWRDLE9BQWMsUUFBZEEsT0FBYztBQUM1QyxNQUFNQyxnQkFBZ0IsR0FBR0MseURBQVcsQ0FBQyxZQUFNLENBRTFDLENBRm1DLEVBRWpDLEVBRmlDLENBQXBDO0FBSUEsU0FDRSxNQUFDLFNBQUQsUUFDRSxNQUFDLE9BQUQsUUFDRSxNQUFDLEtBQUQ7QUFBTyxPQUFHLEVBQUMsdUdBQVg7QUFBbUgsT0FBRyxFQUFDO0FBQXZILElBREYsRUFFRSxNQUFDLE9BQUQsUUFDRSxNQUFDLFNBQUQsUUFBWUYsT0FBTyxDQUFDRyxFQUFwQixDQURGLEVBRUU7QUFBSyxPQUFHLEVBQUVILE9BQU8sQ0FBQ0ksS0FBbEI7QUFBeUIsT0FBRyxFQUFFO0FBQTlCLElBRkYsQ0FGRixDQURGLENBREY7QUFZRCxDQWpCTTs7R0FBTUwsYTs7TUFBQUEsYSIsImZpbGUiOiIuL2NvbXBvbmVudHMvbWFpbi9Qcm9kdWN0RGV0YWlsLmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgbmF2QmFySGVpZ2h0IH0gZnJvbSAnLi4vLi4vc3R5bGVzL3N0eWxlJztcblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcbmA7XG5cbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbmA7XG5cbmNvbnN0IENsb3NlID0gc3R5bGVkLmltZ2BcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6ICR7bmF2QmFySGVpZ2h0fTtcbmA7XG5cbmNvbnN0IENvbnRlbnQgPSBzdHlsZWQuZGl2YFxuXG5gO1xuXG5jb25zdCBQcm9kdWN0SWQgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNXB4O1xuICByaWdodDogNXB4O1xuICBjb2xvcjogcmVkO1xuICB0ZXh0LXNoYWRvdzogMXB4IDFweCAxMHB4IHdoaXRlO1xuYDtcblxuZXhwb3J0IGNvbnN0IFByb2R1Y3REZXRhaWwgPSAoeyBwcm9kdWN0IH0pID0+IHtcbiAgY29uc3QgaGFuZGxlQ2xpY2tDbG9zZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcblxuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgPFdyYXBwZXI+XG4gICAgICAgIDxDbG9zZSBzcmM9XCJodHRwczovL3VzZXItaW1hZ2VzLmdpdGh1YnVzZXJjb250ZW50LmNvbS8yMjU5MzIxNy8xMTAyMzY2ODEtOGIwNDg5MDAtN2Y3YS0xMWViLTgxZWYtMjQ5NDQ4MTQzMjMxLnBuZ1wiIGFsdD1cImNsb3NlXCIgLz5cbiAgICAgICAgPENvbnRlbnQ+XG4gICAgICAgICAgPFByb2R1Y3RJZD57cHJvZHVjdC5pZH08L1Byb2R1Y3RJZD5cbiAgICAgICAgICA8aW1nIHNyYz17cHJvZHVjdC5pbWFnZX0gYWx0PXsnUHJvZHVjdCd9IC8+XG4gICAgICAgIDwvQ29udGVudD5cbiAgICAgIDwvV3JhcHBlcj5cblxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/main/ProductDetail.jsx\n");

/***/ })

})