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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RNiq");


/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "9IJI":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

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

/***/ "RNiq":
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

// EXTERNAL MODULE: ./containers/common/NavBar.jsx + 2 modules
var NavBar = __webpack_require__("ZdWx");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: ./styles/style.js
var style = __webpack_require__("Zr0A");

// CONCATENATED MODULE: ./components/main/ItemTitle.jsx
var __jsx = external_react_default.a.createElement;



const Container = external_styled_components_default.a.div.withConfig({
  displayName: "ItemTitle__Container",
  componentId: "sc-9t61kg-0"
})(["padding:12px;font-size:19px;margin-bottom:10px;border-top:2px solid ", ";border-bottom:1px solid ", ";cursor:pointer;"], style["h" /* pointColor */], style["e" /* lightGrayColor */]);

const ItemTitle = ({
  title,
  clickTitle
}) => __jsx(Container, {
  onClick: clickTitle
}, title);

/* harmony default export */ var main_ItemTitle = (ItemTitle);
// EXTERNAL MODULE: ./lib/images/cs_center.png
var cs_center = __webpack_require__("lAor");
var cs_center_default = /*#__PURE__*/__webpack_require__.n(cs_center);

// CONCATENATED MODULE: ./components/main/CustomerCenter.jsx
var CustomerCenter_jsx = external_react_default.a.createElement;




const CustomerCenter_Container = external_styled_components_default.a.div.withConfig({
  displayName: "CustomerCenter__Container",
  componentId: "sc-108wmyw-0"
})(["display:flex;& img{margin:auto;width:100%;cursor:pointer;", "{width:90%;}}"], style["d" /* isMobile */]);

const CustomerCenter = ({
  onClickCS
}) => CustomerCenter_jsx(CustomerCenter_Container, {
  onClick: onClickCS
}, CustomerCenter_jsx("img", {
  src: cs_center_default.a,
  alt: 'cs'
}));

/* harmony default export */ var main_CustomerCenter = (CustomerCenter);
// CONCATENATED MODULE: ./containers/main/CustomerCenter.jsx
var main_CustomerCenter_jsx = external_react_default.a.createElement;





const CustmoerCenter = () => {
  const onClick = Object(external_react_["useCallback"])(() => {
    router_default.a.push({
      pathname: '/customercenter',
      query: {
        id: '2'
      }
    });
  }, []);
  return main_CustomerCenter_jsx(external_react_default.a.Fragment, null, main_CustomerCenter_jsx(main_ItemTitle, {
    title: '고객 센터',
    clickTitle: onClick
  }), main_CustomerCenter_jsx(main_CustomerCenter, {
    onClickCS: onClick
  }));
};

/* harmony default export */ var containers_main_CustomerCenter = (CustmoerCenter);
// CONCATENATED MODULE: ./components/main/ProductPreviewTitle.jsx
var ProductPreviewTitle_jsx = external_react_default.a.createElement;



const ProductPreviewTitle_Container = external_styled_components_default.a.div.withConfig({
  displayName: "ProductPreviewTitle__Container",
  componentId: "ytjjia-0"
})(["padding:10px;display:flex;text-align:center;"]);
const Title = external_styled_components_default.a.div.withConfig({
  displayName: "ProductPreviewTitle__Title",
  componentId: "ytjjia-1"
})(["margin:auto;font-size:25px;font-weight:500;& span{color:", ";}", "{display:none;}"], style["j" /* subPointColor */], style["d" /* isMobile */]);
const Button = external_styled_components_default.a.div.withConfig({
  displayName: "ProductPreviewTitle__Button",
  componentId: "ytjjia-2"
})(["margin-right:0;background-color:", ";color:white;padding:15px;cursor:pointer;", "{width:80%;margin:auto;}"], style["j" /* subPointColor */], style["d" /* isMobile */]);

const ProductPreview = ({
  clickDownload
}) => ProductPreviewTitle_jsx(ProductPreviewTitle_Container, null, ProductPreviewTitle_jsx(Title, null, ProductPreviewTitle_jsx("span", null, '광진이화학'), '의 최신 기자재를 소개합니다.'), ProductPreviewTitle_jsx(Button, {
  onClick: clickDownload
}, '카타로그 다운로드'));

/* harmony default export */ var ProductPreviewTitle = (ProductPreview);
// CONCATENATED MODULE: ./components/main/Product.jsx
var Product_jsx = external_react_default.a.createElement;


