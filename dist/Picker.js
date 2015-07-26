(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("React"));
	else if(typeof define === 'function' && define.amd)
		define(["React"], factory);
	else if(typeof exports === 'object')
		exports["Picker"] = factory(require("React"));
	else
		root["Picker"] = factory(root["React"]);
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

	var _CalendarInput = __webpack_require__(7);

	var _CalendarInput2 = _interopRequireDefault(_CalendarInput);

	var _Time = __webpack_require__(8);

	var _Time2 = _interopRequireDefault(_Time);

	exports.Calendar = _Calendar2['default'];
	exports.CalendarInput = _CalendarInput2['default'];
	exports.Time = _Time2['default'];

/***/ },
/* 1 */
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

	var _PrevMonth = __webpack_require__(3);

	var _PrevMonth2 = _interopRequireDefault(_PrevMonth);

	var _NextMonth = __webpack_require__(4);

	var _NextMonth2 = _interopRequireDefault(_NextMonth);

	var _utils = __webpack_require__(5);

	// Dependencies

	var _classnames = __webpack_require__(6);

	var _classnames2 = _interopRequireDefault(_classnames);

	var WEEKDAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

	var Day = (function (_Component) {
	  function Day() {
	    _classCallCheck(this, Day);

	    _get(Object.getPrototypeOf(Day.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _inherits(Day, _Component);

	  _createClass(Day, [{
	    key: '_handleDateSelect',
	    value: function _handleDateSelect(day) {
	      this.props.onDateSelect(day);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var month = _props.month;
	      var date = _props.date;
	      var disabledDays = _props.disabledDays;
	      var minDay = _props.minDay;
	      var maxDay = _props.maxDay;
	      var selectedDays = _props.selectedDays;
	      var outsideDays = _props.outsideDays;
	      var onClick = _props.onClick;

	      var className = 'cal__day';
	      var modifiers = [];
	      var onDayClick = this._handleDateSelect.bind(this, date);

	      var isToday = (0, _utils.isSame)(date, new Date());

	      if (isToday) {
	        modifiers.push('today');
	      }

	      var isOutside = (0, _utils.isOutsideMonth)(date, month);

	      if (isOutside) {
	        modifiers.push('outside');
	      }

	      var isDisabled = disabledDays ? (0, _utils.isSame)(date, disabledDays) : null;
	      var isBefore = minDay ? (0, _utils.isBeforeDay)(date, minDay) : null;
	      var isAfter = maxDay ? (0, _utils.isAfterDay)(date, maxDay) : null;

	      if (isDisabled || isBefore || isAfter) {
	        modifiers.push('disabled');
	        onDayClick = null;
	      }

	      if (selectedDays) {

	        var isSelected = (0, _utils.isSame)(date, selectedDays);

	        if (isSelected || isSelected === 0) {
	          modifiers.push('selected');
	        }

	        if (isSelected === 0) {
	          modifiers.push('selected-first');
	        }

	        if (isSelected === selectedDays.length - 1) {
	          modifiers.push('selected-last');
	        }
	      }

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
	          onClick: onDayClick
	        },
	        date.getDate()
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
	      var _this = this;

	      var _props2 = this.props;
	      var date = _props2.date;
	      var month = _props2.month;

	      var days = this.props.days.map(function (day) {
	        return _react2['default'].createElement(Day, {
	          key: day.getTime(),
	          date: day,
	          month: month,
	          minDay: _this.props.minDay,
	          maxDay: _this.props.maxDay,
	          disabledDays: _this.props.disabledDays,
	          selectedDays: _this.props.selectedDays,
	          outsideDays: _this.props.outsideDays,
	          onDateSelect: _this.props.onDateSelect
	        });
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
	  }

	  _inherits(Calendar, _Component3);

	  _createClass(Calendar, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      if (this.props.selectedDays) {
	        this._normalizeDates(this.props.selectedDays);
	      }
	      if (this.props.disabledDays) {
	        this._normalizeDates(this.props.disabledDays);
	      }
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      if (nextProps.selectedDays) {
	        this._normalizeDates(nextProps.selectedDays);
	      }
	      if (nextProps.disabledDays) {
	        this._normalizeDates(nextProps.disabledDays);
	      }
	      this.setState({ month: nextProps.date });
	    }
	  }, {
	    key: '_normalizeDates',
	    value: function _normalizeDates(mixed) {

	      var month = new Date();

	      for (var i = mixed.length; i--;) {

	        var mix = mixed[i];

	        // if it's a Date object already then push it
	        // and contiue
	        if (mix instanceof Date) {
	          mixed[i] = mix;
	          continue;
	        }

	        // test if digit and in between current month
	        // or test to block day of week out somehow
	        // reference pickadate and how they do it
	        // just block out day for now
	        if (/^\d+$/.test(mix)) {
	          mixed[i] = new Date(month.getFullYear(), month.getMonth(), mix);
	          continue;
	        }

	        if (Array.isArray(mix)) {
	          mixed[i] = new Date(mix[0], mix[1], mix[2]);
	          continue;
	        }
	      }

	      // finally sort the dates so they're in order
	      mixed.sort(function (a, b) {
	        a = a.getTime();
	        b = b.getTime();
	        return a < b ? -1 : a > b ? 1 : 0;
	      });
	    }
	  }, {
	    key: '_renderWeekdays',
	    value: function _renderWeekdays() {
	      var _this2 = this;

	      var weekdays = WEEKDAYS.slice(0);
	      var sortedWeekdays = weekdays.concat(weekdays.splice(0, this.props.weekStartsOn));

	      var getDays = function getDays() {
	        return sortedWeekdays.map(function (weekday, index) {
	          var trim = _this2.props.trimWeekdays;
	          var weekdayTrimmed = trim !== null ? weekday.substring(0, parseInt(trim)) : weekday;
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

	      var _props3 = this.props;
	      var min = _props3.min;
	      var max = _props3.max;
	      var disabledDays = _props3.disabledDays;
	      var selectedDays = _props3.selectedDays;
	      var outsideDays = _props3.outsideDays;
	      var onDateSelect = _props3.onDateSelect;

	      var month = this.state.month;

	      var weeks = (0, _utils.getWeekArray)(month, this.props.weekStartsOn).map(function (week, index) {
	        return _react2['default'].createElement(Week, {
	          key: week[0].getTime(),
	          days: week,
	          month: month,
	          minDay: _this3.props.minDay,
	          maxDay: _this3.props.maxDay,
	          disabledDays: disabledDays,
	          selectedDays: selectedDays,
	          outsideDays: outsideDays,
	          onDateSelect: onDateSelect
	        });
	      });

	      return _react2['default'].createElement(
	        'tbody',
	        null,
	        weeks
	      );
	    }
	  }, {
	    key: '_navigate',
	    value: function _navigate(direction) {
	      var month = this.state.month;
	      this.setState({ month: (0, _utils.navigateMonth)(month, direction) });
	    }
	  }, {
	    key: '_getModifiers',
	    value: function _getModifiers(modifiers) {

	      var arr = [];
	      var len = modifiers ? modifiers.length : -1;

	      if (len < 0) return null;

	      for (var i = 0; i < len; i++) {
	        arr.push('cal--' + modifiers[i].replace(/\s/g, ''));
	      }

	      return arr;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props4 = this.props;
	      var className = _props4.className;
	      var minDay = _props4.minDay;
	      var maxDay = _props4.maxDay;
	      var month = this.state.month;

	      var modifiers = this._getModifiers(this.props.modifiers && this.props.modifiers.split(','));
	      var classes = (0, _classnames2['default'])('cal', modifiers, className);

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
	        { className: classes },
	        _react2['default'].createElement(
	          'header',
	          { className: 'cal__header' },
	          _react2['default'].createElement(_PrevMonth2['default'], { onClick: this._navigate.bind(this, -1), inner: this.props.prevHTML, disable: prevDisabled }),
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
	          _react2['default'].createElement(_NextMonth2['default'], { onClick: this._navigate.bind(this, 1), inner: this.props.nextHTML, disable: nextDisabled })
	        ),
	        _react2['default'].createElement(
	          'table',
	          { className: 'cal__table' },
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
	      disabledDays: _react.PropTypes.array,
	      selectedDays: _react.PropTypes.array,
	      trimWeekdays: _react.PropTypes.number,
	      weekStartsOn: _react.PropTypes.number,
	      forceSixRows: _react.PropTypes.bool,
	      outsideDays: _react.PropTypes.bool,
	      onDateSelect: _react.PropTypes.func,
	      prevHTML: _react.PropTypes.node,
	      nextHTML: _react.PropTypes.node,
	      prevDisabled: _react.PropTypes.bool,
	      nextDisabled: _react.PropTypes.bool
	      // events: PropTypes.array,
	    },
	    enumerable: true
	  }, {
	    key: 'defaultProps',
	    value: {
	      date: new Date(),
	      minDay: null,
	      maxDay: null,
	      // instead of passing things like disabledDays and selectedDays
	      // we could pass an object and the proper class will get appended
	      // to it so the user could pass custom days, maybe Sunday is a special
	      // day and needs to be treated a certain way, could go alongside
	      // the events prop below we want to implement
	      disabledDays: null,
	      selectedDays: null,
	      trimWeekdays: null,
	      weekStartsOn: 0,
	      forceSixRows: true,
	      outsideDays: true,
	      onDateSelect: function onDateSelect() {
	        return null;
	      },
	      prevHTML: '',
	      nextHTML: ''
	      // show how we could map events using microformat
	      // https://moz.com/blog/markup-events-hcalendar-microformat
	      // https://developer.mozilla.org/en-US/docs/The_hCalendar_microformat
	      // events: [],
	    },
	    enumerable: true
	  }]);

	  return Calendar;
	})(_react.Component);

	exports['default'] = Calendar;
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

	      var classes = 'cal__nav cal__nav--prev';

	      if (this.props.disable) {
	        classes += ' cal__nav--disabled';
	      }

	      return _react2['default'].createElement(
	        'button',
	        {
	          className: classes,
	          role: 'button',
	          title: 'Previous month',
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

	      var classes = 'cal__nav cal__nav--next';

	      if (this.props.disable) {
	        classes += ' cal__nav--disabled';
	      }

	      return _react2['default'].createElement(
	        'button',
	        {
	          className: classes,
	          role: 'button',
	          title: 'Next month',
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

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.addMonths = addMonths;
	exports.clone = clone;
	exports.startOfMonth = startOfMonth;
	exports.getFirstDayOfMonth = getFirstDayOfMonth;
	exports.getLastDayOfMonth = getLastDayOfMonth;
	exports.getFirstDayOfWeek = getFirstDayOfWeek;
	exports.getDaysInMonth = getDaysInMonth;
	exports.navigateMonth = navigateMonth;
	exports.getWeekArray = getWeekArray;
	exports.isOutsideMonth = isOutsideMonth;
	exports.isInsideMonth = isInsideMonth;
	exports.isBeforeDay = isBeforeDay;
	exports.isSame = isSame;
	exports.isAfterDay = isAfterDay;
	exports.formatMonth = formatMonth;
	exports.formatYear = formatYear;
	var MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	var WEEKDAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

	function addMonths(d, months) {
	  var newDate = clone(d);
	  newDate.setMonth(d.getMonth() + months);
	  return newDate;
	}

	function clone(d) {
	  return new Date(d.getTime());
	}

	function startOfMonth(d) {
	  var newDate = clone(d);
	  newDate.setDate(1);
	  newDate.setHours(0);
	  newDate.setMinutes(0);
	  newDate.setSeconds(0);
	  newDate.setMilliseconds(0);
	}

	function getFirstDayOfMonth(d) {
	  return new Date(d.getFullYear(), d.getMonth(), 1);
	}

	function getLastDayOfMonth(d) {
	  var daysInMonth = getDaysInMonth(d);
	  return new Date(d.getFullYear(), d.getMonth(), daysInMonth);
	}

	function getFirstDayOfWeek(d) {

	  var day = d.getDay() || 7;

	  if (day !== 1) {
	    d.setHours(-24 * (day - 1));
	  }

	  return d.getDay();
	}

	function getDaysInMonth(d) {

	  var resultDate = getFirstDayOfMonth(d);

	  resultDate.setMonth(resultDate.getMonth() + 1);
	  resultDate.setDate(resultDate.getDate() - 1);

	  return resultDate.getDate();
	}

	function navigateMonth(d, direction) {

	  var currMonth = d.getMonth();
	  var newDate = new Date(d.setMonth(direction + currMonth));

	  return newDate;
	}

	function getWeekArray(d) {
	  var firstDayOfWeek = arguments[1] === undefined ? 0 : arguments[1];

	  var daysInMonth = getDaysInMonth(d);

	  var dayArray = [];
	  var week = [];
	  var weekArray = [];
	  var dayCount = 0;

	  // get all days in a month
	  for (var i = 1; i <= daysInMonth; i++) {
	    dayArray.push(new Date(d.getFullYear(), d.getMonth(), i));
	    dayCount++;
	  }

	  // build weeks array
	  dayArray.forEach(function (day) {
	    if (week.length > 0 && day.getDay() === firstDayOfWeek) {
	      weekArray.push(week);
	      week = [];
	    }

	    week.push(day);

	    if (dayArray.indexOf(day) === dayArray.length - 1) {
	      weekArray.push(week);
	    }
	  });

	  // unshift days to start the first week
	  var firstWeek = weekArray[0];

	  for (var i = 7 - firstWeek.length; i > 0; i--) {
	    var outsideDate = clone(firstWeek[0]);
	    outsideDate.setDate(firstWeek[0].getDate() - 1);
	    firstWeek.unshift(outsideDate);
	    dayCount++;
	  }

	  // push days until the end of the last week
	  var lastWeek = weekArray[weekArray.length - 1];

	  for (var i = lastWeek.length; i < 7; i++) {
	    var outsideDate = clone(lastWeek[lastWeek.length - 1]);
	    outsideDate.setDate(lastWeek[lastWeek.length - 1].getDate() + 1);
	    lastWeek.push(outsideDate);
	    dayCount++;
	  }

	  // if less than 42 days we know it won't have 6 rows
	  // so lets add however many we need to equal 42
	  if (dayCount < 42) {

	    var lastDayOfMonth = weekArray[weekArray.length - 1][6];
	    var _lastWeek = [];
	    var i = 1;

	    while (dayCount < 42) {

	      var lastDayOfMonthClone = clone(lastDayOfMonth);
	      var day = new Date(lastDayOfMonthClone.setDate(lastDayOfMonthClone.getDate() + i));

	      if (_lastWeek.length > 0 && day.getDay() === firstDayOfWeek) {
	        weekArray.push(_lastWeek);
	        _lastWeek = [];
	      }

	      _lastWeek.push(day);

	      dayCount++;
	      i++;
	    }

	    // push last week after finishing loop
	    weekArray.push(_lastWeek);
	  }

	  return weekArray;
	}

	function isOutsideMonth(d1, d2) {
	  return d1.getMonth() !== d2.getMonth();
	}

	function isInsideMonth(d1, d2) {
	  return d1.getMonth() === d2.getMonth();
	}

	function isBeforeDay(d1, d2) {
	  d2 = clone(d2);
	  d2.setHours(0, 0, 0, 0);
	  return d1 < d2;
	}

	function isSame(d1, d2) {
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

	  if (Array.isArray(d2)) {
	    for (var i = d2.length; i--;) {
	      if (is[type](d1, d2[i])) return i;
	    }
	    return false;
	  } else {
	    return is[type](d1, d2);
	  }
	}

	function isAfterDay(d1, d2) {
	  d2 = clone(d2);
	  d2.setHours(0, 0, 0, 0);
	  return d1 > d2;
	}

	function formatMonth(d) {
	  return '' + MONTHS[d.getMonth()];
	}

	function formatYear(d) {
	  return d.getFullYear();
	}

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2015 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/

	'use strict';

	(function () {
		'use strict';

		function classNames() {

			var classes = '';

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if ('string' === argType || 'number' === argType) {
					classes += ' ' + arg;
				} else if (Array.isArray(arg)) {
					classes += ' ' + classNames.apply(null, arg);
				} else if ('object' === argType) {
					for (var key in arg) {
						if (arg.hasOwnProperty(key) && arg[key]) {
							classes += ' ' + key;
						}
					}
				}
			}

			return classes.substr(1);
		}

		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// AMD. Register as an anonymous module.
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	})();

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _Calendar = __webpack_require__(1);

	var _Calendar2 = _interopRequireDefault(_Calendar);

	var CalendarInput = (function (_Component) {
	  function CalendarInput() {
	    _classCallCheck(this, CalendarInput);

	    _get(Object.getPrototypeOf(CalendarInput.prototype), 'constructor', this).apply(this, arguments);

	    this.state = {
	      isOpen: false
	    };
	    this._documentClickHandler = null;
	  }

	  _inherits(CalendarInput, _Component);

	  _createClass(CalendarInput, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      var _this = this;

	      this._documentClickHandler = function (e) {
	        return _this._documentClick(e);
	      };
	      document.addEventListener('click', this._documentClickHandler);
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      document.removeEventListener('click', this._documentClickHandler);
	    }
	  }, {
	    key: '_documentClick',
	    value: function _documentClick(e) {
	      var componentNode = _react2['default'].findDOMNode(this);
	      this.setState({ isOpen: componentNode.contains(e.target) });
	    }
	  }, {
	    key: '_handleCalendarClick',
	    value: function _handleCalendarClick(date) {
	      this.props.onDateSelect(date);
	      this.setState({ isOpen: false });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var date = _props.date;
	      var wrapperClassName = _props.wrapperClassName;
	      var inputClassName = _props.inputClassName;
	      var placeholder = _props.placeholder;
	      var calendarProps = _props.calendarProps;
	      var hiddenValue = _props.hiddenValue;

	      var formattedDate = this.props.formatDate(date);

	      return _react2['default'].createElement(
	        'div',
	        { className: wrapperClassName },
	        _react2['default'].createElement('input', {
	          type: 'text',
	          className: inputClassName,
	          'aria-haspopup': true,
	          'aria-readonly': false,
	          'aria-expanded': this.state.isOpen,
	          placeholder: placeholder,
	          value: formattedDate,
	          readOnly: true
	        }),
	        this.state.isOpen && _react2['default'].createElement(_Calendar2['default'], _extends({
	          date: date,
	          onDateSelect: this._handleCalendarClick.bind(this)
	        }, calendarProps)),
	        ' ',
	        hiddenValue && _react2['default'].createElement('input', { type: 'hidden', value: date.getTime() })
	      );
	    }
	  }], [{
	    key: 'propTypes',
	    value: {
	      date: _react.PropTypes.instanceOf(Date),
	      wrapperClassName: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.object]),
	      inputClassName: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.object]),
	      placeholder: _react.PropTypes.string,
	      calendarProps: _react.PropTypes.object,
	      hiddenValue: _react.PropTypes.bool,
	      formatDate: _react.PropTypes.func,
	      onDateSelect: _react.PropTypes.func
	    },
	    enumerable: true
	  }, {
	    key: 'defaultProps',
	    value: {
	      date: new Date(),
	      wrapperClassName: null,
	      inputClassName: null,
	      placeholder: null,
	      calendarProps: {
	        modifiers: 'small',
	        trimWeekdays: 2
	      },
	      hiddenValue: false, // strips name from main input into a hidden one
	      formatDate: function formatDate(date) {
	        return date;
	      },
	      onDateSelect: function onDateSelect() {
	        return null;
	      }
	    },
	    enumerable: true
	  }]);

	  return CalendarInput;
	})(_react.Component);

	exports['default'] = CalendarInput;
	module.exports = exports['default'];

/***/ },
/* 8 */
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
	      var startTime = _props.startTime;
	      var endTime = _props.endTime;
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
	        if (hour === startTime && minute === 0) {
	          return humanizeStrings.begin;
	        }

	        if (hour === HOURS_TO_NOON && minute === 0) {
	          return humanizeStrings.middle;
	        }

	        if (hour === endTime - 1 && minute === MINUTES_IN_HOUR - interval) {
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
	      var startTime = _props2.startTime;
	      var endTime = _props2.endTime;

	      var timeLength = endTime * MINUTES_IN_HOUR;
	      var minutes = startTime * MINUTES_IN_HOUR;
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
	      startTime: _react.PropTypes.number,
	      endTime: _react.PropTypes.number,
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
	      startTime: 0,
	      endTime: 24,
	      interval: 60,
	      separator: ':',
	      pad: true,
	      twelveHourClock: true,
	      humanize: false,
	      humanizeStrings: {
	        begin: 'Beginning of Day',
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