/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		1: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([1,2]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var choices_js_src_styles_choices_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24);
/* harmony import */ var choices_js_src_styles_choices_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(choices_js_src_styles_choices_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flatpickr_dist_themes_light_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26);
/* harmony import */ var flatpickr_dist_themes_light_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flatpickr_dist_themes_light_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_widget_widget__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(28);
/* harmony import */ var _components_window_window_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(31);
/* harmony import */ var _components_popUp_popUp_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(15);
/* harmony import */ var _components_button_button_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(50);
/* harmony import */ var _components_modal_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(53);
/* harmony import */ var _components_header_header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(56);
/* harmony import */ var _components_footer_footer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(59);
/* harmony import */ var _components_custom_icon_custom_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(62);
/* harmony import */ var _components_custom_header_custom_header__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(65);
/* harmony import */ var _components_custom_layout_custom_layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(68);
/* harmony import */ var _components_custom_account_add_custom_account_add__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(71);
/* harmony import */ var _components_custom_account_card_custom_account_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(74);
/* harmony import */ var _components_custom_field_custom_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(77);
/* harmony import */ var _components_custom_bill_card_custom_bill_card__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(80);
/* harmony import */ var _components_custom_checkbox_custom_checkbox__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(83);
/* harmony import */ var _components_custom_tabs_custom_tabs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(86);
/* harmony import */ var _components_custom_module_card_custom_module_card__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(89);
/* harmony import */ var _components_custom_pagination_custom_pagination__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(92);
/* harmony import */ var _components_custom_table_custom_table__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(95);
/* harmony import */ var _components_custom_filter_custom_filter__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(98);
/* harmony import */ var _components_custom_select_custom_select__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(35);
/* harmony import */ var _components_custom_range_picker_custom_range_picker__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(38);
// SvgSprite compiler
function requireAll(r) {
  r.keys().forEach(r);
}

requireAll(__webpack_require__(2)); // UTILS

 // LIBS SCSS


 //------------------------------------------------------------
// LIBS JS
//------------------------------------------------------------
//------------------------------------------------------------
// 100vh hack for mobile-browsers
// First we get the viewport height and we multiple it by 1% to get a value for a vh unit

let vh = window.innerHeight * 0.01; // Then we set the value in the --vh custom property to the root of the document

document.documentElement.style.setProperty('--vh', `${vh}px`);
window.addEventListener('resize', () => {
  vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}); // usage in css
// height: calc(var(--vh, 1vh) * 100);
// 100vh hack for mobile-browsers
//------------------------------------------------------------
// Удалить перед передачей кодеру.

 // обязательный функционал для каждого проекта
// Core components


 // import './components/validator/validator.js';

 // Core components
// наработанный полезный функционал(необязательный для каждого проекта)
//Functional components
// Bitrix components
//компоненты необходимые практически на каждом проекте
//Basic components



 //Basic components

















