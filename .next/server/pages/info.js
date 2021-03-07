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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("jLj4");


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

/***/ "jLj4":
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

// EXTERNAL MODULE: ./components/common/Header.jsx
var Header = __webpack_require__("so/r");

// EXTERNAL MODULE: ./components/common/Footer.jsx
var Footer = __webpack_require__("etci");

// EXTERNAL MODULE: ./components/common/SideBar.jsx
var SideBar = __webpack_require__("BhwC");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: ./styles/style.js
var style = __webpack_require__("Zr0A");

// EXTERNAL MODULE: ./lib/images/ci.png
var ci = __webpack_require__("Enfo");
var ci_default = /*#__PURE__*/__webpack_require__.n(ci);

// CONCATENATED MODULE: ./components/info/Ci.jsx
var __jsx = external_react_default.a.createElement;




const Container = external_styled_components_default.a.div.withConfig({
  displayName: "Ci__Container",
  componentId: "sc-1ho1vo2-0"
})(["width:100%;padding:30px;text-align:center;& img{width:700px;}", "{padding:0;}"], style["d" /* isMobile */]);
const Title = external_styled_components_default.a.div.withConfig({
  displayName: "Ci__Title",
  componentId: "sc-1ho1vo2-1"
})(["font-size:25px;margin-bottom:25px;text-align:initial;"]);
const Text = external_styled_components_default.a.div.withConfig({
  displayName: "Ci__Text",
  componentId: "sc-1ho1vo2-2"
})(["border-top:1px solid black;text-align:center;font-size:14px;padding:50px 0;& span{color:", "}"], style["h" /* pointColor */]);

const Ci = () => __jsx(Container, null, __jsx(Title, null, 'CI'), __jsx("img", {
  src: ci_default.a,
  alt: 'logo'
}), __jsx(Text, null, '전체적인 원과 글씨는 Pyrex Glass tubing을 뜻하고 원안의 두손은 Glass의 가공을 의미합니다.', __jsx("br", null), '특히, ', __jsx("span", null, '적색'), '은 가공시의 불꽃을 표현한 것으로서 정열의 상징인 적색은 끊임없는 전진과 앞으로의 적극적인 도약,', __jsx("br", null), '그리고 원안의 하나됨으로써 과학기술 발전에 작은 보탬이 되고자 하는 뜻을 담고 있습니다.'));

/* harmony default export */ var info_Ci = (Ci);
// CONCATENATED MODULE: ./components/info/Greeting.jsx
var Greeting_jsx = external_react_default.a.createElement;



const Greeting_Container = external_styled_components_default.a.div.withConfig({
  displayName: "Greeting__Container",
  componentId: "sc-3kni0n-0"
})(["display:flex;flex-direction:column;padding:30px;", "{padding:0;}"], style["d" /* isMobile */]);
const Greeting_Title = external_styled_components_default.a.div.withConfig({
  displayName: "Greeting__Title",
  componentId: "sc-3kni0n-1"
})(["font-size:25px;margin-bottom:25px;"]);
const SubTitle = external_styled_components_default.a.div.withConfig({
  displayName: "Greeting__SubTitle",
  componentId: "sc-3kni0n-2"
})(["font-size:23px;color:", ";margin-bottom:30px;"], style["j" /* subPointColor */]);
const Greeting_Text = external_styled_components_default.a.div.withConfig({
  displayName: "Greeting__Text",
  componentId: "sc-3kni0n-3"
})(["font-size:12px;padding-right:20%;& div{font-size:14px;margin-top:50px;font-weight:bolder;}"]);