const Product_Container = external_styled_components_default.a.div.withConfig({
  displayName: "Product__Container",
  componentId: "sc-1aglfei-0"
})(["display:inline-block;position:relative;cursor:pointer;& img{width:", "px;}"], props => props.width);
const ProductId = external_styled_components_default.a.div.withConfig({
  displayName: "Product__ProductId",
  componentId: "sc-1aglfei-1"
})(["position:absolute;top:5px;right:5px;color:red;text-shadow:1px 1px 10px white;"]);

const Product = ({
  width,
  product,
  clickProduct
}) => Product_jsx(Product_Container, {
  width: width,
  onClick: clickProduct
}, Product_jsx(ProductId, null, product.id), Product_jsx("img", {
  src: product.image,
  alt: 'Product'
}));

/* harmony default export */ var main_Product = (Product);
// CONCATENATED MODULE: ./utils/Modal.js
class Modal {
  constructor() {
    this.listener = null;
  }

  static addEventListener(listener) {
    this.listener = listener;
  }

  static emitEvent(params) {
    if (this.listener) {
      this.listener(params);
    }
  }

}
// CONCATENATED MODULE: ./containers/main/Product.jsx
var main_Product_jsx = external_react_default.a.createElement;



const ITEM_WIDTH = 170;

const Product_Product = ({
  product
}) => {
  const onClickProduct = () => {
    Modal.emitEvent(product);
  };

  return main_Product_jsx(main_Product, {
    width: ITEM_WIDTH,
    product: product,
    clickProduct: onClickProduct
  });
};

/* harmony default export */ var containers_main_Product = (Product_Product);
// CONCATENATED MODULE: ./components/common/ArrowNext.jsx

var ArrowNext_jsx = external_react_default.a.createElement;

const ArrowNext_Container = external_styled_components_default.a.div.withConfig({
  displayName: "ArrowNext__Container",
  componentId: "lyidfg-0"
})(["cursor:pointer;& img{width:30px;}"]);
const ArrowNext = ({
  onPress
}) => ArrowNext_jsx(ArrowNext_Container, {
  onClick: onPress
}, ArrowNext_jsx("img", {
  src: "https://user-images.githubusercontent.com/22593217/110232392-b5e1e380-7f60-11eb-9233-d81834319913.png",
  alt: "arrowNext"
}));
// CONCATENATED MODULE: ./components/common/ArrowPrevious.jsx

var ArrowPrevious_jsx = external_react_default.a.createElement;

const ArrowPrevious_Container = external_styled_components_default.a.div.withConfig({
  displayName: "ArrowPrevious__Container",
  componentId: "sc-90yxm8-0"
})(["cursor:pointer;& img{width:30px;}"]);
const ArrowPrevious = ({
  onPress
}) => ArrowPrevious_jsx(ArrowPrevious_Container, {
  onClick: onPress
}, ArrowPrevious_jsx("img", {
  src: "https://user-images.githubusercontent.com/22593217/110232394-b7131080-7f60-11eb-9b92-f07d14186954.png",
  alt: "arrowPrev"
}));
// CONCATENATED MODULE: ./components/main/ProductList.jsx
var ProductList_jsx = external_react_default.a.createElement;






const ProductList_Container = external_styled_components_default.a.div.withConfig({
  displayName: "ProductList__Container",
  componentId: "v0uq4f-0"
})(["display:flex;width:100%;background-color:", ";overflow:hidden;flex-direction:row;position:relative;"], style["e" /* lightGrayColor */]);
const Content = external_styled_components_default.a.div.withConfig({
  displayName: "ProductList__Content",
  componentId: "v0uq4f-1"
})(["white-space:nowrap;overflow:hidden;margin:10px 30px;height:310px;display:flex;align-items:center;"]);
const ProductWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "ProductList__ProductWrapper",
  componentId: "v0uq4f-2"
})(["margin:0 10px;transform:translateX(-", "px);transition:transform 0.5s ease;"], props => props.indent);
const Arrow = external_styled_components_default.a.div.withConfig({
  displayName: "ProductList__Arrow",
  componentId: "v0uq4f-3"
})(["position:absolute;top:50%;transform:translateY(-50%);left:", ";right:", ";"], props => props.next ? undefined : 0, props => props.next ? 0 : undefined);

