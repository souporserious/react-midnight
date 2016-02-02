(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("React"));
	else if(typeof define === 'function' && define.amd)
		define(["React"], factory);
	else if(typeof exports === 'object')
		exports["ReactDately"] = factory(require("React"));
	else
		root["ReactDately"] = factory(root["React"]);
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

	// Thanks to the following libraries for the inspiration
	// https://github.com/gpbl/react-day-picker
	// https://github.com/amsul/pickadate.js

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequire(obj) { return obj && obj.__esModule ? obj['default'] : obj; }

	var _Dately = __webpack_require__(1);

	exports.Dately = _interopRequire(_Dately);

	var _PrevMonth = __webpack_require__(3);

	exports.PrevMonth = _interopRequire(_PrevMonth);

	var _NextMonth = __webpack_require__(4);

	exports.NextMonth = _interopRequire(_NextMonth);

	var _Calendar = __webpack_require__(7);

	exports.Calendar = _interopRequire(_Calendar);

	var _Time = __webpack_require__(8);

	exports.Time = _interopRequire(_Time);

	var _utils = __webpack_require__(6);

	exports.utils = _interopRequire(_utils);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _PrevMonth = __webpack_require__(3);

	var _PrevMonth2 = _interopRequireDefault(_PrevMonth);

	var _NextMonth = __webpack_require__(4);

	var _NextMonth2 = _interopRequireDefault(_NextMonth);

	var _generateId = __webpack_require__(5);

	var _generateId2 = _interopRequireDefault(_generateId);

	var _utils = __webpack_require__(6);

	var WEEKDAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	var ENTER_KEY = 13;
	var noopNull = function noopNull() {
	  return null;
	};

	var Day = (function (_Component) {
	  _inherits(Day, _Component);

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
	      }
	    };
	    this.disabledRules = {
	      before: function before(date) {
	        return _this.props.minDay && (0, _utils.isBeforeDay)(date, _this.props.minDay);
	      },
	      after: function after(date) {
	        return _this.props.maxDay && (0, _utils.isAfterDay)(date, _this.props.maxDay);
	      }
	    };
	  }

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

	      var rules = _extends({}, this.rules, this.props.rules);
	      var disabledRules = _extends({}, this.disabledRules, this.props.disabledRules);
	      var modifiers = [];
	      var onDayClick = this._handleDateSelect.bind(this, date);
	      var onDayMouseDown = onMouseDown.bind(null, date);
	      var onDayMouseMove = onMouseMove.bind(null, date);
	      var onDayMouseUp = onMouseUp.bind(null, date);
	      var isDisabled = false;

	      // add respective rules to day
	      Object.keys(rules).forEach(function (key) {
	        var result = rules[key](date, month);

	        if (result) {
	          // camelCase to hyphen friendly class name
	          var modifier = key.replace(/[a-z][A-Z]/g, function (str) {
	            return str[0] + '-' + str[1].toLowerCase();
	          });
	          modifiers.push(modifier);
	        }
	      });

	      Object.keys(disabledRules).forEach(function (key) {
	        var result = disabledRules[key](date, month);

	        if (result) {
	          // camelCase to hyphen friendly class name
	          var modifier = key.replace(/[a-z][A-Z]/g, function (str) {
	            return str[0] + '-' + str[1].toLowerCase();
	          });
	          modifiers.push(modifier);

	          // make sure events get disabled as well
	          onDayClick = onDayMouseDown = onDayMouseMove = onDayMouseUp = function (e) {
	            return e.preventDefault();
	          };

	          isDisabled = true;
	        }
	      });

	      var props = {
	        role: 'presentation',
	        ariaLabel: date,
	        modifiers: modifiers,
	        tabIndex: isDisabled ? null : 0,
	        onClick: canTouchTap ? null : onDayClick,
	        onTouchTap: canTouchTap ? onDayClick : null,
	        onKeyDown: this._handleKeyDown.bind(this, date),
	        onMouseDown: onDayMouseDown,
	        onMouseMove: onDayMouseMove,
	        onMouseUp: onDayMouseUp
	      };

	      return this.props.renderDay(date, props, rules);
	    }
	  }]);

	  return Day;
	})(_react.Component);

	var Dately = (function (_Component2) {
	  _inherits(Dately, _Component2);

	  function Dately() {
	    _classCallCheck(this, Dately);

	    _get(Object.getPrototypeOf(Dately.prototype), 'constructor', this).apply(this, arguments);

	    this.state = {
	      month: this.props.date
	    };
	    this._id = (0, _generateId2['default'])();
	  }

	  _createClass(Dately, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      if (!(0, _utils.isSame)(this.props.date, nextProps.date, 'month')) {
	        this.setState({ month: nextProps.date });
	      }
	    }
	  }, {
	    key: 'setMonth',
	    value: function setMonth(month) {
	      this.setState({ month: month });
	    }
	  }, {
	    key: 'navigateMonth',
	    value: function navigateMonth(direction) {
	      this.setState({
	        month: (0, _utils.navigateMonth)(this.state.month, direction)
	      });
	    }
	  }, {
	    key: '_renderWeekdays',
	    value: function _renderWeekdays() {
	      var _props2 = this.props;
	      var trimWeekdays = _props2.trimWeekdays;
	      var weekStartsOn = _props2.weekStartsOn;

	      var weekdays = WEEKDAYS.slice(0);
	      var sortedWeekdays = weekdays.concat(weekdays.splice(0, weekStartsOn));

	      return sortedWeekdays.map(function (weekday, index) {
	        return trimWeekdays ? weekday.substring(0, parseInt(trimWeekdays)) : weekday;
	      });
	    }
	  }, {
	    key: '_renderWeeksInMonth',
	    value: function _renderWeeksInMonth() {
	      var month = this.state.month;
	      var _props3 = this.props;
	      var weekStartsOn = _props3.weekStartsOn;
	      var forceSixRows = _props3.forceSixRows;

	      var props = _objectWithoutProperties(_props3, ['weekStartsOn', 'forceSixRows']);

	      return (0, _utils.getWeeks)(month, weekStartsOn, forceSixRows).map(function (week) {
	        return week.map(function (day) {
	          return _react2['default'].createElement(Day, _extends({}, props, {
	            month: month,
	            key: day.getTime(),
	            date: day
	          }));
	        });
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var month = this.state.month;
	      var children = this.props.children;

	      return _react.Children.only(children({
	        id: this._id,
	        month: month,
	        monthLabel: (0, _utils.formatMonth)(month),
	        yearLabel: (0, _utils.formatYear)(month),
	        weekdays: this._renderWeekdays(),
	        weeks: this._renderWeeksInMonth()
	      }));
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
	      canTouchTap: _react.PropTypes.bool,
	      rules: _react.PropTypes.object,
	      disabledRules: _react.PropTypes.object,
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
	      outsideDays: false,
	      prevHTML: '',
	      nextHTML: '',
	      prevDisabled: false,
	      nextDisabled: false,
	      canTouchTap: false,
	      rules: {},
	      disabledRules: {},
	      //locale: 'en',
	      onDateSelect: noopNull,
	      onMouseDown: noopNull,
	      onMouseMove: noopNull,
	      onMouseUp: noopNull,
	      renderDay: function renderDay(day) {
	        return day.getDate();
	      }
	    },
	    enumerable: true
	  }]);

	  return Dately;
	})(_react.Component);

	exports['default'] = Dately;
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

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var PrevMonth = (function (_Component) {
	  _inherits(PrevMonth, _Component);

	  function PrevMonth() {
	    var _this = this;

	    _classCallCheck(this, PrevMonth);

	    _get(Object.getPrototypeOf(PrevMonth.prototype), 'constructor', this).apply(this, arguments);

	    this.handleClick = function () {
	      var onClick = _this.props.onClick;

	      if (_this.props.disable) return;
	      onClick && onClick.call(_this);
	    };
	  }

	  _createClass(PrevMonth, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var disable = _props.disable;
	      var controls = _props.controls;
	      var innerHTML = _props.innerHTML;

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
	          onClick: this.handleClick
	        },
	        innerHTML
	      );
	    }
	  }], [{
	    key: 'propTypes',
	    value: {
	      innerHTML: _react.PropTypes.node,
	      disable: _react.PropTypes.bool
	    },
	    enumerable: true
	  }, {
	    key: 'defaultProps',
	    value: {
	      innerHTML: 'Prev',
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

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var NextMonth = (function (_Component) {
	  _inherits(NextMonth, _Component);

	  function NextMonth() {
	    var _this = this;

	    _classCallCheck(this, NextMonth);

	    _get(Object.getPrototypeOf(NextMonth.prototype), 'constructor', this).apply(this, arguments);

	    this.handleClick = function () {
	      var onClick = _this.props.onClick;

	      if (_this.props.disable) return;
	      onClick && onClick.call(_this);
	    };
	  }

	  _createClass(NextMonth, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var disable = _props.disable;
	      var controls = _props.controls;
	      var innerHTML = _props.innerHTML;

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
	          onClick: this.handleClick
	        },
	        innerHTML
	      );
	    }
	  }], [{
	    key: 'propTypes',
	    value: {
	      innerHTML: _react.PropTypes.node,
	      disable: _react.PropTypes.bool
	    },
	    enumerable: true
	  }, {
	    key: 'defaultProps',
	    value: {
	      innerHTML: 'Next',
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

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = generateId;
	var uniqueNumber = 0;

	function generateId() {
	  var timestamp = Date.now();

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

	module.exports = exports['default'];

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	var DAYS_IN_WEEK = 7;

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

	  getDays: function getDays(d) {
	    var daysInMonth = utils.getDaysInMonth(d);
	    var days = [];

	    // get all days in a month
	    for (var i = 1; i <= daysInMonth; i++) {
	      days.push(new Date(d.getFullYear(), d.getMonth(), i));
	    }

	    return days;
	  },

	  getWeeks: function getWeeks(d) {
	    var firstDayOfWeek = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];
	    var forceSixRows = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];

	    var days = utils.getDays(d);
	    var daysInMonth = days.length;
	    var week = [];
	    var weeks = [];

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

	    for (var i = DAYS_IN_WEEK - firstWeek.length; i > 0; i--) {
	      var outsideDate = utils.clone(firstWeek[0]);
	      outsideDate.setDate(firstWeek[0].getDate() - 1);
	      firstWeek.unshift(outsideDate);
	      daysInMonth++;
	    }

	    // push days until the end of the last week
	    var lastWeek = weeks[weeks.length - 1];

	    for (var i = lastWeek.length; i < DAYS_IN_WEEK; i++) {
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
	    var newMonth = currMonth.setMonth(d.getMonth() + direction, 1);
	    return new Date(newMonth);
	  },

	  isSame: function isSame(d1, d2) {
	    var type = arguments.length <= 2 || arguments[2] === undefined ? 'day' : arguments[2];

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
	        if (is[type](d1, d2[i])) {
	          return true;
	        }
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

	    // if days are the same bail
	    if (utils.isSame(startDate, endDate)) {
	      return [startDate];
	    }

	    var days = [];
	    var current = startDate;

	    while (current <= endDate) {
	      days.push(current);
	      current = new Date(current.getTime() + 24 * 60 * 60 * 1000);
	    }

	    return days;
	  },

	  getMonths: function getMonths() {
	    return MONTHS;
	  },

	  formatMonth: function formatMonth(d) {
	    return '' + MONTHS[d.getMonth()];
	  },

	  formatYear: function formatYear(d) {
	    return d.getFullYear();
	  },

	  addMinutesToDay: function addMinutesToDay(date, minutes) {
	    // default to today's date
	    date = date || new Date();

	    // set to beginning of day
	    date.setHours(0, 0, 0, 0);

	    return new Date(date.getTime() + minutes * 60000);
	  },

	  getMinutesFromDay: function getMinutesFromDay(date) {}
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

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _Dately = __webpack_require__(1);

	var _Dately2 = _interopRequireDefault(_Dately);

	var _PrevMonth = __webpack_require__(3);

	var _PrevMonth2 = _interopRequireDefault(_PrevMonth);

	var _NextMonth = __webpack_require__(4);

	var _NextMonth2 = _interopRequireDefault(_NextMonth);

	var _utils = __webpack_require__(6);

	var _utils2 = _interopRequireDefault(_utils);

	var isSame = _utils2['default'].isSame;
	var isBeforeDay = _utils2['default'].isBeforeDay;
	var isAfterDay = _utils2['default'].isAfterDay;
	var getDaysBetween = _utils2['default'].getDaysBetween;
	var getMonths = _utils2['default'].getMonths;

	var Calendar = (function (_Component) {
	  _inherits(Calendar, _Component);

	  function Calendar() {
	    var _this = this;

	    _classCallCheck(this, Calendar);

	    _get(Object.getPrototypeOf(Calendar.prototype), 'constructor', this).apply(this, arguments);

	    this._renderDay = function (date, _ref, rules) {
	      var modifiers = _ref.modifiers;

	      var props = _objectWithoutProperties(_ref, ['modifiers']);

	      var className = 'cal__day';

	      // build the final class name string with all respective modifiers
	      className += modifiers.map(function (modifier) {
	        return ' ' + className + '--' + modifier;
	      }).join('');

	      return _react2['default'].createElement(
	        'td',
	        _extends({}, props, { className: className }),
	        _this.props.renderDay(date, rules)
	      );
	    };
	  }

	  _createClass(Calendar, [{
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var _props = this.props;
	      var minDay = _props.minDay;
	      var maxDay = _props.maxDay;
	      var modifiers = _props.modifiers;

	      var className = 'cal';

	      className += modifiers.map(function (modifier) {
	        return ' ' + className + '--' + modifier;
	      }).join('');

	      return _react2['default'].createElement(
	        _Dately2['default'],
	        _extends({
	          ref: 'calendar'
	        }, this.props, {
	          renderDay: this._renderDay
	        }),
	        function (_ref2) {
	          var id = _ref2.id;
	          var monthLabel = _ref2.monthLabel;
	          var yearLabel = _ref2.yearLabel;
	          var month = _ref2.month;
	          var weekdays = _ref2.weekdays;
	          var weeks = _ref2.weeks;
	          return _react2['default'].createElement(
	            'div',
	            { id: id, className: className },
	            _react2['default'].createElement(
	              'header',
	              { className: 'cal__header' },
	              _react2['default'].createElement(_PrevMonth2['default'], {
	                onClick: function () {
	                  return _this2.refs.calendar.navigateMonth(-1);
	                },
	                innerHTML: '',
	                disable: minDay && isSame(month, minDay, 'month'),
	                controls: id + '__table'
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
	                onClick: function () {
	                  return _this2.refs.calendar.navigateMonth(1);
	                },
	                innerHTML: '',
	                disable: maxDay && isSame(month, maxDay, 'month'),
	                controls: id + '__table'
	              })
	            ),
	            _react2['default'].createElement(
	              'table',
	              { className: 'cal__table' },
	              _react2['default'].createElement(
	                'thead',
	                null,
	                _react2['default'].createElement(
	                  'tr',
	                  { className: 'cal__weekdays' },
	                  weekdays.map(function (weekday, index) {
	                    return _react2['default'].createElement(
	                      'th',
	                      {
	                        key: index,
	                        scope: 'col',
	                        title: weekday,
	                        className: 'cal__weekday'
	                      },
	                      weekday
	                    );
	                  })
	                )
	              ),
	              _react2['default'].createElement(
	                'tbody',
	                null,
	                weeks.map(function (week, index) {
	                  return _react2['default'].createElement(
	                    'tr',
	                    { key: index, className: 'cal__week' },
	                    week
	                  );
	                })
	              )
	            )
	          );
	        }
	      );
	    }
	  }], [{
	    key: 'propTypes',
	    value: {
	      modifiers: _react.PropTypes.array,
	      renderDay: _react.PropTypes.func
	    },
	    enumerable: true
	  }, {
	    key: 'defaultProps',
	    value: {
	      modifiers: [],
	      renderDay: function renderDay(date) {
	        return date.getDate();
	      }
	    },
	    enumerable: true
	  }]);

	  return Calendar;
	})(_react.Component);

	exports['default'] = Calendar;
	module.exports = exports['default'];

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var HOURS_IN_DAY = 24;
	var HOURS_TO_NOON = HOURS_IN_DAY / 2;
	var MINUTES_IN_HOUR = 60;
	var MINUTES_IN_DAY = HOURS_IN_DAY * MINUTES_IN_HOUR;

	var Times = (function (_Component) {
	  _inherits(Times, _Component);

	  function Times() {
	    _classCallCheck(this, Times);

	    _get(Object.getPrototypeOf(Times.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(Times, [{
	    key: '_pad',

	    // showSeconds: false
	    value: function _pad(n) {
	      return n > 9 ? n : '0' + n;
	    }

	    // would be cool to allow formatting like this:
	    // https://github.com/amsul/pickadate.js/blob/master/lib/picker.time.js#L593-L648
	    // would get rid of the need for a shit load of props
	  }, {
	    key: '_format',
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
	      } },
	    enumerable: true
	  }]);

	  return Times;
	})(_react.Component);

	exports['default'] = Times;
	module.exports = exports['default'];

/***/ }
/******/ ])
});
;