const Greeting = () => Greeting_jsx(Greeting_Container, null, Greeting_jsx(Greeting_Title, null, '인사말'), Greeting_jsx(SubTitle, null, 'Customer Satisfaction', Greeting_jsx("br", null), '고객만족을 위해 최선을 다하겠습니다.'), Greeting_jsx(Greeting_Text, null, `성실히 최고의 제품을 소비자에게 직접 전달하고자 노력하며 외산 실험 기자재보다 국내실정에 맞는 좋은 제품을 생산하기 위하여 
                광진이 화학 전 직원이 한 마음으로 가공 기술 개발에 전력 투구하여 GLASS 가공의 최고 위치에 서고자 합니다`, Greeting_jsx("br", null), Greeting_jsx("br", null), `앞으로 나서기 보다는 뒤에서 뒷받침으로 만족하며 우리나라 화학 발전에 조긍이나마 밑거름이 되어서
                화학이 있는 한 광진이화학이 있어 빠른 발전이 되었다는 소리를 듣고자 전직원은 노력하고 있습니다.`, Greeting_jsx("div", null, '대표이사 엄준회')));

/* harmony default export */ var info_Greeting = (Greeting);
// CONCATENATED MODULE: ./components/info/History.jsx
var History_jsx = external_react_default.a.createElement;



const History_Container = external_styled_components_default.a.div.withConfig({
  displayName: "History__Container",
  componentId: "sc-1ltig7z-0"
})(["padding:30px;"]);
const Content = external_styled_components_default.a.div.withConfig({
  displayName: "History__Content",
  componentId: "sc-1ltig7z-1"
})(["display:flex;margin:15px 0;"]);
const Year = external_styled_components_default.a.div.withConfig({
  displayName: "History__Year",
  componentId: "sc-1ltig7z-2"
})(["color:", ";font-size:25px;width:30%;text-align:center;margin:auto;"], style["j" /* subPointColor */]);
const Month = external_styled_components_default.a.div.withConfig({
  displayName: "History__Month",
  componentId: "sc-1ltig7z-3"
})(["width:10%;margin:auto;"]);
const History_Title = external_styled_components_default.a.div.withConfig({
  displayName: "History__Title",
  componentId: "sc-1ltig7z-4"
})(["font-size:25px;margin-bottom:25px;"]);
const History_Text = external_styled_components_default.a.div.withConfig({
  displayName: "History__Text",
  componentId: "sc-1ltig7z-5"
})(["width:60%;margin:auto;"]);

const History = () => {
  const histories = Object(external_react_["useRef"])([{
    year: '2014',
    month: '04',
    text: 'SciLab 대리점'
  }, {
    year: '2013',
    month: '04',
    text: 'LKlab Korea 대리점'
  }, {
    year: '2011',
    month: '03',
    text: 'OLED 사업 관련 전문 실험실 초자 기자재 납품(L, D, H, J 회사 외)'
  }, {
    year: '2006',
    month: '09',
    text: '제조회사 <광진과학> 이역규 사장과 판매회사 <광진이화학> 엄준회 사장으로 분리영업 시작'
  }, {
    year: '2005',
    month: '09',
    text: '엘지화학 기술원 stock room Glass, 소모성 기자재 납품운영'
  }, {
    year: '2000',
    month: '01',
    text: '광진 이화학기 제작소에서 광진이화학으로 상호 변경'
  }, {
    year: '1993',
    month: '05',
    text: '엄기석 사장님 별세로 대표자 변경. 이역규, 엄준회 공동 사장'
  }, {
    year: '1984',
    month: '03',
    text: 'KIST 김박사님 마크도안. 광진 마크 상품에 부착 판매 한국화학 연구소를 시작으로 엘지화학 연구소등 대덕연구단지 납품시작'
  }, {
    year: '1979',
    month: '06',
    text: '현 엘지 화학 기술원 초자 단가계약 납품. 서울대 화학과 초자 실습 시 초자 가공에 대한 강의'
  }, {
    year: '1979',
    month: '03',
    text: '광진 이화학기기 제작소로 상호변경'
  }, {
    year: '1975',
    month: '07',
    text: '광진 이화학기기 제작소 설립 엄 기석 1대 사장'
  }]);
  return History_jsx(History_Container, null, History_jsx(History_Title, null, '연혁'), histories.current.map(history => History_jsx(Content, null, History_jsx(Year, null, history.year), History_jsx(Month, null, history.month), History_jsx(History_Text, null, history.text))));
};

