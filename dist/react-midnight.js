(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("React"));
	else if(typeof define === 'function' && define.amd)
		define(["React"], factory);
	else if(typeof exports === 'object')
		exports["ReactMidnight"] = factory(require("React"));
	else
		root["ReactMidnight"] = factory(root["React"]);
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

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _decoratorsWithCalendar = __webpack_require__(1);

	var _decoratorsWithCalendar2 = _interopRequireDefault(_decoratorsWithCalendar);

	exports.withCalendar = _decoratorsWithCalendar2['default'];

	var _decoratorsWithCalendarProps = __webpack_require__(6);

	var _decoratorsWithCalendarProps2 = _interopRequireDefault(_decoratorsWithCalendarProps);

	exports.withCalendarProps = _decoratorsWithCalendarProps2['default'];

	var _decoratorsWithDayProps = __webpack_require__(7);

	var _decoratorsWithDayProps2 = _interopRequireDefault(_decoratorsWithDayProps);

	exports.withDayProps = _decoratorsWithDayProps2['default'];

	var _addons2 = __webpack_require__(8);

	var _addons = _interopRequireWildcard(_addons2);

	exports.addons = _addons;

	var _Time2 = __webpack_require__(16);

	var _Time3 = _interopRequireDefault(_Time2);

	exports.Time = _Time3['default'];

	var _utils2 = __webpack_require__(5);

	var _utils3 = _interopRequireDefault(_utils2);

	exports.utils = _utils3['default'];

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	exports['default'] = withCalendar;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _contextTypes = __webpack_require__(3);

	var _contextTypes2 = _interopRequireDefault(_contextTypes);

	var _generateId = __webpack_require__(4);

	var _generateId2 = _interopRequireDefault(_generateId);

	var _utils = __webpack_require__(5);

	var WEEKDAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

	function withCalendar(ComposedCalendar) {
	  var defaultProps = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	  return (function (_Component) {
	    _inherits(_class, _Component);

	    function _class() {
	      var _this = this;

	      _classCallCheck(this, _class);

	      _get(Object.getPrototypeOf(_class.prototype), 'constructor', this).apply(this, arguments);

	      this.state = {
	        date: this.props.date
	      };

	      this._setDate = function (date) {
	        _this.setState({ date: date });
	      };

	      this._navigateWeek = function (direction) {
	        _this._setDate((0, _utils.navigateWeek)(_this.state.date, direction));
	      };

	      this._navigateMonth = function (direction) {
	        _this._setDate((0, _utils.navigateMonth)(_this.state.date, direction));
	      };
	    }

	    _createClass(_class, [{
	      key: 'componentWillReceiveProps',
	      value: function componentWillReceiveProps(nextProps) {
	        if (!(0, _utils.isSame)(this.props.date, nextProps.date)) {
	          this._setDate(nextProps.date);
	        }
	      }
	    }, {
	      key: 'getChildContext',
	      value: function getChildContext() {
	        var _props = this.props;
	        var id = _props.id;
	        var weekStartsOn = _props.weekStartsOn;
	        var forceSixRows = _props.forceSixRows;
	        var minDay = _props.minDay;
	        var maxDay = _props.maxDay;
	        var dayEvents = _props.dayEvents;
	        var renderDay = _props.renderDay;
	        var date = this.state.date;

	        return {
	          id: id,
	          date: date,
	          weeks: (0, _utils.getWeeks)(date, weekStartsOn, forceSixRows),
	          weekdays: this._weekdays,
	          monthLabel: (0, _utils.formatMonth)(date),
	          yearLabel: (0, _utils.formatYear)(date),
	          minDay: minDay,
	          maxDay: maxDay,
	          rules: this._rules,
	          disabledRules: this._disabledRules,
	          dayEvents: dayEvents,
	          renderDay: renderDay,
	          setDate: this._setDate,
	          navigateWeek: this._navigateWeek,
	          navigateMonth: this._navigateMonth
	        };
	      }
	    }, {
	      key: 'render',
	      value: function render() {
	        return _react2['default'].createElement(ComposedCalendar, this.props);
	      }
	    }, {
	      key: '_rules',
	      get: function get() {
	        var rules = this.props.rules;

	        return _extends({
	          today: function today(currDate) {
	            return (0, _utils.isSame)(currDate, new Date());
	          },
	          outside: function outside(currDate, month) {
	            return (0, _utils.isOutsideMonth)(currDate, month);
	          }
	        }, rules);
	      }
	    }, {
	      key: '_disabledRules',
	      get: function get() {
	        var _props2 = this.props;
	        var minDay = _props2.minDay;
	        var maxDay = _props2.maxDay;
	        var disabledRules = _props2.disabledRules;

	        return _extends({
	          before: function before(currDate) {
	            return minDay && (0, _utils.isBeforeDay)(currDate, minDay);
	          },
	          after: function after(currDate) {
	            return maxDay && (0, _utils.isAfterDay)(currDate, maxDay);
	          }
	        }, disabledRules);
	      }
	    }, {
	      key: '_weekdays',
	      get: function get() {
	        var _props3 = this.props;
	        var trimWeekdays = _props3.trimWeekdays;
	        var weekStartsOn = _props3.weekStartsOn;

	        var weekdays = [].concat(WEEKDAYS);
	        var sortedWeekdays = weekdays.concat(weekdays.splice(0, weekStartsOn));

	        return sortedWeekdays.map(function (weekday, index) {
	          return { full: weekday, trimmed: weekday.substring(0, parseInt(trimWeekdays)) };
	        });
	      }
	    }], [{
	      key: 'displayName',
	      value: 'calendarDecorator',
	      enumerable: true
	    }, {
	      key: 'defaultProps',
	      value: _extends({
	        id: (0, _generateId2['default'])(),
	        date: new Date(),
	        trimWeekdays: null,
	        weekStartsOn: 0,
	        forceSixRows: true,
	        minDay: new Date(),
	        maxDay: null,
	        dayEvents: {},
	        renderDay: function renderDay(date) {
	          return date.getDate();
	        }
	      }, defaultProps),
	      enumerable: true
	    }, {
	      key: 'childContextTypes',
	      value: _contextTypes2['default'],
	      enumerable: true
	    }]);

	    return _class;
	  })(_react.Component);
	}

	module.exports = exports['default'];

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

	var _react = __webpack_require__(2);

	exports['default'] = {
	  id: _react.PropTypes.string,
	  date: _react.PropTypes.instanceOf(Date),
	  weeks: _react.PropTypes.array,
	  weekdays: _react.PropTypes.array,
	  monthLabel: _react.PropTypes.string,
	  yearLabel: _react.PropTypes.number,
	  minDay: _react.PropTypes.instanceOf(Date),
	  maxDay: _react.PropTypes.instanceOf(Date),
	  rules: _react.PropTypes.objectOf(_react.PropTypes.func),
	  disabledRules: _react.PropTypes.objectOf(_react.PropTypes.func),
	  dayEvents: _react.PropTypes.objectOf(_react.PropTypes.func),
	  renderDay: _react.PropTypes.func,
	  setDate: _react.PropTypes.func,
	  navigateWeek: _react.PropTypes.func,
	  navigateMonth: _react.PropTypes.func
	};
	module.exports = exports['default'];

/***/ },
/* 4 */
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
/* 5 */
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

	  navigateWeek: function navigateWeek(d, direction) {
	    var currWeek = utils.clone(d);
	    var newWeek = currWeek.setDate(d.getDate() + 7 * direction);
	    return new Date(newWeek);
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

	  getMinutesFromDay: function getMinutesFromDay(date) {},

	  getModifiers: function getModifiers(rules, day, month) {
	    var modifiers = [];

	    Object.keys(rules).forEach(function (key) {
	      if (rules[key](day, month)) {
	        // camelCase to hyphen friendly class name
	        var modifier = key.replace(/[a-z][A-Z]/g, function (str) {
	          return str[0] + '-' + str[1].toLowerCase();
	        });
	        modifiers.push(modifier);
	      }
	    });

	    return modifiers;
	  }
	};

	exports['default'] = utils;
	module.exports = exports['default'];

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	exports['default'] = withCalendarProps;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _contextTypes = __webpack_require__(3);

	var _contextTypes2 = _interopRequireDefault(_contextTypes);

	function withCalendarProps(ComposedComponent) {
	  return (function (_Component) {
	    _inherits(_class, _Component);

	    function _class() {
	      _classCallCheck(this, _class);

	      _get(Object.getPrototypeOf(_class.prototype), 'constructor', this).apply(this, arguments);
	    }

	    _createClass(_class, [{
	      key: 'render',
	      value: function render() {
	        return _react2['default'].createElement(ComposedComponent, _extends({}, this.props, {
	          calendar: _extends({}, this.context)
	        }));
	      }
	    }], [{
	      key: 'displayName',
	      value: 'calendarPropsDecorator',
	      enumerable: true
	    }, {
	      key: 'contextTypes',
	      value: _contextTypes2['default'],
	      enumerable: true
	    }]);

	    return _class;
	  })(_react.Component);
	}

	module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	exports['default'] = withDayProps;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _contextTypes = __webpack_require__(3);

	var _contextTypes2 = _interopRequireDefault(_contextTypes);

	var _utils = __webpack_require__(5);

	function withDayProps(DayComponent) {
	  var className = arguments.length <= 1 || arguments[1] === undefined ? 'cal-day' : arguments[1];

	  return (function (_Component) {
	    _inherits(_class, _Component);

	    function _class() {
	      _classCallCheck(this, _class);

	      _get(Object.getPrototypeOf(_class.prototype), 'constructor', this).apply(this, arguments);

	      this._dayEvents = {};
	      this._modifiers = (0, _utils.getModifiers)(this.context.rules, this.props.day, this.context.date);
	      this._disabledModifiers = (0, _utils.getModifiers)(this.context.disabledRules, this.props.day, this.context.date);
	    }

	    _createClass(_class, [{
	      key: 'shouldComponentUpdate',
	      value: function shouldComponentUpdate(nextProps, nextState, nextContext) {
	        var nextModifiers = (0, _utils.getModifiers)(nextContext.rules, nextProps.day, nextContext.date);
	        var nextdisabledModifiers = (0, _utils.getModifiers)(nextContext.disabledRules, nextProps.day, nextContext.date);

	        if (this._modifiers.length !== nextModifiers.length) {
	          this._modifiers = nextModifiers;
	          return true;
	        }

	        if (this._disabledModifiers.length !== nextdisabledModifiers.length) {
	          this._disabledModifiers = nextdisabledModifiers;
	          return true;
	        }

	        return !(0, _utils.isSame)(this.props.day, nextProps.day);
	      }
	    }, {
	      key: 'componentWillMount',
	      value: function componentWillMount() {
	        this._bindDayEvents();
	      }
	    }, {
	      key: '_bindDayEvents',
	      value: function _bindDayEvents() {
	        var day = this.props.day;
	        var dayEvents = this.context.dayEvents;

	        var bindedDayEvents = {};

	        Object.keys(dayEvents).forEach(function (key) {
	          bindedDayEvents[key] = dayEvents[key].bind(null, day);
	        });

	        this._dayEvents = bindedDayEvents;
	      }
	    }, {
	      key: 'render',
	      value: function render() {
	        var _context = this.context;
	        var dayEvents = _context.dayEvents;
	        var renderDay = _context.renderDay;

	        var context = _objectWithoutProperties(_context, ['dayEvents', 'renderDay']);

	        var className = this.props.className;

	        // build the final class name string with all respective modifiers
	        className += this._modifiers.concat(this._disabledModifiers).map(function (modifier) {
	          return ' ' + className + '--' + modifier;
	        }).join('');

	        return (0, _react.createElement)(DayComponent, {
	          day: this.props.day,
	          calendar: context,
	          className: className,
	          isDisabled: !!this._disabledModifiers.length,
	          dayEvents: this._dayEvents,
	          renderDay: renderDay
	        });
	      }
	    }], [{
	      key: 'displayName',
	      value: 'dayPropsDecorator',
	      enumerable: true
	    }, {
	      key: 'contextTypes',
	      value: _contextTypes2['default'],
	      enumerable: true
	    }, {
	      key: 'defaultProps',
	      value: {
	        className: className
	      },
	      enumerable: true
	    }]);

	    return _class;
	  })(_react.Component);
	}

	module.exports = exports['default'];

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _Header2 = __webpack_require__(9);

	var _Header3 = _interopRequireDefault(_Header2);

	exports.Header = _Header3['default'];

	var _NextMonth2 = __webpack_require__(11);

	var _NextMonth3 = _interopRequireDefault(_NextMonth2);

	exports.NextMonth = _NextMonth3['default'];

	var _PrevMonth2 = __webpack_require__(10);

	var _PrevMonth3 = _interopRequireDefault(_PrevMonth2);

	exports.PrevMonth = _PrevMonth3['default'];

	var _Weekdays2 = __webpack_require__(12);

	var _Weekdays3 = _interopRequireDefault(_Weekdays2);

	exports.Weekdays = _Weekdays3['default'];

	var _Month2 = __webpack_require__(13);

	var _Month3 = _interopRequireDefault(_Month2);

	exports.Month = _Month3['default'];

	var _Day2 = __webpack_require__(14);

	var _Day3 = _interopRequireDefault(_Day2);

	exports.Day = _Day3['default'];

	var _Calendar2 = __webpack_require__(15);

	var _Calendar3 = _interopRequireDefault(_Calendar2);

	exports.Calendar = _Calendar3['default'];

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _decoratorsWithCalendarProps = __webpack_require__(6);

	var _decoratorsWithCalendarProps2 = _interopRequireDefault(_decoratorsWithCalendarProps);

	var _PrevMonth = __webpack_require__(10);

	var _PrevMonth2 = _interopRequireDefault(_PrevMonth);

	var _NextMonth = __webpack_require__(11);

	var _NextMonth2 = _interopRequireDefault(_NextMonth);

	var Header = function Header(_ref) {
	  var _ref$calendar = _ref.calendar;
	  var id = _ref$calendar.id;
	  var month = _ref$calendar.month;
	  var year = _ref$calendar.year;
	  var navigateMonth = _ref$calendar.navigateMonth;
	  return _react2['default'].createElement(
	    'header',
	    { className: 'cal-header' },
	    _react2['default'].createElement(_PrevMonth2['default'], null),
	    _react2['default'].createElement(
	      'div',
	      { className: 'cal-month-year' },
	      _react2['default'].createElement(
	        'div',
	        { className: 'cal-month-label' },
	        month
	      ),
	      _react2['default'].createElement(
	        'div',
	        { className: 'cal-year-label' },
	        year
	      )
	    ),
	    _react2['default'].createElement(_NextMonth2['default'], null)
	  );
	};

	exports['default'] = (0, _decoratorsWithCalendarProps2['default'])(Header);
	module.exports = exports['default'];

/***/ },
/* 10 */
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

	var _decoratorsWithCalendarProps = __webpack_require__(6);

	var _decoratorsWithCalendarProps2 = _interopRequireDefault(_decoratorsWithCalendarProps);

	var _utils = __webpack_require__(5);

	var PrevMonth = (function (_Component) {
	  _inherits(PrevMonth, _Component);

	  function PrevMonth() {
	    var _this = this;

	    _classCallCheck(this, PrevMonth);

	    _get(Object.getPrototypeOf(PrevMonth.prototype), 'constructor', this).apply(this, arguments);

	    this.handleClick = function () {
	      var _props = _this.props;
	      var disabled = _props.disabled;
	      var calendar = _props.calendar;
	      var onClick = _props.onClick;

	      if (!disabled) {
	        calendar.navigateMonth(-1);
	        onClick && onClick.call(_this);
	      }
	    };
	  }

	  _createClass(PrevMonth, [{
	    key: 'render',
	    value: function render() {
	      var _props2 = this.props;
	      var disabled = _props2.disabled;
	      var _props2$calendar = _props2.calendar;
	      var id = _props2$calendar.id;
	      var date = _props2$calendar.date;
	      var minDay = _props2$calendar.minDay;

	      var isDisabled = disabled || minDay && (0, _utils.isSame)(date, minDay, 'month');
	      var classes = 'cal-nav cal-nav--prev';

	      if (isDisabled) {
	        classes += ' cal-nav--disabled';
	      }

	      return _react2['default'].createElement('button', {
	        type: 'button',
	        disabled: isDisabled,
	        'aria-controls': id + '__table',
	        title: 'Previous month',
	        className: classes,
	        onClick: this.handleClick
	      });
	    }
	  }], [{
	    key: 'propTypes',
	    value: {
	      disabled: _react.PropTypes.bool
	    },
	    enumerable: true
	  }, {
	    key: 'defaultProps',
	    value: {
	      disabled: false
	    },
	    enumerable: true
	  }]);

	  return PrevMonth;
	})(_react.Component);

	exports['default'] = (0, _decoratorsWithCalendarProps2['default'])(PrevMonth);
	module.exports = exports['default'];

/***/ },
/* 11 */
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

	var _decoratorsWithCalendarProps = __webpack_require__(6);

	var _decoratorsWithCalendarProps2 = _interopRequireDefault(_decoratorsWithCalendarProps);

	var _utils = __webpack_require__(5);

	var NextMonth = (function (_Component) {
	  _inherits(NextMonth, _Component);

	  function NextMonth() {
	    var _this = this;

	    _classCallCheck(this, NextMonth);

	    _get(Object.getPrototypeOf(NextMonth.prototype), 'constructor', this).apply(this, arguments);

	    this.handleClick = function () {
	      var _props = _this.props;
	      var disabled = _props.disabled;
	      var calendar = _props.calendar;
	      var onClick = _props.onClick;

	      if (!disabled) {
	        calendar.navigateMonth(1);
	        onClick && onClick.call(_this);
	      }
	    };
	  }

	  _createClass(NextMonth, [{
	    key: 'render',
	    value: function render() {
	      var _props2 = this.props;
	      var disabled = _props2.disabled;
	      var _props2$calendar = _props2.calendar;
	      var id = _props2$calendar.id;
	      var date = _props2$calendar.date;
	      var maxDay = _props2$calendar.maxDay;

	      var isDisabled = disabled || maxDay && (0, _utils.isSame)(date, maxDay, 'month');
	      var classes = 'cal-nav cal-nav--next';

	      if (isDisabled) {
	        classes += ' cal-nav--disabled';
	      }

	      return _react2['default'].createElement('button', {
	        type: 'button',
	        disabled: isDisabled,
	        'aria-controls': id + '__table',
	        title: 'Next month',
	        className: classes,
	        onClick: this.handleClick
	      });
	    }
	  }], [{
	    key: 'propTypes',
	    value: {
	      disabled: _react.PropTypes.bool
	    },
	    enumerable: true
	  }, {
	    key: 'defaultProps',
	    value: {
	      disabled: false
	    },
	    enumerable: true
	  }]);

	  return NextMonth;
	})(_react.Component);

	exports['default'] = (0, _decoratorsWithCalendarProps2['default'])(NextMonth);
	module.exports = exports['default'];

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _decoratorsWithCalendarProps = __webpack_require__(6);

	var _decoratorsWithCalendarProps2 = _interopRequireDefault(_decoratorsWithCalendarProps);

	var Weekdays = function Weekdays(_ref) {
	  var weekdays = _ref.calendar.weekdays;
	  return _react2['default'].createElement(
	    'div',
	    { className: 'cal-weekdays' },
	    weekdays.map(function (weekday, index) {
	      return _react2['default'].createElement(
	        'div',
	        {
	          key: index,
	          title: weekday.full,
	          className: 'cal-weekday'
	        },
	        weekday.trimmed
	      );
	    })
	  );
	};

	exports['default'] = (0, _decoratorsWithCalendarProps2['default'])(Weekdays);
	module.exports = exports['default'];

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _decoratorsWithCalendarProps = __webpack_require__(6);

	var _decoratorsWithCalendarProps2 = _interopRequireDefault(_decoratorsWithCalendarProps);

	var _Day = __webpack_require__(14);

	var _Day2 = _interopRequireDefault(_Day);

	var Month = function Month(_ref) {
	  var weeks = _ref.calendar.weeks;
	  var Day = _ref.Day;
	  return _react2['default'].createElement(
	    'div',
	    { className: 'cal-month' },
	    weeks.map(function (week, index) {
	      return _react2['default'].createElement(
	        'div',
	        { key: index, className: 'cal-week' },
	        week.map(function (day) {
	          return _react2['default'].createElement(Day, { key: day, day: day });
	        })
	      );
	    })
	  );
	};

	Month.defaultProps = { Day: _Day2['default'] };

	exports['default'] = (0, _decoratorsWithCalendarProps2['default'])(Month);
	module.exports = exports['default'];

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _decoratorsWithDayProps = __webpack_require__(7);

	var _decoratorsWithDayProps2 = _interopRequireDefault(_decoratorsWithDayProps);

	var _utils = __webpack_require__(5);

	var Day = (function (_Component) {
	  _inherits(Day, _Component);

	  function Day() {
	    _classCallCheck(this, Day);

	    _get(Object.getPrototypeOf(Day.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(Day, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var day = _props.day;
	      var className = _props.className;
	      var dayEvents = _props.dayEvents;
	      var renderDay = _props.renderDay;

	      return _react2['default'].createElement(
	        'div',
	        _extends({
	          key: day,
	          className: className
	        }, dayEvents),
	        renderDay(day)
	      );
	    }
	  }], [{
	    key: 'propTypes',
	    value: {
	      day: _react.PropTypes.instanceOf(Date).isRequired
	    },
	    enumerable: true
	  }]);

	  return Day;
	})(_react.Component);

	exports['default'] = (0, _decoratorsWithDayProps2['default'])(Day);
	module.exports = exports['default'];

/***/ },
/* 15 */
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

	var _decoratorsWithCalendar = __webpack_require__(1);

	var _decoratorsWithCalendar2 = _interopRequireDefault(_decoratorsWithCalendar);

	var _decoratorsWithCalendarProps = __webpack_require__(6);

	var _decoratorsWithCalendarProps2 = _interopRequireDefault(_decoratorsWithCalendarProps);

	var _Header = __webpack_require__(9);

	var _Header2 = _interopRequireDefault(_Header);

	var _Weekdays = __webpack_require__(12);

	var _Weekdays2 = _interopRequireDefault(_Weekdays);

	var _Month = __webpack_require__(13);

	var _Month2 = _interopRequireDefault(_Month);

	var Calendar = (function (_Component) {
	  _inherits(Calendar, _Component);

	  function Calendar() {
	    _classCallCheck(this, Calendar);

	    _get(Object.getPrototypeOf(Calendar.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(Calendar, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var id = _props.calendar.id;
	      var className = _props.className;
	      var minDay = _props.minDay;
	      var maxDay = _props.maxDay;
	      var modifiers = _props.modifiers;

	      var wrapperClassName = className;

	      wrapperClassName += modifiers.map(function (modifier) {
	        return ' ' + className + '--' + modifier;
	      }).join('');

	      return _react2['default'].createElement(
	        'div',
	        { id: id, className: wrapperClassName },
	        _react2['default'].createElement(_Header2['default'], null),
	        _react2['default'].createElement(
	          'div',
	          { className: className + '--body' },
	          _react2['default'].createElement(_Weekdays2['default'], null),
	          _react2['default'].createElement(Weeks, null)
	        )
	      );
	    }
	  }], [{
	    key: 'propTypes',
	    value: {
	      className: _react.PropTypes.string,
	      modifiers: _react.PropTypes.array
	    },
	    enumerable: true
	  }, {
	    key: 'defaultProps',
	    value: {
	      className: 'cal',
	      modifiers: []
	    },
	    enumerable: true
	  }]);

	  return Calendar;
	})(_react.Component);

	exports['default'] = (0, _decoratorsWithCalendar2['default'])((0, _decoratorsWithCalendarProps2['default'])(Calendar), { trimWeekdays: 3 });
	module.exports = exports['default'];

/***/ },
/* 16 */
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