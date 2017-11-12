webpackJsonp([0],Array(35).concat([
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function SendButton(props) {
  function handler() {
    if (props.loading) return;
    props.handler();
  }

  return _react2.default.createElement(
    'div',
    { className: 'send', onClick: handler },
    _react2.default.createElement('div', { className: props.loading ? 'loading' : 'loaded' })
  );
}

exports.default = SendButton;

/***/ }),
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// API

var API_URL = exports.API_URL = 'http://api.vacations.cafe:81';

// Members Actions

var GET_AGE_GROUPS = exports.GET_AGE_GROUPS = 'GET_AGE_GROUPS';
var ADD_AGE_GROUPS = exports.ADD_AGE_GROUPS = 'ADD_AGE_GROUPS';
var ADD_LEAD_MEMBER = exports.ADD_LEAD_MEMBER = 'ADD_LEAD_MEMBER';
var ADD_PARTNER = exports.ADD_PARTNER = 'ADD_PARTNER';
var CREATE_TRAVEL_GROUP = exports.CREATE_TRAVEL_GROUP = 'CREATE_TRAVEL_GROUP';
var SET_ACTIVITIES = exports.SET_ACTIVITIES = 'SET_ACTIVITIES';
var ADD_CHILDREN = exports.ADD_CHILDREN = 'ADD_CHILDREN';
var ADD_COUNTRIES = exports.ADD_COUNTRIES = 'ADD_COUNTRIES';
var SET_COUNTRIES = exports.SET_COUNTRIES = 'SET_COUNTRIES';
var SET_BUDGET = exports.SET_BUDGET = 'SET_BUDGET';
var SIGN_UP_SUCCESS = exports.SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
var SIGN_UP_ERROR = exports.SIGN_UP_ERROR = 'SIGN_UP_ERROR';
var LOG_IN_SUCCESS = exports.LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
var LOG_IN_ERROR = exports.LOG_IN_ERROR = 'LOG_IN_ERROR';

// Questions Actions

var NEXT_QUESTION = exports.NEXT_QUESTION = 'NEXT_QUESTION';
var GO_TO_QUESTION = exports.GO_TO_QUESTION = 'GO_TO_QUESTION';
var PREV_QUESTION = exports.PREV_QUESTION = 'PREV_QUESTION';

/***/ }),
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Checkboxes = function Checkboxes(props) {
  return _react2.default.createElement(
    'div',
    { className: 'checkboxes' },
    props.elements.map(function (element) {
      return props.toggleCheckbox ? _react2.default.createElement(
        'div',
        {
          className: 'checkbox ' + (props.activeElements[element._id] ? 'active' : ''),
          key: element._id,
          id: element._id,
          onClick: props.toggleCheckbox
        },
        element.text
      ) : _react2.default.createElement(
        'div',
        {
          className: 'checkbox ' + (props.activeElements[element._id] ? 'active' : ''),
          key: element._id,
          id: element._id
        },
        element.text
      );
    })
  );
};

exports.default = Checkboxes;

/***/ }),
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = warning;
/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */
  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
    /* eslint-disable no-empty */
  } catch (e) {}
  /* eslint-enable no-empty */
}

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.compose = exports.applyMiddleware = exports.bindActionCreators = exports.combineReducers = exports.createStore = undefined;

var _createStore = __webpack_require__(117);

var _createStore2 = _interopRequireDefault(_createStore);

var _combineReducers = __webpack_require__(191);

var _combineReducers2 = _interopRequireDefault(_combineReducers);

var _bindActionCreators = __webpack_require__(192);

var _bindActionCreators2 = _interopRequireDefault(_bindActionCreators);

var _applyMiddleware = __webpack_require__(193);

var _applyMiddleware2 = _interopRequireDefault(_applyMiddleware);

var _compose = __webpack_require__(121);

var _compose2 = _interopRequireDefault(_compose);

var _warning = __webpack_require__(120);

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
* This is a dummy function to check if the function name has been altered by minification.
* If the function has been minified and NODE_ENV !== 'production', warn the user.
*/
function isCrushed() {}

if (process.env.NODE_ENV !== 'production' && typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {
  (0, _warning2.default)('You are currently using minified code outside of NODE_ENV === \'production\'. ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) ' + 'to ensure you have the correct code for your production build.');
}

exports.createStore = _createStore2.default;
exports.combineReducers = _combineReducers2.default;
exports.bindActionCreators = _bindActionCreators2.default;
exports.applyMiddleware = _applyMiddleware2.default;
exports.compose = _compose2.default;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseGetTag = __webpack_require__(180);

var _baseGetTag2 = _interopRequireDefault(_baseGetTag);

var _getPrototype = __webpack_require__(185);

var _getPrototype2 = _interopRequireDefault(_getPrototype);

var _isObjectLike = __webpack_require__(187);

var _isObjectLike2 = _interopRequireDefault(_isObjectLike);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!(0, _isObjectLike2.default)(value) || (0, _baseGetTag2.default)(value) != objectTag) {
    return false;
  }
  var proto = (0, _getPrototype2.default)(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
}

exports.default = isPlainObject;

/***/ }),
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.connect = exports.connectAdvanced = exports.createProvider = exports.Provider = undefined;

var _Provider = __webpack_require__(173);

var _Provider2 = _interopRequireDefault(_Provider);

var _connectAdvanced = __webpack_require__(116);

var _connectAdvanced2 = _interopRequireDefault(_connectAdvanced);

var _connect = __webpack_require__(177);

var _connect2 = _interopRequireDefault(_connect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Provider = _Provider2.default;
exports.createProvider = _Provider.createProvider;
exports.connectAdvanced = _connectAdvanced2.default;
exports.connect = _connect2.default;

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.storeShape = exports.subscriptionShape = undefined;

var _propTypes = __webpack_require__(78);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var subscriptionShape = exports.subscriptionShape = _propTypes2.default.shape({
  trySubscribe: _propTypes2.default.func.isRequired,
  tryUnsubscribe: _propTypes2.default.func.isRequired,
  notifyNestedSubs: _propTypes2.default.func.isRequired,
  isSubscribed: _propTypes2.default.func.isRequired
});

var storeShape = exports.storeShape = _propTypes2.default.shape({
  subscribe: _propTypes2.default.func.isRequired,
  dispatch: _propTypes2.default.func.isRequired,
  getState: _propTypes2.default.func.isRequired
});

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = connectAdvanced;

var _hoistNonReactStatics = __webpack_require__(174);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _invariant = __webpack_require__(175);

var _invariant2 = _interopRequireDefault(_invariant);

var _react = __webpack_require__(6);

var _Subscription = __webpack_require__(176);

var _Subscription2 = _interopRequireDefault(_Subscription);

var _PropTypes = __webpack_require__(115);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

function _objectWithoutProperties(obj, keys) {
  var target = {};for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
  }return target;
}

var hotReloadingVersion = 0;
var dummyState = {};
function noop() {}
function makeSelectorStateful(sourceSelector, store) {
  // wrap the selector in an object that tracks its results between runs.
  var selector = {
    run: function runComponentSelector(props) {
      try {
        var nextProps = sourceSelector(store.getState(), props);
        if (nextProps !== selector.props || selector.error) {
          selector.shouldComponentUpdate = true;
          selector.props = nextProps;
          selector.error = null;
        }
      } catch (error) {
        selector.shouldComponentUpdate = true;
        selector.error = error;
      }
    }
  };

  return selector;
}

function connectAdvanced(
/*
  selectorFactory is a func that is responsible for returning the selector function used to
  compute new props from state, props, and dispatch. For example:
     export default connectAdvanced((dispatch, options) => (state, props) => ({
      thing: state.things[props.thingId],
      saveThing: fields => dispatch(actionCreators.saveThing(props.thingId, fields)),
    }))(YourComponent)
   Access to dispatch is provided to the factory so selectorFactories can bind actionCreators
  outside of their selector as an optimization. Options passed to connectAdvanced are passed to
  the selectorFactory, along with displayName and WrappedComponent, as the second argument.
   Note that selectorFactory is responsible for all caching/memoization of inbound and outbound
  props. Do not use connectAdvanced directly without memoizing results between calls to your
  selector, otherwise the Connect component will re-render on every state or props change.
*/
selectorFactory) {
  var _contextTypes, _childContextTypes;

  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$getDisplayName = _ref.getDisplayName,
      getDisplayName = _ref$getDisplayName === undefined ? function (name) {
    return 'ConnectAdvanced(' + name + ')';
  } : _ref$getDisplayName,
      _ref$methodName = _ref.methodName,
      methodName = _ref$methodName === undefined ? 'connectAdvanced' : _ref$methodName,
      _ref$renderCountProp = _ref.renderCountProp,
      renderCountProp = _ref$renderCountProp === undefined ? undefined : _ref$renderCountProp,
      _ref$shouldHandleStat = _ref.shouldHandleStateChanges,
      shouldHandleStateChanges = _ref$shouldHandleStat === undefined ? true : _ref$shouldHandleStat,
      _ref$storeKey = _ref.storeKey,
      storeKey = _ref$storeKey === undefined ? 'store' : _ref$storeKey,
      _ref$withRef = _ref.withRef,
      withRef = _ref$withRef === undefined ? false : _ref$withRef,
      connectOptions = _objectWithoutProperties(_ref, ['getDisplayName', 'methodName', 'renderCountProp', 'shouldHandleStateChanges', 'storeKey', 'withRef']);

  var subscriptionKey = storeKey + 'Subscription';
  var version = hotReloadingVersion++;

  var contextTypes = (_contextTypes = {}, _contextTypes[storeKey] = _PropTypes.storeShape, _contextTypes[subscriptionKey] = _PropTypes.subscriptionShape, _contextTypes);
  var childContextTypes = (_childContextTypes = {}, _childContextTypes[subscriptionKey] = _PropTypes.subscriptionShape, _childContextTypes);

  return function wrapWithConnect(WrappedComponent) {
    (0, _invariant2.default)(typeof WrappedComponent == 'function', 'You must pass a component to the function returned by ' + ('connect. Instead received ' + JSON.stringify(WrappedComponent)));

    var wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';

    var displayName = getDisplayName(wrappedComponentName);

    var selectorFactoryOptions = _extends({}, connectOptions, {
      getDisplayName: getDisplayName,
      methodName: methodName,
      renderCountProp: renderCountProp,
      shouldHandleStateChanges: shouldHandleStateChanges,
      storeKey: storeKey,
      withRef: withRef,
      displayName: displayName,
      wrappedComponentName: wrappedComponentName,
      WrappedComponent: WrappedComponent
    });

    var Connect = function (_Component) {
      _inherits(Connect, _Component);

      function Connect(props, context) {
        _classCallCheck(this, Connect);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

        _this.version = version;
        _this.state = {};
        _this.renderCount = 0;
        _this.store = props[storeKey] || context[storeKey];
        _this.propsMode = Boolean(props[storeKey]);
        _this.setWrappedInstance = _this.setWrappedInstance.bind(_this);

        (0, _invariant2.default)(_this.store, 'Could not find "' + storeKey + '" in either the context or props of ' + ('"' + displayName + '". Either wrap the root component in a <Provider>, ') + ('or explicitly pass "' + storeKey + '" as a prop to "' + displayName + '".'));

        _this.initSelector();
        _this.initSubscription();
        return _this;
      }

      Connect.prototype.getChildContext = function getChildContext() {
        var _ref2;

        // If this component received store from props, its subscription should be transparent
        // to any descendants receiving store+subscription from context; it passes along
        // subscription passed to it. Otherwise, it shadows the parent subscription, which allows
        // Connect to control ordering of notifications to flow top-down.
        var subscription = this.propsMode ? null : this.subscription;
        return _ref2 = {}, _ref2[subscriptionKey] = subscription || this.context[subscriptionKey], _ref2;
      };

      Connect.prototype.componentDidMount = function componentDidMount() {
        if (!shouldHandleStateChanges) return;

        // componentWillMount fires during server side rendering, but componentDidMount and
        // componentWillUnmount do not. Because of this, trySubscribe happens during ...didMount.
        // Otherwise, unsubscription would never take place during SSR, causing a memory leak.
        // To handle the case where a child component may have triggered a state change by
        // dispatching an action in its componentWillMount, we have to re-run the select and maybe
        // re-render.
        this.subscription.trySubscribe();
        this.selector.run(this.props);
        if (this.selector.shouldComponentUpdate) this.forceUpdate();
      };

      Connect.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        this.selector.run(nextProps);
      };

      Connect.prototype.shouldComponentUpdate = function shouldComponentUpdate() {
        return this.selector.shouldComponentUpdate;
      };

      Connect.prototype.componentWillUnmount = function componentWillUnmount() {
        if (this.subscription) this.subscription.tryUnsubscribe();
        this.subscription = null;
        this.notifyNestedSubs = noop;
        this.store = null;
        this.selector.run = noop;
        this.selector.shouldComponentUpdate = false;
      };

      Connect.prototype.getWrappedInstance = function getWrappedInstance() {
        (0, _invariant2.default)(withRef, 'To access the wrapped instance, you need to specify ' + ('{ withRef: true } in the options argument of the ' + methodName + '() call.'));
        return this.wrappedInstance;
      };

      Connect.prototype.setWrappedInstance = function setWrappedInstance(ref) {
        this.wrappedInstance = ref;
      };

      Connect.prototype.initSelector = function initSelector() {
        var sourceSelector = selectorFactory(this.store.dispatch, selectorFactoryOptions);
        this.selector = makeSelectorStateful(sourceSelector, this.store);
        this.selector.run(this.props);
      };

      Connect.prototype.initSubscription = function initSubscription() {
        if (!shouldHandleStateChanges) return;

        // parentSub's source should match where store came from: props vs. context. A component
        // connected to the store via props shouldn't use subscription from context, or vice versa.
        var parentSub = (this.propsMode ? this.props : this.context)[subscriptionKey];
        this.subscription = new _Subscription2.default(this.store, parentSub, this.onStateChange.bind(this));

        // `notifyNestedSubs` is duplicated to handle the case where the component is  unmounted in
        // the middle of the notification loop, where `this.subscription` will then be null. An
        // extra null check every change can be avoided by copying the method onto `this` and then
        // replacing it with a no-op on unmount. This can probably be avoided if Subscription's
        // listeners logic is changed to not call listeners that have been unsubscribed in the
        // middle of the notification loop.
        this.notifyNestedSubs = this.subscription.notifyNestedSubs.bind(this.subscription);
      };

      Connect.prototype.onStateChange = function onStateChange() {
        this.selector.run(this.props);

        if (!this.selector.shouldComponentUpdate) {
          this.notifyNestedSubs();
        } else {
          this.componentDidUpdate = this.notifyNestedSubsOnComponentDidUpdate;
          this.setState(dummyState);
        }
      };

      Connect.prototype.notifyNestedSubsOnComponentDidUpdate = function notifyNestedSubsOnComponentDidUpdate() {
        // `componentDidUpdate` is conditionally implemented when `onStateChange` determines it
        // needs to notify nested subs. Once called, it unimplements itself until further state
        // changes occur. Doing it this way vs having a permanent `componentDidUpdate` that does
        // a boolean check every time avoids an extra method call most of the time, resulting
        // in some perf boost.
        this.componentDidUpdate = undefined;
        this.notifyNestedSubs();
      };

      Connect.prototype.isSubscribed = function isSubscribed() {
        return Boolean(this.subscription) && this.subscription.isSubscribed();
      };

      Connect.prototype.addExtraProps = function addExtraProps(props) {
        if (!withRef && !renderCountProp && !(this.propsMode && this.subscription)) return props;
        // make a shallow copy so that fields added don't leak to the original selector.
        // this is especially important for 'ref' since that's a reference back to the component
        // instance. a singleton memoized selector would then be holding a reference to the
        // instance, preventing the instance from being garbage collected, and that would be bad
        var withExtras = _extends({}, props);
        if (withRef) withExtras.ref = this.setWrappedInstance;
        if (renderCountProp) withExtras[renderCountProp] = this.renderCount++;
        if (this.propsMode && this.subscription) withExtras[subscriptionKey] = this.subscription;
        return withExtras;
      };

      Connect.prototype.render = function render() {
        var selector = this.selector;
        selector.shouldComponentUpdate = false;

        if (selector.error) {
          throw selector.error;
        } else {
          return (0, _react.createElement)(WrappedComponent, this.addExtraProps(selector.props));
        }
      };

      return Connect;
    }(_react.Component);

    Connect.WrappedComponent = WrappedComponent;
    Connect.displayName = displayName;
    Connect.childContextTypes = childContextTypes;
    Connect.contextTypes = contextTypes;
    Connect.propTypes = contextTypes;

    if (process.env.NODE_ENV !== 'production') {
      Connect.prototype.componentWillUpdate = function componentWillUpdate() {
        var _this2 = this;

        // We are hot reloading!
        if (this.version !== version) {
          this.version = version;
          this.initSelector();

          // If any connected descendants don't hot reload (and resubscribe in the process), their
          // listeners will be lost when we unsubscribe. Unfortunately, by copying over all
          // listeners, this does mean that the old versions of connected descendants will still be
          // notified of state changes; however, their onStateChange function is a no-op so this
          // isn't a huge deal.
          var oldListeners = [];

          if (this.subscription) {
            oldListeners = this.subscription.listeners.get();
            this.subscription.tryUnsubscribe();
          }
          this.initSubscription();
          if (shouldHandleStateChanges) {
            this.subscription.trySubscribe();
            oldListeners.forEach(function (listener) {
              return _this2.subscription.listeners.subscribe(listener);
            });
          }
        }
      };
    }

    return (0, _hoistNonReactStatics2.default)(Connect, WrappedComponent);
  };
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ActionTypes = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = createStore;