/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./icon-5corners.svg": 3
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
webpackContext.id = 2;

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "icon-5corners",
  "use": "icon-5corners-usage",
  "viewBox": "0 0 18 18",
  "content": "<symbol viewBox=\"0 0 18 18\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-5corners\">\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M7.62276 14.3626L7.5998 14.3177L0.896851 10.158L3.2842 8.44915L5.25836 0.894287L7.64571 2.60312L15.6112 2.10846L14.693 4.85159L17.6313 12.1142H14.67L14.6471 12.1366L8.51802 17.1058L7.62276 14.3626Z\" fill=\"#333333\" />\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M7.62264 14.2951V14.34L12.2596 12.0916L13.1319 12.1141H14.647H14.6699L14.5781 11.4395L13.9354 7.09997L14.6929 4.87398H14.6699L14.6011 4.8515L9.5968 3.99708L7.6456 2.60303V2.62551L7.04876 3.70478L5.23529 7.07748L3.37591 8.40408L3.28409 8.47153L6.88807 12.0916L7.62264 14.2951Z\" fill=\"#F5002C\" />\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPaddingOnBody", function() { return getPaddingOnBody; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPaddingFromBody", function() { return getPaddingFromBody; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getScrollbarWidth", function() { return getScrollbarWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shuffle", function() { return shuffle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numberSplitter", function() { return numberSplitter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "activateRequestButtons", function() { return activateRequestButtons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "phoneRegExp", function() { return phoneRegExp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "innRegExp", function() { return innRegExp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "birthdayRegExp", function() { return birthdayRegExp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFormData", function() { return createFormData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setTextareaAutoHeight", function() { return setTextareaAutoHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setStatus", function() { return setStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startTimer", function() { return startTimer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return debounce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scrollToErrorField", function() { return scrollToErrorField; });
/* harmony import */ var _utils_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var _utils_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_utils_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_main_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fonts_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13);
/* harmony import */ var _fonts_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fonts_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_popUp_popUp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15);
/* harmony import */ var _components_validator_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(18);
/* eslint-disable */





/* eslint-enable */

const phoneRegExp = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){11,14}(\s*)?$/;
const birthdayRegExp = /^(?:0[1-9]|[12]\d|3[01])([\/.-])(?:0[1-9]|1[012])\1(?:19|20)\d\d$/;
const innRegExp = /^(([0 - 9]{12})| ([0 - 9]{10}))?$/; // Находим ширину скролбара и узнаем на сколько добавлять отступ справа у body.

const body = document.querySelector('body');
const header = document.querySelector('.header__fixed');

const getScrollbarWidth = () => window.innerWidth - document.documentElement.clientWidth;

let checker = false; // Функция чтобы блочить экран и давать отступ.

const getPaddingOnBody = () => {
  const modal = document.querySelector('.Modal');
  const popUps = document.querySelectorAll('.popUp');
  const alertWrapper = document.querySelector('.alert-wrapper');

  if (!checker) {
    body.style.paddingRight = `${getScrollbarWidth()}px`;

    if (header) {
      header.style.paddingRight = `${getScrollbarWidth()}px`;
    }

    if (modal) {
      modal.style.paddingRight = `${getScrollbarWidth()}px`;
    }

    if (popUps) {
      popUps.forEach(popUp => {
        popUp.style.paddingRight = `${getScrollbarWidth()}px`;
      });
    }

    if (alertWrapper) {
      alertWrapper.style.paddingRight = `${getScrollbarWidth()}px`;
    }

    body.classList.add('static');
    checker = true;
  }
}; // Функция чтобы снимать блокировку экрана и убирать отступ.


const getPaddingFromBody = () => {
  const modal = document.querySelector('.Modal');
  const popUps = document.querySelectorAll('.popUp');
  const alertWrapper = document.querySelector('.alert-wrapper');

  if (checker) {
    body.style.paddingRight = '';
    body.style.paddingRight = `${getScrollbarWidth()}px`;

    if (header) {
      header.style.paddingRight = '';
    }

    if (modal) {
      modal.style.paddingRight = '';
    }

    if (popUps) {
      popUps.forEach(popUp => {
        popUp.style.paddingRight = '';
      });
    }

    if (alertWrapper) {
      alertWrapper.style.paddingRight = '';
    }

    body.classList.remove('static');
    checker = false;
  }
}; // Функция чтобы перемешать массив.


const shuffle = array => {
  for (let i = array.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1)); // случайный индекс от 0 до i

    [array[i], array[j]] = [array[j], array[i]];
  }
}; // Функция чтобы ставить пробелы каждые 3 символа.


const numberSplitter = num => {
  const n = num.toString();
  return n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, '$1' + ' ');
}; // автоматическая высота для textarea


function OnInput() {
  this.style.height = 'auto';
  this.style.height = `${this.scrollHeight}px`;
}

const setTextareaAutoHeight = area => {
  const textareas = document.querySelectorAll(`${area}`);
  textareas.forEach(element => {
    element.setAttribute('style', `height:${element.scrollHeight}px; overflow-y: hidden;`);
    element.addEventListener('input', OnInput);
  });
};

const isObject = object => {
  const type = typeof object;
  return type === 'function' || type === 'object';
};

const createFormData = values => {
  const data = new FormData(); // eslint-disable-next-line no-restricted-syntax

  for (const key in values) {
    if (isObject(values[key])) {
      values[key].forEach((file, index) => {
        data.append(`${key}-${index}`, file);
      });
    } else {
      data.append(key, values[key]);
    }
  }

  return data;
};

const startTimer = (container, btn, tm) => {
  const button = btn;
  let time = tm;
  const timer = setInterval(() => {
    if (time < 1) {
      button.removeAttribute('disabled');
      container.style.display = 'none';
      clearInterval(timer);
    } else {
      time -= 1;
      container.style.display = '';
      container.querySelector('b').textContent = `00:${String(time).padStart(2, '0')}`;
    }
  }, 1000);
  return timer;
};

const debounce = cb => {
  const DEBOUNCE_INTERVAL = 500; // ms

  let lastTimeout = null;
  return () => {
    const parameters = arguments;

    if (lastTimeout) {
      window.clearTimeout(lastTimeout);
    }

    lastTimeout = window.setTimeout(() => {
      cb.apply(null, parameters);
    }, DEBOUNCE_INTERVAL);
  };
};

const scrollToErrorField = form => {
  form.addEventListener('bouncerFormInvalid', () => {
    const firstError = form.querySelector('.validator__input--error');

    const scrollToFirstError = error => {
      error.style.scrollMarginTop = '140px';
      error.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'start'
      });
    };

    setTimeout(() => {
      scrollToFirstError(firstError);
    }, 100);
  });
}; // Статус для системных сообщений "alert".


const setStatus = status => {
  switch (status) {
    case 'success':
      return 'alert--green';

    case 'exclam':
      return 'alert--grey';

    case 'error':
      return 'alert--red';

    default:
      return '';
  }
}; // Функция чтобы навешивать вызов модального окна заявки по кнопке.


const activateRequestButtons = func => {
  const buttons = document.querySelectorAll('.button-request:not(.button-request--js)');
  buttons.forEach(button => {
    if (!button.classList.contains('button-request--js')) {
      button.classList.add('button-request--js');
      button.addEventListener('click', evt => {
        evt.preventDefault();
        const {
          type
        } = button.dataset;
        const info = button.dataset;

        if (!document.querySelector(`#modal--${type}`)) {
          console.log('Такого модального окна не существует.');
          return false;
        }

        if (type) {
          Object(_components_popUp_popUp__WEBPACK_IMPORTED_MODULE_3__["summonPopUp"])(`#modal--${type}`, true);
          setTextareaAutoHeight('.modal__form textarea');
          const modal = document.querySelector(`.modal--${type}`);

          if (!modal) {
            console.log('Такого модального окна не существует.');
            return false;
          }

          const form = modal.querySelector('form');

          for (const key in info) {
            form.insertAdjacentHTML('beforeend', `<input type="hidden" name="${key}" value="${info[key]}">`);
          }

          const validatedForm = Object(_components_validator_validator__WEBPACK_IMPORTED_MODULE_4__["validateForm"])(`.modal--${type} form`);
          Object(_components_validator_validator__WEBPACK_IMPORTED_MODULE_4__["maskPhone"])(`.modal--${type}`, 'input[type="tel"]');
          form.addEventListener('bouncerFormValid', debounce(() => {
            if (func) {
              const answer = func(form);

              if (answer.responseJSON) {
                if (answer.responseJSON.status === 'success') {
                  validatedForm.destroy();
                  Object(_components_popUp_popUp__WEBPACK_IMPORTED_MODULE_3__["removePopUp"])(`.modal--${type}`, true);
                  const alert = document.querySelector('#alert--request').content.querySelector('.alert');
                  alert.classList.add(setStatus('success'));
                  const container = document.querySelector('#alert--request').content.querySelector('.alert__container');
                  container.innerHTML = answer.responseJSON.text;
                }
              }
            }
          }));
        }
      });
    }
  });
};



/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(9);
            var content = __webpack_require__(10);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 9 */,
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(9);
            var content = __webpack_require__(12);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(9);
            var content = __webpack_require__(14);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "summonPopUp", function() { return summonPopUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removePopUp", function() { return removePopUp; });
/* harmony import */ var _popUp_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);
/* harmony import */ var _popUp_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_popUp_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);

/* eslint-disable */


/* eslint-enable */

const body = document.querySelector('body');
const activePopUps = [];

const summonPopUp = (template, fixer) => {
  const popUpName = template.slice(1);
  const templateContent = document.querySelector(`#${popUpName}`).content.cloneNode(true);
  const popup = templateContent.querySelector(`.${popUpName}`);

  if (!popup) {
    console.log('Такого модального окна не существует.');
    return false;
  }

  const closes = popup.querySelectorAll('.popUp__close');
  activePopUps.push(popup);

  if (fixer === true) {
    Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["getPaddingOnBody"])();
    popup.querySelector('.popUp__overlay').addEventListener('click', () => {
      popup.remove();
      activePopUps.pop();
      Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["getPaddingFromBody"])();
    });
  }

  if (closes.length > 0) {
    closes.forEach(close => {
      close.addEventListener('click', () => {
        popup.remove();
        activePopUps.pop();

        if (fixer === true) {
          Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["getPaddingFromBody"])();
        }
      });
    });
  }

  body.append(templateContent);
};

const removePopUp = (template, fixer) => {
  const templateContent = document.querySelector(`${template}`);

  if (!templateContent) {
    return;
  }

  if (fixer === true) {
    Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["getPaddingFromBody"])();
  }

  templateContent.remove();
};

document.addEventListener('keydown', evt => {
  if (evt.code === 'Escape') {
    const lastActivePopUp = activePopUps.pop();

    if (lastActivePopUp !== undefined) {
      lastActivePopUp.remove();
      Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["getPaddingFromBody"])();
    }
  }
});


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(9);
            var content = __webpack_require__(17);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateForm", function() { return validateForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maskNumber", function() { return maskNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maskSimplePhone", function() { return maskSimplePhone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maskPhone", function() { return maskPhone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maskInternationalPhone", function() { return maskInternationalPhone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initPasswordEye", function() { return initPasswordEye; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initAgreeCheckbox", function() { return initAgreeCheckbox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initFileLoadInput", function() { return initFileLoadInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "focusFirstInput", function() { return focusFirstInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initSelectValidation", function() { return initSelectValidation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initChoicesValidation", function() { return initChoicesValidation; });
/* harmony import */ var _validator_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);
/* harmony import */ var _validator_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_validator_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var inputmask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21);
/* harmony import */ var inputmask__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(inputmask__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var formbouncerjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22);
/* harmony import */ var formbouncerjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(formbouncerjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var choices_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(23);





const validateForm = form => {
  const forma = document.querySelector(`${form}`);
  const validator = new formbouncerjs__WEBPACK_IMPORTED_MODULE_2___default.a(form, {
    fieldClass: 'validator__input--error',
    errorClass: 'validator__error',
    disableSubmit: true,
    emitEvents: true,
    messageAfterField: false,
    patterns: {
      email: /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.([a-zA-Z]|[А-Яа-я])+)/
    },
    customValidations: {
      required(field) {
        const selector = field.classList.contains('validator__required');
        if (!selector) return false;
        const description = field.parentElement.parentElement.querySelector('.validator__description');
        const cuttedSpacesValue = field.value.replace(/\s\s+/g, ' ');
        const trimmedValue = cuttedSpacesValue.trim();
        field.value = trimmedValue;

        if (field.value !== '') {
          field.classList.add('validator__input--valid');
          description.classList.remove('validator__description--error');
          description.classList.add('validator__description--valid');
          return false;
        }

        field.classList.remove('validator__input--valid');
        description.classList.add('validator__description--error');
        description.classList.remove('validator__description--valid');
        return true;
      },

      text(field) {
        const selector = field.classList.contains('validator__text');
        if (!selector) return false;
        const description = field.parentElement.parentElement.querySelector('.validator__description');
        const cuttedSpacesValue = field.value.replace(/\s\s+/g, ' ');
        const trimmedValue = cuttedSpacesValue.trim();
        field.value = trimmedValue; // Разрешены только буквы и тире

        const textRegexp = new RegExp(/^([a-zA-ZА-Яа-яЁё.-]+\s?)*$/);

        if (field.value.match(textRegexp) && field.value.length >= 2 && field.value.length <= 225) {
          field.classList.add('validator__input--valid');
          description.classList.remove('validator__description--error');
          description.classList.add('validator__description--valid');
          return false;
        }

        field.classList.remove('validator__input--valid');
        description.classList.add('validator__description--error');
        description.classList.remove('validator__description--valid');
        return true;
      },

      textarea(field) {
        const selector = field.classList.contains('validator__textarea');
        if (!selector) return false;
        const description = field.parentElement.parentElement.querySelector('.validator__description');
        const cuttedSpacesValue = field.value.replace(/\s\s+/g, ' ');
        const trimmedValue = cuttedSpacesValue.trim();
        field.value = trimmedValue; // Разрешены буквы, цифры, спец.симболы

        const textRegexp = new RegExp(/^([a-zA-ZА-Яа-яЁё0-9-!$%^&amp;*()_+|~=`{}[\]:;;&lt;&gt;?",.@#№'&quot;„;“;“;”;‘;’;(?!…)«;»;/|/\\/]+\s?)*$/);

        if (field.value.match(textRegexp) && field.value !== '') {
          field.classList.add('validator__input--valid');
          description.classList.remove('validator__description--error');
          description.classList.add('validator__description--valid');
          return false;
        }

        field.classList.remove('validator__input--valid');
        description.classList.add('validator__description--error');
        description.classList.remove('validator__description--valid');
        return true;
      },

      select(field) {
        const selector = field.classList.contains('validator__select');
        if (!selector) return false;

        if (field.options[field.selectedIndex].value !== '') {
          field.parentElement.classList.remove('validator__input--error');
          return false;
        }

        field.parentElement.classList.add('validator__input--error');
        return true;
      },

      choices(field) {
        const selector = field.classList.contains('validator__choices');
        if (!selector) return false;
        const description = field.parentElement.parentElement.parentElement.querySelector('.validator__description');
        const select = field.parentElement;

        if (field.options[field.selectedIndex].value !== '') {
          select.classList.remove('validator__input--error');
          description.classList.remove('validator__description--error');
          description.classList.add('validator__description--valid');
          return false;
        }

        select.classList.add('validator__input--error');
        description.classList.add('validator__description--error');
        description.classList.remove('validator__description--valid');
        return true;
      },

      number(field) {
        const selector = field.classList.contains('validator__number');
        if (!selector) return false;
        const description = field.parentElement.parentElement.querySelector('.validator__description');

        if (field.value.length >= 1 && field.value.length <= 225) {
          field.classList.add('validator__input--valid');
          description.classList.remove('validator__description--error');
          description.classList.add('validator__description--valid');
          return false;
        }

        field.classList.remove('validator__input--valid');
        description.classList.add('validator__description--error');
        description.classList.remove('validator__description--valid');
        return true;
      },

      minmax(field) {
        const selector = field.classList.contains('validator__minmax');
        const min = field.getAttribute('minlength');
        const max = field.getAttribute('maxlength');
        if (!selector) return false;
        const description = field.parentElement.parentElement.querySelector('.validator__description');

        if (field.value.length >= min && field.value.length <= max) {
          field.classList.add('validator__input--valid');
          description.classList.remove('validator__description--error');
          description.classList.add('validator__description--valid');
          return false;
        }

        field.classList.remove('validator__input--valid');
        description.classList.add('validator__description--error');
        description.classList.remove('validator__description--valid');
        return true;
      },

      email(field) {
        const selector = field.classList.contains('validator__mail');
        if (!selector) return false;
        const description = field.parentElement.parentElement.querySelector('.validator__description'); // const cuttedSpacesValue = field.value.replace(/\s+/g, '');

        const trimmedValue = field.value.trim();
        field.value = '';
        field.value = trimmedValue; // const regexp = new RegExp(/^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*(\.\w{2,})+$/);

        const regexp = new RegExp(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.([a-zA-Z0-9_-]|[0-9А-Яа-я])+)/);

        if (field.value.match(regexp)) {
          field.classList.add('validator__input--valid');
          description.classList.remove('validator__description--error');
          description.classList.add('validator__description--valid');
          return false;
        }

        field.classList.remove('validator__input--valid');
        description.classList.add('validator__description--error');
        description.classList.remove('validator__description--valid');
        return true;
      },

      ruPhone(field) {
        const selector = field.classList.contains('validator__phone');
        if (!selector) return false;
        const description = field.parentElement.parentElement.querySelector('.validator__description');

        if (field.value.length === 10) {
          field.classList.add('validator__input--valid');
          description.classList.remove('validator__description--error');
          description.classList.add('validator__description--valid');
          return false;
        }

        field.classList.remove('validator__input--valid');
        description.classList.add('validator__description--error');
        description.classList.remove('validator__description--valid');
        return true;
      },

      intPhone(field) {
        const selector = field.classList.contains('validator__country-phone');
        if (!selector) return false;
        const description = field.parentElement.parentElement.querySelector('.validator__description');

        if (field.value.length === field.getAttribute('data-mask').length) {
          field.classList.add('validator__input--valid');
          description.classList.remove('validator__description--error');
          description.classList.add('validator__description--valid');
          return false;
        }

        field.classList.remove('validator__input--valid');
        description.classList.add('validator__description--error');
        description.classList.remove('validator__description--valid');
        return true;
      },

      password(field) {
        const selector = field.classList.contains('validator__password');
        if (!selector) return false;
        const description = field.parentElement.parentElement.querySelector('.validator__description');
        field.value.replace(/\s/g, '');

        if (field.value.length >= 8 && field.value.length <= 225) {
          field.classList.add('validator__input--valid');
          description.classList.remove('validator__description--error');
          description.classList.add('validator__description--valid');
          return false;
        }

        field.classList.remove('validator__input--valid');
        description.classList.add('validator__description--error');
        description.classList.remove('validator__description--valid');
        return true;
      },

      passwordMatch(field) {
        const selector = field.getAttribute('data-bouncer-match');
        if (!selector) return false;
        field.value = field.value.replace(/\s/g, '');
        const otherField = field.form.querySelector(selector);
        if (!otherField) return false;
        return otherField.value !== field.value;
      }

    },
    messages: {
      fallback: 'Поле обязательно для заполнения!',
      missingValue: {
        default: 'Поле обязательно для заполнения!'
      },
      patternMismatch: {
        default: 'Значение поля не удовлетворяет требованиям!'
      },
      wrongLength: {
        over: 'wrongLength over',
        under: 'wrongLength under'
      },
      outOfRange: {
        over: 'outOfRange over',
        under: 'outOfRange under'
      },
      text: 'Неправильно!',
      textarea: 'Неправильно!',
      number: 'Допускаются только цифры!',
      ruPhone: 'Введи телефон!',
      intPhone: 'Выбери и введи междонародный телефон!',
      password: 'Пароль должен содержать минимум 8 символов, латинские символы верхнего и нижнего регистров, знаки пунктуации',
      passwordMatch: 'Значения полей не совпадают!'
    }
  });
  forma.addEventListener('reset', () => {
    forma.querySelectorAll('.validator__description').forEach(description => {
      description.classList.remove('validator__description--error');
      description.classList.remove('validator__description--valid');
    });
    forma.querySelectorAll('.validator__input--valid').forEach(input => {
      input.classList.remove('validator__input--valid');
    });
    forma.querySelectorAll('.validator__input--error').forEach(input => {
      input.classList.remove('validator__input--error');
    });
  });
  return validator;
};

const maskNumber = (form, maxNumber) => {
  const numberMask = new inputmask__WEBPACK_IMPORTED_MODULE_1___default.a(`9{0,${maxNumber}}`, {
    autoUnmask: true,
    showMaskOnHover: false,
    showMaskOnFocus: false,
    placeholder: ''
  });
  const inputsContainer = document.querySelector(`${form}`);
  const inputs = inputsContainer.querySelectorAll('.validator__number');
  inputs.forEach(input => {
    numberMask.mask(input);
  });
};

const maskSimplePhone = form => {
  /* eslint-disable */
  const mask = function () {
    let matrix = '+7 (___) ___ ____',
        i = 0,
        def = matrix.replace(/\D/g, ''),
        val = this.value.replace(/\D/g, '');
    if (def.length >= val.length) val = def;
    this.value = matrix.replace(/./g, function (a) {
      return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
    });
  };
  /* eslint-enable */


  const phonesContainer = document.querySelector(`${form}`);
  const inputs = phonesContainer.querySelectorAll('.validator__simple-phone');
  inputs.forEach(phone => {
    phone.addEventListener('input', mask);
  });
};

const maskPhone = form => {
  const phoneMask = new inputmask__WEBPACK_IMPORTED_MODULE_1___default.a('+7 [(999) 999-99-99]', {
    autoUnmask: true,
    showMaskOnHover: false
  });
  const phonesContainer = document.querySelector(`${form}`);
  const inputs = phonesContainer.querySelectorAll('.validator__phone');
  inputs.forEach(phone => {
    phoneMask.mask(phone); // phone.addEventListener('paste', (evt) => {
    //   evt.preventDefault();
    //   const initialValue = (evt.clipboardData || window.clipboardData).getData('text');
    //   let serializedValue = initialValue.replace(/[^-0-9]/gim, '');
    //   if (Number(serializedValue.charAt(0)) === 7) {
    //     serializedValue = serializedValue.slice(1);
    //   } if (Number(serializedValue.charAt(0)) === 8) {
    //     serializedValue = serializedValue.slice(1);
    //   }
    //   phone.value = Number(serializedValue);
    // });
  });
};

const maskInternationalPhone = form => {
  const hashContainer = document.querySelector(`${form}`);
  const countryPhone = hashContainer.querySelector('.validator__country-phone');
  const firstPhoneMask = hashContainer.querySelector('.validator__country-mask').getAttribute('data-mask');
  countryPhone.setAttribute('data-mask', firstPhoneMask.replace(/[^9]/g, ''));
  let phoneMask = new inputmask__WEBPACK_IMPORTED_MODULE_1___default.a(firstPhoneMask, {
    autoUnmask: true
  });
  phoneMask.mask(countryPhone);
  const options = [];
  const optionsData = hashContainer.querySelectorAll('.validator__country-mask');
  optionsData.forEach((option, index) => {
    options.push({
      value: option.getAttribute('data-value'),
      label: option.getAttribute('data-country'),
      id: index + 1,
      customProperties: {
        mask: option.getAttribute('data-mask'),
        flag: option.getAttribute('data-flag')
      }
    });
  });
  const choicesSelect = hashContainer.querySelector('.validator__country-select');
  const choicesNolint = new choices_js__WEBPACK_IMPORTED_MODULE_3__["default"](choicesSelect, {
    searchEnabled: false,
    itemSelectText: '',
    shouldSort: false,
    choices: options,
    // searchEnabled: true,
    classNames: {
      containerOuter: 'choices validator__countries'
    },

    callbackOnCreateTemplates(template) {
      return {
        item(classNames, data) {
          return template(`
            <div class="${classNames.item} ${data.highlighted ? classNames.highlightedState : classNames.itemSelectable} 
            ${data.placeholder ? classNames.placeholder : ''}" 
            data-item data-id="${data.id}" data-value="${data.value}" ${data.active ? 'aria-selected="true"' : ''} 
            ${data.disabled ? 'aria-disabled="true"' : ''}> 
            <p class='choices__flag' style='background-image: url(${options[data.choiceId - 1].customProperties.flag})'></p>
            ${data.label}
            </div>
          `);
        },

        choice(classNames, data) {
          return template(`
            <div class="${classNames.item} ${classNames.itemChoice} 
            ${data.disabled ? classNames.itemDisabled : classNames.itemSelectable}"
            data-select-text="${this.config.itemSelectText}" data-choice 
            ${data.disabled ? 'data-choice-disabled aria-disabled="true"' : 'data-choice-selectable'} 
            data-id="${data.id}" data-value="${data.value}" 
            ${data.groupId > 0 ? 'role="treeitem"' : 'role="option"'}>
            <p class='choices__flag' style='background-image: url(${options[data.id - 1].customProperties.flag})'></p>
            ${data.label}
            </div>
          `);
        }

      };
    }

  });
  choicesSelect.addEventListener('choice', evt => {
    countryPhone.setAttribute('data-mask', evt.detail.choice.customProperties.mask.replace(/[^9]/g, ''));
    countryPhone.inputmask.remove();
    countryPhone.value = '';
    countryPhone.focus();
    countryPhone.blur();
    phoneMask = new inputmask__WEBPACK_IMPORTED_MODULE_1___default.a(evt.detail.choice.customProperties.mask, {
      autoUnmask: true
    });
    phoneMask.mask(countryPhone);
  });
};

const initPasswordEye = form => {
  const eyeContainer = document.querySelector(`${form}`);
  const eyes = eyeContainer.querySelectorAll('.validator__eye');
  const passwords = eyeContainer.querySelectorAll('.validator__password');
  eyes.forEach((eye, index) => {
    eye.addEventListener('click', () => {
      eye.classList.toggle('validator__eye--open');

      if (passwords[index].type === 'password') {
        passwords[index].type = 'text';
      } else {
        passwords[index].type = 'password';
      }
    });
  });
};

const initFileLoadInput = (form, template) => {
  const FILE_TYPES = ['jpg', 'jpeg', 'gif', 'png', '.pdf'];
  const filesForm = document.querySelector(`${form}`);
  const filesContainer = filesForm.querySelector('.validator__file-container');
  const loadInput = filesContainer.querySelector('.validator__file-input');
  const sizeWarning = filesContainer.querySelector('.validator__size-warning');
  const loadedFilesContainer = filesForm.querySelector('.validator__loaded-files');
  const cleaner = filesForm.querySelector('.validator__cleaner');
  const submitButton = filesForm.querySelector('button[type="submit"]');
  cleaner.style.display = 'none';

  const cleanFucntion = () => {
    filesContainer.innerHTML = '';
    filesContainer.innerHTML = template;
    loadedFilesContainer.innerHTML = '';
    initFileLoadInput(`${form}`, template);
  };

  filesForm.addEventListener('reset', () => {
    cleanFucntion();
  });
  cleaner.addEventListener('click', () => {
    cleanFucntion();
  });
  loadInput.addEventListener('change', () => {
    const files = Object.values(loadInput.files);
    loadedFilesContainer.innerHTML = '';
    let totalSize = 0;
    files.forEach(file => {
      totalSize += file.size;
    });

    if (totalSize > 0) {
      cleaner.style.display = 'grid';
    } else {
      cleaner.style.display = 'none';
    }

    for (let i = 0; i < files.length; i += 1) {
      const fileName = files[i].name.toLowerCase();

      if (!FILE_TYPES.some(type => fileName.endsWith(type))) {
        // submitButton.classList.add('validator__submit--disabled');
        // submitButton.disabled = true;
        loadInput.value = '';
        cleaner.style.display = 'none';
        sizeWarning.classList.add('validator__size-warning--exeeded');
        sizeWarning.textContent = 'Недопустимый тип файлов!';
        return;
      }
    }

    if (totalSize < 5242880 && files.length <= 3) {
      sizeWarning.classList.remove('validator__size-warning--exeeded');
      sizeWarning.textContent = 'Фотография разворота с ФИО, файл форматом jpeg, gif, png, pdf до 5 MB.';
      files.forEach(file => {
        let str = file.size;
        str = str.toString();
        str = Math.ceil(str / 1024);
        const fileTemplate = `
          <div class="validator__file">
            <p class="validator__file-name">${file.name}</p>
            <p class='validator__size'>${str}&nbsp;КБ</p>
          </div>
          `;
        loadedFilesContainer.insertAdjacentHTML('beforeend', fileTemplate);
      }); // submitButton.classList.remove('validator__submit--disabled');
      // submitButton.disabled = false;
    } else if (totalSize > 5242880) {
      // submitButton.classList.add('validator__submit--disabled');
      // submitButton.disabled = true;
      loadInput.value = '';
      cleaner.style.display = 'none';
      sizeWarning.classList.add('validator__size-warning--exeeded');
      sizeWarning.textContent = 'Размер файлов не должен превышать 5 МБ!';
    } else if (files.length > 3) {
      // submitButton.classList.add('validator__submit--disabled');
      // submitButton.disabled = true;
      loadInput.value = '';
      cleaner.style.display = 'none';
      sizeWarning.classList.add('validator__size-warning--exeeded');
      sizeWarning.textContent = 'Превышен лимит количества файлов!';
    }
  });
};

const initSelectValidation = form => {
  const formContainer = document.querySelector(`${form}`);
  const nativeSelects = formContainer.querySelectorAll('.validator__select');
  nativeSelects.forEach(select => {
    select.addEventListener('change', () => {
      if (select.parentElement.classList.contains('validator__input--error')) {
        select.parentElement.classList.remove('validator__input--error');
      }
    });
  });
};

const initChoicesValidation = form => {
  const formContainer = document.querySelector(`${form}`);
  const nativeSelects = formContainer.querySelectorAll('.validator__choices');
  nativeSelects.forEach(select => {
    const field = select.parentElement.parentElement.parentElement;
    const description = field.querySelector('.validator__description');
    const customSelect = field.querySelector('.choices__inner');
    select.addEventListener('change', () => {
      if (customSelect.classList.contains('validator__input--error')) {
        customSelect.classList.remove('validator__input--error');
        description.classList.remove('validator__description--error');
      }
    });
  });
};

const focusFirstInput = form => {
  const formContainer = document.querySelector(`${form}`);
  const input = formContainer.querySelector('input');
  input.focus();
};

const initAgreeCheckbox = form => {
  const checkboxContainer = document.querySelector(`${form}`);
  const checkboxLabel = checkboxContainer.querySelector('.validator__legal');
  const checkbox = checkboxContainer.querySelector('.validator__agree');
  const submitButton = checkboxContainer.querySelector('button[type="submit"]');
  checkboxLabel.addEventListener('click', () => {
    const isExeeded = checkboxContainer.querySelector('.validator__size-warning--exeeded');

    if (isExeeded) {
      submitButton.classList.add('validator__submit--disabled');
      submitButton.disabled = true;

      if (checkbox.checked === true) {
        checkbox.checked = false;
      } else {
        checkbox.checked = true;
      }
    } else if (checkbox.checked === true) {
      submitButton.classList.add('validator__submit--disabled');
      submitButton.disabled = true;
      checkbox.setAttribute('checked', false);
    } else {
      submitButton.classList.remove('validator__submit--disabled');
      submitButton.disabled = false;
      checkbox.setAttribute('checked', true);
    }
  });
};



/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(9);
            var content = __webpack_require__(20);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _widget_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29);
/* harmony import */ var _widget_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_widget_scss__WEBPACK_IMPORTED_MODULE_0__);

const widget = document.querySelector('.widget');

if (widget) {
  const widgetClose = widget.querySelector('.widget__close');
  const widgetOverlay = widget.querySelector('.widget__overlay');
  const body = document.querySelector('body');

  const getWidgetWork = () => {
    const isActive = widget.classList.contains('widget--active');

    if (!isActive) {
      widget.classList.add('widget--active');
      widgetClose.classList.add('widget__close--active');
      body.classList.add('fixed');
    } else {
      widget.classList.remove('widget--active');
      widgetClose.classList.remove('widget__close--active');
      body.classList.remove('fixed');
    }
  };

  widgetClose.addEventListener('click', () => {
    getWidgetWork();
  });
  widgetOverlay.addEventListener('click', () => {
    getWidgetWork();
  });
  const currentPage = window.location.pathname.split('/').pop();
  const links = widget.querySelectorAll('li a');
  links.forEach(link => {
    const page = link.href.split('/').pop();

    if (page === currentPage) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(9);
            var content = __webpack_require__(30);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _validator_validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18);
/* harmony import */ var _popUp_popUp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15);
/* harmony import */ var _accordion_accordion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32);
/* harmony import */ var _custom_select_custom_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(35);
/* harmony import */ var _custom_range_picker_custom_range_picker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(38);





window.Corners5ProjectLayout = {
  validation: {
    validateForm: _validator_validator__WEBPACK_IMPORTED_MODULE_0__["validateForm"],
    maskSimplePhone: _validator_validator__WEBPACK_IMPORTED_MODULE_0__["maskSimplePhone"],
    maskNumber: _validator_validator__WEBPACK_IMPORTED_MODULE_0__["maskNumber"],
    maskPhone: _validator_validator__WEBPACK_IMPORTED_MODULE_0__["maskPhone"],
    maskInternationalPhone: _validator_validator__WEBPACK_IMPORTED_MODULE_0__["maskInternationalPhone"],
    initPasswordEye: _validator_validator__WEBPACK_IMPORTED_MODULE_0__["initPasswordEye"],
    initAgreeCheckbox: _validator_validator__WEBPACK_IMPORTED_MODULE_0__["initAgreeCheckbox"],
    initFileLoadInput: _validator_validator__WEBPACK_IMPORTED_MODULE_0__["initFileLoadInput"],
    focusFirstInput: _validator_validator__WEBPACK_IMPORTED_MODULE_0__["focusFirstInput"],
    initSelectValidation: _validator_validator__WEBPACK_IMPORTED_MODULE_0__["initSelectValidation"],
    initChoicesValidation: _validator_validator__WEBPACK_IMPORTED_MODULE_0__["initChoicesValidation"]
  },
  summonPopUp: _popUp_popUp__WEBPACK_IMPORTED_MODULE_1__["summonPopUp"],
  removePopUp: _popUp_popUp__WEBPACK_IMPORTED_MODULE_1__["removePopUp"],
  accordionsInit: _accordion_accordion__WEBPACK_IMPORTED_MODULE_2__["default"],
  choicesInit: _custom_select_custom_select__WEBPACK_IMPORTED_MODULE_3__["default"],
  customRangePickerInit: _custom_range_picker_custom_range_picker__WEBPACK_IMPORTED_MODULE_4__["default"]
};

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _accordion_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33);
/* harmony import */ var _accordion_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_accordion_scss__WEBPACK_IMPORTED_MODULE_0__);

window.addEventListener('load', () => {
  const activeAccordions = document.querySelectorAll('.accordion--active');

  if (activeAccordions) {
    activeAccordions.forEach(accordion => {
      const inner = accordion.querySelector('.accordion__inner');
      inner.style.maxHeight = `${inner.scrollHeight}px`;
    });
  }
});

const accordionsInit = () => {
  const accordions = document.querySelectorAll('.accordion:not(.accordion--js)');

  if (accordions.length > 0) {
    accordions.forEach(accordion => {
      if (!accordion.classList.contains('accordion--js')) {
        const button = accordion.querySelector('.accordion__toggle');
        const innerList = accordion.querySelectorAll('.accordion__inner');
        button.addEventListener('click', () => {
          // Проверяем открыт ли блок, по которому кликнули.
          if (accordion.classList.contains('accordion--active')) {
            accordion.classList.remove('accordion--active');
            innerList.forEach(inner => {
              inner.style.maxHeight = '';
            });
          } else {
            // Находим все открытые блоки чтобы скрыть их.
            document.querySelectorAll('.accordion--active').forEach(item => {
              const activeAccordion = item;
              activeAccordion.classList.remove('accordion--active');
              item.querySelector('.accordion__inner').style.maxHeight = '';
            });
            accordion.classList.add('accordion--active');
            innerList.forEach(inner => {
              inner.style.maxHeight = `${inner.scrollHeight}px`;
            });
          }
        });
      }
    });
  }
};

accordionsInit();
/* harmony default export */ __webpack_exports__["default"] = (accordionsInit);

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(9);
            var content = __webpack_require__(34);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _custom_select_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36);
/* harmony import */ var _custom_select_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_custom_select_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var choices_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23);



const choicesInit = ({
  select,
  func
}) => {
  if (select) {
    const choicesNolint = new choices_js__WEBPACK_IMPORTED_MODULE_1__["default"](select, {
      searchEnabled: false,
      itemSelectText: '',
      shouldSort: false,
      classNames: {
        containerOuter: ['choices', 'custom-select__choices']
      }
    });
    select.addEventListener('addItem', event => {
      if (func) {
        func(event);
      }
    });
    return choicesNolint;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (choicesInit);

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(9);
            var content = __webpack_require__(37);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _custom_range_picker_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39);
/* harmony import */ var _custom_range_picker_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_custom_range_picker_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flatpickr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41);
/* harmony import */ var flatpickr_dist_l10n_ru__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(49);
/* harmony import */ var flatpickr_dist_l10n_ru__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flatpickr_dist_l10n_ru__WEBPACK_IMPORTED_MODULE_2__);




const customRangePickerInit = func => {
  const startInput = document.querySelector('.custom-range-picker__input--start');
  const finishInput = document.querySelector('.custom-range-picker__input--finish');
  let startInputPicker;
  let startInputValue;
  let finishInputPicker;
  let finishInputValue;

  if (startInput) {
    const datePicker = startInput;
    const container = datePicker.closest('.custom-range-picker__field');
    startInputPicker = Object(flatpickr__WEBPACK_IMPORTED_MODULE_1__["default"])(datePicker, {
      locale: flatpickr_dist_l10n_ru__WEBPACK_IMPORTED_MODULE_2__["Russian"],
      dateFormat: 'd.m.Y',
      disableMobile: true,
      allowInput: true,
      appendTo: container || undefined,
      onChange: (selectedDates, dateStr, instance) => {
        startInputValue = selectedDates[0].getTime();

        if (startInputValue > finishInputValue) {
          startInputPicker.setDate(finishInputValue, false, 'd.m.Y');
          finishInputPicker.setDate(startInputValue, false, 'd.m.Y');
        }
      },
      onBlur: evt => {}
    });
  }

  if (finishInput) {
    const datePicker = finishInput;
    const container = datePicker.closest('.custom-range-picker__field');
    finishInputPicker = Object(flatpickr__WEBPACK_IMPORTED_MODULE_1__["default"])(datePicker, {
      locale: flatpickr_dist_l10n_ru__WEBPACK_IMPORTED_MODULE_2__["Russian"],
      dateFormat: 'd.m.Y',
      disableMobile: true,
      allowInput: true,
      appendTo: container || undefined,
      onChange: (selectedDates, dateStr, instance) => {
        finishInputValue = selectedDates[0].getTime();

        if (startInputValue > finishInputValue) {
          startInputPicker.setDate(finishInputValue, false, 'd.m.Y');
          finishInputPicker.setDate(startInputValue, false, 'd.m.Y');
        }
      },
      onBlur: evt => {}
    });
  }
};

/* harmony default export */ __webpack_exports__["default"] = (customRangePickerInit);

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(9);
            var content = __webpack_require__(40);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _button_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51);
/* harmony import */ var _button_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_button_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(9);
            var content = __webpack_require__(52);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modal_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(54);
/* harmony import */ var _modal_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modal_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(9);
            var content = __webpack_require__(55);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _header_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57);
/* harmony import */ var _header_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_header_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(9);
            var content = __webpack_require__(58);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _footer_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(60);
/* harmony import */ var _footer_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_footer_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(9);
            var content = __webpack_require__(61);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _custom_icon_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63);
/* harmony import */ var _custom_icon_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_custom_icon_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(9);
            var content = __webpack_require__(64);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _custom_header_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66);
/* harmony import */ var _custom_header_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_custom_header_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(9);
            var content = __webpack_require__(67);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _custom_layout_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69);
/* harmony import */ var _custom_layout_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_custom_layout_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(9);
            var content = __webpack_require__(70);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _custom_account_add_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72);
/* harmony import */ var _custom_account_add_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_custom_account_add_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(9);
            var content = __webpack_require__(73);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _custom_account_card_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75);
/* harmony import */ var _custom_account_card_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_custom_account_card_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(9);
            var content = __webpack_require__(76);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _custom_field_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78);
/* harmony import */ var _custom_field_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_custom_field_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(9);
            var content = __webpack_require__(79);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _custom_bill_card_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81);
/* harmony import */ var _custom_bill_card_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_custom_bill_card_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(9);
            var content = __webpack_require__(82);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _custom_checkbox_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84);
/* harmony import */ var _custom_checkbox_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_custom_checkbox_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(9);
            var content = __webpack_require__(85);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _custom_tabs_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87);
/* harmony import */ var _custom_tabs_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_custom_tabs_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(9);
            var content = __webpack_require__(88);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _custom_module_card_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90);
/* harmony import */ var _custom_module_card_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_custom_module_card_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(9);
            var content = __webpack_require__(91);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _custom_pagination_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93);
/* harmony import */ var _custom_pagination_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_custom_pagination_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(9);
            var content = __webpack_require__(94);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _custom_table_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96);
/* harmony import */ var _custom_table_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_custom_table_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(9);
            var content = __webpack_require__(97);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 98 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _custom_filter_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(99);
/* harmony import */ var _custom_filter_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_custom_filter_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(9);
            var content = __webpack_require__(100);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })
/******/ ]);