/* harmony default export */ var info_History = (History);
// CONCATENATED MODULE: ./components/info/Map.jsx
var Map_jsx = external_react_default.a.createElement;


const Map = () => {
  const mapContainer = Object(external_react_["useRef"])();
  Object(external_react_["useEffect"])(() => {
    // window.Kakao.init();
    const options = {
      center: new window.kakao.maps.LatLng(37.621290, 127.025898),
      level: 3
    };
    const map = new window.kakao.maps.Map(mapContainer.current, options); // 일반 지도와 스카이뷰로 지도 타입을 전환할 수 있는 지도타입 컨트롤을 생성합니다

    const mapTypeControl = new window.kakao.maps.MapTypeControl(); // 지도에 컨트롤을 추가해야 지도위에 표시됩니다
    // kakao.maps.ControlPosition은 컨트롤이 표시될 위치를 정의하는데 TOPRIGHT는 오른쪽 위를 의미합니다

    map.addControl(mapTypeControl, window.kakao.maps.ControlPosition.TOPRIGHT); // 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다

    const zoomControl = new window.kakao.maps.ZoomControl();
    map.addControl(zoomControl, window.kakao.maps.ControlPosition.RIGHT);
    const markerPosition = new window.kakao.maps.LatLng(37.621290, 127.025898);
    const marker = new window.kakao.maps.Marker({
      position: markerPosition
    }); // 마커에 커서가 오버됐을 때 마커 위에 표시할 인포윈도우를 생성합니다

    const iwContent = '<div style="padding:5px; text-align:center;">광진이화학</div>'; // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
    // 인포윈도우를 생성합니다

    const infowindow = new window.kakao.maps.InfoWindow({
      content: iwContent
    });
    infowindow.open(map, marker); // 마커가 지도 위에 표시되도록 설정합니다

    marker.setMap(map);
  }, []);
  return Map_jsx("div", {
    id: "map",
    style: {
      width: '100%',
      height: '400px',
      marginTop: '50px'
    },
    ref: mapContainer
  });
};

/* harmony default export */ var info_Map = (Map);
// EXTERNAL MODULE: ./containers/common/NavBar.jsx + 2 modules
var NavBar = __webpack_require__("ZdWx");

// CONCATENATED MODULE: ./pages/info.js
var info_jsx = external_react_default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














const Info = ({
  id
}) => {
  const {
    0: sideBarItems,
    1: setSideBarItems
  } = Object(external_react_["useState"])([{
    text: '인사말',
    id: 1,
    clicked: false
  }, {
    text: '연혁',
    id: 2,
    clicked: false
  }, {
    text: 'CI',
    id: 3,
    clicked: false
  }, {
    text: '오시는 길',
    id: 4,
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
      pathname: '/info',
      query: {
        id: itemId
      }
    });
  }, [sideBarItems]);
  return info_jsx(AppLayout["a" /* default */], null, info_jsx(NavBar["a" /* default */], {
    sideMenuItems: sideBarItems,
    clickSideItem: clickSideItem
  }), info_jsx(style["a" /* ViewContainer */], null, info_jsx(Header["a" /* default */], null), info_jsx(style["b" /* ViewContent */], null, info_jsx(SideBar["a" /* default */], {
    sideBarTitle: '회사소개',
    sideBarItems: sideBarItems,
    clickSideItem: clickSideItem
  }), (!id || id === '1') && info_jsx(info_Greeting, null), id === '2' && info_jsx(info_History, null), id === '3' && info_jsx(info_Ci, null), id === '4' && info_jsx(info_Map, null))), info_jsx(Footer["a" /* default */], null));
};

Info.getInitialProps = async context => {
  return {
    id: context.query.id
  };
};

Info.defaultProps = {
  id: null
};
/* harmony default export */ var info = __webpack_exports__["default"] = (Info);

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

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });