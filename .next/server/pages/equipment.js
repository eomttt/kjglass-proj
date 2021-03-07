module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("tUSU");


/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "9IJI":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "BhwC":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SideBarItems__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("gAGQ");
/* harmony import */ var _styles_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("Zr0A");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "SideBar__Container",
  componentId: "sc-18hbfq4-0"
})(["position:absolute;left:0;width:", ";height:100%;", "{display:none;}"], _styles_style__WEBPACK_IMPORTED_MODULE_3__[/* sideBarWidth */ "i"], _styles_style__WEBPACK_IMPORTED_MODULE_3__[/* isMobile */ "d"]);
const Title = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "SideBar__Title",
  componentId: "sc-18hbfq4-1"
})(["font-size:30px;text-align:center;color:", ";margin-top:20px;margin-bottom:20px;"], _styles_style__WEBPACK_IMPORTED_MODULE_3__[/* subPointColor */ "j"]);

const SideBar = ({
  sideBarItems,
  sideBarTitle,
  clickSideItem
}) => __jsx(Container, null, __jsx(Title, null, sideBarTitle), __jsx(_SideBarItems__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
  sideBarItems: sideBarItems,
  clickSideItem: clickSideItem
}));

/* harmony default export */ __webpack_exports__["a"] = (SideBar);

/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "Enfo":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/ci-6e5c72c7daa8b16b65595b28f9d996c7.png";

/***/ }),

/***/ "GCmZ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: ./styles/style.js
var style = __webpack_require__("Zr0A");

// CONCATENATED MODULE: ./components/common/NavBarItems.jsx
var __jsx = external_react_default.a.createElement;



const Text = external_styled_components_default.a.div.withConfig({
  displayName: "NavBarItems__Text",
  componentId: "sc-70apnc-0"
})(["width:20%;margin:auto;text-align:center;cursor:pointer;display:flex;& div{display:inline-block;margin:auto;align-self:center;}", "{font-size:12px;}"], style["d" /* isMobile */]);

const NavBarItems = ({
  openInfo,
  openProduct,
  openProductSearch,
  openEquipment,
  openCustomerCenter
}) => __jsx(external_react_default.a.Fragment, null, __jsx(Text, {
  onClick: openInfo
}, __jsx("div", null, '회사소개')), __jsx(Text, {
  onClick: openProduct
}, __jsx("div", null, '주요제품')), __jsx(Text, {
  onClick: openProductSearch
}, __jsx("div", null, '제품검색')), __jsx(Text, {
  onClick: openEquipment
}, __jsx("div", null, '기자재정보')), __jsx(Text, {
  onClick: openCustomerCenter
}, __jsx("div", null, '고객센터')));

/* harmony default export */ var common_NavBarItems = (NavBarItems);
// CONCATENATED MODULE: ./containers/common/NavBarItems.jsx
var NavBarItems_jsx = external_react_default.a.createElement;




const NavBarItems_NavBarItems = () => {
  const openInfo = Object(external_react_["useCallback"])(() => {
    router_default.a.push({
      pathname: '/info'
    });
  }, []);
  const openProduct = Object(external_react_["useCallback"])(() => {
    router_default.a.push({
      pathname: '/products'
    });
  }, []);
  const openProductSearch = Object(external_react_["useCallback"])(() => {
    router_default.a.push({
      pathname: '/shop'
    });
  }, []);
  const openEquipment = Object(external_react_["useCallback"])(() => {
    router_default.a.push({
      pathname: '/equipment'
    });
  }, []);
  const openCustomerCenter = Object(external_react_["useCallback"])(() => {
    router_default.a.push({
      pathname: '/customercenter'
    });
  }, []);
  return NavBarItems_jsx(common_NavBarItems, {
    openInfo: openInfo,
    openProduct: openProduct,
    openProductSearch: openProductSearch,
    openEquipment: openEquipment,
    openCustomerCenter: openCustomerCenter
  });
};

/* harmony default export */ var containers_common_NavBarItems = __webpack_exports__["a"] = (NavBarItems_NavBarItems);

/***/ }),

/***/ "RYu8":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAMAAABrrFhUAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAWlBMVEUAAAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAAAAAD23kAvAAAAHHRSTlMALZDU9CwHlv38lAa9kyuRjtXT8/LxjSq8uwWS4gAojQAAAAFiS0dEAIgFHUgAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAHdElNRQfjCx0ICR/bfprbAAABM0lEQVR42u3cS1LCUBRF0cdPDBCCgIDg/Mcpv459q07JXWsEJ1ReJaGxWwMAAAAAAAAAAABe2mg8mX4XM52MZ8/Lf5u/p9dkdIvl7fqXq/SQnNXtF5inVyT11/PfpUckdes2pDdkbdpHekLWtu3SE7L2bZ+ekPXpCIzTE7IObVb7MXhsrU+PSBpur8Kn9Iqcr/P9Y+BS9BR0w/n5PbjebMu9Duy2h2P6bwgAAAAAAAAAAAAAAAAAAADgD42G0j3BZdmeYF++J3gq3xO8XM9/0fv/QU9QT1BPUE8wPSFLT1BPUE9QT1BPUE8QAAAAAAAAAAAAAAAAAAAA+P/0BNNrMrpF+Z7gqnxPsNcT1BMsH1MrFxD6TU/QEdATLFpSe9ATbHqCeoJNTxAAAAAAAAAAAAB4TT9DWCuOVKe8qQAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOS0xMS0yOVQwODowOTozMSswMDowMOE+zPgAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTktMTEtMjlUMDg6MDk6MzErMDA6MDCQY3REAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAABJRU5ErkJggg=="

