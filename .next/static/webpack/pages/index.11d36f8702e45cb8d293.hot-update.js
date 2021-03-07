webpackHotUpdate_N_E("pages/index",{

/***/ "./components/main/ProductDetail.jsx":
/*!*******************************************!*\
  !*** ./components/main/ProductDetail.jsx ***!
  \*******************************************/
/*! exports provided: ProductDetail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ProductDetail\", function() { return ProductDetail; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _utils_Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/Modal */ \"./utils/Modal.js\");\n/* harmony import */ var _styles_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/style */ \"./styles/style.js\");\nvar _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"ProductDetail__Container\",\n  componentId: \"sc-1lm87n7-0\"\n})([\"position:absolute;top:0;right:0;bottom:0;left:0;background-color:rgba(0,0,0,0.3);\"]);\n_c = Container;\nvar Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"ProductDetail__Wrapper\",\n  componentId: \"sc-1lm87n7-1\"\n})([\"width:100%;height:100%;display:flex;justify-content:center;align-items:center;\"]);\n_c2 = Wrapper;\nvar Close = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].img.withConfig({\n  displayName: \"ProductDetail__Close\",\n  componentId: \"sc-1lm87n7-2\"\n})([\"position:absolute;top:\", \";\"], _styles_style__WEBPACK_IMPORTED_MODULE_3__[\"navBarHeight\"]);\n_c3 = Close;\nvar Content = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"ProductDetail__Content\",\n  componentId: \"sc-1lm87n7-3\"\n})([\"\"]);\n_c4 = Content;\nvar ProductId = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"ProductDetail__ProductId\",\n  componentId: \"sc-1lm87n7-4\"\n})([\"position:absolute;top:5px;right:5px;color:red;text-shadow:1px 1px 10px white;\"]);\n_c5 = ProductId;\nvar ProductDetail = function ProductDetail(_ref) {\n  _s();\n\n  var product = _ref.product;\n  var handleClickClose = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"])(function () {\n    _utils_Modal__WEBPACK_IMPORTED_MODULE_2__[\"Modal\"].emitEvent();\n  }, []);\n  return __jsx(Container, null, __jsx(Wrapper, null, __jsx(Close, {\n    onClick: handleClickClose,\n    src: \"https://user-images.githubusercontent.com/22593217/110236681-8b048900-7f7a-11eb-81ef-249448143231.png\",\n    alt: \"close\"\n  }), __jsx(Content, null, __jsx(ProductId, null, product.id), __jsx(\"img\", {\n    src: product.image,\n    alt: 'Product'\n  }))));\n};\n\n_s(ProductDetail, \"aDttQuIx7+tMDfZ0aLLGARd5tKo=\");\n\n_c6 = ProductDetail;\n\nvar _c, _c2, _c3, _c4, _c5, _c6;\n\n$RefreshReg$(_c, \"Container\");\n$RefreshReg$(_c2, \"Wrapper\");\n$RefreshReg$(_c3, \"Close\");\n$RefreshReg$(_c4, \"Content\");\n$RefreshReg$(_c5, \"ProductId\");\n$RefreshReg$(_c6, \"ProductDetail\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tYWluL1Byb2R1Y3REZXRhaWwuanN4Pzg5ZjMiXSwibmFtZXMiOlsiQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwiV3JhcHBlciIsIkNsb3NlIiwiaW1nIiwibmF2QmFySGVpZ2h0IiwiQ29udGVudCIsIlByb2R1Y3RJZCIsIlByb2R1Y3REZXRhaWwiLCJwcm9kdWN0IiwiaGFuZGxlQ2xpY2tDbG9zZSIsInVzZUNhbGxiYWNrIiwiTW9kYWwiLCJlbWl0RXZlbnQiLCJpZCIsImltYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEseUZBQWY7S0FBTUYsUztBQVNOLElBQU1HLE9BQU8sR0FBR0YseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxzRkFBYjtNQUFNQyxPO0FBUU4sSUFBTUMsS0FBSyxHQUFHSCx5REFBTSxDQUFDSSxHQUFWO0FBQUE7QUFBQTtBQUFBLG9DQUVGQywwREFGRSxDQUFYO01BQU1GLEs7QUFLTixJQUFNRyxPQUFPLEdBQUdOLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsUUFBYjtNQUFNSyxPO0FBSU4sSUFBTUMsU0FBUyxHQUFHUCx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLHFGQUFmO01BQU1NLFM7QUFRQyxJQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLE9BQWlCO0FBQUE7O0FBQUEsTUFBZEMsT0FBYyxRQUFkQSxPQUFjO0FBQzVDLE1BQU1DLGdCQUFnQixHQUFHQyx5REFBVyxDQUFDLFlBQU07QUFDekNDLHNEQUFLLENBQUNDLFNBQU47QUFDRCxHQUZtQyxFQUVqQyxFQUZpQyxDQUFwQztBQUlBLFNBQ0UsTUFBQyxTQUFELFFBQ0UsTUFBQyxPQUFELFFBQ0UsTUFBQyxLQUFEO0FBQU8sV0FBTyxFQUFFSCxnQkFBaEI7QUFBa0MsT0FBRyxFQUFDLHVHQUF0QztBQUE4SSxPQUFHLEVBQUM7QUFBbEosSUFERixFQUVFLE1BQUMsT0FBRCxRQUNFLE1BQUMsU0FBRCxRQUFZRCxPQUFPLENBQUNLLEVBQXBCLENBREYsRUFFRTtBQUFLLE9BQUcsRUFBRUwsT0FBTyxDQUFDTSxLQUFsQjtBQUF5QixPQUFHLEVBQUU7QUFBOUIsSUFGRixDQUZGLENBREYsQ0FERjtBQVlELENBakJNOztHQUFNUCxhOztNQUFBQSxhIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9tYWluL1Byb2R1Y3REZXRhaWwuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBNb2RhbCB9IGZyb20gJ34vdXRpbHMvTW9kYWwnO1xuaW1wb3J0IHsgbmF2QmFySGVpZ2h0IH0gZnJvbSAnLi4vLi4vc3R5bGVzL3N0eWxlJztcblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcbmA7XG5cbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbmA7XG5cbmNvbnN0IENsb3NlID0gc3R5bGVkLmltZ2BcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6ICR7bmF2QmFySGVpZ2h0fTtcbmA7XG5cbmNvbnN0IENvbnRlbnQgPSBzdHlsZWQuZGl2YFxuXG5gO1xuXG5jb25zdCBQcm9kdWN0SWQgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNXB4O1xuICByaWdodDogNXB4O1xuICBjb2xvcjogcmVkO1xuICB0ZXh0LXNoYWRvdzogMXB4IDFweCAxMHB4IHdoaXRlO1xuYDtcblxuZXhwb3J0IGNvbnN0IFByb2R1Y3REZXRhaWwgPSAoeyBwcm9kdWN0IH0pID0+IHtcbiAgY29uc3QgaGFuZGxlQ2xpY2tDbG9zZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBNb2RhbC5lbWl0RXZlbnQoKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxXcmFwcGVyPlxuICAgICAgICA8Q2xvc2Ugb25DbGljaz17aGFuZGxlQ2xpY2tDbG9zZX0gc3JjPVwiaHR0cHM6Ly91c2VyLWltYWdlcy5naXRodWJ1c2VyY29udGVudC5jb20vMjI1OTMyMTcvMTEwMjM2NjgxLThiMDQ4OTAwLTdmN2EtMTFlYi04MWVmLTI0OTQ0ODE0MzIzMS5wbmdcIiBhbHQ9XCJjbG9zZVwiIC8+XG4gICAgICAgIDxDb250ZW50PlxuICAgICAgICAgIDxQcm9kdWN0SWQ+e3Byb2R1Y3QuaWR9PC9Qcm9kdWN0SWQ+XG4gICAgICAgICAgPGltZyBzcmM9e3Byb2R1Y3QuaW1hZ2V9IGFsdD17J1Byb2R1Y3QnfSAvPlxuICAgICAgICA8L0NvbnRlbnQ+XG4gICAgICA8L1dyYXBwZXI+XG5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/main/ProductDetail.jsx\n");

/***/ })

})