const ProductList = ({
  products
}) => {
  const contentRef = Object(external_react_["useRef"])();
  const {
    0: scrollIndex,
    1: setScrollIndex
  } = Object(external_react_["useState"])(0);
  const {
    0: itemCount,
    1: setItemCount
  } = Object(external_react_["useState"])(0);
  const maxProductCount = Object(external_react_["useMemo"])(() => products.length - 1, [products.length]);
  const maxScrollIndex = Object(external_react_["useMemo"])(() => Math.floor(maxProductCount / itemCount), [maxProductCount, itemCount]);
  const isShowPrevious = Object(external_react_["useMemo"])(() => scrollIndex > 0, [scrollIndex]);
  const isShowNext = Object(external_react_["useMemo"])(() => scrollIndex < maxScrollIndex, [scrollIndex, maxScrollIndex]);
  const snapIndent = Object(external_react_["useMemo"])(() => ITEM_WIDTH + 20, []);
  const clickPrevious = Object(external_react_["useCallback"])(() => {
    setScrollIndex(prev => prev - 1 < 0 ? 0 : prev - 1);
  }, []);
  const clickNext = Object(external_react_["useCallback"])(() => {
    setScrollIndex(prev => prev + 1 > maxScrollIndex ? maxScrollIndex : prev + 1);
  }, [maxScrollIndex]);
  const updateItemCount = Object(external_react_["useCallback"])(() => {
    if (contentRef !== null && contentRef !== void 0 && contentRef.current) {
      setItemCount(Math.floor(contentRef.current.offsetWidth / snapIndent));
    }
  }, [contentRef === null || contentRef === void 0 ? void 0 : contentRef.current, snapIndent]);
  Object(external_react_["useEffect"])(() => {
    window.addEventListener('resize', updateItemCount);
    return () => {
      window.removeEventListener('resize', updateItemCount);
    };
  }, []);
  Object(external_react_["useEffect"])(() => {
    updateItemCount();
  }, []);
  return ProductList_jsx(ProductList_Container, null, isShowPrevious && ProductList_jsx(Arrow, {
    next: false,
    onClick: clickPrevious
  }, ProductList_jsx(ArrowPrevious, null)), isShowNext && ProductList_jsx(Arrow, {
    next: true,
    onClick: clickNext
  }, ProductList_jsx(ArrowNext, null)), ProductList_jsx(Content, {
    ref: contentRef
  }, products.map(product => ProductList_jsx(ProductWrapper, {
    key: product.id,
    indent: snapIndent * itemCount * scrollIndex
  }, ProductList_jsx(containers_main_Product, {
    product: product
  })))));
};

/* harmony default export */ var main_ProductList = (ProductList);
// CONCATENATED MODULE: ./data/productPreview.js
const items = [{
  id: '1',
  image: 'https://kjglass-images.s3.ap-northeast-2.amazonaws.com/preview/preview_1.png'
}, {
  id: '2',
  image: 'https://kjglass-images.s3.ap-northeast-2.amazonaws.com/preview/preview_2.png'
}, {
  id: '3',
  image: 'https://kjglass-images.s3.ap-northeast-2.amazonaws.com/preview/preview_3.png'
}, {
  id: '4',
  image: 'https://kjglass-images.s3.ap-northeast-2.amazonaws.com/preview/preview_4.png'
}, {
  id: '5',
  image: 'https://kjglass-images.s3.ap-northeast-2.amazonaws.com/preview/preview_5.png'
}, {
  id: '6',
  image: 'https://kjglass-images.s3.ap-northeast-2.amazonaws.com/preview/preview_6.png'
}, {
  id: '7',
  image: 'https://kjglass-images.s3.ap-northeast-2.amazonaws.com/preview/preview_7.jpg'
}, {
  id: '8',
  image: 'https://kjglass-images.s3.ap-northeast-2.amazonaws.com/preview/preview_8.jpg'
}, {
  id: '9',
  image: 'https://kjglass-images.s3.ap-northeast-2.amazonaws.com/preview/preview_9.jpg'
}, {
  id: '10',
  image: 'https://kjglass-images.s3.ap-northeast-2.amazonaws.com/preview/preview_10.jpg'
}, {
  id: '11',
  image: 'https://kjglass-images.s3.ap-northeast-2.amazonaws.com/preview/preview_11.jpg'
}, {
  id: '12',
  image: 'https://kjglass-images.s3.ap-northeast-2.amazonaws.com/preview/preview_12.jpg'
}, {
  id: '13',
  image: 'https://kjglass-images.s3.ap-northeast-2.amazonaws.com/preview/preview_13.jpg'
}, {
  id: '14',
  image: 'https://kjglass-images.s3.ap-northeast-2.amazonaws.com/preview/preview_14.jpg'
}, {
  id: '15',
  image: 'https://kjglass-images.s3.ap-northeast-2.amazonaws.com/preview/preview_15.JPG'
}, {
  id: '16',
  image: 'https://kjglass-images.s3.ap-northeast-2.amazonaws.com/preview/preview_16.JPG'
}, {
  id: '17',
  image: 'https://kjglass-images.s3.ap-northeast-2.amazonaws.com/preview/preview_17.JPG'
}, {
  id: '18',
  image: 'https://kjglass-images.s3.ap-northeast-2.amazonaws.com/preview/preview_18.JPG'
}, {
  id: '19',
  image: 'https://kjglass-images.s3.ap-northeast-2.amazonaws.com/preview/preview_19.JPG'
}, {
  id: '20',
  image: 'https://kjglass-images.s3.ap-northeast-2.amazonaws.com/preview/preview_20.JPG'
}, {
  id: '21',
  image: 'https://kjglass-images.s3.ap-northeast-2.amazonaws.com/preview/preview_21.JPG'
}, {
  id: '22',
  image: 'https://kjglass-images.s3.ap-northeast-2.amazonaws.com/preview/preview_22.JPG'
}, {
  id: '23',
  image: 'https://kjglass-images.s3.ap-northeast-2.amazonaws.com/preview/preview_23.JPG'
}, {
  id: '24',
  image: 'https://kjglass-images.s3.ap-northeast-2.amazonaws.com/preview/preview_24.JPG'
}, {
  id: '25',
  image: 'https://kjglass-images.s3.ap-northeast-2.amazonaws.com/preview/preview_25.JPG'
}, {
  id: '26',
  image: 'https://kjglass-images.s3.ap-northeast-2.amazonaws.com/preview/preview_26.JPG'
}, {
  id: '27',
  image: 'https://kjglass-images.s3.ap-northeast-2.amazonaws.com/preview/preview_27.JPG'
}, {
  id: '28',
  image: 'https://kjglass-images.s3.ap-northeast-2.amazonaws.com/preview/preview_28.JPG'
}, {
  id: '29',
  image: 'https://kjglass-images.s3.ap-northeast-2.amazonaws.com/preview/preview_29.JPG'
}, {
  id: '30',
  image: 'https://kjglass-images.s3.ap-northeast-2.amazonaws.com/preview/preview_30.JPG'
}, {
  id: '31',
  image: 'https://kjglass-images.s3.ap-northeast-2.amazonaws.com/preview/preview_31.JPG'
}, {
  id: '32',
  image: 'https://kjglass-images.s3.ap-northeast-2.amazonaws.com/preview/preview_32.JPG'
}, {
  id: '33',
  image: 'https://kjglass-images.s3.ap-northeast-2.amazonaws.com/preview/preview_33.JPG'
}, {
  id: '34',
  image: 'https://kjglass-images.s3.ap-northeast-2.amazonaws.com/preview/preview_34.jpeg'
}, {
  id: '35',
  image: 'https://kjglass-images.s3.ap-northeast-2.amazonaws.com/preview/preview_35.jpeg'
}, {
  id: '36',
  image: 'https://kjglass-images.s3.ap-northeast-2.amazonaws.com/preview/preview_36.JPG'
}, {
  id: '37',
  image: 'https://kjglass-images.s3.ap-northeast-2.amazonaws.com/preview/preview_37.JPG'
}, {
  id: '38',
  image: 'https://kjglass-images.s3.ap-northeast-2.amazonaws.com/preview/preview_38.JPG'
}, {
  id: '39',
  image: 'https://kjglass-images.s3.ap-northeast-2.amazonaws.com/preview/preview_39.JPG'
}, {
  id: '40',
  image: 'https://kjglass-images.s3.ap-northeast-2.amazonaws.com/preview/preview_40.JPG'
}, {
  id: '41',
  image: 'https://kjglass-images.s3.ap-northeast-2.amazonaws.com/preview/preview_41.JPG'
}, {
  id: '42',
  image: 'https://kjglass-images.s3.ap-northeast-2.amazonaws.com/preview/preview_42.JPG'
}, {
  id: '43',
  image: 'https://kjglass-images.s3.ap-northeast-2.amazonaws.com/preview/preview_43.JPG'
}, {
  id: '44',
  image: 'https://kjglass-images.s3.ap-northeast-2.amazonaws.com/preview/preview_44.JPG'
}, {
  id: '45',
  image: 'https://kjglass-images.s3.ap-northeast-2.amazonaws.com/preview/preview_45.JPG'
}, {
  id: '46',
  image: 'https://kjglass-images.s3.ap-northeast-2.amazonaws.com/preview/preview_46.JPG'
}, {
  id: '47',
  image: 'https://kjglass-images.s3.ap-northeast-2.amazonaws.com/preview/preview_47.JPG'
}, {
  id: '48',
  image: 'https://kjglass-images.s3.ap-northeast-2.amazonaws.com/preview/preview_48.JPG'
}, {
  id: '49',
  image: 'https://kjglass-images.s3.ap-northeast-2.amazonaws.com/preview/preview_49.JPG'
}, {
  id: '50',
  image: 'https://kjglass-images.s3.ap-northeast-2.amazonaws.com/preview/preview_50.jpg'
}, {
  id: '51',
  image: 'https://kjglass-images.s3.ap-northeast-2.amazonaws.com/preview/preview_51.jpg'
}, {
  id: '52',
  image: 'https://kjglass-images.s3.ap-northeast-2.amazonaws.com/preview/preview_52.jpeg'
}, {
  id: '53',
  image: 'https://kjglass-images.s3.ap-northeast-2.amazonaws.com/preview/preview_53.jpeg'
}, {
  id: '54',
  image: 'https://kjglass-images.s3.ap-northeast-2.amazonaws.com/preview/preview_54.JPG'
}, {
  id: '55',
  image: 'https://kjglass-images.s3.ap-northeast-2.amazonaws.com/preview/preview_55.JPG'
}, {
  id: '56',
  image: 'https://kjglass-images.s3.ap-northeast-2.amazonaws.com/preview/preview_56.jpg'
}, {
  id: '57',
  image: 'https://kjglass-images.s3.ap-northeast-2.amazonaws.com/preview/preview_57.jpg'
}, {
  id: '58',
  image: 'https://kjglass-images.s3.ap-northeast-2.amazonaws.com/preview/preview_58.jpg'
}, {
  id: '59',
  image: 'https://kjglass-images.s3.ap-northeast-2.amazonaws.com/preview/preview_59.jpg'
}, {
  id: '60',
  image: 'https://kjglass-images.s3.ap-northeast-2.amazonaws.com/preview/preview_60.jpg'
}, {
  id: '61',
  image: 'https://kjglass-images.s3.ap-northeast-2.amazonaws.com/preview/preview_61.jpg'
}, {
  id: '62',
  image: 'https://kjglass-images.s3.ap-northeast-2.amazonaws.com/preview/preview_62.jpg'
}, {
  id: '63',
  image: 'https://kjglass-images.s3.ap-northeast-2.amazonaws.com/preview/preview_63.jpg'
}, {
  id: '64',
  image: 'https://kjglass-images.s3.ap-northeast-2.amazonaws.com/preview/preview_64.jpg'
}, {
  id: '65',
  image: 'https://kjglass-images.s3.ap-northeast-2.amazonaws.com/preview/preview_65.jpg'
}];
/* harmony default export */ var productPreview = (items);
// CONCATENATED MODULE: ./containers/main/ProductPreview.jsx
var ProductPreview_jsx = external_react_default.a.createElement;






const ProductPreview_ProductPreview = () => {
  const clickDownload = () => {
    router_default.a.push({
      pathname: '/shop',
      query: {
        id: '3'
      }
    });
  };

  return ProductPreview_jsx(external_react_default.a.Fragment, null, ProductPreview_jsx(ProductPreviewTitle, {
    clickDownload: clickDownload
  }), ProductPreview_jsx(main_ProductList, {
    products: productPreview
  }));
};

/* harmony default export */ var main_ProductPreview = (ProductPreview_ProductPreview);
// CONCATENATED MODULE: ./components/main/NoticeItem.jsx
var NoticeItem_jsx = external_react_default.a.createElement;


const NoticeItem_Container = external_styled_components_default.a.div.withConfig({
  displayName: "NoticeItem__Container",
  componentId: "sc-1cdartk-0"
})(["padding:0 10px;margin-bottom:8px;font-size:14px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;cursor:pointer;"]);

const NoticeItem = ({
  title,
  clickNotice
}) => NoticeItem_jsx(NoticeItem_Container, {
  onClick: clickNotice
}, title);

/* harmony default export */ var main_NoticeItem = (NoticeItem);
// CONCATENATED MODULE: ./containers/main/NoticeItem.jsx
var main_NoticeItem_jsx = external_react_default.a.createElement;




const NoticeItem_NoticeItem = ({
  notice
}) => {
  const onClickNotice = () => {
    router_default.a.push({
      pathname: '/customercenter',
      query: {
        id: '1',
        noticeId: String(notice.id)
      }
    });
  };

  return main_NoticeItem_jsx(main_NoticeItem, {
    title: notice.title,
    clickNotice: onClickNotice
  });
};

/* harmony default export */ var containers_main_NoticeItem = (NoticeItem_NoticeItem);
// CONCATENATED MODULE: ./components/main/NoticeItems.jsx
var NoticeItems_jsx = external_react_default.a.createElement;



const NoticeItems_Container = external_styled_components_default.a.div.withConfig({
  displayName: "NoticeItems__Container",
  componentId: "sc-1rg5vyk-0"
})([""]);

const NoticeItems = ({
  notices
}) => NoticeItems_jsx(NoticeItems_Container, null, notices.slice(0, 3).map(notice => NoticeItems_jsx(containers_main_NoticeItem, {
  notice: notice,
  key: notice.id
})));

/* harmony default export */ var main_NoticeItems = (NoticeItems);
// EXTERNAL MODULE: ./data/notices.js
var data_notices = __webpack_require__("Sku3");

// CONCATENATED MODULE: ./containers/main/Notice.jsx
var Notice_jsx = external_react_default.a.createElement;






const Notice = () => {
  const onClickTitle = Object(external_react_["useCallback"])(() => {
    router_default.a.push({
      pathname: '/customercenter',
      query: {
        id: '1'
      }
    });
  }, []);
  return Notice_jsx(external_react_default.a.Fragment, null, Notice_jsx(main_ItemTitle, {
    title: '공지 사항',
    clickTitle: onClickTitle
  }), Notice_jsx(main_NoticeItems, {
    notices: data_notices["a" /* default */]
  }));
};

/* harmony default export */ var main_Notice = (Notice);
// CONCATENATED MODULE: ./components/main/SearchProduct.jsx
var SearchProduct_jsx = external_react_default.a.createElement;


const SearchProduct_Container = external_styled_components_default.a.div.withConfig({
  displayName: "SearchProduct__Container",
  componentId: "sc-16y1pd7-0"
})(["display:flex;"]);
const Left = external_styled_components_default.a.div.withConfig({
  displayName: "SearchProduct__Left",
  componentId: "sc-16y1pd7-1"
})(["cursor:pointer;padding:10px;background-color:#7d8ecb;"]);
const Right = external_styled_components_default.a.div.withConfig({
  displayName: "SearchProduct__Right",
  componentId: "sc-16y1pd7-2"
})(["cursor:pointer;padding:10px;background-color:#7dbfcb;"]);
const SearchProduct_Title = external_styled_components_default.a.div.withConfig({
  displayName: "SearchProduct__Title",
  componentId: "sc-16y1pd7-3"
})(["color:white;font-size:18px;margin-bottom:15px;"]);
const SearchProduct_Content = external_styled_components_default.a.div.withConfig({
  displayName: "SearchProduct__Content",
  componentId: "sc-16y1pd7-4"
})(["color:white;margin-bottom:18px;"]);
const SearchProduct_Button = external_styled_components_default.a.div.withConfig({
  displayName: "SearchProduct__Button",
  componentId: "sc-16y1pd7-5"
})(["cursor:pointer;font-size:12px;padding:5px 9px;border:1px solid white;color:white;float:right;"]);

const ProductSearch = ({
  openGlass,
  openConsumer
}) => SearchProduct_jsx(SearchProduct_Container, null, SearchProduct_jsx(Left, {
  onClick: openGlass
}, SearchProduct_jsx(SearchProduct_Title, null, '광진이화학 제품군'), SearchProduct_jsx(SearchProduct_Content, null, '광진이화학의 제품을 검색 할 수 있는 페이지로 이동합니다.'), SearchProduct_jsx(SearchProduct_Button, null, '더 보기')), SearchProduct_jsx(Right, {
  onClick: openConsumer
}, SearchProduct_jsx(SearchProduct_Title, null, '기타 제품군'), SearchProduct_jsx(SearchProduct_Content, null, '기타 제품을 검색 할 수 있는 페이지로 이동합니다.'), SearchProduct_jsx(SearchProduct_Button, null, '더 보기')));

/* harmony default export */ var SearchProduct = (ProductSearch);
// CONCATENATED MODULE: ./containers/main/SearchProduct.jsx
var main_SearchProduct_jsx = external_react_default.a.createElement;





const SearchProduct_SearchProduct = () => {
  const onClickTitle = Object(external_react_["useCallback"])(() => {
    router_default.a.push({
      pathname: '/shop'
    });
  }, []);
  const openGlass = Object(external_react_["useCallback"])(() => {
    router_default.a.push({
      pathname: '/shop',
      query: {
        id: '1'
      }
    });
  }, []);
  const openConsumer = Object(external_react_["useCallback"])(() => {
    router_default.a.push({
      pathname: '/shop',
      query: {
        id: '2'
      }
    });
  }, []);
  return main_SearchProduct_jsx(external_react_default.a.Fragment, null, main_SearchProduct_jsx(main_ItemTitle, {
    title: '제품 검색',
    clickTitle: onClickTitle
  }), main_SearchProduct_jsx(SearchProduct, {
    openGlass: openGlass,
    openConsumer: openConsumer
  }));
};

/* harmony default export */ var main_SearchProduct = (SearchProduct_SearchProduct);
// CONCATENATED MODULE: ./styles/main.js


const MainItems = external_styled_components_default.a.div.withConfig({
  displayName: "main__MainItems",
  componentId: "to4jnp-0"
})(["display:flex;margin-top:20px;", "{flex-direction:column;}"], style["d" /* isMobile */]);
const MainItem = external_styled_components_default.a.div.withConfig({
  displayName: "main__MainItem",
  componentId: "to4jnp-1"
})(["width:30%;margin:0 1.5% 20px;", "{width:100%;}"], style["d" /* isMobile */]);
/* harmony default export */ var main = (null);
// CONCATENATED MODULE: ./components/main/ProductDetail.jsx
var ProductDetail_jsx = external_react_default.a.createElement;




const ProductDetail_Container = external_styled_components_default.a.div.withConfig({
  displayName: "ProductDetail__Container",
  componentId: "sc-1lm87n7-0"
})(["position:absolute;z-index:10;top:0;right:0;bottom:0;left:0;background-color:rgba(0,0,0,0.3);"]);
const Wrapper = external_styled_components_default.a.div.withConfig({
  displayName: "ProductDetail__Wrapper",
  componentId: "sc-1lm87n7-1"
})(["width:100%;height:100%;display:flex;justify-content:center;align-items:center;"]);
const Close = external_styled_components_default.a.img.withConfig({
  displayName: "ProductDetail__Close",
  componentId: "sc-1lm87n7-2"
})(["position:absolute;top:15px;right:15px;width:30px;height:30px;"]);
const ProductDetail_Content = external_styled_components_default.a.div.withConfig({
  displayName: "ProductDetail__Content",
  componentId: "sc-1lm87n7-3"
})(["position:relative;"]);
const ContentImage = external_styled_components_default.a.img.withConfig({
  displayName: "ProductDetail__ContentImage",
  componentId: "sc-1lm87n7-4"
})(["transition-property:transform opacity;transition-duration:0.5s;opacity:", ";transform:", ";width:", "px;", "{width:", "px;}"], props => props.rendered ? 1 : 0, props => props.rendered ? 'translateY(0)' : 'translateY(20%)', props => props.width / 3, style["d" /* isMobile */], props => props.width);
const ProductDetail_ProductId = external_styled_components_default.a.div.withConfig({
  displayName: "ProductDetail__ProductId",
  componentId: "sc-1lm87n7-5"
})(["position:absolute;z-index:20;top:5px;right:5px;color:red;text-shadow:1px 1px 10px white;"]);
const ProductDetail = ({
  product
}) => {
  const {
    0: rendered,
    1: setRendered
  } = Object(external_react_["useState"])(false);
  const handleClickClose = Object(external_react_["useCallback"])(() => {
    Modal.emitEvent();
  }, []);
  Object(external_react_["useEffect"])(() => {
    setRendered(true);
  }, []);
  return ProductDetail_jsx(ProductDetail_Container, {
    onClick: handleClickClose
  }, ProductDetail_jsx(Wrapper, null, ProductDetail_jsx(Close, {
    onClick: handleClickClose,
    src: "https://user-images.githubusercontent.com/22593217/110236681-8b048900-7f7a-11eb-81ef-249448143231.png",
    alt: "close"
  }), ProductDetail_jsx(ProductDetail_Content, null, ProductDetail_jsx(ProductDetail_ProductId, null, product.id), ProductDetail_jsx(ContentImage, {
    src: product.image,
    alt: 'Product',
    width: window.innerWidth,
    rendered: rendered
  }))));
};
// CONCATENATED MODULE: ./pages/index.js
var pages_jsx = external_react_default.a.createElement;















const Home = () => {
  const {
    0: productDetail,
    1: setProductDetail
  } = Object(external_react_["useState"])();
  const {
    0: sideBarItems
  } = Object(external_react_["useState"])([{
    text: '회사소개',
    path: '/info'
  }, {
    text: '주요제품',
    id: '/products'
  }, {
    text: '제품검색',
    id: '/shop'
  }, {
    text: '기자재정보',
    id: '/equipment'
  }, {
    text: '고객센터',
    id: '/customercenter'
  }]);
  const clickSideItem = Object(external_react_["useCallback"])(path => {
    router_default.a.push({
      pathname: path
    });
  }, [sideBarItems]);
  Object(external_react_["useEffect"])(() => {
    Modal.addEventListener(product => {
      setProductDetail(product);
    });
  }, []);
  return pages_jsx(external_react_default.a.Fragment, null, pages_jsx(AppLayout["a" /* default */], null, pages_jsx(NavBar["a" /* default */], {
    sideMenuItems: sideBarItems,
    clickSideItem: clickSideItem
  }), pages_jsx(style["a" /* ViewContainer */], null, pages_jsx(Header["a" /* default */], null), pages_jsx(main_ProductPreview, null), pages_jsx(MainItems, null, pages_jsx(MainItem, null, pages_jsx(main_Notice, null)), pages_jsx(MainItem, null, pages_jsx(main_SearchProduct, null)), pages_jsx(MainItem, null, pages_jsx(containers_main_CustomerCenter, null)))), pages_jsx(Footer["a" /* default */], null)), productDetail && pages_jsx(ProductDetail, {
    product: productDetail
  }));
};

/* harmony default export */ var pages = __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "RYu8":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAMAAABrrFhUAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAWlBMVEUAAAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAAAAAD23kAvAAAAHHRSTlMALZDU9CwHlv38lAa9kyuRjtXT8/LxjSq8uwWS4gAojQAAAAFiS0dEAIgFHUgAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAHdElNRQfjCx0ICR/bfprbAAABM0lEQVR42u3cS1LCUBRF0cdPDBCCgIDg/Mcpv459q07JXWsEJ1ReJaGxWwMAAAAAAAAAAABe2mg8mX4XM52MZ8/Lf5u/p9dkdIvl7fqXq/SQnNXtF5inVyT11/PfpUckdes2pDdkbdpHekLWtu3SE7L2bZ+ekPXpCIzTE7IObVb7MXhsrU+PSBpur8Kn9Iqcr/P9Y+BS9BR0w/n5PbjebMu9Duy2h2P6bwgAAAAAAAAAAAAAAAAAAADgD42G0j3BZdmeYF++J3gq3xO8XM9/0fv/QU9QT1BPUE8wPSFLT1BPUE9QT1BPUE8QAAAAAAAAAAAAAAAAAAAA+P/0BNNrMrpF+Z7gqnxPsNcT1BMsH1MrFxD6TU/QEdATLFpSe9ATbHqCeoJNTxAAAAAAAAAAAAB4TT9DWCuOVKe8qQAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOS0xMS0yOVQwODowOTozMSswMDowMOE+zPgAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTktMTEtMjlUMDg6MDk6MzErMDA6MDCQY3REAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAABJRU5ErkJggg=="

/***/ }),

/***/ "Sku3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const items = [{
  id: '1',
  title: 'kjglass 유사상표 주의 하여 주십시요',
  content: '안녕하십니까<br><br>광진이화학  (KJGLASS) 입니다.<br><br>저희 광진이화학은 초자실험기구 전문제작 업체로서 열심히 매진하고 있습니다.<br>그런데 40여년 넘게 한국의 가공전문으로 이어져온 저희 회사의 전통과 역사를 비슷한 상호로 (KJ***) 시장에 혼란을 초래 하고 있다고 하여 알려드리고자 합니다.<br>저희 광진이화학은 (KJGLASS)  오직 하나입니다.<br>비슷한 상호에 절대로 현혹되지 마시기 바랍니다.<br><br>감사합니다.'
}];
/* harmony default export */ __webpack_exports__["a"] = (items);

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

/***/ "lAor":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/cs_center-eedb032fdcd9d48349db6c7cb6c3f57b.png";

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