/***/ }),

/***/ "ZdWx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: ./containers/common/NavBarItems.jsx + 1 modules
var NavBarItems = __webpack_require__("GCmZ");

// EXTERNAL MODULE: ./styles/style.js
var style = __webpack_require__("Zr0A");

// EXTERNAL MODULE: ./lib/images/logo.png
var logo = __webpack_require__("j27k");
var logo_default = /*#__PURE__*/__webpack_require__.n(logo);

// EXTERNAL MODULE: ./lib/images/menu.png
var menu = __webpack_require__("RYu8");
var menu_default = /*#__PURE__*/__webpack_require__.n(menu);

// CONCATENATED MODULE: ./components/common/NavBar.jsx
var __jsx = external_react_default.a.createElement;






const Container = external_styled_components_default.a.div.withConfig({
  displayName: "NavBar__Container",
  componentId: "sc-1joe2l9-0"
})(["", " width:100%;height:", ";position:fixed;top:0;background-color:white;display:flex;text-align:center;border-bottom:1px solid ", ";z-index:5;", "{height:", ";}"], style["c" /* default */], style["g" /* navBarHeight */], style["h" /* pointColor */], style["d" /* isMobile */], style["f" /* mobileNavBar */]);
const Content = external_styled_components_default.a.div.withConfig({
  displayName: "NavBar__Content",
  componentId: "sc-1joe2l9-1"
})(["position:relative;width:100%;height:100%;display:flex;"]);
const ImageContainer = external_styled_components_default.a.div.withConfig({
  displayName: "NavBar__ImageContainer",
  componentId: "sc-1joe2l9-2"
})(["width:15%;cursor:pointer;display:flex;", "{width:100%;}"], style["d" /* isMobile */]);
const Image = external_styled_components_default.a.img.withConfig({
  displayName: "NavBar__Image",
  componentId: "sc-1joe2l9-3"
})(["height:100%;max-height:50px;margin:auto;"]);
const Menu = external_styled_components_default.a.div.withConfig({
  displayName: "NavBar__Menu",
  componentId: "sc-1joe2l9-4"
})(["width:85%;display:flex;", "{display:none;}"], style["d" /* isMobile */]);
const MenuIcon = external_styled_components_default.a.div.withConfig({
  displayName: "NavBar__MenuIcon",
  componentId: "sc-1joe2l9-5"
})(["display:none;", "{display:block;position:absolute;width:20%;height:100%;& div{position:relative;display:flex;width:100%;height:100%;}& img{width:20px;margin:auto 10px;}}"], style["d" /* isMobile */]);

const NavBar = ({
  moveMainPage,
  openSideMenu
}) => __jsx(Container, null, __jsx(Content, null, __jsx(MenuIcon, {
  onClick: e => {
    e.preventDefault();
    e.stopPropagation();
    openSideMenu();
  }
}, __jsx("div", null, __jsx("img", {
  src: menu_default.a,
  alt: 'Menu'
}))), __jsx(ImageContainer, {
  onClick: moveMainPage
}, __jsx(Image, {
  src: logo_default.a
})), __jsx(Menu, null, __jsx(NavBarItems["a" /* default */], null))));

/* harmony default export */ var common_NavBar = (NavBar);
// EXTERNAL MODULE: ./components/common/SideBarItems.jsx + 1 modules
var SideBarItems = __webpack_require__("gAGQ");

// EXTERNAL MODULE: ./lib/images/cancel.png
var cancel = __webpack_require__("9IJI");
var cancel_default = /*#__PURE__*/__webpack_require__.n(cancel);

// CONCATENATED MODULE: ./components/common/PopupMenu.jsx
var PopupMenu_jsx = external_react_default.a.createElement;



const PopupMenu_Container = external_styled_components_default.a.div.withConfig({
  displayName: "PopupMenu__Container",
  componentId: "sc-17dcip4-0"
})(["position:fixed;top:0;right:0;bottom:0;left:0;background-color:white;z-index:100;"]);
const PopupHeader = external_styled_components_default.a.div.withConfig({
  displayName: "PopupMenu__PopupHeader",
  componentId: "sc-17dcip4-1"
})(["width:100%;height:50px;display:flex;& img{margin:auto 10px auto auto;width:20px;}"]);

const PopupMenu = ({
  children,
  closePopup
}) => PopupMenu_jsx(PopupMenu_Container, null, PopupMenu_jsx(PopupHeader, {
  onClick: closePopup
}, PopupMenu_jsx("img", {
  src: cancel_default.a,
  alt: 'Cancel'
})), children);

/* harmony default export */ var common_PopupMenu = (PopupMenu);
// CONCATENATED MODULE: ./containers/common/NavBar.jsx
var NavBar_jsx = external_react_default.a.createElement;







const NavBar_NavBar = ({
  sideMenuItems,
  clickSideItem
}) => {
  const {
    0: isOpenSideMenu,
    1: setIsOpenSideMenu
  } = Object(external_react_["useState"])(false);
  const {
    0: scrollTop,
    1: setScrollTop
  } = Object(external_react_["useState"])(0);
  const fixBodyStyle = Object(external_react_["useCallback"])(() => {
    const {
      pageYOffset
    } = window;
    const {
      body
    } = document;
    body.style.position = 'fixed';
    body.style.overflow = 'hidden';
    body.style.left = '0';
    body.style.right = '0';
    body.style.top = `-${pageYOffset}px`;
    setScrollTop(pageYOffset); // tslint:disable-next-line: align
  }, []);
  const releaseBodyStyle = Object(external_react_["useCallback"])(() => {
    const {
      body
    } = document;
    body.style.position = '';
    body.style.overflow = '';
    body.style.left = '';
    body.style.right = '';
    body.style.top = '';
    window.scrollTo(0, scrollTop); // tslint:disable-next-line: align
  }, [scrollTop]);
  const moveMainPage = Object(external_react_["useCallback"])(() => {
    router_default.a.push({
      pathname: '/'
    });
  }, []);
  const openSideMenu = Object(external_react_["useCallback"])(() => {
    setIsOpenSideMenu(true);
    fixBodyStyle();
  }, [fixBodyStyle]);
  const closeSideMenu = Object(external_react_["useCallback"])(() => {
    setIsOpenSideMenu(false);
    releaseBodyStyle();
  }, [releaseBodyStyle]);
  const onClickSideItem = Object(external_react_["useCallback"])(itemId => {
    closeSideMenu();
    clickSideItem(itemId);
  }, []);
  return NavBar_jsx(external_react_default.a.Fragment, null, NavBar_jsx(common_NavBar, {
    moveMainPage: moveMainPage,
    openSideMenu: openSideMenu
  }, NavBar_jsx(NavBarItems["a" /* default */], null)), isOpenSideMenu && NavBar_jsx(common_PopupMenu, {
    closePopup: closeSideMenu
  }, NavBar_jsx(SideBarItems["a" /* default */], {
    sideBarItems: sideMenuItems,
    clickSideItem: onClickSideItem
  })));
};

/* harmony default export */ var containers_common_NavBar = __webpack_exports__["a"] = (NavBar_NavBar);

/***/ }),

/***/ "Zr0A":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return pointColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return subPointColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return lightGrayColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return navBarHeight; });
/* unused harmony export footerHeight */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return sideBarWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return mobileNavBar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return isMobile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ViewContent; });
/* unused harmony export ItemContainer */
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const common = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["color:black;"]);
const pointColor = 'red';
const subPointColor = '#384aa5';
const lightGrayColor = '#8080802b';
const navBarHeight = '75px';
const footerHeight = '60px';
const sideBarWidth = '280px';
const mobileNavBar = '50px';
const isMobile = '@media (max-width: 768px)';
const ViewContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "style__ViewContainer",
  componentId: "sc-5m0cc1-0"
})(["display:flex;flex-direction:column;width:90%;max-width:1364px;margin:", " auto ", ";", "{margin:", " auto ", ";}"], navBarHeight, footerHeight, isMobile, footerHeight, footerHeight);
const ViewContent = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "style__ViewContent",
  componentId: "sc-5m0cc1-1"
})(["display:flex;position:relative;padding-left:", ";", "{padding:0;}"], sideBarWidth, isMobile);
const ItemContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "style__ItemContainer",
  componentId: "sc-5m0cc1-2"
})([""]);
/* harmony default export */ __webpack_exports__["c"] = (common);

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "etci":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _containers_common_NavBarItems__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("GCmZ");
/* harmony import */ var _lib_images_logo_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("j27k");
/* harmony import */ var _lib_images_logo_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_lib_images_logo_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("Zr0A");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Footer__Container",
  componentId: "ov0a7c-0"
})(["width:100%;position:fixed;background-color:white;bottom:0;border-top:1px solid ", ";display:flex;text-align:center;z-index:5;"], _styles_style__WEBPACK_IMPORTED_MODULE_4__[/* pointColor */ "h"]);
const Content = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Footer__Content",
  componentId: "ov0a7c-1"
})(["padding:10px;text-align:initial;width:100%;& div{font-size:10px;}", "{display:none;}"], _styles_style__WEBPACK_IMPORTED_MODULE_4__[/* isMobile */ "d"]);
const ImageContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Footer__ImageContainer",
  componentId: "ov0a7c-2"
})(["cursor:pointer;display:flex;width:15%;", "{display:none;}"], _styles_style__WEBPACK_IMPORTED_MODULE_4__[/* isMobile */ "d"]);
const Image = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.img.withConfig({
  displayName: "Footer__Image",
  componentId: "ov0a7c-3"
})(["width:100%;max-width:100px;margin:auto;"]);
const Menu = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Footer__Menu",
  componentId: "ov0a7c-4"
})(["display:none;", "{display:flex;height:", ";flex-direction:row;width:100%;}"], _styles_style__WEBPACK_IMPORTED_MODULE_4__[/* isMobile */ "d"], _styles_style__WEBPACK_IMPORTED_MODULE_4__[/* mobileNavBar */ "f"]);

const Footer = () => __jsx(Container, null, __jsx(ImageContainer, null, __jsx(Image, {
  src: _lib_images_logo_png__WEBPACK_IMPORTED_MODULE_3___default.a
})), __jsx(Content, null, __jsx("div", null, '사업자 등록번호 : 128-19-94958 | 광진이화학 | 대표이사 : 엄준회'), __jsx("div", null, '서울특별시 강북구 미아동 319-50 2층 | 강북구 솔샘로65길 93 2층 | Tel. 02 - 903 - 8582 / 070-7500-8100,1 | Fax. 02 - 995 - 0359 | E-mail : glassjun22@naver.com, 733@hanmail.net'), __jsx("div", null, 'COPYRIGHT @ 2017 Kwangjin Scientific Galss Ware Instruments , All rights reserved')), __jsx(Menu, null, __jsx(_containers_common_NavBarItems__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], null)));

