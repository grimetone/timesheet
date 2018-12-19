module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/app */ "next/app");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! grommet */ "grommet");
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(grommet__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../state */ "./state/index.js");

var _jsxFileName = "C:\\Users\\seana\\Desktop\\School\\timesheet\\front\\pages\\_app.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var theme = {
  global: {
    font: {
      family: "Roboto",
      size: "14px",
      height: "20px"
    }
  }
};
/**
 * Applications 'alternative wrapper component
 */

var MyApp =
/*#__PURE__*/
function (_App) {
  _inherits(MyApp, _App);

  function MyApp() {
    _classCallCheck(this, MyApp);

    return _possibleConstructorReturn(this, _getPrototypeOf(MyApp).apply(this, arguments));
  }

  _createClass(MyApp, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps,
          store = _this$props.store;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_app__WEBPACK_IMPORTED_MODULE_2__["Container"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_4__["Provider"], {
        store: store,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_3__["Grommet"], {
        theme: theme,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Component, _extends({}, pageProps, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      })))));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var Component, ctx, pageProps;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                Component = _ref.Component, ctx = _ref.ctx;

                if (!Component.getInitialProps) {
                  _context.next = 7;
                  break;
                }

                _context.next = 4;
                return Component.getInitialProps(ctx);

              case 4:
                _context.t0 = _context.sent;
                _context.next = 8;
                break;

              case 7:
                _context.t0 = {};

              case 8:
                pageProps = _context.t0;
                return _context.abrupt("return", {
                  pageProps: pageProps
                });

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      };
    }()
  }]);

  return MyApp;
}(next_app__WEBPACK_IMPORTED_MODULE_2___default.a);

/* harmony default export */ __webpack_exports__["default"] = (next_redux_wrapper__WEBPACK_IMPORTED_MODULE_5___default()(_state__WEBPACK_IMPORTED_MODULE_6__["configStore"])(MyApp));

/***/ }),

/***/ "./state/ducks/authentication/actions.js":
/*!***********************************************!*\
  !*** ./state/ducks/authentication/actions.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./state/ducks/authentication/index.js":
/*!*********************************************!*\
  !*** ./state/ducks/authentication/index.js ***!
  \*********************************************/
/*! exports provided: selectors, services, actions, sagas, types, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducers */ "./state/ducks/authentication/reducers.js");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./selectors */ "./state/ducks/authentication/selectors.js");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_selectors__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "selectors", function() { return _selectors__WEBPACK_IMPORTED_MODULE_1__; });
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services */ "./state/ducks/authentication/services.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_services__WEBPACK_IMPORTED_MODULE_2__);
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "services", function() { return _services__WEBPACK_IMPORTED_MODULE_2__; });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actions */ "./state/ducks/authentication/actions.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_actions__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return _actions__WEBPACK_IMPORTED_MODULE_3__; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./types */ "./state/ducks/authentication/types.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "types", function() { return _types__WEBPACK_IMPORTED_MODULE_4__; });
/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sagas */ "./state/ducks/authentication/sagas.js");
/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_sagas__WEBPACK_IMPORTED_MODULE_5__);
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "sagas", function() { return _sagas__WEBPACK_IMPORTED_MODULE_5__; });







/* harmony default export */ __webpack_exports__["default"] = (_reducers__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./state/ducks/authentication/reducers.js":
/*!************************************************!*\
  !*** ./state/ducks/authentication/reducers.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "immer");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ "./state/ducks/authentication/types.js");


var initialState = {
  user: "",
  loading: false,
  error: ""
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  return immer__WEBPACK_IMPORTED_MODULE_0___default()(state, function (draft) {
    switch (action.type) {
      case _types__WEBPACK_IMPORTED_MODULE_1__["actionType"].USER_LOGIN_REQUEST:
        draft.loading = true;
        draft.error = "";
        return draft;

      case _types__WEBPACK_IMPORTED_MODULE_1__["actionType"].USER_LOGIN_SUCCESS:
        draft.loading = false;
        draft.error = "";
        return draft;

      case _types__WEBPACK_IMPORTED_MODULE_1__["actionType"].USER_LOGIN_FAILURE:
        draft.loading = false, draft.error = action.payload.error;
        return draft;

      case _types__WEBPACK_IMPORTED_MODULE_1__["actionType"].USER_LOGOUT:
        draft.loading = false;
        return draft;

      case _types__WEBPACK_IMPORTED_MODULE_1__["actionType"].USER_CREATE_REQUEST:
        draft.loading = true;
        draft.error = ';';
        return draft;

      case _types__WEBPACK_IMPORTED_MODULE_1__["actionType"].USER_CREATE_SUCCESS:
        draft.loading = false;
        draft.error = '';
        return draft;

      case _types__WEBPACK_IMPORTED_MODULE_1__["actionType"].USER_CREATE_FAILURE:
        draft.loading = false;
        draft.error = action.payload.error;
        return draft;

      case _types__WEBPACK_IMPORTED_MODULE_1__["actionType"].USER_DELETE_REQUEST:
        draft.loading = true;
        draft.error = ';';
        return draft;

      case _types__WEBPACK_IMPORTED_MODULE_1__["actionType"].USER_DELETE_SUCCESS:
        draft.loading = false;
        draft.error = '';
        return draft;

      case _types__WEBPACK_IMPORTED_MODULE_1__["actionType"].USER_DELETE_FAILURE:
        draft.loading = false;
        draft.error = action.payload.error;
        return draft;

      case _types__WEBPACK_IMPORTED_MODULE_1__["actionType"].USER_EDIT_REQUEST:
        draft.loading = true;
        draft.error = "";
        return draft;

      case _types__WEBPACK_IMPORTED_MODULE_1__["actionType"].USER_EDIT_SUCCESS:
        draft.loading = false;
        draft.error = '';
        return draft;

      case _types__WEBPACK_IMPORTED_MODULE_1__["actionType"].USER_EDIT_FAILURE:
        draft.loading = false;
        draft.error = action.payload.error;
        return draft;

      default:
        return state;
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./state/ducks/authentication/sagas.js":
/*!*********************************************!*\
  !*** ./state/ducks/authentication/sagas.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./state/ducks/authentication/selectors.js":
/*!*************************************************!*\
  !*** ./state/ducks/authentication/selectors.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./state/ducks/authentication/services.js":
/*!************************************************!*\
  !*** ./state/ducks/authentication/services.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./state/ducks/authentication/types.js":
/*!*********************************************!*\
  !*** ./state/ducks/authentication/types.js ***!
  \*********************************************/
/*! exports provided: actionType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionType", function() { return actionTypes; });
/**
 * Action constant types
 */
var actionTypes = {
  // Creation request for muster
  USER_LOGIN: "USER_LOGIN",
  USER_LOGOUT: "USER_LOGOUT",
  USER_CREATE: "USER_CREATE",
  USER_DELETE: "USER_DELETE",
  USER_EDIT: "USER_EDIT"
};


/***/ }),

/***/ "./state/index.js":
/*!************************!*\
  !*** ./state/index.js ***!
  \************************/
/*! exports provided: configStore, rootReducer, rootSaga */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rootReducers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rootReducers */ "./state/rootReducers.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rootReducer", function() { return _rootReducers__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _rootSagas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rootSagas */ "./state/rootSagas.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rootSaga", function() { return _rootSagas__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store */ "./state/store.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "configStore", function() { return _store__WEBPACK_IMPORTED_MODULE_2__["default"]; });






/***/ }),

/***/ "./state/rootReducers.js":
/*!*******************************!*\
  !*** ./state/rootReducers.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ducks_authentication__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ducks/authentication */ "./state/ducks/authentication/index.js");


/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  authenticationSaga: _ducks_authentication__WEBPACK_IMPORTED_MODULE_1__["default"]
}));

/***/ }),

/***/ "./state/rootSagas.js":
/*!****************************!*\
  !*** ./state/rootSagas.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__);


var _marked =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(rootSaga);


/**
 * Calls into action all the saga watcher
 */

function rootSaga() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function rootSaga$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([]);

        case 2:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, this);
}

/***/ }),

/***/ "./state/store.js":
/*!************************!*\
  !*** ./state/store.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _rootReducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rootReducers */ "./state/rootReducers.js");
/* harmony import */ var _rootSagas__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rootSagas */ "./state/rootSagas.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }





var sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_2___default()();

var makeStore = function makeStore(initialState) {
  // Make exception for redux dev tools

  /* eslint-disable no-underscore-dangle */

  /* eslint-disable no-undef */
  var composeEnhancers = typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || redux__WEBPACK_IMPORTED_MODULE_1__["compose"];
  /* eslint-enable */

  var store = Object(redux__WEBPACK_IMPORTED_MODULE_1__["createStore"])(_rootReducers__WEBPACK_IMPORTED_MODULE_3__["default"], initialState, composeEnhancers(Object(redux__WEBPACK_IMPORTED_MODULE_1__["applyMiddleware"])(sagaMiddleware)));

  store.runSaga = function () {
    // Avoid running twice
    if (store.saga) return;
    store.saga = sagaMiddleware.run(_rootSagas__WEBPACK_IMPORTED_MODULE_4__["default"]);
  };

  store.stopSaga =
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (store.saga) {
              _context.next = 2;
              break;
            }

            return _context.abrupt("return");

          case 2:
            store.dispatch(redux_saga__WEBPACK_IMPORTED_MODULE_2__["END"]);
            _context.next = 5;
            return store.saga.done;

          case 5:
            store.saga = null;

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  store.execSagaTasks =
  /*#__PURE__*/
  function () {
    var _ref2 = _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(isServer, tasks) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              // run saga
              store.runSaga(); // dispatch saga tasks

              tasks(store.dispatch); // Stop running and wait for the tasks to be done

              _context2.next = 4;
              return store.stopSaga();

            case 4:
              // Re-run on client side
              if (!isServer) {
                store.runSaga();
              }

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    return function (_x, _x2) {
      return _ref2.apply(this, arguments);
    };
  }(); // Initial run


  store.runSaga();
  return store;
};

/* harmony default export */ __webpack_exports__["default"] = (makeStore);

/***/ }),

/***/ 0:
/*!*****************************!*\
  !*** multi ./pages/_app.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "grommet":
/*!**************************!*\
  !*** external "grommet" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("grommet");

/***/ }),

/***/ "immer":
/*!************************!*\
  !*** external "immer" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("immer");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next/app":
/*!***************************!*\
  !*** external "next/app" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/app");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map