var _isPlainObject = __webpack_require__(81);

var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

var _symbolObservable = __webpack_require__(188);

var _symbolObservable2 = _interopRequireDefault(_symbolObservable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
var ActionTypes = exports.ActionTypes = {
  INIT: '@@redux/INIT'

  /**
   * Creates a Redux store that holds the state tree.
   * The only way to change the data in the store is to call `dispatch()` on it.
   *
   * There should only be a single store in your app. To specify how different
   * parts of the state tree respond to actions, you may combine several reducers
   * into a single reducer function by using `combineReducers`.
   *
   * @param {Function} reducer A function that returns the next state tree, given
   * the current state tree and the action to handle.
   *
   * @param {any} [preloadedState] The initial state. You may optionally specify it
   * to hydrate the state from the server in universal apps, or to restore a
   * previously serialized user session.
   * If you use `combineReducers` to produce the root reducer function, this must be
   * an object with the same shape as `combineReducers` keys.
   *
   * @param {Function} [enhancer] The store enhancer. You may optionally specify it
   * to enhance the store with third-party capabilities such as middleware,
   * time travel, persistence, etc. The only store enhancer that ships with Redux
   * is `applyMiddleware()`.
   *
   * @returns {Store} A Redux store that lets you read the state, dispatch actions
   * and subscribe to changes.
   */
};function createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error('Expected the enhancer to be a function.');
    }

    return enhancer(createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error('Expected the reducer to be a function.');
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }

  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */
  function getState() {
    return currentState;
  }

  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */
  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error('Expected listener to be a function.');
    }

    var isSubscribed = true;

    ensureCanMutateNextListeners();
    nextListeners.push(listener);

    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      isSubscribed = false;

      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
    };
  }

  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */
  function dispatch(action) {
    if (!(0, _isPlainObject2.default)(action)) {
      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
    }

    if (typeof action.type === 'undefined') {
      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
    }

    if (isDispatching) {
      throw new Error('Reducers may not dispatch actions.');
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;
    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }

    return action;
  }

  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */
  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error('Expected the nextReducer to be a function.');
    }

    currentReducer = nextReducer;
    dispatch({ type: ActionTypes.INIT });
  }

  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */
  function observable() {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe(observer) {
        if ((typeof observer === 'undefined' ? 'undefined' : _typeof(observer)) !== 'object') {
          throw new TypeError('Expected the observer to be an object.');
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return { unsubscribe: unsubscribe };
      }
    }, _ref[_symbolObservable2.default] = function () {
      return this;
    }, _ref;
  }

  // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.
  dispatch({ type: ActionTypes.INIT });

  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[_symbolObservable2.default] = observable, _ref2;
}

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _root = __webpack_require__(181);

var _root2 = _interopRequireDefault(_root);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Built-in value references. */
var _Symbol = _root2.default.Symbol;

exports.default = _Symbol;

/***/ }),
/* 119 */,
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = warning;
/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */
  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
    /* eslint-disable no-empty */
  } catch (e) {}
  /* eslint-enable no-empty */
}

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = compose;
/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */

function compose() {
  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(undefined, arguments));
    };
  });
}

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.wrapMapToPropsConstant = wrapMapToPropsConstant;
exports.getDependsOnOwnProps = getDependsOnOwnProps;
exports.wrapMapToPropsFunc = wrapMapToPropsFunc;

var _verifyPlainObject = __webpack_require__(123);

var _verifyPlainObject2 = _interopRequireDefault(_verifyPlainObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function wrapMapToPropsConstant(getConstant) {
  return function initConstantSelector(dispatch, options) {
    var constant = getConstant(dispatch, options);

    function constantSelector() {
      return constant;
    }
    constantSelector.dependsOnOwnProps = false;
    return constantSelector;
  };
}

// dependsOnOwnProps is used by createMapToPropsProxy to determine whether to pass props as args
// to the mapToProps function being wrapped. It is also used by makePurePropsSelector to determine
// whether mapToProps needs to be invoked when props have changed.
// 
// A length of one signals that mapToProps does not depend on props from the parent component.
// A length of zero is assumed to mean mapToProps is getting args via arguments or ...args and
// therefore not reporting its length accurately..
function getDependsOnOwnProps(mapToProps) {
  return mapToProps.dependsOnOwnProps !== null && mapToProps.dependsOnOwnProps !== undefined ? Boolean(mapToProps.dependsOnOwnProps) : mapToProps.length !== 1;
}

// Used by whenMapStateToPropsIsFunction and whenMapDispatchToPropsIsFunction,
// this function wraps mapToProps in a proxy function which does several things:
// 
//  * Detects whether the mapToProps function being called depends on props, which
//    is used by selectorFactory to decide if it should reinvoke on props changes.
//    
//  * On first call, handles mapToProps if returns another function, and treats that
//    new function as the true mapToProps for subsequent calls.
//    
//  * On first call, verifies the first result is a plain object, in order to warn
//    the developer that their mapToProps function is not returning a valid result.
//    
function wrapMapToPropsFunc(mapToProps, methodName) {
  return function initProxySelector(dispatch, _ref) {
    var displayName = _ref.displayName;

    var proxy = function mapToPropsProxy(stateOrDispatch, ownProps) {
      return proxy.dependsOnOwnProps ? proxy.mapToProps(stateOrDispatch, ownProps) : proxy.mapToProps(stateOrDispatch);
    };

    // allow detectFactoryAndVerify to get ownProps
    proxy.dependsOnOwnProps = true;

    proxy.mapToProps = function detectFactoryAndVerify(stateOrDispatch, ownProps) {
      proxy.mapToProps = mapToProps;
      proxy.dependsOnOwnProps = getDependsOnOwnProps(mapToProps);
      var props = proxy(stateOrDispatch, ownProps);

      if (typeof props === 'function') {
        proxy.mapToProps = props;
        proxy.dependsOnOwnProps = getDependsOnOwnProps(props);
        props = proxy(stateOrDispatch, ownProps);
      }

      if (process.env.NODE_ENV !== 'production') (0, _verifyPlainObject2.default)(props, displayName, methodName);

      return props;
    };

    return proxy;
  };
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = verifyPlainObject;

var _isPlainObject = __webpack_require__(81);

var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

var _warning = __webpack_require__(79);

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function verifyPlainObject(value, displayName, methodName) {
  if (!(0, _isPlainObject2.default)(value)) {
    (0, _warning2.default)(methodName + '() in ' + displayName + ' must return a plain object. Instead received ' + value + '.');
  }
}

/***/ }),
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(108);

var _reactRedux = __webpack_require__(114);

var _App = __webpack_require__(198);

var _App2 = _interopRequireDefault(_App);

var _store = __webpack_require__(221);

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Main = function (_Component) {
  _inherits(Main, _Component);

  function Main() {
    _classCallCheck(this, Main);

    return _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).apply(this, arguments));
  }

  _createClass(Main, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactRedux.Provider,
        { store: _store2.default },
        _react2.default.createElement(_App2.default, null)
      );
    }
  }]);

  return Main;
}(_react.Component);

(0, _reactDom.render)(_react2.default.createElement(Main, null), document.getElementById('root'));

/***/ }),
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.createProvider = createProvider;

var _react = __webpack_require__(6);

var _propTypes = __webpack_require__(78);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _PropTypes = __webpack_require__(115);

var _warning = __webpack_require__(79);

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var didWarnAboutReceivingStore = false;
function warnAboutReceivingStore() {
  if (didWarnAboutReceivingStore) {
    return;
  }
  didWarnAboutReceivingStore = true;

  (0, _warning2.default)('<Provider> does not support changing `store` on the fly. ' + 'It is most likely that you see this error because you updated to ' + 'Redux 2.x and React Redux 2.x which no longer hot reload reducers ' + 'automatically. See https://github.com/reactjs/react-redux/releases/' + 'tag/v2.0.0 for the migration instructions.');
}

function createProvider() {
  var _Provider$childContex;

  var storeKey = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'store';
  var subKey = arguments[1];

  var subscriptionKey = subKey || storeKey + 'Subscription';

  var Provider = function (_Component) {
    _inherits(Provider, _Component);

    Provider.prototype.getChildContext = function getChildContext() {
      var _ref;

      return _ref = {}, _ref[storeKey] = this[storeKey], _ref[subscriptionKey] = null, _ref;
    };

    function Provider(props, context) {
      _classCallCheck(this, Provider);

      var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

      _this[storeKey] = props.store;
      return _this;
    }

    Provider.prototype.render = function render() {
      return _react.Children.only(this.props.children);
    };

    return Provider;
  }(_react.Component);

  if (process.env.NODE_ENV !== 'production') {
    Provider.prototype.componentWillReceiveProps = function (nextProps) {
      if (this[storeKey] !== nextProps.store) {
        warnAboutReceivingStore();
      }
    };
  }

  Provider.propTypes = {
    store: _PropTypes.storeShape.isRequired,
    children: _propTypes2.default.element.isRequired
  };
  Provider.childContextTypes = (_Provider$childContex = {}, _Provider$childContex[storeKey] = _PropTypes.storeShape.isRequired, _Provider$childContex[subscriptionKey] = _PropTypes.subscriptionShape, _Provider$childContex);

  return Provider;
}

exports.default = createProvider();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */


var REACT_STATICS = {
    childContextTypes: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    mixins: true,
    propTypes: true,
    type: true
};

var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    callee: true,
    arguments: true,
    arity: true
};

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = getPrototypeOf && getPrototypeOf(Object);

module.exports = function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
    if (typeof sourceComponent !== 'string') {
        // don't hoist over string (html) components

        if (objectPrototype) {
            var inheritedComponent = getPrototypeOf(sourceComponent);
            if (inheritedComponent && inheritedComponent !== objectPrototype) {
                hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
            }
        }

        var keys = getOwnPropertyNames(sourceComponent);

        if (getOwnPropertySymbols) {
            keys = keys.concat(getOwnPropertySymbols(sourceComponent));
        }

        for (var i = 0; i < keys.length; ++i) {
            var key = keys[i];
            if (!REACT_STATICS[key] && !KNOWN_STATICS[key] && (!blacklist || !blacklist[key])) {
                var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
                try {
                    // Avoid failures from read-only properties
                    defineProperty(targetComponent, key, descriptor);
                } catch (e) {}
            }
        }

        return targetComponent;
    }

    return targetComponent;
};

/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function invariant(condition, format, a, b, c, d, e, f) {
  if (process.env.NODE_ENV !== 'production') {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

// encapsulates the subscription logic for connecting a component to the redux store, as
// well as nesting subscriptions of descendant components, so that we can ensure the
// ancestor components re-render before descendants

var CLEARED = null;
var nullListeners = {
  notify: function notify() {}
};

function createListenerCollection() {
  // the current/next pattern is copied from redux's createStore code.
  // TODO: refactor+expose that code to be reusable here?
  var current = [];
  var next = [];

  return {
    clear: function clear() {
      next = CLEARED;
      current = CLEARED;
    },
    notify: function notify() {
      var listeners = current = next;
      for (var i = 0; i < listeners.length; i++) {
        listeners[i]();
      }
    },
    get: function get() {
      return next;
    },
    subscribe: function subscribe(listener) {
      var isSubscribed = true;
      if (next === current) next = current.slice();
      next.push(listener);

      return function unsubscribe() {
        if (!isSubscribed || current === CLEARED) return;
        isSubscribed = false;

        if (next === current) next = current.slice();
        next.splice(next.indexOf(listener), 1);
      };
    }
  };
}

var Subscription = function () {
  function Subscription(store, parentSub, onStateChange) {
    _classCallCheck(this, Subscription);

    this.store = store;
    this.parentSub = parentSub;
    this.onStateChange = onStateChange;
    this.unsubscribe = null;
    this.listeners = nullListeners;
  }

  Subscription.prototype.addNestedSub = function addNestedSub(listener) {
    this.trySubscribe();
    return this.listeners.subscribe(listener);
  };

  Subscription.prototype.notifyNestedSubs = function notifyNestedSubs() {
    this.listeners.notify();
  };

  Subscription.prototype.isSubscribed = function isSubscribed() {
    return Boolean(this.unsubscribe);
  };

  Subscription.prototype.trySubscribe = function trySubscribe() {
    if (!this.unsubscribe) {
      this.unsubscribe = this.parentSub ? this.parentSub.addNestedSub(this.onStateChange) : this.store.subscribe(this.onStateChange);

      this.listeners = createListenerCollection();
    }
  };

  Subscription.prototype.tryUnsubscribe = function tryUnsubscribe() {
    if (this.unsubscribe) {
      this.unsubscribe();
      this.unsubscribe = null;
      this.listeners.clear();
      this.listeners = nullListeners;
    }
  };

  return Subscription;
}();

exports.default = Subscription;

/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.createConnect = createConnect;

var _connectAdvanced = __webpack_require__(116);

var _connectAdvanced2 = _interopRequireDefault(_connectAdvanced);

var _shallowEqual = __webpack_require__(178);

var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

var _mapDispatchToProps = __webpack_require__(179);

var _mapDispatchToProps2 = _interopRequireDefault(_mapDispatchToProps);

var _mapStateToProps = __webpack_require__(194);

var _mapStateToProps2 = _interopRequireDefault(_mapStateToProps);

var _mergeProps = __webpack_require__(195);

var _mergeProps2 = _interopRequireDefault(_mergeProps);

var _selectorFactory = __webpack_require__(196);

var _selectorFactory2 = _interopRequireDefault(_selectorFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

function _objectWithoutProperties(obj, keys) {
  var target = {};for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
  }return target;
}

/*
  connect is a facade over connectAdvanced. It turns its args into a compatible
  selectorFactory, which has the signature:

    (dispatch, options) => (nextState, nextOwnProps) => nextFinalProps
  
  connect passes its args to connectAdvanced as options, which will in turn pass them to
  selectorFactory each time a Connect component instance is instantiated or hot reloaded.

  selectorFactory returns a final props selector from its mapStateToProps,
  mapStateToPropsFactories, mapDispatchToProps, mapDispatchToPropsFactories, mergeProps,
  mergePropsFactories, and pure args.

  The resulting final props selector is called by the Connect component instance whenever
  it receives new props or store state.
 */

function match(arg, factories, name) {
  for (var i = factories.length - 1; i >= 0; i--) {
    var result = factories[i](arg);
    if (result) return result;
  }

  return function (dispatch, options) {
    throw new Error('Invalid value of type ' + (typeof arg === 'undefined' ? 'undefined' : _typeof(arg)) + ' for ' + name + ' argument when connecting component ' + options.wrappedComponentName + '.');
  };
}

function strictEqual(a, b) {
  return a === b;
}

// createConnect with default args builds the 'official' connect behavior. Calling it with
// different options opens up some testing and extensibility scenarios
function createConnect() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$connectHOC = _ref.connectHOC,
      connectHOC = _ref$connectHOC === undefined ? _connectAdvanced2.default : _ref$connectHOC,
      _ref$mapStateToPropsF = _ref.mapStateToPropsFactories,
      mapStateToPropsFactories = _ref$mapStateToPropsF === undefined ? _mapStateToProps2.default : _ref$mapStateToPropsF,
      _ref$mapDispatchToPro = _ref.mapDispatchToPropsFactories,
      mapDispatchToPropsFactories = _ref$mapDispatchToPro === undefined ? _mapDispatchToProps2.default : _ref$mapDispatchToPro,
      _ref$mergePropsFactor = _ref.mergePropsFactories,
      mergePropsFactories = _ref$mergePropsFactor === undefined ? _mergeProps2.default : _ref$mergePropsFactor,
      _ref$selectorFactory = _ref.selectorFactory,
      selectorFactory = _ref$selectorFactory === undefined ? _selectorFactory2.default : _ref$selectorFactory;

  return function connect(mapStateToProps, mapDispatchToProps, mergeProps) {
    var _ref2 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {},
        _ref2$pure = _ref2.pure,
        pure = _ref2$pure === undefined ? true : _ref2$pure,
        _ref2$areStatesEqual = _ref2.areStatesEqual,
        areStatesEqual = _ref2$areStatesEqual === undefined ? strictEqual : _ref2$areStatesEqual,
        _ref2$areOwnPropsEqua = _ref2.areOwnPropsEqual,
        areOwnPropsEqual = _ref2$areOwnPropsEqua === undefined ? _shallowEqual2.default : _ref2$areOwnPropsEqua,
        _ref2$areStatePropsEq = _ref2.areStatePropsEqual,
        areStatePropsEqual = _ref2$areStatePropsEq === undefined ? _shallowEqual2.default : _ref2$areStatePropsEq,
        _ref2$areMergedPropsE = _ref2.areMergedPropsEqual,
        areMergedPropsEqual = _ref2$areMergedPropsE === undefined ? _shallowEqual2.default : _ref2$areMergedPropsE,
        extraOptions = _objectWithoutProperties(_ref2, ['pure', 'areStatesEqual', 'areOwnPropsEqual', 'areStatePropsEqual', 'areMergedPropsEqual']);

    var initMapStateToProps = match(mapStateToProps, mapStateToPropsFactories, 'mapStateToProps');
    var initMapDispatchToProps = match(mapDispatchToProps, mapDispatchToPropsFactories, 'mapDispatchToProps');
    var initMergeProps = match(mergeProps, mergePropsFactories, 'mergeProps');

    return connectHOC(selectorFactory, _extends({
      // used in error messages
      methodName: 'connect',

      // used to compute Connect's displayName from the wrapped component's displayName.
      getDisplayName: function getDisplayName(name) {
        return 'Connect(' + name + ')';
      },

      // if mapStateToProps is falsy, the Connect component doesn't subscribe to store state changes
      shouldHandleStateChanges: Boolean(mapStateToProps),

      // passed through to selectorFactory
      initMapStateToProps: initMapStateToProps,
      initMapDispatchToProps: initMapDispatchToProps,
      initMergeProps: initMergeProps,
      pure: pure,
      areStatesEqual: areStatesEqual,
      areOwnPropsEqual: areOwnPropsEqual,
      areStatePropsEqual: areStatePropsEqual,
      areMergedPropsEqual: areMergedPropsEqual

    }, extraOptions));
  };
}

exports.default = createConnect();

/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = shallowEqual;
var hasOwn = Object.prototype.hasOwnProperty;

function is(x, y) {
  if (x === y) {
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}

function shallowEqual(objA, objB) {
  if (is(objA, objB)) return true;

  if ((typeof objA === 'undefined' ? 'undefined' : _typeof(objA)) !== 'object' || objA === null || (typeof objB === 'undefined' ? 'undefined' : _typeof(objB)) !== 'object' || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) return false;

  for (var i = 0; i < keysA.length; i++) {
    if (!hasOwn.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}

/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.whenMapDispatchToPropsIsFunction = whenMapDispatchToPropsIsFunction;
exports.whenMapDispatchToPropsIsMissing = whenMapDispatchToPropsIsMissing;
exports.whenMapDispatchToPropsIsObject = whenMapDispatchToPropsIsObject;

var _redux = __webpack_require__(80);

var _wrapMapToProps = __webpack_require__(122);

function whenMapDispatchToPropsIsFunction(mapDispatchToProps) {
  return typeof mapDispatchToProps === 'function' ? (0, _wrapMapToProps.wrapMapToPropsFunc)(mapDispatchToProps, 'mapDispatchToProps') : undefined;
}

function whenMapDispatchToPropsIsMissing(mapDispatchToProps) {
  return !mapDispatchToProps ? (0, _wrapMapToProps.wrapMapToPropsConstant)(function (dispatch) {
    return { dispatch: dispatch };
  }) : undefined;
}

function whenMapDispatchToPropsIsObject(mapDispatchToProps) {
  return mapDispatchToProps && (typeof mapDispatchToProps === 'undefined' ? 'undefined' : _typeof(mapDispatchToProps)) === 'object' ? (0, _wrapMapToProps.wrapMapToPropsConstant)(function (dispatch) {
    return (0, _redux.bindActionCreators)(mapDispatchToProps, dispatch);
  }) : undefined;
}

exports.default = [whenMapDispatchToPropsIsFunction, whenMapDispatchToPropsIsMissing, whenMapDispatchToPropsIsObject];

/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Symbol2 = __webpack_require__(118);

var _Symbol3 = _interopRequireDefault(_Symbol2);

var _getRawTag = __webpack_require__(183);

var _getRawTag2 = _interopRequireDefault(_getRawTag);

var _objectToString = __webpack_require__(184);

var _objectToString2 = _interopRequireDefault(_objectToString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = _Symbol3.default ? _Symbol3.default.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return symToStringTag && symToStringTag in Object(value) ? (0, _getRawTag2.default)(value) : (0, _objectToString2.default)(value);
}

exports.default = baseGetTag;

/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _freeGlobal = __webpack_require__(182);

var _freeGlobal2 = _interopRequireDefault(_freeGlobal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Detect free variable `self`. */
var freeSelf = (typeof self === 'undefined' ? 'undefined' : _typeof(self)) == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = _freeGlobal2.default || freeSelf || Function('return this')();

exports.default = root;

/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/** Detect free variable `global` from Node.js. */
var freeGlobal = (typeof global === 'undefined' ? 'undefined' : _typeof(global)) == 'object' && global && global.Object === Object && global;

exports.default = freeGlobal;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(47)))

/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Symbol2 = __webpack_require__(118);

var _Symbol3 = _interopRequireDefault(_Symbol2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = _Symbol3.default ? _Symbol3.default.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

exports.default = getRawTag;

/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

exports.default = objectToString;

/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _overArg = __webpack_require__(186);

var _overArg2 = _interopRequireDefault(_overArg);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Built-in value references. */
var getPrototype = (0, _overArg2.default)(Object.getPrototypeOf, Object);

exports.default = getPrototype;

/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function (arg) {
    return func(transform(arg));
  };
}

exports.default = overArg;

/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'object';
}

exports.default = isObjectLike;

/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(189);

/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ponyfill = __webpack_require__(190);

var _ponyfill2 = _interopRequireDefault(_ponyfill);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { 'default': obj };
}

var root; /* global window */

if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof global !== 'undefined') {
  root = global;
} else if (true) {
  root = module;
} else {
  root = Function('return this')();
}

var result = (0, _ponyfill2['default'])(root);
exports['default'] = result;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(47), __webpack_require__(119)(module)))

/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports['default'] = symbolObservablePonyfill;
function symbolObservablePonyfill(root) {
	var result;
	var _Symbol = root.Symbol;

	if (typeof _Symbol === 'function') {
		if (_Symbol.observable) {
			result = _Symbol.observable;
		} else {
			result = _Symbol('observable');
			_Symbol.observable = result;
		}
	} else {
		result = '@@observable';
	}

	return result;
};

/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = combineReducers;

var _createStore = __webpack_require__(117);

var _isPlainObject = __webpack_require__(81);

var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

var _warning = __webpack_require__(120);

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getUndefinedStateErrorMessage(key, action) {
  var actionType = action && action.type;
  var actionName = actionType && '"' + actionType.toString() + '"' || 'an action';

  return 'Given action ' + actionName + ', reducer "' + key + '" returned undefined. ' + 'To ignore an action, you must explicitly return the previous state. ' + 'If you want this reducer to hold no value, you can return null instead of undefined.';
}

function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
  var reducerKeys = Object.keys(reducers);
  var argumentName = action && action.type === _createStore.ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

  if (reducerKeys.length === 0) {
    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
  }

  if (!(0, _isPlainObject2.default)(inputState)) {
    return 'The ' + argumentName + ' has unexpected type of "' + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + '". Expected argument to be an object with the following ' + ('keys: "' + reducerKeys.join('", "') + '"');
  }

  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
  });

  unexpectedKeys.forEach(function (key) {
    unexpectedKeyCache[key] = true;
  });

  if (unexpectedKeys.length > 0) {
    return 'Unexpected ' + (unexpectedKeys.length > 1 ? 'keys' : 'key') + ' ' + ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + '. ') + 'Expected to find one of the known reducer keys instead: ' + ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.');
  }
}

function assertReducerShape(reducers) {
  Object.keys(reducers).forEach(function (key) {
    var reducer = reducers[key];
    var initialState = reducer(undefined, { type: _createStore.ActionTypes.INIT });

    if (typeof initialState === 'undefined') {
      throw new Error('Reducer "' + key + '" returned undefined during initialization. ' + 'If the state passed to the reducer is undefined, you must ' + 'explicitly return the initial state. The initial state may ' + 'not be undefined. If you don\'t want to set a value for this reducer, ' + 'you can use null instead of undefined.');
    }

    var type = '@@redux/PROBE_UNKNOWN_ACTION_' + Math.random().toString(36).substring(7).split('').join('.');
    if (typeof reducer(undefined, { type: type }) === 'undefined') {
      throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ('Don\'t try to handle ' + _createStore.ActionTypes.INIT + ' or other actions in "redux/*" ') + 'namespace. They are considered private. Instead, you must return the ' + 'current state for any unknown actions, unless it is undefined, ' + 'in which case you must return the initial state, regardless of the ' + 'action type. The initial state may not be undefined, but can be null.');
    }
  });
}

/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */
function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};
  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];

    if (process.env.NODE_ENV !== 'production') {
      if (typeof reducers[key] === 'undefined') {
        (0, _warning2.default)('No reducer provided for key "' + key + '"');
      }
    }

    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }
  var finalReducerKeys = Object.keys(finalReducers);

  var unexpectedKeyCache = void 0;
  if (process.env.NODE_ENV !== 'production') {
    unexpectedKeyCache = {};
  }

  var shapeAssertionError = void 0;
  try {
    assertReducerShape(finalReducers);
  } catch (e) {
    shapeAssertionError = e;
  }

  return function combination() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments[1];

    if (shapeAssertionError) {
      throw shapeAssertionError;
    }

    if (process.env.NODE_ENV !== 'production') {
      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);
      if (warningMessage) {
        (0, _warning2.default)(warningMessage);
      }
    }

    var hasChanged = false;
    var nextState = {};
    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
      var _key = finalReducerKeys[_i];
      var reducer = finalReducers[_key];
      var previousStateForKey = state[_key];
      var nextStateForKey = reducer(previousStateForKey, action);
      if (typeof nextStateForKey === 'undefined') {
        var errorMessage = getUndefinedStateErrorMessage(_key, action);
        throw new Error(errorMessage);
      }
      nextState[_key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }
    return hasChanged ? nextState : state;
  };
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = bindActionCreators;
function bindActionCreator(actionCreator, dispatch) {
  return function () {
    return dispatch(actionCreator.apply(undefined, arguments));
  };
}

/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass a single function as the first argument,
 * and get a function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */
function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch);
  }

  if ((typeof actionCreators === 'undefined' ? 'undefined' : _typeof(actionCreators)) !== 'object' || actionCreators === null) {
    throw new Error('bindActionCreators expected an object or a function, instead received ' + (actionCreators === null ? 'null' : typeof actionCreators === 'undefined' ? 'undefined' : _typeof(actionCreators)) + '. ' + 'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
  }

  var keys = Object.keys(actionCreators);
  var boundActionCreators = {};
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var actionCreator = actionCreators[key];
    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }
  return boundActionCreators;
}

/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = applyMiddleware;

var _compose = __webpack_require__(121);

var _compose2 = _interopRequireDefault(_compose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */
function applyMiddleware() {
  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function (createStore) {
    return function (reducer, preloadedState, enhancer) {
      var store = createStore(reducer, preloadedState, enhancer);
      var _dispatch = store.dispatch;
      var chain = [];

      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch(action) {
          return _dispatch(action);
        }
      };
      chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = _compose2.default.apply(undefined, chain)(store.dispatch);

      return _extends({}, store, {
        dispatch: _dispatch
      });
    };
  };
}

/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.whenMapStateToPropsIsFunction = whenMapStateToPropsIsFunction;
exports.whenMapStateToPropsIsMissing = whenMapStateToPropsIsMissing;

var _wrapMapToProps = __webpack_require__(122);

function whenMapStateToPropsIsFunction(mapStateToProps) {
  return typeof mapStateToProps === 'function' ? (0, _wrapMapToProps.wrapMapToPropsFunc)(mapStateToProps, 'mapStateToProps') : undefined;
}

function whenMapStateToPropsIsMissing(mapStateToProps) {
  return !mapStateToProps ? (0, _wrapMapToProps.wrapMapToPropsConstant)(function () {
    return {};
  }) : undefined;
}

exports.default = [whenMapStateToPropsIsFunction, whenMapStateToPropsIsMissing];

/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultMergeProps = defaultMergeProps;
exports.wrapMergePropsFunc = wrapMergePropsFunc;
exports.whenMergePropsIsFunction = whenMergePropsIsFunction;
exports.whenMergePropsIsOmitted = whenMergePropsIsOmitted;

var _verifyPlainObject = __webpack_require__(123);

var _verifyPlainObject2 = _interopRequireDefault(_verifyPlainObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

function defaultMergeProps(stateProps, dispatchProps, ownProps) {
  return _extends({}, ownProps, stateProps, dispatchProps);
}

function wrapMergePropsFunc(mergeProps) {
  return function initMergePropsProxy(dispatch, _ref) {
    var displayName = _ref.displayName,
        pure = _ref.pure,
        areMergedPropsEqual = _ref.areMergedPropsEqual;

    var hasRunOnce = false;
    var mergedProps = void 0;

    return function mergePropsProxy(stateProps, dispatchProps, ownProps) {
      var nextMergedProps = mergeProps(stateProps, dispatchProps, ownProps);

      if (hasRunOnce) {
        if (!pure || !areMergedPropsEqual(nextMergedProps, mergedProps)) mergedProps = nextMergedProps;
      } else {
        hasRunOnce = true;
        mergedProps = nextMergedProps;

        if (process.env.NODE_ENV !== 'production') (0, _verifyPlainObject2.default)(mergedProps, displayName, 'mergeProps');
      }

      return mergedProps;
    };
  };
}

function whenMergePropsIsFunction(mergeProps) {
  return typeof mergeProps === 'function' ? wrapMergePropsFunc(mergeProps) : undefined;
}

function whenMergePropsIsOmitted(mergeProps) {
  return !mergeProps ? function () {
    return defaultMergeProps;
  } : undefined;
}

exports.default = [whenMergePropsIsFunction, whenMergePropsIsOmitted];
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.impureFinalPropsSelectorFactory = impureFinalPropsSelectorFactory;
exports.pureFinalPropsSelectorFactory = pureFinalPropsSelectorFactory;
exports.default = finalPropsSelectorFactory;

var _verifySubselectors = __webpack_require__(197);

var _verifySubselectors2 = _interopRequireDefault(_verifySubselectors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) {
  var target = {};for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
  }return target;
}

function impureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch) {
  return function impureFinalPropsSelector(state, ownProps) {
    return mergeProps(mapStateToProps(state, ownProps), mapDispatchToProps(dispatch, ownProps), ownProps);
  };
}

function pureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, _ref) {
  var areStatesEqual = _ref.areStatesEqual,
      areOwnPropsEqual = _ref.areOwnPropsEqual,
      areStatePropsEqual = _ref.areStatePropsEqual;

  var hasRunAtLeastOnce = false;
  var state = void 0;
  var ownProps = void 0;
  var stateProps = void 0;
  var dispatchProps = void 0;
  var mergedProps = void 0;

  function handleFirstCall(firstState, firstOwnProps) {
    state = firstState;
    ownProps = firstOwnProps;
    stateProps = mapStateToProps(state, ownProps);
    dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    hasRunAtLeastOnce = true;
    return mergedProps;
  }

  function handleNewPropsAndNewState() {
    stateProps = mapStateToProps(state, ownProps);

    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);

    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleNewProps() {
    if (mapStateToProps.dependsOnOwnProps) stateProps = mapStateToProps(state, ownProps);

    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);

    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleNewState() {
    var nextStateProps = mapStateToProps(state, ownProps);
    var statePropsChanged = !areStatePropsEqual(nextStateProps, stateProps);
    stateProps = nextStateProps;

    if (statePropsChanged) mergedProps = mergeProps(stateProps, dispatchProps, ownProps);

    return mergedProps;
  }

  function handleSubsequentCalls(nextState, nextOwnProps) {
    var propsChanged = !areOwnPropsEqual(nextOwnProps, ownProps);
    var stateChanged = !areStatesEqual(nextState, state);
    state = nextState;
    ownProps = nextOwnProps;

    if (propsChanged && stateChanged) return handleNewPropsAndNewState();
    if (propsChanged) return handleNewProps();
    if (stateChanged) return handleNewState();
    return mergedProps;
  }

  return function pureFinalPropsSelector(nextState, nextOwnProps) {
    return hasRunAtLeastOnce ? handleSubsequentCalls(nextState, nextOwnProps) : handleFirstCall(nextState, nextOwnProps);
  };
}

// TODO: Add more comments

// If pure is true, the selector returned by selectorFactory will memoize its results,
// allowing connectAdvanced's shouldComponentUpdate to return false if final
// props have not changed. If false, the selector will always return a new
// object and shouldComponentUpdate will always return true.

function finalPropsSelectorFactory(dispatch, _ref2) {
  var initMapStateToProps = _ref2.initMapStateToProps,
      initMapDispatchToProps = _ref2.initMapDispatchToProps,
      initMergeProps = _ref2.initMergeProps,
      options = _objectWithoutProperties(_ref2, ['initMapStateToProps', 'initMapDispatchToProps', 'initMergeProps']);

  var mapStateToProps = initMapStateToProps(dispatch, options);
  var mapDispatchToProps = initMapDispatchToProps(dispatch, options);
  var mergeProps = initMergeProps(dispatch, options);

  if (process.env.NODE_ENV !== 'production') {
    (0, _verifySubselectors2.default)(mapStateToProps, mapDispatchToProps, mergeProps, options.displayName);
  }

  var selectorFactory = options.pure ? pureFinalPropsSelectorFactory : impureFinalPropsSelectorFactory;

  return selectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, options);
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = verifySubselectors;

var _warning = __webpack_require__(79);

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function verify(selector, methodName, displayName) {
  if (!selector) {
    throw new Error('Unexpected value for ' + methodName + ' in ' + displayName + '.');
  } else if (methodName === 'mapStateToProps' || methodName === 'mapDispatchToProps') {
    if (!selector.hasOwnProperty('dependsOnOwnProps')) {
      (0, _warning2.default)('The selector for ' + methodName + ' of ' + displayName + ' did not specify a value for dependsOnOwnProps.');
    }
  }
}

function verifySubselectors(mapStateToProps, mapDispatchToProps, mergeProps, displayName) {
  verify(mapStateToProps, 'mapStateToProps', displayName);
  verify(mapDispatchToProps, 'mapDispatchToProps', displayName);
  verify(mergeProps, 'mergeProps', displayName);
}

/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(114);

var _questions = __webpack_require__(199);

var _questions2 = _interopRequireDefault(_questions);

var _members = __webpack_require__(200);

var _members2 = _interopRequireDefault(_members);

var _IntroContainer = __webpack_require__(206);

var _IntroContainer2 = _interopRequireDefault(_IntroContainer);

var _FirstQuestion = __webpack_require__(208);

var _FirstQuestion2 = _interopRequireDefault(_FirstQuestion);

var _SecondQuestion = __webpack_require__(209);

var _SecondQuestion2 = _interopRequireDefault(_SecondQuestion);

var _ThirdQuestion = __webpack_require__(211);

var _ThirdQuestion2 = _interopRequireDefault(_ThirdQuestion);

var _FourthQuestion = __webpack_require__(212);

var _FourthQuestion2 = _interopRequireDefault(_FourthQuestion);

var _FifthQuestion = __webpack_require__(214);

var _FifthQuestion2 = _interopRequireDefault(_FifthQuestion);

var _SixthQuestion = __webpack_require__(215);

var _SixthQuestion2 = _interopRequireDefault(_SixthQuestion);

var _SeventhQuestion = __webpack_require__(216);

var _SeventhQuestion2 = _interopRequireDefault(_SeventhQuestion);

var _EighthQuestion = __webpack_require__(217);

var _EighthQuestion2 = _interopRequireDefault(_EighthQuestion);

var _LastPageContainer = __webpack_require__(218);

var _LastPageContainer2 = _interopRequireDefault(_LastPageContainer);

__webpack_require__(220);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      questions: [],
      answers: []
    };
    _this.addQuestion = _this.addQuestion.bind(_this);
    _this.addAnswer = _this.addAnswer.bind(_this);
    _this.getQuestion = _this.getQuestion.bind(_this);
    _this.renderChatBody = _this.renderChatBody.bind(_this);
    _this.scrollChat = _this.scrollChat.bind(_this);
    _this.addOffsetBlock = _this.addOffsetBlock.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: 'getQuestion',
    value: function getQuestion() {
      switch (this.props.questionNumber) {
        case 1:
          {
            return _react2.default.createElement(_FirstQuestion2.default, {
              questionsNavigation: this.props.questionsNavigation,
              ageGroups: this.props.ageGroups,
              leadMember: this.props.leadMember,
              setActivities: this.props.setActivities,
              addQuestion: this.addQuestion,
              addAnswer: this.addAnswer
            });
          }
        case 2:
          {
            return _react2.default.createElement(_SecondQuestion2.default, {
              questionsNavigation: this.props.questionsNavigation,
              addQuestion: this.addQuestion,
              addAnswer: this.addAnswer,
              partner: this.props.partner,
              createTravelGroup: this.props.createTravelGroup,
              addPartner: this.props.addPartner,
              travelGroup: this.props.travelGroup
            });
          }
        case 3:
          {
            return _react2.default.createElement(_ThirdQuestion2.default, {
              questionsNavigation: this.props.questionsNavigation,
              partner: this.props.partner,
              ageGroups: this.props.ageGroups,
              setActivities: this.props.setActivities,
              addQuestion: this.addQuestion,
              addAnswer: this.addAnswer
            });
          }
        case 4:
          {
            return _react2.default.createElement(_FourthQuestion2.default, {
              questionsNavigation: this.props.questionsNavigation,
              addQuestion: this.addQuestion,
              addAnswer: this.addAnswer,
              ageGroups: this.props.ageGroups,
              addChildren: this.props.addChildren,
              children: this.props.children
            });
          }
        case 5:
          {
            return _react2.default.createElement(_FifthQuestion2.default, {
              questionsNavigation: this.props.questionsNavigation,
              addQuestion: this.addQuestion,
              addAnswer: this.addAnswer,
              children: this.props.children,
              setActivities: this.props.setActivities,
              ageGroups: this.props.ageGroups
            });
          }
        case 6:
          {
            return _react2.default.createElement(_SixthQuestion2.default, {
              questionsNavigation: this.props.questionsNavigation,
              addQuestion: this.addQuestion,
              addAnswer: this.addAnswer,
              countries: this.props.countries,
              getCountries: this.props.getCountries,
              setCountries: this.props.setCountries,
              travelGroup: this.props.travelGroup
            });
          }
        case 7:
          {
            return _react2.default.createElement(_SeventhQuestion2.default, {
              questionsNavigation: this.props.questionsNavigation,
              addQuestion: this.addQuestion,
              addAnswer: this.addAnswer,
              setBudget: this.props.setBudget,
              travelGroup: this.props.travelGroup
            });
          }
        case 8:
          {
            return _react2.default.createElement(_EighthQuestion2.default, {
              questionsNavigation: this.props.questionsNavigation,
              addQuestion: this.addQuestion,
              addAnswer: this.addAnswer,
              signUp: this.props.signUp,
              signUpData: this.props.signUpData,
              signUpError: this.props.signUpError,
              logIn: this.props.logIn,
              isLogged: this.props.isLogged,
              addOffsetBlock: this.addOffsetBlock
            });
          }
        default:
          return false;
      }
    }
  }, {
    key: 'scrollChat',
    value: function scrollChat() {
      var chat = this.chat;
      if (!chat) return;
      chat.scrollBy({ top: 2500, left: 0, behavior: 'smooth' });
    }
  }, {
    key: 'addQuestion',
    value: function addQuestion(question) {
      var _this2 = this;

      var questions = [].concat(_toConsumableArray(this.state.questions));
      var newQuestion = _react2.default.createElement(
        'div',
        { className: 'question', key: 'question-' + (questions.length + 1) },
        _react2.default.createElement(
          'div',
          { className: 'title' },
          _react2.default.createElement(
            'b',
            null,
            'Peru'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'text' },
          question
        )
      );
      questions.push(newQuestion);
      setTimeout(function () {
        _this2.setState({
          questions: questions
        }, function () {
          _this2.scrollChat();
        });
      }, 600);
    }
  }, {
    key: 'addAnswer',
    value: function addAnswer(answer) {
      var _this3 = this;

      var answers = [].concat(_toConsumableArray(this.state.answers));
      var newAnswer = _react2.default.createElement(
        'div',
        { className: 'answer', key: 'answer-' + (answers.length + 1) },
        _react2.default.createElement(
          'div',
          { className: 'title' },
          _react2.default.createElement(
            'b',
            null,
            'Me'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'body' },
          answer
        )
      );
      answers.push(newAnswer);
      setTimeout(function () {
        _this3.setState({
          answers: answers
        }, function () {
          _this3.scrollChat();
        });
      }, 5);
    }
  }, {
    key: 'addOffsetBlock',
    value: function addOffsetBlock() {
      var _this4 = this;

      setTimeout(function () {
        var questions = [].concat(_toConsumableArray(_this4.state.questions));
        var lastElementHeight = _this4.chat.querySelector('.question:last-child').clientHeight + 30;
        var height = _this4.container.clientHeight - lastElementHeight;
        questions.push(_react2.default.createElement('div', { style: { height: height } }));
        _this4.setState({
          questions: questions
        }, function () {
          _this4.scrollChat();
        });
      }, 600);
    }
  }, {
    key: 'renderChatBody',
    value: function renderChatBody() {
      var chatBody = [];
      for (var i = 0; i < this.state.questions.length; i++) {
        chatBody.push(this.state.questions[i]);
        if (this.state.answers[i]) {
          chatBody.push(this.state.answers[i]);
        }
      }

      return chatBody;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this5 = this;

      if (this.props.questionNumber === 0) {
        return _react2.default.createElement(
          'div',
          { className: 'container white-bg', ref: function ref(container) {
              return _this5.container = container;
            } },
          _react2.default.createElement(_IntroContainer2.default, {
            questionsNavigation: this.props.questionsNavigation,
            ageGroups: this.props.ageGroups,
            getAgeGroups: this.props.getAgeGroups,
            leadMember: this.props.leadMember,
            addLeadMember: this.props.addLeadMember,
            addQuestion: this.addQuestion,
            addAnswer: this.addAnswer
          })
        );
      } else if (this.props.questionNumber === 9) {
        return _react2.default.createElement(
          'div',
          { className: 'container white-bg', ref: function ref(container) {
              return _this5.container = container;
            } },
          _react2.default.createElement(_LastPageContainer2.default, null)
        );
      }
      return _react2.default.createElement(
        'div',
        { className: 'container', ref: function ref(container) {
            return _this5.container = container;
          } },
        _react2.default.createElement(
          'div',
          { className: 'scroll-fix' },
          _react2.default.createElement(
            'div',
            { className: 'chat', ref: function ref(chat) {
                return _this5.chat = chat;
              } },
            this.renderChatBody()
          ),
          _react2.default.createElement(
            'div',
            null,
            this.getQuestion()
          )
        )
      );
    }
  }]);

  return App;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    ageGroups: state.membersReducer.ageGroups,
    questionNumber: state.questionsReducer.questionNumber,
    leadMember: state.membersReducer.leadMember,
    partner: state.membersReducer.partner,
    travelGroup: state.membersReducer.travelGroup,
    children: state.membersReducer.children,
    countries: state.membersReducer.countries,
    isLogged: state.membersReducer.isLogged,
    signUpError: state.membersReducer.signUpError,
    signUpData: state.membersReducer.signUpData
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    questionsNavigation: {
      prev: function prev() {
        dispatch(_questions2.default.prevQuestion());
      },
      next: function next() {
        dispatch(_questions2.default.nextQuestion());
      },
      goTo: function goTo(number) {
        dispatch(_questions2.default.goToQuestion(number));
      }
    },
    addLeadMember: function addLeadMember() {
      dispatch(_members2.default.addLeadMember());
    },
    getAgeGroups: function getAgeGroups() {
      dispatch(_members2.default.getAgeGroups());
    },
    setActivities: function setActivities(id, activities, memberType) {
      dispatch(_members2.default.setActivities(id, activities, memberType));
    },
    createTravelGroup: function createTravelGroup() {
      dispatch(_members2.default.createTravelGroup());
    },
    addPartner: function addPartner() {
      dispatch(_members2.default.addPartner());
    },
    addChildren: function addChildren(childrenCount) {
      dispatch(_members2.default.addChildren(childrenCount));
    },
    getCountries: function getCountries() {
      dispatch(_members2.default.getCountries());
    },
    setCountries: function setCountries(countries) {
      dispatch(_members2.default.setCountries(countries));
    },
    setBudget: function setBudget(budget) {
      dispatch(_members2.default.setBudget(budget));
    },
    signUp: function signUp(data) {
      dispatch(_members2.default.signUp(data));
    },
    logIn: function logIn(data) {
      dispatch(_members2.default.logIn(data));
    }
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(App);

/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _constants = __webpack_require__(48);

var actions = _interopRequireWildcard(_constants);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var nextQuestion = function nextQuestion() {
  return { type: actions.NEXT_QUESTION };
};

var goToQuestion = function goToQuestion(number) {
  return { type: actions.GO_TO_QUESTION, payload: number };
};

var prevQuestion = function prevQuestion() {
  return { type: actions.PREV_QUESTION };
};

exports.default = {
  nextQuestion: nextQuestion,
  goToQuestion: goToQuestion,
  prevQuestion: prevQuestion
};

/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Promise) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _constants = __webpack_require__(48);

var actions = _interopRequireWildcard(_constants);

var _api = __webpack_require__(203);

var API = _interopRequireWildcard(_api);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var addLeadMember = function addLeadMember() {
  return function (dispatch, getState) {
    var adultGroupId = getState().membersReducer.ageGroups.Adult.id;
    API.createCustomer(adultGroupId).then(function (response) {
      dispatch({ type: actions.ADD_LEAD_MEMBER, payload: response._id });
    });
  };
};

var getAgeGroups = function getAgeGroups() {
  return function (dispatch) {
    API.getAgeGroups().then(function (response) {
      var ageGroups = {};
      response.data.forEach(function (group) {
        ageGroups[group.text] = {
          id: group._id,
          activities: group.activities
        };
      });
      dispatch({ type: actions.ADD_AGE_GROUPS, payload: ageGroups });
    });
  };
};

var addPartner = function addPartner() {
  return function (dispatch, getState) {
    var adultGroupId = getState().membersReducer.ageGroups.Adult.id;
    var travelGroupId = getState().membersReducer.travelGroup.id;
    var partnerId = void 0;
    API.createCustomer(adultGroupId).then(function (response) {
      partnerId = response._id;
      return API.addMember(travelGroupId, response._id);
    }).then(function () {
      dispatch({ type: actions.ADD_PARTNER, payload: partnerId });
    });
  };
};

var createTravelGroup = function createTravelGroup() {
  return function (dispatch, getState) {
    var leadMemberId = getState().membersReducer.leadMember.id;
    API.createTravelGroup(leadMemberId).then(function (response) {
      dispatch({ type: actions.CREATE_TRAVEL_GROUP, payload: response._id });
    });
  };
};

var setActivities = function setActivities(id, activities, memberType) {
  return function (dispatch, getState) {
    var args = [id, activities];
    if (memberType !== 'lead' && memberType !== 'partner') {
      var ageGroup = getState().membersReducer.ageGroups[memberType].id;
      var travelGroup = getState().membersReducer.travelGroup.id;
      args.push({
        ageGroup: ageGroup,
        travelGroup: travelGroup
      });
    }
    API.setActivities.apply(API, args).then(function () {
      dispatch({ type: actions.SET_ACTIVITIES, payload: { memberType: memberType, activities: activities } });
    });
  };
};

var createChilren = function createChilren(childrenCount, getState) {
  var ageGroups = getState().membersReducer.ageGroups;
  var travelGroupId = getState().membersReducer.travelGroup.id;

  var promises = [];
  Object.keys(childrenCount).forEach(function (groupName) {
    var count = childrenCount[groupName];
    for (var i = 0; i < count; i++) {
      promises.push(API.createCustomer(ageGroups[groupName].id, travelGroupId));
    }
  });
  return Promise.all(promises);
};

var addToTravelGroup = function addToTravelGroup(children, getState) {
  var travelGroupId = getState().membersReducer.travelGroup.id;
  var promises = [];
  children.forEach(function (child) {
    promises.push(API.addMember(travelGroupId, child._id));
  });
  return Promise.all(promises);
};

var addChildren = function addChildren(childrenCount) {
  return function (dispatch, getState) {
    createChilren(childrenCount, getState).then(function (response) {
      return addToTravelGroup(response, getState);
    }).then(function () {
      dispatch({ type: actions.ADD_CHILDREN, payload: childrenCount });
    });
  };
};

var getCountries = function getCountries() {
  return function (dispatch) {
    var countries = [];
    API.getCountries().then(function (response) {
      response.data.forEach(function (country) {
        countries.push({ _id: country._id, text: country.text });
      });
      dispatch({ type: actions.ADD_COUNTRIES, payload: countries });
    });
  };
};

var setCountries = function setCountries(countries) {
  return function (dispatch, getState) {
    var travelGroupId = getState().membersReducer.travelGroup.id;
    API.setCountries(travelGroupId, countries).then(function () {
      dispatch({ type: actions.SET_COUNTRIES, payload: countries });
    });
  };
};

var setBudget = function setBudget(budget) {
  return function (dispatch, getState) {
    var travelGroupId = getState().membersReducer.travelGroup.id;
    API.setBudget(travelGroupId, budget).then(function () {
      dispatch({ type: actions.SET_BUDGET, payload: budget });
    });
  };
};

var signUp = function signUp(data) {
  return function (dispatch) {
    API.signUp(data).then(function () {
      dispatch({ type: actions.SIGN_UP_SUCCESS, payload: data });
    }, function (error) {
      dispatch({ type: actions.SIGN_UP_ERROR, payload: error });
    });
  };
};

var logIn = function logIn(data) {
  return function (dispatch) {
    API.logIn(data).then(function (response) {
      dispatch({ type: actions.LOG_IN_SUCCESS, payload: response });
    }, function (error) {
      dispatch({ type: actions.LOG_IN_ERROR, payload: error });
    });
  };
};

exports.default = {
  addLeadMember: addLeadMember,
  getAgeGroups: getAgeGroups,
  setActivities: setActivities,
  addPartner: addPartner,
  createTravelGroup: createTravelGroup,
  addChildren: addChildren,
  setCountries: setCountries,
  getCountries: getCountries,
  setBudget: setBudget,
  signUp: signUp,
  logIn: logIn
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(54)))

/***/ }),
/* 201 */,
/* 202 */,
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCountries = exports.addMember = exports.createTravelGroup = exports.signUp = exports.logIn = exports.setBudget = exports.setCountries = exports.setActivities = exports.getAgeGroups = exports.createCustomer = undefined;

var _getData = __webpack_require__(204);

var _getData2 = _interopRequireDefault(_getData);

var _sendData = __webpack_require__(205);

var _sendData2 = _interopRequireDefault(_sendData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createCustomer = exports.createCustomer = function createCustomer(ageGroupId, travelGroupId) {
  var data = {
    ageGroup: ageGroupId
  };
  if (travelGroupId) data.travelGroup = travelGroupId;

  return (0, _sendData2.default)('/customers', 'POST', data);
};

var getAgeGroups = exports.getAgeGroups = function getAgeGroups() {
  return (0, _getData2.default)('/age-groups?$select=text&$select=activities&$populate=activities');
};

var setActivities = exports.setActivities = function setActivities(id, activities, extraParams) {
  var url = id ? '/customers?_id=' + id : '/customers?';

  if (extraParams) {
    Object.keys(extraParams).forEach(function (param) {
      url += '&' + param + '=' + extraParams[param];
    });
  }
  return (0, _sendData2.default)(url, 'PATCH', {
    preferredActivities: activities
  });
};

var setCountries = exports.setCountries = function setCountries(travelGroupId, countries) {
  return (0, _sendData2.default)('/travel-groups/?_id=' + travelGroupId, 'PATCH', {
    preferredCountries: countries
  });
};

var setBudget = exports.setBudget = function setBudget(travelGroupId, budget) {
  return (0, _sendData2.default)('/travel-groups?_id=' + travelGroupId, 'PATCH', budget);
};

var logIn = exports.logIn = function logIn(data) {
  return (0, _sendData2.default)('/auth', 'POST', data);
};

var signUp = exports.signUp = function signUp(data) {
  return (0, _sendData2.default)('/users', 'POST', data);
};

var createTravelGroup = exports.createTravelGroup = function createTravelGroup(leadMemberId) {
  var data = {
    leadMember: leadMemberId
  };
  return (0, _sendData2.default)('/travel-groups', 'POST', data);
};

var addMember = exports.addMember = function addMember(travelGroupId, memberId) {
  var newMember = {
    $addToSet: {
      members: memberId
    }
  };
  return (0, _sendData2.default)('/travel-groups?_id=' + travelGroupId, 'PATCH', newMember);
};

var getCountries = exports.getCountries = function getCountries() {
  return (0, _getData2.default)('/countries?isServed=true&$limit=50');
};

/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Promise) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _constants = __webpack_require__(48);

var constants = _interopRequireWildcard(_constants);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var getData = function getData(url) {
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '' + constants.API_URL + url, true);
    // xhr.withCredentials = true;
    xhr.onreadystatechange = function () {
      if (xhr.readyState !== 4) return;
      var hasError = xhr.status < 200 || xhr.status >= 300;
      if (hasError) {
        reject(JSON.parse(xhr.responseText));
      } else {
        resolve(JSON.parse(xhr.responseText));
      }
    };
    xhr.onerror = function () {
      throw new Error(xhr.status + ': ' + xhr.statusText);
    };

    xhr.send();
  });
};

exports.default = getData;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(54)))

/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Promise) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _constants = __webpack_require__(48);

var constants = _interopRequireWildcard(_constants);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var sendData = function sendData(url, method, data) {
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, '' + constants.API_URL + url, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    // xhr.withCredentials = true;

    xhr.onreadystatechange = function () {
      if (xhr.readyState !== 4) return;
      var hasError = xhr.status < 200 || xhr.status >= 300;
      if (hasError) {
        reject(JSON.parse(xhr.responseText));
      } else {
        resolve(JSON.parse(xhr.responseText));
      }
    };
    xhr.onerror = function () {
      throw new Error(xhr.status + ': ' + xhr.statusText);
    };

    xhr.send(JSON.stringify(data));
  });
};

exports.default = sendData;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(54)))

/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _Intro = __webpack_require__(207);

var _Intro2 = _interopRequireDefault(_Intro);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IntroContainer = function (_Component) {
  _inherits(IntroContainer, _Component);

  function IntroContainer(props) {
    _classCallCheck(this, IntroContainer);

    var _this = _possibleConstructorReturn(this, (IntroContainer.__proto__ || Object.getPrototypeOf(IntroContainer)).call(this, props));

    _this.state = {
      loading: false
    };
    _this.createLeadMember = _this.createLeadMember.bind(_this);
    return _this;
  }

  _createClass(IntroContainer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.addQuestion(_react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'p',
          null,
          'Hey, I\'m Peru, CCO ("Chef" Coordinating Officer) at Vacations Caf\xE9. I\'ll guide you today to let us understand a little about your family\'s likes and dislikes for vacations. It takes less than 5 minutes.'
        ),
        _react2.default.createElement(
          'p',
          null,
          _react2.default.createElement(
            'strong',
            null,
            'Claimer'
          ),
          ': Nobody else in this world cares better for your precious vacations than my vacation chefs that hand-cook vacation experiences for your tastes.'
        ),
        _react2.default.createElement(
          'p',
          null,
          'Shall we begin?'
        )
      ));
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.state.loading && Object.keys(nextProps.ageGroups).length) {
        if (!nextProps.leadMember.id) {
          nextProps.addLeadMember();
        } else {
          nextProps.addAnswer('Yes!');
          nextProps.questionsNavigation.next();
        }
      }
    }
  }, {
    key: 'createLeadMember',
    value: function createLeadMember() {
      if (this.state.loading) return;

      this.props.getAgeGroups();
      this.setState({
        loading: true
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Intro2.default, { loading: this.state.loading, handler: this.createLeadMember });
    }
  }]);

  return IntroContainer;
}(_react.Component);

exports.default = IntroContainer;

/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Intro = function Intro(props) {
  return _react2.default.createElement(
    "div",
    { className: "intro" },
    _react2.default.createElement("img", { src: "assets/snowman.png", className: "snowman" }),
    _react2.default.createElement(
      "h1",
      null,
      "Lets get started"
    ),
    _react2.default.createElement(
      "p",
      null,
      "Hey, I'm Peru, CCO (\"Chef\" Coordinating Officer) at Vacations Caf\xE9. I'll guide you today to let us understand a little about your family's likes and dislikes for vacations. It takes less than 5 minutes."
    ),
    _react2.default.createElement(
      "p",
      null,
      _react2.default.createElement(
        "strong",
        null,
        "Claimer"
      ),
      ": Nobody else in this world cares better for your precious vacations than my vacation chefs that hand-cook vacation experiences for your tastes."
    ),
    _react2.default.createElement(
      "p",
      null,
      "Shall we begin?"
    ),
    _react2.default.createElement("div", { className: "next-btn " + (props.loading ? 'loading' : ''), onClick: props.handler })
  );
};

exports.default = Intro;

/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _Checkboxes = __webpack_require__(55);

var _Checkboxes2 = _interopRequireDefault(_Checkboxes);

var _SendButton = __webpack_require__(35);

var _SendButton2 = _interopRequireDefault(_SendButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FirstQuestion = function (_Component) {
  _inherits(FirstQuestion, _Component);

  function FirstQuestion(props) {
    _classCallCheck(this, FirstQuestion);

    var _this = _possibleConstructorReturn(this, (FirstQuestion.__proto__ || Object.getPrototypeOf(FirstQuestion)).call(this, props));

    _this.state = {
      activities: _this.props.ageGroups.Adult.activities,
      chosenActivities: {},
      loading: false
    };
    _this.toggleActivities = _this.toggleActivities.bind(_this);
    _this.save = _this.save.bind(_this);
    return _this;
  }

  _createClass(FirstQuestion, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.addQuestion(_react2.default.createElement(
        'div',
        null,
        'Good. Thanks. Now close your eyes and imagine about your vacations for the next 2 years. What do ',
        _react2.default.createElement(
          'strong',
          null,
          'you'
        ),
        ' typically fancy doing? Forget about your family for this moment.'
      ));
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _this2 = this;

      if (this.state.loading && nextProps.leadMember.preferredActivities) {
        var activities = this.state.activities.filter(function (activity) {
          return _this2.state.chosenActivities[activity._id];
        });
        nextProps.addAnswer(_react2.default.createElement(_Checkboxes2.default, {
          elements: activities,
          activeElements: this.state.chosenActivities
        }));
        nextProps.questionsNavigation.next();
      }
    }
  }, {
    key: 'toggleActivities',
    value: function toggleActivities(e) {
      var clickedActivity = e.currentTarget.id;
      var activities = Object.assign({}, this.state.chosenActivities);
      if (!activities[clickedActivity]) {
        activities[clickedActivity] = 1;
      } else {
        delete activities[clickedActivity];
      }
      this.setState({
        chosenActivities: activities
      });
    }
  }, {
    key: 'save',
    value: function save() {
      var activities = Object.keys(this.state.chosenActivities);
      if (!activities.length) return;
      this.setState({
        loading: true
      });

      this.props.setActivities(this.props.leadMember.id, activities, 'lead');
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'answer-panel' },
        _react2.default.createElement(
          'div',
          { className: 'answer-variants' },
          _react2.default.createElement(_Checkboxes2.default, {
            elements: this.state.activities,
            activeElements: this.state.chosenActivities,
            toggleCheckbox: this.toggleActivities
          })
        ),
        _react2.default.createElement(_SendButton2.default, { loading: this.state.loading, handler: this.save })
      );
    }
  }]);

  return FirstQuestion;
}(_react.Component);

exports.default = FirstQuestion;

/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _Partners = __webpack_require__(210);

var _Partners2 = _interopRequireDefault(_Partners);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SecondQuestion = function (_Component) {
  _inherits(SecondQuestion, _Component);

  function SecondQuestion(props) {
    _classCallCheck(this, SecondQuestion);

    var _this = _possibleConstructorReturn(this, (SecondQuestion.__proto__ || Object.getPrototypeOf(SecondQuestion)).call(this, props));

    _this.state = {
      hasPartner: true,
      loading: false
    };
    _this.save = _this.save.bind(_this);
    return _this;
  }

  _createClass(SecondQuestion, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.addQuestion('Good. Do you have a partner to travel with?');
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.travelGroup.id) {
        if (this.state.hasPartner && !nextProps.partner.id) {
          nextProps.addPartner();
        } else if (this.state.hasPartner && nextProps.partner.id) {
          nextProps.addAnswer('Yes');
          nextProps.questionsNavigation.next();
        } else {
          nextProps.addAnswer('No');
          nextProps.questionsNavigation.goTo(4);
        }
      }
    }
  }, {
    key: 'save',
    value: function save(e) {
      if (this.state.loading) return;
      this.setState({
        loading: true,
        hasPartner: e.currentTarget.id === 'hasPartner'
      });
      this.props.createTravelGroup();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'answer-panel' },
        _react2.default.createElement(
          'div',
          { className: 'answer-variants' },
          _react2.default.createElement(_Partners2.default, { handler: this.save })
        )
      );
    }
  }]);

  return SecondQuestion;
}(_react.Component);

exports.default = SecondQuestion;

/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Partners = function Partners(props) {
  return _react2.default.createElement(
    "div",
    { className: "partners" },
    _react2.default.createElement(
      "div",
      { onClick: props.handler, id: "hasPartner" },
      _react2.default.createElement("img", { src: "assets/partner.png" }),
      _react2.default.createElement(
        "div",
        null,
        "Yes I do"
      )
    ),
    _react2.default.createElement(
      "div",
      { onClick: props.handler, id: "noPartner" },
      _react2.default.createElement("img", { src: "assets/alone.png" }),
      _react2.default.createElement(
        "div",
        null,
        "No"
      )
    )
  );
};

exports.default = Partners;

/***/ }),
/* 211 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _Checkboxes = __webpack_require__(55);

var _Checkboxes2 = _interopRequireDefault(_Checkboxes);

var _SendButton = __webpack_require__(35);

var _SendButton2 = _interopRequireDefault(_SendButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ThirdQuestion = function (_Component) {
  _inherits(ThirdQuestion, _Component);

  function ThirdQuestion(props) {
    _classCallCheck(this, ThirdQuestion);

    var _this = _possibleConstructorReturn(this, (ThirdQuestion.__proto__ || Object.getPrototypeOf(ThirdQuestion)).call(this, props));

    _this.state = {
      activities: _this.props.ageGroups.Adult.activities,
      chosenActivities: {},
      loading: false
    };
    _this.toggleActivities = _this.toggleActivities.bind(_this);
    _this.save = _this.save.bind(_this);
    return _this;
  }

  _createClass(ThirdQuestion, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.addQuestion('Who knows your partner better than you? Now think about your partner and what do\n    they typically fancy doing on a trip?');
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _this2 = this;

      if (this.state.loading && nextProps.partner.preferredActivities) {
        var activities = this.state.activities.filter(function (activity) {
          return _this2.state.chosenActivities[activity._id];
        });
        nextProps.addAnswer(_react2.default.createElement(_Checkboxes2.default, {
          elements: activities,
          activeElements: this.state.chosenActivities
        }));
        nextProps.questionsNavigation.next();
      }
    }
  }, {
    key: 'toggleActivities',
    value: function toggleActivities(e) {
      var clickedActivity = e.currentTarget.id;
      var activities = Object.assign({}, this.state.chosenActivities);
      if (!activities[clickedActivity]) {
        activities[clickedActivity] = 1;
      } else {
        delete activities[clickedActivity];
      }
      this.setState({
        chosenActivities: activities
      });
    }
  }, {
    key: 'save',
    value: function save() {
      var activities = Object.keys(this.state.chosenActivities);
      if (!activities.length) return;
      this.setState({
        loading: true
      });

      this.props.setActivities(this.props.partner.id, activities, 'partner');
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'answer-panel' },
        _react2.default.createElement(
          'div',
          { className: 'answer-variants' },
          _react2.default.createElement(_Checkboxes2.default, {
            elements: this.state.activities,
            activeElements: this.state.chosenActivities,
            toggleCheckbox: this.toggleActivities
          })
        ),
        _react2.default.createElement(_SendButton2.default, { loading: this.state.loading, handler: this.save })
      );
    }
  }]);

  return ThirdQuestion;
}(_react.Component);

exports.default = ThirdQuestion;

/***/ }),
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _SendButton = __webpack_require__(35);

var _SendButton2 = _interopRequireDefault(_SendButton);

var _ChildrenGroups = __webpack_require__(213);

var _ChildrenGroups2 = _interopRequireDefault(_ChildrenGroups);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FourthQuestion = function (_Component) {
  _inherits(FourthQuestion, _Component);

  function FourthQuestion(props) {
    _classCallCheck(this, FourthQuestion);

    var _this = _possibleConstructorReturn(this, (FourthQuestion.__proto__ || Object.getPrototypeOf(FourthQuestion)).call(this, props));

    _this.state = {
      childrenGroups: {},
      childrenGroupsCount: {},
      loading: false
    };
    _this.save = _this.save.bind(_this);
    _this.addChild = _this.addChild.bind(_this);
    _this.removeChild = _this.removeChild.bind(_this);
    _this.extractName = _this.extractName.bind(_this);
    _this.getChildrenGroups = _this.getChildrenGroups.bind(_this);
    _this.createAnswer = _this.createAnswer.bind(_this);
    return _this;
  }

  _createClass(FourthQuestion, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.addQuestion('Good. How many kids have you got that will travel with you on your vacations?');
      this.getChildrenGroups();
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.children) {
        if (Object.keys(nextProps.children).length) {
          var answer = this.createAnswer();
          nextProps.addAnswer(answer);
          nextProps.questionsNavigation.next();
        } else {
          nextProps.addAnswer('I travel without children.');
          nextProps.questionsNavigation.goTo(6);
        }
      }
    }
  }, {
    key: 'getChildrenGroups',
    value: function getChildrenGroups() {
      var childrenGroups = Object.assign({}, this.props.ageGroups);
      delete childrenGroups.Adult;
      var childrenGroupsCount = {};
      Object.keys(childrenGroups).forEach(function (group) {
        childrenGroupsCount[group] = 0;
      });
      this.setState({
        childrenGroups: childrenGroups,
        childrenGroupsCount: childrenGroupsCount
      });
    }
  }, {
    key: 'addChild',
    value: function addChild(e) {
      var childrenGroupsCount = Object.assign({}, this.state.childrenGroupsCount);
      childrenGroupsCount[e.currentTarget.id]++;
      this.setState({
        childrenGroupsCount: childrenGroupsCount
      });
    }
  }, {
    key: 'removeChild',
    value: function removeChild(e) {
      var childrenGroupsCount = Object.assign({}, this.state.childrenGroupsCount);
      childrenGroupsCount[e.currentTarget.id]--;
      this.setState({
        childrenGroupsCount: childrenGroupsCount
      });
    }
  }, {
    key: 'createAnswer',
    value: function createAnswer() {
      var _this2 = this;

      var answer = ['I am travelling with '];
      Object.keys(this.state.childrenGroupsCount).forEach(function (groupName) {
        if (!_this2.state.childrenGroupsCount[groupName]) return;
        if (_this2.state.childrenGroupsCount[groupName] > 1) {
          if (_this2.extractName(groupName) === 'baby') {
            answer.push(_this2.state.childrenGroupsCount[groupName] + ' of my babies, ');
          } else {
            answer.push(_this2.state.childrenGroupsCount[groupName] + ' of my ' + _this2.extractName(groupName) + 's, ');
          }
        } else {
          answer.push('my ' + _this2.extractName(groupName) + ', ');
        }
      });

      if (answer.length > 2) {
        answer.splice(-1, 0, ' and ');
      }
      var stringAnswer = answer.join('');
      answer = stringAnswer.slice(0, stringAnswer.length - 2) + '.';

      if (answer.length === 1) answer = false;

      return answer;
    }
  }, {
    key: 'save',
    value: function save() {
      var _this3 = this;

      if (this.state.loading) return;
      this.setState({
        loading: true
      });
      var newGroups = {};
      Object.keys(this.state.childrenGroupsCount).forEach(function (groupName) {
        if (_this3.state.childrenGroupsCount[groupName]) {
          newGroups[groupName] = _this3.state.childrenGroupsCount[groupName];
        }
      });
      this.props.addChildren(newGroups);
    }
  }, {
    key: 'extractName',
    value: function extractName(name) {
      return name.slice(0, name.indexOf(' ')).toLowerCase();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'answer-panel' },
        _react2.default.createElement(
          'div',
          { className: 'answer-variants' },
          _react2.default.createElement(_ChildrenGroups2.default, {
            groups: this.state.childrenGroups,
            counter: this.state.childrenGroupsCount,
            add: this.addChild,
            remove: this.removeChild
          })
        ),
        _react2.default.createElement(_SendButton2.default, { loading: this.state.loading, handler: this.save })
      );
    }
  }]);

  return FourthQuestion;
}(_react.Component);

exports.default = FourthQuestion;

/***/ }),
/* 213 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ChildrenGroups = function ChildrenGroups(props) {
  return _react2.default.createElement(
    "div",
    { className: "children" },
    Object.keys(props.groups).map(function (groupName) {
      return _react2.default.createElement(
        "div",
        { className: "child", key: groupName },
        _react2.default.createElement(
          "div",
          { className: "child-group" },
          groupName
        ),
        _react2.default.createElement(
          "div",
          { className: "child-counter" },
          _react2.default.createElement(
            "div",
            { className: "minus " + (props.counter[groupName] === 0 ? 'hidden' : ''), onClick: props.remove, id: groupName },
            "-"
          ),
          props.counter[groupName],
          _react2.default.createElement(
            "div",
            { className: "plus", onClick: props.add, id: groupName },
            "+"
          )
        )
      );
    })
  );
};

exports.default = ChildrenGroups;

/***/ }),
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _Checkboxes = __webpack_require__(55);

var _Checkboxes2 = _interopRequireDefault(_Checkboxes);

var _SendButton = __webpack_require__(35);

var _SendButton2 = _interopRequireDefault(_SendButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FifthQuestion = function (_Component) {
  _inherits(FifthQuestion, _Component);

  function FifthQuestion(props) {
    _classCallCheck(this, FifthQuestion);

    var _this = _possibleConstructorReturn(this, (FifthQuestion.__proto__ || Object.getPrototypeOf(FifthQuestion)).call(this, props));

    _this.state = {
      index: 0,
      groupNames: Object.keys(_this.props.children),
      chosenActivities: {},
      loading: false
    };
    _this.save = _this.save.bind(_this);
    _this.toggleActivities = _this.toggleActivities.bind(_this);
    _this.extractName = _this.extractName.bind(_this);
    return _this;
  }

  _createClass(FifthQuestion, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.addQuestion(this.getQuestion(this.state.index));
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _this2 = this;

      if (nextProps.children[this.state.groupNames[this.state.index]].preferredActivities) {
        var activities = nextProps.ageGroups[this.state.groupNames[this.state.index]].activities.filter(function (activity) {
          return _this2.state.chosenActivities[activity._id];
        });

        nextProps.addAnswer(_react2.default.createElement(_Checkboxes2.default, {
          elements: activities,
          activeElements: this.state.chosenActivities
        }));

        this.setState({
          loading: false,
          chosenActivities: {}
        });
        if (this.state.groupNames[this.state.index + 1]) {
          this.props.addQuestion(this.getQuestion(this.state.index + 1));
          this.setState({
            index: this.state.index + 1
          });
        } else {
          nextProps.questionsNavigation.next();
        }
      }
    }
  }, {
    key: 'save',
    value: function save() {
      var activities = Object.keys(this.state.chosenActivities);
      if (!activities.length) return;
      this.setState({
        loading: true
      });
      this.props.setActivities(null, activities, this.state.groupNames[this.state.index]);
    }
  }, {
    key: 'extractName',
    value: function extractName(name) {
      return name.slice(0, name.indexOf(' ')).toLowerCase();
    }
  }, {
    key: 'getQuestion',
    value: function getQuestion(stateIndex) {
      switch (this.extractName(this.state.groupNames[stateIndex])) {
        case "toddler":
          return 'I know this is difficult but what do you think your little toddler wants to do on their vacations?';
        case "schoolgoer":
          return 'This is very difficult but what do you think your little schoolgoer wants to do on their vacations?';
        case "teen":
          return 'Teens wander in their own new world. Hoping that you understand them better, what do you think\n        yours will want to do on their vacations?';
        case "baby":
          return 'A babysitter would do a great help to take care of your baby while you want to take a fresh breath out.\n        Do you think it is better to arrange a babysitter for your trips?';
        case "adult":
          return 'What do you think your grownup kid would like to do on their vacations?';
      }
    }
  }, {
    key: 'toggleActivities',
    value: function toggleActivities(e) {
      var clickedActivity = e.currentTarget.id;
      var activities = Object.assign({}, this.state.chosenActivities);
      if (!activities[clickedActivity]) {
        activities[clickedActivity] = 1;
      } else {
        delete activities[clickedActivity];
      }
      this.setState({
        chosenActivities: activities
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'answer-panel' },
        _react2.default.createElement(
          'div',
          { className: 'answer-variants' },
          _react2.default.createElement(_Checkboxes2.default, {
            elements: this.props.ageGroups[this.state.groupNames[this.state.index]].activities,
            activeElements: this.state.chosenActivities,
            toggleCheckbox: this.toggleActivities
          })
        ),
        _react2.default.createElement(_SendButton2.default, { loading: this.state.loading, handler: this.save })
      );
    }
  }]);

  return FifthQuestion;
}(_react.Component);

exports.default = FifthQuestion;

/***/ }),
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _Checkboxes = __webpack_require__(55);

var _Checkboxes2 = _interopRequireDefault(_Checkboxes);

var _SendButton = __webpack_require__(35);

var _SendButton2 = _interopRequireDefault(_SendButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SixthQuestion = function (_Component) {
  _inherits(SixthQuestion, _Component);

  function SixthQuestion(props) {
    _classCallCheck(this, SixthQuestion);

    var _this = _possibleConstructorReturn(this, (SixthQuestion.__proto__ || Object.getPrototypeOf(SixthQuestion)).call(this, props));

    _this.state = {
      countries: [],
      chosenCountries: {},
      loading: true
    };
    _this.toggleCountries = _this.toggleCountries.bind(_this);
    _this.save = _this.save.bind(_this);
    return _this;
  }

  _createClass(SixthQuestion, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.addQuestion('Awesome. Pick the countries that your family fancies visiting in the next 2 years.');
      this.props.getCountries();
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _this2 = this;

      if (!this.props.countries.length && nextProps.countries.length) {
        this.setState({
          countries: nextProps.countries,
          loading: false
        });
      }
      if (nextProps.travelGroup.preferredCountries) {
        var countries = nextProps.countries.filter(function (country) {
          return _this2.state.chosenCountries[country._id];
        });

        nextProps.addAnswer(_react2.default.createElement(_Checkboxes2.default, {
          elements: countries,
          activeElements: this.state.chosenCountries
        }));

        nextProps.questionsNavigation.next();
      }
    }
  }, {
    key: 'toggleCountries',
    value: function toggleCountries(e) {
      var clickedCountry = e.currentTarget.id;
      var countries = Object.assign({}, this.state.chosenCountries);
      if (!countries[clickedCountry]) {
        countries[clickedCountry] = 1;
      } else {
        delete countries[clickedCountry];
      }
      this.setState({
        chosenCountries: countries
      });
    }
  }, {
    key: 'save',
    value: function save() {
      var countries = Object.keys(this.state.chosenCountries);
      if (!countries.length) return;
      this.setState({
        loading: true
      });
      this.props.setCountries(Object.keys(this.state.chosenCountries));
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'answer-panel' },
        _react2.default.createElement(
          'div',
          { className: 'answer-panel' },
          _react2.default.createElement(
            'div',
            { className: 'answer-variants' },
            _react2.default.createElement(_Checkboxes2.default, {
              elements: this.state.countries,
              activeElements: this.state.chosenCountries,
              toggleCheckbox: this.toggleCountries
            })
          ),
          _react2.default.createElement(_SendButton2.default, { loading: this.state.loading, handler: this.save })
        )
      );
    }
  }]);

  return SixthQuestion;
}(_react.Component);

exports.default = SixthQuestion;

/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _Checkboxes = __webpack_require__(55);

var _Checkboxes2 = _interopRequireDefault(_Checkboxes);

var _SendButton = __webpack_require__(35);

var _SendButton2 = _interopRequireDefault(_SendButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SeventhQuestion = function (_Component) {
  _inherits(SeventhQuestion, _Component);

  function SeventhQuestion(props) {
    _classCallCheck(this, SeventhQuestion);

    var _this = _possibleConstructorReturn(this, (SeventhQuestion.__proto__ || Object.getPrototypeOf(SeventhQuestion)).call(this, props));

    _this.stepIncrement = 100;
    _this.rangeMinimum = 200;
    _this.rangeMaximum = 30000;

    _this.state = {
      loading: false,
      budget: {},
      rangeValues: {},
      positions: {}
    };

    _this.setBudget = _this.setBudget.bind(_this);
    _this.calcPositions = _this.calcPositions.bind(_this);
    _this.save = _this.save.bind(_this);
    _this.getInitialValues = _this.getInitialValues.bind(_this);
    return _this;
  }

  _createClass(SeventhQuestion, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.addQuestion('\n      For the next 2 years, what is the average budget for your trips? \n      Not sure about this? Fret not. You can adjust this for each trip, later on.\n    ');

      this.getInitialValues();
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.travelGroup.budget) {
        this.props.addAnswer('\n        From \xA3' + this.state.budget.minimumBudget + ' to \xA3' + this.state.budget.maximumBudget + '\n      ');
        this.props.questionsNavigation.next();
      }
    }
  }, {
    key: 'getInitialValues',
    value: function getInitialValues() {
      var minValue = this.rangeMinimum * 100 / this.rangeMaximum;
      var maxValue = 20;

      var rangeValues = {
        minimum: minValue,
        maximum: maxValue
      };
      var budget = this.calcBudget({ minimum: minValue, maximum: maxValue });
      var positions = this.calcPositions({ minimum: minValue, maximum: maxValue });

      this.setState({ rangeValues: rangeValues, budget: budget, positions: positions });
    }
  }, {
    key: 'setBudget',
    value: function setBudget(e) {
      var element = e.currentTarget;
      var rangeValues = Object.assign({}, this.state.rangeValues);

      if (element.id === 'maximumBudget') {
        if (+element.value - rangeValues.minimum < 4) {
          rangeValues.maximum = rangeValues.minimum + 4;
        } else {
          rangeValues.maximum = +element.value;
        }
      } else {
        if (rangeValues.maximum - +element.value < 4) {
          rangeValues.minimum = rangeValues.maximum - 4;
        } else {
          rangeValues.minimum = +element.value;
        }
      }

      this.setState({
        budget: this.calcBudget(rangeValues),
        rangeValues: rangeValues,
        positions: this.calcPositions(rangeValues)
      });
    }
  }, {
    key: 'calcPositions',
    value: function calcPositions(rangeValues) {
      var rangeBoxWidth = this.rangeBox.clientWidth;
      var leftPricePosition = rangeValues.minimum * rangeBoxWidth / 100;
      var rightPricePosition = rangeValues.maximum * rangeBoxWidth / 100 - 45;

      if (leftPricePosition + 45 > rightPricePosition) {
        var shift = (leftPricePosition - rightPricePosition + 50) / 2;
        leftPricePosition -= shift;
        rightPricePosition += shift;
      }
      var positions = { leftPricePosition: leftPricePosition, rightPricePosition: rightPricePosition };
      return positions;
    }
  }, {
    key: 'calcBudget',
    value: function calcBudget(values) {
      return {
        minimumBudget: (values.minimum * this.rangeMaximum / 100).toFixed(0),
        maximumBudget: (values.maximum * this.rangeMaximum / 100).toFixed(0)
      };
    }
  }, {
    key: 'save',
    value: function save() {
      if (this.state.loading) return;
      this.setState({
        loading: true
      });
      this.props.setBudget(this.state.budget);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { className: 'answer-panel' },
        _react2.default.createElement(
          'div',
          { className: 'answer-variants' },
          _react2.default.createElement(
            'div',
            { className: 'budget' },
            _react2.default.createElement(
              'div',
              { className: 'range-values', ref: function ref(rangeBox) {
                  return _this2.rangeBox = rangeBox;
                } },
              _react2.default.createElement(
                'div',
                { className: 'from', style: { left: this.state.positions.leftPricePosition }, ref: function ref(from) {
                    return _this2.from = from;
                  } },
                '\xA3',
                this.state.budget.minimumBudget
              ),
              _react2.default.createElement(
                'div',
                { className: 'to', style: { left: this.state.positions.rightPricePosition }, ref: function ref(to) {
                    return _this2.to = to;
                  } },
                '\xA3',
                this.state.budget.maximumBudget
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'range-sliders' },
              _react2.default.createElement('input', {
                type: 'range',
                id: 'minimumBudget',
                value: this.state.rangeValues.minimum,
                onChange: this.setBudget,
                step: this.stepIncrement * 100 / this.rangeMaximum,
                min: this.rangeMinimum * 100 / this.rangeMaximum
              }),
              _react2.default.createElement('input', {
                type: 'range',
                id: 'maximumBudget',
                value: this.state.rangeValues.maximum,
                onChange: this.setBudget,
                step: this.stepIncrement * 100 / this.rangeMaximum,
                style: {
                  background: '\n                    linear-gradient(to right, #c7c5c5 0%, #c7c5c5 ' + this.state.rangeValues.minimum + '%, ' + this.state.rangeValues.minimum + '%, \n                    #CE7D9E ' + this.state.rangeValues.maximum + '%, #c7c5c5 ' + this.state.rangeValues.maximum + '%)\n                  '
                }
              })
            ),
            _react2.default.createElement(
              'div',
              { className: 'text' },
              _react2.default.createElement(
                'span',
                null,
                this.rangeMinimum,
                '\xA3'
              ),
              _react2.default.createElement(
                'span',
                null,
                'Go crazy chef!'
              )
            )
          )
        ),
        _react2.default.createElement(_SendButton2.default, { loading: this.state.loading, handler: this.save })
      );
    }
  }]);

  return SeventhQuestion;
}(_react.Component);

exports.default = SeventhQuestion;

/***/ }),
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _SendButton = __webpack_require__(35);

var _SendButton2 = _interopRequireDefault(_SendButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EighthQuestion = function (_Component) {
  _inherits(EighthQuestion, _Component);

  function EighthQuestion(props) {
    _classCallCheck(this, EighthQuestion);

    var _this = _possibleConstructorReturn(this, (EighthQuestion.__proto__ || Object.getPrototypeOf(EighthQuestion)).call(this, props));

    _this.state = {
      userData: {
        name: '',
        email: '',
        password: ''
      },
      loading: false,
      showPassword: 0,
      errors: []
    };
    _this.setValue = _this.setValue.bind(_this);
    _this.showPassword = _this.showPassword.bind(_this);
    _this.save = _this.save.bind(_this);
    _this.validateForm = _this.validateForm.bind(_this);
    return _this;
  }

  _createClass(EighthQuestion, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.addQuestion(_react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'p',
          null,
          'Great, we have enough information about your family\'s tastes for vacations.'
        ),
        _react2.default.createElement(
          'p',
          null,
          'We are a community of travellers that help each other. We have some influencing family travellers who had witnessed years of travelling to exotic countries.'
        ),
        _react2.default.createElement(
          'p',
          null,
          'Become a part of this close-knit community and enjoy unique trips that your friends may have not experienced.'
        ),
        _react2.default.createElement(
          'p',
          null,
          'Sign up and see those inspiring trips for yourselves.'
        )
      ));
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.signUpData) {
        if (!nextProps.isLogged) {
          this.props.logIn({
            email: this.state.userData.email,
            password: this.state.userData.password,
            strategy: 'local'
          });
        } else {
          this.props.addQuestion('\n          Congratulations! You are now an official member of Vacations Caf\xE9.\n          Now go ahead and setup your first travel to get to our band of specialists design your next trip.\n        ');
          this.props.addOffsetBlock();
          this.props.questionsNavigation.next();
        }
      } else if (nextProps.signUpError) {
        var errorMessage = nextProps.signUpError.message;
        if (nextProps.signUpError.name === 'Conflict') {
          errorMessage = "The email you entered already has an account. Try a different email.";
        }
        this.setState({
          loading: false,
          errors: [errorMessage]
        });
      }
    }
  }, {
    key: 'setValue',
    value: function setValue(e) {
      var userData = Object.assign({}, this.state.userData);
      userData[e.currentTarget.id] = e.currentTarget.value;
      var errors = Object.assign({}, this.state.errors);

      var result = this.validateField(e.currentTarget.id, e.currentTarget.value);
      if (result === true) {
        delete errors[e.currentTarget.id];
      } else {
        errors[e.currentTarget.id] = result;
      }

      this.setState({
        userData: userData,
        errors: errors
      });
    }
  }, {
    key: 'showPassword',
    value: function showPassword() {
      this.setState({
        showPassword: !this.state.showPassword
      });
    }
  }, {
    key: 'validateField',
    value: function validateField(fieldName, value) {
      switch (fieldName) {
        case 'name':
          {
            var fullName = value.split(' ');
            return fullName.length >= 2 && fullName[1] ? true : 'Please, enter your full name';
          }
        case 'email':
          {
            var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(value) ? true : 'Email is not valid';
          }
        case 'password':
          {
            var _re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
            return _re.test(value) ? true : 'Password should contail at least 8 characters, at least one letter and one number';
          }
        default:
          return false;
      }
    }
  }, {
    key: 'validateForm',
    value: function validateForm() {
      var _this2 = this;

      var errors = {};
      Object.keys(this.state.userData).forEach(function (field) {
        var result = _this2.validateField(field, _this2.state.userData[field]);
        if (result === true) return;
        errors[field] = result;
      });
      return errors;
    }
  }, {
    key: 'save',
    value: function save() {
      if (this.state.loading) return;
      var errors = this.validateForm();
      this.setState({
        errors: errors
      });
      if (Object.keys(errors).length) return;
      this.setState({
        loading: true
      });

      var _state$userData$name$ = this.state.userData.name.split(' '),
          _state$userData$name$2 = _slicedToArray(_state$userData$name$, 2),
          firstName = _state$userData$name$2[0],
          lastName = _state$userData$name$2[1];

      this.props.signUp({
        firstName: firstName,
        lastName: lastName,
        email: this.state.userData.email,
        password: this.state.userData.password
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(
        'div',
        { className: 'answer-panel' },
        _react2.default.createElement(
          'div',
          { className: 'answer-variants' },
          _react2.default.createElement(
            'div',
            { className: 'send-form' },
            _react2.default.createElement(
              'div',
              { className: 'input-field' },
              _react2.default.createElement(
                'div',
                null,
                'Name:'
              ),
              _react2.default.createElement('input', { type: 'text', id: 'name', value: this.state.userData.name, onChange: this.setValue })
            ),
            _react2.default.createElement(
              'div',
              { className: 'input-field' },
              _react2.default.createElement(
                'div',
                null,
                'Email address:'
              ),
              _react2.default.createElement('input', { type: 'email', id: 'email', value: this.state.userData.email, onChange: this.setValue })
            ),
            _react2.default.createElement(
              'div',
              { className: 'input-field' },
              _react2.default.createElement(
                'div',
                null,
                'Create password:'
              ),
              _react2.default.createElement('input', { type: this.state.showPassword ? 'text' : 'password', id: 'password', value: this.state.userData.password, onChange: this.setValue }),
              _react2.default.createElement(
                'div',
                { className: 'show-password', onClick: this.showPassword },
                this.state.showPassword ? 'Hide' : 'Show'
              ),
              _react2.default.createElement(
                'div',
                { className: 'login-error' },
                Object.keys(this.state.errors).map(function (error) {
                  return _react2.default.createElement(
                    'div',
                    { key: Math.random() },
                    _this3.state.errors[error]
                  );
                })
              )
            )
          )
        ),
        _react2.default.createElement(_SendButton2.default, { loading: this.state.loading, handler: this.save })
      );
    }
  }]);

  return EighthQuestion;
}(_react.Component);

exports.default = EighthQuestion;

/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _LastPage = __webpack_require__(219);

var _LastPage2 = _interopRequireDefault(_LastPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LastPageContainer = function (_Component) {
  _inherits(LastPageContainer, _Component);

  function LastPageContainer(props) {
    _classCallCheck(this, LastPageContainer);

    var _this = _possibleConstructorReturn(this, (LastPageContainer.__proto__ || Object.getPrototypeOf(LastPageContainer)).call(this, props));

    _this.state = {
      loading: false
    };
    return _this;
  }

  _createClass(LastPageContainer, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_LastPage2.default, null);
    }
  }]);

  return LastPageContainer;
}(_react.Component);

exports.default = LastPageContainer;

/***/ }),
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LastPage = function LastPage(props) {
  return _react2.default.createElement(
    "div",
    { className: "intro last-page" },
    _react2.default.createElement("img", { src: "assets/snowman.png", className: "snowman" }),
    _react2.default.createElement(
      "h1",
      null,
      "Congratulations!"
    ),
    _react2.default.createElement(
      "p",
      null,
      "You are now an official member of Vacations Caf\xE9 community."
    ),
    _react2.default.createElement(
      "p",
      null,
      "My vacation chefs have already received your family's tastes for your next vacation. Now go ahead and install our app to see our band of specialists design your next trip."
    ),
    _react2.default.createElement(
      "p",
      null,
      "Join our mission of making the tourism industry more social, fun and community-driven."
    ),
    _react2.default.createElement(
      "p",
      null,
      "See you on the other end!"
    ),
    _react2.default.createElement(
      "div",
      { className: "last-page__downloads" },
      _react2.default.createElement(
        "a",
        {
          href: "#",
          title: "Available on the App Store"
        },
        _react2.default.createElement("img", { src: "assets/ios-download.svg" })
      ),
      _react2.default.createElement(
        "a",
        {
          href: "#",
          title: "Get it on Google Play"
        },
        _react2.default.createElement("img", { src: "assets/android-download.png" })
      )
    ),
    _react2.default.createElement(
      "p",
      { className: "last-page__email-info" },
      "Psst.. Also, I have sent a welcome email to you with the links to download the app, if you do not want to do it now."
    )
  );
};

exports.default = LastPage;

/***/ }),
/* 220 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 221 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(80);

var _reduxThunk = __webpack_require__(222);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _root = __webpack_require__(223);

var _root2 = _interopRequireDefault(_root);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = (0, _redux.createStore)(_root2.default, (0, _redux.applyMiddleware)(_reduxThunk2.default));

exports.default = store;

/***/ }),
/* 222 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
function createThunkMiddleware(extraArgument) {
  return function (_ref) {
    var dispatch = _ref.dispatch,
        getState = _ref.getState;
    return function (next) {
      return function (action) {
        if (typeof action === 'function') {
          return action(dispatch, getState, extraArgument);
        }

        return next(action);
      };
    };
  };
}

var thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;

exports['default'] = thunk;

/***/ }),
/* 223 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(80);

var _questions = __webpack_require__(224);

var _questions2 = _interopRequireDefault(_questions);

var _members = __webpack_require__(225);

var _members2 = _interopRequireDefault(_members);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
  questionsReducer: _questions2.default,
  membersReducer: _members2.default
});

/***/ }),
/* 224 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _constants = __webpack_require__(48);

var actions = _interopRequireWildcard(_constants);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var initialState = {
  questionNumber: 0
};

function questionsReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case actions.NEXT_QUESTION:
      {
        return Object.assign({}, state, { questionNumber: ++state.questionNumber });
      }
    case actions.PREV_QUESTION:
      {
        return Object.assign({}, state, { questionNumber: --state.questionNumber });
      }
    case actions.GO_TO_QUESTION:
      {
        return Object.assign({}, state, { questionNumber: action.payload });
      }
    default:
      {
        return state;
      }
  }
}

exports.default = questionsReducer;

/***/ }),
/* 225 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _constants = __webpack_require__(48);

var actions = _interopRequireWildcard(_constants);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var initialState = {
  leadMember: {},
  partner: {},
  ageGroups: {},
  travelGroup: {},
  countries: []
};

var membersReducer = function membersReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case actions.ADD_LEAD_MEMBER:
      {
        return Object.assign({}, state, { leadMember: { id: action.payload } });
      }
    case actions.ADD_PARTNER:
      {
        return Object.assign({}, state, { partner: { id: action.payload } });
      }
    case actions.ADD_AGE_GROUPS:
      {
        return Object.assign({}, state, { ageGroups: action.payload });
      }
    case actions.SET_ACTIVITIES:
      {
        var newState = {};
        if (action.payload.memberType === 'lead') {
          newState.leadMember = Object.assign({}, state.leadMember);
          newState.leadMember.preferredActivities = action.payload.activities;
        } else if (action.payload.memberType === 'partner') {
          newState.partner = Object.assign({}, state.partner);
          newState.partner.preferredActivities = action.payload.activities;
        } else {
          newState.children = Object.assign({}, state.children);
          newState.children[action.payload.memberType] = { preferredActivities: action.payload.activities };
        }
        return Object.assign({}, state, newState);
      }
    case actions.CREATE_TRAVEL_GROUP:
      {
        return Object.assign({}, state, { travelGroup: { id: action.payload } });
      }
    case actions.SET_COUNTRIES:
      {
        var travelGroup = Object.assign({}, state.travelGroup);
        travelGroup.preferredCountries = action.payload;
        return Object.assign({}, state, { travelGroup: travelGroup });
      }
    case actions.ADD_CHILDREN:
      {
        return Object.assign({}, state, { children: action.payload });
      }
    case actions.ADD_COUNTRIES:
      {
        return Object.assign({}, state, { countries: action.payload });
      }
    case actions.SET_BUDGET:
      {
        var _travelGroup = Object.assign({}, state.travelGroup);
        _travelGroup.budget = action.payload;
        return Object.assign({}, state, { travelGroup: _travelGroup });
      }
    case actions.SIGN_UP_SUCCESS:
      {
        return Object.assign({}, state, { signUpData: action.payload, signUpError: '' });
      }
    case actions.SIGN_UP_ERROR:
      {
        return Object.assign({}, state, { signUpError: action.payload });
      }
    case actions.LOG_IN_SUCCESS:
      {
        var _newState = Object.assign({}, state, { isLogged: true, logInError: '', userData: action.payload });
        return _newState;
      }
    case actions.LOG_IN_ERROR:
      {
        return Object.assign({}, state, { logInError: action.payload });
      }
    default:
      {
        return state;
      }
  }
};

exports.default = membersReducer;

/***/ })
]),[158]);
//# sourceMappingURL=bundle.4802de72c0007cb0a9aa.js.map