/* harmony default export */ __webpack_exports__["a"] = (Footer);

/***/ }),

/***/ "gAGQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: ./styles/style.js
var style = __webpack_require__("Zr0A");

// CONCATENATED MODULE: ./components/common/SideBarItem.jsx
var __jsx = external_react_default.a.createElement;



const Container = external_styled_components_default.a.div.withConfig({
  displayName: "SideBarItem__Container",
  componentId: "sc-1tox8e-0"
})([""]);
const Selected = external_styled_components_default.a.div.withConfig({
  displayName: "SideBarItem__Selected",
  componentId: "sc-1tox8e-1"
})(["color:white;padding:15px 10px;background-color:", ";"], style["j" /* subPointColor */]);
const Unselected = external_styled_components_default.a.div.withConfig({
  displayName: "SideBarItem__Unselected",
  componentId: "sc-1tox8e-2"
})(["padding:15px 10px;"]);

const SideBarItem = ({
  item
}) => __jsx(Container, null, item.clicked ? __jsx(Selected, null, item.text) : __jsx(Unselected, null, item.text));

/* harmony default export */ var common_SideBarItem = (SideBarItem);
// CONCATENATED MODULE: ./components/common/SideBarItems.jsx
var SideBarItems_jsx = external_react_default.a.createElement;



const Item = external_styled_components_default.a.div.withConfig({
  displayName: "SideBarItems__Item",
  componentId: "sc-116b7n5-0"
})(["cursor:pointer;"]);

const SideBarItems = ({
  sideBarItems,
  clickSideItem
}) => SideBarItems_jsx(external_react_default.a.Fragment, null, sideBarItems && sideBarItems.map(sideBarItem => SideBarItems_jsx(Item, {
  onClick: () => clickSideItem(sideBarItem.id),
  key: sideBarItem.id
}, SideBarItems_jsx(common_SideBarItem, {
  item: sideBarItem
}))));

/* harmony default export */ var common_SideBarItems = __webpack_exports__["a"] = (SideBarItems);

/***/ }),

/***/ "j27k":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/logo-fb82bf390c606f3bdefae905160267d8.png";

/***/ }),

/***/ "nkaI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_images_ci_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Enfo");
/* harmony import */ var _lib_images_ci_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_lib_images_ci_png__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const DEFAULT_META = {
  TITLE: '광진이화학',
  DESCRIPTION: '광진이화학 실험기자재 판매처',
  KEYWORDS: '화학, 광진이화학, 광진이, lklab, 엄준회, 박경해, 실험기자재, kjglass',
  IMAGE: _lib_images_ci_png__WEBPACK_IMPORTED_MODULE_2___default.a
};

const AppLayout = ({
  children,
  metaInfo
}) => {
  const {
    title,
    description,
    image
  } = metaInfo;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, __jsx("link", {
    rel: "apple-touch-icon",
    sizes: "180x180",
    href: "/favicons/apple-touch-icon.png"
  }), __jsx("link", {
    rel: "icon",
    type: "image/png",
    sizes: "32x32",
    href: "/favicons/favicon-32x32.png"
  }), __jsx("link", {
    rel: "icon",
    type: "image/png",
    sizes: "16x16",
    href: "/favicon-16x16.png"
  }), __jsx("link", {
    rel: "manifest",
    href: "/favicons/site.webmanifest"
  }), __jsx("link", {
    rel: "mask-icon",
    href: "/favicons/safari-pinned-tab.svg",
    color: "#5bbad5"
  }), __jsx("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width"
  }), __jsx("meta", {
    name: "msapplication-TileColor",
    content: "#00aba9"
  }), __jsx("meta", {
    name: "theme-color",
    content: "#ffffff"
  }), __jsx("meta", {
    charSet: "utf-8"
  }), __jsx("meta", {
    title: title || DEFAULT_META.TITLE
  }), __jsx("meta", {
    name: "description",
    content: description || DEFAULT_META.TITLE
  }), __jsx("meta", {
    name: "keywords",
    content: title || DEFAULT_META.KEYWORDS
  }), __jsx("meta", {
    name: "author",
    content: "KJ GLASS"
  }), __jsx("meta", {
    property: "og:site_name",
    content: title || DEFAULT_META.TITLE
  }), __jsx("meta", {
    property: "og:title",
    content: title || DEFAULT_META.TITLE
  }), __jsx("meta", {
    property: "og:description",
    content: description || DEFAULT_META.DESCRIPTION
  }), __jsx("meta", {
    property: "og:image",
    content: image || DEFAULT_META.IMAGE
  }), __jsx("meta", {
    property: "og:locale",
    content: "ko"
  }), __jsx("meta", {
    property: "og:type",
    content: "website"
  })), children);
};

AppLayout.defaultProps = {
  metaInfo: DEFAULT_META
};
/* harmony default export */ __webpack_exports__["a"] = (AppLayout);

/***/ }),

/***/ "o1Jo":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/subvisual-fe4a85bf38af39d88de45ba1406a077a.png";

/***/ }),

/***/ "so/r":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Zr0A");
/* harmony import */ var _lib_images_subvisual_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("o1Jo");
/* harmony import */ var _lib_images_subvisual_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_lib_images_subvisual_png__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Header__Container",
  componentId: "sc-1fh7pfv-0"
})(["width:100%;& img{width:100%;}", "{display:none;}"], _styles_style__WEBPACK_IMPORTED_MODULE_2__[/* isMobile */ "d"]);

const Header = () => __jsx(Container, null, __jsx("img", {
  src: _lib_images_subvisual_png__WEBPACK_IMPORTED_MODULE_3___default.a,
  alt: 'Header'
}));

/* harmony default export */ __webpack_exports__["a"] = (Header);

/***/ }),

/***/ "tUSU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: ./components/AppLayout.jsx
var AppLayout = __webpack_require__("nkaI");

// EXTERNAL MODULE: ./components/common/Footer.jsx
var Footer = __webpack_require__("etci");

// EXTERNAL MODULE: ./components/common/Header.jsx
var Header = __webpack_require__("so/r");

// EXTERNAL MODULE: ./components/common/SideBar.jsx
var SideBar = __webpack_require__("BhwC");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: ./styles/style.js
var style = __webpack_require__("Zr0A");

// CONCATENATED MODULE: ./components/equipment/equipment.jsx
var __jsx = external_react_default.a.createElement;



const equipment_Container = external_styled_components_default.a.div.withConfig({
  displayName: "equipment__Container",
  componentId: "sc-14eo7u5-0"
})(["margin:10px;width:100%;"]);
const Title = external_styled_components_default.a.div.withConfig({
  displayName: "equipment__Title",
  componentId: "sc-14eo7u5-1"
})(["font-size:20px;color:", ";margin-bottom:10px;"], style["j" /* subPointColor */]);
const Content = external_styled_components_default.a.div.withConfig({
  displayName: "equipment__Content",
  componentId: "sc-14eo7u5-2"
})(["margin-bottom:30px;line-height:1.7;font-size:14px;"]);
const ContentTitle = external_styled_components_default.a.div.withConfig({
  displayName: "equipment__ContentTitle",
  componentId: "sc-14eo7u5-3"
})(["color:", ";margin-top:15px;"], style["j" /* subPointColor */]);
const ContentEmphasis = external_styled_components_default.a.div.withConfig({
  displayName: "equipment__ContentEmphasis",
  componentId: "sc-14eo7u5-4"
})(["color:", ";margin-top:10px;"], style["h" /* pointColor */]);
const Image = external_styled_components_default.a.div.withConfig({
  displayName: "equipment__Image",
  componentId: "sc-14eo7u5-5"
})(["width:80%;margin-bottom:30px;& img{width:100%;}"]);
const InfoImage = external_styled_components_default.a.div.withConfig({
  displayName: "equipment__InfoImage",
  componentId: "sc-14eo7u5-6"
})(["width:30%;margin-bottom:30px;& img{width:100%;}"]);

const Equipment = () => __jsx(equipment_Container, null, __jsx(Title, null, '초자기구 특성'), __jsx(Content, null, __jsx("div", null, `보통 실험실엣 쓰는 유리는 Borosilicate Glass ( Corning사의 Pyrex, Schott사의 Duran, 그리고 AceGlass, Kontes Glass, Kimax Glass 등) 가
                우리나라에서 많이 통용이 되고 있습니다. 실험실용으로 적합하게 개발된 유리는 선팽창계수가 낮아야 하며 내열충격성이 우수하여야 일반적인
                실험에서 요구되는 온도를 견딜 수 있습니다.`), __jsx("div", null, '또한 내마모성, 경도가 높아야 하며 다른 우리보다 분광투과율이 높고 화학적 침식에도 강해야 하는 것이 일반적인 실험실에서 요구되는 조건이므로 이상의 조건이 잘 갖추어진 것을 충족시키도록 개발된 것이 Borosilicate입니다.'), __jsx("div", null, '보통 국산유리라고 불리는 유리는 열팽창 계쑤가 9.3이며 연화점이 700C입니다. (연화점 : 본래의 물성을 잃고 연화되는 온도)'), __jsx("div", null, '실험실에서 많이 쓰는 Borosilicate는 열팽창 계수가 0.8과 1,500C로 연화점이 월등히 높은 것을 알 수 있습니다.'), __jsx("div", null, '참고로 Borosilicate는 600C 이상이 되면 Soft해 지기 시작됩니다. 가공 후 전기로에서 통상 595C까지 열처리 후 제품이 출하됩니다.')), __jsx(Title, null, '초자기구 표준 규격'), __jsx(Content, null, __jsx("div", null, `국내에서는 실험실용으로 Borosilicate Glass가 생산이 되지않아 전량 수입에 의존하고 있습니다. 수입되는 규격은 Corning사의 Lab사이즈
             (세계적으로 통일)로 수입되고 있습니다. 독일 Glass는 두께가 여러가지로 Pilot설비까지도 Glass로 작업이 가능하도록 생산 수입되고 있습니다.
             Joint와 Stop cock에 대한 규격은 다음과 같습니다.`), __jsx("div", null, '미국 NBS(National Bureau of Standard)에서 정한 표준이 있습니다.'), __jsx("div", null, '먼저 Joint는 국제 표준에 의해 전세계적으로 만들어진 제품은 Js,Ts라 표시하며 Js는 Spherical를 의미하며 Ts는 Standerd Taper를 의미합니다.'), __jsx("div", null, 'Taper ground joint 규격은 국내에서 통상 Full, Medium 규격이 통용됩니다.'), __jsx("div", null, 'Spherical ground joint는 쉽게 구부러지는 특성이 있어 흔틀리는 부분을 연결할때 많이 사용합니다.')), __jsx(Image, null, __jsx("img", {
  alt: 'table',
  src: 'https://kjglass-images.s3.ap-northeast-2.amazonaws.com/clean/clean_1.png'
})), __jsx(Content, null, __jsx("div", null, '- 그림에서 A부분은 앞 숫자입니다. 앞 숫자가 같으면 B 부분에 상관없이 같은 규격으로 보아도 됩니다.'), __jsx("div", null, '- Glass stop cock의 규격은 Cock plug 구멍으로 규격을 나타냅니다')), __jsx(InfoImage, null, __jsx("img", {
  alt: 'info',
  src: 'https://kjglass-images.s3.ap-northeast-2.amazonaws.com/clean/clean_2.png'
})), __jsx(Title, null, '실험실 초자기구 세척방법'), __jsx(Content, null, __jsx("div", null, '통상적으로 유리기구 세척은 세제를 사용하여 세척하거나 초음파 세척기를 사용하기도 합니다.'), __jsx("div", null, '그러나 세척이 용이하지 않을 시 아래 방법을 이용합니다.'), __jsx(ContentTitle, null, 'ⓐ Chromic Acid Solution 제조법과 이용방법'), __jsx("div", null, 'Na2Cr207, 2H2O, 92gr을 물 460ml에 녹입니다. 이 용액에 진한황산 800ml를 천천히 넣으면서 잘 교반합니다.'), __jsx("div", null, '이 용액에서 잘 세척되지 않을 경우는 1L 진한황산에 Na2Cr207, 2H2O 포화 수용액을 35ml 쯤 넣어 사용합니다. 대부분의 오염물질은 이 용액에 하루정도 담그면 깨끗하게 제거됩니다.'), __jsx(ContentTitle, null, 'ⓑ Sodium(Potassium) Alkoxide Solution 제조법과 이용방법'), __jsx("div", null, '이 용액은 매우 세정력이 강하므로 하루이상 담가두면 초자기구 표면에 영향을 줍니다. 120gr 정도의 NaOH 혹은 KOH를 120gr의 물에 녹인 후 약 1L의 ethnol을 넣어 잘 저어줍니다. Ethanol대신 1L정도의 iso-propannol을 사용하면 세정력은 떨어지나 초자기구의 손상은 적습니다.'), __jsx(ContentEmphasis, null, '초자기구를 수리할 때 꼭 세정을 하여 주십시오, 이유는 다음과 같습니다.'), __jsx("div", null, '초자기구를 녹일 때 기구에 묻어있는 화학물이 연소되면서 화재나 유독가스에 가공하는 사람이 노출됩니다. 유리끼리 붙는 면에서 깨끗이 붙일 수가 없으므로 고진공 시 니크가 생깁니다. 가공 시 사람이 입에다 대고 불어야 하므로 남아있는 합성물이 있을 시 수리가공의 어려움으로 작업이 안될 수 있습니다.')));

/* harmony default export */ var equipment = (Equipment);
// EXTERNAL MODULE: ./containers/common/NavBar.jsx + 2 modules
var NavBar = __webpack_require__("ZdWx");

// CONCATENATED MODULE: ./components/equipment/glassInfo.jsx
var glassInfo_jsx = external_react_default.a.createElement;



const glassInfo_Container = external_styled_components_default.a.div.withConfig({
  displayName: "glassInfo__Container",
  componentId: "ty1cmg-0"
})(["margin:15px;width:100%;"]);
const glassInfo_Title = external_styled_components_default.a.div.withConfig({
  displayName: "glassInfo__Title",
  componentId: "ty1cmg-1"
})(["color:", ";margin-bottom:25px;"], style["h" /* pointColor */]);
const glassInfo_Content = external_styled_components_default.a.div.withConfig({
  displayName: "glassInfo__Content",
  componentId: "ty1cmg-2"
})(["width:30%;text-align:center;margin-top:10px;margin-bottom:10px;display:inline-block;text-decoration:underline;cursor:pointer;color:", ";"], style["j" /* subPointColor */]);

const GlassInfo = ({
  glassInfos,
  onClickGlassInfo
}) => glassInfo_jsx(glassInfo_Container, null, glassInfo_jsx(glassInfo_Title, null, '제품명을 클릭하시면 자세히 보실 수 있습니다.'), Object.values(glassInfos).map(glassInfo => glassInfo_jsx(glassInfo_Content, {
  onClick: () => onClickGlassInfo(glassInfo.id),
  key: glassInfo.id
}, glassInfo.title)));

/* harmony default export */ var glassInfo = (GlassInfo);
// CONCATENATED MODULE: ./data/glassInfo.js
const glassInfo_glassInfo = {
  beakers: {
    id: '1',
    title: 'Beakers',
    image: 'https://kjglass-images.s3.ap-northeast-2.amazonaws.com/glass_info/glass_info_1.jpg'
  },
  flasks: {
    id: '2',
    title: 'Flasks',
    image: 'https://kjglass-images.s3.ap-northeast-2.amazonaws.com/glass_info/glass_info_2.jpg'
  },
  testTubes: {
    id: '3',
    title: 'Test Tubes',
    image: 'https://kjglass-images.s3.ap-northeast-2.amazonaws.com/glass_info/glass_info_3.jpg'
  },
  centrifugeTubes: {
    id: '4',
    title: 'Centrifuge Tubes',
    image: 'https://kjglass-images.s3.ap-northeast-2.amazonaws.com/glass_info/glass_info_4.jpg'
  },
  vials: {
    id: '5',
    title: 'Vials',
    image: 'https://kjglass-images.s3.ap-northeast-2.amazonaws.com/glass_info/glass_info_5.jpg'
  },
  coverGlass: {
    id: '6',
    title: 'Cover Glass',
    image: 'https://kjglass-images.s3.ap-northeast-2.amazonaws.com/glass_info/glass_info_6.jpg'
  },
  funnels: {
    id: '7',
    title: 'Funnels',
    image: 'https://kjglass-images.s3.ap-northeast-2.amazonaws.com/glass_info/glass_info_7.jpg'
  },
  jointAdapter: {
    id: '8',
    title: 'Joint Adapter (I.S.O)',
    image: 'https://kjglass-images.s3.ap-northeast-2.amazonaws.com/glass_info/glass_info_8.jpg'
  },
  joint: {
    id: '9',
    title: 'Joint (J.I.S)',
    image: 'https://kjglass-images.s3.ap-northeast-2.amazonaws.com/glass_info/glass_info_9.jpg'
  },
  tubingAndRodStandard: {
    id: '10',
    title: 'Tubing & Rod (Standard)',
    image: 'https://kjglass-images.s3.ap-northeast-2.amazonaws.com/glass_info/glass_info_10.jpg'
  },
  tubingAndRodLight: {
    id: '11',
    title: 'Tubing & Rod (Light)',
    image: 'https://kjglass-images.s3.ap-northeast-2.amazonaws.com/glass_info/glass_info_11.jpg'
  },
  tubingAndRodMediumOne: {
    id: '12',
    title: 'Tubing & Rod (Medium(1))',
    image: 'https://kjglass-images.s3.ap-northeast-2.amazonaws.com/glass_info/glass_info_12.jpg'
  },
  tubingAndRodHeavy: {
    id: '13',
    title: 'Tubing & Rod (Heavy)',
    image: 'https://kjglass-images.s3.ap-northeast-2.amazonaws.com/glass_info/glass_info_13.jpg'
  },
  tubingAndRodHeavyLarge: {
    id: '14',
    title: 'Tubing & Rod (Heavy, Large)',
    image: 'https://kjglass-images.s3.ap-northeast-2.amazonaws.com/glass_info/glass_info_14.jpg'
  },
  tubingAndRodMediumTwo: {
    id: '15',
    title: 'Tubing & Rod (Medium(2))',
    image: 'https://kjglass-images.s3.ap-northeast-2.amazonaws.com/glass_info/glass_info_15.jpg'
  },
  technicalInfoOne: {
    id: '16',
    title: 'Technical Information (1)',
    image: 'https://kjglass-images.s3.ap-northeast-2.amazonaws.com/glass_info/glass_info_16.jpg'
  },
  technicalInfoTwo: {
    id: '17',
    title: 'Technical Information (2)',
    image: 'https://kjglass-images.s3.ap-northeast-2.amazonaws.com/glass_info/glass_info_17.jpg'
  },
  technicalInfoThree: {
    id: '18',
    title: 'Technical Information (3)',
    image: 'https://kjglass-images.s3.ap-northeast-2.amazonaws.com/glass_info/glass_info_18.jpg'
  }
};
/* harmony default export */ var data_glassInfo = (glassInfo_glassInfo);
// CONCATENATED MODULE: ./containers/equipment/glassInfo.jsx
var equipment_glassInfo_jsx = external_react_default.a.createElement;




const glassInfo_GlassInfo = () => {
  const {
    0: glassInfos
  } = Object(external_react_["useState"])(data_glassInfo);
  const onClickGlassInfo = Object(external_react_["useCallback"])(id => {
    const clickedGlassInfo = Object.values(glassInfos).filter(glassInfo => {
      return glassInfo.id === id;
    });
    window.open(clickedGlassInfo[0].image);
  }, [glassInfos]);
  return equipment_glassInfo_jsx(glassInfo, {
    glassInfos: glassInfos,
    onClickGlassInfo: onClickGlassInfo
  });
};

/* harmony default export */ var equipment_glassInfo = (glassInfo_GlassInfo);
// CONCATENATED MODULE: ./components/equipment/glassProcessingTitle.jsx
var glassProcessingTitle_jsx = external_react_default.a.createElement;




const GlassProcessingTitle = ({
  id,
  text,
  isSelected,
  clickTitle
}) => {
  const Container = external_styled_components_default.a.div.withConfig({
    displayName: "glassProcessingTitle__Container",
    componentId: "sc-1sfepqk-0"
  })(["background-color:", ";width:25%;display:inline-block;text-align:center;cursor:pointer;padding:10px 0;color:", ";"], isSelected ? style["j" /* subPointColor */] : 'white', isSelected ? 'white' : 'black');
  return glassProcessingTitle_jsx(Container, {
    onClick: () => clickTitle(id)
  }, text);
};

/* harmony default export */ var glassProcessingTitle = (GlassProcessingTitle);
// CONCATENATED MODULE: ./components/equipment/glassProcessing.jsx
var glassProcessing_jsx = external_react_default.a.createElement;


const glassProcessing_Container = external_styled_components_default.a.div.withConfig({
  displayName: "glassProcessing__Container",
  componentId: "kjbtbz-0"
})(["width:100%;& img{width:100%;}"]);

const GlassProcessing = ({
  imageUrl
}) => glassProcessing_jsx(glassProcessing_Container, null, glassProcessing_jsx("img", {
  src: imageUrl,
  alt: 'glass processing'
}));

/* harmony default export */ var glassProcessing = (GlassProcessing);
// CONCATENATED MODULE: ./components/equipment/glassProcessings.jsx
var glassProcessings_jsx = external_react_default.a.createElement;




const glassProcessings_Container = external_styled_components_default.a.div.withConfig({
  displayName: "glassProcessings__Container",
  componentId: "sc-1t0ochk-0"
})(["margin:10px;width:100%;"]);

