(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("React"));
	else if(typeof define === 'function' && define.amd)
		define(["React"], factory);
	else if(typeof exports === 'object')
		exports["Dately"] = factory(require("React"));
	else
		root["Dately"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "dist/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _Calendar = __webpack_require__(1);

	var _Calendar2 = _interopRequireDefault(_Calendar);

	var _Time = __webpack_require__(7);

	var _Time2 = _interopRequireDefault(_Time);

	var _utils = __webpack_require__(6);

	var _utils2 = _interopRequireDefault(_utils);

	exports.Calendar = _Calendar2['default'];
	exports.Time = _Time2['default'];
	exports.utils = _utils2['default'];

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _PrevMonth = __webpack_require__(3);

	var _PrevMonth2 = _interopRequireDefault(_PrevMonth);

	var _NextMonth = __webpack_require__(4);

	var _NextMonth2 = _interopRequireDefault(_NextMonth);

	var _extend = __webpack_require__(5);

	var _extend2 = _interopRequireDefault(_extend);

	var _utils = __webpack_require__(6);

	var WEEKDAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	var ENTER_KEY = 13;

	var Day = (function (_Component) {
	  function Day() {
	    var _this = this;

	    _classCallCheck(this, Day);

	    _get(Object.getPrototypeOf(Day.prototype), 'constructor', this).apply(this, arguments);

	    this.rules = {
	      today: function today(date) {
	        return (0, _utils.isSame)(date, new Date());
	      },
	      outside: function outside(date, month) {
	        return (0, _utils.isOutsideMonth)(date, month);
	      },
	      before: function before(date) {
	        return _this.props.minDay && [(0, _utils.isBeforeDay)(date, _this.props.minDay), true];
	      },
	      after: function after(date) {
	        return _this.props.maxDay && [(0, _utils.isAfterDay)(date, _this.props.maxDay), true];
	      }
	    };
	  }

	  _inherits(Day, _Component);

	  _createClass(Day, [{
	    key: '_handleDateSelect',
	    value: function _handleDateSelect(day) {
	      this.props.onDateSelect(day);
	    }
	  }, {
	    key: '_handleKeyDown',
	    value: function _handleKeyDown(day, e) {
	      if (e.keyCode === ENTER_KEY) {
	        this.props.onDateSelect(day);
	      }
	    }
	  }, {
	    key: '_renderDay',
	    value: function _renderDay(day, rules) {
	      return this.props.renderDay(day, rules);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var month = _props.month;
	      var date = _props.date;
	      var minDay = _props.minDay;
	      var maxDay = _props.maxDay;
	      var outsideDays = _props.outsideDays;
	      var onClick = _props.onClick;
	      var canTouchTap = _props.canTouchTap;
	      var onMouseDown = _props.onMouseDown;
	      var onMouseMove = _props.onMouseMove;
	      var onMouseUp = _props.onMouseUp;

	      var rules = (0, _extend2['default'])(this.rules, this.props.rules);
	      var isOutside = (0, _utils.isOutsideMonth)(date, month);
	      var className = 'cal__day';
	      var modifiers = [];
	      var onDayClick = this._handleDateSelect.bind(this, date);
	      var onDayMouseDown = onMouseDown.bind(this, date);
	      var onDayMouseMove = onMouseMove.bind(this, date);
	      var onDayMouseUp = onMouseUp.bind(this, date);
	      var isDisabled = undefined;

	      Object.keys(rules).forEach(function (key) {
	        var result = rules[key](date, month);
	        isDisabled = false;

	        // if result is an array, deconstruct it
	        if (result && result.constructor === Array) {
	          var _result = _slicedToArray(result, 2);

	          result = _result[0];
	          isDisabled = _result[1];
	        }

	        if (result) {
	          // camelCase to hyphen friendly class name
	          var modifier = key.replace(/[a-z][A-Z]/g, function (str, offset) {
	            return str[0] + '-' + str[1].toLowerCase();
	          });
	          modifiers.push(modifier);

	          // make sure events get disabled as well
	          if (isDisabled) {
	            onDayClick = onDayMouseDown = onDayMouseMove = onDayMouseUp = function (e) {
	              return e.preventDefault();
	            };
	          }
	        }
	      });

	      className += modifiers.map(function (modifier) {
	        return ' ' + className + '--' + modifier;
	      }).join('');

	      if (isOutside && !outsideDays) {
	        return _react2['default'].createElement('td', { 'aria-hidden': 'true', className: className });
	      }

	      return _react2['default'].createElement(
	        'td',
	        {
	          role: 'presentation',
	          'aria-label': date,
	          className: className,
	          tabIndex: isDisabled ? null : 0,
	          onClick: canTouchTap ? null : onDayClick,
	          onTouchTap: canTouchTap ? onDayClick : null,
	          onKeyDown: this._handleKeyDown.bind(this, date),
	          onMouseDown: onDayMouseDown,
	          onMouseMove: onDayMouseMove,
	          onMouseUp: onDayMouseUp
	        },
	        this._renderDay(date, rules)
	      );
	    }
	  }]);

	  return Day;
	})(_react.Component);

	var Week = (function (_Component2) {
	  function Week() {
	    _classCallCheck(this, Week);

	    _get(Object.getPrototypeOf(Week.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _inherits(Week, _Component2);

	  _createClass(Week, [{
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var days = this.props.days.map(function (day) {
	        return _react2['default'].createElement(Day, _extends({}, _this2.props, {
	          key: day.getTime(),
	          date: day
	        }));
	      });

	      return _react2['default'].createElement(
	        'tr',
	        { className: 'cal__week' },
	        days
	      );
	    }
	  }]);

	  return Week;
	})(_react.Component);

	var Calendar = (function (_Component3) {
	  function Calendar() {
	    _classCallCheck(this, Calendar);

	    _get(Object.getPrototypeOf(Calendar.prototype), 'constructor', this).apply(this, arguments);

	    this.state = {
	      month: this.props.date
	    };
	    this._id = this._generateId();
	  }

	  _inherits(Calendar, _Component3);

	  _createClass(Calendar, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      if (this.props.month !== nextProps.month) {
	        this.setState({ month: nextProps.date });
	      }
	    }
	  }, {
	    key: 'setMonth',
	    value: function setMonth(date) {
	      this.setState({ month: date });
	    }
	  }, {
	    key: 'navigateMonth',
	    value: function navigateMonth(direction) {
	      var month = this.state.month;

	      this.setState({ month: (0, _utils.navigateMonth)(month, direction) });
	    }
	  }, {
	    key: '_generateId',

	    // used for ARIA support
	    value: function _generateId() {
	      var timestamp = Date.now();
	      var uniqueNumber = 0;

	      (function () {
	        // If created at same millisecond as previous
	        if (timestamp <= uniqueNumber) {
	          timestamp = ++uniqueNumber;
	        } else {
	          uniqueNumber = timestamp;
	        }
	      })();

	      return 'D' + timestamp;
	    }
	  }, {
	    key: '_renderWeekdays',
	    value: function _renderWeekdays() {
	      var _props2 = this.props;
	      var trimWeekdays = _props2.trimWeekdays;
	      var weekStartsOn = _props2.weekStartsOn;

	      var weekdays = WEEKDAYS.slice(0);
	      var sortedWeekdays = weekdays.concat(weekdays.splice(0, weekStartsOn));

	      var getDays = function getDays() {
	        return sortedWeekdays.map(function (weekday, index) {
	          var weekdayTrimmed = trimWeekdays ? weekday.substring(0, parseInt(trimWeekdays)) : weekday;
	          return _react2['default'].createElement(
	            'th',
	            {
	              key: index,
	              scope: 'col',
	              title: weekday,
	              className: 'cal__weekday'
	            },
	            weekdayTrimmed
	          );
	        });
	      };

	      return _react2['default'].createElement(
	        'thead',
	        null,
	        _react2['default'].createElement(
	          'tr',
	          { className: 'cal__weekdays' },
	          getDays()
	        )
	      );
	    }
	  }, {
	    key: '_renderWeeksInMonth',
	    value: function _renderWeeksInMonth() {
	      var _this3 = this;

	      var month = this.state.month;
	      var _props3 = this.props;
	      var weekStartsOn = _props3.weekStartsOn;
	      var forceSixRows = _props3.forceSixRows;

	      var weeks = (0, _utils.getWeeks)(month, weekStartsOn, forceSixRows).map(function (week, index) {
	        return _react2['default'].createElement(Week, _extends({}, _this3.props, {
	          key: week[0].getTime(),
	          days: week,
	          month: month
	        }));
	      });

	      return _react2['default'].createElement(
	        'tbody',
	        null,
	        weeks
	      );
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props4 = this.props;
	      var className = _props4.className;
	      var minDay = _props4.minDay;
	      var maxDay = _props4.maxDay;
	      var canTouchTap = _props4.canTouchTap;
	      var month = this.state.month;

	      var classes = [];
	      var modifiers = this.props.modifiers ? this.props.modifiers.split(',') : null;
	      var classNames = 'cal';

	      if (className) {
	        classes.push(className);
	      }
	      if (modifiers) {
	        classes.push(modifiers);
	      }

	      classNames += classes.map(function (className) {
	        return ' ' + className;
	      }).join('');

	      var monthLabel = (0, _utils.formatMonth)(month);
	      var yearLabel = (0, _utils.formatYear)(month);

	      // disable prev/next buttons when min/max days set
	      var prevDisabled = undefined,
	          nextDisabled = false;

	      if (minDay && (0, _utils.isSame)(month, minDay, 'month')) {
	        prevDisabled = true;
	      }

	      if (maxDay && (0, _utils.isSame)(month, maxDay, 'month')) {
	        nextDisabled = true;
	      }

	      return _react2['default'].createElement(
	        'div',
	        { className: classNames },
	        _react2['default'].createElement(
	          'header',
	          { className: 'cal__header' },
	          _react2['default'].createElement(_PrevMonth2['default'], {
	            onClick: canTouchTap ? null : this.navigateMonth.bind(this, -1),
	            onTouchTap: canTouchTap ? this.navigateMonth.bind(this, -1) : null,
	            inner: this.props.prevHTML,
	            disable: prevDisabled,
	            controls: this._id + '_table'
	          }),
	          _react2['default'].createElement(
	            'div',
	            { className: 'cal__month-year' },
	            _react2['default'].createElement(
	              'div',
	              { className: 'cal__month' },
	              monthLabel
	            ),
	            _react2['default'].createElement(
	              'div',
	              { className: 'cal__year' },
	              yearLabel
	            )
	          ),
	          _react2['default'].createElement(_NextMonth2['default'], {
	            onClick: canTouchTap ? null : this.navigateMonth.bind(this, 1),
	            onTouchTap: canTouchTap ? this.navigateMonth.bind(this, 1) : null,
	            inner: this.props.nextHTML,
	            disable: nextDisabled,
	            controls: this._id + '_table'
	          })
	        ),
	        _react2['default'].createElement(
	          'table',
	          { id: this._id + '_table', className: 'cal__table' },
	          this._renderWeekdays(),
	          this._renderWeeksInMonth()
	        )
	      );
	    }
	  }], [{
	    key: 'propTypes',
	    value: {
	      date: _react.PropTypes.instanceOf(Date),
	      minDay: _react.PropTypes.instanceOf(Date),
	      maxDay: _react.PropTypes.instanceOf(Date),
	      trimWeekdays: _react.PropTypes.number,
	      weekStartsOn: _react.PropTypes.number,
	      forceSixRows: _react.PropTypes.bool,
	      outsideDays: _react.PropTypes.bool,
	      prevHTML: _react.PropTypes.node,
	      nextHTML: _react.PropTypes.node,
	      prevDisabled: _react.PropTypes.bool,
	      nextDisabled: _react.PropTypes.bool,
	      onDateSelect: _react.PropTypes.func,
	      onMouseDown: _react.PropTypes.func,
	      onMouseMove: _react.PropTypes.func,
	      onMouseUp: _react.PropTypes.func,
	      renderDay: _react.PropTypes.func
	    },
	    enumerable: true
	  }, {
	    key: 'defaultProps',
	    value: {
	      date: new Date(),
	      minDay: null,
	      maxDay: null,
	      trimWeekdays: null,
	      weekStartsOn: 0,
	      forceSixRows: true,
	      outsideDays: true,
	      prevHTML: '',
	      nextHTML: '',
	      canTouchTap: false,
	      rules: {},
	      //locale: 'en',
	      onDateSelect: function onDateSelect() {
	        return null;
	      },
	      onMouseDown: function onMouseDown() {
	        return null;
	      },
	      onMouseMove: function onMouseMove() {
	        return null;
	      },
	      onMouseUp: function onMouseUp() {
	        return null;
	      },
	      renderDay: function renderDay(day) {
	        return day.getDate();
	      }
	    },
	    enumerable: true
	  }]);

	  return Calendar;
	})(_react.Component);

	exports['default'] = Calendar;
	module.exports = exports['default'];

	// Rules are how the particular day should behave,
	// it will add a modifier class to allow styling
	// one day we could provide a hook for inline styles

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var PrevMonth = (function (_Component) {
	  function PrevMonth() {
	    _classCallCheck(this, PrevMonth);

	    _get(Object.getPrototypeOf(PrevMonth.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _inherits(PrevMonth, _Component);

	  _createClass(PrevMonth, [{
	    key: 'handleClick',
	    value: function handleClick() {
	      var onClick = this.props.onClick;

	      if (this.props.disable) return;
	      onClick && onClick.call(this);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var disable = _props.disable;
	      var controls = _props.controls;

	      var classes = 'cal__nav cal__nav--prev';

	      if (disable) {
	        classes += ' cal__nav--disabled';
	      }

	      return _react2['default'].createElement(
	        'button',
	        {
	          className: classes,
	          title: 'Previous month',
	          type: 'button',
	          'aria-disabled': disable,
	          'aria-controls': controls,
	          onClick: this.handleClick.bind(this)
	        },
	        this.props.inner
	      );
	    }
	  }], [{
	    key: 'propTypes',
	    value: {
	      inner: _react.PropTypes.node,
	      disable: _react.PropTypes.bool
	    },
	    enumerable: true
	  }, {
	    key: 'defaultProps',
	    value: {
	      inner: 'Prev',
	      disable: false
	    },
	    enumerable: true
	  }]);

	  return PrevMonth;
	})(_react.Component);

	exports['default'] = PrevMonth;
	module.exports = exports['default'];

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var NextMonth = (function (_Component) {
	  function NextMonth() {
	    _classCallCheck(this, NextMonth);

	    _get(Object.getPrototypeOf(NextMonth.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _inherits(NextMonth, _Component);

	  _createClass(NextMonth, [{
	    key: 'handleClick',
	    value: function handleClick() {
	      var onClick = this.props.onClick;

	      if (this.props.disable) return;
	      onClick && onClick.call(this);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var disable = _props.disable;
	      var controls = _props.controls;

	      var classes = 'cal__nav cal__nav--next';

	      if (disable) {
	        classes += ' cal__nav--disabled';
	      }

	      return _react2['default'].createElement(
	        'button',
	        {
	          className: classes,
	          title: 'Next month',
	          type: 'button',
	          'aria-disabled': disable,
	          'aria-controls': controls,
	          onClick: this.handleClick.bind(this)
	        },
	        this.props.inner
	      );
	    }
	  }], [{
	    key: 'propTypes',
	    value: {
	      inner: _react.PropTypes.node,
	      disable: _react.PropTypes.bool
	    },
	    enumerable: true
	  }, {
	    key: 'defaultProps',
	    value: {
	      inner: 'Next',
	      disable: false
	    },
	    enumerable: true
	  }]);

	  return NextMonth;
	})(_react.Component);

	exports['default'] = NextMonth;
	module.exports = exports['default'];

/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports["default"] = function (out) {
	  out = out || {};

	  for (var i = 1; i < arguments.length; i++) {
	    if (!arguments[i]) continue;

	    for (var key in arguments[i]) {
	      if (arguments[i].hasOwnProperty(key)) out[key] = arguments[i][key];
	    }
	  }

	  return out;
	};

	module.exports = exports["default"];

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

	var utils = {
	  clone: function clone(d) {
	    return new Date(d.getTime());
	  },

	  getFirstDayOfMonth: function getFirstDayOfMonth(d) {
	    return new Date(d.getFullYear(), d.getMonth(), 1);
	  },

	  getDaysInMonth: function getDaysInMonth(d) {

	    var resultDate = utils.getFirstDayOfMonth(d);

	    resultDate.setMonth(resultDate.getMonth() + 1);
	    resultDate.setDate(resultDate.getDate() - 1);

	    return resultDate.getDate();
	  },

	  getWeeks: function getWeeks(d) {
	    var firstDayOfWeek = arguments[1] === undefined ? 0 : arguments[1];
	    var forceSixRows = arguments[2] === undefined ? false : arguments[2];

	    var daysInMonth = utils.getDaysInMonth(d);
	    var days = [];
	    var week = [];
	    var weeks = [];

	    // get all days in a month
	    for (var i = 1; i <= daysInMonth; i++) {
	      days.push(new Date(d.getFullYear(), d.getMonth(), i));
	    }

	    // build weeks array
	    days.forEach(function (day) {
	      if (week.length > 0 && day.getDay() === firstDayOfWeek) {
	        weeks.push(week);
	        week = [];
	      }

	      week.push(day);

	      if (days.indexOf(day) === days.length - 1) {
	        weeks.push(week);
	      }
	    });

	    // unshift days to start the first week
	    var firstWeek = weeks[0];

	    for (var i = 7 - firstWeek.length; i > 0; i--) {
	      var outsideDate = utils.clone(firstWeek[0]);
	      outsideDate.setDate(firstWeek[0].getDate() - 1);
	      firstWeek.unshift(outsideDate);
	      daysInMonth++;
	    }

	    // push days until the end of the last week
	    var lastWeek = weeks[weeks.length - 1];

	    for (var i = lastWeek.length; i < 7; i++) {
	      var outsideDate = utils.clone(lastWeek[lastWeek.length - 1]);
	      outsideDate.setDate(lastWeek[lastWeek.length - 1].getDate() + 1);
	      lastWeek.push(outsideDate);
	      daysInMonth++;
	    }

	    // handle six rows if we need to
	    if (forceSixRows && daysInMonth < 42) {

	      var lastDayOfMonth = weeks[weeks.length - 1][6];
	      var _lastWeek = [];
	      var i = 1;

	      while (daysInMonth < 42) {

	        var lastDayOfMonthClone = utils.clone(lastDayOfMonth);
	        var day = new Date(lastDayOfMonthClone.setDate(lastDayOfMonthClone.getDate() + i));

	        if (_lastWeek.length > 0 && day.getDay() === firstDayOfWeek) {
	          weeks.push(_lastWeek);
	          _lastWeek = [];
	        }

	        _lastWeek.push(day);

	        daysInMonth++;
	        i++;
	      }

	      // push last week after finishing loop
	      weeks.push(_lastWeek);
	    }

	    return weeks;
	  },

	  navigateMonth: function navigateMonth(d, direction) {
	    var currMonth = utils.clone(d);
	    var newMonth = currMonth.setMonth(d.getMonth() + direction);
	    return new Date(newMonth);
	  },

	  isSame: function isSame(d1, d2) {
	    var type = arguments[2] === undefined ? 'day' : arguments[2];

	    var is = {};

	    is.year = function (d1, d2) {
	      return d1.getFullYear() === d2.getFullYear();
	    };

	    is.month = function (d1, d2) {
	      return d1.getMonth() === d2.getMonth() && is.year(d1, d2);
	    };

	    is.day = function (d1, d2) {
	      return d1.getDate() === d2.getDate() && is.month(d1, d2);
	    };

	    if (!d1 || !d2) return false;

	    if (d2.constructor === Array) {
	      for (var i = d2.length; i--;) {
	        if (is[type](d1, d2[i])) return true;
	      }
	      return false;
	    } else {
	      return is[type](d1, d2);
	    }
	  },

	  isBeforeDay: function isBeforeDay(d1, d2) {
	    d2 = utils.clone(d2);
	    d2.setHours(0, 0, 0, 0);
	    return d1 < d2;
	  },

	  isAfterDay: function isAfterDay(d1, d2) {
	    d2 = utils.clone(d2);
	    d2.setHours(0, 0, 0, 0);
	    return d1 > d2;
	  },

	  isOutsideMonth: function isOutsideMonth(d1, d2) {
	    return d1.getMonth() !== d2.getMonth();
	  },

	  getDaysBetween: function getDaysBetween(startDate, endDate) {
	    // swap values if start date is after end date
	    if (utils.isAfterDay(startDate, endDate)) {
	      var _ref = [endDate, startDate];
	      startDate = _ref[0];
	      endDate = _ref[1];
	    }

	    var days = [startDate];
	    var current = startDate;

	    // if days are the same bail
	    if (utils.isSame(startDate, endDate)) {
	      return days;
	    }

	    while (current < endDate) {
	      current = new Date(current.getTime() + 24 * 60 * 60 * 1000);
	      days.push(current);
	    }

	    return days;
	  },

	  formatMonth: function formatMonth(d) {
	    return '' + MONTHS[d.getMonth()];
	  },

	  formatYear: function formatYear(d) {
	    return d.getFullYear();
	  }
	};

	exports['default'] = utils;
	module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var HOURS_IN_DAY = 24;
	var HOURS_TO_NOON = HOURS_IN_DAY / 2;
	var MINUTES_IN_HOUR = 60;
	var MINUTES_IN_DAY = HOURS_IN_DAY * MINUTES_IN_HOUR;

	var Times = (function (_Component) {
	  function Times() {
	    _classCallCheck(this, Times);

	    _get(Object.getPrototypeOf(Times.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _inherits(Times, _Component);

	  _createClass(Times, [{
	    key: '_pad',
	    value: function _pad(n) {
	      return n > 9 ? n : '0' + n;
	    }
	  }, {
	    key: '_format',

	    // would be cool to allow formatting like this:
	    // https://github.com/amsul/pickadate.js/blob/master/lib/picker.time.js#L593-L648
	    // would get rid of the need for a shit load of props
	    value: function _format(minuteInterval) {
	      var _props = this.props;
	      var humanize = _props.humanize;
	      var humanizeStrings = _props.humanizeStrings;
	      var minTime = _props.minTime;
	      var maxTime = _props.maxTime;
	      var interval = _props.interval;
	      var twelveHourClock = _props.twelveHourClock;
	      var pad = _props.pad;
	      var separator = _props.separator;

	      var hour = Math.floor(minuteInterval / MINUTES_IN_HOUR);
	      var minute = minuteInterval / MINUTES_IN_HOUR;

	      // strip the decimal to find the minute value
	      minute = ((minute - Math.floor(minute)) * MINUTES_IN_HOUR).toFixed(0);

	      // make sure we are dealing with numbers
	      hour = parseInt(hour);
	      minute = parseInt(minute);

	      var AMPM = hour < HOURS_TO_NOON ? 'AM' : 'PM';

	      if (humanize) {
	        if (humanizeStrings.begin && hour === minTime && minute === 0) {
	          return humanizeStrings.begin;
	        }

	        if (humanizeStrings.middle && hour === HOURS_TO_NOON && minute === 0) {
	          return humanizeStrings.middle;
	        }

	        if (humanizeStrings.end && hour === maxTime - 1 && minute === MINUTES_IN_HOUR - interval) {
	          return humanizeStrings.end;
	        }
	      }

	      // convert to 12 hour clock
	      if (twelveHourClock) {
	        hour = hour % HOURS_TO_NOON || HOURS_TO_NOON;
	      }

	      // pad with a 0
	      if (pad) {
	        hour = this._pad(hour);
	        minute = this._pad(minute);
	      }

	      return twelveHourClock ? '' + hour + separator + minute + ' ' + AMPM : '' + hour + separator + minute;
	    }
	  }, {
	    key: '_renderTime',
	    value: function _renderTime(formatted, minutes) {
	      return this.props.renderTime(formatted, minutes);
	    }
	  }, {
	    key: '_getTimes',
	    value: function _getTimes() {
	      var _props2 = this.props;
	      var interval = _props2.interval;
	      var minTime = _props2.minTime;
	      var maxTime = _props2.maxTime;

	      var timeLength = maxTime * MINUTES_IN_HOUR;
	      var minutes = minTime * MINUTES_IN_HOUR;
	      var times = [];

	      for (; minutes < timeLength; minutes += interval) {
	        var formatted = this._format(minutes);
	        times.push(this._renderTime(formatted, minutes));
	      }

	      return times;
	    }
	  }, {
	    key: 'render',
	    value: function render() {

	      var times = this._getTimes();

	      return _react.Children.only(this.props.children(times));
	    }
	  }], [{
	    key: 'toDate',
	    value: function toDate(minutes, date) {

	      var newDate = undefined;

	      // default to today's date
	      date = date || new Date();

	      // set to beginning of day
	      date.setHours(0, 0, 0, 0);

	      // merge dates
	      newDate = new Date(date.getTime() + minutes * 60000);

	      // return selected date
	      return newDate;
	    }
	  }, {
	    key: 'propTypes',
	    value: {
	      minTime: _react.PropTypes.number,
	      maxTime: _react.PropTypes.number,
	      interval: _react.PropTypes.number,
	      separator: _react.PropTypes.string,
	      pad: _react.PropTypes.bool,
	      twelveHourClock: _react.PropTypes.bool,
	      humanize: _react.PropTypes.bool,
	      humanizeStrings: _react.PropTypes.object,
	      onTimeSelect: _react.PropTypes.func,
	      renderTime: _react.PropTypes.func
	    },
	    enumerable: true
	  }, {
	    key: 'defaultProps',
	    value: {
	      minTime: 0,
	      maxTime: 24,
	      interval: 60,
	      separator: ':',
	      pad: true,
	      twelveHourClock: true,
	      humanize: false,
	      humanizeStrings: {
	        begin: 'Start of Day',
	        middle: 'Noon',
	        end: 'End of Day'
	      },
	      onTimeSelect: function onTimeSelect() {
	        return null;
	      },
	      renderTime: function renderTime(formatted, minutes) {
	        return _react2['default'].createElement(
	          'option',
	          {
	            key: minutes,
	            value: minutes
	          },
	          formatted
	        );
	      }
	    },
	    enumerable: true
	  }]);

	  return Times;
	})(_react.Component);

	exports['default'] = Times;
	module.exports = exports['default'];
	// showSeconds: false

/***/ }
/******/ ])
});
;