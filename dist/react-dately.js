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

	var _Time = __webpack_require__(6);

	var _Time2 = _interopRequireDefault(_Time);

	var _utils = __webpack_require__(5);

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

	var WEEKDAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	var ENTER_KEY = 13;

	var Day = (function (_Component) {
	  function Day() {
	    _classCallCheck(this, Day);

	    _get(Object.getPrototypeOf(Day.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _inherits(Day, _Component);

	  _createClass(Day, [{
	    key: '_handleDateSelect',
	    value: function _handleDateSelect(day) {
	      console.log('test');
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
	    value: function _renderDay(day) {
	      return this.props.renderDay(day);
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
	      var canTouchTap = _props.canTouchTap;

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
	          onClick: canTouchTap ? null : onDayClick,
	          onTouchTap: canTouchTap ? onDayClick : null,
	          tabIndex: isDisabled || isBefore || isAfter ? null : 0,
	          onKeyDown: this._handleKeyDown.bind(this, date)
	        },
	        this._renderDay(date)
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

	      var days = this.props.days.map(function (day) {
	        return _react2['default'].createElement(Day, _extends({}, _this.props, {
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

	      var month = this.state.month;
	      var _props2 = this.props;
	      var weekStartsOn = _props2.weekStartsOn;
	      var forceSixRows = _props2.forceSixRows;

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
	    key: 'generateID',
	    value: function generateID() {

	      var timestamp = Date.now(),
	          uniqueNumber = 0;

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
	    key: 'render',
	    value: function render() {
	      var _props3 = this.props;
	      var className = _props3.className;
	      var minDay = _props3.minDay;
	      var maxDay = _props3.maxDay;
	      var canTouchTap = _props3.canTouchTap;
	      var month = this.state.month;

	      var ID = this.generateID();

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
	            controls: ID + '_table'
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
	            controls: ID + '_table'
	          })
	        ),
	        _react2['default'].createElement(
	          'table',
	          { id: ID + '_table', className: 'cal__table' },
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
	      prevHTML: _react.PropTypes.node,
	      nextHTML: _react.PropTypes.node,
	      prevDisabled: _react.PropTypes.bool,
	      nextDisabled: _react.PropTypes.bool,
	      onDateSelect: _react.PropTypes.func,
	      renderDay: _react.PropTypes.func
	    },
	    enumerable: true
	  }, {
	    key: 'defaultProps',
	    value: {
	      date: new Date(),
	      minDay: null,
	      maxDay: null,
	      disabledDays: null,
	      selectedDays: null,
	      trimWeekdays: null,
	      weekStartsOn: 0,
	      forceSixRows: true,
	      outsideDays: true,
	      prevHTML: '',
	      nextHTML: '',
	      canTouchTap: false,
	      //locale: 'en',
	      onDateSelect: function onDateSelect() {
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

	    if (Array.isArray(d2)) {
	      for (var i = d2.length; i--;) {
	        if (is[type](d1, d2[i])) return i;
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

	    var days = [startDate];
	    var current = startDate;

	    if (isSame(startDate, endDate)) {
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
/* 6 */
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