const GlassProcessings = ({
  glassProcessings,
  selectedProcessing,
  clickTitle
}) => {
  const isSelected = Object(external_react_["useCallback"])(id => id === selectedProcessing.id, [selectedProcessing]);
  return glassProcessings_jsx(glassProcessings_Container, null, Object.values(glassProcessings).map(item => glassProcessings_jsx(glassProcessingTitle, {
    id: item.id,
    text: item.title,
    isSelected: isSelected(item.id),
    clickTitle: clickTitle,
    key: item.id
  })), glassProcessings_jsx(glassProcessing, {
    imageUrl: selectedProcessing.image
  }));
};

/* harmony default export */ var equipment_glassProcessings = (GlassProcessings);
// CONCATENATED MODULE: ./data/processes.js
const processes_glassProcessing = {
  one_neck_flask: {
    id: '1',
    title: '1-Neck-Flask 가공',
    image: 'https://kjglass-images.s3.ap-northeast-2.amazonaws.com/processes/process_1.png'
  },
  three_neck_flask: {
    id: '2',
    title: '3-Neck-Flask 가공',
    image: 'https://kjglass-images.s3.ap-northeast-2.amazonaws.com/processes/process_2.png'
  },
  condenser: {
    id: '3',
    title: 'Condenser 가공',
    image: 'https://kjglass-images.s3.ap-northeast-2.amazonaws.com/processes/process_3.png'
  },
  etc: {
    id: '4',
    title: '기타',
    image: 'https://kjglass-images.s3.ap-northeast-2.amazonaws.com/processes/process_4.png'
  }
};
/* harmony default export */ var processes = (processes_glassProcessing);
// CONCATENATED MODULE: ./containers/equipment/glassProcessings.jsx
var equipment_glassProcessings_jsx = external_react_default.a.createElement;




const glassProcessings_GlassProcessings = () => {
  const {
    0: glassProcessings
  } = Object(external_react_["useState"])(processes);
  const {
    0: selectedProcessing,
    1: setSelectedProcessing
  } = Object(external_react_["useState"])(null);
  Object(external_react_["useEffect"])(() => {
    if (glassProcessings) {
      setSelectedProcessing(glassProcessings.one_neck_flask);
    }
  }, [glassProcessings]);
  const clickTitle = Object(external_react_["useCallback"])(id => {
    const selected = Object.values(glassProcessings).filter(glassProccessing => glassProccessing.id === id);
    setSelectedProcessing(selected[0]);
  }, [glassProcessings]);
  return equipment_glassProcessings_jsx(external_react_default.a.Fragment, null, selectedProcessing && equipment_glassProcessings_jsx(equipment_glassProcessings, {
    glassProcessings: glassProcessings,
    selectedProcessing: selectedProcessing,
    clickTitle: clickTitle
  }));
};

/* harmony default export */ var containers_equipment_glassProcessings = (glassProcessings_GlassProcessings);
// CONCATENATED MODULE: ./pages/equipment.js
var equipment_jsx = external_react_default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













const equipment_Equipment = ({
  id,
  productId
}) => {
  const {
    0: sideBarItems,
    1: setSideBarItems
  } = Object(external_react_["useState"])([{
    text: '초자기구 세척법',
    id: 1,
    clicked: false
  }, // {
  //     text: 'Glass 정보',
  //     id: 2,
  //     clicked: false,
  // },
  {
    text: 'Glass 가공작업',
    id: 3,
    clicked: false
  }]);
  const setSelectedItem = Object(external_react_["useCallback"])(sideId => {
    const sideBarIds = Object.values(sideBarItems).map(sideBarItem => {
      return sideBarItem.id;
    });
    const isSupportSideId = sideBarIds.includes(+sideId);
    const itemId = isSupportSideId ? +sideId : 1;
    const newItmes = sideBarItems.reduce((acc, cur) => {
      acc.push(_objectSpread(_objectSpread({}, cur), {}, {
        clicked: cur.id === itemId
      }));
      return acc;
    }, []);
    setSideBarItems(newItmes);
  }, [sideBarItems]);
  Object(external_react_["useEffect"])(() => {
    setSelectedItem(id);
  }, []);
  const clickSideItem = Object(external_react_["useCallback"])(itemId => {
    setSelectedItem(itemId);
    router_default.a.push({
      pathname: '/equipment',
      query: {
        id: itemId
      }
    });
  }, [sideBarItems]);
  return equipment_jsx(AppLayout["a" /* default */], null, equipment_jsx(NavBar["a" /* default */], {
    sideMenuItems: sideBarItems,
    clickSideItem: clickSideItem
  }), equipment_jsx(style["a" /* ViewContainer */], null, equipment_jsx(Header["a" /* default */], null), equipment_jsx(style["b" /* ViewContent */], null, equipment_jsx(SideBar["a" /* default */], {
    sideBarTitle: '기자재정보',
    sideBarItems: sideBarItems,
    clickSideItem: clickSideItem
  }), (!id || id === '1') && equipment_jsx(equipment, {
    productId: productId
  }), id === '3' && equipment_jsx(containers_equipment_glassProcessings, {
    productId: productId
  }))), equipment_jsx(Footer["a" /* default */], null));
};

equipment_Equipment.getInitialProps = async context => ({
  id: context.query.id,
  productId: context.query.productId
});

equipment_Equipment.defaultProps = {
  id: null,
  productId: null
};
/* harmony default export */ var pages_equipment = __webpack_exports__["default"] = (equipment_Equipment);

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });