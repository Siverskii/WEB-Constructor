/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/app.vue":
/*!*********************!*\
  !*** ./app/app.vue ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_vue_vue_type_template_id_f4728ed6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.vue?vue&type=template&id=f4728ed6& */ "./app/app.vue?vue&type=template&id=f4728ed6&");
/* harmony import */ var _app_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.vue?vue&type=script&lang=js& */ "./app/app.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _app_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.vue?vue&type=style&index=0&lang=css& */ "./app/app.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _app_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _app_vue_vue_type_template_id_f4728ed6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _app_vue_vue_type_template_id_f4728ed6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "app/app.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./app/app.vue?vue&type=script&lang=js&":
/*!**********************************************!*\
  !*** ./app/app.vue?vue&type=script&lang=js& ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/babel-loader/lib??ref--0-0!../node_modules/vue-loader/lib??vue-loader-options!./app.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./app/app.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./app/app.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************!*\
  !*** ./app/app.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-style-loader!../node_modules/css-loader/dist/cjs.js!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib??vue-loader-options!./app.vue?vue&type=style&index=0&lang=css& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./app/app.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./app/app.vue?vue&type=template&id=f4728ed6&":
/*!****************************************************!*\
  !*** ./app/app.vue?vue&type=template&id=f4728ed6& ***!
  \****************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_template_id_f4728ed6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib??vue-loader-options!./app.vue?vue&type=template&id=f4728ed6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./app/app.vue?vue&type=template&id=f4728ed6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_template_id_f4728ed6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_template_id_f4728ed6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./app/assets/img sync recursive ^\\.\\/.*$":
/*!**************************************!*\
  !*** ./app/assets/img sync ^\.\/.*$ ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./pict.jpg": "./app/assets/img/pict.jpg"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./app/assets/img sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./app/assets/img/pict.jpg":
/*!*********************************!*\
  !*** ./app/assets/img/pict.jpg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gODUK/9sAQwAFAwQEBAMFBAQEBQUFBgcMCAcHBwcPCwsJDBEPEhIRDxERExYcFxMUGhURERghGBodHR8fHxMXIiQiHiQcHh8e/9sAQwEFBQUHBgcOCAgOHhQRFB4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4e/8AAEQgEOAeAAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A81ooor91Pigooo/ioAKdRQtABRRRQAUUUUAFFFH/AAKgB1FFFMAooopAFFFFAgoopaBhRRRQAUUUUAOooptADlooooELRRRUjCiiigAooooEFFFFIY6im06gQUUUUDCnU2nUCCiiloASiiigB61YhCbfu1VU1LHLtqJDLXlRn5t1QSJtqeOVfu0SJ/Eu2ojICntoqRqjqgCinU2gB1FFFABTqKKBSDbRRRQAUq7qZ/FT6AHqauWtzIF2q1UKerMtTKPMETp9PvpNm1n+7WhvaVf3jLXKQ3LJ/FtrRt7zMe1m+avPqUPeuaxkbUlszfMrfLUUMMqz7VX5lplndMzqrVdkmUN8u3c1Ye9H3TSJcjX5fm+WqdwHa4X721aga4lddqyfMtPt5JfvSVny8oFhmdfu1Jsd1VmpvnKrfMy1YaX5dq/xVPMURMkflfKqq9Q+az7Y3T7tSb/l27W3VBI8i/MtEYhKRYXai/d20MWlXazU2M7413bqtQxxqu6l8IFeNWRtu2rPkM6/N8tHypT1k+X73zVMpGkSxa2/kru3VJMN67dtRwyN91qk3KW+9WP2hkdujBdrVOx+Wmsdq1Fv3N8tHxFfCS7qfG/zbaYoytIyt/e20coyyzL/ABbaqXX3W203Lr96o5mk/wCA/wAVEYClLmM26Vmb5VqkzKvytWm23dtqpcQr95fvV1xkc0ijuUP8q/NT5p2KbWqGZMS/dpsny/LW3LzEDlPy1Vmdh97bUu6q9wNzbq1j8QDJmyvyr81ReU33t1EhaolkkP3t1axiSOYN/dqBmb+7U6yMvzU2Z9y/NVRIIo9o+9Qx3N96kZs1GxqgJFHzfN92iSmqaax/hoARjTKfTaYBRRRQAUUU7+GgAWhaKKAFpy02nUAOoptO/wB6kAtOptOoAKWkpaAHU5abTqBC7qetMpy1IEtPWot1PWkBOpqZXqqtSKakIlnf/tVYs5F3qtZ+6pY929amUeaJUTuNBkWF1ZW3blroYb7Y21mridHlaNfM/irVt7ttzMzV8ri8NzTkz1aNflidlb3O9aGfb81YFrqK/Iu75q0JLlWT5mrypUJRkd8akZEskzH5VahZHVVVWqksjbm+arSn5KJR5SuYfNeMsR/ibdUUkzRr5q/Nt/h/vVn3HmfaG2bmVqn86MQLHK3/AHzV+yM+Yj+3P+9llX5/4Upl9M0WnNOq7XdaSRYlVGRvm3bq2MI6KrRr8y1XNGNtA5eaJwsyy/Y2dm+d227a2vDelL9nSWTbuf8AvVNdaZKu5lVWVm/hWtjTbZoYE3t81dOJxf7rliZUMNyz5mNjg+z/ACxrVq3dd22nNu+6q/NT7eLH3q8mUj0IxLcaK6bmWsnUE27vLWtBrna22P7q1Qml3blWlS5uYmpL3TKkaXbtpJoW8pt33dtTMjF6S8P7hl+9XdHyOaUTnWvfKvNrfcWpbrWG+6vzLtqWOwV4GZoPnZvl3VS1DS5Yv9Wrfdr0oqjKXvHDL2sVoVPtjsWbd838NP0tGubrc7baoSRPG+1lb5av6HKkU7NKu7/Zrsqx5YNwOanL3veOh0/Q0a8WWT5v4ttaGrW8cdqyqtQ2d4rzqyt8jfep+oXeFZkXdXhylVlNcx6seSMNDl7yNt25t1WNLslmbezfLReXMDr833qdY3iJ/Ft216UnPk0OGPJGZoxxMkrbv+A/7NSwo7tu+Zgv3arf2irD7v3q2NL/AH1u33a82pzRV5HZTlGUrRMq6E8zbFWlsbOR23Mv3a2Fs1V91RzK1vL5Sbvn+bdWft/dsjb2XvXZSmdYp2jbd8vzVFb3MF9K9sy7mWmXyyJcM0m6s3S4m+3ysjMu75q3p0oyXMc8pyjOxk61Y/Zr913bg3zVUjHz/darmpJKL1o5N26o5lWGVdu77te7Tl7iieZU+I3vDtwyTqrL92uuj1KNUVa8+0uWRp/vfLWzG7L8zNXiYzCxlM9DDV5Ridha3iuvzVPJMv8ADXNabcyM+3cu2tKaZlibbXmSw3LI7o1uaJV1a52qzbttYMk7O25W3Ut9PLNO0S/NVfUH+zoiRKu7+KvXoUOWNjz6tXmLEc6/xt/wGqVxd7nZVj3Uy1V5dzf+hVp6XbQB2lnZWrfljDUw96ZTjMjIvy7d1Wbe98mdVqLVruLeq233VqnGk9w3yx1Xs+eN5EuXLL3Tq7jVF2rsZfu1Qur9ZV2/xVRjt5I4t0n3v96qUjSBtrVlSw0OhpOvPqaEdx8/3q1Y79UTazNXOxszfNt+Vanj824k27qupQi9zOnVl0Ols9Rllb5VZVqS6lnaJt+7bTNPheK3VWWnTNJL+6X5d38Vebyx5tD0I83L7wzT/nlVq3t+10Ws/S7b5Nqt/vf7VXpIZGfakbVz1pRkzanGXKbEbSOny/eqdbNd26RmZqNNtmhiXzG+ar22vJlLl2O6Mfd94rKip8qrT40YtTpPvVNap8u5qnmKHww1Y+zq33qfGqhad977tSUVJrSJF3bdzL93dUUa4qxcfKv+01V1NXHmkZyLcciqu2hpW/haq+6mTTYX71VGnzEylyj5psL96s26ufvNupLqbK/erKupvlbdJtX+9Xo0KByVqxDcX7Jc7laqF5es77lahruJdyIqszfxNWZcTKjMv8S17NGgux5lWr5l2zVrq6RW+6v3q7nS2gECqrfdrh9JuV27vlVv71btrNsXdF/F/FurnxtOUtC8JUjHU9CsZohCsatztp7b2b5ZOawtFmXYrNWu13bJ95vmr5+pT5ZHrRqc0S8B8v3qr3VwsRxmsK+1t9zCNtoWsK616QfcXd/tNWtLBTmYVcZCJ1V5qSxp8rfM1c1q19AYXdljk3f3a5++v55t0u/bWZ9olZfmZm/2a9jDZby6nk18w5tC1eTrJ91dtQRlqiXmpVr0+XljY8ipKUpXJ1LU/fUSmnrWUoiJd1I33aSndaQhi09adtpdv+zU8wjmvGXiJdH8q2gjSeab5drfdX/erzybxPqulak081oq277lRQu1t/8Ast96vVvE9tFdaLc2ry2sHmpt33H3V/2q8J+IFtPpiJbafqttKq7VRxu8xnb5mZWb7v8AwGumMv3N4ux2UKNKcddyx4w8YanP4XuGaCKPdI3my7VXav8ACrbvmZmrw6+1CW5dnkZVRv4v71XdQ1lhLdwaveXtyr7mZYpV+d1+6zblb5a5aNvtc6RbmVm+XdXzOOr+3+R69ClyxL90khRXitvk/haqKmKK4WWRVlZG/wBV/erZmjkgsfKklVm/9BrFuGghbdt3P/E1cFL3jpgF9M00vmOsca+i/wANVG+b5/4f4VpJn3t/dWhpWCsqtu/4DWxvyleR23t81LHE0nyq23/aohhaSUItdg3hVrPRpdXurqLyVXYuxWbc/wDc3fwt/wB9VrSpOrsNzjE49YWZGZnVVX/x6rFusCTbtzSf3R/tUSMsm1WZVVf4VWp7VtzrFBGsbM23zW/hrnkTKTHs0tpeKsvy7WVtyNXZW/xD1hNBl0WzQfv/AJZbl2Zp5V/us3+z/D/dp/jLwNa6H4XTU5dcsWndUZYUuVd2Vv8AZVflb/4lq4O12+UrM21Hbbu/iracJ4W0oy3MOSFVXNePUpUgmiZWZXTY26VlVf8Avn73+7WSskENwrPFHcou7crMy7/++a0YViaLbEv7pfvu33v+A1NquoeG28Kw2FnpksmrLM2+7l+RUi3fKqqv3mb+Jm/3VqKUpVPjZdMufD/TdGmlW51zULOC1lZkaNvmlVfvbl/9Br0oXHh6/wBOn0TwXFeMw2+bcSw7Jdv9yJV/vL96vEI5tsWxvu+legeEdevkMQ0y1eWGyVWWbasWx2/vbfmb+Lau6vXyrFTpT5InLi6cpe+met6P4cs9A0m4bxK1npsLKogtllZGVf73+1/wKpYfFdrZaNd6naPpi2MrfZ4JtR+Vfu/fVKyte1TxFpyLeeI/CumeLGuEULcyynbE7fdQfwr/ALtcDrmm+IvEtu0S+F7TT0iZVgW3Lqys38O1m+b+7/dWvsJ8yo6L/I8uhR5pc05FXxJ4w09NVi1a0tlk1BlaJl8390yf3tqbf++ayNQ1ObxRqtvCbidb1kWGd5bhm83+FVRV+6qr/DU03gjV4HuPIgsbl4GWKfD7tsrL9z5vlZlpWtvB0Wl2tq9nfafrNruW/a53PBK38Krt+Zf/ALGvmq1PEOcpzdrnrRjD7O51t54Q8DabpcTXOrob2zizPb26bnn/ANvc3y/L/s1x/iLxPocmnJY6LocEEyM269b77/8AAfurXG6k6revFFOs8SNtRl3bdv8As7qjuDE0rNBGyp/CrNurxsXX9raPY3hh7ayZHMzM/wB7czfxVY09JJbhLaLc0srKiKv8TN92q8e7+Jae0bKu7bXBI6H2OisdQ1PwpqV7pjRWUszq0E6+Wk+1v9lv73+0taF1omk6V9n/ALZ1iPdPGsrQ2i+a21v4Wb+Fq5KxS8R/tVossfkfN5yfLsb/AHv4a0dH0nU9d1hbO2aOW7n3OzzTqi/3mZmasp0qlSSszKcI8xZ0648OW2oy3Vyl5c2o3eVbo+x/9nc392m+JPEU+sNZbIPIhs4liRfNZ93+181Q3EMGmWpWSWyubt9y7E+fyv727+HdWPI+75VXy1/2a7HKcI+zuVGnGTuXtU1vU9R2JqGozzon3Fd22r/ur/DVGGC7ut32a3llC/eIXcq1FsV/vN92tWz1rVbfS/7MsJJILfzfNYwptdm/3vvVlD2cfiNPh2PWaKKK/bj5QKKdRQAUUUUAFFFH/AaACiiigAoo206gAooooAKKWigBKKWigAooooAKKKKACiiipAdQtFFABS0lLVCCiiipGFFFFAgoopV+7QAlFOptIAp1Np1AwooooAKdTactAB/wKjdRS/w0CEooooGFFFLUgO3Ntp8cjVFTqAJWO75qjooqQCinbaNtADadRhv7tH8VUAbqN1NooESbqKjp1SAU7dTaP4qAHbqXdSL92igB6mnxuyt8tRfw06kBs2t2rIvy/PVr7XlV3fw1z8crI25WrQt7lZU2t96uWdLqacxqq+75maiS6ZF+VvlrMjuVVtrN8tPaZT/F8tZeyDmL0N03ys3zVpx3ayRbl+Vlrn4ZIkdVZflrXmkgdFVGVWWs6tMcZFm1u5Hfay/8Cq7j5N3ytWVb+WnzNIu6p5JmVfMj+7WEo9jSMjQVlP3qfuxWOuosj7W205dTTdtqfZSD2hp/Nu3bvlp6nC7vvVmx3zSL8q1Yhl3r+8+WplTkVzGlGq+XuajzFD7las1r9YflVl21W/tFWlojSlIPaGxdXHy/LUEdy26qnnxS1E0i7vlaj2fQn2nvHQR3MW371SeYh/iWsO3O9fvfNVhmZF+ZqiVIr2si/JKobbUUjqV+9VTzVZPvU5ZVX7zUezDmEYr93dVebhqkkZW+7UDbv4quJMpFeT5furWfM7NLV+Z87lX+Gs9ljZ9275lrppiGyMyJu21Vab5anupsfLuqky5reMTOUh27duao2o6VHM3zVpGIC7vmp7Lmq+7FOV/71UQOw1NYf7NO82m7/wCKgBlFPU/NTWNMBlFFO6UANooooAKKKKAHUtItFAC0fw0UUAOX71Opq06gBVp1Np1IBaFpKX+GgAWnbqbRQBJSrTFp9SIetSLUS1KtAC05TTaKQEqmpVNV1qVTUga2lzMqsu6tL7SqRbd3zNXNxyMnzK1WGuM/erkqYbmkaxqcpu29yqSr/wChV0Ed5H5SKzbq4qMt8rNUjXMrNtV9tcFXAc8jop15QOukvlR12yLtp8etwb2j3cL/ABVxSzurbmbdSL5srbV3bWrL+zIfaL+tz6HXSavFtlkVtzfw1UsZnuH3zybUZvl+asLynh3LJ/DV3R5P36tIvyL821qJYKMIPlCNaUpe8ddawwLsZWX5fmqVtSgRGZvu/wCzXLXWqNNu2/L/ALP+zVWa8lEHlf3q4o5fKW5v9b5djvdNv1mTcqr97b8rVsQw723Sf981wGh6lFZoqL8zP97dXU2+rxyfJu+avMxeFnCWh30MTGUTbkCIm7buqm0yL95lrLuNTWJWZm2rXP32sea7Nt+Vamhgp1CquLhA7Ntr/daq8kSo2771cla66277zUX2u3Jl2xSfLW8cvq81jnljIcp1aiOVvm/homtkVNy/NXNWepz71WX+KtyO9XZtZttZzoTpyNIV4yFZFX5m+XbVe4ZXRlqvdXm92VWpPOjC/M1aRpyJlUiV/sUUsvzJVLVNOWF90HytUsl+sUrM7/7q7qqyawkvy7a7qca97nHOpStYmt2eONW3bf71V7y+Zm2Rt8tOW8Rl+9VG8njeXcq1vTpc0veiYzqe7oRyNuakUtQ33N1M3V28pgWYZm3bWbatbuk6hh9v3VWuZ3VJDcNF8y1zVsNGpE0pVpU5HcNqsX3quWssVyqybfmrz1buVm3bq6PwrcyTS/M3+ztrycTgfZQ5j0qGL9pLlOjuLVZV+ZVas64sPJ/eIn/fK10NuFZalkhVl+7XlRxMo+6ejKlGRwl1YrcSrKzbXX/x6sXWAv21l/iX71dxfWy2zyysv+7XH6lbSvO0/ls26vcwNbmZ5WKo8vwlG3kWJvl+9VhryQqqs1aGg6U0iPLOnyKvy1RurN4Z23J/F8tdvtKU5tHL7OpFXNnS5USDzPu1daZpvlVW2VX0vTp7iyX5du75a6C1sYoINu3dXjV6sIyPTo0pSjqYUdgr7pFj8r/aqKHRt8u+dvlX7tdBcfLFu+WsbUrlok3ebt/9lqqNWcvhJq04R1ZQ1ZGtm8uPbGjfxVk3Fyuzy4v++qbqU7zT7mfcv8NV41+dflr2aVC0fePKq1eaXul/T7Rpn3N92tbYsaqi/wDAqr2rsibvur/dqf5nfdH826uacpN6msOVR0L1vbfaNu5lVafJoUW7cq7mqK1SVPvN96rsMsrMvzNtWuOUpx2Z104xl8SK8fh/f/Csa1dsdNtrX5VXc1X4ZpZflVauWNkzP5ki7a5KuJny6yOmnQh0QyOFtn+rpq6c0z7mXbW1HCv3d1TxwrurzvrMonX7KJm2un7G+Wta3tlRfu1PHEo/hqSuedaUy4xjEZtxSM6r92iQ/NUVTGJQdWrQt1+RapQr81XY3okSTUM2KTdUFw+fu1MSiKZ8vTMrSSOtRs2a6YxMJSJd9ZmrXflr8rVbrC15/wB0zbvu12YanzTOetLliVLjVVRPvVmXF803yr8q1mzTM7/erX0+1Y6a07J8+75fl+9Xv+yhSjc8dVJVZWF8iO2i37tz7axLot577q6e4tmFl5rLtZVrmGDSs26tcJLmuzHFx5bInt3ZUVV/i+9XSaWUWL5nrntL2eeqsu6t3yY4m8xm+X+FajFdgoe7G50MN6whCRLtWqV9dSwrukn+Zqxpr9oU+98/92s+41KWZNrKtclLBOUrm1XGrlsaF1qGZWZmZqotc/Iyq3+1VdnXb8rVH1r0I0YxPOqVpSJWlY/xU5f9qottTQhfvUzm5ieNP++ae392mqaFrMsfGKnUVXkuIoEMs8ixov8AE3yr/wB9VHqV21vpc11Aqysib1X+9UWlKVhR97QuNUUdyr3TW0a+Yyrudlb7lcFpvxDjuRcFoFSJNy+a3yqrbf4t1V/hr4u0bdcwS6lHc3UrtLPcbl2bv7v/AMTTnS9nfneo5Rl2PUlpf4d1c9pvi3Rb+ze5s5/N2NtZPutWLH4ws9S1G5s2uV+VG2InzL8v95q5Z8sFebshRjKWxd8bXttf6RNZ20UdzLt6t93/AL6r5i8da5qEeoxRpFJFfLuVmZVZNrfKqru/9CrsviF4ws5EaJ5bmSZ2+WGGXbEq/wC0y/eZv9n5a8l1DU3v737TO0e/5UXd91FX7qqtZY/HUY0fYw1PZwlCUY+8Qwppn76XVUuZ5drKsULqiq/8LM21ty/7O3/gVVdNltoJfNbarfw/3qpag++dlVt3zfeWrlrHBZW63L/NK33Vr5ucuZHoyj7pY1Z1li+aT5mrKWzluFdo2XbFt3MzVZtys8srSrtT727+Krnhu60yDWYbnUI2ayhbe0Qi3+ay/dRl3L8rUqfYIuUEYF5brG7L5scm3+JPutTtPt55n3RL/s/d3bq0fGmuS+INXl1GWxtLFnVV8m2TZGu3/Zqn4b1G/s7p/sssiJKnlT7V6o33l/2a6JcsXob+9ycxY024bSL9L6BYJJom+RZl3bW/vbaNY1vUtTjjgup3kiRmZIV+VFb+Jtq/LuqTXEX7ZttoIo0ZdyrE+5V3fw7qTTEiGoxR3NrPKjNt8qFdzu391f8AeqPaS2M9NylZyyRyuyeXH8u1vl3Mq/7NaGm6HqGoQT3MUSwWcSs3my7lVtv8K/L8zVpahYS211m+tooHRF326Oqqi/w7m/ib/ZqaHxhdWthNpsEMT28rqyxbf9Uu3ayq3+1/FWsYwjK0xSnKWyOg+H/w1uvE9jeTlraUQQb8NKy4X7q/w/3v9pa82vI4rW8dIlRtjMtacfibVrSCazsb+ezt5S26G3k2rtb7y/7VZUfmPtZbaSREb5nVG3f8CauudWFSj7KEPmOlCcb85ueHdKuNXuImlikW0V1V9v8AH/sr/tf5+Wut8afDTU7XUHuJdMXToDCjxRRI2xF/vP8AMzf8C/irW+GXiWz0DS1uNQ8Jardwq3kW7/ZfNi81/wC993c391aoXXxc1uy8XXV/c2ct225lkt7x9q/3fmTb8u3+7/D92vTwccLhqN60L3OPnxEp+4jzTVrT+ztRmt0lWXY23zVDKrf7u6vbvgZeaVZ6RO1no8+r6hKuyOEwbvLb+J/4tzN8v8Py7a8Z8RavLreszandrGss7bmWJdqr/u12Xgz4qa14UVV0qC3gRG3JEqYj3bfvMv3m/wC+q4qVWjSxDlDY0xVOdSmox3Pc76Hw14V8Mahp+uRahc61KvnyNv3JabvmVlVm+X/vmvH7v4kROv2a1udQ0+3l3faGiVXdl/hRGb7v+01c7428ea14wCRXMS72dnd0Vmlndv7zf3f7q1xjFkbbIrbv4lrvxedyceWl11b/AMvIxw2A5Y+/uehW/juztba4+zab5Dbonii835WdfvO3y/eb/e3f3dtcXqWt6hdXN9OreRFft+/RPuN/31WhJoOq6StreSJYzPPa/akh3rKyo38TIv3W/i+b/ZrnJp5X+V23bW+Vf4a8iri61SFpyO+lShHYg2/P8tSqjFd1Irf3aXEsqbflVa8+R0SHb9zbVanwy+TKj/KzL8yq33auaHpbahdeQt1aWiKrO0txKqL8v+9/F/s13d34J0MaXpWp3niGCDRpG8qWZVVpVb+Lai/My7v71VGHNoZTqwjozlLPxFJHF5Fz+/hVmlit0VViWX+867fnX/ZrF1G/lubmeSVkJlbc5C7V/wCAr/DWh4i/sf7Y1tovmyWkXypNMu15f9pl/hrDaKplBR0TKhGO5JG/91d1LtbzPu0Rp5XzNT42XerN8y7vu1Mi5GlY2UElu8899BAq/dVlZmb/AL5Wum+HuuaRpUr3V9Es/kbdluy/LL/eWubvLtdSv/MtrO20+L5dsNvu2/8Aj1ddq3hPTNP8OW+oLqPmzXC7lCxOqq38S7mVVb/gNcGKhCovZz6nLVkup01OptFfvp86OoooqgChadRQAUUUVIBRRRtqhBRRR0oGFFFC0ALSUtFACUtFFABRRTqACiiigA202nUbakAopaKACiiigAooooAKKKKACinU2gB1N606ikAUU2igB1FFFABTqbTqACilpKBBS0UVIwoop1ABRRR/DQAUtJRQA/dT127vmqLdRuoAuR7dvy0rBW/u1S3VIsu2s+UCZo1prQ07f/EtOV6OaQiBo2FMqxvU1E3+zRGQDKKNtFUAL96nUUUALuopP4qVaACnqzBty0lFAE2/dTml+TbUC06s+UB8b/N81W455Pl2tVFasQnc22plEDQWXb8zVYju2ZPLVvlrNZ/l2rTo5mSsJUxl5m3fNtqNod77vu1H56s27b8tSb1b7rUfCBZt5Wi/2qc1xLv+Vqpb2T733acsyhvlqeQvmFmaUv8ANSKzK33qfJc702tHVf8A2laqjEg0FuWX7q/eqWO4Z2+7WXGzK3ytVqOVk+7Uypl8xeaZk+amSXMrLtZmqt9oZl+7UTOzNu3UvZhzGnC7D5t33qc0rbvlasvzmX5qPtLH71T7MOY1YZm37d3y1JcTKi1nK67VZWqeQs6btu6s5U/eLKsjyO7Mq7arMkq7mWre3a33qqXUjK+1WraPYgrSbv4qTzFVaZMzfxVXat4xIHs7M1Mam0VXKAUnNLRSATdRuooqgHrRupu6ipAdTaKKACiiigAooooAcopaRaXrQAlLRTttADloopaQDqKKKBBRS0UDBadTVp1Agp60lKtAD6kWolqVakBaKSikAu6nbqZRQBMpp6u1QqaetSBYjmkVdv8ADQsvzbqhpVNTyjJ/N3fLWpoLszMu3dtZW21jdK0dDufs1wz7l2su1qxr0+aDsaU5alzxA/79dq7VZaz45ZP4WqTVLtrmXczVXhZd3zLuqKVPlguYJS5pEqlt+6tK4RtiSKv8NZ+I0ZW+atbTUnu/lWJmX+9WNeXLqVCPNoJp9t5u5mb7tdhp9pBLZIyrtZf4qyNJtore42y/w/3vu11FubSRdqyqu3+Fa+fx1eUpaHq4WlGMdTlNWtLuW42qu7avy1iXUFzG7LKrLtr0i4tY9yyeZ8tZmrJbGJlkVd38NVhsfy8seUdXCx+K5wa7hRubzN1WtUiiidvLaqkOz7rNtr3IvmjzHky92Rq2t1u8rdt+Vqt6tJLE6vHJ8rViQlYp1bcrVqXlzAYvv1x1KVppm8anulRrmXdu3stV7jUZ2/dq7baqTP8AM1Rbq7I0I7mEqkiVnZ/vNTlNRU9a15REu6jdmmUUuQXMXvLXyNytuqq24VJb7y3lxru3Veh0qV3XzW21zSlGHxGkYylsZW6k31qahZRQwOq/eX+KsZq1pOM9UTOPLoSq7V2HhG5iSBf3fzfxNXEMa2vDuxZW3Mys1c+YUFOkbYSfJM9Jtbld33ty1c+0piuSjn+z7VVq1reXeisrfer5GrhuU+gp1eYsXUX2lNrfNup1rp0WzbJErL/tVas4fmXctaOFVa5p1pR0iaxj1MpbFHVlVdqfwrWfqGhR3Lpub5FrbmuYom2q3zVRkuGdvmXatVSqVY6oJRjImhSC2gWJdqqq1DcTRIn92oby4iRGb+7XF6xq88ruqttX+Gu3CYOdeRyYnExpRNfUNXiLMi/w/wDj1YGpXHnvtVv96s/fI7fM1SZ2r8tfRUcJGkeLVxMqm4MmPl/ipY/kO6k3U2unlObmLzXTSqu5VXb/AHauWMsgkVv4ayo60YZFXb8tYVKfu2RrGXU396lV/vNWnptsrbd38Vc/b3kCfe+Zq1tNv/3qqv3a8evSnGJ6VGrHmOnt444fmWpll+batV7dJbjbsWtK3sFRvmZq8OpJdT1Y+Q+GLPzNVuNFWhVVflo3qK5TYlpjPUDS1Gz5qoxJlIez03dUW6nbq2jEjmJlKrViN/mrPkl2fNUtrNmiVMOc0FNQzGmrIrfdamM6/e3VMaYSkMb71G2m+YrNtplxOsS/7VdMYy2MZSC4kjiRmkbbXG+Ir9ZN8cbVd1a/l3t8vy1y19K0srNXu5fhPe5pHlY3E+7yoiXl1rttN3iyiXbu21x2nxM8q7VrvNLtpUs0+X52rfMpRjY5svjIr6hOiWr71+UrXIyN5btt213eoaPJLtVvmrmtU01bRJpJUbP3V/2azwdaGxri6M9zGjk2PvVasreStL5jN8tUfut92pYUV2+b5Vr1JQieRzy+EszN5jNKzVXqeOBn3bV2qtRbamPKTMFXNWFiYLub7tPs4VZWZ1+X+GnXCsu1V+7USqe9YOX3eYYv92n+lMWpFrORBItEjYiZmbau37392m7a4j4gajqd7dN4b0Xat08TM80vCKu37zN/DtohDnka0Y80jzT4geMLm21y7sYGaV1lb7nzt8v+9/DUOh/E/U9N8LyxK3mXVwzIu5dyI395W/8AZa1tO+H1vPvudTRryGJ2VXlVmivZf4FRPvMq/e3NUN14C8X+JtXt3/sq00ax2rE8srK21U+VdqL/ALP3ac6NSV5c1j0uXD79jzzUn+0JNcwTrcyy7Wnlm3J8/wDEqr/FTdF03UF01rxVu9iKzO2xtkSL/eb7te2S/DPQdGspYNU1S6ubF5Va3tk+WeVlX7rP95v937tcN4y1V4dG/wCEatdFfS7be0qaeq7PN/uvKzfermngVJe0lK5vCtTm7I4vw34hltrqWVZ1i+RnV2+Xa235az4fEWpW915sjNtZdrKjffX/AGqpalZ3Nsn7yLcrfM6q3yrWLdOsTsqSqzfxba+XxDlO8JnRGjH7Jsaxcy3T7mlZty7q5y4dFb7/AM1XvN8xVaRWkVfv/Nt3f7NU5ka5vGaCCONP4VVvlX/gTVhTjyxNqceXcVVbb9pWBpYkZVZtvy7m+6tDTMWaST7zfdX+7U6232WLzWVWdvl//Zqaz02X5LmdV2N8yL/eolOMQlOIyFFVBPO33l+4tF5NE0H7tfL21NqU1tuVW/h/u/w1jXTtK37tWVP9qpj72oQjzayIptxb5m+9V2xtp5LLcm5UZ9v3l2090jewt7aK1iWUM26bc25923arbvlXb/s/3qr2I8m5JaVVK8VrL4TSUrx0NCa3S1i8zzFkf+7uqlDeNDOLnzJY5kbdE6N9xqfcRybPN2bVZv4v4qpyfeqYR5Qpx7lm81HUNSllutQupZ5Z33M0rbtzVraTpsGqX+2BbS2Vk3bZZ9qL/tMzVzkj7sLt2qtaFm3lxeZKm5v4W/u1TfVlTjpobn/CPRtrMVjFeWzh0y80KsqL838LPt3f8Br0HWPDeoQ+HNKtrnV5Y7e6XZZ2lsqL5u1vl+RPvOzV51YzNZtaaw2oRTyo/wDx7FWZ1Vf4mb+Guy0m21PxLrlp/acX2HdGq2aKrKzr/e+X5q9fA1Ya6HFXlKOt9Dpbbw3a6peaZoei6z4lvvsUr77eZniW3lVfm2K33fm/irkPip8P30TWXaxaS7i2ebcMG3eQzfeVm/vV6ndaVF4b0+3X7Pd21xPF8thaSsst1t+6rN/Atanhvwig8D3t9quh/Y5YHd1iuF3wRbvu7V/jb/a/2q+klRpfV7VLWf8AVzgpYmfMfN02hSxeHoJ1+wtLdS7okWffc7Pu/Mi/dX/eqbVP7F0yzl0+DTJ3uZVT/TLiX7i/xbVX5a9Jtde0/RNDex0zSbFdYnb7Pcy7vKd13fc2fd2/N8zL/wCy1X8SeGFi8P3viPX/ABNpEuq29ssMGmQqreQv3VXav93dXgSpYWMbU56noU6vM7M8cuttvdMttc+Yqt8sq/Luqvje3zPtrqPh74PufFviO305W8iJ23S3DruWCJV3O7f3tqqzf8Bq38UvBkXhbV7e00y5nu7S6tYrqJ5oNkqK67lVlVmXdt+b5Wb5WWvBlL3j0eX3TifMZM/M26rENoyRrPeQXMcLq2x1T5Xb/eatbw3YCDV7ee+0eTUIUkVmt2ZlWVf7rMvzV2/iXQPG2u+MtM8K6ppVzoiXEqJpmnXCvFFbpI+1du/5tu5fmb+8rfxVpGcOV3JcneyR5motvsu7dIs277u35dtQ+cu5V2s1dn46+HOr+GzHLE8eo2UsHnpd2iu0RTeybvnVWX51ZfmVa4qOCfftWNpG9qx5oyKjEeqs7fKrbv7q1dhtL57aWVfNVIvvVo+FIJf7YtVnuJNMRX+a5VfnX/d/2q9x+MGjNpfwphudN0i00/R32pE8t4s91O+5tztt+XbWtGnOtPlgc06nLPkPmpm+barfKtaHh+2W/wBSSJtqxbvnZm2qq/71ZrbEZlZvmr1H4R6Ump2ptLXTF1S+XdPBDb2yyuzfdXzWb7qLu3VcKHtZcl7XNMRONKHMaN14T8OXFk93p6tcrbp/HOiK+1f7v3q8mVVi1HypYm2K/wAyr97bX1/a/Dm4eySznt4raZrbfqmoxRJKu/8A557m+7/7LXy38SND/wCEc8XXthbXS3KQS7VmRty/99VpSyivCjN810jmwuJVXQnvLjSZLhE0rSJbT5/l3ys7v93au3/P3q1Joby9e3s7me5jhRtkS3fyLE275lX+6u6n6T4n0GLwpby3lj/aXiG3lVbNGiVYIk/vOq/fb/eqxb6roOrRS6h4y/tKS9RWEVvaIsUTf3fu/d+auONGNvcuwlF9TqKKdTa/bjxB1Np1FUQNp1FC0AH8NFFFSAUu6kpaoApP9mlooASlpKP4qAFoop22gBtO/hptOqQG0fxU6iqAKKKKkA20UUUALRRRQAUf8BoooEOooopDD+GiiigQ6m0UUDCinUUANpv/AAKpNtNoEFG2nUUDCiiloAP4aKFp22gQ2nU3bTqBhtp9NpympAbto21ahRWbd96i6T5ty1PN7wFTbRT2RhTaoBKKKWgBKWikqRCqW/vU7fTKWqCRKrrTtq/3qgp26pAm2fu/vVHS7qTbQA2jdRTlFABSrSbaFoAeppVplOU0gLEMf+1RcKit8tN3Ky/LTGqAG05WxTaKsCfzG/vU3ef71MoqAJo5VX+JqsLIpqnSqaJRAtb938VPXbVTdT43w3zUuUC3GGd9rVdaGDZ8v3qoxz/LtWhZm+9WcoyAmZlib71G/P3W21VaX+9TFkb+9VezDmL6t83zNQzxfd3bap76N1HswLDOv8LbqZub+JqiU07dU8oFuEsqfK1W4brb8r/99Vl52r8tGWrOVPmK5jTmXc25Gqp5LM7b/wDvqoPMfb95qJLiTb96jkkHMMvEVflX5qqVMzMfvUxhWkfdERUlK1JViCjdRRQMKKKKACim06gApaSigBaKKKkAo/iop1ACrTlpqipKADbRS0UCCijbRQMKdRQtIQtFFFAxy06mrT9tAgpy0Uq0AFO3U2ipJHbqdUdO3UAOopu6igodT1plPWkSS7qKbQtBXMS0u75aSOlbigA3VJCW3VFT4zht26olEZbj+aXbJ8tX4dVntlaOJtqfdWqWVfa26opAyfermlTjP4jSMuXYux6jd/M3mt81Ph1O5iPyytVSNVS3Z2+81V99T9XhL7I/aSidjo+tS3K+VJI2/wD2mqvql9JNeeW0vyLWBYzNFOGVvmp91KzfxfNu+auOOAjGrdG/t5ShYLib52XduqLKu3y1Axp0bfNur0PZ8sTm5i0u1W27qfeSxqiRqzMzfM1VGfd/FTd25vvVPsdbj5hy81IybVXcu3dTI/lbdU80jSNuaiQiNRUqimLT6A5hKFFL/DRSA1LWZbdFZI1/3qkutSYoqr97+Jqyt7fLSbs1yfVlKXMy/aS2LM00jp8zNVNtv8NP3ZpjCumnT5RSlzD7OxnuZVjiTdu/i/hrprXRlsXSWeddy/NtWsbR5J4J1dVbanzfN92tO4nlu381lVq8zGSqynyxeh1UOSKu1qdDZxRXC/Mu6texjii+6tcvo+oskuzym2t97b/DXQrIsS7l/ir57EwlGVj2KE1KNzYj+X5lqffuWqFi7PFuarG+vLlT946oyKl1DsdpWZfmrKvNSghTbvVal16+YKVi2ttrhNSuHedldq9nAYKVXc83F4v2fwl3VtVkuZPIg3Ku7+996sy6jlTa0rfM1QbtrfLTmmZlXczNtr6ajQjS0R41SpKpqw+6lCvims7Gmbq15TEl3Zp61DuqSOjlFzE68VNG+3+Kq6mnqajlK5iwrNurpPDdlPdXCL8237zN/dqLw3pH2jZLLG27d93/AGa9BsbSC2T93Gqt/er57NMfGHuQ3PXwOD5vfmXbG3WNFjX+GrTMoWoI3VVqOabc1fMcspSPd5oxJGlqFpaiZ6Yz1rGmZSqErPTGeoJJaYr1vGmZ8xaV6fuXbUEKs9StErLtajlEVrqX5tq/NVizV3X5m2rTY7ZR975qc0vlfKq1p8WiF5smUKnyrVW6m2feaiS5VFZmase4vFd9zNuWtaVGUjKrWjE1I7haik3TNuVt1VIbiOVtq1oWMqbtrLtX+9W8qfKZxlzGBqkMvm7Vbdu/2aI/Dkl1skZvL/vV0F8lsJ1ZmVlX5qu6buuX3Ku1f7tb/XJ04aGX1aEp6mPY6CkEvyx7lWuu0XTlaIO6/wDAauW9nENq/wAVakMaou1a8jE4yVQ7qWGjT2KX2NP7tYmt6ba7He5+b2rqm27WrmvEkn3vl3fLWWGnJzKr8sYnC6hY2sj/AOjW3/Avu1DJYIqL8yR7W+X/AGqlvLlVf5m/3dtM/g8//a+Wvp4ynGO583U5ZSKsiujPEq7v9qooYIj/AK1vmrQullfbL92qMcTJLuat4y5onJP3TotP0RXt1lZtqferL1q3iSX5G/4DW5Y37JZbJ5PlX7q/3ax9Wu4Jn2ov3f4q4aEqsqvvHTX5PZGQq4p60jCha9I8slWq0dhBulknRZZZdrOxX7237tWVp61N3EqILS/7TUVj+Lr6Wz0S4a2gnluNjbfKX7v+9UXNKcJVJcpznibWNB0h7rxDq9z5l6i+VYQsu7yl+78v+03zfN/drye88d/6K93c23mXUt+u1VZU3rtZV/h/h/2q5Txtd6uuot9sl2y+VvWJ3+5/wH+9XE6heSzSxIzsypt3K7fxV4FXH4j2jX2T3aOEidZ4s1W5mv7q5uUkZpfvfd+X+791VWuU+zLJA1zu2s38O2tuzSItcSSySyzbV2om5tzfxf8AAVX/AGqx9Y1BnnmSCLy4nbd5S/w/7NebKUpS5mdUYyjsQyWkXlqqszPt/vfLWezyhtrbV21Mpkd1jjZmZvvVDdL83lMzMzNVGkfMfaytM6yPIyxbtrMa07jUYxAyxbo0X5d275mqpeJFZ2aJ5TM//jtZ2/7RLulbb/wGp5Yy1DljPUk3yzSszLupkjyv8zfw/d2rUn2yJFaKNfl/9Cq9oMljFcfadTtZblEdWW3V9m7/AHm2t8tM0GafaXmpsirHOwdvKTyYt25/4UrYh8I3OhNbXfiuyu7GzeXYzIqtL8v3lVd33q0fBvivTtC1eC5/sqNsSs7Lu+Rf7uz/AGl+7SeOri51DVZda1CLat42+CL7Qsu1f+AtXZKNGNG63OaVSXNy20OX16W1m1GafT7aeKyZv3CTPudV/wBpl/irIk+f5q1W1GeNbhIvLVZ12MrIrfL/ALO77tY7Fq5vi1OqnE1tLsFZ13r5sz/6qJPm+b/arvLzw3p8Gho09tJPqEq7Ei2uu1/l+ZV+X+9t+bd92uJ8F6l/ZOu218zKqq2GLLu2q33vl/ir3rxl8QNPh1axe2tra+tUi/f/ACsz+VtXbsZ1X/Z+Va9fLI4fllOqcdedWM7I8cuPDmoWGrtpFzYStNB/rzF86orfxV0syXgutJitlt7vylV7ZIovmnRf77feb/vqulvH86W6u3ktltLyPcjs/lbVZfmT+86/981d0vXtBuXh0+ztdJsbizgZPtr79uxv4l+b5m/2flrz8TmGEw0J+x1DllU3PQ/hR/ZWh2CeIdViubvWlj2yPcTtK27+FV3fd/3fu1B8QvFfibxFbS39tHBptkkrLGl9Kyu7fwsqrXnlv4pWDUbpbZZNUtbWf79tE22X5v4vm+Vf+BU/UIrzxbrP27zZ4IGbbvmbYu7+FEXd92vkK+b4yuuWpK39bBSwkY3a3OJ8TWKC8SXXrmWKVlbz1hi+4v8ADt3fe3VjabbT6nf2+i6fcrJazzqiovytKzN8u5f4qufEDU7aG8vdIfbeOjKv2jc3yt/drlrHVZbDUba8sd8D27KyNv3MrL/FXpYJVOTmZvTpvm1PrOHR7HQfBd3p+g+RaNcX39hWHlQRNLev9y5nd2Rn2NvZVVWXbuVf4vm1vEUPhy58SeJrYaVaXmn6Hp73Eks0Cs086bEgiVvvKqbGRtrfNtevHrX42Wbvtn8PaXIHZZ53he4RvN37/wB02/8AdfP83ybVZv8AgO1t98drWZGifwnpTReQlvsSW4iR4EbcqOqS/Ptb5tzfN/eZq6PtHb7WHwnt2m6VJapaz3MWhWy2ekwahOj6cmyzuGaV/urt+ZlRty/7K/L92sTT9CjlutJ1+8iu5Lvw3qc9p9k8h5Zbh0l+0IrKisquzSsrfw/LXjg+PVz/AGvvfTY10xkZJ7VbmVpJflVVZpXZm3LsTb/Cqrt27d1c944+MeparOI9GNzpthvldoknZnleRlZ3lf8AjZtq7v4flX5avkky7xPoe+knh8Nz+E4bm7tnsPDc/wBpdoGRVup98svnbtrbVi3xKzfdaVf71eefB3wiltollc/2LZXuoa3qqWlr9utt8aRKjM77f950bcv8KstcBqXxkvNU8HjQZbCOK4l+zx3d2srfv0gV1iXZ/Cyq7bm/i2r8u75q7Kz+P98rWVzBpdlBqFoXliuJmllW3LqivsXdtVXVEXZt2qu7b96hxkTKUY7nqGm2UWqalaxXemaJd6fdeIm0+Jm0m3WW4s03NK7MqfLtTbtZNrbmb5vlVaLPRNMutJvtPXSlXwvZvdW7vLYI7OqIyI6ysu953nZdqIyqm1V/i+by+D44uunQFvD1tbLpaXCaSlvdtGsDTowl3797S7t277ysrfdasm9+Pmq/2a8NnpVjb3ryvcfaVaUqs7LhpViZ9iv/ALW35W3Mu1qFGQc8ZHGfEzwpp2l+Pb3RdFkuLmKCRUdjtfymbarqzL8rbX3Lu+Xdtq7dXOg+F9e/s/Q7fUL65WJYmdp2iHn/AO6n3l/2a53SdTvrprq1S5aKXUdqyytLtXarbtrV2nhTwrP9siuVWXUrZy6PfW9szxRMyt/GzL8y/wB7+H/ar1cBTqy0itTzMTVj8MzpdS+Muo2HgaLwXHpS21xbt/pU25v3rfxIy/8A2VeV+MNf/ti1ZJ7GOB2l83bEmxF+X+7UvjDT7OwvHgttVl1e7G5rmaLd5aPu/vt9/wD3q5y+n81EVVk37fn3Nu3N/s0YivWoy9lfQnD0IQtJB4bvFsNat7ma1a5iRtzxBtu9f7u6up8ZeJr7WNBsrF7Oxs7G3lfyEiVfN+b+838VYzSJpOhzaffaDLDqd0ySxXczMjJBt+6qbfm3fe3Vi7lZfvVw804SvHQ65QUpXPbabT6Sv2w+bCilpGoICiiloAKTmlooAKKdRQA2iiiqAKKdTakB1FFFADadRRQAUUbaKADbRS0UAFJS0UAJ/wABpaSigBaKKKQBTqKKACinULQAUUUUAFFFFABRRQtAhaKKKkYlLTttG2qENWn0m2lUUAFO202nLQAbabUlNapGKrMPu07zWb7zUym1IiVmzTGFFN3VQxKWihqACkooqQClpKWgQUUUUAOWnq/+zTKP4qAHMaKKbQA+imU6gBaKKKAHqadTKWkAbaKdRQAU6m06gApaSloAKdRQooJHq2Kdupq06gBtOo20u2gA3Ui0/bS7agBlOqVYJWZVWNvmrch8Jag8CyNtXcu7bWM8RSpfHI2p0Kk9onObtrUb2Vq0tQ0e+s/9fAy1m7KqNSNSPNEznGUdGO8xqZuzSsKTbQAMaj3VJtqNhtagBGplPptAxKKWkqgCm06igBtOo2/NRQAUUUtABRTqNtSAUtCinUAFOptOWgBaKKdSAKWiigA20UUbaBBTqKctACqKdtoUUtSAm2lWnU6gnmI2pKftooAZS7qKSgoWiinLQSC09aSloKH7qFpKVaRJJS7qZTqYC0bqShqCh6uw/iqXzPus3zbaq0/dU8ocxbmnV12x/KtQ0ynrUxjyhzE0bMPmVqGLUyjdSGOoWm05aBC05RTakoKjIVW2/ep26mbqWOp5QkTrRupu6is+UOYf1pNtPh3eYu371WbyBodu77zVEpRjKxXKVKdRSxrmmA63hkmlWKNdzt8tdVpugRQp5lyqyS/+g1Q8P2En2pJ2+Xb92u4sbVm27lr5/M8dKMuWEtD1cDhoy96RjR6It4rJ91f9n+KtC38JwLt3blrqLe2VV+VVqx5VfO1Myq7Jnrxw0OxzcehxQtuijXd/eqwulyN8sn3a3NlRyNtWub6zORp7OJRjtmjTav3ao6tMttbs38TVcuLxQ21a57Xr9Ht3XdueunDUpVJ6mFapGMTmtS1P5nT+KsKZ2Lbmp98372qzFq+5w1CNOOh8zUqSlLUVjRuplC108plzD6FoWnUuUnmBafupKWp5QJVNWrOFpJV+7tqrGua07FfmVY/m3Vz1pcsSqceaR2Gg38UTrFtZv4V211SzMwWud8P2C20HmyKu9q1/O/hr4zFRVSp7h9Lh7xhqXvM96bvqos3zUSXKrXPGiae0iWJJVVayrzUVWTy1apLy5xbs61zsiy3EvzSba7sNhoy1kYV6vY0LjWlDbF+9U1nftLOq/wB7/ZrPtbOzDqzNuf8Au1sae9tG+1UVfmroqRhGPuoyp3lLVm7ZhhF8y09mXdtqi1/G21d1PWdW+da832cup2e0iWpH2J8tYWsagttu2t89aFxcq38Vcb4gmZ59u7ctehgcNzz1OTF1+WHuhNqssm7a3zUy3nZ23PJ8tUY4mddyrSsjL975dte5GhCPuxPH9rLeR0VvewJFubav+1Vi1vlnlRV+5/erlGkZvvNV3SZpfNWOJaxqYOMY8xrHF80uU7SGFZHVd3+7W5pcX2Z/lSua015UZVb/AL6roYbmKGD/AFm5v9qvExMZfCerSlHc2lvY0dV3KrbfmqRtWj6Ky8Vw2qarGu7yn2v/AHqpWuqMyMq/8Cas45bzR5iKmPjGXKdrqWvMkRVeprmdS1Ge6VU3N833qz/7QjKsrL/wKn27xHaz/KlddLCRpdDiq4p1Oo1tOjX5m+bd/eqvqEiwIsEaq1WL7U4hFtiVX/2v7tYk1w8zbmrto05y1mcVWrGOiLHnOy+XuqeFo1+ZmrPVmWpt1bygcvtCxcXDP8q/KtV9tOWhm/u0RjymcpcxE26lWhqctMzHLSrQorC17xGmlXv2We2aSF0+WVG+bdRFOWxcY8w/UPEdtBcS2tqjT3EDbXXayqv/AALbXjnxW8a6rc6zFY6ZeNDE+3csUu5U+bbu+WrHjD4harpbW+nQOsk91EzM0Xy72b+838X+7UvhmHRvBr2+r659ku9QlVnlZ2Xy0b/2Vv8AarKvVpR9w9KjS9lHntqef+LvDF9HZ/bL62vorr+K4uYmVNjfMi/N8277zfdrmfC/9mLftbNA13fNO2x2X5Nm3+FfvM26uz+Knjm68Ty3WV3RXH/HqiszN8rbV2r/AN9VzPhnSbuwspb5omXc+xrvZ80TbW+RP9pv4q8DF8l70j16cnye8PjmntoNkC+Vao7ssr7d77vvbf4v/Ha52ZFu5WdWVU/9Crqtc0SW00j+2rx2jspW8iJmbbI7LXJRyKq+RE6qzrudm/hWvOlGUfeJ+LVFSZmZ9kCs396qFw0nm7V2/K3y7a1fJ3RbVddm75mX+KtWHRPJW4aC1vZJktll3Kisq7v7/wDdXbV0veNYy5TBZmmgXz93/fXzVQhlRfNVoFkXayrub7rf3qtXUsYLruXczbm20/R7WOe6iluYP9B3bNzvsRm/2mqo0zSJm6fFJLdIqLudm+Va9A8N+Fo7+6la+vvs1rbr52oyq6/uE/2fm+Zq5zTYbRnllg+W783dFCE/dKn95manalayJL5rNuX7zbawrxfNoyZyvKxLHpqX+qXd1pVjctY26tL8/wAzJEvyqzt/3z/31VBt13LtieOJU+9ubb/3zV+3lvvs8sCSSQWr7VkVW+V/7u6qF48FvE9tEzSSs33ttEdXcmMveKkdtHLeJBLcxQbm2tLLu2p/vbdzVXW33zhFVpFLbV2L8zVLbw7ZdrqzM392u0+Hmn2f237feWclyyLviRl/dK275dzfxbv9mu7DUJV52RVWt7KPMZGn6bpFlpV3c61LcrdNEp0yKHayStu+Znb7qr/7NWroOtaK32e41CW5udRWVUjE0u2JEXbt3fLXoPxP8NNpnhj7H5Hk2V5P9oSZESKJXZmO35vlVPm/h+atr4T/AA+8N6R4QTxX4hs4dRFxG0tnDKn31+7/AJ/3q9LF5NKTUVpBnLPFQcE97mPqVzot5ZStr3iexiV2/wBFsrHY7I/952/u/wAPy15xrzWL3TLDqCtbpt+59/8A3VWtrxtLpms61MNM0CKxtZW3JKIGVvl/hVv7tcJqltHYTskU8jS/+OrXgYnB0qU/Z0tkdNL4T0Hwj4jXQbNo7y8jjsVX5LSJNs8q/wB5m27W/wCBNVjxp8SbTVrVNP0zSo2bduVmRvMX/vn+KvJ12sj+e8qtt/dfL8rNUmk6jfaZdfarG5lgm2svmxNtba1eVLKqUqvtup0RvY6PxZrct1AumNpFtaIiqsSKnzr/AHmdvvMzN/erlGSRZfLkVlZf4WWp47udZZW+0tG0/wAsr/e3K1QtGyuzSN92vQpUlSjZCjHlJoYZFX5nWNW/2qqXTbG2q26rEKS3P7uKPcy/NVdY3SdvNVdy/Lhv4a0iOPxajLWLzPvL8zNWxCltBbtFJFHhvm37dzrVW1iZl/dx7m/h210PinSorG13RRQb0gRZPKn81S7LuZty/Krfw7f4amUuaViJy5pcpzNurPP+7VWXdXT+Gf7Hs4tQu9Tiae4WPbYRK+1Vlb+Jl2/Mq/3flqDT9BtV8PPqcuoQJcqqulvvVmfc+3b8v8X3m2/3a1/iRpS2L2mpwahFqEN5ErebFB5SK6/eRV/2f9mtYcz95GVSam+RGD4iutKub157PT2tE2qvlefv+b+Jt21fvVm+Hbizh1y1l1K2ae0WVWliDfeX+7VS4kf5vkak02Bbm/htnm8pJHVWlZd23/aqoyb1ZvGEYwset+Ftf8L2mrrFb+A4tXuXl3q32ptir/uqrbdvy/3vu13PjmLxDN4KuHm8Suugo6v/AGLpMCrFEjfN8ztt/wC+mrgND+H1t4h157PwpqF81pZKv2+5u9kLMzNtbYqn5V/3qy/GGgwaVr+q6T9uu7a1g/491d2m+0Mv+0vy/wDAvu19Ng4YmNJ1NJpanlSVLn0Zg60mnvqUq6At39iK7/Klb5lX+Ld/erFuJ5Z9saqqqv3Qq1p3NvqFhbtA8TRJOqt8y7WZf9n/AGa92/Z58C21roF74p8T6VZ/ZH2rbPfS+U397cn96vJp4Wder+9jY6J4iFKN9z591J9Vv7zzdRluZ7jaqbptzMqqvyr83+zVZofJby5VZW216F4p18J8QNQ1PToni3b4rdLZf4W+X71cPeWF4Zd08EsX++rfLTzbLvqld0oa2t/XyN6VXm3PXqSl20V+snz4UUUUEBSUtFABRTttFAAtFFFABRRRQAU2nUUAFFLSUAHFLRRQAUUUUAFFFFIA20U6m0wCjbTqKQBRTlqSNFf7zUAQ0VLIiq3ytTKXMIVVzTmjYUqqu2rFu6/dalKQyntpauybW+X71QtC38P3aXMBFtb+Gm7D/drVtbZZYvnXbt/ipiwsr/3lqPaD5TN20laNxbxBPlqkwx95a0jLmEMUVPGm6ouas2rKrrUykAn2aT+7RJbug3MtasPlv91l+Wpvs8ki7VrD25XKc/tpyitmHR5Zn27dtW28L3O3dE25qcsXSjux+ylI5zZSMK3ptBu4V/eR7qqTaVOg3Ku6qjiKctpB7ORmU2rv2OdvuxNVeRGRtrKy1pGUSCKm/wDAako21QiPbRUm2hkb+JakZHupKVqSgBtO/hooqgClooqRBRRRQA6m0U6gAooooAKdTadQAu6ikpaCQp1Np1IoWnU2nUAFOptOoAKWk/4DS0AOpaSlWgB1Oop6igkbtqxb20sz7YkaRv8AZWtLQdFl1GVf4Vr03wn4ZitEbcqs1eRmGbUsLHzO/CYGdf3nsef2PhLUrlk2rt3fe+X7tdNa/D1VlVnlaTb95a9KtbOKFNqrVtY1/u18jieIsRU+HQ9unl1GHQ4zTfCqpLvnRfl+4v8AdWukh06KODbt+6taWxafhWWvGr42rV+KR2Rpxp6ROa1KzguIHVolb+78tcCvhSJ9SllnX5d33Nvy16xcW0Z/hrPmigX5V27q7cHmVShFqBjVw9OerPMtY0e2SJ4La2+bb96uUvNNe2Tc3y7v4a9ivrOJldlVd9cnqVpBcy+RLHuXd/DX0OBzSX2jysThI/ZPO/IkZ9qruLf3a1rHw9LcJulby/7q13VnounWy7ool3/3qp64sltbt5Ue6u2WZ+1lyQMo4OMI80zzzUrCSzl8uRlb/dqk1XLx3M7tJ95qptXs0+bl1PNl8QjU1qdTasQUbaFp1UA2kp9NqQCnLTadtqgClop1SAUUUNQIKdTaKBj/AOKnU1adQIWjbQtOpAC07bQtLQAbaNtOWloARaWkpaCQpy02nf7VHKAbqbQ1JQAZ/vUUbaXbQUJSrRtpyigkctLQtOUVIBT9tNUVJtoAbTqKKAGsabuoakpAPU06o1qVaUShyj5aeopq1KtMAWnUUVJIUq0LTqCgoop1ADactNooAfUqmolpy1nKIFi3kaKVXVtrLWrfXMV1artb51rHU09W/u1hOlGUuYuM+XQXbUtvtDq1J975ttTRx/KrbqmcvdHE6LR7xXdVaPaq12On3sWz722vOtPZhLtTd81dfptpuRWkavl8ww0OY9nBVXynYW86lFarCyqf4qwoZm+VUqZrlk214MqB6kapqTSqtZt5cbmZVaql1esy7V3VV+0LsZt3zVrRw3LqzOVXmIdUZl/5abUrldYv444vKiX738X8Va+uTM1uzRt8y1xd1KzuzNX0mW4Tm95nj4yvJe6ivMzO25qZT25pK+iieVzBto20q07bQEhvWnUbadUkgtPUU2nLQUPjrQ0+VknVlb7v3az6fG7Bty1lUp80bBGXLI7+11VRbqrMtSW98zuzK1cJDPIG+9V5bySNf9ZXiVMttsd0cZI7Fr75vlaqd1es/wAqNXPf2lJ5G3+Kqslw6N8zNuohl5UsZ2OlvL9okWNn3bfvbaxbzUmd90DbV/8AQqzpLuR0ZWqKM13UsDGG5zVcTKRtw6w6Jt8v5v71aem3jTNuZvlrlFNXbO8eH5f4aVXBRkvdJpYmUZanS3l7HG25W3VNa6ozqtcv9pd22t81WvmT725d1c8sHHltI2+tylK6N3Ur5tm1W27v4aw5jI7rvo8xd3ztuoabc+5flX+7W9Kj7PYirV9oa9nJBbW+913Pt+VaxbydpHZvu/7NacjRPYbm+Vqxm+9WmGguZsyryfKkG+tjQ7mOHdu/i/irC3VNDMyL8tdFWl7SNjCnV5JXOvk1KKNdyvuqpcazvb70m2sNZFK/xM1J/FXFHBwibTxc/sluS4aZ93zVNbs20qrVTUVJG2KuVP3Tm5ve5pF1ZVbarN92iab5fLV9y1UY0bqj2ZXtJEtC0yn7qoyH09aiU1P/AA1nIBaKRd1Kq5qSB1OUUKKVdv8AE21f4mqWWcr8StWvNH0hJbO5WBmbrt+Zv9nd/DXkGn23izxdLFHo2nyxWrbla7ZtqN83z/N93d/u/NXUatpGoeM/EzrBtnit7xll819yqi7dvy/d2/M3y13/AImjvLTQ4tA0ODzbuaLZuRV2ov8Aeb+FVraVO3LB/wBep2wnGlaC3PC/ido+n6abWLSdVu9SuopfKWV/9Yjr951b+7UGl+BdfeyuNa8QPerZWsDXDLdvuZ/7uxG/i/3ql8ZaZqulahBpVssbXULu73CQLudmbd8q7f8A0KtP4jajqf8AYP7i52+R8j/eVm/h3fN8vzL/AHVWuerShdya2PSjKeiR5t4V+16z4tS205Y40dfKj+Vvk/3d33Wr3NdB0bTrPTtBl+06pdqzyzwqrbWf/Z/ibarNXL/AO00WzmlvLy1bzURnf5Gd0T+8m3+Jv/HV3V32kzRSeIZry1doomXYkI3blRvmdndvu7V/h/irmwtCE4c/LucuIxMudtdDz/40eA4rCwm1lbyPbsV1t/u7P9lf71eHw2159odWikZdu51/2a+vL/wY3jLV5b7XZJ4NOgXbBD93d/3191dteXeLNAXU/Efl+HdM8rSdDi2y7Ny+azfNuldf/QaeJyyNWFobo66GLU42PM7fTdRTS5Z1s2isV275fu/987vvVhahql08H2Pz5JLdFZUTdtVW3fe/2q1vFGt6hqkzy3l1LO7vv2s/yK3+yv3V/wCA1zcyM7bVbcz/AHttfNyiqcuVHXTj1ZSZmdvl/hrrdNfQbmwttOa2bzliZmuLidvlf+6iL8u3/wBmrlPmjbb/AHa7Dwr4YN9A89xKkcS7XR3bajNu+b/e+X/dqqN+bQ1qSMu6ubZLWK2s7NVZJGZ7lmZmf+6u37qrR/aECWqRMrNcMzb23fL/ALNanjK5uYYP7OtvsTWTStL50Kqrv/vbf4f9msizSzXykiiaW4dfmd1+VGrGp7pnKPclaG7eB3d41H3tu75qzJpY1+6rM1azRNC7NOrSSt/FWZNtkfZHF87NWcZ8wQOi8B6e2s6lbW0eno0SSL5rbdzPu/h/2Vr1TxprOgaPq9v4etrO0tpbd1l+2PLuWL/Z2/xtXlPg+HV7a8WKzumtvP8Ald9qsqK3y7trfxf7X3lrrtD8MW12w1C2Zr10Z2d7hW+dNv313fxfxfxV9DluImoOFOOpzVoRlO8jqvFHxP8AC82i2uhanbXOvS28qXHnW52o+1fusrf3q8/8ZfEnU/EmspLp8H9kWyJ5UUUTMzKv92s/xppTw+IbqXYywxRK2+FGZdv3V3f3fu1n6TLi6W7uoNyttdYotqblWsMzxuKoXp30KpYelS+BFu11TXLKARPqawQvuTaAqy7f4tv8SrW14o1bwZpWkW6+HLTz9WVldrmZN/8A31u/i/3a5q61mTV9beWWD/WfIkUSqrf7K/7Nbfi7wxp/h3w/p+o6hrK3epXSLLFY7dyon+03/stfJV5c04KpJ37HXD3Tl9Qh17Vra11C+WX7I29baV9zIzbvmVf+BVd8Lrp1jtu9VvLONI3VvJ2b53X/AGV+7/31TPD661ffbr6xtZVto1/fvDArRIrfwsv+1We1xBbWt0ssSzyz7Vib7vlMrVu1KacPyK+LQi1aS21HWbi5s4Ggt2bf8y/cX/gNV7iNUTcssbBm+Xd97/vmtGzbTJEla6WeAeVtWK3+bzX/ANrd91aqTN5u1vK+78u5q3jLoOMifw/rFzpUV2to0sb3EWzen3l+bd/wGp9Bl0Zp7688UJqF27RM0CQyqrPO38Ts38P/AI9WdJBPtVljkVXb5fl+9Wh/Z2r6HLa6neaQ1za/K6iVWaJl/wBrbS5oxd1ux25tiopdZUaJo13fMuxvu12D69bTeCr3Rb2S7YsqvaxJGgVZ93zs7su7bt/u1zEz2N5Ztd2rKl1vZ3if5dq/w7f71U5izJtdmanFy5rmMoe8atno8g8KPrEqyrbrcrEZt67P9pVX7zNUWqa3c6k8Mcs1zc29qnlW3nN9xP7qr/DWUqfJuX/x6m3E+75Y/wD0GtXK8bIqMPeH3Fwsv7vy1plnbSzXC7W8vc33mbaq10WijSrbwhqLXO2TUrhlWAbFbYv8X3l3L/wFq6v4K+EpdWvZrp9N+1+VFutYpV3Iz/3m/wBladLllLlRNSrGnFnafCbVbzw/e22nXeowyaXqUewR2NphbiZV+RGZfmdfm+b/AHq9Ws9J8Pprltq/jKGVbqKBglu0WyCyVW3fL/7L/FWB4L+GkrXdnfeIbHUjdxOziJHWKBU3bmdpW3P/AN8t91dv3a539oj4gaBZW7+F/AWq3Cxuzf2ii7jH/uqzf+y19pgoRjy0ouytq+3zPn/Z+3qtrY80+I2pL47+Lkn9lDzIp7hLe1Qbtu37q/e+avqv4h2Udr8MrDQ9M06z1C9sLdSpeNZUt9q/M3+ya8R+EnwQ8TGGw8VGSz8918+KzafbOE/hf/Zr13Qp5fCmgeJ5Lm1laW5Zre3RtrPK23ayqq/e/wCA1c5qtiI1YWfLay/BXHiat60Utj5q8Wa5rWk6cqQaZa6RDdKvmyp88s+3+9u+7/wGuU1zxNqep6LFZzyRJarKzpFEv3m/+J/+KavQJPAs99cXupa81zAjf8e1szbGdm/hZm+6qrXnOvWGmWkxW2ufMl3Y2KrbF/3W/i/3q4OJadRYqUobHp4aULI9Jop22jbX6KeQFFLSUCCilpNtAwpaKKACiiigApNtLtooASloooAKKKKACiiigAooopAG6iij+GgB1FN206gQUUUUDCnbqbRQA7dQrfxU2igCZnXb8q/NSK7Uyio5RD99CysP4qZQtUBYhuZYvutT/tMr/wAVV1XNWLcqu7dUS5RlqF9yruWm3EO/5kqxHIjptZlpjN/dasub3hyKGGHytTtv8S1MxUv/AHqrySqrfdq/iESruX7zbatR3jx7fLdmrP37qfHFI33amUYy3A6XTdVl/irptN1FTtrgLWGVW3K+1q2rWa5h+8y15mJw0JbHXSqOJ26zRTfK1DQQSfK0a1ztvfSfL81XodSx8u+vLlQlHY641Yy3NCTTrYr/AKpaxtW0FLhG2qu6tWHUM/N8tPkukP8AFRCpVpy0JlGnI8/utAubd9rbtv8Au1Uk02cNtX5q9GZ4nX71VWgtmbdtXdXpU8xn1OeWGj0OHXSbvbu2rUbWc6ffibbXaXVv/drOvPkX5o61hjJSM5Uzkprba3y1XaJlb5lrY1Bot26Os9tz/wAW6u6nOUkYSIVC1I0Py7lpjRt97bTldv4q2ERMKbUjGmrQIbRTmFNoAKdTaduoANtFFFADqKKKACj+KilWgkP4adTadSKFpy02nUAFOopaCQp22hd1PUUANUU7bTlFbek6Dc3iLJuWNP8AarKtWhRjzSNKdOVSXLEx1Rm+XbVvT7Rri6SL+81eh6b4e05LfbEm6Zv4v7tbel+EbWIifb87fxV4WIz6lTiz0qOWTl7xT8H6WsO1lWu3t1VE+VdtQWenR2qKsf3aueX8u2viMbifrE+Y96jT9nHlRJG67qsZWqHksnzKzURlt/3q4uU0L+VprGmx81LsqQKlw7bWrHvHwu7bW3eJuRlWsa+2om7+7XTQJkc3rGsLB8u371c5dakkcqtG33vvVr+IprQxMrL89cLM+XZWavrcvw0ZQvY8PF1XGVrna6XfwPu+f5m/2qqeIL1Qm1ZFrlbe48qX5W2rUN5cyu+1pNy/w1208vXPzHPPFy5eUq6smX8xf4qz2FXvOkHy/e/2WqNmX+JfvV7NPmjGxwyKrRNt3bflpm2r00iSoqqu3bVZg392tIyEQU6iimAUfxUUUACilpKWgB22im06gQUU6m0AFFOWjbQMFFSUiinrQIFFO20tFIA20U6imAUUKKXbSJ5hFp+2jbT1oATbTafSUwI6dTqNtIAptP20baOUkSl20KKfto5ShFFPUU5RT1XFSA1Uowx+VVrS0uxW6ZmklWKJPvM1aFqsFszxWcfmu33ZWWsJ10vdNIw5tWc/sZflZfmpjCrcyyNK3mff3fNUDJubbWpPKQ7aNn+zUrIyNtaljjZ/u/w0ySPbSqKdtXdT1FMAWnLR/F92lUUBzDqVRSLT1pAFFO/4DRUgFFFKtACbaNtLRtoAFp+2hadUlAtPWkWlU1nIktWqb321tto1ytv5q7WX+6tYlif3ytXY6fq2INnlfM33dteTjp1YSXId+GjCXxlGzjazb/V7n21btbufY0jbv91aimut8rbo/vfdplv5vm7furXm1I82sjpjLllyxNq1uVdlXf8AerTaaPytrVzMe6OTzGqT7ZlW+auWeG5vhN41+Xc1WnXa1Y+rXypB+7k21UvtSUKyo1YN1PJN95q7sJl/M7yOavi+kS3eak0y/e+7WVM7O+5qaxpK96lRjT2PNlKUg3UUUVsZirTt1N/3qKOUCTdRTactHKAtOWmbqXK0coDpJY4tvmOq7m2ru/iapowu75q57Xruxf5l8u5uLN1byWl2bW/9mb7tbFncSS2cUrxtE7orMjfw/wCzWUZRlPkKlT5YqRZZtrfLTmdj8zVXz/FSq9X7Mz5idXxQ0rH+KoGek3UezAl3VNDKqZ+X71Vd1SKaJUwJFNSrUK1NHxUyiInVsVeW83RKrL81Z8a5b71P3YrKVNSHGcolrev3qltUWSXazVT306OVhR7P3R8xpXkqpH5S1QakZ933m3U3dRTp8pM6nMxrU5aa1C/erQyLEdSx1CpqZaxkLmJ6VT81MWnrWRY/rRSLS1mSSLRTVp60gHLUsdRLUqj5azkA9aetMX/dp6/erGRA+mX1rHe2Utq7OiSrtbY3zMv92pVqVajm5SokGm2NpYW6wWsSxIv92m6hd2el2815LtXajSv/AHm207ULlLGymun+7EjN97b92vIvF3xGs7p/PjgjlSFdibG3rvb7ys6/K3+7T39+extRpSnI1fD89jqHiuy1ee53RSyuyvuX5GVdq7mX/Z/h/hpvxt0H+2rrT4rWeztoVbZv3OzMrf3kX73/AKD/ALVeKat4tubm90+OJV0uFH+V/wCH733m/vV1mseLJEv7HUNOW7u7eWDYstxu23kq/eZF+Xaq/L8q7qVLF0qtS/Q7PZV6c211PRL57fwZ4Ne18PWjvdrEqvfeVt3tu3Mu7b83y7v++a8zj8b6rdauvmSeVbPc+bLuT/Xt8q/M391dtV9W8W+KL+wum165WKyeJvKtt21lVPlZtv8AD83y/wDfVYHh25ttc8prRotNa3ilb/SJW3XC7drruVf7rbdv8W6satePMow0NoYT3PfPoDWPHM994Zuo10+5sfItmeeZ2X5VVfvbW+8v+7Xlk3iLUNJ+CsyLA0dzq1zzdrKv71P937y1Lp+s6frcaxeI4JYNE0ZF+2eUjLPKzf8ALDb/AArU2uWWneJ/EdqNMWLTdDii8mLduZdir/B/D8tdknely0/6ZlQgqe/Q8Muo3ZVaVWVdtJNcPDCXWdkmlXypEWJVXYu3b83+1/u/99bq+jtQ8BaHptlFbNbSRRPFtie9k2/Mvzfebbt3f3fm+7Xz54ytkGt3XkXME8O/70O7b/49XzWLwbormuevRqRmYUabt0rNH8rfdavRvhbpkeo2t1K8qyywKztb3DbU2r91vvfM3+ztrj7HRNQv/wB/BZ7rdPmb+FP+BNXRaDYf2c02oahK1sj7UjhSf94zf7K/M3/Avlrli/Z+8zeUeYzfF13Lf3SwNbeWm7bEkUSRK3/fPzVXh0+fRLX7ZqEC/P8AKiq27dWh4gsJLN1lillnT76Lt3bV/wBpq5fUr6e4uN0kjKq/dWuerzT16D+LQu/2qzssixKzbujfd/3al0Wzuru9WC2g8+4dvkiT5mb/AHayri6nuXhXyo40iRUXau35f7zf7XzV0Hg0yL4h0+WCWSOW3lWVGX+8vzfLWUuWmtdiJR5Voei2Ph7TRdWljaz+ZqSJuZJlaKJmZfl/2mbdXqFna3j6Ba6D4ofT7m7SdE862Vl8pV/2d23dt/u7V/3q8q8eXN1eXtrdq+26n2tO+1mX/eXb935axPEHimKztVtrHVbuVlVVZl3fP/31XBicbjm1DCzsYOgpS1PY/jRr/hyz8NNo7ahaWyLtZoYoP3twqr8qM392vl24kjl82VZfL2t+6i2/w/71Salqst/cLLcvJKy/xM25ttZ8jfKzLH96tsHQxEKdq9Rzl5nTGMeiF82SNdyybWb+7Vz7JLKsMuo3XlROu5Nz7/l/9lpugWVlfTul7qMFiiruVpVZldv7vyrReR2yN5ds3ns3y/8A7NbyfvWKNO31jUxov9h215drpSStPL5Kf3vl3Pt+9/wKs6xt7Yv594rNbbtu4fe2/wB6pF1FoNGl0yKCKBmb9/NtbzWX+63+zWf5/noltEyqqrtZ2+7Uwhy3toHLItW80d5qPlxz/ZrbdtSWX+Ff9ratbWj6bZ7GubzUWW237NsKbpWb/d3f3d1ZcaaZb6W25llnZdqr/c/2qk0O5uXuFfz443gRtu5f4dtRV5pR0Jn5GzfeRpV5bq1tPPDu3Lbyt8+xvu7ttaWteMrqZLqxtHXS7F4NjW0SLKrMq/dZm/8AQv4aq6fO15avbWsccrOyp9rZP3qr/dVvururqPB+j+E9HupbnVdT0+5vli3RW7tuiRv7rVxuEfjmtiI25rnkE0D/AOt8ho933fl27qjWSXe27d/u11HjTUraa8fbc/brjdt3Iu2KL5vuov8AdqpqFnpUXhyySIPJq0srPdSs3yon8KKv/fW5q9KM9rnRfuZG5dm1W3M33qsW9mzIzt/B8zfLu21SaJUdfLVvl/vVchuJVR083y1l+Vv92nyvoRL+6aPhuxn1LV7e2ijklZpFXYi7mavpLwb4z0HwvezQeIdM+zfZduyFGVd3y/xLt/8AHd1eD+BdY/4RLxBDq9jqMMrQNub5dqt/s/Mv/stO8beM4tcvri6S0ia7nfd9oXdtX/gP8X+9W9Dkh763PPr4eWIlZ7Hpvxz+Ndxrs5tdG8y0QIEijDN+6X+9/vNXJ/CnwJqHiHURql5psmoRffWKVmVZm/2mVaw/gz4bs/Fnja10vU59vmt8qltvmt/d3V9vaD8N7PRvDw07T7maCR/l3pLtCL/dWvUp1pyUVUdkuhy4mqqL9nSWvU8W8A6Vqd74ta1tYJY5pX3StbXTf6pfl8vc33VX/K17F4S8Ff2Jq767eRy3j28TJawM29ot3zNtZtq/8CrY0aHwh4L/ANGsj5l3Of3vkq00rn329KuXPi/RyyW10k8UjthEdcZ9zXViMXOpJxoRfIzzo0Ip885anhnxZtZdW1wa1c2rLbxROYrHer73+9ul/h218+/EK/i1G8tdTbT7ayumX5vKb5GVf4tm1dtfaGpeDfD2rS6j4hvJLkRS/daNvlRV+X5Vr5K+KF7oF/rwTwzpksFvFuheWZt3m/7X+zXoYurRxGBaTa5F8vQ7sDOUpXNGijbRtr7w5Qoo20baACinUUCG06iigY3bTqdTaQgpu2nUUxjadtoooAKbTqKQDaKNtOoAbtop1FABRRR/FQAUUUUwCiinbaQDaKdTaADbRTqN1ADadRRQAUUUVIC7qN3+1SUUAP8AMb+9SrM4/iqOjdS5QJGkb+9TM/xUynUwHq2KeszD+KoaWpAtLeSf3qsR6i4rN3UVMqcS+Y27fVWX/WVYXUo5F+Vttc9upY321hLDQKjUOot7xvu+bWpDeSFV+b5f9quNW4Xd8tWo9UkT5VrkqYT+UuNQ7DzWZd3y7qga4n3fu1rEt9V3fK26rS3q7dyyLXN7CUTT2hoLcyq3zP8A99VFcTNIjfdrPkuVmVmVlql506/Kv3a1jQJ5iW4tllbctQf2dKfmRajuJmLbvmVqkhvJ0/iZhXX78YmZIumzsm1lXb/vVBNo9ynzKu6tKPUm+XdHT21eMfeqPbVYy2Dlic5JDKn3o2WotuK6X+0IJvlkjWqlxbWsrfLG3zf7Vbxr90RKPYxaK0JLBV+7LtWoZLNl+6ytW/tFIgq0U+SJk+WmVXMIKKdRQA2iiigB1FFLQSFOptOpFC06mqadQA6lWkpVoAetSLUa10vh3w9PqOyWRWWJpNtYV8RChHmmyqVKdWVoGPaqwlWTZu+avSvDOly3METSKyv/ALNdBp/hjTobVE+zR7V/2a6LTbGKBP3carXxmZZ5CuuWCPoMJl/svekzNs9GZGVtu32roIYVVFVakVFFSLt/vV8vVryqbnqRjyjPKz8tN8lhT/NRfvMtMkvIh8u6sfeAZMuFqlvWrrXEbp8tZkjqXatKcSZGhC9WN67ay7edUXazVK1yiruZqqVMOYnkfdWFfMySsrNVi+1GNYGZWrjde1tdrRqzMzf3a7cHhJ1JaHNXxEacTK8ZS2yszLJ5jfxVyNxJE0W5flen6xM0k7M275v71Zm6vvsFhvZ0kj5uvU9pO5Mr7V20md33mpjNj+Km7q7eUwJf9qopFxTd9OkffQA2HbvomdfuqtMpjVXKMY1FK1JTAKKGoqhBS7aKkUUANp22l20bakBKNtP20baAGbaWnbaXbQALTloUU9aCQp1FC0ALRtpy0LQAKKdt+alUU7bQSN20U9RRtoAZRtp+2nbfmoAZto21KqbvlVfmoZGVtrUDI9tG2pNuaeqUgIttOUVYjhY/d+9U32VkiSXdu3fw1MqkRcsiqorovD+ixX0DSzsy/wB3bWVHazv92JvmrsvDNnPbadK0/wC7Zl2r/s15+PxPJT9x6nXhaV37yOd1a3tLN/KgZmX+7/tVns8sW11ZlrQvpUSeXy2Wf5vvNWdcP5rbtu3/AGa1w8ZOPvEVPi0I929tzf8AAmpJH+ZttNamV08pjzDW5+9UuNqfe+9TFoquUnmCnrSLT6ADbRS7c0baChKlWm7aeopAG2kp+2jbUkjacoo20tABhadhVo20UAOWm/xUUUBzA1G6imtS5QLFmV81dzba19Pv1tE+Zdzbt3zVhLUu5mVa56tCM9zSFSUdjo4b/wC0Pu+ValXUdj7ZGrmo5WT7tOkkZvvVySwMZSNfrMom5famu35azlvmP8VZrGnKa1hgoQREqspFuaZTn+9ULGm7qYxreNPlM5SBqKbRWnKTzDqWko3UcoC0UU6kHMFFFFXygFUdaurmzs/Ns4FllVvmRvu7f4qvbqxbfWvtEGp7Yo2ls2ZUT++q1z1q0Keje5tRpylK9jmfEGpW2pfZ59KX97vWWeF12t8v3t3/AI7Wx4Z1qO2ghtNQWWOWX51lf7rK38X+zXL69pTCzl1e5vIlunlVZ4UbdsRv4m/2v92tW8ddNZJZ9TkvtiK6BVVdi/Kqtt/u7Vr5yNapGv7Ryt/XY9edGE6XIjubef7QjMqsqq21d38S/wB6pKwNFvFZ7q8lVVR9r/L/ABfL/wCO/drXs5Wmg81t21/mXcu3atfS0K0akTxKlP2cixuoqNq5nx5rltp+lPEuoLFd+am1Fb5m/wDiaqvUVKHOwo0pVZ2Rbj8RQP4rTSIJPN3Kysv9x1/2q6VWrxfVryLVdZi1d1W2TzUXyl+V/wC8zL/e3NXp2h6rFq2pSz2M7NZQRbGVvvb/AP8AZryMDmca85Qk/Q78Zg/ZRTRvx1Ku2oI3U/dZW/4FUtev7svhPNkS79tG/wCaoKdVcpJY3U5agWpVqeUQ9TTqYtPrMAp601dtOWkIljFSrUS1KorGQiRakqOpFrKQCrT9tItPrMAWn0lPWpkQC1Kv+7Ua1Kq/3aiQD9tSLTVFSxisZSAVdv8AdqVaZT1FZAZXijRE1vTntt7Ruy7Vb7yr/wABrxP4vaBd2EbQWkcS2luqurqiqu/+Jmr6EXiuS8aeG38Syy219Ky6ZEqtsX5Wd/727+7W1KSmvZ1Njrw2J9m9T5G021We9/eL9plgZmaKX7mxv4v73/fNZUd1eWl5brHqEsbW7MsT7v8AVf7v92vp+18MfDjR0lu7qeWWRGZ2IZtn+yv+7XjXizw/Y2UFrryrH5F1O0FskqfJcf3n/wB1a8/EYGMIXi9j3aGIhVPN7qaVnZXn8x2Ztzbq7X4d+Dr7XEVYrxbRJ9zO7Sqi+Un3lXd/tMtc5eaTbR6o1muoQSr97zk3bW/ztrs5PDWlaDb2upyzw3MUsC7Ylfc6t/tL/e/+JryYy5PfeprVl7toms3h3xRoGkWOtJqcbWN5dNLFb3bq6TqnzM7r95l+X+Kuj+HPjHwvcW8194o1GdtdWLdBd7NqWqfwxIq150sGr+L9U/s/Sl2xW6K/2dm8lfK3fNXU2fhjSl8TW9tpGvWUGrIqyxxJO1wi7W2rBtb5f9r5q9XC15z1UbfM5atGMo2b1M74oePbzWXYxx3lus/3TcN87L/Cq/7P+1XM+GYlS9t7y5kij8iX5opk+Rf4Vbc3y7vm+7/s0eKL/V4PGV02oan9pvoGaJ7iVdq7v4tv/wAVXVXnjfT30i0tVuY41t4lVFi27v8AaVv9lm/vV5+Mr/vG2jop0+XQ7ZU8MReCtVbSryC5u4rXdLMsSskT71by0b7u1tv3v9mvP9LtdIu9ciivIp1eVVZGm+T5v9lF/wDQmrmdc1DSJbyW7tfMglfazxI/ys3975ayI7q5e48/T5ZFfd8vzb23VwVMRUqxttY2jFR0PVdU8ZLYaQ/h620OykdXbzZvK/efe+Xc/wDDXkOvI39ryozxs+759jblVv8AgNLNf3bu8l1bNI7N/rtrbWqXTbS6ubpJViiZfN/1W773/Aaw9pPl99lRjy7DryK2tYPKg/fu38Wzbtre+F9j9r1G4nlgkkaCLcku9UWJv4Wbd8u2rHiLU7bTtNazl0+0+1Tq3zInzL/31XQfCvR7F9EuNTtoGvpUXdP8nyQbf4d397bXnYqr+69SZe6iLxRrSRWrf6TLPezrtl2L8v8AwGvLL67aaVt7bfm+7Xt2rWNz4jt1/sqKPzV3L/o27cv8O1m/hrzybwZO+o3FszbXgX5/l2qv+9uq8NKFKF2EZR3ONUfOu5lra1C5lubO1VrOKL5Pv/xP/tVWurKK0vWgkdZFRvmZKq30kfm7YGZol+6zfert5ubYr4pEM21F/wDiajjheX7sW3b8zMzVLHbySIzqvyLWnaxpJZxRpHLHKz/99r/7LtpSlymvNylSHS5bi8a1ilWdV/jT7v8AvVbWx0+2nbz7lWhT+795v+A1oalc2tozNFBJBEy7FVm3P/31XPteN8+xY/m/iddzVlGbmZRlOZDM0fnvsVlXd8u6ug8D+GZfE11NEsrRpAm9trfNWJJG0sC3Mkq/3dv8VH2yURIiO0ar8rbG27qqpzONoMv0Oq0PUW8NpMktms772W3mZldFb+Lcv3ay9cmnm83U7yRd17uZAm3czf7v8K1d8SX8qpY6fcyQWSsiqyOzTtbr/wAC+7/u1nWugLLqNnK955OmTy7FuZmVWK/xNt/hWs6Xuxuxxp/aLGmaFc22hy+JNTi2WifJArr8s7/3VrLs9+p38VtF8rSuqr/s11/xK8b2+raBpvhDTJf+JNpbM0X+2396sXw7pt39n+2War8q7mbbu2rUQnPk56m5NSXLG73KutWstncPZ3aqrQfL8q7aylDbtyrWhqU7yzytcr5js3zFqoQ/M+77orpjL3Qp/CTQ2kt6+zesa/xGvQvhn4Mt5rpr7UUkj0+Jdz3Eq/L/ALq1x+nyRR3SfZGZdy/M0u35a6688SahNcxRXeoy2ljFBu3oqqzLt+XarferPnlzpIwq80vd6G/8SrnwhpuqWWoeBfNtNQSVWXa3zfL/ABV7j4V8a2914PsNQ+JetrC9xxGtvcbflX/YX5t1fNPwttYtT8U+fctG0TSbd1xFv37m/wDQq+u7Tw54H0ZbdtTi0u6R0Vm83Ymz/gNfQUcXKskqu0ex5GMtz26ow/8AhLdHniZPDN/b+HrGV9q/unluJx/e2r93/gVbfhqDS/t/2CHz9V1B13/b3RtqL/d+atp7zwRbRk6JYWl86/d+zpu3N/s7a4HxFq3j3WLp9O8PWzaNaxbmnlSJInVVr1MOo4iF4fe3/TOKcZSla5S+L/xO1Pwe9xoFpcNczbWDl02ov+zXzFq2ryyJKsjR75XZ5Nq/3q1PFV/qGq+ILrdeT6tKrbfNlZmauK1iK5Sdlbd8v3l/u14maSl7V0o6W39T6HA0Iwjc9jp1FG2v1s8EKNtLto20AJRS0UDGUU7bRTAKbTqKQBTadRQA3bRTqKAG0U6igBtFOooAbRTqKBDadto20UwDbRRRQAUUUUgBqbTqbQAUbadRQMKKbRUgFO3U2igQ6iiigYU2nUUAFFFG6gAooooAKKKKACiiigBafuqOjdUgSq7CpFuWX5ar7qSp5Sy4t2/8NXLeSV9u5W/4DWQpqWOeVPutWcqYRkdAqxfxr81MZkP+7WV9rkdt2/bUqytt3eYrVj7KQ+Y1oXibavy/L/s064t4pF+ZVrMhmX+Jqma6i2/K26s+SXNoVzEUlgy/NE9V5FuYfvM23/erQ+2RBfu1WuLpJvlrWLl9omRX8xXb5mapI4N7LtlamKsG75lrQt5YkT92tVKXLsIqTWEo+ZW3VSkjdG+Za1ZL9du1lqvNPFIvzfNVU5S6k8pn0VPIiq3y/dqL5d1a8xIUc0+Mru+ZasxvF91dtTzDKdLViaNdu5arsKqMuYXKFFFOWmALT6bhv7tOxt+8tABSr96kWnqrNTA0NHtFu7pY3Zo0/ibbXsXhlFjs4kVV2ou1a4TwPZwbfMuflau8t7iCFl2uqrXx+dVZVZckeh7eXwjTjzHRR3aJtVqlhvVT7zVzU2q2yP8AL8395qr3GoKYm2ttr5yOClL7J6EsTGJ1zakn8LLVa41hF+Xeu6uIa+lRNqs26qLXjebvdq66eVGFTGnYXmurGv8ArKxbjxBJ8zbq5TUNSdp2aNqz/t8vzeY25/4a9ehlEOU8+pjpXO/tfFkSxfvW+as/WPF7JL+4ddtcPIZJP3jfKtVWeuunk2H5rmEsdVkrHd6P4qlmulWVvlrYuPE9r8ytKteWLMyfMrUSXDM33qqeTUZyuEcdVjGx2F94o/dSxxNu/u1zNxqE7vu3Mrf71UGkambv9qvQoYKlS2ic1StOpuTTTyyrtZt1V2qRj8tNrrjHlMxrUyntSUwDa23dUyiJoNq7vNX5qh3Uqsw+7SkAxqiapWpm2mIZzS1Jspu2gY3bijbUm2jbVACilWinLUgG2l20U6gBqipNtH8NLuoJE20baeopaQDNv+zTv4qXbTttADVp22hRTttVEkKeopu2nqKrlECinY/u05R81SKKQSkMVKdsqaOFnbaq7mq1Z2M9y6xxr81ZylGOsioxlL4TP2N/DWhY6VPcttSJmZq6vR/CbiJmlX97W9Y2LW1v5Cqu9V2qyr92vFxOcwp6U9T0aGWyl8ZzPhHw8y3Uv9oRqq7fl3VFr2gwWkrXMUqyRf3a6r7JPDG8jMzNt+81cVqU07zyxbm2t/DXNhMRVxFZz5tDavThShyco1dL0ySzaf7T5cq/eSs9rN926P5krY0HSpJZ1kn3LF/tL96uguNNtHvIl27Vb+7XVUx8aE7OVzCnhpVVfYzPD/hxrq1S7V9u75fmWrE3hi5iulXdHJEzbv8Adrrbd4rSD5VVYkXaqr/DWLdaqk11uifcv3a8VZhiqs5cux6MsNRpxSkT2ujxR7Ny7dv3tv8AFVfxEZEtWigSRv723+7WrpN21zP5ar5m37zVs3VgjxNtX5m+9XD9blCqnVOj2MZw908UunUtt27aqsGrv9a8Is94rwfKjfermLjSpbSV/N/h+Va+vw2Oo1Y+4zwK+Fq09zEaomqxMuHZf7tQtXonIC05ab/DT9tAAtOoUU9aoAp6/wC1QopyipANtG2lp1IBu2inUUCG05aKctABRtopaBiU2nU3bQIKcwoqbZGIA27c392ol7oyFUY/dqRkVAv96hX2fdpN1IBu6iikp8oBSqGop9MApjU+mUuUApKWkpgG6lpKWgAZ9iM391d33qr6PqMV/pdvfRuuyX5dy/Ku7+JaTVJorfTriWf5olRlZf727+GvPfAeq6dpf7vUJb1Uidmi3N+6i3fwsn97du+avMxmNjh6kFPZnXSw3tYOS3PUqbnb96qWi37alYJeeV5auzbF/wBmrVxEs0DxN8u9dtejTlGceaJyuPLLlkcr40udTR1ggaWOF3XbKqLt+7u/3vvVzNxtLL9uZpbS4dd0yO3yP937v8P/AALdWrqyajBO8sq3LQq7NuVWbZt+63+0tY9nqFjqL6h9q1BY5ZYNzLs2q7fwrt/hbdXzOZRUnKUtD3MNHlirFO4VJvDN1LdXNpGtvF+6XZ88rK1Jb6dd3dh/bUsrRo8ipBDt+aVV2/d/2afDC1jpF211p/n2txbMyyqm75vl+638KrVrT7m+1i6hs4kj+yW67/3K7mRW+9t3N97bXi0uSpJRmtTsleMbrY6CxVWVNKlkgWWV1lvi0v3V3fKldDptw+pbrlWWKxV9sCr8rOq/xN/s1z8mm6VKj2kUscWlW7+bdTS/61m/hXdUWk6rJqN4lnBG0CSu3lbvm/cL93/dr6SjX+qyjCZ5NSkqqckdvG6uisrfK1c/4g8N6VOmoajdJJIjxM7qqqzbl/iWqfibxS2i31rZ2MUV6rrt8pG3Ou3+Kqmn+P7G9tbuDU7OS0XymTduZldtv3P9muytmOFknSbMqFDEU5RmlocCpZ3iSK5nlRJWWKLb8sUX3qu/23c2dlLZ6R56Wsr73ZvvO3+d1Vbq2ZtN/wCEl0zy4LdZ1h8pdzbm2/K3/fP3q6DSYtK03S7fULpvPS8i+ZF+Vom3bv8Aa27ttfE+yaqvX3e59DOUeXa5peBbK58hdcvr5rLTEVU+8y+btb7v+1XoGi6lLqSyzrAsdtuZEZvvNtbburzpb3UPF11FptrF9ktE+VkiXciLt+833f8AvqvStNgazsLe2ZvMaJFRm/vN/er6zKZRlD93t+Z8/j/deu/5Fv8AhpaZTlr3Dy+YmWnrUa1BqF/Bp8Cz3LNsZlT5fvfNWcgj72xfpVpiupX5WVtvy09axJ5hy09aatSqKUiR0f8AeqZaYtPWsZAOpVpO/wAtPWokA9afu3NSLSrWMgJVpyimLT1+ZqiQD1H+zUy0xaetYyJJFqRaYtPWspF8xIvFLSKP9msbxZqiabY/PFv37vmZ9qJt/ialBc8rIIx5pWRY8SapHpGkTag6syptrxO4+Kt0mqX0Wo3kf2Jdyx7GZt27/wBCrMXxFqfiHVLq2u9QlsbSL5UZG+Vm3fdbc3y/71cN4s0zT4Z7uKzulnlfa6SxIzKzfxbajE1JUofuz1cNg4bT3F8ZfEHUNctYrRbWK0VW3b4l2Mzf/E1m6leajcaULzWNQdruCdUgtnk2sqt825EVflXd/ErL96uc1BNQs4beK6tJLZtrN8y7Wf8A2qitb6Q7opWaVHZdwdtzbl+62773/Aa8OrXqTd5s9aNCMY6HQWvlG6e5umWW4lbftX51X5t3zM1dH4VtrTW/EM15rWoeVaW8DOyptVm2r8qrtXbXFaszC48q22tE3zLtXb/47ur0r4SxwXezTm0pb5HlXZceWysm35Wb723+L+LdRg6UqtZJGFeSpw52S+ItE0/UriXUE0i+tpZVXyGb5mfd8quu3+D/AHqpeC/Da2Ov289reWUhuldJVmlZ9v8AEu3bt+b/AL6r2nxMPCemWf8AYP8AasulwxRM880S7vN/2dy/M3zfw/NXzz44vNMt9YRfCWpXNzFu89neLYyS/wCz8vy17mKlCnDnaJpVfaw0Oi1TSrS8W9tbqWK5vVZ3lm+VX37vlVVXau1V/wDZq8v8RXET6o7QQRxbflZURUX+78qrXoOlzfYfDUV9qMFj5q7vnefe0v8AF8yqv3vm/iavO/EWorqV/wDaY4lgVlVdu5W/9lWvmqmI9rJ2Z3Uihs3r5e1VrS+xz6etrdxP9kllXfEyy7m2/wB7/Zpsf9ijSJXa5u/7QVl8tVT5H/3v7v8A49VZUuZLd5Uib5W+Zmb73+6tYmht6sJbOeG1l1pbmJ4l3NEm7a235l2r96otNtde8159I02dpbX5muF+X5f9pW+Wn+H3a2VpZbZm/vNt/h/3v/iau3GoRX8ssC3X2G1dtzpE3y/7v95v8/ermlFhGpCO5FJ4q2I1tqGneXfO37+7Vt7bf9lf4a2o9Z0yz0d59A8RrA0//H1pzo+ydv8Aao0+x0jT9LmdvKl3rs3QruX/AL6Zdzf+O1xmpW8cLfKsce5t21W/hrJU6VTRApxkdw3xDlTS0s7Vr60Vl/f+Vct5TMv3dq1zuoeIZb9ZZZ5VkmZl+Zl3My/7VYTI25PM+Xd/F/s1FdKqIzRt8retXChCOxlGER000lxL5aL97+7UU2/5U2qu3+7UlrYSzxearbV+78v3qW4s5YF3PKqt/d/irfmjHQ25ox0Lej3P2dJVZIpFP8LLuZv9lf7tamn3Kw/aZ7p5VvX2pFbxJuXZ/drH0TT59Svkiiukttq7/NfdtWr15Bc2uN11Kzp91/4t1c1XllKxlVlHYj1iLKbfIl85fvb/ALy1kyW7onzuvytWqzvt33bSsz/3mqjeMzr8ixxp935aql2CnKWxTZo9nyszNVeTdvXatX1jaKLcsW7d/Eas2um52yyq0i/xKtac8YmvOolax0qK8Xc10qvt3bdv/jtWv+ES1Oa4ht7VWnmlXcsSKzNt/vVswzaZDbqkSTxP/FsiVm/3a1dB8Qyy6pcTz3l3GywKkDwxb3Vl+6zbf4VrnlVna8RRqy5jlfE3hV/D2rRaddStLcMiuyqm371dBomo2pP2WQJYx4VN8KdF/wB3+KuevL2fVdfmuby8mvvm2rNK3zMv8P8Au1Y2PYozSsrb+y0TUpRSe5NeXNoN8QTwXmqPJBtaJF2KyxbN3+1tqlGkkzbYo92371STXEjNu8uONP4VqS3Mj2fmefGq7vufxVp8MQ+yV4fMlultkVdzttVmrVvtEjj3y/2nHdvt+XajfM392jR2tl1BHli+07VZViX5VZm/vV6H8O/CH29EubyWWSFG3NEqbF2/733qwr140vebJ5nfQr/B2X+y5/tk8/2J03bCfvM395V+78v+7XR29lLrHi37Ss99qXntu2vuZ/8Ae3Mv3f8AZrr5vEHg7wfatBqWgrcyyr/o0u3bsb/e+9/31WBrHxNWOJZLRfnT5VSJtir/ALX97dVRxNN0uaLbv0OaUW5PoepeVY6PNbX9trz6fK3yLD5G593+ztbbXkPibx5rz6vqGmfbJYtNZ3WX+Hf/ALzL95q5fWviDPqWl+V5scEyS7vl+9/31WFr2u61rt0rXcsTRKu5FhVUVf8AvmvQo42UaXJsYfVoynqaug2qW32i+nuY40RWZF27mrjde1GLU71lWPbuba23+KrVnqV5ZpLbblaJ/l2N/F/wKi3tGZHnZYovlrCVeXvSkdjqRpHpNFG2jbX7geAO/wBmiiigQ2iiigAooooGFJS0jUAFFG2loEJtopaKBhRRRQAlFLtooEFFFFABRRRQAlG2looATbRS0c0DEo/ipaKAEpu2n/w0m2gAoooqQD+KiiiqAKKKWpASiiigBdtJS0lABRRRUgLSUtJuoAKKKKoAooo20AFFFNqQHUU2nUALu+apY321DS7qJAT7/m3UNLj+GoN1G6p5QJfMahZf9qod1FHKBN5tCysP4qioo5RErOxpu6mLTqoYu7/ao3UlLSAdup26o6dQA/ew/ioz/FSbqbuoAf8AxU5aZS0CLEcuz+HdRJKz/eWoVpanlActbWi+QFbzF3VjrVmF2RdqtUVY88bFRlym/wDbJUddkm3a38NaM2qbURlk+fbXItK25dzUvnsfvNXDLBRkaRrSjE3G1iXzFZm/i+alm1WWT7svy1z7P833qf5ny7av6pDsT7SR0kesThNjbf8AeqaPUbNv9fJu3Vym/wD2qVXqJYSA/ayOyWTTJ12rt/2az5rWLezMu1fvbqxIZmilVlb7tPurySWLa0rNu/hqI4aUZaMqU+bcLqbc21V2qtVd1IpZmpa7ox5TAGNFWLezlmZdv3W/iouIY4V2q25qOaIcpW3UvNSRx7vvNVlbGV0Xyo91EpRiBF5qrbqn3n/9BqFqG+RtrL8y03dmiMQCmU+neUx/hpgRU6rtnplzcvtjWtu18KyzbV3qrfxVhUxNKG7NI0Jy2RzCox+7UnksF3bq6G88M3kEuxF8xf71Sw+Fbn7K8j/e2/Kq1H1yla9x/Vp9jldtJtqzdW0ttK0UsbKy1CwrpjIyGU2ntSUyQo/hopVFUALUlN209RQHMFFO20u2lzAC06m7akUVJIUbaKKYAtPpq07+KqFIWpFFNUVNGKCQUVueGdHk1W4aJV/h+WshRXf/AArRTcSr/F615+aYmVDDucdzrwNKNWsoyL2k+A4llVrmST5fvba2l8M21nhbZf8Avr+Gurji/hWrCwbvmr89q5tiKr9+R9VTwlKntExbW1ZU27Vp/wBg2I3+1Wx5Kqvy05bdm+9XD9YkdHKcfqkGyWKNo2aJm2tT4/C1m7+f5Xzfw1081gryLub5V/hqRUVF2rW6xs4x9yRn7GPU5mTSooWZvL3Nt2qtZ7aXK/7x49v+zursLhF2btu5qosrO1OGJmwlTic3dW7G1eP5V+Wsmx0RUXdL/vV2d5ZrIn91qzpLbyl+992u2liZRjaJzVKUb3kQaXaRWjbkX5at3moqjrGrL/tf7NY+oalHb/u42rBvL1Xd5Ff5/wD0Gt6eCnXleRhPExp6ROq1LVIorUtuWvP9W1P7RcOzr/u1Hq187QLGzM3+01YcjsWr6LLcsVJczPJxeMlU0I5my7N/eqGnsKFFe6ecIop6il205RVAN21JtoUU/bQA1f8AaqWmqKk21IDdtOoooAKNtDUUAFFDUUcocwUUUtACUtFOoJGUu6kptHKUOoptFHKSO3UU2nbaAFWnVn61ff2fpc13t3Mi/Kv95ql0m/gv7KKeJ/vqvyt97/arn9tDn9nzamns58nP0LdNp+2kaugnmGUtFOoAbtqvqk0dtZSzyxyNEi7n8r7yr/eq1tpk0cc0DRSr5iOu1l/vLWco80bF0+Xm94841ZtXvNLtLnUJZL7RWZmZ7R9rtt/v/wC7WD4F0H+2727i89l0xHd23fe+98rN/drV8ZaPq/hnw1dfY9TZtNd/nt1bbtX73y1x+m3Gq3K7YJGgt7hVSdk+Xcv+1Xw2ZVXh66VSB9NQpxnS/ds92s7/AExLJktbyCWKziVWWJ1ZlVdq06z1rSrq8ezgul85f4W+Xd/u7q8gjvLPS4riz0yL5Z12S3E332T5fl+X5V+Zd1PkufsultLeSQTee+/zkdWlTau3a3+y1bx4la2icksoXc9F1a216HVZdQ09o54mZd1s7/eX/Z/hrkfGF/odxEt5Bp8sWpxNuliZPk2/xfd+Vv8Avqreh+Nr6LUUl1JYrmKWBViS32/Kv/xVacl/ps1x/wAS2JorhkZ/s7LvZm27fl/2lr0JV6ONpvkdpPoZQjOhP30cNeW2oX2nS30TNBDar83lK/lKrfw7vu7m/u1t+FdVawsvK0+KOO6ZGZriVfu/7S1V1K1vIdNumlaWNIIlaW2ZGVN7fxf7zfeqLQbBbmC3llbzVZUiWFW2qq/3nr5utSrUKyjDc9TmhOHv7F3UNSV9EaK5aSe0eVXd0RVVnVW+Zv71WNHni0Hw02qyM0mp3+5Il3fcVfuvWLcI2o+Jv7P0xYo4UbymZHZol2/xVa+ySv4lmtr6eG5uLVdz/N8rfL91d38X+zS9tWhK79B+zpuNjB1CZXv3aJpY5l2/J/F/tM1Lp9zLfG40bUJW812VYisW/wCZWrvYfC8c+pPqfmKthPLEjPt2u38Py/7P96reveEtGGnXUGyJbqLZ++ZtmxmVW3M3/stdcMrrK9WWhDxlKUlA4fTdV2aS1pdTv9la/Wa28qJVRtrNvbd/D8qp/e+9WZpcWpaxe3VrbM0duzuzfLuRm+Zl3f8AoNX2+w22g6hau0cl1Fcq1mqxMyOu7a25/wCFf96tPwHcxaPdam/2mG0bZvTzk3rvVl+X/a+XdXBCaUlGo9DefwtwWpYs316zgfbc/Yl+RVVE27kVf4W/irR0fXtXdkto7m7nu1Z/kZlZNq/d+X+KuJ1DxNqOouyt+9iiTaiqu3b/AHf92ug8C6jdWMHkWf7zVbpmR5bj5UgZf4Vb+8y/xV14esnW5YStE5qtGKh78dT0i3vNallh2W1lIjKnn/NtaLcvzVu1x8fiDTNFt2tLWeXVrpn3SOvzLub/AGq1tPbVVWW81W8iit2VWRUX7isv8X+0rV9nhq6cdHc+dq0Hfaxehv1Otz6U0bK6QLOh/hZWbb/6FXLfFLV4odLW2in23CurNhPmXd93a1c7rGvT2XjyK7tbmOV7eBlZpnV1Z1Vtu7/e3fLXHx3L390st5PI0rt8qu3+qbfu3f8AsteLjs55ZOj1PTw2W8r9oe5eCb3T5dOis7O8mvnRd8szxbG3N/f/ANqujWuH+Hcmg2VrFFFcxx3067Gi3Nuf5vl/4FXdKK9PBVPaUU73PFxceWqx61KtMWnqK6JHOSrSrSLT1rGRIq1ItRrUq/3d1RIfMCipVpq1JWYhVFPUf7NMWp1+7USkAqj/AGalWmrUqiueUgHKKeopu2pFrKUgHrXNeNltI7NkdYZJp1+SGVd29l/+JrevpGhtGZEkkdvlVUX+Jq4qy8B6ldXX2vU9VlguE3bXh2vubduX5m/h/wBn+KtKPLF88nY6KPLGXM2eKeLLxfsUtppUUcVlu8q8aJdu9925vmb+6u7+6tWtD0bSrDRrLVfEN55NrPuSwsom2T6iit992/gT/wBC/wBmvRviL4I0Kzht5xp66lqsrq26Z2VWZWVt2xflXdt2/wDAq4L4p6neRapay6vZ2P8AazszPaQqrJEv3dn+7/s/drLEWh++3PZpVOf4DzjVNDgubXVdQZpGitX2Kzo22L+6u75tzNWDpulLeT2NvbXUEtxcOytD9zYv+07bV+avWtQ0TV/ENhFqEUdtLLqLtusUdVTzU+VndF+6v+1XN6b4MXS/GsOmeJFjvd7bVSxddjyt/A7fwqv3q8yVL2sotI7farkZoeNNE0y2tbWx3WkUrRKttbac6v8AO33fPnb7zfL91N1ek/Cnwvbab4Ull1azjnSeJnXY77kVV2/Pt+78zNXPeJbv/hDpE8PLqETXcDxNbXxgV2gidvmiiVflVv4tzVv2cOoalptzpkGtaJLpiT/LZwzt590qrubdt+b5d25v+A17FKFOnKy3PNrylUUU9DnvGmsabpsCtp0um21vLF8sW3fO+35vmZty7t1eW6lqTa9Fa2KXLxMzN57SqiKrfw7W+83y10/xQ0j7LrNpBKttp9rEu+BpX2ytAzfe+b73zfKtcL4ii08Tr/ZjTtEyIrvs2ru2/N/49Xk5nJqo7noUKcYx0NHwvFY6ndNpMWjfaZnbbvbc3y7trP8AK3y7f9ndVv4qeD9N8H3KafBq9tfXS7mlhh/5YL/Dub+9/FXPaXqn9h6s0mn3l3tVmWOaL907r/n+GtS41O4uEa+1G8gu7hm3omxv3TNt+7/tfKtefSnShSa5dTXlnGV+hxqhg+77u37vy1q6fbyTW7szSK6/Mjfw0+SGe8vGlljWP+Jvl21sWZs5XVYmVlt4/uOvyu1cXNzBVnLaJm6hcp/Zyoz7vm+VEb/2WmabfpGj/wCixfMu1f4m3UsltBeara2scf2Tz2xvPfd/d/2a67/hG9D8PapLY6r5skv2ZnaGX5XT+6y7fvf7v92ufEV4U/cFG3KYC6xJF5UEkCwWqr80US7d/wDtbqr6hrEV5Osr6bBsRNkS/wB1ao6lPbXF0skFmlpEq7diOzM/+0zNUCo89wkSr+6/iVW/h/3qVOEY+8XyqIl0sckqeUkqxMv8daem6e0jeY1q021v3TM6on/j33qtX2gyw2SS3SyxLt3QbvlVl/4FWnZ2dt9lt2utXVkRfltkRty/7TN92irXjy+6TKXLEzLxLM7Fjtng27VVIn/i/iZv/iarNA87bFg2ovys38VXdYNnDtZpFk/i3L8tV4dRkNv/AKNA2zd9771YRlKUbmHNKWpPHLbWn+jW0Sq/8TNWZdXMqu3mOvy/daqbTPLO6xq0jO1TrbMyqsrrvb7qK+7/AL6rXkjH3jTkjH3mV5ppbjarSsyr8qs1CvbW7hJGaR/9n5qL6GW2VkZFX5tqsG3VN4dtbVrrddO23+9/eaq93lub+7y3C3+zSOzSM0bq25d33a07j7Hc+bLbXX2byk3LEzbt7f7NXbexgmt3kWSOOXcqpbsrbn/4F92sbVoZLeXZPH5br975fu1hGUZsz+Jmjp9hcx6e93c2LNFKrKszfw/7tZlxc32nKjafP5DXCMv7p/m2fd+b+7urSW81j+zUR52jtfLZUZvl+WsWZ5bufeltuZFVW2L/AHa0pR97UqEdbj7dtPg0hVaOVr1n3Mf4dtV2MsqNL8qr/vVYa3l8rdsi2s33VdWaql9BPAybl27v4a3jE05SKNZZJdzfNt/vVv6b4T1e8WGVY44rWdtsT3DrErf7XzfdWovBt8ml6omoXVt56J93d91f9qvSfEniBtT0FI4NPWKx81XlRf8AWzxL8zbf7q1yYmvOLtBDOO8P6dIbiazg1C0VYp2Cys/yfL/Ev8TVp3V7rWm3TrLqLXKbdyOj7fl/vVu654h0yaztYJ9OtLbTFVWSKybdLt2/d3tXFfb5Ylf7JdQqzLuVmb5lrmpXq/HE5ZSXNoauqaxqGo26NeR+YkS/Kv3mX/arkry7WR2bcrHb/FTGuLyO3ZJZZNkrbm/22plxe3k8DRtLG0Tbfuqv8P3a7o0+X4S4w15mTaLpsuoX8MEStLK7fdWrGoefDdPZxNuVG2syrUuh38elSpcruWVl+arV1e22oytBYx+Usrbm3fe2/wC9Tv3Im9eZlKGyaeJmln+VPmbb96oJJ7GGN5I2llf7u1/u1f8AEkttZwJZ2fyuyfMwauY+4m1l+ZquIUqftNWe5LRS7aK/cjwRKKWipEM/ip1LRVAJTdtP20baAGUU/bRtoAZtop9FADNtOWl20UAFJS0UAJRtpaSgBtG2n0bfmoAZtop+2koAbRT9tFADKdRRtoAbRTttFADaKdTdtAw20U6m7akBKGpaNtACUUu2igAooooAKKKKACkpaKAEopaKAEoo/io/ioAKKKKkApu2nUbqACim0fxUAOooooAKKKWgBOKKKWgAoo206gBtOptOoEFLRRtpAFFFOoAKdTadQAfw0tJS0AOWlpFH3afQA5aXdSUbqgBd1G6kpaADdTstUW6jdRygS7qepqHdT1LUuUCVjQo3fNTVp6moAfRTN1OU0AW4bmSNNsbbaYzM7bmqBTUin/apcoCqyh91X5tUxEkUC+Wqr8zVltRUuCluHMOmdnfczbv9qmqrM21fvUVa0+PfcIvyr81VL3YhEvWemIbbz7ndH/dpI7NjKvy7krYW3a/dYopPlXb8zVvXEdjZwJEyqzqv92vJqYyUZcp2U6HNHmMNVaGDcjeX/Dt/ip+k3coZ5Wlb5aia9juLx4GXb/dal86z05PLkbzHf5qylHnVrFRly63NWHxArfu5JFb/AHqzr7UnhleSBqxb6VXZnjZdjNurPmuJfu7q2pYGHQieJlsac10t46+aqyNWffIqs21drLTLWZUbzGpl06s/ytXoU4cr0OaUuYgamU6jbWxmKtOUUU9aABRT6T/gNPXmgRNZ2c92zLEu7b96ka3lR9jK25a6Pwnp11MjbW8pG/i212Fv4VgXa0u5m/vbq8rE5pChPlZ3UsDKrG6PN7PSry5XzI4mZP7y1VuoWt5mik+8tem6hb22lQOsX32+VVrz6+jZ55WZvn3Vtg8Z9Y16GeJoRpaGfS05lxTa7zjHLSrSLT1qgHrU8dRqrfw10Hh3QZ72VXkj2wt/FWVXEQpR5plU6MqsrRKmm6ddXzMttA0m37zf3a9H8B6W2nfPL/rW/wDHas6TYQaba+RAv3vvVu6fbqjK2371fF5pm8sSpQjsfRYLBxpPm6m7Zpu+atBUXbWfbnYq1djkXbXyUonsCsirQq4o83dQ33anlGRTGoWNSyFaqyOqfNuqoxEQ30qhdtVcqi/e3VDqlzGnzt/DXO33iGIsyRN81ehQw06mxzzrxhubepaikMXzNXL6lrC71VW+VqZqkjPb+a7N92udWZprhmVtqr92vbwWXrl5meXicW+Y1dQZfsrSr95fu1ycl44dmX738VXtQ1DCNAtYUjfNur6TBYbljqeTia3NLQnvLhp23NVOnbqK9KMeXQ5ZSG05RRhWp61YBs+WnrDIfuqzU5dtatiYItjLLub+7WVSfKOMeaRn/ZJRF5jL/Ftpuxq27i+tlbbt3f7tVpri2VvM27v9mso1Zy3RUoR7mbsZV3baKfNM53L/AAtULGt4kcw6jdTaP4qonmDdR/FRRQAU6m0UAOoptOoAWhqSigAoo3VGzqrbdyq23d/wGlL3QF3r5nlbl37d23/Zp9cVfeII38TfIjRLEjJ5r7l2Ky/eZf4vu/8AoNbvh/UmubK0dlZlumdov9hF+7urzKGZ0qtV010Oqrg5wgpM2aFFFcz4y1OW0g8pJZ9PfcrLd/wMv8S/71dOIrxoQc2ZUKUqs7IzPGF3fN9oa8trmKxg+d4ty7GX7qt/31WV4D1xrOfyLbT2lWdtzzM33F/urt+WotW1a+fSbqLU9XgnhuLZkWJ/ldvm+X5V/wB3+KsTw699FYS/YbyKBW+V9rfe+795f73/AMTXxmNxy+tRqwPpKFDmouEke4ru2qzLt+Whq5LwTYW0FnDqtzq8s8zJtZZp/lT/AIDXVRvHKnmRyLIn95W3LX2OCxKrwu9z5zEUfZzsh235qKfTJnWJGkkbai/eautmcTP17WLHRLVZ7xpPm+4iLuZq5BviTE0DNBpUk8v+zKu2tLxxqsa2dwsDWUkUUT7pWlVv4f7u2uB0nWPDS6QtpqFj5t6u57ZkTaz7l+6zfxV8nmuYVY1lCnUsj28Jg6UqXNNalPWtT1PxJeefrly0GmJKy7Iv4f8AdX+KksWaKBIkZY4W3bm/i2/7VUtS09bC1e5vFjlml+dIR/CrL95qo6WJ7uf7sjNs+WJa+Qx1SpUl78rntYeMaceVbG8yRXUDQWflyTfM7s77U2L/ALP96nSaDdwaclzeNFGkq74vmVk2/wDxVKuiXKujRLBvZW3M7bVZV/h3VmN5QRmiu596qzbN3yq1Y07ctmjSV4y0JmhYxeZHZrK0TbpFVq6Lw/rdjNa7pZVgm3qrrLLLtaL/AHt3y/NXO2csESP5sUkm/b8qttZW/u10tvbeE9UWZYJLvTZd21WmT5l/3v73/stellUp82jscmKjHqJrGspI8UEWoXM6NEyyvLO7b/7q/wDAabpt5c2GiK1tbWzLKrI01xtb5d3zMq/xMv8AeqXxA92tl/Z9tqLXdjBGrMu77zf+gs1YtncywurfaY/KRGRl2fwt95azxleVLE8zKo04ypcpoTXmprazXmlReVZOuxFdtzKny/N/7NWPYzSw2T6h9q/etL8yt95v9r/dqlGt3c6itmreWjN821dq7a0PtMds/lSRQRRK2/Yqr977v3vvV51fE88uZnTTo2Onh8Wa1Fb2iP8A6l4laBGRVVv+Ar95apaxrWq+Id0DRxKssv71UZvnb/d/irnZLyS7VZfmkRfki+b5v93/AHa6XRU/s63a+a6ay1WB1aBJVVlauqnjK1bScvdMvYUqWqXvD/GWmf2Vo13FIkkUq7IlXauxmZVf+L5tyturBvnS81l7aziljVbaL5P4mbb8zU6+vLy/vJZ765nuZW3N8zs1Gjr5t4l01t5tqkTb3R2Rf9lWZf73zUYivHETjGmtC6UHCHNLcxbe8Z9RvvK3LbuixMrfxKv3f/Hq3mu57G6i0qW2aGKX7kKff3Mv3n/ib/dplxpculaPFdywff8Am3L8uz+Ja2tLSzuLrSryWeTVNWe5aW6iRtsqtt+Vd9b4SHvuEzKvL3eaJ1vw70NhZS6hfbvNuHdXhb7qru+7t/3lrqNcWSfTLqxidVuriB0iX+81cHfeJNRuLq4We7j0mK3TzViX+L5d2zd95mpng/xcv2iWSfzI4Z4G8hyu7dL8u5m3fN81fV0s1w1CKoRWh4bwlaVT2zOH8RT+fbrBKsXnWu1dyfx/Ntbd/e/+xqpavKjyzxRwSblTerLu+627+L/dpmoR30urusqPFZSys8UrJ97c2371WFilur3ylbyLdG2IzJ/d+81fI4iHLXkrn0MJe6dl8O7+8stS+0x6dHPK8TeVt+6vzfM21f4q9i0kzlGa5l3Svtfyv+eS/wAK15Z4fj1Dw7ZQaklzpstqkrRWzbdzs/8AFtX+GvTPC8EsOlpLdK32qf552Zvm3NX1eRqUKTgz5jN+Vy5zYWpFqNakWvZkeISLT1pqinrtrKQxy09aFp6is5CHLT9tIo/ip61nzDFVKnXb/FTFFSKKylIgco+apVpq/wC9T6wlIokp8a5pqrmpY1xWcpAOVFZtzL8y/dapKYop6ishmdq1heXDb7G88iXYy7mXdt/z81eV/E3Q4NE0xoLa2iudTvF865uNvzNEv3mb+9XsV5cwWdq9zcv5cSLuavAfjJquoXKpqNr+8uLiBVgtHTcy7tzbmXdt+VV/8erpoucoS7Ho4Hm5zyrxlf6haW/2SPU1jRm3bLdtv3v4X/vVD4XTXE0i41e21G0a0e4VJbfzFlnZ/wDYVvm3bV3bl/hqnNon2aD7TqrTs33mi2fdb+6zVkrdtaXHm2vmeSrs6W6s6r/4627/AMer5dV3GR7yjGUbG3eTarreoyzy3k9zZWTKrPKu5tm5tvy/xfxVueG/iFruk6HfRReZbRSyruuVt2bcv/PJW+6ny7tu3/arz6S933EVy0Ue1du5FZvnpv2i+1FWXfK1vF8yxeb8ife+6rf8CrSGLmndPUHSjLdGlqHiTU75rvzbqWWGWVX23Dea7KrfKu9vmqndfatRgWWK8824llffCkWxE/i3L/D/AMBWoNSjZL9NN8+2bY+3zUdvKXd/tf3afpepz6ajx2qx73Xaz/8AxLVzVa0pS5pam3Ly7Gr4Nj0b+1ki1qNpbddzP8rK7t/dZl+6taurOsuopBFZwWmnxMzRRLt3bP4dzfxVn6C8VnbtfT2zT+a23cr7di/3qralqMV4yWcUUESL8qy/N8y/3mrOVWdrdDKVTmeglxBHvfbKyq7fMq/eb/ZrJ1ZvJRIkZk2/eRW+Va0N8tkkvltG25flf+Hd/eXdWJGq3N0z3MrKjNuZ1XdRFcsQpd5Gh4fm+0s9qv2KB3Vna5uFVmXb/d/2qu31yw89La+uZ1liTz2lZV3t/wAB/h/u0ahe2zaQNF0qzh+fa0kuxt8u3+Lc33aPD+lWkruuo3MqnaypsXdub+GuGpOMffZrJ31ItF01r6dIpYI40eVV+0tu+X/Z/wBquts/BOna9q6aZ4evrlWVW+1TXK7Yk2/eb5fmqxZ20d19l0y58ySBN+6JGZIotv3vvbl3/wDjtSapr1jplnNFZ6H9iV0WJZXZWZdv3v4f4q8+ria1SXLT3J5pGT4m0PT/AA7dJZteS3PkL88rrtVm/wBlf7tYUmpbrXcyrHEzfKv8TVc1i9vNYtd0UTMq7VZ3Xb/+1R/Y0G0NdSLLMvy/7K/7v8KrXdT9yH7zcylyrWZQs4bW9dl/ezsv8VWrxtPjg+wp+72t97+7Ud5fQafatFbKyt/s/wAVYLXLSyuzMys3+1VU4uer2CnCU9eg5trzsqSbl3fe+7Wpp/lQqyRReazLt3v9xf71YjbpE8tdq7aIbiWFXV18xdu371dMqfMdMqXMadvb/a9UW2iWW9+ZURYU+Zv721a7W40VrRJbm38JwQWsEW1/tdx86N/fba33/wDZrkvCszW0ss63zWMqptSVGqG+v0+0Mqs0rfxPu3b2/vVhVpynLlRO/ulj+0rm4bc26RE+4zL9yqmqaveX6Kl5PuC/3agae5tbV1/hl+9VOOPLfMrbm+6tXGnGI4xHyTyPhV8zYv3fmqKaedWaPczK1Okjl2Ky/eZtqqtSR20sKuzbWdfvM3zVrzG0eUZbyMmySJWZ93yptro7fw9fS6RcanfXMcXzbVhZvnZ/93+GsuzWBYEeWSRWVty7fvbqmabzp9yySSM3zMzN/FWUpS6GUp8vwha2CfaFTUbxYlRfl2/NW9oNhopspmaW7e6R/k8pV8r/AGtzN/6DWHDAySrL5scjq3+9VmzmiRWga5byvm2pu+Xd/erKrzS2ZzTnKS3H65qFyivbLLLFbv8AL5X8NZMN21orNE0cm5fmVlqW+bc37z95/tVnyN5H91t38Vaxj7prTjG1i3Y3MSXSXNzF5uxtyp/DU8d01/qbs0Kqkj72fbtrOtU85vmlVakmu/siN5DN93a27+Kjl94px5pWRFrE7faGXcu1W+XbT9Nu2t7hZdm7b97dWTCrSXCu/wB371W5p2C7t1b8sdjWVOPLYffXiSXDyonl7u1VZLiWT5pG+78q7v4aryS5Zm/vUR/O21Vp8ppGnyn0VRtp22jbX7UfIDaNtP20baAGUbadRQA2inbaKAG0U6igkbRtp22l21RQzbRtp1G2pAbRtp+2jbQAyjbTtvy0UEjdtFO20UAR0badtoWgob/DRTv96igBu2inc0baAG0U6igBtJS0UAJRS0NQAz+KnUUbaBhRRRQA3+Kin7aSgQ2inbaNtAxtFG2nUAG2m06m/wC1QAlFLRtoASilYUlAA1C0u2k21IBRtpaKAEopdtG2gBKWnU3bQAm2lp22lUUCEopdtFACUtFFABRRTqACinU2gB1FFFIBVp1Np9ABTqKGoAN1FNo3UAOo3U2kaoAXdRSUdaAH05ajp26gCVaev3aiU09TUkklFN3U7rUlC7qNzbaSigkWnrTKetADttWLN/LfdUK0/dSlHmCJ0FjeyKm6NlX5ulXvtkVw37xvnrklkZfutQ0zD5t1cUsJGUuY2jXlE2NUvFi/1arv/vViTTSSvuZtzUkkrO25qj3V00qUYRM5S5iVZmVdu6omO771JRWnKA2nbqKKskKWihaAHLT1pFpaCR9T2vl+avmVAtSLUyGd3pOtQW+yNdqr/DWjceJ5z8sS7VX71edrMw2srfdqzHeSN8rbvm+9Xk1MqpylzSR2Rx04x5Tory/W83efK27+GuduE2NuTc1T/vHX5fm20Qna21vu11UacaPwnNUqe0+IzW+992m7KuXkKpKrJ91qg211mQ5YV2/M1LbhUf5l+WpPlZajw1AGvYpaLtZW3bq7DR7tgiqq/Ii/drz+FZF+61adrfyR/Jub5q8vG4X2sbHZhq/s5HpVjfLK6qyrXQWc6la8/wBDuImdVWTc/wDFXUQ3aiL71fIYvDezlynt0a/NHmOjW5VP4qlW8+T71cwt/wDNtq7DMzJu/vVwywx0xrHRW9xn+KpmuV/vVzq3qonzNtqjJrsXm7fM3f8AAqiOElUfulSxMY7nTTXKj+KqN1eqPlZvvVzV9r0kas235a5+48QzmTduWu+hlNWZyVcfCJ0uuXKqu5m+9/DXGySRRXHmtt2K3yrVfVtYubtvm+VayZJmdvmbdX0mBy1wh7x5WJxanL3ToL7XopYni2/Ky1lW5jm/iZVrPY7vmpFlZPuttr04YOEI2gckq85bj9QkV5/3e3atUmp8jZZmpjGuyMeWNjm5uaQxqWk3ULViH/xU9TTP96nfw0APU0/dUS80+gXMSbvmoqNadT5Rg1Np1FIAooooAGoWiigB1G2iinygFFFc/r3iS007UYbNmbzd/wC9+X7q1z18TChDnnsaUqTqu0DoGptV9L1Gz1O3a5s5fMiVmTd/tVZrWlUjWipx2MpRlGXLIXbXL+Kp7qzlhdWZpYnaWD+Lev8AFHtre1aHztNuF3tHtTerL/s1zuoX/wDaWnWupq7RywKqMifK8T/3/wCLcv8As15+Y1IqPIztwlP3uY5HXtUiuNbmvm3bJ1XbEybfu7dyVt/2pILVpN8f9oXjpb2tonyrAm5fmX/gW3/x6uZ8VX0D36+Wu59zb2+8r/7X+zWr4T093059ZuY2+Rmgilb5vmdG+7XwVDEzeKkoyPoqtNeyVzuZNSTS0a2ljubtoEXfKi7vm/utXmXibxBd3iyxXdncwI1zuZ5fuNt+6qr/AAtU9x4j1DSmdbbV2+T53aWPazN/d2/NXNa94j1DxC6XN8/mtA3yKvyr/wB812YzNfbU/ZSv+hnhsH7KXNY0rq0XXbJ3iaBnt4nluX3MrbVZflVtu3+KlvrmJ57Gzs7aO2igiV5XZfld9v8Aero7XV9NuvDl8mm2axXSWe50ijZlRmX5m/8AQq4zR9Ukjt0tVZVt9vzb0Zv95q5sVyQpRs73OmlKUpPyN3w7bz69ezRW1jHPbwLvdPN2r/8As16bpt/ptkv9mJAsUybd1vb/AL1V3fxV534dt7mG3iXT52tIpX3StKu1H2t/C1dVca/4f8OxJBp/k3dxtbfMvy7v9pv71enlGIpYWneUrHm46nKrK0Ynatwu5vl21m3WrabC8sE86qysqMp/usu7d/u1mR65qF5ps9yi2ViqpiIvKrb3b7qt/CteSeINSe/eXy9qtKzK/lfdZlau7M8+9hCLpdTmwWXc8nzlv4tQ20OrrBp1zafZ3Rf3ULr8v8Xzbax7Gy0+4tbXbKsdxArbm83d/u7V/hrOvNLlgRZGZZdzLu2/w1p2Ngtou5VbdLtbdt+X/dWvj8VivrEnUjofQUafLHlZn3F5bRz7Z7mRpdu3a3zLT7G5e2nVopGXd954v7tV91tK82pfYZJEibayv93c396pl8q5VJYmig+TdLub5d1cE5G0TpY3ke3SNZdq7typt/2fvVt6Lq+gXOjPoer2n2Z9277TCqt8v3m3f98rXD6be/Y7jZLJ5it8q/NV+6LI63iou9m+ddvzUYWtPDzuhVYKaOg0FdGkuvscjSyWs8uz5tqfxfK25t33aVorOw1m+XT7zyrXcrRPcqrNLtX5k3fN81Q6lqTTtY6vFYrA86tvVdrK7fd3Kv8Au/7NXb63n8TQW9jLYxwXET7HuVdNir/d+98zV69BuUnT+44523exgapfyv8AbZ1islV1VGRUZdrL8vyKvys1VLOHdpcU8rx7933W+Zm/2qv33hq+0d2uW1W0nVPuRM+5mVl+9/n5qzdNlaNt0kEawL8u1vu152YScZWludND4bodGWt0af5meV28tWb+GpJLZYoP36rIzLubd/DSW7NNdN8q/K3yru+7VnUv3qp+4WN2b52VtzNXl83vHTEo2qt88u5Y4U+7WtHb3N6yx2dnPc7vuqu5mdlWsyxslRJZblfkT7u75lVa1dH1CWwuPtKyLudWSJ2VlWBmX73y/wAVddOKlLXYiUgWaW00S4ktlkill3QSzIysqKy/c2sv8X97d/C1V9NeeK1W1inWOFkV2ZvlX5Pu/wDoVW1t7HSrVZPPka7dd7K7bldmX7zJ/wAC+WsyzVfL8tWkl81dnzfLu+atlbm5Yme8bnUWemvru1bm8igtEiW4nuJfm8pv4VX5qyrG8vNElaO2/dPBu2zMn3v9pdy/KtdxpfhiOPQ4W1KWSS1+bdCrLtiZv4m+bd92sG8jufHPjK6gsd7aakqxKyL96JPl/wDHq96rgrUoX0mcMMQpSfY4i4dNY1v5WlisnZV3s7P821dzN/wKuo17RE0e10+Kzvo5L3Y2/wAld/y/eXd/D/wGrHiDR20i1uG0Wzl3LtljuHTb8jfeVf71ctdXOpfvpJLto5ZVWVk27V+X5dy/981yV19VvGotWbwk6jTT0F1TxBdX1raQXca/6KrRbVVl/wCBf3d3zfw7auae0D6tEl55q26srvsVm/4EtYV1Pc7fN+75qqq7V3fNWqsF1eQs1s0slxEq/Iv/AMTXlTrzlJM3UI2sj0Pw/HpF9rd1PZqq2qs62Fs3zP8AM33tteo6ek8VpEly26VUXcy1852NzfWcq7pJYnZtu5U2s3+7XSNdazY3Nq2my6tJdtF5rrLOrK3y/wCzX0+WZtOlBxcDxMdlzqyvzHtGoX9tp8Hm3L7V+6oHzMzf3afpNzcz2/2m5SOBGb5EZl3Kv+181eTXFn4o1e1S6u7uNluIluFbzGb5f9ldv3vu1pWvgbWLyJGXWrlbd49251ZWVv8Adr16eMxNaWlOy82efPL6NOHv1D1a1uba4d1gnjlZPvbG3bamUVk+F9EtNCsvs1s0kjP80srtuZm/+JraWu+N+X3jyJcvN7oq1KtIv3aeorORILS0U6oAmj+7Uq1mWeqwTa5c6QrL5tvEjs27+9/DWqtYyCUeXcetPUUKmKeq/N92sJSAcoqVd1NUVKorKQDl+7XPeLPFVnoarBHE13fOyrFboy/eZtq7m/hrolFeNfFfW5YdSmiWK2Vn2q8UP+v2r/n/AMdqOZQg5voehl+FWJnZnRahqOsTXUtnquoafBFPB86MrbYd3ysu5fvbaqiw0B7q5s4ri2ukdV8qSNizO235vvf3f+A15vZ3i3MU0VpBctdOqqzTS79y7lbbt/h+7VrxVqsiT7rO8VUTbFOv3dqsvzfd+7/dohmS9lz2seh9T9nPliyL7TosOnXWn3Ujea0rpBLKm9GX+FvvfeVv96vH/FS2kWoyxadJL827dKvy7f8AZ+X+Gum1a8a7+0RafFcy2iLvf5FZk/u7fm/76rjL68YIyxp5b/dZttfNV8S68r8tjvjHldkZXlRRwbpPmb7q7m2qtMt7bczbWVtqs7MzbVq3ZwxzxPJc7tqqzKy7f4dv8NRs8ZuN0cCx2/8ACjfN/wB9URjy7mvMU7d1Xzd0e7d93/ZohDSS7UXc1TzQozbmfb/FtWjTYZbm9eKBJH3K33V/hqOYrm6nQQzRxW6RWyr8qbp3dF+Zv7v3vmWsWO5WfVDOkXG7+L7tamrWltZWqRMzRtt3NtdW3/7392udmuYwm2JWXa25fmpRjzGUI82xd1aRzEkTsrPu+7/s1EyskSW0UscpZfvI3yru/vfLVCR5ZpfNdvvVoW8FzDb/ALvaquu6iXuxNeXlRpeEdabRLi726dbahNPA1vE025mgb+8n+1Xd+EdFvJ9FnhtvD0smt3n7+2uDKu1YF+/8vzfN/vV59oNtO9x9sX90sXzb/u/N/vV0mh+Ip4dW8+8uZ4LHa6NFby/PL8vzLu/ut/FXlYqk5y9wmUtTXs725vHXT7XSLSNLVdr3CzsyL935lVmXdt/3v4mrP8SeHtOibzV1OXULhW3Ss33k/wBn+JabNqnm6dFHLbRWlui/LDbrtZ/9+otNubab93Is8ETfLtT5v/QqmnT5PeRn7fljsE12kVrtSSeRn2q6P83yr91f9mmK7TIr7Vjib+9Usdqqfartn8xEX5tzruX/AGVrKmv4k2rLuVv4VquWVTY5fi2Ld9baetk0k6+a23ciqtc/p+1bOWJoI181t32lvm2L/d207UJpLlpWa5Vfl/vfe/2ao27yiBolZlRv9Yq120ocsDspRlGJGyNJcMkatIzNtpy2cp3MzbUT73zVNDczhPslsqru+X5fvVfuNBubTYl28Ee6LzW/0lG+X/gLfe/2fvVrz8pvzSMzT7ee7uliij8xm/h/u1Y1iJbW6aPfbSS/3bdmZVqBrqRmZYt+1vlZlqX7m3yI/wDeZqlylzEykQybvlWdtzf+g1caXSFgXyvtPmqvzbmXazVUkLGVmdtz/wC796p7OwYv5ty6wJ95V/iapkRK1tQaZXdWWJtq/wAK1VW4Zmf+Jf7taHn2ZXyFjk+b7q/xNVSSBrP91NE0TN/Ay7WojylU5eQxZ/N2xrF83+zUbPPC+1V27/lqeOORp1Zf3a/3afcXCqrMqqzr92rDm97QdHbpFK6XMrKu3crL/FVdlSb5Yvl2/wATfxVHNeXM7LudmZf7q1f0nRNQ1W6iiUrFv+68vyr/AL1RKXIrsnlcdWVJJmTbHKzMq1VuJ1k+VYlVa1da0pdN1G4s1vIrlUX/AFyq212/2d1ZsdjPM3yo23+//DVRqR3NI8sSvVe4uPm2/eq7JbskoiZl+am3ltBEq7t281pGUTWMojLNN6b2/wCArT5Bu27Y1/u1csYrPypfPlljZU3R7U+8392oGXyk37fvVPN7xnze8Zl1EyPtZVX/AHasWdpL5DXKsq7f9ra1P81W+ZttEjqyf+yrVcxtzSPoLbRtpaK/aj5ENtJS0lAhtG2nUVQDdtG2nUUANo206igBtOo20u2gBm2jbT+KNtACUbaXbRtqQGbadtpdtI1ADaOadRVANop1G2gBlFPo20AM20U+msKAGUU6jbQBHRTttFADaKdTdtABtop1NoAKKdRQA2iinfw0ANo206jbQA3bRTqKAG7aNtOooAbtop1NqQEo20/bRtoAbtpNtS7abtoAZto20/bRtoAbto206igBu2ipP4abtoAbTqKKAD+KiiigAop1NpAFOptOoGFG3/aopVoEG2jbTqKAClo20UAO3UUUUANoopKCRaSiioAKKKKChVp1Np1WSOp60ylWoKH06mLSr96pJHbqdTd1OWgBalWmLS1IEtJuqPdQpp8oEm6mtRRSAbSUu6kqg5gooooJClpKWgB1G2hadQA+OrEdvvdVVl3NVeP+9Uqsy/MtKQFhbXD+W7basTac23bAryN/FUFvcSBtzN/31WlZ37RP97bWM+cqMo9TKaCVGZXjZdv3qdHWxeW7Xa+fH8zN95aoNbMi/M3zLVRqc0SZxsEczfd3VPHzRY2Mtw6/LtT+Jq7HT9E09rLc6tJN/Dt+7XJiMVCh8RtSw05nIs2FZWWqjIu75a6DVNNZH/df98rWX9n2P+9XbtrelWjKPumVSnKJTWnqq/xU9lVW+X7tOjR3+6rNtrQmMRrHa33aYu7dtWtaHRZZbPzd3zt91P4qzJo2hfbIvzVnGpCXwlunKPxHReH0+zfPK3zNXQxzM/3WauJs72RHRW+6tdNa3URiVvMX5q8bGYaXNzM76FZctjYhXd8275q1bO42JtaucWfZ/Ftqvda28C/L8zV5csFOrojq+sxjqbfii5WGDekrLu/hriftjLcblZm+aptU1F7lN0jVk7vmr3cvwXsqVpHnYmv7Sd0dNNcvd6dtX5fu/N/erCZJHn2szLSNfSlFVfl21GzNs81mbdXTSoeyMZ1OYdcFV+VWbdVfdQxy26mf7tdcYmEpC7qYzf3qdTN1VyhzDWplLSVYhtOWilXigCRRRQppVqRAo/ipy0Uq1QgWpFptOoAKKKWqASm0+koAbTqKKAFpP4qKeoqQILqVoLWWVVZmRGZVVfvNXl2valfX1rdTs0Cqqq8rG22NuVtu1v8Ax6ur8TX+vaart56rb7m2Sqqq3/Aa4rxRrtzfaRDbPL59w86tKzq275fu7q+WzfGQmnTmmj3svw84Wlodh8OZZ5bOKKKdvsiK7qgVdu5v7391q7JVryrRbSKwk8+8nn+xStuZImXdt/8A2q6JfEekJpq6NZz3rPtby5pV+Z2rmynNYYWj7OrIMdg3Vq88EbFxqaySrbXLxwW7s9vP/eVv4P8AvqvMtUuZ9IsprOX7XBfK7I7q67XXd8qtXXX2m2viS3TUbFmubhV3T28svz7v73y/7Vctr1pqGm6kr6hBLc3D7d0LLuVvuqrbv+ArXFneIm6XtN13N8DGEfdOaa5UyIqx/vd21mZa29Na7knhs4pJJE+Z2RX2qq/eanTWMt/PM8sEf235diqiqqfN/s1m6gJ7OWaztliaVfl3uv3f9qvhqWIhKppI9v4olTxNNbPqVun2ZYoUVldt3zTv/E1VIb2xtvOgijkkV1VUbdtVG/vf7VSQ6TG7+e8v2mXduaulm0JryC1nis418hv4V/8AQ66auMpxd5yCPu6GTDfXItXttMufKSVf37I+12+X+9V7w/caa0H9m3Nz+5ZdsTKqrtf+Hczfw1heJLdra4Zo3272+dYl2ovzfw/7NbHhXTWu7y0s4vMaKd9jtEm+Vf8AdWuijUnUa5GJ8lrstbNNuLxLGK5kif7u5NzLW7ofglP7buP7aVVtbWLf80q/vf7u3/erko7NtOZ282WNUldVdflZttXrjWtT1yeGTU7xo4bdFRFVPmZV/vbfvV2YbEUcPze0V2Y1adSfwPQ1fElzoN3paWzXdtp96qNu+ZmV2Vvl+b+9/erj7gpbt5/leXFE/wB1W3fe21pagLbV7OaSW2+zXE7f67+FV/h+X726sXUIJba1mtGnZlZ1Zvm+9/drHF4tYmKiOnSlTNqzvLaO1lXy90t+qozt8yoqsrbV/wBr5f8A0KtHxBfrb2VjpC2yrdRM0ssrbf4vl+X/AGa5TS7++jukaC2n226bH/2d3y/d/wCBf+PU7ULe81Wdbyzvt21fmeZm3Kq/3q5qUeX3JPcrl6mhqEEV/pz2zTtH827bt2/NWOulxRv5TL5jfxOzfKtWbW8vtQnle8aWW6b/AJas3zN/9jVG6nZLpmkkZmVvm+bdUcrjK1zT7Ny3p8jLesssTMv3VZV+Wte3k+0ebHLH8j/Iq7fmX/arDjvp7adXR5JE+/8A/tVqWusvdfNEjRM38US7dtZunLmuPmNGR4LZGiguWZEi2orMrqrN95f9n5awYZ5ba4VrG+8u4RmZP3m3b/wKtm88OXdvudvtv2t23xQ+Qy+ajfdbdVOS1tN7wSxeY8D/AL/zfvK/92vSq0p0o80jnTjL3UQRy31zEtzfStKrruXazLtarcyKtr5Xmxq3ysir8zL/AL1ZeoTMj7Y1+Xbu+Vt1RLMzxSySq3zLtRU+9urzasJSlzSN4+6aMN9FH+62eZcOzM23+Fqu6bbM7StPK0m5tzN/7LWcscqQRbVWOVVXc38TNWtsW207y5LlY3fcrbm/hrkq6fCWQ316rs0UaR7E+Zm2/earNvPH9jt2uf8ASWbcy2+5lRP9pm/vf7K1zSlpZ1llVo03fwru/wC+q6LT4orSB3lZmlZlZFb5vl/irpp+5G1yJR94q3Ftc/avNvG3bk+Rv73935a6fQ7aK30ax1NbaNpYr5t0rfMr/KrKu37zfMv/AI9WbDKtzEyy7mRf+BN/wGpZH2abdXMSNHaWbKrt/Fub7v8A31tqqVWXP7hU4xlHU0vGms6zrSeVqEi22xvmW3VVXb/d+X71UNHk1DSkittKvGia9fZtT7z/AN3a1VLd5Zrh7q7ZYkZfn81Pm2t8u5V+7urT1LxDp6aloq6arR/Ym3Leyp+93s277v8As/w16Ua/NL2lSepzezjGPIloS33ijXtPg1bw/q87T28TNavuT5dq/L8rf7O2udjs2NlNqF1ukiliVov3m1nVfl2/+zVpW+o6LHetPfRXN9cSy/v4n+6qMvzN/v7mqpC0t/AmixJLFawIzoz/APLVFf8Ai/4C1dVSHtfecrmceWn7qRiyTwNbReVFG0ybfuMzMrf3vm/4DWvoMssOoyyrK3ksn3m+Vv8Aa+7WOthZwXErReVPMsrNtT5lRF/iX/vmtC3uIl01ZXWT7zK21dyr81eLibx0iddM0YdWjlv5Y7y8juYUTYlz954G3fKyL95WrsPCdxfW0E39paVdstwyvFtXc0qfxP8A7tcJb2bX86XKwLFbp8yxN97/AHman3UWpwyqtpLdwSuvysrsu3/Z+Wt8NjJ053RlVoKcbHrGht4gEFv9js4rZE3qjzfvWeJm3J/3ztrb03xKtq8sfiPUbSBtyqi/dbd/8TXj1iJLZd8S3PnfdaWVm2q/y/N/vfe+9WjJot5fzrfNF5n2h22/Nu3Mq7m+X/gNe1TzecdYK7PNq5dCcff0PctF1O11RPNtPMaLarrKy7VdW/u1pqK4zwD9m0nSJluZGWVnXdErbtvy/wANdRouqRaosrQW13GiNtVpk27/APdr6ihVlVpKbPl8TS9nUcY7Ggop60KKdtquYwCorqZIIJZ5W+RFZ2/3VqXbWR4q16z8Paa11eK0u75YoV+9K392hasqnHnlZHmcmsXdj48utQnubOdriVFVnXb9l3LuX5W/urXten7vssTSSrK+xdzr91m/vLXiUfn3Nxr1jrUVtEl//prTLtd13fdVf7tdzZ3uofYre10rxDpc8sTKm1flVYl/i/2W27a5OaM5u2h6eOoXcXE9EVVK/eqVUrF8Jw3aWbyXmqrqErtuZk+6n+ytbyisJ+67HlCbalVf4WoWmzNGtvK0kvlIqMzP/dX+9WRcY+8Z+vaxBpcG1VWS5b7kW7/x5q8k1LRLTWEl1OdrTzYGZpdr7ZdrN/F/db/4quvbQY9Ysrm6WVZLZl+Sa+b5m/i+Vv8A4mvIfHWpWkd0sWmyxzxIm1UtkVF3M3zfd++tGLlGjSaPYwMeX4CpY6p/widw06xRXMzI6qrszbdzbVb/AGqqWtpqHi37bJFcrHEqO7zbNyKy/wATMv3f91a5e81mea8is9kGxnV2aZPlZv8A4n/Zr2WTWdI0n4brfTx2NzdbWilt7TYu1W/vpXmYWpCsuSb0O2fNCat1PJ763juNNi0/SIJ21lnZpfJTd+62/e3L/wCPVxWrQrYfuJY2+0bvn3/eX/Zaui0fX9QsJbt7OXyFvU8rZ93bWFJYST3u2dWvrt9zLbo/3v8Aa3V5suV6ROrqTaHYm/WG51a5X7LBAzxIz7nZFb7ir/vbq6VvCumzaJdeIdY1WLS/NRv7O05U3yvt+6rL/D/vVyMk0+lJNbanpkUd67I0Ts3zRL/urWhfLPcpFqcazyW6t813Mi7G/wB1W/u/3a2hUjHpcUqcoyvcy7fSnmbdPcrt/hVUartrNbaZFtaJvu7l/vM3/wATUepX8scEq2axxwyt/rtzLvVf4dv+9WLJtDbnbzP4vvfLXMTyynuVdQu57y4d5Pl3f3flWrFmbaGy3Nas025trs3y7f8AP/oVQtCzNFJujZXXdtVtzL/vf3atzLELfcqr83yqrfeqmdDly6IzfvNu+9W5+/ktVaWWJE2/IkXzN/u1FY2NsIPtNysku35vKX5f/HqWa8uY0XyrXyoV+5hflX/gVZS94iUr6IsLNeXEC2zTyLaq25ovu/N/eqRr+BriFZIll2MqpEvyq3/Aqzc3czq7wMu/7u5fvVpWejOjJPeMvzf8sq55RjHczcox3ND+0pdQ1mVmijiZvuxfwIq1HdXjSNtVfLRn+9/E1Q/bIEYrbL5ar8ry7921asLNLPbpPE+5VXam1fnb/aao22MZ+9K9h0d200rWzRblVflVfvf8CrK1a3UTt5Tff+9VlhcvAixRMrM3zSt92oZpooYPM8xZGaq5ZR1Q6ceWWhj3S+V8qtVe3uLmNW8ptu771FxKrys1MZ1auqMT0Ix90u2rRJA7O264b7vy0ixM77pfm/ur/DUNqzM25lVUWrau0SKyttX+81KXuky0NC+fzUVrmRY2Vdqqq/w1lzbFZlSRm/2qbIHLKztJJ/vUzqf7qfxVEY2IjGw2FWd9q/8AfVX13Fliibc7fKzNUFjC87+XBEzbvlVQvzNWvHo2uW9kuqx2ckdvE25ZpflXcv8Ad/vUp1IxdmOW5FpN5c6JLM0UUXmt8m9k3N/wHdTdSvYmaK5urxr2dl+bcv3F/u1X1jU5Ly53SzySp/tIqtu/4DWfsaZ9yr8n+1Ry9WPlLV9dea67F8tGX5VWqUky8q3/AI7Vq102W8t5ZY5YlWL+++1m/wB3+9UH2FVtfPa6i3btrRbvnX/a21XujjGMQtTc2zpcxKyf3WrYs9QV1+0y3MvnOzb9n8K1hbV2bfm+X+KpbXym+9UzhzbinHmiXbqRJbrcrNt3fx1tapq8UGhppWnzt5LMssv7pdzNt/vfe21kLZypZrdy2zfZ2basq/3qz9SmiVFWJtz/AMTVl7JTkjOMeeRSvJWeXcrfd/ipIS077dzM/wDeqvId3y1Np7tDOrNHu9q6pfD7p2OPu6G7cWV3axRLK0Lb/m+Rtzf8CqjeO0knkLHtX+6v96tvxN4ludXkhkaztLLyoliVIV2rt/vf71YEdw0Ssq7dzfxVhDm5bvcxjEluLOWz+WVfLlX5drfeWqy7Ym3UrNmhVaT7q7v4a0j/AHhx/vH0LRTttFftx8oNop1N20AM20q06igBu2jbTqdQBHtp22jbTttBIbabtp9JQAbaNtL/AA0UAJRRS0AJto20tFADNtN21PtprCgBm2m1JtptADdtFOo20AM20U+m1QDKdRTaADb81G2iipK5hGptPpKoBtFOpu2gkKNtO20baAG0KKdtpf8AgNACbaNtPptABSbafto20AMo20/bTdtACUbaXbRtqQCjbTttG2gBtFOpu2gOYSilooKEo20+jbSJGUU/bTaAGbadtpdtG2mUJS07bRtoAbto206ikA3bRTqKAG7adS0n8VAC0badR/FQAUUUUEhRRQ1BQ3+Kkp9NoJEpdtFFRIoKKKKCQp1FFWAU9aZT1oActLSLT6iQDlpVFItPqSRaKKT+KgAopdtG2goFooooJCkpaSgAoaiigApaNtOUVQDlX/ap6imrxUq1Ig205RRT1oAlt4mdtq1bWCVVVmjba38TU/R0zLuX+GrV5KzSqrSfJ/DWEqkr2LjGNrmjY6XLFboytu30moaa3yP5bf3WVak0vVGtokib5lWrUmtxJuby1avO5qynsdf7nlC1hW2t1Wf92i/dWur0M2xs9sf8f3q8/a6W6vfNud21m+7XZeGf4Vg+WKvOzSlKMOaR04OrGU+VFi+0dVzJArMzVzmraDqT/P5W7d/dr1jSYkmg3Mq7mqzNYK6bdq14lDOp0JHpVcvhVR4vZ+H5ZdOleSPbL/CtbHg/RWh3Syqrbv4Wr0j+z4kX5Yl+as+aGC3dlXatbVc7qV04dyY5fCk0zmbyza2dmtol3t95q4/xFYMjNO0bKa9Guri23M25flWuM1DUILvzY5dq/wC1XflderzXsc2NhT5bHGfxVdt7mQJtWoLhEDttb5KRXUfKq19RKPMeDzcpqNfs0G3dtaq0ly5b5mqo0jGms9TGlGISqSJmkZl27qdHtP3qrqafurblIHbqXfldtR7vmparlI5h9FC0fxUhgwqNqlb7tRt/tLVxAib/AGaSlaikAlLtp22jbVAC09aSloIHrRQtFSA6nU3+KnVQBS0n+9S0AFJtpaKADbTttG2lUUANxzS7aJCsaNIzKoVd3zNWba6/o1xGrDUI4nb+CXcrLXLWxdGi0pysaxozkrxiQ+MLtbbRpVbT5L0OjfKv3U/2mrgtYubG/wDDUN3Z2dzG8USruZlbc275vmro/HmoTvpE7W1yv2dl/dLFu3St827+H+GuX0OGIfD6682SVnuvuhf4G3L81eBmdRVpuMX0PawMXCCcu5jNqGpa0jMrSLN5TM237v8AsrtrThbRYtBt4EuZWvln82Vinysjfw1mXCah4Zl2WflyM6qks0Xz7vmVl/3W+WpPLWGwt5W23Mtwv3Pu+Vt+9/vf71fDyvS5j3eXmsbsieT52q6YksexNzW+397En97d/CtFveJH9mjeXbbzqrv5qb2V/wCLa33v4axlv57W1unS+kjuLj5GXcys6f3f9qptNuWkS1jZ1VV2/Oy/d+bdXiZripVaaipE+z5ZHRXSNpvnXi3O6KX96+5l3fLt2r/49WVJp+nve/abqz3PdL5qNuZmf/aqaOL7X9ulumaW3b5kli+6u35vu1Y0+e6Olq09q0m5mSKVm2sqt97/AIDtr5hSlTWm5pzGPrFtodmq20sUq3Eq7/l+8n93/wAep91b6nLYRLZ2ssU23azebt3Kvy1Lr1vY3dqJYpLb7Qiqu5WbcrL/AAKv8X+9Vixs9SvNDmglkjZUTzVWX5d3+6ytXWqvKoyk/vDm5pHCXlukN1EtzL5jqyrKqtu27Vq1Dc3SNcPa3M62+3cyxOyK3+9troZPDWnFZbptStJdse7ajbWRv9pf4qh0fTWudOvYrSRWZWVV3NtVtzV7Cx9JxujX3TH3Tx2ySr8u5vufd+Wm65p11bXCQPL8kqq2z+Jf9mmfY7yLUXXUpZY7W3+Rf7qt97b81S6heRz3C3Mskkm1l3vu2767eaD2K94Vlkt7jyP3S7f4d+5t396qlxpU80vn207SS7tzMy7V3f7O6rd1DbG6iltImWLa23/7KmQ3LPcJFsklX5vuL8vy/wDoX3qzUnF3gP1M+8g1CG/2/aWZt25vl/i/4DVHUtSaX/iW6fFufdtZv71dMs0U7/NJtiVtu7bWffWljbQOsEscErur+a0e7btrSnVUp++RymJpN41uzrPK25fm/wB5q25Esb+LzYtqysvyqrKrf99VWs7OKzR5WuYLlJV3NuT5t1RaSype7W2tv/h/hWrqe9qgiWYbTba3ESStPK3y4X7q1Da2d8j+XpssjO3ybNq/N/s1vXW3S2e88iOVZ4tu/b9z/wCyqnpviVrV2kis45GZGVt6btzf3v8A2bdSo1OZq+xMvdJJE8dzrFBI17HsTakXnuvyf7K/drm7qW8tn3SvLHM7bn/2q77VviO2r6Clpc6ZEs0SqqzJOyMv+7/FXH2dnc3F75t5GzbW3Lu+7/31/FXqY6WHjy+zlcyoc8lqrFSN2NlK23d8u3dWjpLwfY/LijaS63bl3L935fvVnSQxxXEyNP8AKzsiov8AF/tVoyWuoWdmlzbRS/Zfu+av3Vbb92vLqe9obxiWLWZppEW5bb/E67fvbatXVrZ31lDcpczSMr/NEy/ep3hW0im23ctpL5Sf61927ctdIs1iYLiDSLVZbSJFZ283d/F96vNrT5J2RpEy44orazWWVo2Z2+RF+Zt395qpahK0120S/Kyr87Krbf8AdrqLXT7uTTVu4IvLVd2x18r73+61cvGVtoJYvMnkd1ZG2p8rK33qihNSlcci7p/lfbIkZ90P3HlVdyru+XdU2l2bf6dpF9LKrRSqyW+1WaeVflXczfdXazNWZYmfTINti3m+en71lVW2tuapbX7dcu8ssUnnN8zea/3m/wBpv92vRp1Yw2MpRlIj8WTXlpdJZtPBdyttRFh+ZV2/ws3+zSR2eX23NzJGPvKu3dsamfZE/tGXUFaSR0Xays3yxf8AAq6nT7DT4fD97qOvSyRXTL/ocTffdtv3lT+7/tNXZh6P1ifuoidVQjqYmi6bqVtZ3upfabTyl+ZpZWX5d3zfd/4FWJrniHULuRIoGaJFVkVk+Vn+7u/9lqzMFup3lnu7SJU+ZbKL5mZdv3m/hZv+BVHr1zbTXSy2flx+Ui7N67W3qqr/APZV2S91cqMevMzL029ks1lnis13IjKzbf8AaX5v8/3q6qzubRUtJY4omt3k3S27fw/L/D/6FXL6hqOoNpaaVLZxwSrL5sszLtldW+6rf7NRWayGe4S5k3Pbru+9urixNLVNGtOXunb2+owLqK+fJ5kMrNuXbtWuotX1C/vbuSzi22v8awr8ir/erz9Xkh8qTypVS4jVopV2tW5Z+Jta0eye2tdVdpZ1ZPK2o21d33m+X+Jdvy1zUeSM/wB5sKqpyXuHdapoumaXrzwaheTN5sG+BlVfu7G+Xb/e3N81Ma+trbTrdYE+zMrJFFaRfMybtu53b/gP3a88XVtT+3vcz30n224Xa8rJuZVX5fl/u1p6TdNYXiTxRSyyrE+6WZtiszL975v9mu9Y6EJWjDQxlhpSjdy1PXvBuhK2nIr+aqea7St91p23fK3+7XVX2p6dpkX+lXMcbL92Ld8zf7q14kvjnxPeSpBFqDRysqqqwoqpt/3q6nwfpEGmf8TzxJfLd3d02y3t1ff/AMCr6jA5lHE2hTVku583i8DKF51H9x6pCyzRJKqsqsqtUqj/AGajs2keBXlj8tm/h3fdqwqV6MpHjGfrBvorJm0yzjubj7qoz7V/3q5DH9jwt4h8W3kfmxRM1rbO29/N/h2r/tV3epTyWem3F1FbNcvEjOsS/eevNtN0ie48RvqXjaJYrjasyrNIrRxJ/Cy/7X+zWlOTsztw/uw5zDuhqfh2ztNYfTJ/7QvU/wBJS7VWR1Z9u6Xd96tGOw8VXFx5rfZrS3tfneK0i+X723cu3733a2PGGr6BfXztBeNPappytOXRlZdsu5WVnWuRm8bWto7y6bPd2mxt0Cu6ttX+JdtebiKlOh78/uPYjGpXp+4tT13wrBqcTIixQQWrN5v7pGVX3f73zbvvV1a1xPwj1ufWtGma6uVkmWXdsb7+1v4q7lV/hpTqqr7yPAqRlGbiwUZ+7XK/FS8Sy8IyqzSrNcN5UAR2VWb/AGm/u1P4u1XTo0Nnc3liiou9k+1Msr/7Kov3v++q8/1RNc1Cyms0160tNHeNW/0l9+9v9hW3NThaDU5HdhqFmpsq65fa5bXELaxq8Udlb2cTrFCu99jfxJu+61eWXEttI0t5qa3ccKy/umbczP8A3Vb/AIDXX6lqmkJPPBearI1qjK7Qw/NLcS/d27mXbs/i27v4qw7W7g1rWbiz8iT7K7rshlVV2fe+ZW+X/K14mPr+3tCGyPdoQ5FzNHJ6hFZustyttBJK3+oVXbzUX+6q/drL0+w1XUk81bGVrVG2NNNLsX/d/u16rdeCdM028lkvNVtJHX7qxNuZvl/hb7vy/Luqla6Hbefa3LalJJpssux1279r/wC4zbd1ebzcs1TbN+XmXOebXVpciXy49P3NuVf9+snxArWVutpcruu/NbzAzK2xf4VX/wDar1ddLs7vxHqMS3kn2WD90k2/ajf7qt/6DXL33hnRklmlZ2VV3blZt23/AIFROcKU3Arl5Y3PPFtJdiPtZm3bm+X5lrf1C5u5be1tpZfLt7dPlhZm2L/tf7zUXGq6fayu1tFJ8rYieVt3/jtQXE1nfzossiqn3m2L8rf/AGVS5S3OeUpSZRmR5V8+OKRbf/a+7UVrbR3t0qMzRQqrMz1Y1CeAMsUbt9n/AOeS/e21FJdeRZNbRRSKjtu+f+KnHuVHm6FS3LRTvJA3lKv+181WLMK94qyOq/3mb+GqitucN95v4VC/drW0nSp7l/NV/wB1/G33aVaXulT92Opf1K1tpLpItNuZJItq75W+Vd3+7Td7afatB+9nRvmbcrbKsX1zOP8ARLC2WLb8rPu/irPZ8J5V5fu/95VrjjKUlqc3M5DV1Z518ueTai/diX7tU77UpHi8pV2/3m3NUtw2kxyttindf7275qq30dpM2+2kWMf88vmZq6IxRtTiubYNPhiLefeSqqt8yru+Zq1ry/VIvI09Plb+Jfu1znltu2r81bUMqWunoibfNZdzfNROPvXHVj71yqz3csqxM3zr/DTbpNlv5rMq7v4P/ZqrTSNv/drtdvvNTZE3rukl8zb/AHf4a0saxiV2eM/d+9935aljjkSX5l/+xpkaOu6RV+7VtZssvmL81WbSIVO5m/hWpPmlb+L5V+Va0LGygN0jXjNHE7ff27lX/gNS6xNFa3HlW0W1N27dt+ZlrLmjzWMOfmdkZM07uqqzSNt+VdzUW8L3FwsEa/M38NS28bSz+ft+Xd/FWnp8Nyb9Lvym8rdtWXbtVqJS5di+a2w9Yb7TZ1lSP7M6KrI6ttb/AHqdcaxK+lywXU81zM/3N0jbIl/2V/hqzrmqyXVv9mba21tqtt+6tc4y5ba1ZQjz6zMo+9qzWsbZbXTmvpIvlf5fmTd/3zWZZ2lzqV75EEUsjN8yqlbH2aebRFllvFgiRtqW7M3/AH1WnGLOw0iKx0/U42uLplaV0/h/2d1TKpylQMG40rUbNgshWKJ9rbFb7y1SkmWOfb5Xyf7S1v6pYTw7/wDSZJFX51Vvvba5qaTfuVo5G/4FVUpcyuTH3pC3xwivH+7DVOtjm08/eu3+9VK6huTArSIyp/C38NWtPS5ksnjV28pW+Za3+yaS+HcVdQ8m32oitL93dVT+ztQvHZ1i2q38TfKtbFjpX75J3VWt0+Z3/u1bvr2KfMFs/mRL95tu2seblloY+15Je4jEXQ0iTe+oWzS/3N1UrgrBLtXarL8u5WqbU44oZfklZvqvzVU8vzF+ZlrSPvanVDmlqyReYN+7/vqoGO5vvVKySoq7ZFx/Dtqe3RrZ97Juf/aWq5h8xGqfuC7Mvy/w7vmq5ptrfSLuVktkX51eVmRf++q22uL68lbU5dItpdsXlZ+zbIk+XarfLt+asC61DUJbNLGS6aS3T7qfwrWfNzaIjm5j6A20m2pKSv3A+TG0m2n7aNtAcwyin7aNtAcwzbS06jb81ADVop+2jbQAm2jbT9tFADNtLtp22jbQSN2/NSbal2/LQopAR7KNm2paKXMBFtpGqXbTdtMCKk21IwpNtMoZRS0m2gBtFOooAjpNtPooAZRS0UAMo207bRtqgG7aKdRtoAbtp1LRQAm2jbS0bakA20badTqAG7aKNtOoAbto20+k20gI9tO20/bRtoAZto20/bSUAR7aNtSbabtoAZtpdtO20baChlLTttG2gkbSbafTdtABto206igobtop1DUAM20U+igBtG2nbaKAG06ijb8tMAoop1Ikb/DR/wABp1NoAKKNtG2gApv8NOptABTqbTqAChaKKABqKdRtoAatPWhaeooAdtp22mrTqgkVRTqFpakoP92iiigkKKKKfKHMOptOWjbTAb/wGinUfxUANp22had0oAKX/gNG2nUANWpVpq1JQIFp60ylqSSxDNJE25W27qn86SXbub7tU1qWM0uWISLsczBNtO6/MtVVq3ZlTKqsu6s5R5feCIQ/eru/ANyr7YPuvXOTafAXTyl2rt+b5q3fCdstveo+77teRmjhVw7PRwKcKp6npaqif71XZJF2/erEt7xRF96s281tfNZFbb/tV8F9VnUl7p9N7eMYm/eXkUSferz/AMXX8/mtJbSbtv8AdqLxBqssKr5kjNu+7XMTaxIUZf4mr6LLMplGXtDyMZjl8BHdalcujKzt96stpGLfM33qSaTc3zVFu/2q+up0Y046HhSlKUhki/N96m7aez/w0mVrczBuKbQxoqiRyml3UyigCVadUa05afKQPU07dTP4qfT5QGtSbafTKAG0bafRQAyn0badQA2inUVZItOptOoAKctFC0ALSbafto21AAtLQtSbaQDdtO20u2ip5iivfWsV5avbTruR64rUPBEqXnm6ZeNKqtulSVtzf7Nd7iuc8RaTdJdf2rpVzJBP/wAt1DfeWvMzHCwr0/ehc9DA15Qdk7HFa9YyJBt1C5aCWBWVNrbWXd/Cq/xVz+qXk9na2mi2N5P9klVXlXbt+Zv8/ertfiBqEaeDfs1zcyXNxLLs3s38Py//AGS/8BrP2tf+A7iXzWaawnVHdP8AllE235tv93/4mvlq+BfteVaRse7Sr6JtEPiCG80ywtbue2jjhlRV8p/m+df73+1XNLcRXMTslt5cu1mVlb+Gug8UatFrOoxeVEq2tuqrErJtaX5fvtXO/abZZ7lmtv3rS7UCttVFr5DM6lN1nGjselQ5+TUu+ILFdQ0mK7sb6KK6t13Okvyf8BX+9VHR9RkMDfbFi3bNm6Jf92n3V1Fsili2s6/K7Kv8P+1RJBP9oiaVYpHZlVfKk+9/stXjSj7nJMio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+/t/2q1jU2O6MjmLVpE+aP8AhrftblrlFWRlaVvvbv4qpw28UtvvkXai1Pb21tHA0sibtv3VpTtKRzVZKRoNczun9npczNb/AMaM3yrVG4toodjRKsnzdNvy0LqtrCmxY1Y/whP/AGapm1Wd03QQRRovfb8y1nGEomFp9j2mnbadtor92PnhtG2n7aFFADNtG2pdtN20AM20bafto20AJ/FRS7aNtACbaXb81FFABto20UUAFFFFADqb/FRRQAUlLSUANprCpKKA5iPbSbafRtpgRbaNtP20baRRHTdtS7aawpgMop22igBtN21JtooAbtpu2pKNtADf4qKdtooANtFLto20gE20u2nbaXbQAzbRtp+2jbQSJto20/bTaCg20lLSNQAU2nUUANpNtPo20AM20dKfTaAEopaSgAo20qinbaAGU1al203bQAyinbaKChtFO20UAN20Uf8AAqdQSNo3U6l20AJRS0bf9qgBKXH92iigBKKf/DTGoJG03bUlNoKCinLRQA2nUUu2gAoUU7bS7aCQUVJtpqin1ACUtFOoAKWijbQIKdtoWigY2nbaKfQIZtp6ihVzTtv+1QA3bQwp9G2gCPbS7f8AZ3U/bRQAlG2l207bVk8wLTqbTqgBaFopy0AKtSrTFp1SIkqeF9j7lqvSqafKBuWd5K8DRf3q07W7+yMv7zlv/Ha5i3maFty1JJcSSNuZq46mGjL3TWNeUTvG1vbB9/dtX+9XPXmrSyz7lasdbhtu3c1Mkf8A2qwoZfTpSLq4ucy3fahPcJtd91UWdjTWNRMa9GnTjGNkc0pSluOZ6j3UNTKvlGP3UbqSm/xUcpJLuo3UxaWgCTd81LTFp60coD1p1NWpFqzIWiiigB1NpGpVpcoCUtG2nbaofMFFFLSJEWn0baKBhtop60bfmpCE209aNtP21MpANp22jbTlqeYqIbaXbTqKm4gptRahNLDatLFE0rI25lX722qlrrGmXkXy3ax79ybH+Vt392snVUXZlxpykrljUrZrzTp7VZWh8+Nk3r95d1cvpur65pV01nrKeZbxMzeay/fT+8rf7NVtY01k86Tw94gkX7Onmz2TTsysv+z81UGe71Pw9dTyzrbXcE/leU771bcv3V3fw/LXk5hUin8Vn0Z6uEo6WeqNCTxB4fs57qz1CWS+iuLr7RbRKiusW5fu7v8A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v3f9muibULHSrW3iitPPumX5pm+626q091qtwu2GJI4nb5e1CnIOdx3G2OlXklkby4toLaL+HbtVv++aqLc2MTNa7J13bvmXlmq3cb0h+zM7NMn3t/8A7LTl0XUr63luWtfKWBN7M6srMv3aqPu6siHvyuzW8D+G1Xzdc1KWKKKJnTY7L/u/d/vVCviSLTdJTTY4P9Itd6QXKsysqszN/wCzVFHeLZRRWk6rHCi/KrL/ABVzmoXjPdNI21v+A/KtZcntZao1jOUmEdyrT75YlZ3++zNuZq3rHUNOtbeVmtLSdnTZseLft/2l/ut/tVzPneY3yRfN/u1d0+0iZ995P5G75o3kO1KucI9Ryj1Lk08TwfZo1WJH+bdtqO63vZMqr+9ZVVpd38K/w7f71LdJbXLPc/eQfc2blXd/u1Fb3OxdrRxR7vu/7NXEjbYy5NsO6LyvmX5W3fe3VJauoifz/MVfvKqL8rVpX0UcMq3LxrIrfMz7f4qr3VynkSpE8e2X5mXb/wCg1pGRpGalE9920u35qdTa/bz5UNtFOo20ANo20UUAFFFFAhKWijbQMSilo20CEopdtFAxKKWjbQIKSlpKBjaKKdQIbRTqNtADaTbT2ptAxKawp1FAEdDCnbaNtMBlG2n7aNtADKbtp+2nMKAIttFS7abtoAZtp22n7aNtADKXbTttO20AN20U7bS0gE20UtFADP4qNtOooAbTdtSU3bQUN20badtoagBtFFFAA1JtpaNtACUUu35aSgBVFG2inUANoopKCQam06igobRRtp1ADNtFLTttADNtLTv4aKADbRtpVooJE20Uu35qG+9QAlNanUUANo205aNtBQbabT6NtBIynKKKVaACpFFG2lqBBRRRQMKetJS0CHLRRRQAU+kpaAEpaKKsB68U6mU9agkbtp1OooAbQop1FAcwUUtOoAbRtp22loATbS0U5aBAtOooWgB60tItLuoJHLTlNR06gB+6k303dTarlAduptFFHKAm3NG2lp22qJ5hlFG2lWkUItLRtpyimALT6KeopEAv+zUqj5aRRT6CQpv8VOooENp1G2lUUwDbTttOo20gG7c0balpuFpcwBto20/bRtqeYBNtKopyin0uYBFXFL/DQop1QTzDcf3aNtOWl2/LSAKSlWnUFFeO6tpLiW2SeNpYvvpu+Za5/wATaFv1CLXr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"

/***/ }),

/***/ "./app/components/blocks/BlockMenu.vue":
/*!*********************************************!*\
  !*** ./app/components/blocks/BlockMenu.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BlockMenu_vue_vue_type_template_id_1c30d4f0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BlockMenu.vue?vue&type=template&id=1c30d4f0&scoped=true& */ "./app/components/blocks/BlockMenu.vue?vue&type=template&id=1c30d4f0&scoped=true&");
/* harmony import */ var _BlockMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BlockMenu.vue?vue&type=script&lang=js& */ "./app/components/blocks/BlockMenu.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _BlockMenu_vue_vue_type_style_index_0_id_1c30d4f0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BlockMenu.vue?vue&type=style&index=0&id=1c30d4f0&scoped=true&lang=css& */ "./app/components/blocks/BlockMenu.vue?vue&type=style&index=0&id=1c30d4f0&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _BlockMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BlockMenu_vue_vue_type_template_id_1c30d4f0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _BlockMenu_vue_vue_type_template_id_1c30d4f0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1c30d4f0",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "app/components/blocks/BlockMenu.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./app/components/blocks/BlockMenu.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./app/components/blocks/BlockMenu.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BlockMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./BlockMenu.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./app/components/blocks/BlockMenu.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BlockMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./app/components/blocks/BlockMenu.vue?vue&type=style&index=0&id=1c30d4f0&scoped=true&lang=css&":
/*!******************************************************************************************************!*\
  !*** ./app/components/blocks/BlockMenu.vue?vue&type=style&index=0&id=1c30d4f0&scoped=true&lang=css& ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_BlockMenu_vue_vue_type_style_index_0_id_1c30d4f0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./BlockMenu.vue?vue&type=style&index=0&id=1c30d4f0&scoped=true&lang=css& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./app/components/blocks/BlockMenu.vue?vue&type=style&index=0&id=1c30d4f0&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_BlockMenu_vue_vue_type_style_index_0_id_1c30d4f0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_BlockMenu_vue_vue_type_style_index_0_id_1c30d4f0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_BlockMenu_vue_vue_type_style_index_0_id_1c30d4f0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_BlockMenu_vue_vue_type_style_index_0_id_1c30d4f0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_BlockMenu_vue_vue_type_style_index_0_id_1c30d4f0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./app/components/blocks/BlockMenu.vue?vue&type=template&id=1c30d4f0&scoped=true&":
/*!****************************************************************************************!*\
  !*** ./app/components/blocks/BlockMenu.vue?vue&type=template&id=1c30d4f0&scoped=true& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BlockMenu_vue_vue_type_template_id_1c30d4f0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./BlockMenu.vue?vue&type=template&id=1c30d4f0&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./app/components/blocks/BlockMenu.vue?vue&type=template&id=1c30d4f0&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BlockMenu_vue_vue_type_template_id_1c30d4f0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BlockMenu_vue_vue_type_template_id_1c30d4f0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./app/components/blocks/ImageBlock.vue":
/*!**********************************************!*\
  !*** ./app/components/blocks/ImageBlock.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ImageBlock_vue_vue_type_template_id_4541c63e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ImageBlock.vue?vue&type=template&id=4541c63e&scoped=true& */ "./app/components/blocks/ImageBlock.vue?vue&type=template&id=4541c63e&scoped=true&");
/* harmony import */ var _ImageBlock_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ImageBlock.vue?vue&type=script&lang=js& */ "./app/components/blocks/ImageBlock.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ImageBlock_vue_vue_type_style_index_0_id_4541c63e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ImageBlock.vue?vue&type=style&index=0&id=4541c63e&scoped=true&lang=css& */ "./app/components/blocks/ImageBlock.vue?vue&type=style&index=0&id=4541c63e&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ImageBlock_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ImageBlock_vue_vue_type_template_id_4541c63e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ImageBlock_vue_vue_type_template_id_4541c63e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4541c63e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "app/components/blocks/ImageBlock.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./app/components/blocks/ImageBlock.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./app/components/blocks/ImageBlock.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageBlock_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ImageBlock.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./app/components/blocks/ImageBlock.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageBlock_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./app/components/blocks/ImageBlock.vue?vue&type=style&index=0&id=4541c63e&scoped=true&lang=css&":
/*!*******************************************************************************************************!*\
  !*** ./app/components/blocks/ImageBlock.vue?vue&type=style&index=0&id=4541c63e&scoped=true&lang=css& ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageBlock_vue_vue_type_style_index_0_id_4541c63e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./ImageBlock.vue?vue&type=style&index=0&id=4541c63e&scoped=true&lang=css& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./app/components/blocks/ImageBlock.vue?vue&type=style&index=0&id=4541c63e&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageBlock_vue_vue_type_style_index_0_id_4541c63e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageBlock_vue_vue_type_style_index_0_id_4541c63e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageBlock_vue_vue_type_style_index_0_id_4541c63e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageBlock_vue_vue_type_style_index_0_id_4541c63e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageBlock_vue_vue_type_style_index_0_id_4541c63e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./app/components/blocks/ImageBlock.vue?vue&type=template&id=4541c63e&scoped=true&":
/*!*****************************************************************************************!*\
  !*** ./app/components/blocks/ImageBlock.vue?vue&type=template&id=4541c63e&scoped=true& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageBlock_vue_vue_type_template_id_4541c63e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ImageBlock.vue?vue&type=template&id=4541c63e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./app/components/blocks/ImageBlock.vue?vue&type=template&id=4541c63e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageBlock_vue_vue_type_template_id_4541c63e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageBlock_vue_vue_type_template_id_4541c63e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./app/components/blocks/TextBlock.vue":
/*!*********************************************!*\
  !*** ./app/components/blocks/TextBlock.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TextBlock_vue_vue_type_template_id_191d6278_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TextBlock.vue?vue&type=template&id=191d6278&scoped=true& */ "./app/components/blocks/TextBlock.vue?vue&type=template&id=191d6278&scoped=true&");
/* harmony import */ var _TextBlock_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TextBlock.vue?vue&type=script&lang=js& */ "./app/components/blocks/TextBlock.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _TextBlock_vue_vue_type_style_index_0_id_191d6278_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TextBlock.vue?vue&type=style&index=0&id=191d6278&scoped=true&lang=css& */ "./app/components/blocks/TextBlock.vue?vue&type=style&index=0&id=191d6278&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _TextBlock_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TextBlock_vue_vue_type_template_id_191d6278_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TextBlock_vue_vue_type_template_id_191d6278_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "191d6278",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "app/components/blocks/TextBlock.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./app/components/blocks/TextBlock.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./app/components/blocks/TextBlock.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TextBlock_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./TextBlock.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./app/components/blocks/TextBlock.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TextBlock_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./app/components/blocks/TextBlock.vue?vue&type=style&index=0&id=191d6278&scoped=true&lang=css&":
/*!******************************************************************************************************!*\
  !*** ./app/components/blocks/TextBlock.vue?vue&type=style&index=0&id=191d6278&scoped=true&lang=css& ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TextBlock_vue_vue_type_style_index_0_id_191d6278_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./TextBlock.vue?vue&type=style&index=0&id=191d6278&scoped=true&lang=css& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./app/components/blocks/TextBlock.vue?vue&type=style&index=0&id=191d6278&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TextBlock_vue_vue_type_style_index_0_id_191d6278_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TextBlock_vue_vue_type_style_index_0_id_191d6278_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TextBlock_vue_vue_type_style_index_0_id_191d6278_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TextBlock_vue_vue_type_style_index_0_id_191d6278_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TextBlock_vue_vue_type_style_index_0_id_191d6278_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./app/components/blocks/TextBlock.vue?vue&type=template&id=191d6278&scoped=true&":
/*!****************************************************************************************!*\
  !*** ./app/components/blocks/TextBlock.vue?vue&type=template&id=191d6278&scoped=true& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TextBlock_vue_vue_type_template_id_191d6278_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./TextBlock.vue?vue&type=template&id=191d6278&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./app/components/blocks/TextBlock.vue?vue&type=template&id=191d6278&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TextBlock_vue_vue_type_template_id_191d6278_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TextBlock_vue_vue_type_template_id_191d6278_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./app/components/layouts/Constructor.vue":
/*!************************************************!*\
  !*** ./app/components/layouts/Constructor.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Constructor_vue_vue_type_template_id_356eafd2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Constructor.vue?vue&type=template&id=356eafd2& */ "./app/components/layouts/Constructor.vue?vue&type=template&id=356eafd2&");
/* harmony import */ var _Constructor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Constructor.vue?vue&type=script&lang=js& */ "./app/components/layouts/Constructor.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Constructor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Constructor_vue_vue_type_template_id_356eafd2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Constructor_vue_vue_type_template_id_356eafd2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "app/components/layouts/Constructor.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./app/components/layouts/Constructor.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./app/components/layouts/Constructor.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Constructor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Constructor.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./app/components/layouts/Constructor.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Constructor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./app/components/layouts/Constructor.vue?vue&type=template&id=356eafd2&":
/*!*******************************************************************************!*\
  !*** ./app/components/layouts/Constructor.vue?vue&type=template&id=356eafd2& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Constructor_vue_vue_type_template_id_356eafd2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Constructor.vue?vue&type=template&id=356eafd2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./app/components/layouts/Constructor.vue?vue&type=template&id=356eafd2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Constructor_vue_vue_type_template_id_356eafd2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Constructor_vue_vue_type_template_id_356eafd2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./app/components/layouts/Greeting.vue":
/*!*********************************************!*\
  !*** ./app/components/layouts/Greeting.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Greeting_vue_vue_type_template_id_18994c28_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Greeting.vue?vue&type=template&id=18994c28&scoped=true& */ "./app/components/layouts/Greeting.vue?vue&type=template&id=18994c28&scoped=true&");
/* harmony import */ var _Greeting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Greeting.vue?vue&type=script&lang=js& */ "./app/components/layouts/Greeting.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Greeting_vue_vue_type_style_index_0_id_18994c28_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Greeting.vue?vue&type=style&index=0&id=18994c28&scoped=true&lang=css& */ "./app/components/layouts/Greeting.vue?vue&type=style&index=0&id=18994c28&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Greeting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Greeting_vue_vue_type_template_id_18994c28_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Greeting_vue_vue_type_template_id_18994c28_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "18994c28",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "app/components/layouts/Greeting.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./app/components/layouts/Greeting.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./app/components/layouts/Greeting.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Greeting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Greeting.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./app/components/layouts/Greeting.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Greeting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./app/components/layouts/Greeting.vue?vue&type=style&index=0&id=18994c28&scoped=true&lang=css&":
/*!******************************************************************************************************!*\
  !*** ./app/components/layouts/Greeting.vue?vue&type=style&index=0&id=18994c28&scoped=true&lang=css& ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Greeting_vue_vue_type_style_index_0_id_18994c28_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./Greeting.vue?vue&type=style&index=0&id=18994c28&scoped=true&lang=css& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./app/components/layouts/Greeting.vue?vue&type=style&index=0&id=18994c28&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Greeting_vue_vue_type_style_index_0_id_18994c28_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Greeting_vue_vue_type_style_index_0_id_18994c28_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Greeting_vue_vue_type_style_index_0_id_18994c28_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Greeting_vue_vue_type_style_index_0_id_18994c28_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Greeting_vue_vue_type_style_index_0_id_18994c28_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./app/components/layouts/Greeting.vue?vue&type=template&id=18994c28&scoped=true&":
/*!****************************************************************************************!*\
  !*** ./app/components/layouts/Greeting.vue?vue&type=template&id=18994c28&scoped=true& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Greeting_vue_vue_type_template_id_18994c28_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Greeting.vue?vue&type=template&id=18994c28&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./app/components/layouts/Greeting.vue?vue&type=template&id=18994c28&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Greeting_vue_vue_type_template_id_18994c28_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Greeting_vue_vue_type_template_id_18994c28_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./app/components/layouts/TopMenu.vue":
/*!********************************************!*\
  !*** ./app/components/layouts/TopMenu.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TopMenu_vue_vue_type_template_id_0d9c941e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TopMenu.vue?vue&type=template&id=0d9c941e&scoped=true& */ "./app/components/layouts/TopMenu.vue?vue&type=template&id=0d9c941e&scoped=true&");
/* harmony import */ var _TopMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TopMenu.vue?vue&type=script&lang=js& */ "./app/components/layouts/TopMenu.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _TopMenu_vue_vue_type_style_index_0_id_0d9c941e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TopMenu.vue?vue&type=style&index=0&id=0d9c941e&scoped=true&lang=css& */ "./app/components/layouts/TopMenu.vue?vue&type=style&index=0&id=0d9c941e&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _TopMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TopMenu_vue_vue_type_template_id_0d9c941e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TopMenu_vue_vue_type_template_id_0d9c941e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0d9c941e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "app/components/layouts/TopMenu.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./app/components/layouts/TopMenu.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./app/components/layouts/TopMenu.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TopMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./TopMenu.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./app/components/layouts/TopMenu.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TopMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./app/components/layouts/TopMenu.vue?vue&type=style&index=0&id=0d9c941e&scoped=true&lang=css&":
/*!*****************************************************************************************************!*\
  !*** ./app/components/layouts/TopMenu.vue?vue&type=style&index=0&id=0d9c941e&scoped=true&lang=css& ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TopMenu_vue_vue_type_style_index_0_id_0d9c941e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./TopMenu.vue?vue&type=style&index=0&id=0d9c941e&scoped=true&lang=css& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./app/components/layouts/TopMenu.vue?vue&type=style&index=0&id=0d9c941e&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TopMenu_vue_vue_type_style_index_0_id_0d9c941e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TopMenu_vue_vue_type_style_index_0_id_0d9c941e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TopMenu_vue_vue_type_style_index_0_id_0d9c941e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TopMenu_vue_vue_type_style_index_0_id_0d9c941e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TopMenu_vue_vue_type_style_index_0_id_0d9c941e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./app/components/layouts/TopMenu.vue?vue&type=template&id=0d9c941e&scoped=true&":
/*!***************************************************************************************!*\
  !*** ./app/components/layouts/TopMenu.vue?vue&type=template&id=0d9c941e&scoped=true& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TopMenu_vue_vue_type_template_id_0d9c941e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./TopMenu.vue?vue&type=template&id=0d9c941e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./app/components/layouts/TopMenu.vue?vue&type=template&id=0d9c941e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TopMenu_vue_vue_type_template_id_0d9c941e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TopMenu_vue_vue_type_template_id_0d9c941e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./app/defaultContent.js":
/*!*******************************!*\
  !*** ./app/defaultContent.js ***!
  \*******************************/
/*! exports provided: defaultContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultContent", function() { return defaultContent; });
var defaultContent = {
  text: "\u042F \u043F\u043E\u043C\u043D\u044E \u0447\u0443\u0434\u043D\u043E\u0435 \u043C\u0433\u043D\u043E\u0432\u0435\u043D\u044C\u0435: \u041F\u0435\u0440\u0435\u0434\u043E \u043C\u043D\u043E\u0439 \u044F\u0432\u0438\u043B\u0430\u0441\u044C \u0442\u044B, \u041A\u0430\u043A \u043C\u0438\u043C\u043E\u043B\u0435\u0442\u043D\u043E\u0435 \u0432\u0438\u0434\u0435\u043D\u044C\u0435,\u041A\u0430\u043A \u0433\u0435\u043D\u0438\u0439 \u0447\u0438\u0441\u0442\u043E\u0439 \u043A\u0440\u0430\u0441\u043E\u0442\u044B. \u0412 \u0442\u043E\u043C\u043B\u0435\u043D\u044C\u044F\u0445 \u0433\u0440\u0443\u0441\u0442\u0438 \u0431\u0435\u0437\u043D\u0430\u0434\u0435\u0436\u043D\u043E\u0439, \u0412 \u0442\u0440\u0435\u0432\u043E\u0433\u0430\u0445 \u0448\u0443\u043C\u043D\u043E\u0439 \u0441\u0443\u0435\u0442\u044B, \u0417\u0432\u0443\u0447\u0430\u043B \u043C\u043D\u0435 \u0434\u043E\u043B\u0433\u043E \u0433\u043E\u043B\u043E\u0441 \u043D\u0435\u0436\u043D\u044B\u0439 \u0418 \u0441\u043D\u0438\u043B\u0438\u0441\u044C \u043C\u0438\u043B\u044B\u0435 \u0447\u0435\u0440\u0442\u044B. \u0428\u043B\u0438 \u0433\u043E\u0434\u044B. \u0411\u0443\u0440\u044C \u043F\u043E\u0440\u044B\u0432 \u043C\u044F\u0442\u0435\u0436\u043D\u044B\u0439 \u0420\u0430\u0441\u0441\u0435\u044F\u043B \u043F\u0440\u0435\u0436\u043D\u0438\u0435 \u043C\u0435\u0447\u0442\u044B, \u0418 \u044F \u0437\u0430\u0431\u044B\u043B \u0442\u0432\u043E\u0439 \u0433\u043E\u043B\u043E\u0441 \u043D\u0435\u0436\u043D\u044B\u0439, \u0422\u0432\u043E\u0438 \u043D\u0435\u0431\u0435\u0441\u043D\u044B\u0435 \u0447\u0435\u0440\u0442\u044B. \u0412 \u0433\u043B\u0443\u0448\u0438, \u0432\u043E \u043C\u0440\u0430\u043A\u0435 \u0437\u0430\u0442\u043E\u0447\u0435\u043D\u044C\u044F \u0422\u044F\u043D\u0443\u043B\u0438\u0441\u044C \u0442\u0438\u0445\u043E \u0434\u043D\u0438 \u043C\u043E\u0438 \u0411\u0435\u0437 \u0431\u043E\u0436\u0435\u0441\u0442\u0432\u0430, \u0431\u0435\u0437 \u0432\u0434\u043E\u0445\u043D\u043E\u0432\u0435\u043D\u044C\u044F, \u0411\u0435\u0437 \u0441\u043B\u0435\u0437, \u0431\u0435\u0437 \u0436\u0438\u0437\u043D\u0438, \u0431\u0435\u0437 \u043B\u044E\u0431\u0432\u0438. \u0414\u0443\u0448\u0435 \u043D\u0430\u0441\u0442\u0430\u043B\u043E \u043F\u0440\u043E\u0431\u0443\u0436\u0434\u0435\u043D\u044C\u0435: \u0418 \u0432\u043E\u0442 \u043E\u043F\u044F\u0442\u044C \u044F\u0432\u0438\u043B\u0430\u0441\u044C \u0442\u044B, \u041A\u0430\u043A \u043C\u0438\u043C\u043E\u043B\u0435\u0442\u043D\u043E\u0435 \u0432\u0438\u0434\u0435\u043D\u044C\u0435, \u041A\u0430\u043A \u0433\u0435\u043D\u0438\u0439 \u0447\u0438\u0441\u0442\u043E\u0439 \u043A\u0440\u0430\u0441\u043E\u0442\u044B. \u0418 \u0441\u0435\u0440\u0434\u0446\u0435 \u0431\u044C\u0435\u0442\u0441\u044F \u0432 \u0443\u043F\u043E\u0435\u043D\u044C\u0435, \u0418 \u0434\u043B\u044F \u043D\u0435\u0433\u043E \u0432\u043E\u0441\u043A\u0440\u0435\u0441\u043B\u0438 \u0432\u043D\u043E\u0432\u044C \u0418 \u0431\u043E\u0436\u0435\u0441\u0442\u0432\u043E, \u0438 \u0432\u0434\u043E\u0445\u043D\u043E\u0432\u0435\u043D\u044C\u0435, \u0418 \u0436\u0438\u0437\u043D\u044C, \u0438 \u0441\u043B\u0435\u0437\u044B, \u0438 \u043B\u044E\u0431\u043E\u0432\u044C.",
  image: "pict.jpg"
};

/***/ }),

/***/ "./app/index.js":
/*!**********************!*\
  !*** ./app/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var _app_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.vue */ "./app/app.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _defaultContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defaultContent */ "./app/defaultContent.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }





vue__WEBPACK_IMPORTED_MODULE_0__["default"].use(vuex__WEBPACK_IMPORTED_MODULE_2__["default"]);
var store = new vuex__WEBPACK_IMPORTED_MODULE_2__["default"].Store({
  state: {
    activeSection: 'Greeting',
    content: []
  },
  mutations: {
    saveContentStore: function saveContentStore(state) {
      localStorage.setItem('webConstructorStore', JSON.stringify(state.content));
    },
    begineConstruct: function begineConstruct(state) {
      state.content = [];
      state.activeSection = 'constructor';
    },
    continueConstruct: function continueConstruct(state) {
      state.content = JSON.parse(localStorage.getItem('webConstructorStore'));
      state.activeSection = 'constructor';
    },
    changeActiveSection: function changeActiveSection(state, section) {
      state.activeSection = section;
    },
    addBlock: function addBlock(state, block) {
      if (block == 'text') {
        state.content.push({
          id: Date.now(),
          type: 'TextBlock',
          data: _defaultContent__WEBPACK_IMPORTED_MODULE_3__["defaultContent"].text
        });
      } else if (block == 'img') {
        state.content.push({
          id: Date.now(),
          type: 'ImageBlock',
          data: _defaultContent__WEBPACK_IMPORTED_MODULE_3__["defaultContent"].image
        });
      }
    },
    changeContent: function changeContent(state, block) {
      var content = state.content.map(function (item) {
        if (item.id == block.id) {
          item.data = block.data;
          item.type = "TextBlock";
        }

        return item;
      });
      state.content = _toConsumableArray(content);
    },
    deleteBlock: function deleteBlock(state, id) {
      var content = state.content.filter(function (item) {
        return item.id != id;
      });
      state.content = content;
    }
  }
});
new vue__WEBPACK_IMPORTED_MODULE_0__["default"]({
  el: '#app',
  store: store,
  render: function render(h) {
    return h(_app_vue__WEBPACK_IMPORTED_MODULE_1__["default"]);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./app/app.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./app/app.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _components_layouts_Greeting__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/layouts/Greeting */ "./app/components/layouts/Greeting.vue");
/* harmony import */ var _components_layouts_Constructor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/layouts/Constructor */ "./app/components/layouts/Constructor.vue");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'App',
  components: {
    Greeting: _components_layouts_Greeting__WEBPACK_IMPORTED_MODULE_1__["default"],
    Constructor: _components_layouts_Constructor__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  computed: Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])(['activeSection', 'content']),
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapMutations"])(['initContentStore']))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./app/components/blocks/BlockMenu.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./app/components/blocks/BlockMenu.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'BlockMenu',
  props: ['type']
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./app/components/blocks/ImageBlock.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./app/components/blocks/ImageBlock.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _BlockMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BlockMenu */ "./app/components/blocks/BlockMenu.vue");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ImageBlock',
  props: ['data', 'id'],
  components: {
    BlockMenu: _BlockMenu__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapMutations"])(['deleteBlock']))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./app/components/blocks/TextBlock.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./app/components/blocks/TextBlock.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _BlockMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BlockMenu */ "./app/components/blocks/BlockMenu.vue");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'TextBlock',
  props: ['data', 'id'],
  components: {
    BlockMenu: _BlockMenu__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      size: 1
    };
  },
  methods: _objectSpread({
    changeFont: function changeFont(e, type) {
      if (type == "sub") this.size = this.size - .25;
      if (type == "add") this.size = this.size + .25;
    }
  }, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapMutations"])(['changeContent', 'deleteBlock'])),
  computed: {
    fontSize: function fontSize() {
      return this.size + 'rem';
    },
    style: function style() {
      return {
        fontSize: this.fontSize
      };
    }
  },
  mounted: function mounted() {
    this.$refs.input.innerText = this.data;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./app/components/layouts/Constructor.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./app/components/layouts/Constructor.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _TopMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TopMenu */ "./app/components/layouts/TopMenu.vue");
/* harmony import */ var _blocks_TextBlock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../blocks/TextBlock */ "./app/components/blocks/TextBlock.vue");
/* harmony import */ var _blocks_ImageBlock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../blocks/ImageBlock */ "./app/components/blocks/ImageBlock.vue");
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Constructor',
  components: {
    TopMenu: _TopMenu__WEBPACK_IMPORTED_MODULE_1__["default"],
    TextBlock: _blocks_TextBlock__WEBPACK_IMPORTED_MODULE_2__["default"],
    ImageBlock: _blocks_ImageBlock__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  computed: Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])(['content'])
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./app/components/layouts/Greeting.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./app/components/layouts/Greeting.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _TopMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TopMenu */ "./app/components/layouts/TopMenu.vue");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Greeting',
  data: function data() {
    return {
      isContinue: false
    };
  },
  components: {
    TopMenu: _TopMenu__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapMutations"])(['begineConstruct', 'continueConstruct'])),
  created: function created() {
    if (localStorage.getItem('webConstructorStore') != undefined) {
      this.isContinue = true;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./app/components/layouts/TopMenu.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./app/components/layouts/TopMenu.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'TopMenu',
  props: ['type'],
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapMutations"])(['changeActiveSection', 'addBlock', 'saveContentStore']))
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./app/app.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./app/app.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\nhtml,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,\nkbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,\nsummary,time,mark,audio,\nvideo {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    font: inherit;\n}\nhtml{\n  font-size: 16px;\n  height: 100%;\n}\nbody{\n  user-select:none;\n  background: #f0f0f0;\n  height: 100%;\n}\na, a:link, a:visited, a:focus, a:hover, a:active{\n  color:#023d81;\n  text-decoration:none;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./app/components/blocks/BlockMenu.vue?vue&type=style&index=0&id=1c30d4f0&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./app/components/blocks/BlockMenu.vue?vue&type=style&index=0&id=1c30d4f0&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.block-menu-container[data-v-1c30d4f0]{\n    width: 100%;\n    position: absolute;\n    top:-3rem;\n    left: 0;\n    display: flex;\n    justify-content: space-between;\n}\n.block-menu-btn[data-v-1c30d4f0]{\n    color: #ffb196;\n    text-align: center;\n    line-height: 2.5rem;\n    font-size: 2.2rem;\n    margin-left: auto;\n    cursor: pointer;\n}\n.block-menu-btn[data-v-1c30d4f0]:hover{\n    text-shadow: 0 0 1px #ff4949;\n}\n.fontContainer[data-v-1c30d4f0]{\n    width: 5rem;\n    margin-right: auto;\n    display: flex;\n    line-height: 2.5rem;\n}\n.fontSizeReg[data-v-1c30d4f0]{\n    font-size: 1.75rem;\n    padding: 0 .5rem;\n    cursor: pointer;\n}\n.fontSizeReg[data-v-1c30d4f0]:hover{\n    text-shadow: 0 0 1px #ff4949;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./app/components/blocks/ImageBlock.vue?vue&type=style&index=0&id=4541c63e&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./app/components/blocks/ImageBlock.vue?vue&type=style&index=0&id=4541c63e&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.image-block-container[data-v-4541c63e]{\n  margin: 5rem;\n  position: relative;\n  display: flex;\n  justify-content: center;\n}\n.img[data-v-4541c63e]{\n  width: 50%;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./app/components/blocks/TextBlock.vue?vue&type=style&index=0&id=191d6278&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./app/components/blocks/TextBlock.vue?vue&type=style&index=0&id=191d6278&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.text-block-container[data-v-191d6278]{\n  margin: 5rem;\n  position: relative;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./app/components/layouts/Greeting.vue?vue&type=style&index=0&id=18994c28&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./app/components/layouts/Greeting.vue?vue&type=style&index=0&id=18994c28&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\nhtml[data-v-18994c28],body[data-v-18994c28]{\n  width: 100%;\n  height: 100%;\n}\n.greeting-container[data-v-18994c28]{\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-content: flex-start;\n}\n.btn[data-v-18994c28]{\n  background: #ffbda6;\n  border-radius: .25rem;\n  height: 2rem;\n  padding: .25rem;\n  margin: 2rem;\n  font-size: 1.15rem;\n  line-height: 2rem;\n  box-shadow: 0px 0px 2px 0px #737373;\n  cursor: pointer;\n}\n.btn[data-v-18994c28]:active{\n  box-shadow: 0px 0px 1px 0px #737373;\n}\n.btn[data-v-18994c28]:hover{\n  background:#ffb196;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./app/components/layouts/TopMenu.vue?vue&type=style&index=0&id=0d9c941e&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./app/components/layouts/TopMenu.vue?vue&type=style&index=0&id=0d9c941e&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.topMenu-container[data-v-0d9c941e]{\n    width: 100%;\n    height: 3.5rem;\n    background: #100b04;\n    display: flex;\n    justify-content: center;\n}\n.title-container[data-v-0d9c941e]{\n  font-size: 1.5rem;\n  color: whitesmoke;\n  line-height: 3.5rem;\n  flex-grow: 1;\n  text-align: center;\n}\n.item-container[data-v-0d9c941e]{\n   width: 25%;\n   color: whitesmoke;\n   display: flex;\n}\n.item[data-v-0d9c941e]{\n    height: 100%;\n    line-height: 3.5rem;\n    padding: 0 .25rem;\n    cursor: pointer;\n    border-right: 1px solid #b1b1b1;\n    transition: all .15s;\n    text-align: center;\n}\n.item[data-v-0d9c941e]:hover{\n    border-color: #ffb196;\n    color: #ffb196;\n}\n.block[data-v-0d9c941e]{\n    position: relative;\n    z-index: 100;\n}\n.block:hover > div[data-v-0d9c941e]{\n    display: block;\n}\n.block-menu[data-v-0d9c941e]{\n    width: 10rem;\n    height: 7rem;\n    display: none;\n    position: absolute;\n    top:3.5rem;\n    left: -1px;\n    background: #100b04;\n    color: whitesmoke;\n    transition: all .15s;\n}\n.block-item[data-v-0d9c941e]:hover{\n    color: #ffb196;\n}\n.left[data-v-0d9c941e]{\n    margin-left: auto;\n    border-right: none;\n    border-left: 1px solid #b1b1b1;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/setimmediate/setImmediate.js":
/*!***************************************************!*\
  !*** ./node_modules/setimmediate/setImmediate.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/timers-browserify/main.js":
/*!************************************************!*\
  !*** ./node_modules/timers-browserify/main.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(/*! setimmediate */ "./node_modules/setimmediate/setImmediate.js");
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./app/app.vue?vue&type=template&id=f4728ed6&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./app/app.vue?vue&type=template&id=f4728ed6& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(_vm.activeSection, { tag: "component" })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./app/components/blocks/BlockMenu.vue?vue&type=template&id=1c30d4f0&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./app/components/blocks/BlockMenu.vue?vue&type=template&id=1c30d4f0&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "block-menu-container" }, [
    _vm.type == "BlockMenu"
      ? _c("div", { staticClass: "fontContainer" }, [
          _vm._v("\n        Шрифт: \n        "),
          _c(
            "div",
            {
              staticClass: "fontSizeReg",
              on: {
                click: function($event) {
                  return _vm.$emit("change-font", $event, "add")
                }
              }
            },
            [_vm._v("+")]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "fontSizeReg",
              on: {
                click: function($event) {
                  return _vm.$emit("change-font", $event, "sub")
                }
              }
            },
            [_vm._v("-")]
          )
        ])
      : _vm._e(),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "block-menu-btn",
        on: {
          click: function($event) {
            return _vm.$emit("delete-block")
          }
        }
      },
      [_vm._v("×")]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./app/components/blocks/ImageBlock.vue?vue&type=template&id=4541c63e&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./app/components/blocks/ImageBlock.vue?vue&type=template&id=4541c63e&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "image-block-container" },
    [
      _c("img", {
        staticClass: "img",
        attrs: { src: __webpack_require__("./app/assets/img sync recursive ^\\.\\/.*$")("./" + _vm.data) }
      }),
      _vm._v(" "),
      _c("BlockMenu", {
        on: {
          "delete-block": function($event) {
            return _vm.deleteBlock(_vm.id)
          }
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./app/components/blocks/TextBlock.vue?vue&type=template&id=191d6278&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./app/components/blocks/TextBlock.vue?vue&type=template&id=191d6278&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "text-block-container" },
    [
      _c("div", {
        ref: "input",
        style: _vm.style,
        attrs: { contenteditable: "true", autocomplete: "off", type: "text" },
        on: {
          input: function($event) {
            return _vm.changeContent({
              data: $event.target.innerText,
              id: _vm.id
            })
          }
        }
      }),
      _vm._v(" "),
      _c("BlockMenu", {
        attrs: { type: "BlockMenu" },
        on: {
          "change-font": _vm.changeFont,
          "delete-block": function($event) {
            return _vm.deleteBlock(_vm.id)
          }
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./app/components/layouts/Constructor.vue?vue&type=template&id=356eafd2&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./app/components/layouts/Constructor.vue?vue&type=template&id=356eafd2& ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("TopMenu", { attrs: { type: "constructor" } }),
      _vm._v(" "),
      _vm.content.length != 0
        ? _c(
            "div",
            { staticClass: "content-container" },
            _vm._l(_vm.content, function(item) {
              return _c(
                "div",
                { key: item.id },
                [
                  _c(item.type, {
                    tag: "component",
                    attrs: { id: item.id, data: item.data }
                  })
                ],
                1
              )
            }),
            0
          )
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./app/components/layouts/Greeting.vue?vue&type=template&id=18994c28&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./app/components/layouts/Greeting.vue?vue&type=template&id=18994c28&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "section",
    { staticClass: "greeting-container" },
    [
      _c("TopMenu", { attrs: { type: "greeting" } }),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "btn",
          on: {
            click: function($event) {
              return _vm.begineConstruct()
            }
          }
        },
        [_vm._v("Создать новую страницу")]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.isContinue,
              expression: "isContinue"
            }
          ],
          staticClass: "btn",
          on: {
            click: function($event) {
              return _vm.continueConstruct()
            }
          }
        },
        [_vm._v("Продолжить редактирование")]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./app/components/layouts/TopMenu.vue?vue&type=template&id=0d9c941e&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./app/components/layouts/TopMenu.vue?vue&type=template&id=0d9c941e&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "topMenu-container" }, [
    _c("div", { staticClass: "item-container" }, [
      _vm.type === "constructor"
        ? _c(
            "div",
            {
              staticClass: "item",
              on: {
                click: function($event) {
                  return _vm.changeActiveSection("Greeting")
                }
              }
            },
            [_vm._v("\n                Меню\n            ")]
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.type === "constructor"
        ? _c("div", { staticClass: "item block" }, [
            _vm._v("\n                 +Блок\n                "),
            _c("div", { staticClass: "block-menu" }, [
              _c(
                "div",
                {
                  staticClass: "block-item",
                  on: {
                    click: function($event) {
                      return _vm.addBlock("text")
                    }
                  }
                },
                [_vm._v("Тесктовый блок")]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "block-item",
                  on: {
                    click: function($event) {
                      return _vm.addBlock("img")
                    }
                  }
                },
                [_vm._v("Изображение")]
              )
            ])
          ])
        : _vm._e()
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "title-container" }, [
      _vm._v("\n            «« ES WEB CONSTRUCTOR »»\n        ")
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "item-container" }, [
      _vm.type === "constructor"
        ? _c(
            "div",
            {
              staticClass: "item left",
              on: {
                click: function($event) {
                  return _vm.saveContentStore()
                }
              }
            },
            [_vm._v("\n                Сохранить\n            ")]
          )
        : _vm._e()
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./app/app.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./app/app.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib??vue-loader-options!./app.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./app/app.vue?vue&type=style&index=0&lang=css&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("5f65a784", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./app/components/blocks/BlockMenu.vue?vue&type=style&index=0&id=1c30d4f0&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./app/components/blocks/BlockMenu.vue?vue&type=style&index=0&id=1c30d4f0&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./BlockMenu.vue?vue&type=style&index=0&id=1c30d4f0&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./app/components/blocks/BlockMenu.vue?vue&type=style&index=0&id=1c30d4f0&scoped=true&lang=css&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("4817d64e", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./app/components/blocks/ImageBlock.vue?vue&type=style&index=0&id=4541c63e&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./app/components/blocks/ImageBlock.vue?vue&type=style&index=0&id=4541c63e&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./ImageBlock.vue?vue&type=style&index=0&id=4541c63e&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./app/components/blocks/ImageBlock.vue?vue&type=style&index=0&id=4541c63e&scoped=true&lang=css&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("60d69cf8", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./app/components/blocks/TextBlock.vue?vue&type=style&index=0&id=191d6278&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./app/components/blocks/TextBlock.vue?vue&type=style&index=0&id=191d6278&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./TextBlock.vue?vue&type=style&index=0&id=191d6278&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./app/components/blocks/TextBlock.vue?vue&type=style&index=0&id=191d6278&scoped=true&lang=css&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("75961846", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./app/components/layouts/Greeting.vue?vue&type=style&index=0&id=18994c28&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./app/components/layouts/Greeting.vue?vue&type=style&index=0&id=18994c28&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./Greeting.vue?vue&type=style&index=0&id=18994c28&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./app/components/layouts/Greeting.vue?vue&type=style&index=0&id=18994c28&scoped=true&lang=css&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("50591390", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./app/components/layouts/TopMenu.vue?vue&type=style&index=0&id=0d9c941e&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./app/components/layouts/TopMenu.vue?vue&type=style&index=0&id=0d9c941e&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./TopMenu.vue?vue&type=style&index=0&id=0d9c941e&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./app/components/layouts/TopMenu.vue?vue&type=style&index=0&id=0d9c941e&scoped=true&lang=css&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("51f22177", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/lib/addStylesClient.js":
/*!**************************************************************!*\
  !*** ./node_modules/vue-style-loader/lib/addStylesClient.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addStylesClient; });
/* harmony import */ var _listToStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listToStyles */ "./node_modules/vue-style-loader/lib/listToStyles.js");
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = Object(_listToStyles__WEBPACK_IMPORTED_MODULE_0__["default"])(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = Object(_listToStyles__WEBPACK_IMPORTED_MODULE_0__["default"])(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ "./node_modules/vue-style-loader/lib/listToStyles.js":
/*!***********************************************************!*\
  !*** ./node_modules/vue-style-loader/lib/listToStyles.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return listToStyles; });
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),

/***/ "./node_modules/vue/dist/vue.runtime.esm.js":
/*!**************************************************!*\
  !*** ./node_modules/vue/dist/vue.runtime.esm.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global, setImmediate) {/*!
 * Vue.js v2.6.11
 * (c) 2014-2019 Evan You
 * Released under the MIT License.
 */
/*  */

var emptyObject = Object.freeze({});

// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive.
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value, e.g., [object Object].
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

function isPromise (val) {
  return (
    isDef(val) &&
    typeof val.then === 'function' &&
    typeof val.catch === 'function'
  )
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if an attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array.
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether an object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */
var identity = function (_) { return _; };

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */
function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var SSR_ATTR = 'data-server-rendered';

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured',
  'serverPrefetch'
];

/*  */



var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */
var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = new RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"));
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
var isPhantomJS = UA && /phantomjs/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/);

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;

var supportsPassive = false;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
        /* istanbul ignore next */
        supportsPassive = true;
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = /*@__PURE__*/(function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (true) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm;
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm) {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */

var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.target) {
    Dep.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  if ( true && !config.async) {
    // subs aren't sorted in scheduler if not running async
    // we need to sort them now to make sure they fire in correct
    // order
    subs.sort(function (a, b) { return a.id - b.id; });
  }
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
Dep.target = null;
var targetStack = [];

function pushTarget (target) {
  targetStack.push(target);
  Dep.target = target;
}

function popTarget () {
  targetStack.pop();
  Dep.target = targetStack[targetStack.length - 1];
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(),
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    if (hasProto) {
      protoAugment(value, arrayMethods);
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if ( true && customSetter) {
        customSetter();
      }
      // #7981: for accessor properties without setter
      if (getter && !setter) { return }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (true) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;

  var keys = hasSymbol
    ? Reflect.ownKeys(from)
    : Object.keys(from);

  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    // in case the object is already observed...
    if (key === '__ob__') { continue }
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (
      toVal !== fromVal &&
      isPlainObject(toVal) &&
      isPlainObject(fromVal)
    ) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
       true && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  var res = childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal;
  return res
    ? dedupeHooks(res)
    : res
}

function dedupeHooks (hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
     true && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (true) {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!new RegExp(("^[a-zA-Z][\\-\\.0-9_" + (unicodeRegExp.source) + "]*$")).test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'should conform to valid custom element name in html5 specification.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (true) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def$$1 = dirs[key];
      if (typeof def$$1 === 'function') {
        dirs[key] = { bind: def$$1, update: def$$1 };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (true) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);

  // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.
  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ( true && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */



function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  if (
    true
  ) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ( true && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  if (!valid) {
    warn(
      getInvalidTypeMessage(name, value, expectedTypes),
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

function getInvalidTypeMessage (name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
    " Expected " + (expectedTypes.map(capitalize).join(', '));
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value);
  var expectedValue = styleValue(value, expectedType);
  var receivedValue = styleValue(value, receivedType);
  // check if we need to specify expected value
  if (expectedTypes.length === 1 &&
      isExplicable(expectedType) &&
      !isBoolean(expectedType, receivedType)) {
    message += " with value " + expectedValue;
  }
  message += ", got " + receivedType + " ";
  // check if we need to specify received value
  if (isExplicable(receivedType)) {
    message += "with value " + receivedValue + ".";
  }
  return message
}

function styleValue (value, type) {
  if (type === 'String') {
    return ("\"" + value + "\"")
  } else if (type === 'Number') {
    return ("" + (Number(value)))
  } else {
    return ("" + value)
  }
}

function isExplicable (value) {
  var explicitTypes = ['string', 'number', 'boolean'];
  return explicitTypes.some(function (elem) { return value.toLowerCase() === elem; })
}

function isBoolean () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
}

/*  */

function handleError (err, vm, info) {
  // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
  // See: https://github.com/vuejs/vuex/issues/1505
  pushTarget();
  try {
    if (vm) {
      var cur = vm;
      while ((cur = cur.$parent)) {
        var hooks = cur.$options.errorCaptured;
        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;
              if (capture) { return }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }
    globalHandleError(err, vm, info);
  } finally {
    popTarget();
  }
}

function invokeWithErrorHandling (
  handler,
  context,
  args,
  vm,
  info
) {
  var res;
  try {
    res = args ? handler.apply(context, args) : handler.call(context);
    if (res && !res._isVue && isPromise(res) && !res._handled) {
      res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
      // issue #9511
      // avoid catch triggering multiple times when nested calls
      res._handled = true;
    }
  } catch (e) {
    handleError(e, vm, info);
  }
  return res
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      // if the user intentionally throws the original error in the handler,
      // do not log it twice
      if (e !== err) {
        logError(e, null, 'config.errorHandler');
      }
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (true) {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */

var isUsingMicroTask = false;

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).
var timerFunc;

// The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  timerFunc = function () {
    p.then(flushCallbacks);
    // In problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
  isUsingMicroTask = true;
} else if (!isIE && typeof MutationObserver !== 'undefined' && (
  isNative(MutationObserver) ||
  // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  var counter = 1;
  var observer = new MutationObserver(flushCallbacks);
  var textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true
  });
  timerFunc = function () {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };
  isUsingMicroTask = true;
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Technically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  timerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    timerFunc();
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (true) {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var warnReservedPrefix = function (target, key) {
    warn(
      "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
      'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
      'prevent conflicts with Vue internals. ' +
      'See: https://vuejs.org/v2/api/#data',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) ||
        (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
      if (!has && !isAllowed) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

var mark;
var measure;

if (true) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      // perf.clearMeasures(name)
    };
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns, vm) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
      }
    } else {
      // return handler return value for single handlers
      return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler")
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  createOnceHandler,
  vm
) {
  var name, def$$1, cur, old, event;
  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
       true && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur, vm);
      }
      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }
      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

function mergeVNodeHook (def, hookKey, hook) {
  if (def instanceof VNode) {
    def = def.data.hook || (def.data.hook = {});
  }
  var invoker;
  var oldHook = def[hookKey];

  function wrappedHook () {
    hook.apply(this, arguments);
    // important: remove merged hook to ensure it's called only once
    // and prevent memory leak
    remove(invoker.fns, wrappedHook);
  }

  if (isUndef(oldHook)) {
    // no existing hook
    invoker = createFnInvoker([wrappedHook]);
  } else {
    /* istanbul ignore if */
    if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
      // already a merged invoker
      invoker = oldHook;
      invoker.fns.push(wrappedHook);
    } else {
      // existing plain hook
      invoker = createFnInvoker([oldHook, wrappedHook]);
    }
  }

  invoker.merged = true;
  def[hookKey] = invoker;
}

/*  */

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    return
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (true) {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  return res
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (true) {
        defineReactive$$1(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {}
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject)
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      // #6574 in case the inject object is observed...
      if (key === '__ob__') { continue }
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (true) {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  if (!children || !children.length) {
    return {}
  }
  var slots = {};
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      (slots.default || (slots.default = [])).push(child);
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

/*  */

function normalizeScopedSlots (
  slots,
  normalSlots,
  prevSlots
) {
  var res;
  var hasNormalSlots = Object.keys(normalSlots).length > 0;
  var isStable = slots ? !!slots.$stable : !hasNormalSlots;
  var key = slots && slots.$key;
  if (!slots) {
    res = {};
  } else if (slots._normalized) {
    // fast path 1: child component re-render only, parent did not change
    return slots._normalized
  } else if (
    isStable &&
    prevSlots &&
    prevSlots !== emptyObject &&
    key === prevSlots.$key &&
    !hasNormalSlots &&
    !prevSlots.$hasNormal
  ) {
    // fast path 2: stable scoped slots w/ no normal slots to proxy,
    // only need to normalize once
    return prevSlots
  } else {
    res = {};
    for (var key$1 in slots) {
      if (slots[key$1] && key$1[0] !== '$') {
        res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
      }
    }
  }
  // expose normal slots on scopedSlots
  for (var key$2 in normalSlots) {
    if (!(key$2 in res)) {
      res[key$2] = proxyNormalSlot(normalSlots, key$2);
    }
  }
  // avoriaz seems to mock a non-extensible $scopedSlots object
  // and when that is passed down this would cause an error
  if (slots && Object.isExtensible(slots)) {
    (slots)._normalized = res;
  }
  def(res, '$stable', isStable);
  def(res, '$key', key);
  def(res, '$hasNormal', hasNormalSlots);
  return res
}

function normalizeScopedSlot(normalSlots, key, fn) {
  var normalized = function () {
    var res = arguments.length ? fn.apply(null, arguments) : fn({});
    res = res && typeof res === 'object' && !Array.isArray(res)
      ? [res] // single vnode
      : normalizeChildren(res);
    return res && (
      res.length === 0 ||
      (res.length === 1 && res[0].isComment) // #9658
    ) ? undefined
      : res
  };
  // this is a slot using the new v-slot syntax without scope. although it is
  // compiled as a scoped slot, render fn users would expect it to be present
  // on this.$slots because the usage is semantically a normal slot.
  if (fn.proxy) {
    Object.defineProperty(normalSlots, key, {
      get: normalized,
      enumerable: true,
      configurable: true
    });
  }
  return normalized
}

function proxyNormalSlot(slots, key) {
  return function () { return slots[key]; }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i);
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i);
    }
  } else if (isObject(val)) {
    if (hasSymbol && val[Symbol.iterator]) {
      ret = [];
      var iterator = val[Symbol.iterator]();
      var result = iterator.next();
      while (!result.done) {
        ret.push(render(result.value, ret.length));
        result = iterator.next();
      }
    } else {
      keys = Object.keys(val);
      ret = new Array(keys.length);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i);
      }
    }
  }
  if (!isDef(ret)) {
    ret = [];
  }
  (ret)._isVList = true;
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if ( true && !isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    nodes = scopedSlotFn(props) || fallback;
  } else {
    nodes = this.$slots[name] || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
       true && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        var camelizedKey = camelize(key);
        var hyphenatedKey = hyphenate(key);
        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
       true && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function resolveScopedSlots (
  fns, // see flow/vnode
  res,
  // the following are added in 2.6
  hasDynamicKeys,
  contentHashKey
) {
  res = res || { $stable: !hasDynamicKeys };
  for (var i = 0; i < fns.length; i++) {
    var slot = fns[i];
    if (Array.isArray(slot)) {
      resolveScopedSlots(slot, res, hasDynamicKeys);
    } else if (slot) {
      // marker for reverse proxying v-slot without scope on this.$slots
      if (slot.proxy) {
        slot.fn.proxy = true;
      }
      res[slot.key] = slot.fn;
    }
  }
  if (contentHashKey) {
    (res).$key = contentHashKey;
  }
  return res
}

/*  */

function bindDynamicKeys (baseObj, values) {
  for (var i = 0; i < values.length; i += 2) {
    var key = values[i];
    if (typeof key === 'string' && key) {
      baseObj[values[i]] = values[i + 1];
    } else if ( true && key !== '' && key !== null) {
      // null is a special value for explicitly removing a binding
      warn(
        ("Invalid value for dynamic directive argument (expected string or null): " + key),
        this
      );
    }
  }
  return baseObj
}

// helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.
function prependModifier (value, symbol) {
  return typeof value === 'string' ? symbol + value : value
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
  target._d = bindDynamicKeys;
  target._p = prependModifier;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var this$1 = this;

  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () {
    if (!this$1.$slots) {
      normalizeScopedSlots(
        data.scopedSlots,
        this$1.$slots = resolveSlots(children, parent)
      );
    }
    return this$1.$slots
  };

  Object.defineProperty(this, 'scopedSlots', ({
    enumerable: true,
    get: function get () {
      return normalizeScopedSlots(data.scopedSlots, this.slots())
    }
  }));

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (true) {
    (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
  }
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

/*  */

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (vnode, hydrating) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (true) {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag);

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent // activeInstance in lifecycle state
) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];
    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1 (f1, f2) {
  var merged = function (a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };
  merged._merged = true;
  return merged
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input'
  ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;
  if (isDef(existing)) {
    if (
      Array.isArray(existing)
        ? existing.indexOf(callback) === -1
        : existing !== callback
    ) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
     true && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if ( true &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      if ( true && isDef(data) && isDef(data.nativeOn)) {
        warn(
          ("The .native modifier for v-on is only valid on components but it was used on <" + tag + ">."),
          context
        );
      }
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (true) {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {}
}

var currentRenderingInstance = null;

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = normalizeScopedSlots(
        _parentVnode.data.scopedSlots,
        vm.$slots,
        vm.$scopedSlots
      );
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      // There's no need to maintain a stack because all render fns are called
      // separately from one another. Nested component's render fns are called
      // when parent component is patched.
      currentRenderingInstance = vm;
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if ( true && vm.$options.renderError) {
        try {
          vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
        } catch (e) {
          handleError(e, vm, "renderError");
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    } finally {
      currentRenderingInstance = null;
    }
    // if the returned array contains only a single node, allow it
    if (Array.isArray(vnode) && vnode.length === 1) {
      vnode = vnode[0];
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ( true && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  var owner = currentRenderingInstance;
  if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
    // already pending
    factory.owners.push(owner);
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (owner && !isDef(factory.owners)) {
    var owners = factory.owners = [owner];
    var sync = true;
    var timerLoading = null;
    var timerTimeout = null

    ;(owner).$on('hook:destroyed', function () { return remove(owners, owner); });

    var forceRender = function (renderCompleted) {
      for (var i = 0, l = owners.length; i < l; i++) {
        (owners[i]).$forceUpdate();
      }

      if (renderCompleted) {
        owners.length = 0;
        if (timerLoading !== null) {
          clearTimeout(timerLoading);
          timerLoading = null;
        }
        if (timerTimeout !== null) {
          clearTimeout(timerTimeout);
          timerTimeout = null;
        }
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender(true);
      } else {
        owners.length = 0;
      }
    });

    var reject = once(function (reason) {
       true && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (isPromise(res)) {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isPromise(res.component)) {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            timerLoading = setTimeout(function () {
              timerLoading = null;
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          timerTimeout = setTimeout(function () {
            timerTimeout = null;
            if (isUndef(factory.resolved)) {
              reject(
                 true
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : undefined
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn) {
  target.$on(event, fn);
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function createOnceHandler (event, fn) {
  var _target = target;
  return function onceHandler () {
    var res = fn.apply(null, arguments);
    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  }
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        vm.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (true) {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      var info = "event handler for \"" + event + "\"";
      for (var i = 0, l = cbs.length; i < l; i++) {
        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
      }
    }
    return vm
  };
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  }
}

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    restoreActiveInstance();
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function mountComponent (
  vm,
  el,
  hydrating
) {
  vm.$el = el;
  if (!vm.$options.render) {
    vm.$options.render = createEmptyVNode;
    if (true) {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  callHook(vm, 'beforeMount');

  var updateComponent;
  /* istanbul ignore if */
  if ( true && config.performance && mark) {
    updateComponent = function () {
      var name = vm._name;
      var id = vm._uid;
      var startTag = "vue-perf-start:" + id;
      var endTag = "vue-perf-end:" + id;

      mark(startTag);
      var vnode = vm._render();
      mark(endTag);
      measure(("vue " + name + " render"), startTag, endTag);

      mark(startTag);
      vm._update(vnode, hydrating);
      mark(endTag);
      measure(("vue " + name + " patch"), startTag, endTag);
    };
  } else {
    updateComponent = function () {
      vm._update(vm._render(), hydrating);
    };
  }

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, {
    before: function before () {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true /* isRenderWatcher */);
  hydrating = false;

  // manually mounted instance, call mounted on self
  // mounted is called for render-created child components in its inserted hook
  if (vm.$vnode == null) {
    vm._isMounted = true;
    callHook(vm, 'mounted');
  }
  return vm
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (true) {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren.

  // check if there are dynamic scopedSlots (hand-written or compiled but with
  // dynamic slot names). Static scoped slots compiled from template has the
  // "$stable" marker.
  var newScopedSlots = parentVnode.data.scopedSlots;
  var oldScopedSlots = vm.$scopedSlots;
  var hasDynamicScopedSlot = !!(
    (newScopedSlots && !newScopedSlots.$stable) ||
    (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
    (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key)
  );

  // Any static slot children from the parent may have changed during parent's
  // update. Dynamic scoped slots may also have changed. In such cases, a forced
  // update is necessary to ensure correctness.
  var needsForceUpdate = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    hasDynamicScopedSlot
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }

  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (needsForceUpdate) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (true) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  var info = hook + " hook";
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info);
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */

var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (true) {
    circular = {};
  }
  waiting = flushing = false;
}

// Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.
var currentFlushTimestamp = 0;

// Async edge case fix requires storing an event listener's attach timestamp.
var getNow = Date.now;

// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
// All IE versions use low-res event timestamps, and have problematic clock
// implementations (#9632)
if (inBrowser && !isIE) {
  var performance = window.performance;
  if (
    performance &&
    typeof performance.now === 'function' &&
    getNow() > document.createEvent('Event').timeStamp
  ) {
    // if the event timestamp, although evaluated AFTER the Date.now(), is
    // smaller than it, it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listener timestamps as
    // well.
    getNow = function () { return performance.now(); };
  }
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  currentFlushTimestamp = getNow();
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    if (watcher.before) {
      watcher.before();
    }
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ( true && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;

      if ( true && !config.async) {
        flushSchedulerQueue();
        return
      }
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */



var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  true
    ? expOrFn.toString()
    : undefined;
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = noop;
       true && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
  var i = this.deps.length;
  while (i--) {
    var dep = this.deps[i];
    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
  var i = this.deps.length;
  while (i--) {
    this.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (true) {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (!isRoot && !isUpdatingChildComponent) {
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {}
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
     true && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (true) {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
       true && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if ( true && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (true) {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : createGetterInvoker(userDef.get)
      : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }
  if ( true &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.target) {
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function createGetterInvoker(fn) {
  return function computedGetter () {
    return fn.call(this, this)
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (true) {
      if (typeof methods[key] !== 'function') {
        warn(
          "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (true) {
    dataDef.set = function () {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      try {
        cb.call(vm, watcher.value);
      } catch (error) {
        handleError(error, vm, ("callback for immediate watcher \"" + (watcher.expression) + "\""));
      }
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (true) {
      initProxy(vm);
    } else {}
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    initInjections(vm); // resolve injections before data/props
    initState(vm);
    initProvide(vm); // resolve provide after data/props
    callHook(vm, 'created');

    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = latest[key];
    }
  }
  return modified
}

function Vue (options) {
  if ( true &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if ( true && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if ( true && type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */



function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (true) {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  // 2.6 explicit observable API
  Vue.observable = function (obj) {
    observe(obj);
    return obj
  };

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.6.11';

/*  */

// these are reserved for web because they are directly compiled away
// during template compilation
var isReservedAttr = makeMap('style,class');

// attributes that should be using props for binding
var acceptValue = makeMap('input,textarea,option,select,progress');
var mustUseProp = function (tag, type, attr) {
  return (
    (attr === 'value' && acceptValue(tag)) && type !== 'button' ||
    (attr === 'selected' && tag === 'option') ||
    (attr === 'checked' && tag === 'input') ||
    (attr === 'muted' && tag === 'video')
  )
};

var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');

var isValidContentEditableValue = makeMap('events,caret,typing,plaintext-only');

var convertEnumeratedValue = function (key, value) {
  return isFalsyAttrValue(value) || value === 'false'
    ? 'false'
    // allow arbitrary string value for contenteditable
    : key === 'contenteditable' && isValidContentEditableValue(value)
      ? value
      : 'true'
};

var isBooleanAttr = makeMap(
  'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
  'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
  'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
  'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
  'required,reversed,scoped,seamless,selected,sortable,translate,' +
  'truespeed,typemustmatch,visible'
);

var xlinkNS = 'http://www.w3.org/1999/xlink';

var isXlink = function (name) {
  return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink'
};

var getXlinkProp = function (name) {
  return isXlink(name) ? name.slice(6, name.length) : ''
};

var isFalsyAttrValue = function (val) {
  return val == null || val === false
};

/*  */

function genClassForVnode (vnode) {
  var data = vnode.data;
  var parentNode = vnode;
  var childNode = vnode;
  while (isDef(childNode.componentInstance)) {
    childNode = childNode.componentInstance._vnode;
    if (childNode && childNode.data) {
      data = mergeClassData(childNode.data, data);
    }
  }
  while (isDef(parentNode = parentNode.parent)) {
    if (parentNode && parentNode.data) {
      data = mergeClassData(data, parentNode.data);
    }
  }
  return renderClass(data.staticClass, data.class)
}

function mergeClassData (child, parent) {
  return {
    staticClass: concat(child.staticClass, parent.staticClass),
    class: isDef(child.class)
      ? [child.class, parent.class]
      : parent.class
  }
}

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var namespaceMap = {
  svg: 'http://www.w3.org/2000/svg',
  math: 'http://www.w3.org/1998/Math/MathML'
};

var isHTMLTag = makeMap(
  'html,body,base,head,link,meta,style,title,' +
  'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
  'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' +
  'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
  's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
  'embed,object,param,source,canvas,script,noscript,del,ins,' +
  'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
  'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
  'output,progress,select,textarea,' +
  'details,dialog,menu,menuitem,summary,' +
  'content,element,shadow,template,blockquote,iframe,tfoot'
);

// this map is intentionally selective, only covering SVG elements that may
// contain child elements.
var isSVG = makeMap(
  'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' +
  'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
  'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
  true
);

var isReservedTag = function (tag) {
  return isHTMLTag(tag) || isSVG(tag)
};

function getTagNamespace (tag) {
  if (isSVG(tag)) {
    return 'svg'
  }
  // basic support for MathML
  // note it doesn't support other MathML elements being component roots
  if (tag === 'math') {
    return 'math'
  }
}

var unknownElementCache = Object.create(null);
function isUnknownElement (tag) {
  /* istanbul ignore if */
  if (!inBrowser) {
    return true
  }
  if (isReservedTag(tag)) {
    return false
  }
  tag = tag.toLowerCase();
  /* istanbul ignore if */
  if (unknownElementCache[tag] != null) {
    return unknownElementCache[tag]
  }
  var el = document.createElement(tag);
  if (tag.indexOf('-') > -1) {
    // http://stackoverflow.com/a/28210364/1070244
    return (unknownElementCache[tag] = (
      el.constructor === window.HTMLUnknownElement ||
      el.constructor === window.HTMLElement
    ))
  } else {
    return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()))
  }
}

var isTextInputType = makeMap('text,number,password,search,email,tel,url');

/*  */

/**
 * Query an element selector if it's not an element already.
 */
function query (el) {
  if (typeof el === 'string') {
    var selected = document.querySelector(el);
    if (!selected) {
       true && warn(
        'Cannot find element: ' + el
      );
      return document.createElement('div')
    }
    return selected
  } else {
    return el
  }
}

/*  */

function createElement$1 (tagName, vnode) {
  var elm = document.createElement(tagName);
  if (tagName !== 'select') {
    return elm
  }
  // false or null will remove the attribute but undefined will not
  if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
    elm.setAttribute('multiple', 'multiple');
  }
  return elm
}

function createElementNS (namespace, tagName) {
  return document.createElementNS(namespaceMap[namespace], tagName)
}

function createTextNode (text) {
  return document.createTextNode(text)
}

function createComment (text) {
  return document.createComment(text)
}

function insertBefore (parentNode, newNode, referenceNode) {
  parentNode.insertBefore(newNode, referenceNode);
}

function removeChild (node, child) {
  node.removeChild(child);
}

function appendChild (node, child) {
  node.appendChild(child);
}

function parentNode (node) {
  return node.parentNode
}

function nextSibling (node) {
  return node.nextSibling
}

function tagName (node) {
  return node.tagName
}

function setTextContent (node, text) {
  node.textContent = text;
}

function setStyleScope (node, scopeId) {
  node.setAttribute(scopeId, '');
}

var nodeOps = /*#__PURE__*/Object.freeze({
  createElement: createElement$1,
  createElementNS: createElementNS,
  createTextNode: createTextNode,
  createComment: createComment,
  insertBefore: insertBefore,
  removeChild: removeChild,
  appendChild: appendChild,
  parentNode: parentNode,
  nextSibling: nextSibling,
  tagName: tagName,
  setTextContent: setTextContent,
  setStyleScope: setStyleScope
});

/*  */

var ref = {
  create: function create (_, vnode) {
    registerRef(vnode);
  },
  update: function update (oldVnode, vnode) {
    if (oldVnode.data.ref !== vnode.data.ref) {
      registerRef(oldVnode, true);
      registerRef(vnode);
    }
  },
  destroy: function destroy (vnode) {
    registerRef(vnode, true);
  }
};

function registerRef (vnode, isRemoval) {
  var key = vnode.data.ref;
  if (!isDef(key)) { return }

  var vm = vnode.context;
  var ref = vnode.componentInstance || vnode.elm;
  var refs = vm.$refs;
  if (isRemoval) {
    if (Array.isArray(refs[key])) {
      remove(refs[key], ref);
    } else if (refs[key] === ref) {
      refs[key] = undefined;
    }
  } else {
    if (vnode.data.refInFor) {
      if (!Array.isArray(refs[key])) {
        refs[key] = [ref];
      } else if (refs[key].indexOf(ref) < 0) {
        // $flow-disable-line
        refs[key].push(ref);
      }
    } else {
      refs[key] = ref;
    }
  }
}

/**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
 *
 * modified by Evan You (@yyx990803)
 *
 * Not type-checking this because this file is perf-critical and the cost
 * of making flow understand it is not worth it.
 */

var emptyNode = new VNode('', {}, []);

var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

function sameVnode (a, b) {
  return (
    a.key === b.key && (
      (
        a.tag === b.tag &&
        a.isComment === b.isComment &&
        isDef(a.data) === isDef(b.data) &&
        sameInputType(a, b)
      ) || (
        isTrue(a.isAsyncPlaceholder) &&
        a.asyncFactory === b.asyncFactory &&
        isUndef(b.asyncFactory.error)
      )
    )
  )
}

function sameInputType (a, b) {
  if (a.tag !== 'input') { return true }
  var i;
  var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
  var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
  return typeA === typeB || isTextInputType(typeA) && isTextInputType(typeB)
}

function createKeyToOldIdx (children, beginIdx, endIdx) {
  var i, key;
  var map = {};
  for (i = beginIdx; i <= endIdx; ++i) {
    key = children[i].key;
    if (isDef(key)) { map[key] = i; }
  }
  return map
}

function createPatchFunction (backend) {
  var i, j;
  var cbs = {};

  var modules = backend.modules;
  var nodeOps = backend.nodeOps;

  for (i = 0; i < hooks.length; ++i) {
    cbs[hooks[i]] = [];
    for (j = 0; j < modules.length; ++j) {
      if (isDef(modules[j][hooks[i]])) {
        cbs[hooks[i]].push(modules[j][hooks[i]]);
      }
    }
  }

  function emptyNodeAt (elm) {
    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
  }

  function createRmCb (childElm, listeners) {
    function remove$$1 () {
      if (--remove$$1.listeners === 0) {
        removeNode(childElm);
      }
    }
    remove$$1.listeners = listeners;
    return remove$$1
  }

  function removeNode (el) {
    var parent = nodeOps.parentNode(el);
    // element may have already been removed due to v-html / v-text
    if (isDef(parent)) {
      nodeOps.removeChild(parent, el);
    }
  }

  function isUnknownElement$$1 (vnode, inVPre) {
    return (
      !inVPre &&
      !vnode.ns &&
      !(
        config.ignoredElements.length &&
        config.ignoredElements.some(function (ignore) {
          return isRegExp(ignore)
            ? ignore.test(vnode.tag)
            : ignore === vnode.tag
        })
      ) &&
      config.isUnknownElement(vnode.tag)
    )
  }

  var creatingElmInVPre = 0;

  function createElm (
    vnode,
    insertedVnodeQueue,
    parentElm,
    refElm,
    nested,
    ownerArray,
    index
  ) {
    if (isDef(vnode.elm) && isDef(ownerArray)) {
      // This vnode was used in a previous render!
      // now it's used as a new node, overwriting its elm would cause
      // potential patch errors down the road when it's used as an insertion
      // reference node. Instead, we clone the node on-demand before creating
      // associated DOM element for it.
      vnode = ownerArray[index] = cloneVNode(vnode);
    }

    vnode.isRootInsert = !nested; // for transition enter check
    if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
      return
    }

    var data = vnode.data;
    var children = vnode.children;
    var tag = vnode.tag;
    if (isDef(tag)) {
      if (true) {
        if (data && data.pre) {
          creatingElmInVPre++;
        }
        if (isUnknownElement$$1(vnode, creatingElmInVPre)) {
          warn(
            'Unknown custom element: <' + tag + '> - did you ' +
            'register the component correctly? For recursive components, ' +
            'make sure to provide the "name" option.',
            vnode.context
          );
        }
      }

      vnode.elm = vnode.ns
        ? nodeOps.createElementNS(vnode.ns, tag)
        : nodeOps.createElement(tag, vnode);
      setScope(vnode);

      /* istanbul ignore if */
      {
        createChildren(vnode, children, insertedVnodeQueue);
        if (isDef(data)) {
          invokeCreateHooks(vnode, insertedVnodeQueue);
        }
        insert(parentElm, vnode.elm, refElm);
      }

      if ( true && data && data.pre) {
        creatingElmInVPre--;
      }
    } else if (isTrue(vnode.isComment)) {
      vnode.elm = nodeOps.createComment(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    } else {
      vnode.elm = nodeOps.createTextNode(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    }
  }

  function createComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i = vnode.data;
    if (isDef(i)) {
      var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
      if (isDef(i = i.hook) && isDef(i = i.init)) {
        i(vnode, false /* hydrating */);
      }
      // after calling the init hook, if the vnode is a child component
      // it should've created a child instance and mounted it. the child
      // component also has set the placeholder vnode's elm.
      // in that case we can just return the element and be done.
      if (isDef(vnode.componentInstance)) {
        initComponent(vnode, insertedVnodeQueue);
        insert(parentElm, vnode.elm, refElm);
        if (isTrue(isReactivated)) {
          reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
        }
        return true
      }
    }
  }

  function initComponent (vnode, insertedVnodeQueue) {
    if (isDef(vnode.data.pendingInsert)) {
      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
      vnode.data.pendingInsert = null;
    }
    vnode.elm = vnode.componentInstance.$el;
    if (isPatchable(vnode)) {
      invokeCreateHooks(vnode, insertedVnodeQueue);
      setScope(vnode);
    } else {
      // empty component root.
      // skip all element-related modules except for ref (#3455)
      registerRef(vnode);
      // make sure to invoke the insert hook
      insertedVnodeQueue.push(vnode);
    }
  }

  function reactivateComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i;
    // hack for #4339: a reactivated component with inner transition
    // does not trigger because the inner node's created hooks are not called
    // again. It's not ideal to involve module-specific logic in here but
    // there doesn't seem to be a better way to do it.
    var innerNode = vnode;
    while (innerNode.componentInstance) {
      innerNode = innerNode.componentInstance._vnode;
      if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
        for (i = 0; i < cbs.activate.length; ++i) {
          cbs.activate[i](emptyNode, innerNode);
        }
        insertedVnodeQueue.push(innerNode);
        break
      }
    }
    // unlike a newly created component,
    // a reactivated keep-alive component doesn't insert itself
    insert(parentElm, vnode.elm, refElm);
  }

  function insert (parent, elm, ref$$1) {
    if (isDef(parent)) {
      if (isDef(ref$$1)) {
        if (nodeOps.parentNode(ref$$1) === parent) {
          nodeOps.insertBefore(parent, elm, ref$$1);
        }
      } else {
        nodeOps.appendChild(parent, elm);
      }
    }
  }

  function createChildren (vnode, children, insertedVnodeQueue) {
    if (Array.isArray(children)) {
      if (true) {
        checkDuplicateKeys(children);
      }
      for (var i = 0; i < children.length; ++i) {
        createElm(children[i], insertedVnodeQueue, vnode.elm, null, true, children, i);
      }
    } else if (isPrimitive(vnode.text)) {
      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(String(vnode.text)));
    }
  }

  function isPatchable (vnode) {
    while (vnode.componentInstance) {
      vnode = vnode.componentInstance._vnode;
    }
    return isDef(vnode.tag)
  }

  function invokeCreateHooks (vnode, insertedVnodeQueue) {
    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
      cbs.create[i$1](emptyNode, vnode);
    }
    i = vnode.data.hook; // Reuse variable
    if (isDef(i)) {
      if (isDef(i.create)) { i.create(emptyNode, vnode); }
      if (isDef(i.insert)) { insertedVnodeQueue.push(vnode); }
    }
  }

  // set scope id attribute for scoped CSS.
  // this is implemented as a special case to avoid the overhead
  // of going through the normal attribute patching process.
  function setScope (vnode) {
    var i;
    if (isDef(i = vnode.fnScopeId)) {
      nodeOps.setStyleScope(vnode.elm, i);
    } else {
      var ancestor = vnode;
      while (ancestor) {
        if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
          nodeOps.setStyleScope(vnode.elm, i);
        }
        ancestor = ancestor.parent;
      }
    }
    // for slot content they should also get the scopeId from the host instance.
    if (isDef(i = activeInstance) &&
      i !== vnode.context &&
      i !== vnode.fnContext &&
      isDef(i = i.$options._scopeId)
    ) {
      nodeOps.setStyleScope(vnode.elm, i);
    }
  }

  function addVnodes (parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
    for (; startIdx <= endIdx; ++startIdx) {
      createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm, false, vnodes, startIdx);
    }
  }

  function invokeDestroyHook (vnode) {
    var i, j;
    var data = vnode.data;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode); }
      for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode); }
    }
    if (isDef(i = vnode.children)) {
      for (j = 0; j < vnode.children.length; ++j) {
        invokeDestroyHook(vnode.children[j]);
      }
    }
  }

  function removeVnodes (vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
      var ch = vnodes[startIdx];
      if (isDef(ch)) {
        if (isDef(ch.tag)) {
          removeAndInvokeRemoveHook(ch);
          invokeDestroyHook(ch);
        } else { // Text node
          removeNode(ch.elm);
        }
      }
    }
  }

  function removeAndInvokeRemoveHook (vnode, rm) {
    if (isDef(rm) || isDef(vnode.data)) {
      var i;
      var listeners = cbs.remove.length + 1;
      if (isDef(rm)) {
        // we have a recursively passed down rm callback
        // increase the listeners count
        rm.listeners += listeners;
      } else {
        // directly removing
        rm = createRmCb(vnode.elm, listeners);
      }
      // recursively invoke hooks on child component root node
      if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
        removeAndInvokeRemoveHook(i, rm);
      }
      for (i = 0; i < cbs.remove.length; ++i) {
        cbs.remove[i](vnode, rm);
      }
      if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
        i(vnode, rm);
      } else {
        rm();
      }
    } else {
      removeNode(vnode.elm);
    }
  }

  function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
    var oldStartIdx = 0;
    var newStartIdx = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var oldKeyToIdx, idxInOld, vnodeToMove, refElm;

    // removeOnly is a special flag used only by <transition-group>
    // to ensure removed elements stay in correct relative positions
    // during leaving transitions
    var canMove = !removeOnly;

    if (true) {
      checkDuplicateKeys(newCh);
    }

    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if (isUndef(oldStartVnode)) {
        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
      } else if (isUndef(oldEndVnode)) {
        oldEndVnode = oldCh[--oldEndIdx];
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
        oldStartVnode = oldCh[++oldStartIdx];
        newStartVnode = newCh[++newStartIdx];
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
        oldEndVnode = oldCh[--oldEndIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
        oldStartVnode = oldCh[++oldStartIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
        oldEndVnode = oldCh[--oldEndIdx];
        newStartVnode = newCh[++newStartIdx];
      } else {
        if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx); }
        idxInOld = isDef(newStartVnode.key)
          ? oldKeyToIdx[newStartVnode.key]
          : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);
        if (isUndef(idxInOld)) { // New element
          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
        } else {
          vnodeToMove = oldCh[idxInOld];
          if (sameVnode(vnodeToMove, newStartVnode)) {
            patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
            oldCh[idxInOld] = undefined;
            canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
          } else {
            // same key but different element. treat as new element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
          }
        }
        newStartVnode = newCh[++newStartIdx];
      }
    }
    if (oldStartIdx > oldEndIdx) {
      refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
      addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
    } else if (newStartIdx > newEndIdx) {
      removeVnodes(oldCh, oldStartIdx, oldEndIdx);
    }
  }

  function checkDuplicateKeys (children) {
    var seenKeys = {};
    for (var i = 0; i < children.length; i++) {
      var vnode = children[i];
      var key = vnode.key;
      if (isDef(key)) {
        if (seenKeys[key]) {
          warn(
            ("Duplicate keys detected: '" + key + "'. This may cause an update error."),
            vnode.context
          );
        } else {
          seenKeys[key] = true;
        }
      }
    }
  }

  function findIdxInOld (node, oldCh, start, end) {
    for (var i = start; i < end; i++) {
      var c = oldCh[i];
      if (isDef(c) && sameVnode(node, c)) { return i }
    }
  }

  function patchVnode (
    oldVnode,
    vnode,
    insertedVnodeQueue,
    ownerArray,
    index,
    removeOnly
  ) {
    if (oldVnode === vnode) {
      return
    }

    if (isDef(vnode.elm) && isDef(ownerArray)) {
      // clone reused vnode
      vnode = ownerArray[index] = cloneVNode(vnode);
    }

    var elm = vnode.elm = oldVnode.elm;

    if (isTrue(oldVnode.isAsyncPlaceholder)) {
      if (isDef(vnode.asyncFactory.resolved)) {
        hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
      } else {
        vnode.isAsyncPlaceholder = true;
      }
      return
    }

    // reuse element for static trees.
    // note we only do this if the vnode is cloned -
    // if the new node is not cloned it means the render functions have been
    // reset by the hot-reload-api and we need to do a proper re-render.
    if (isTrue(vnode.isStatic) &&
      isTrue(oldVnode.isStatic) &&
      vnode.key === oldVnode.key &&
      (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))
    ) {
      vnode.componentInstance = oldVnode.componentInstance;
      return
    }

    var i;
    var data = vnode.data;
    if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
      i(oldVnode, vnode);
    }

    var oldCh = oldVnode.children;
    var ch = vnode.children;
    if (isDef(data) && isPatchable(vnode)) {
      for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode); }
      if (isDef(i = data.hook) && isDef(i = i.update)) { i(oldVnode, vnode); }
    }
    if (isUndef(vnode.text)) {
      if (isDef(oldCh) && isDef(ch)) {
        if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly); }
      } else if (isDef(ch)) {
        if (true) {
          checkDuplicateKeys(ch);
        }
        if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, ''); }
        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
      } else if (isDef(oldCh)) {
        removeVnodes(oldCh, 0, oldCh.length - 1);
      } else if (isDef(oldVnode.text)) {
        nodeOps.setTextContent(elm, '');
      }
    } else if (oldVnode.text !== vnode.text) {
      nodeOps.setTextContent(elm, vnode.text);
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.postpatch)) { i(oldVnode, vnode); }
    }
  }

  function invokeInsertHook (vnode, queue, initial) {
    // delay insert hooks for component root nodes, invoke them after the
    // element is really inserted
    if (isTrue(initial) && isDef(vnode.parent)) {
      vnode.parent.data.pendingInsert = queue;
    } else {
      for (var i = 0; i < queue.length; ++i) {
        queue[i].data.hook.insert(queue[i]);
      }
    }
  }

  var hydrationBailed = false;
  // list of modules that can skip create hook during hydration because they
  // are already rendered on the client or has no need for initialization
  // Note: style is excluded because it relies on initial clone for future
  // deep updates (#7063).
  var isRenderedModule = makeMap('attrs,class,staticClass,staticStyle,key');

  // Note: this is a browser-only function so we can assume elms are DOM nodes.
  function hydrate (elm, vnode, insertedVnodeQueue, inVPre) {
    var i;
    var tag = vnode.tag;
    var data = vnode.data;
    var children = vnode.children;
    inVPre = inVPre || (data && data.pre);
    vnode.elm = elm;

    if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
      vnode.isAsyncPlaceholder = true;
      return true
    }
    // assert node match
    if (true) {
      if (!assertNodeMatch(elm, vnode, inVPre)) {
        return false
      }
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */); }
      if (isDef(i = vnode.componentInstance)) {
        // child component. it should have hydrated its own tree.
        initComponent(vnode, insertedVnodeQueue);
        return true
      }
    }
    if (isDef(tag)) {
      if (isDef(children)) {
        // empty element, allow client to pick up and populate children
        if (!elm.hasChildNodes()) {
          createChildren(vnode, children, insertedVnodeQueue);
        } else {
          // v-html and domProps: innerHTML
          if (isDef(i = data) && isDef(i = i.domProps) && isDef(i = i.innerHTML)) {
            if (i !== elm.innerHTML) {
              /* istanbul ignore if */
              if ( true &&
                typeof console !== 'undefined' &&
                !hydrationBailed
              ) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('server innerHTML: ', i);
                console.warn('client innerHTML: ', elm.innerHTML);
              }
              return false
            }
          } else {
            // iterate and compare children lists
            var childrenMatch = true;
            var childNode = elm.firstChild;
            for (var i$1 = 0; i$1 < children.length; i$1++) {
              if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue, inVPre)) {
                childrenMatch = false;
                break
              }
              childNode = childNode.nextSibling;
            }
            // if childNode is not null, it means the actual childNodes list is
            // longer than the virtual children list.
            if (!childrenMatch || childNode) {
              /* istanbul ignore if */
              if ( true &&
                typeof console !== 'undefined' &&
                !hydrationBailed
              ) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
              }
              return false
            }
          }
        }
      }
      if (isDef(data)) {
        var fullInvoke = false;
        for (var key in data) {
          if (!isRenderedModule(key)) {
            fullInvoke = true;
            invokeCreateHooks(vnode, insertedVnodeQueue);
            break
          }
        }
        if (!fullInvoke && data['class']) {
          // ensure collecting deps for deep class bindings for future updates
          traverse(data['class']);
        }
      }
    } else if (elm.data !== vnode.text) {
      elm.data = vnode.text;
    }
    return true
  }

  function assertNodeMatch (node, vnode, inVPre) {
    if (isDef(vnode.tag)) {
      return vnode.tag.indexOf('vue-component') === 0 || (
        !isUnknownElement$$1(vnode, inVPre) &&
        vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase())
      )
    } else {
      return node.nodeType === (vnode.isComment ? 8 : 3)
    }
  }

  return function patch (oldVnode, vnode, hydrating, removeOnly) {
    if (isUndef(vnode)) {
      if (isDef(oldVnode)) { invokeDestroyHook(oldVnode); }
      return
    }

    var isInitialPatch = false;
    var insertedVnodeQueue = [];

    if (isUndef(oldVnode)) {
      // empty mount (likely as component), create new root element
      isInitialPatch = true;
      createElm(vnode, insertedVnodeQueue);
    } else {
      var isRealElement = isDef(oldVnode.nodeType);
      if (!isRealElement && sameVnode(oldVnode, vnode)) {
        // patch existing root node
        patchVnode(oldVnode, vnode, insertedVnodeQueue, null, null, removeOnly);
      } else {
        if (isRealElement) {
          // mounting to a real element
          // check if this is server-rendered content and if we can perform
          // a successful hydration.
          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
            oldVnode.removeAttribute(SSR_ATTR);
            hydrating = true;
          }
          if (isTrue(hydrating)) {
            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
              invokeInsertHook(vnode, insertedVnodeQueue, true);
              return oldVnode
            } else if (true) {
              warn(
                'The client-side rendered virtual DOM tree is not matching ' +
                'server-rendered content. This is likely caused by incorrect ' +
                'HTML markup, for example nesting block-level elements inside ' +
                '<p>, or missing <tbody>. Bailing hydration and performing ' +
                'full client-side render.'
              );
            }
          }
          // either not server-rendered, or hydration failed.
          // create an empty node and replace it
          oldVnode = emptyNodeAt(oldVnode);
        }

        // replacing existing element
        var oldElm = oldVnode.elm;
        var parentElm = nodeOps.parentNode(oldElm);

        // create new node
        createElm(
          vnode,
          insertedVnodeQueue,
          // extremely rare edge case: do not insert if old element is in a
          // leaving transition. Only happens when combining transition +
          // keep-alive + HOCs. (#4590)
          oldElm._leaveCb ? null : parentElm,
          nodeOps.nextSibling(oldElm)
        );

        // update parent placeholder node element, recursively
        if (isDef(vnode.parent)) {
          var ancestor = vnode.parent;
          var patchable = isPatchable(vnode);
          while (ancestor) {
            for (var i = 0; i < cbs.destroy.length; ++i) {
              cbs.destroy[i](ancestor);
            }
            ancestor.elm = vnode.elm;
            if (patchable) {
              for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
                cbs.create[i$1](emptyNode, ancestor);
              }
              // #6513
              // invoke insert hooks that may have been merged by create hooks.
              // e.g. for directives that uses the "inserted" hook.
              var insert = ancestor.data.hook.insert;
              if (insert.merged) {
                // start at index 1 to avoid re-invoking component mounted hook
                for (var i$2 = 1; i$2 < insert.fns.length; i$2++) {
                  insert.fns[i$2]();
                }
              }
            } else {
              registerRef(ancestor);
            }
            ancestor = ancestor.parent;
          }
        }

        // destroy old node
        if (isDef(parentElm)) {
          removeVnodes([oldVnode], 0, 0);
        } else if (isDef(oldVnode.tag)) {
          invokeDestroyHook(oldVnode);
        }
      }
    }

    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
    return vnode.elm
  }
}

/*  */

var directives = {
  create: updateDirectives,
  update: updateDirectives,
  destroy: function unbindDirectives (vnode) {
    updateDirectives(vnode, emptyNode);
  }
};

function updateDirectives (oldVnode, vnode) {
  if (oldVnode.data.directives || vnode.data.directives) {
    _update(oldVnode, vnode);
  }
}

function _update (oldVnode, vnode) {
  var isCreate = oldVnode === emptyNode;
  var isDestroy = vnode === emptyNode;
  var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
  var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

  var dirsWithInsert = [];
  var dirsWithPostpatch = [];

  var key, oldDir, dir;
  for (key in newDirs) {
    oldDir = oldDirs[key];
    dir = newDirs[key];
    if (!oldDir) {
      // new directive, bind
      callHook$1(dir, 'bind', vnode, oldVnode);
      if (dir.def && dir.def.inserted) {
        dirsWithInsert.push(dir);
      }
    } else {
      // existing directive, update
      dir.oldValue = oldDir.value;
      dir.oldArg = oldDir.arg;
      callHook$1(dir, 'update', vnode, oldVnode);
      if (dir.def && dir.def.componentUpdated) {
        dirsWithPostpatch.push(dir);
      }
    }
  }

  if (dirsWithInsert.length) {
    var callInsert = function () {
      for (var i = 0; i < dirsWithInsert.length; i++) {
        callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
      }
    };
    if (isCreate) {
      mergeVNodeHook(vnode, 'insert', callInsert);
    } else {
      callInsert();
    }
  }

  if (dirsWithPostpatch.length) {
    mergeVNodeHook(vnode, 'postpatch', function () {
      for (var i = 0; i < dirsWithPostpatch.length; i++) {
        callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
      }
    });
  }

  if (!isCreate) {
    for (key in oldDirs) {
      if (!newDirs[key]) {
        // no longer present, unbind
        callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
      }
    }
  }
}

var emptyModifiers = Object.create(null);

function normalizeDirectives$1 (
  dirs,
  vm
) {
  var res = Object.create(null);
  if (!dirs) {
    // $flow-disable-line
    return res
  }
  var i, dir;
  for (i = 0; i < dirs.length; i++) {
    dir = dirs[i];
    if (!dir.modifiers) {
      // $flow-disable-line
      dir.modifiers = emptyModifiers;
    }
    res[getRawDirName(dir)] = dir;
    dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
  }
  // $flow-disable-line
  return res
}

function getRawDirName (dir) {
  return dir.rawName || ((dir.name) + "." + (Object.keys(dir.modifiers || {}).join('.')))
}

function callHook$1 (dir, hook, vnode, oldVnode, isDestroy) {
  var fn = dir.def && dir.def[hook];
  if (fn) {
    try {
      fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
    } catch (e) {
      handleError(e, vnode.context, ("directive " + (dir.name) + " " + hook + " hook"));
    }
  }
}

var baseModules = [
  ref,
  directives
];

/*  */

function updateAttrs (oldVnode, vnode) {
  var opts = vnode.componentOptions;
  if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
    return
  }
  if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
    return
  }
  var key, cur, old;
  var elm = vnode.elm;
  var oldAttrs = oldVnode.data.attrs || {};
  var attrs = vnode.data.attrs || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(attrs.__ob__)) {
    attrs = vnode.data.attrs = extend({}, attrs);
  }

  for (key in attrs) {
    cur = attrs[key];
    old = oldAttrs[key];
    if (old !== cur) {
      setAttr(elm, key, cur);
    }
  }
  // #4391: in IE9, setting type can reset value for input[type=radio]
  // #6666: IE/Edge forces progress value down to 1 before setting a max
  /* istanbul ignore if */
  if ((isIE || isEdge) && attrs.value !== oldAttrs.value) {
    setAttr(elm, 'value', attrs.value);
  }
  for (key in oldAttrs) {
    if (isUndef(attrs[key])) {
      if (isXlink(key)) {
        elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
      } else if (!isEnumeratedAttr(key)) {
        elm.removeAttribute(key);
      }
    }
  }
}

function setAttr (el, key, value) {
  if (el.tagName.indexOf('-') > -1) {
    baseSetAttr(el, key, value);
  } else if (isBooleanAttr(key)) {
    // set attribute for blank value
    // e.g. <option disabled>Select one</option>
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      // technically allowfullscreen is a boolean attribute for <iframe>,
      // but Flash expects a value of "true" when used on <embed> tag
      value = key === 'allowfullscreen' && el.tagName === 'EMBED'
        ? 'true'
        : key;
      el.setAttribute(key, value);
    }
  } else if (isEnumeratedAttr(key)) {
    el.setAttribute(key, convertEnumeratedValue(key, value));
  } else if (isXlink(key)) {
    if (isFalsyAttrValue(value)) {
      el.removeAttributeNS(xlinkNS, getXlinkProp(key));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    baseSetAttr(el, key, value);
  }
}

function baseSetAttr (el, key, value) {
  if (isFalsyAttrValue(value)) {
    el.removeAttribute(key);
  } else {
    // #7138: IE10 & 11 fires input event when setting placeholder on
    // <textarea>... block the first input event and remove the blocker
    // immediately.
    /* istanbul ignore if */
    if (
      isIE && !isIE9 &&
      el.tagName === 'TEXTAREA' &&
      key === 'placeholder' && value !== '' && !el.__ieph
    ) {
      var blocker = function (e) {
        e.stopImmediatePropagation();
        el.removeEventListener('input', blocker);
      };
      el.addEventListener('input', blocker);
      // $flow-disable-line
      el.__ieph = true; /* IE placeholder patched */
    }
    el.setAttribute(key, value);
  }
}

var attrs = {
  create: updateAttrs,
  update: updateAttrs
};

/*  */

function updateClass (oldVnode, vnode) {
  var el = vnode.elm;
  var data = vnode.data;
  var oldData = oldVnode.data;
  if (
    isUndef(data.staticClass) &&
    isUndef(data.class) && (
      isUndef(oldData) || (
        isUndef(oldData.staticClass) &&
        isUndef(oldData.class)
      )
    )
  ) {
    return
  }

  var cls = genClassForVnode(vnode);

  // handle transition classes
  var transitionClass = el._transitionClasses;
  if (isDef(transitionClass)) {
    cls = concat(cls, stringifyClass(transitionClass));
  }

  // set the class
  if (cls !== el._prevClass) {
    el.setAttribute('class', cls);
    el._prevClass = cls;
  }
}

var klass = {
  create: updateClass,
  update: updateClass
};

/*  */

/*  */

/*  */

/*  */

// in some cases, the event used has to be determined at runtime
// so we used some reserved tokens during compile.
var RANGE_TOKEN = '__r';
var CHECKBOX_RADIO_TOKEN = '__c';

/*  */

// normalize v-model event tokens that can only be determined at runtime.
// it's important to place the event as the first in the array because
// the whole point is ensuring the v-model callback gets called before
// user-attached handlers.
function normalizeEvents (on) {
  /* istanbul ignore if */
  if (isDef(on[RANGE_TOKEN])) {
    // IE input[type=range] only supports `change` event
    var event = isIE ? 'change' : 'input';
    on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
    delete on[RANGE_TOKEN];
  }
  // This was originally intended to fix #4521 but no longer necessary
  // after 2.5. Keeping it for backwards compat with generated code from < 2.4
  /* istanbul ignore if */
  if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
    on.change = [].concat(on[CHECKBOX_RADIO_TOKEN], on.change || []);
    delete on[CHECKBOX_RADIO_TOKEN];
  }
}

var target$1;

function createOnceHandler$1 (event, handler, capture) {
  var _target = target$1; // save current target element in closure
  return function onceHandler () {
    var res = handler.apply(null, arguments);
    if (res !== null) {
      remove$2(event, onceHandler, capture, _target);
    }
  }
}

// #9446: Firefox <= 53 (in particular, ESR 52) has incorrect Event.timeStamp
// implementation and does not fire microtasks in between event propagation, so
// safe to exclude.
var useMicrotaskFix = isUsingMicroTask && !(isFF && Number(isFF[1]) <= 53);

function add$1 (
  name,
  handler,
  capture,
  passive
) {
  // async edge case #6566: inner click event triggers patch, event handler
  // attached to outer element during patch, and triggered again. This
  // happens because browsers fire microtask ticks between event propagation.
  // the solution is simple: we save the timestamp when a handler is attached,
  // and the handler would only fire if the event passed to it was fired
  // AFTER it was attached.
  if (useMicrotaskFix) {
    var attachedTimestamp = currentFlushTimestamp;
    var original = handler;
    handler = original._wrapper = function (e) {
      if (
        // no bubbling, should always fire.
        // this is just a safety net in case event.timeStamp is unreliable in
        // certain weird environments...
        e.target === e.currentTarget ||
        // event is fired after handler attachment
        e.timeStamp >= attachedTimestamp ||
        // bail for environments that have buggy event.timeStamp implementations
        // #9462 iOS 9 bug: event.timeStamp is 0 after history.pushState
        // #9681 QtWebEngine event.timeStamp is negative value
        e.timeStamp <= 0 ||
        // #9448 bail if event is fired in another document in a multi-page
        // electron/nw.js app, since event.timeStamp will be using a different
        // starting reference
        e.target.ownerDocument !== document
      ) {
        return original.apply(this, arguments)
      }
    };
  }
  target$1.addEventListener(
    name,
    handler,
    supportsPassive
      ? { capture: capture, passive: passive }
      : capture
  );
}

function remove$2 (
  name,
  handler,
  capture,
  _target
) {
  (_target || target$1).removeEventListener(
    name,
    handler._wrapper || handler,
    capture
  );
}

function updateDOMListeners (oldVnode, vnode) {
  if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
    return
  }
  var on = vnode.data.on || {};
  var oldOn = oldVnode.data.on || {};
  target$1 = vnode.elm;
  normalizeEvents(on);
  updateListeners(on, oldOn, add$1, remove$2, createOnceHandler$1, vnode.context);
  target$1 = undefined;
}

var events = {
  create: updateDOMListeners,
  update: updateDOMListeners
};

/*  */

var svgContainer;

function updateDOMProps (oldVnode, vnode) {
  if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
    return
  }
  var key, cur;
  var elm = vnode.elm;
  var oldProps = oldVnode.data.domProps || {};
  var props = vnode.data.domProps || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(props.__ob__)) {
    props = vnode.data.domProps = extend({}, props);
  }

  for (key in oldProps) {
    if (!(key in props)) {
      elm[key] = '';
    }
  }

  for (key in props) {
    cur = props[key];
    // ignore children if the node has textContent or innerHTML,
    // as these will throw away existing DOM nodes and cause removal errors
    // on subsequent patches (#3360)
    if (key === 'textContent' || key === 'innerHTML') {
      if (vnode.children) { vnode.children.length = 0; }
      if (cur === oldProps[key]) { continue }
      // #6601 work around Chrome version <= 55 bug where single textNode
      // replaced by innerHTML/textContent retains its parentNode property
      if (elm.childNodes.length === 1) {
        elm.removeChild(elm.childNodes[0]);
      }
    }

    if (key === 'value' && elm.tagName !== 'PROGRESS') {
      // store value as _value as well since
      // non-string values will be stringified
      elm._value = cur;
      // avoid resetting cursor position when value is the same
      var strCur = isUndef(cur) ? '' : String(cur);
      if (shouldUpdateValue(elm, strCur)) {
        elm.value = strCur;
      }
    } else if (key === 'innerHTML' && isSVG(elm.tagName) && isUndef(elm.innerHTML)) {
      // IE doesn't support innerHTML for SVG elements
      svgContainer = svgContainer || document.createElement('div');
      svgContainer.innerHTML = "<svg>" + cur + "</svg>";
      var svg = svgContainer.firstChild;
      while (elm.firstChild) {
        elm.removeChild(elm.firstChild);
      }
      while (svg.firstChild) {
        elm.appendChild(svg.firstChild);
      }
    } else if (
      // skip the update if old and new VDOM state is the same.
      // `value` is handled separately because the DOM value may be temporarily
      // out of sync with VDOM state due to focus, composition and modifiers.
      // This  #4521 by skipping the unnecesarry `checked` update.
      cur !== oldProps[key]
    ) {
      // some property updates can throw
      // e.g. `value` on <progress> w/ non-finite value
      try {
        elm[key] = cur;
      } catch (e) {}
    }
  }
}

// check platforms/web/util/attrs.js acceptValue


function shouldUpdateValue (elm, checkVal) {
  return (!elm.composing && (
    elm.tagName === 'OPTION' ||
    isNotInFocusAndDirty(elm, checkVal) ||
    isDirtyWithModifiers(elm, checkVal)
  ))
}

function isNotInFocusAndDirty (elm, checkVal) {
  // return true when textbox (.number and .trim) loses focus and its value is
  // not equal to the updated value
  var notInFocus = true;
  // #6157
  // work around IE bug when accessing document.activeElement in an iframe
  try { notInFocus = document.activeElement !== elm; } catch (e) {}
  return notInFocus && elm.value !== checkVal
}

function isDirtyWithModifiers (elm, newVal) {
  var value = elm.value;
  var modifiers = elm._vModifiers; // injected by v-model runtime
  if (isDef(modifiers)) {
    if (modifiers.number) {
      return toNumber(value) !== toNumber(newVal)
    }
    if (modifiers.trim) {
      return value.trim() !== newVal.trim()
    }
  }
  return value !== newVal
}

var domProps = {
  create: updateDOMProps,
  update: updateDOMProps
};

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// merge static and dynamic style data on the same vnode
function normalizeStyleData (data) {
  var style = normalizeStyleBinding(data.style);
  // static style is pre-processed into an object during compilation
  // and is always a fresh object, so it's safe to merge into it
  return data.staticStyle
    ? extend(data.staticStyle, style)
    : style
}

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/**
 * parent component style should be after child's
 * so that parent component's style could override it
 */
function getStyle (vnode, checkChild) {
  var res = {};
  var styleData;

  if (checkChild) {
    var childNode = vnode;
    while (childNode.componentInstance) {
      childNode = childNode.componentInstance._vnode;
      if (
        childNode && childNode.data &&
        (styleData = normalizeStyleData(childNode.data))
      ) {
        extend(res, styleData);
      }
    }
  }

  if ((styleData = normalizeStyleData(vnode.data))) {
    extend(res, styleData);
  }

  var parentNode = vnode;
  while ((parentNode = parentNode.parent)) {
    if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
      extend(res, styleData);
    }
  }
  return res
}

/*  */

var cssVarRE = /^--/;
var importantRE = /\s*!important$/;
var setProp = function (el, name, val) {
  /* istanbul ignore if */
  if (cssVarRE.test(name)) {
    el.style.setProperty(name, val);
  } else if (importantRE.test(val)) {
    el.style.setProperty(hyphenate(name), val.replace(importantRE, ''), 'important');
  } else {
    var normalizedName = normalize(name);
    if (Array.isArray(val)) {
      // Support values array created by autoprefixer, e.g.
      // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
      // Set them one by one, and the browser will only set those it can recognize
      for (var i = 0, len = val.length; i < len; i++) {
        el.style[normalizedName] = val[i];
      }
    } else {
      el.style[normalizedName] = val;
    }
  }
};

var vendorNames = ['Webkit', 'Moz', 'ms'];

var emptyStyle;
var normalize = cached(function (prop) {
  emptyStyle = emptyStyle || document.createElement('div').style;
  prop = camelize(prop);
  if (prop !== 'filter' && (prop in emptyStyle)) {
    return prop
  }
  var capName = prop.charAt(0).toUpperCase() + prop.slice(1);
  for (var i = 0; i < vendorNames.length; i++) {
    var name = vendorNames[i] + capName;
    if (name in emptyStyle) {
      return name
    }
  }
});

function updateStyle (oldVnode, vnode) {
  var data = vnode.data;
  var oldData = oldVnode.data;

  if (isUndef(data.staticStyle) && isUndef(data.style) &&
    isUndef(oldData.staticStyle) && isUndef(oldData.style)
  ) {
    return
  }

  var cur, name;
  var el = vnode.elm;
  var oldStaticStyle = oldData.staticStyle;
  var oldStyleBinding = oldData.normalizedStyle || oldData.style || {};

  // if static style exists, stylebinding already merged into it when doing normalizeStyleData
  var oldStyle = oldStaticStyle || oldStyleBinding;

  var style = normalizeStyleBinding(vnode.data.style) || {};

  // store normalized style under a different key for next diff
  // make sure to clone it if it's reactive, since the user likely wants
  // to mutate it.
  vnode.data.normalizedStyle = isDef(style.__ob__)
    ? extend({}, style)
    : style;

  var newStyle = getStyle(vnode, true);

  for (name in oldStyle) {
    if (isUndef(newStyle[name])) {
      setProp(el, name, '');
    }
  }
  for (name in newStyle) {
    cur = newStyle[name];
    if (cur !== oldStyle[name]) {
      // ie9 setting to null has no effect, must use empty string
      setProp(el, name, cur == null ? '' : cur);
    }
  }
}

var style = {
  create: updateStyle,
  update: updateStyle
};

/*  */

var whitespaceRE = /\s+/;

/**
 * Add class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function addClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(whitespaceRE).forEach(function (c) { return el.classList.add(c); });
    } else {
      el.classList.add(cls);
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    if (cur.indexOf(' ' + cls + ' ') < 0) {
      el.setAttribute('class', (cur + cls).trim());
    }
  }
}

/**
 * Remove class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function removeClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(whitespaceRE).forEach(function (c) { return el.classList.remove(c); });
    } else {
      el.classList.remove(cls);
    }
    if (!el.classList.length) {
      el.removeAttribute('class');
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    var tar = ' ' + cls + ' ';
    while (cur.indexOf(tar) >= 0) {
      cur = cur.replace(tar, ' ');
    }
    cur = cur.trim();
    if (cur) {
      el.setAttribute('class', cur);
    } else {
      el.removeAttribute('class');
    }
  }
}

/*  */

function resolveTransition (def$$1) {
  if (!def$$1) {
    return
  }
  /* istanbul ignore else */
  if (typeof def$$1 === 'object') {
    var res = {};
    if (def$$1.css !== false) {
      extend(res, autoCssTransition(def$$1.name || 'v'));
    }
    extend(res, def$$1);
    return res
  } else if (typeof def$$1 === 'string') {
    return autoCssTransition(def$$1)
  }
}

var autoCssTransition = cached(function (name) {
  return {
    enterClass: (name + "-enter"),
    enterToClass: (name + "-enter-to"),
    enterActiveClass: (name + "-enter-active"),
    leaveClass: (name + "-leave"),
    leaveToClass: (name + "-leave-to"),
    leaveActiveClass: (name + "-leave-active")
  }
});

var hasTransition = inBrowser && !isIE9;
var TRANSITION = 'transition';
var ANIMATION = 'animation';

// Transition property/event sniffing
var transitionProp = 'transition';
var transitionEndEvent = 'transitionend';
var animationProp = 'animation';
var animationEndEvent = 'animationend';
if (hasTransition) {
  /* istanbul ignore if */
  if (window.ontransitionend === undefined &&
    window.onwebkittransitionend !== undefined
  ) {
    transitionProp = 'WebkitTransition';
    transitionEndEvent = 'webkitTransitionEnd';
  }
  if (window.onanimationend === undefined &&
    window.onwebkitanimationend !== undefined
  ) {
    animationProp = 'WebkitAnimation';
    animationEndEvent = 'webkitAnimationEnd';
  }
}

// binding to window is necessary to make hot reload work in IE in strict mode
var raf = inBrowser
  ? window.requestAnimationFrame
    ? window.requestAnimationFrame.bind(window)
    : setTimeout
  : /* istanbul ignore next */ function (fn) { return fn(); };

function nextFrame (fn) {
  raf(function () {
    raf(fn);
  });
}

function addTransitionClass (el, cls) {
  var transitionClasses = el._transitionClasses || (el._transitionClasses = []);
  if (transitionClasses.indexOf(cls) < 0) {
    transitionClasses.push(cls);
    addClass(el, cls);
  }
}

function removeTransitionClass (el, cls) {
  if (el._transitionClasses) {
    remove(el._transitionClasses, cls);
  }
  removeClass(el, cls);
}

function whenTransitionEnds (
  el,
  expectedType,
  cb
) {
  var ref = getTransitionInfo(el, expectedType);
  var type = ref.type;
  var timeout = ref.timeout;
  var propCount = ref.propCount;
  if (!type) { return cb() }
  var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
  var ended = 0;
  var end = function () {
    el.removeEventListener(event, onEnd);
    cb();
  };
  var onEnd = function (e) {
    if (e.target === el) {
      if (++ended >= propCount) {
        end();
      }
    }
  };
  setTimeout(function () {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(event, onEnd);
}

var transformRE = /\b(transform|all)(,|$)/;

function getTransitionInfo (el, expectedType) {
  var styles = window.getComputedStyle(el);
  // JSDOM may return undefined for transition properties
  var transitionDelays = (styles[transitionProp + 'Delay'] || '').split(', ');
  var transitionDurations = (styles[transitionProp + 'Duration'] || '').split(', ');
  var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  var animationDelays = (styles[animationProp + 'Delay'] || '').split(', ');
  var animationDurations = (styles[animationProp + 'Duration'] || '').split(', ');
  var animationTimeout = getTimeout(animationDelays, animationDurations);

  var type;
  var timeout = 0;
  var propCount = 0;
  /* istanbul ignore if */
  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0
      ? transitionTimeout > animationTimeout
        ? TRANSITION
        : ANIMATION
      : null;
    propCount = type
      ? type === TRANSITION
        ? transitionDurations.length
        : animationDurations.length
      : 0;
  }
  var hasTransform =
    type === TRANSITION &&
    transformRE.test(styles[transitionProp + 'Property']);
  return {
    type: type,
    timeout: timeout,
    propCount: propCount,
    hasTransform: hasTransform
  }
}

function getTimeout (delays, durations) {
  /* istanbul ignore next */
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }

  return Math.max.apply(null, durations.map(function (d, i) {
    return toMs(d) + toMs(delays[i])
  }))
}

// Old versions of Chromium (below 61.0.3163.100) formats floating pointer numbers
// in a locale-dependent way, using a comma instead of a dot.
// If comma is not replaced with a dot, the input will be rounded down (i.e. acting
// as a floor function) causing unexpected behaviors
function toMs (s) {
  return Number(s.slice(0, -1).replace(',', '.')) * 1000
}

/*  */

function enter (vnode, toggleDisplay) {
  var el = vnode.elm;

  // call leave callback now
  if (isDef(el._leaveCb)) {
    el._leaveCb.cancelled = true;
    el._leaveCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data)) {
    return
  }

  /* istanbul ignore if */
  if (isDef(el._enterCb) || el.nodeType !== 1) {
    return
  }

  var css = data.css;
  var type = data.type;
  var enterClass = data.enterClass;
  var enterToClass = data.enterToClass;
  var enterActiveClass = data.enterActiveClass;
  var appearClass = data.appearClass;
  var appearToClass = data.appearToClass;
  var appearActiveClass = data.appearActiveClass;
  var beforeEnter = data.beforeEnter;
  var enter = data.enter;
  var afterEnter = data.afterEnter;
  var enterCancelled = data.enterCancelled;
  var beforeAppear = data.beforeAppear;
  var appear = data.appear;
  var afterAppear = data.afterAppear;
  var appearCancelled = data.appearCancelled;
  var duration = data.duration;

  // activeInstance will always be the <transition> component managing this
  // transition. One edge case to check is when the <transition> is placed
  // as the root node of a child component. In that case we need to check
  // <transition>'s parent for appear check.
  var context = activeInstance;
  var transitionNode = activeInstance.$vnode;
  while (transitionNode && transitionNode.parent) {
    context = transitionNode.context;
    transitionNode = transitionNode.parent;
  }

  var isAppear = !context._isMounted || !vnode.isRootInsert;

  if (isAppear && !appear && appear !== '') {
    return
  }

  var startClass = isAppear && appearClass
    ? appearClass
    : enterClass;
  var activeClass = isAppear && appearActiveClass
    ? appearActiveClass
    : enterActiveClass;
  var toClass = isAppear && appearToClass
    ? appearToClass
    : enterToClass;

  var beforeEnterHook = isAppear
    ? (beforeAppear || beforeEnter)
    : beforeEnter;
  var enterHook = isAppear
    ? (typeof appear === 'function' ? appear : enter)
    : enter;
  var afterEnterHook = isAppear
    ? (afterAppear || afterEnter)
    : afterEnter;
  var enterCancelledHook = isAppear
    ? (appearCancelled || enterCancelled)
    : enterCancelled;

  var explicitEnterDuration = toNumber(
    isObject(duration)
      ? duration.enter
      : duration
  );

  if ( true && explicitEnterDuration != null) {
    checkDuration(explicitEnterDuration, 'enter', vnode);
  }

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(enterHook);

  var cb = el._enterCb = once(function () {
    if (expectsCSS) {
      removeTransitionClass(el, toClass);
      removeTransitionClass(el, activeClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, startClass);
      }
      enterCancelledHook && enterCancelledHook(el);
    } else {
      afterEnterHook && afterEnterHook(el);
    }
    el._enterCb = null;
  });

  if (!vnode.data.show) {
    // remove pending leave element on enter by injecting an insert hook
    mergeVNodeHook(vnode, 'insert', function () {
      var parent = el.parentNode;
      var pendingNode = parent && parent._pending && parent._pending[vnode.key];
      if (pendingNode &&
        pendingNode.tag === vnode.tag &&
        pendingNode.elm._leaveCb
      ) {
        pendingNode.elm._leaveCb();
      }
      enterHook && enterHook(el, cb);
    });
  }

  // start enter transition
  beforeEnterHook && beforeEnterHook(el);
  if (expectsCSS) {
    addTransitionClass(el, startClass);
    addTransitionClass(el, activeClass);
    nextFrame(function () {
      removeTransitionClass(el, startClass);
      if (!cb.cancelled) {
        addTransitionClass(el, toClass);
        if (!userWantsControl) {
          if (isValidDuration(explicitEnterDuration)) {
            setTimeout(cb, explicitEnterDuration);
          } else {
            whenTransitionEnds(el, type, cb);
          }
        }
      }
    });
  }

  if (vnode.data.show) {
    toggleDisplay && toggleDisplay();
    enterHook && enterHook(el, cb);
  }

  if (!expectsCSS && !userWantsControl) {
    cb();
  }
}

function leave (vnode, rm) {
  var el = vnode.elm;

  // call enter callback now
  if (isDef(el._enterCb)) {
    el._enterCb.cancelled = true;
    el._enterCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data) || el.nodeType !== 1) {
    return rm()
  }

  /* istanbul ignore if */
  if (isDef(el._leaveCb)) {
    return
  }

  var css = data.css;
  var type = data.type;
  var leaveClass = data.leaveClass;
  var leaveToClass = data.leaveToClass;
  var leaveActiveClass = data.leaveActiveClass;
  var beforeLeave = data.beforeLeave;
  var leave = data.leave;
  var afterLeave = data.afterLeave;
  var leaveCancelled = data.leaveCancelled;
  var delayLeave = data.delayLeave;
  var duration = data.duration;

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(leave);

  var explicitLeaveDuration = toNumber(
    isObject(duration)
      ? duration.leave
      : duration
  );

  if ( true && isDef(explicitLeaveDuration)) {
    checkDuration(explicitLeaveDuration, 'leave', vnode);
  }

  var cb = el._leaveCb = once(function () {
    if (el.parentNode && el.parentNode._pending) {
      el.parentNode._pending[vnode.key] = null;
    }
    if (expectsCSS) {
      removeTransitionClass(el, leaveToClass);
      removeTransitionClass(el, leaveActiveClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, leaveClass);
      }
      leaveCancelled && leaveCancelled(el);
    } else {
      rm();
      afterLeave && afterLeave(el);
    }
    el._leaveCb = null;
  });

  if (delayLeave) {
    delayLeave(performLeave);
  } else {
    performLeave();
  }

  function performLeave () {
    // the delayed leave may have already been cancelled
    if (cb.cancelled) {
      return
    }
    // record leaving element
    if (!vnode.data.show && el.parentNode) {
      (el.parentNode._pending || (el.parentNode._pending = {}))[(vnode.key)] = vnode;
    }
    beforeLeave && beforeLeave(el);
    if (expectsCSS) {
      addTransitionClass(el, leaveClass);
      addTransitionClass(el, leaveActiveClass);
      nextFrame(function () {
        removeTransitionClass(el, leaveClass);
        if (!cb.cancelled) {
          addTransitionClass(el, leaveToClass);
          if (!userWantsControl) {
            if (isValidDuration(explicitLeaveDuration)) {
              setTimeout(cb, explicitLeaveDuration);
            } else {
              whenTransitionEnds(el, type, cb);
            }
          }
        }
      });
    }
    leave && leave(el, cb);
    if (!expectsCSS && !userWantsControl) {
      cb();
    }
  }
}

// only used in dev mode
function checkDuration (val, name, vnode) {
  if (typeof val !== 'number') {
    warn(
      "<transition> explicit " + name + " duration is not a valid number - " +
      "got " + (JSON.stringify(val)) + ".",
      vnode.context
    );
  } else if (isNaN(val)) {
    warn(
      "<transition> explicit " + name + " duration is NaN - " +
      'the duration expression might be incorrect.',
      vnode.context
    );
  }
}

function isValidDuration (val) {
  return typeof val === 'number' && !isNaN(val)
}

/**
 * Normalize a transition hook's argument length. The hook may be:
 * - a merged hook (invoker) with the original in .fns
 * - a wrapped component method (check ._length)
 * - a plain function (.length)
 */
function getHookArgumentsLength (fn) {
  if (isUndef(fn)) {
    return false
  }
  var invokerFns = fn.fns;
  if (isDef(invokerFns)) {
    // invoker
    return getHookArgumentsLength(
      Array.isArray(invokerFns)
        ? invokerFns[0]
        : invokerFns
    )
  } else {
    return (fn._length || fn.length) > 1
  }
}

function _enter (_, vnode) {
  if (vnode.data.show !== true) {
    enter(vnode);
  }
}

var transition = inBrowser ? {
  create: _enter,
  activate: _enter,
  remove: function remove$$1 (vnode, rm) {
    /* istanbul ignore else */
    if (vnode.data.show !== true) {
      leave(vnode, rm);
    } else {
      rm();
    }
  }
} : {};

var platformModules = [
  attrs,
  klass,
  events,
  domProps,
  style,
  transition
];

/*  */

// the directive module should be applied last, after all
// built-in modules have been applied.
var modules = platformModules.concat(baseModules);

var patch = createPatchFunction({ nodeOps: nodeOps, modules: modules });

/**
 * Not type checking this file because flow doesn't like attaching
 * properties to Elements.
 */

/* istanbul ignore if */
if (isIE9) {
  // http://www.matts411.com/post/internet-explorer-9-oninput/
  document.addEventListener('selectionchange', function () {
    var el = document.activeElement;
    if (el && el.vmodel) {
      trigger(el, 'input');
    }
  });
}

var directive = {
  inserted: function inserted (el, binding, vnode, oldVnode) {
    if (vnode.tag === 'select') {
      // #6903
      if (oldVnode.elm && !oldVnode.elm._vOptions) {
        mergeVNodeHook(vnode, 'postpatch', function () {
          directive.componentUpdated(el, binding, vnode);
        });
      } else {
        setSelected(el, binding, vnode.context);
      }
      el._vOptions = [].map.call(el.options, getValue);
    } else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
      el._vModifiers = binding.modifiers;
      if (!binding.modifiers.lazy) {
        el.addEventListener('compositionstart', onCompositionStart);
        el.addEventListener('compositionend', onCompositionEnd);
        // Safari < 10.2 & UIWebView doesn't fire compositionend when
        // switching focus before confirming composition choice
        // this also fixes the issue where some browsers e.g. iOS Chrome
        // fires "change" instead of "input" on autocomplete.
        el.addEventListener('change', onCompositionEnd);
        /* istanbul ignore if */
        if (isIE9) {
          el.vmodel = true;
        }
      }
    }
  },

  componentUpdated: function componentUpdated (el, binding, vnode) {
    if (vnode.tag === 'select') {
      setSelected(el, binding, vnode.context);
      // in case the options rendered by v-for have changed,
      // it's possible that the value is out-of-sync with the rendered options.
      // detect such cases and filter out values that no longer has a matching
      // option in the DOM.
      var prevOptions = el._vOptions;
      var curOptions = el._vOptions = [].map.call(el.options, getValue);
      if (curOptions.some(function (o, i) { return !looseEqual(o, prevOptions[i]); })) {
        // trigger change event if
        // no matching option found for at least one value
        var needReset = el.multiple
          ? binding.value.some(function (v) { return hasNoMatchingOption(v, curOptions); })
          : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, curOptions);
        if (needReset) {
          trigger(el, 'change');
        }
      }
    }
  }
};

function setSelected (el, binding, vm) {
  actuallySetSelected(el, binding, vm);
  /* istanbul ignore if */
  if (isIE || isEdge) {
    setTimeout(function () {
      actuallySetSelected(el, binding, vm);
    }, 0);
  }
}

function actuallySetSelected (el, binding, vm) {
  var value = binding.value;
  var isMultiple = el.multiple;
  if (isMultiple && !Array.isArray(value)) {
     true && warn(
      "<select multiple v-model=\"" + (binding.expression) + "\"> " +
      "expects an Array value for its binding, but got " + (Object.prototype.toString.call(value).slice(8, -1)),
      vm
    );
    return
  }
  var selected, option;
  for (var i = 0, l = el.options.length; i < l; i++) {
    option = el.options[i];
    if (isMultiple) {
      selected = looseIndexOf(value, getValue(option)) > -1;
      if (option.selected !== selected) {
        option.selected = selected;
      }
    } else {
      if (looseEqual(getValue(option), value)) {
        if (el.selectedIndex !== i) {
          el.selectedIndex = i;
        }
        return
      }
    }
  }
  if (!isMultiple) {
    el.selectedIndex = -1;
  }
}

function hasNoMatchingOption (value, options) {
  return options.every(function (o) { return !looseEqual(o, value); })
}

function getValue (option) {
  return '_value' in option
    ? option._value
    : option.value
}

function onCompositionStart (e) {
  e.target.composing = true;
}

function onCompositionEnd (e) {
  // prevent triggering an input event for no reason
  if (!e.target.composing) { return }
  e.target.composing = false;
  trigger(e.target, 'input');
}

function trigger (el, type) {
  var e = document.createEvent('HTMLEvents');
  e.initEvent(type, true, true);
  el.dispatchEvent(e);
}

/*  */

// recursively search for possible transition defined inside the component root
function locateNode (vnode) {
  return vnode.componentInstance && (!vnode.data || !vnode.data.transition)
    ? locateNode(vnode.componentInstance._vnode)
    : vnode
}

var show = {
  bind: function bind (el, ref, vnode) {
    var value = ref.value;

    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    var originalDisplay = el.__vOriginalDisplay =
      el.style.display === 'none' ? '' : el.style.display;
    if (value && transition$$1) {
      vnode.data.show = true;
      enter(vnode, function () {
        el.style.display = originalDisplay;
      });
    } else {
      el.style.display = value ? originalDisplay : 'none';
    }
  },

  update: function update (el, ref, vnode) {
    var value = ref.value;
    var oldValue = ref.oldValue;

    /* istanbul ignore if */
    if (!value === !oldValue) { return }
    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    if (transition$$1) {
      vnode.data.show = true;
      if (value) {
        enter(vnode, function () {
          el.style.display = el.__vOriginalDisplay;
        });
      } else {
        leave(vnode, function () {
          el.style.display = 'none';
        });
      }
    } else {
      el.style.display = value ? el.__vOriginalDisplay : 'none';
    }
  },

  unbind: function unbind (
    el,
    binding,
    vnode,
    oldVnode,
    isDestroy
  ) {
    if (!isDestroy) {
      el.style.display = el.__vOriginalDisplay;
    }
  }
};

var platformDirectives = {
  model: directive,
  show: show
};

/*  */

var transitionProps = {
  name: String,
  appear: Boolean,
  css: Boolean,
  mode: String,
  type: String,
  enterClass: String,
  leaveClass: String,
  enterToClass: String,
  leaveToClass: String,
  enterActiveClass: String,
  leaveActiveClass: String,
  appearClass: String,
  appearActiveClass: String,
  appearToClass: String,
  duration: [Number, String, Object]
};

// in case the child is also an abstract component, e.g. <keep-alive>
// we want to recursively retrieve the real component to be rendered
function getRealChild (vnode) {
  var compOptions = vnode && vnode.componentOptions;
  if (compOptions && compOptions.Ctor.options.abstract) {
    return getRealChild(getFirstComponentChild(compOptions.children))
  } else {
    return vnode
  }
}

function extractTransitionData (comp) {
  var data = {};
  var options = comp.$options;
  // props
  for (var key in options.propsData) {
    data[key] = comp[key];
  }
  // events.
  // extract listeners and pass them directly to the transition methods
  var listeners = options._parentListeners;
  for (var key$1 in listeners) {
    data[camelize(key$1)] = listeners[key$1];
  }
  return data
}

function placeholder (h, rawChild) {
  if (/\d-keep-alive$/.test(rawChild.tag)) {
    return h('keep-alive', {
      props: rawChild.componentOptions.propsData
    })
  }
}

function hasParentTransition (vnode) {
  while ((vnode = vnode.parent)) {
    if (vnode.data.transition) {
      return true
    }
  }
}

function isSameChild (child, oldChild) {
  return oldChild.key === child.key && oldChild.tag === child.tag
}

var isNotTextNode = function (c) { return c.tag || isAsyncPlaceholder(c); };

var isVShowDirective = function (d) { return d.name === 'show'; };

var Transition = {
  name: 'transition',
  props: transitionProps,
  abstract: true,

  render: function render (h) {
    var this$1 = this;

    var children = this.$slots.default;
    if (!children) {
      return
    }

    // filter out text nodes (possible whitespaces)
    children = children.filter(isNotTextNode);
    /* istanbul ignore if */
    if (!children.length) {
      return
    }

    // warn multiple elements
    if ( true && children.length > 1) {
      warn(
        '<transition> can only be used on a single element. Use ' +
        '<transition-group> for lists.',
        this.$parent
      );
    }

    var mode = this.mode;

    // warn invalid mode
    if ( true &&
      mode && mode !== 'in-out' && mode !== 'out-in'
    ) {
      warn(
        'invalid <transition> mode: ' + mode,
        this.$parent
      );
    }

    var rawChild = children[0];

    // if this is a component root node and the component's
    // parent container node also has transition, skip.
    if (hasParentTransition(this.$vnode)) {
      return rawChild
    }

    // apply transition data to child
    // use getRealChild() to ignore abstract components e.g. keep-alive
    var child = getRealChild(rawChild);
    /* istanbul ignore if */
    if (!child) {
      return rawChild
    }

    if (this._leaving) {
      return placeholder(h, rawChild)
    }

    // ensure a key that is unique to the vnode type and to this transition
    // component instance. This key will be used to remove pending leaving nodes
    // during entering.
    var id = "__transition-" + (this._uid) + "-";
    child.key = child.key == null
      ? child.isComment
        ? id + 'comment'
        : id + child.tag
      : isPrimitive(child.key)
        ? (String(child.key).indexOf(id) === 0 ? child.key : id + child.key)
        : child.key;

    var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
    var oldRawChild = this._vnode;
    var oldChild = getRealChild(oldRawChild);

    // mark v-show
    // so that the transition module can hand over the control to the directive
    if (child.data.directives && child.data.directives.some(isVShowDirective)) {
      child.data.show = true;
    }

    if (
      oldChild &&
      oldChild.data &&
      !isSameChild(child, oldChild) &&
      !isAsyncPlaceholder(oldChild) &&
      // #6687 component root is a comment node
      !(oldChild.componentInstance && oldChild.componentInstance._vnode.isComment)
    ) {
      // replace old child transition data with fresh one
      // important for dynamic transitions!
      var oldData = oldChild.data.transition = extend({}, data);
      // handle transition mode
      if (mode === 'out-in') {
        // return placeholder node and queue update when leave finishes
        this._leaving = true;
        mergeVNodeHook(oldData, 'afterLeave', function () {
          this$1._leaving = false;
          this$1.$forceUpdate();
        });
        return placeholder(h, rawChild)
      } else if (mode === 'in-out') {
        if (isAsyncPlaceholder(child)) {
          return oldRawChild
        }
        var delayedLeave;
        var performLeave = function () { delayedLeave(); };
        mergeVNodeHook(data, 'afterEnter', performLeave);
        mergeVNodeHook(data, 'enterCancelled', performLeave);
        mergeVNodeHook(oldData, 'delayLeave', function (leave) { delayedLeave = leave; });
      }
    }

    return rawChild
  }
};

/*  */

var props = extend({
  tag: String,
  moveClass: String
}, transitionProps);

delete props.mode;

var TransitionGroup = {
  props: props,

  beforeMount: function beforeMount () {
    var this$1 = this;

    var update = this._update;
    this._update = function (vnode, hydrating) {
      var restoreActiveInstance = setActiveInstance(this$1);
      // force removing pass
      this$1.__patch__(
        this$1._vnode,
        this$1.kept,
        false, // hydrating
        true // removeOnly (!important, avoids unnecessary moves)
      );
      this$1._vnode = this$1.kept;
      restoreActiveInstance();
      update.call(this$1, vnode, hydrating);
    };
  },

  render: function render (h) {
    var tag = this.tag || this.$vnode.data.tag || 'span';
    var map = Object.create(null);
    var prevChildren = this.prevChildren = this.children;
    var rawChildren = this.$slots.default || [];
    var children = this.children = [];
    var transitionData = extractTransitionData(this);

    for (var i = 0; i < rawChildren.length; i++) {
      var c = rawChildren[i];
      if (c.tag) {
        if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
          children.push(c);
          map[c.key] = c
          ;(c.data || (c.data = {})).transition = transitionData;
        } else if (true) {
          var opts = c.componentOptions;
          var name = opts ? (opts.Ctor.options.name || opts.tag || '') : c.tag;
          warn(("<transition-group> children must be keyed: <" + name + ">"));
        }
      }
    }

    if (prevChildren) {
      var kept = [];
      var removed = [];
      for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
        var c$1 = prevChildren[i$1];
        c$1.data.transition = transitionData;
        c$1.data.pos = c$1.elm.getBoundingClientRect();
        if (map[c$1.key]) {
          kept.push(c$1);
        } else {
          removed.push(c$1);
        }
      }
      this.kept = h(tag, null, kept);
      this.removed = removed;
    }

    return h(tag, null, children)
  },

  updated: function updated () {
    var children = this.prevChildren;
    var moveClass = this.moveClass || ((this.name || 'v') + '-move');
    if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
      return
    }

    // we divide the work into three loops to avoid mixing DOM reads and writes
    // in each iteration - which helps prevent layout thrashing.
    children.forEach(callPendingCbs);
    children.forEach(recordPosition);
    children.forEach(applyTranslation);

    // force reflow to put everything in position
    // assign to this to avoid being removed in tree-shaking
    // $flow-disable-line
    this._reflow = document.body.offsetHeight;

    children.forEach(function (c) {
      if (c.data.moved) {
        var el = c.elm;
        var s = el.style;
        addTransitionClass(el, moveClass);
        s.transform = s.WebkitTransform = s.transitionDuration = '';
        el.addEventListener(transitionEndEvent, el._moveCb = function cb (e) {
          if (e && e.target !== el) {
            return
          }
          if (!e || /transform$/.test(e.propertyName)) {
            el.removeEventListener(transitionEndEvent, cb);
            el._moveCb = null;
            removeTransitionClass(el, moveClass);
          }
        });
      }
    });
  },

  methods: {
    hasMove: function hasMove (el, moveClass) {
      /* istanbul ignore if */
      if (!hasTransition) {
        return false
      }
      /* istanbul ignore if */
      if (this._hasMove) {
        return this._hasMove
      }
      // Detect whether an element with the move class applied has
      // CSS transitions. Since the element may be inside an entering
      // transition at this very moment, we make a clone of it and remove
      // all other transition classes applied to ensure only the move class
      // is applied.
      var clone = el.cloneNode();
      if (el._transitionClasses) {
        el._transitionClasses.forEach(function (cls) { removeClass(clone, cls); });
      }
      addClass(clone, moveClass);
      clone.style.display = 'none';
      this.$el.appendChild(clone);
      var info = getTransitionInfo(clone);
      this.$el.removeChild(clone);
      return (this._hasMove = info.hasTransform)
    }
  }
};

function callPendingCbs (c) {
  /* istanbul ignore if */
  if (c.elm._moveCb) {
    c.elm._moveCb();
  }
  /* istanbul ignore if */
  if (c.elm._enterCb) {
    c.elm._enterCb();
  }
}

function recordPosition (c) {
  c.data.newPos = c.elm.getBoundingClientRect();
}

function applyTranslation (c) {
  var oldPos = c.data.pos;
  var newPos = c.data.newPos;
  var dx = oldPos.left - newPos.left;
  var dy = oldPos.top - newPos.top;
  if (dx || dy) {
    c.data.moved = true;
    var s = c.elm.style;
    s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
    s.transitionDuration = '0s';
  }
}

var platformComponents = {
  Transition: Transition,
  TransitionGroup: TransitionGroup
};

/*  */

// install platform specific utils
Vue.config.mustUseProp = mustUseProp;
Vue.config.isReservedTag = isReservedTag;
Vue.config.isReservedAttr = isReservedAttr;
Vue.config.getTagNamespace = getTagNamespace;
Vue.config.isUnknownElement = isUnknownElement;

// install platform runtime directives & components
extend(Vue.options.directives, platformDirectives);
extend(Vue.options.components, platformComponents);

// install platform patch function
Vue.prototype.__patch__ = inBrowser ? patch : noop;

// public mount method
Vue.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && inBrowser ? query(el) : undefined;
  return mountComponent(this, el, hydrating)
};

// devtools global hook
/* istanbul ignore next */
if (inBrowser) {
  setTimeout(function () {
    if (config.devtools) {
      if (devtools) {
        devtools.emit('init', Vue);
      } else if (
        true
      ) {
        console[console.info ? 'info' : 'log'](
          'Download the Vue Devtools extension for a better development experience:\n' +
          'https://github.com/vuejs/vue-devtools'
        );
      }
    }
    if ( true &&
      config.productionTip !== false &&
      typeof console !== 'undefined'
    ) {
      console[console.info ? 'info' : 'log'](
        "You are running Vue in development mode.\n" +
        "Make sure to turn on production mode when deploying for production.\n" +
        "See more tips at https://vuejs.org/guide/deployment.html"
      );
    }
  }, 0);
}

/*  */

/* harmony default export */ __webpack_exports__["default"] = (Vue);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../../timers-browserify/main.js */ "./node_modules/timers-browserify/main.js").setImmediate))

/***/ }),

/***/ "./node_modules/vuex/dist/vuex.esm.js":
/*!********************************************!*\
  !*** ./node_modules/vuex/dist/vuex.esm.js ***!
  \********************************************/
/*! exports provided: default, Store, createNamespacedHelpers, install, mapActions, mapGetters, mapMutations, mapState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Store", function() { return Store; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNamespacedHelpers", function() { return createNamespacedHelpers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "install", function() { return install; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapActions", function() { return mapActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapGetters", function() { return mapGetters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapMutations", function() { return mapMutations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapState", function() { return mapState; });
/*!
 * vuex v3.4.0
 * (c) 2020 Evan You
 * @license MIT
 */
function applyMixin (Vue) {
  var version = Number(Vue.version.split('.')[0]);

  if (version >= 2) {
    Vue.mixin({ beforeCreate: vuexInit });
  } else {
    // override init and inject vuex init procedure
    // for 1.x backwards compatibility.
    var _init = Vue.prototype._init;
    Vue.prototype._init = function (options) {
      if ( options === void 0 ) options = {};

      options.init = options.init
        ? [vuexInit].concat(options.init)
        : vuexInit;
      _init.call(this, options);
    };
  }

  /**
   * Vuex init hook, injected into each instances init hooks list.
   */

  function vuexInit () {
    var options = this.$options;
    // store injection
    if (options.store) {
      this.$store = typeof options.store === 'function'
        ? options.store()
        : options.store;
    } else if (options.parent && options.parent.$store) {
      this.$store = options.parent.$store;
    }
  }
}

var target = typeof window !== 'undefined'
  ? window
  : typeof global !== 'undefined'
    ? global
    : {};
var devtoolHook = target.__VUE_DEVTOOLS_GLOBAL_HOOK__;

function devtoolPlugin (store) {
  if (!devtoolHook) { return }

  store._devtoolHook = devtoolHook;

  devtoolHook.emit('vuex:init', store);

  devtoolHook.on('vuex:travel-to-state', function (targetState) {
    store.replaceState(targetState);
  });

  store.subscribe(function (mutation, state) {
    devtoolHook.emit('vuex:mutation', mutation, state);
  }, { prepend: true });

  store.subscribeAction(function (action, state) {
    devtoolHook.emit('vuex:action', action, state);
  }, { prepend: true });
}

/**
 * Get the first item that pass the test
 * by second argument function
 *
 * @param {Array} list
 * @param {Function} f
 * @return {*}
 */

/**
 * forEach for object
 */
function forEachValue (obj, fn) {
  Object.keys(obj).forEach(function (key) { return fn(obj[key], key); });
}

function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

function isPromise (val) {
  return val && typeof val.then === 'function'
}

function assert (condition, msg) {
  if (!condition) { throw new Error(("[vuex] " + msg)) }
}

function partial (fn, arg) {
  return function () {
    return fn(arg)
  }
}

// Base data struct for store's module, package with some attribute and method
var Module = function Module (rawModule, runtime) {
  this.runtime = runtime;
  // Store some children item
  this._children = Object.create(null);
  // Store the origin module object which passed by programmer
  this._rawModule = rawModule;
  var rawState = rawModule.state;

  // Store the origin module's state
  this.state = (typeof rawState === 'function' ? rawState() : rawState) || {};
};

var prototypeAccessors = { namespaced: { configurable: true } };

prototypeAccessors.namespaced.get = function () {
  return !!this._rawModule.namespaced
};

Module.prototype.addChild = function addChild (key, module) {
  this._children[key] = module;
};

Module.prototype.removeChild = function removeChild (key) {
  delete this._children[key];
};

Module.prototype.getChild = function getChild (key) {
  return this._children[key]
};

Module.prototype.hasChild = function hasChild (key) {
  return key in this._children
};

Module.prototype.update = function update (rawModule) {
  this._rawModule.namespaced = rawModule.namespaced;
  if (rawModule.actions) {
    this._rawModule.actions = rawModule.actions;
  }
  if (rawModule.mutations) {
    this._rawModule.mutations = rawModule.mutations;
  }
  if (rawModule.getters) {
    this._rawModule.getters = rawModule.getters;
  }
};

Module.prototype.forEachChild = function forEachChild (fn) {
  forEachValue(this._children, fn);
};

Module.prototype.forEachGetter = function forEachGetter (fn) {
  if (this._rawModule.getters) {
    forEachValue(this._rawModule.getters, fn);
  }
};

Module.prototype.forEachAction = function forEachAction (fn) {
  if (this._rawModule.actions) {
    forEachValue(this._rawModule.actions, fn);
  }
};

Module.prototype.forEachMutation = function forEachMutation (fn) {
  if (this._rawModule.mutations) {
    forEachValue(this._rawModule.mutations, fn);
  }
};

Object.defineProperties( Module.prototype, prototypeAccessors );

var ModuleCollection = function ModuleCollection (rawRootModule) {
  // register root module (Vuex.Store options)
  this.register([], rawRootModule, false);
};

ModuleCollection.prototype.get = function get (path) {
  return path.reduce(function (module, key) {
    return module.getChild(key)
  }, this.root)
};

ModuleCollection.prototype.getNamespace = function getNamespace (path) {
  var module = this.root;
  return path.reduce(function (namespace, key) {
    module = module.getChild(key);
    return namespace + (module.namespaced ? key + '/' : '')
  }, '')
};

ModuleCollection.prototype.update = function update$1 (rawRootModule) {
  update([], this.root, rawRootModule);
};

ModuleCollection.prototype.register = function register (path, rawModule, runtime) {
    var this$1 = this;
    if ( runtime === void 0 ) runtime = true;

  if ((true)) {
    assertRawModule(path, rawModule);
  }

  var newModule = new Module(rawModule, runtime);
  if (path.length === 0) {
    this.root = newModule;
  } else {
    var parent = this.get(path.slice(0, -1));
    parent.addChild(path[path.length - 1], newModule);
  }

  // register nested modules
  if (rawModule.modules) {
    forEachValue(rawModule.modules, function (rawChildModule, key) {
      this$1.register(path.concat(key), rawChildModule, runtime);
    });
  }
};

ModuleCollection.prototype.unregister = function unregister (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];
  if (!parent.getChild(key).runtime) { return }

  parent.removeChild(key);
};

ModuleCollection.prototype.isRegistered = function isRegistered (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];

  return parent.hasChild(key)
};

function update (path, targetModule, newModule) {
  if ((true)) {
    assertRawModule(path, newModule);
  }

  // update target module
  targetModule.update(newModule);

  // update nested modules
  if (newModule.modules) {
    for (var key in newModule.modules) {
      if (!targetModule.getChild(key)) {
        if ((true)) {
          console.warn(
            "[vuex] trying to add a new module '" + key + "' on hot reloading, " +
            'manual reload is needed'
          );
        }
        return
      }
      update(
        path.concat(key),
        targetModule.getChild(key),
        newModule.modules[key]
      );
    }
  }
}

var functionAssert = {
  assert: function (value) { return typeof value === 'function'; },
  expected: 'function'
};

var objectAssert = {
  assert: function (value) { return typeof value === 'function' ||
    (typeof value === 'object' && typeof value.handler === 'function'); },
  expected: 'function or object with "handler" function'
};

var assertTypes = {
  getters: functionAssert,
  mutations: functionAssert,
  actions: objectAssert
};

function assertRawModule (path, rawModule) {
  Object.keys(assertTypes).forEach(function (key) {
    if (!rawModule[key]) { return }

    var assertOptions = assertTypes[key];

    forEachValue(rawModule[key], function (value, type) {
      assert(
        assertOptions.assert(value),
        makeAssertionMessage(path, key, type, value, assertOptions.expected)
      );
    });
  });
}

function makeAssertionMessage (path, key, type, value, expected) {
  var buf = key + " should be " + expected + " but \"" + key + "." + type + "\"";
  if (path.length > 0) {
    buf += " in module \"" + (path.join('.')) + "\"";
  }
  buf += " is " + (JSON.stringify(value)) + ".";
  return buf
}

var Vue; // bind on install

var Store = function Store (options) {
  var this$1 = this;
  if ( options === void 0 ) options = {};

  // Auto install if it is not done yet and `window` has `Vue`.
  // To allow users to avoid auto-installation in some cases,
  // this code should be placed here. See #731
  if (!Vue && typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }

  if ((true)) {
    assert(Vue, "must call Vue.use(Vuex) before creating a store instance.");
    assert(typeof Promise !== 'undefined', "vuex requires a Promise polyfill in this browser.");
    assert(this instanceof Store, "store must be called with the new operator.");
  }

  var plugins = options.plugins; if ( plugins === void 0 ) plugins = [];
  var strict = options.strict; if ( strict === void 0 ) strict = false;

  // store internal state
  this._committing = false;
  this._actions = Object.create(null);
  this._actionSubscribers = [];
  this._mutations = Object.create(null);
  this._wrappedGetters = Object.create(null);
  this._modules = new ModuleCollection(options);
  this._modulesNamespaceMap = Object.create(null);
  this._subscribers = [];
  this._watcherVM = new Vue();
  this._makeLocalGettersCache = Object.create(null);

  // bind commit and dispatch to self
  var store = this;
  var ref = this;
  var dispatch = ref.dispatch;
  var commit = ref.commit;
  this.dispatch = function boundDispatch (type, payload) {
    return dispatch.call(store, type, payload)
  };
  this.commit = function boundCommit (type, payload, options) {
    return commit.call(store, type, payload, options)
  };

  // strict mode
  this.strict = strict;

  var state = this._modules.root.state;

  // init root module.
  // this also recursively registers all sub-modules
  // and collects all module getters inside this._wrappedGetters
  installModule(this, state, [], this._modules.root);

  // initialize the store vm, which is responsible for the reactivity
  // (also registers _wrappedGetters as computed properties)
  resetStoreVM(this, state);

  // apply plugins
  plugins.forEach(function (plugin) { return plugin(this$1); });

  var useDevtools = options.devtools !== undefined ? options.devtools : Vue.config.devtools;
  if (useDevtools) {
    devtoolPlugin(this);
  }
};

var prototypeAccessors$1 = { state: { configurable: true } };

prototypeAccessors$1.state.get = function () {
  return this._vm._data.$$state
};

prototypeAccessors$1.state.set = function (v) {
  if ((true)) {
    assert(false, "use store.replaceState() to explicit replace store state.");
  }
};

Store.prototype.commit = function commit (_type, _payload, _options) {
    var this$1 = this;

  // check object-style commit
  var ref = unifyObjectStyle(_type, _payload, _options);
    var type = ref.type;
    var payload = ref.payload;
    var options = ref.options;

  var mutation = { type: type, payload: payload };
  var entry = this._mutations[type];
  if (!entry) {
    if ((true)) {
      console.error(("[vuex] unknown mutation type: " + type));
    }
    return
  }
  this._withCommit(function () {
    entry.forEach(function commitIterator (handler) {
      handler(payload);
    });
  });

  this._subscribers
    .slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe
    .forEach(function (sub) { return sub(mutation, this$1.state); });

  if (
    ( true) &&
    options && options.silent
  ) {
    console.warn(
      "[vuex] mutation type: " + type + ". Silent option has been removed. " +
      'Use the filter functionality in the vue-devtools'
    );
  }
};

Store.prototype.dispatch = function dispatch (_type, _payload) {
    var this$1 = this;

  // check object-style dispatch
  var ref = unifyObjectStyle(_type, _payload);
    var type = ref.type;
    var payload = ref.payload;

  var action = { type: type, payload: payload };
  var entry = this._actions[type];
  if (!entry) {
    if ((true)) {
      console.error(("[vuex] unknown action type: " + type));
    }
    return
  }

  try {
    this._actionSubscribers
      .slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe
      .filter(function (sub) { return sub.before; })
      .forEach(function (sub) { return sub.before(action, this$1.state); });
  } catch (e) {
    if ((true)) {
      console.warn("[vuex] error in before action subscribers: ");
      console.error(e);
    }
  }

  var result = entry.length > 1
    ? Promise.all(entry.map(function (handler) { return handler(payload); }))
    : entry[0](payload);

  return new Promise(function (resolve, reject) {
    result.then(function (res) {
      try {
        this$1._actionSubscribers
          .filter(function (sub) { return sub.after; })
          .forEach(function (sub) { return sub.after(action, this$1.state); });
      } catch (e) {
        if ((true)) {
          console.warn("[vuex] error in after action subscribers: ");
          console.error(e);
        }
      }
      resolve(res);
    }, function (error) {
      try {
        this$1._actionSubscribers
          .filter(function (sub) { return sub.error; })
          .forEach(function (sub) { return sub.error(action, this$1.state, error); });
      } catch (e) {
        if ((true)) {
          console.warn("[vuex] error in error action subscribers: ");
          console.error(e);
        }
      }
      reject(error);
    });
  })
};

Store.prototype.subscribe = function subscribe (fn, options) {
  return genericSubscribe(fn, this._subscribers, options)
};

Store.prototype.subscribeAction = function subscribeAction (fn, options) {
  var subs = typeof fn === 'function' ? { before: fn } : fn;
  return genericSubscribe(subs, this._actionSubscribers, options)
};

Store.prototype.watch = function watch (getter, cb, options) {
    var this$1 = this;

  if ((true)) {
    assert(typeof getter === 'function', "store.watch only accepts a function.");
  }
  return this._watcherVM.$watch(function () { return getter(this$1.state, this$1.getters); }, cb, options)
};

Store.prototype.replaceState = function replaceState (state) {
    var this$1 = this;

  this._withCommit(function () {
    this$1._vm._data.$$state = state;
  });
};

Store.prototype.registerModule = function registerModule (path, rawModule, options) {
    if ( options === void 0 ) options = {};

  if (typeof path === 'string') { path = [path]; }

  if ((true)) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
    assert(path.length > 0, 'cannot register the root module by using registerModule.');
  }

  this._modules.register(path, rawModule);
  installModule(this, this.state, path, this._modules.get(path), options.preserveState);
  // reset store to update getters...
  resetStoreVM(this, this.state);
};

Store.prototype.unregisterModule = function unregisterModule (path) {
    var this$1 = this;

  if (typeof path === 'string') { path = [path]; }

  if ((true)) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  this._modules.unregister(path);
  this._withCommit(function () {
    var parentState = getNestedState(this$1.state, path.slice(0, -1));
    Vue.delete(parentState, path[path.length - 1]);
  });
  resetStore(this);
};

Store.prototype.hasModule = function hasModule (path) {
  if (typeof path === 'string') { path = [path]; }

  if ((true)) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  return this._modules.isRegistered(path)
};

Store.prototype.hotUpdate = function hotUpdate (newOptions) {
  this._modules.update(newOptions);
  resetStore(this, true);
};

Store.prototype._withCommit = function _withCommit (fn) {
  var committing = this._committing;
  this._committing = true;
  fn();
  this._committing = committing;
};

Object.defineProperties( Store.prototype, prototypeAccessors$1 );

function genericSubscribe (fn, subs, options) {
  if (subs.indexOf(fn) < 0) {
    options && options.prepend
      ? subs.unshift(fn)
      : subs.push(fn);
  }
  return function () {
    var i = subs.indexOf(fn);
    if (i > -1) {
      subs.splice(i, 1);
    }
  }
}

function resetStore (store, hot) {
  store._actions = Object.create(null);
  store._mutations = Object.create(null);
  store._wrappedGetters = Object.create(null);
  store._modulesNamespaceMap = Object.create(null);
  var state = store.state;
  // init all modules
  installModule(store, state, [], store._modules.root, true);
  // reset vm
  resetStoreVM(store, state, hot);
}

function resetStoreVM (store, state, hot) {
  var oldVm = store._vm;

  // bind store public getters
  store.getters = {};
  // reset local getters cache
  store._makeLocalGettersCache = Object.create(null);
  var wrappedGetters = store._wrappedGetters;
  var computed = {};
  forEachValue(wrappedGetters, function (fn, key) {
    // use computed to leverage its lazy-caching mechanism
    // direct inline function use will lead to closure preserving oldVm.
    // using partial to return function with only arguments preserved in closure environment.
    computed[key] = partial(fn, store);
    Object.defineProperty(store.getters, key, {
      get: function () { return store._vm[key]; },
      enumerable: true // for local getters
    });
  });

  // use a Vue instance to store the state tree
  // suppress warnings just in case the user has added
  // some funky global mixins
  var silent = Vue.config.silent;
  Vue.config.silent = true;
  store._vm = new Vue({
    data: {
      $$state: state
    },
    computed: computed
  });
  Vue.config.silent = silent;

  // enable strict mode for new vm
  if (store.strict) {
    enableStrictMode(store);
  }

  if (oldVm) {
    if (hot) {
      // dispatch changes in all subscribed watchers
      // to force getter re-evaluation for hot reloading.
      store._withCommit(function () {
        oldVm._data.$$state = null;
      });
    }
    Vue.nextTick(function () { return oldVm.$destroy(); });
  }
}

function installModule (store, rootState, path, module, hot) {
  var isRoot = !path.length;
  var namespace = store._modules.getNamespace(path);

  // register in namespace map
  if (module.namespaced) {
    if (store._modulesNamespaceMap[namespace] && ("development" !== 'production')) {
      console.error(("[vuex] duplicate namespace " + namespace + " for the namespaced module " + (path.join('/'))));
    }
    store._modulesNamespaceMap[namespace] = module;
  }

  // set state
  if (!isRoot && !hot) {
    var parentState = getNestedState(rootState, path.slice(0, -1));
    var moduleName = path[path.length - 1];
    store._withCommit(function () {
      if ((true)) {
        if (moduleName in parentState) {
          console.warn(
            ("[vuex] state field \"" + moduleName + "\" was overridden by a module with the same name at \"" + (path.join('.')) + "\"")
          );
        }
      }
      Vue.set(parentState, moduleName, module.state);
    });
  }

  var local = module.context = makeLocalContext(store, namespace, path);

  module.forEachMutation(function (mutation, key) {
    var namespacedType = namespace + key;
    registerMutation(store, namespacedType, mutation, local);
  });

  module.forEachAction(function (action, key) {
    var type = action.root ? key : namespace + key;
    var handler = action.handler || action;
    registerAction(store, type, handler, local);
  });

  module.forEachGetter(function (getter, key) {
    var namespacedType = namespace + key;
    registerGetter(store, namespacedType, getter, local);
  });

  module.forEachChild(function (child, key) {
    installModule(store, rootState, path.concat(key), child, hot);
  });
}

/**
 * make localized dispatch, commit, getters and state
 * if there is no namespace, just use root ones
 */
function makeLocalContext (store, namespace, path) {
  var noNamespace = namespace === '';

  var local = {
    dispatch: noNamespace ? store.dispatch : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if (( true) && !store._actions[type]) {
          console.error(("[vuex] unknown local action type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      return store.dispatch(type, payload)
    },

    commit: noNamespace ? store.commit : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if (( true) && !store._mutations[type]) {
          console.error(("[vuex] unknown local mutation type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      store.commit(type, payload, options);
    }
  };

  // getters and state object must be gotten lazily
  // because they will be changed by vm update
  Object.defineProperties(local, {
    getters: {
      get: noNamespace
        ? function () { return store.getters; }
        : function () { return makeLocalGetters(store, namespace); }
    },
    state: {
      get: function () { return getNestedState(store.state, path); }
    }
  });

  return local
}

function makeLocalGetters (store, namespace) {
  if (!store._makeLocalGettersCache[namespace]) {
    var gettersProxy = {};
    var splitPos = namespace.length;
    Object.keys(store.getters).forEach(function (type) {
      // skip if the target getter is not match this namespace
      if (type.slice(0, splitPos) !== namespace) { return }

      // extract local getter type
      var localType = type.slice(splitPos);

      // Add a port to the getters proxy.
      // Define as getter property because
      // we do not want to evaluate the getters in this time.
      Object.defineProperty(gettersProxy, localType, {
        get: function () { return store.getters[type]; },
        enumerable: true
      });
    });
    store._makeLocalGettersCache[namespace] = gettersProxy;
  }

  return store._makeLocalGettersCache[namespace]
}

function registerMutation (store, type, handler, local) {
  var entry = store._mutations[type] || (store._mutations[type] = []);
  entry.push(function wrappedMutationHandler (payload) {
    handler.call(store, local.state, payload);
  });
}

function registerAction (store, type, handler, local) {
  var entry = store._actions[type] || (store._actions[type] = []);
  entry.push(function wrappedActionHandler (payload) {
    var res = handler.call(store, {
      dispatch: local.dispatch,
      commit: local.commit,
      getters: local.getters,
      state: local.state,
      rootGetters: store.getters,
      rootState: store.state
    }, payload);
    if (!isPromise(res)) {
      res = Promise.resolve(res);
    }
    if (store._devtoolHook) {
      return res.catch(function (err) {
        store._devtoolHook.emit('vuex:error', err);
        throw err
      })
    } else {
      return res
    }
  });
}

function registerGetter (store, type, rawGetter, local) {
  if (store._wrappedGetters[type]) {
    if ((true)) {
      console.error(("[vuex] duplicate getter key: " + type));
    }
    return
  }
  store._wrappedGetters[type] = function wrappedGetter (store) {
    return rawGetter(
      local.state, // local state
      local.getters, // local getters
      store.state, // root state
      store.getters // root getters
    )
  };
}

function enableStrictMode (store) {
  store._vm.$watch(function () { return this._data.$$state }, function () {
    if ((true)) {
      assert(store._committing, "do not mutate vuex store state outside mutation handlers.");
    }
  }, { deep: true, sync: true });
}

function getNestedState (state, path) {
  return path.reduce(function (state, key) { return state[key]; }, state)
}

function unifyObjectStyle (type, payload, options) {
  if (isObject(type) && type.type) {
    options = payload;
    payload = type;
    type = type.type;
  }

  if ((true)) {
    assert(typeof type === 'string', ("expects string as the type, but found " + (typeof type) + "."));
  }

  return { type: type, payload: payload, options: options }
}

function install (_Vue) {
  if (Vue && _Vue === Vue) {
    if ((true)) {
      console.error(
        '[vuex] already installed. Vue.use(Vuex) should be called only once.'
      );
    }
    return
  }
  Vue = _Vue;
  applyMixin(Vue);
}

/**
 * Reduce the code which written in Vue.js for getting the state.
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} states # Object's item can be a function which accept state and getters for param, you can do something for state and getters in it.
 * @param {Object}
 */
var mapState = normalizeNamespace(function (namespace, states) {
  var res = {};
  if (( true) && !isValidMap(states)) {
    console.error('[vuex] mapState: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(states).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedState () {
      var state = this.$store.state;
      var getters = this.$store.getters;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapState', namespace);
        if (!module) {
          return
        }
        state = module.context.state;
        getters = module.context.getters;
      }
      return typeof val === 'function'
        ? val.call(this, state, getters)
        : state[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for committing the mutation
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} mutations # Object's item can be a function which accept `commit` function as the first param, it can accept anthor params. You can commit mutation and do any other things in this function. specially, You need to pass anthor params from the mapped function.
 * @return {Object}
 */
var mapMutations = normalizeNamespace(function (namespace, mutations) {
  var res = {};
  if (( true) && !isValidMap(mutations)) {
    console.error('[vuex] mapMutations: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(mutations).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedMutation () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      // Get the commit method from store
      var commit = this.$store.commit;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapMutations', namespace);
        if (!module) {
          return
        }
        commit = module.context.commit;
      }
      return typeof val === 'function'
        ? val.apply(this, [commit].concat(args))
        : commit.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for getting the getters
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} getters
 * @return {Object}
 */
var mapGetters = normalizeNamespace(function (namespace, getters) {
  var res = {};
  if (( true) && !isValidMap(getters)) {
    console.error('[vuex] mapGetters: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(getters).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    // The namespace has been mutated by normalizeNamespace
    val = namespace + val;
    res[key] = function mappedGetter () {
      if (namespace && !getModuleByNamespace(this.$store, 'mapGetters', namespace)) {
        return
      }
      if (( true) && !(val in this.$store.getters)) {
        console.error(("[vuex] unknown getter: " + val));
        return
      }
      return this.$store.getters[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for dispatch the action
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} actions # Object's item can be a function which accept `dispatch` function as the first param, it can accept anthor params. You can dispatch action and do any other things in this function. specially, You need to pass anthor params from the mapped function.
 * @return {Object}
 */
var mapActions = normalizeNamespace(function (namespace, actions) {
  var res = {};
  if (( true) && !isValidMap(actions)) {
    console.error('[vuex] mapActions: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(actions).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedAction () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      // get dispatch function from store
      var dispatch = this.$store.dispatch;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapActions', namespace);
        if (!module) {
          return
        }
        dispatch = module.context.dispatch;
      }
      return typeof val === 'function'
        ? val.apply(this, [dispatch].concat(args))
        : dispatch.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

/**
 * Rebinding namespace param for mapXXX function in special scoped, and return them by simple object
 * @param {String} namespace
 * @return {Object}
 */
var createNamespacedHelpers = function (namespace) { return ({
  mapState: mapState.bind(null, namespace),
  mapGetters: mapGetters.bind(null, namespace),
  mapMutations: mapMutations.bind(null, namespace),
  mapActions: mapActions.bind(null, namespace)
}); };

/**
 * Normalize the map
 * normalizeMap([1, 2, 3]) => [ { key: 1, val: 1 }, { key: 2, val: 2 }, { key: 3, val: 3 } ]
 * normalizeMap({a: 1, b: 2, c: 3}) => [ { key: 'a', val: 1 }, { key: 'b', val: 2 }, { key: 'c', val: 3 } ]
 * @param {Array|Object} map
 * @return {Object}
 */
function normalizeMap (map) {
  if (!isValidMap(map)) {
    return []
  }
  return Array.isArray(map)
    ? map.map(function (key) { return ({ key: key, val: key }); })
    : Object.keys(map).map(function (key) { return ({ key: key, val: map[key] }); })
}

/**
 * Validate whether given map is valid or not
 * @param {*} map
 * @return {Boolean}
 */
function isValidMap (map) {
  return Array.isArray(map) || isObject(map)
}

/**
 * Return a function expect two param contains namespace and map. it will normalize the namespace and then the param's function will handle the new namespace and the map.
 * @param {Function} fn
 * @return {Function}
 */
function normalizeNamespace (fn) {
  return function (namespace, map) {
    if (typeof namespace !== 'string') {
      map = namespace;
      namespace = '';
    } else if (namespace.charAt(namespace.length - 1) !== '/') {
      namespace += '/';
    }
    return fn(namespace, map)
  }
}

/**
 * Search a special module from store by namespace. if module not exist, print error message.
 * @param {Object} store
 * @param {String} helper
 * @param {String} namespace
 * @return {Object}
 */
function getModuleByNamespace (store, helper, namespace) {
  var module = store._modulesNamespaceMap[namespace];
  if (( true) && !module) {
    console.error(("[vuex] module namespace not found in " + helper + "(): " + namespace));
  }
  return module
}

var index = {
  Store: Store,
  install: install,
  version: '3.4.0',
  mapState: mapState,
  mapMutations: mapMutations,
  mapGetters: mapGetters,
  mapActions: mapActions,
  createNamespacedHelpers: createNamespacedHelpers
};

/* harmony default export */ __webpack_exports__["default"] = (index);


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./app/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/es/Documents/WEB/WebConstructor/app/index.js */"./app/index.js");


/***/ })

/******/ });
//# sourceMappingURL=webConstructor_bundle.js.map