(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("React"));
	else if(typeof define === 'function' && define.amd)
		define(["React"], factory);
	else if(typeof exports === 'object')
		exports["Calendar"] = factory(require("React"));
	else
		root["Calendar"] = factory(root["React"]);
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

	var _Time = __webpack_require__(5);

	var _Time2 = _interopRequireDefault(_Time);

	exports.Calendar = _Calendar2['default'];
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

	var _utils = __webpack_require__(3);

	// Dependencies

	var _classnames = __webpack_require__(4);

	var _classnames2 = _interopRequireDefault(_classnames);

	var WEEKDAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

	var Day = (function (_Component) {
	    function Day() {
	        _classCallCheck(this, Day);

	        _get(Object.getPrototypeOf(Day.prototype), 'constructor', this).apply(this, arguments);
	    }

	    _inherits(Day, _Component);

	    _createClass(Day, [{
	        key: 'render',
	        value: function render() {
	            var _props = this.props;
	            var month = _props.month;
	            var date = _props.date;
	            var disabledDays = _props.disabledDays;
	            var selectedDays = _props.selectedDays;

	            var className = 'cal__day';
	            var modifiers = [];

	            var isToday = (0, _utils.isSameDay)(date, new Date());

	            if (isToday) {
	                modifiers.push('today');
	            }

	            var isOutside = (0, _utils.isDayOutsideMonth)(date, month);

	            if (isOutside) {
	                modifiers.push('outside');
	            }

	            var isDisabled = (0, _utils.isDaySame)(date, disabledDays);

	            if (isDisabled) {
	                modifiers.push('disabled');
	            }

	            var isSelected = (0, _utils.isDaySame)(date, selectedDays);

	            if (isSelected || isSelected === 0) {
	                modifiers.push('selected');
	            }

	            if (isSelected === 0) {
	                modifiers.push('selected-first');
	            }

	            if (isSelected === selectedDays.length - 1) {
	                modifiers.push('selected-last');
	            }

	            className += modifiers.map(function (modifier) {
	                return ' ' + className + '--' + modifier;
	            }).join('');

	            // if(isOutside && !enableOutsideDays) {
	            //     return <div key={`outside${i}`} className={className}></div>;
	            // }

	            //const { onDayMouseEnter, onDayMouseLeave, onDayTouchTap, onDayClick } = this.props;

	            // let tabIndex = null;

	            // if((onDayTouchTap || onDayClick) && !isOutside) {
	            //     tabIndex = -1;

	            //     // focus on the first day of the month
	            //     if(day.getDate() === 1) {
	            //         tabIndex = this.props.tabIndex;
	            //     }
	            // }

	            return _react2['default'].createElement(
	                'td',
	                {
	                    role: 'presentation',
	                    'aria-label': date,
	                    onClick: this.props.onClick,
	                    className: className
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

	            var date = this.props.date,
	                month = this.props.month;

	            var days = this.props.days.map(function (day) {
	                return _react2['default'].createElement(Day, {
	                    key: day,
	                    date: day,
	                    month: month,
	                    onClick: _this.props.onDaySelect.bind(null, day),
	                    disabledDays: _this.props.disabledDays,
	                    selectedDays: _this.props.selectedDays
	                });
	            });

	            return _react2['default'].createElement(
	                'tr',
	                { className: 'cal__week' },
	                days
	            );
	        }
	    }], [{
	        key: 'defaultProps',
	        value: {
	            onDaySelect: function onDaySelect() {}
	        },
	        enumerable: true
	    }]);

	    return Week;
	})(_react.Component);

	var Calendar = (function (_Component3) {
	    function Calendar(props) {
	        _classCallCheck(this, Calendar);

	        _get(Object.getPrototypeOf(Calendar.prototype), 'constructor', this).call(this, props);
	        this.state = {
	            month: new Date()
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

	            // finally sort the array so it's in order
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

	            var getDays = function getDays() {
	                return WEEKDAYS.map(function (weekday, index) {
	                    var trim = _this2.props.trimWeekdays;
	                    var weekdayTrimmed = trim !== null ? weekday.substring(0, parseInt(trim)) : weekday;
	                    return _react2['default'].createElement(
	                        'th',
	                        { key: index, scope: 'col', title: weekday },
	                        weekdayTrimmed
	                    );
	                });
	            };

	            return _react2['default'].createElement(
	                'thead',
	                null,
	                _react2['default'].createElement(
	                    'tr',
	                    null,
	                    getDays()
	                )
	            );
	        }
	    }, {
	        key: '_renderWeeksInMonth',
	        value: function _renderWeeksInMonth() {
	            var _this3 = this;

	            var month = this.state.month;

	            var weeks = (0, _utils.getWeekArray)(month).map(function (week, index) {
	                return _react2['default'].createElement(Week, {
	                    key: week[0].toString(),
	                    days: week,
	                    month: _this3.state.month,
	                    disabledDays: _this3.props.disabledDays,
	                    selectedDays: _this3.props.selectedDays,
	                    onDaySelect: _this3.props.onDaySelect
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

	            var modifiers = this._getModifiers(this.props.modifiers && this.props.modifiers.split(','));
	            var classes = (0, _classnames2['default'])('cal', modifiers, this.props.className);

	            var monthLabel = (0, _utils.formatMonth)(this.state.month);
	            var yearLabel = (0, _utils.formatYear)(this.state.month);

	            return _react2['default'].createElement(
	                'div',
	                { className: classes },
	                _react2['default'].createElement(
	                    'header',
	                    { className: 'cal__header' },
	                    _react2['default'].createElement(
	                        'a',
	                        { className: 'cal__nav cal__nav--prev', role: 'button', title: 'Previous month', onClick: this._navigate.bind(this, -1) },
	                        'Prev'
	                    ),
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
	                    _react2['default'].createElement(
	                        'a',
	                        { className: 'cal__nav cal__nav--next', role: 'button', title: 'Next month', onClick: this._navigate.bind(this, 1) },
	                        'Next'
	                    )
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
	        key: 'defaultProps',
	        value: {
	            date: new Date(), // default month
	            disabledDays: null,
	            selectedDays: null,
	            weekdays: ['Ne', 'Po', 'Út', 'St', 'Čt', 'Pá', 'So'], // custom weekdays (for locale)
	            trimWeekdays: 1,
	            forceSixRows: true,

	            // show how we could map events using microformat
	            // https://moz.com/blog/markup-events-hcalendar-microformat
	            // https://developer.mozilla.org/en-US/docs/The_hCalendar_microformat
	            events: [],

	            // these should probably be props for input calendar
	            format: 'DD/MM/YYYY',
	            placeholderText: 'Click to select a date'
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
	exports.getModifiersForDay = getModifiersForDay;
	exports.isDayOutsideMonth = isDayOutsideMonth;
	exports.isDaySame = isDaySame;
	exports.isSameDay = isSameDay;
	exports.formatMonthTitle = formatMonthTitle;
	exports.formatMonth = formatMonth;
	exports.formatYear = formatYear;
	var MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	var WEEKDAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

	// export function isPastDay(d) {
	//   let today = new Date();
	//   today.setHours(0, 0, 0, 0);
	//   return d < today;
	// }

	// export function isSameDay(d1, d2) {
	//   d1.setHours(0, 0, 0, 0);
	//   d2.setHours(0, 0, 0, 0);
	//   return d1.getTime() === d2.getTime();
	// }

	// export function isBetween(d, d1, d2) {
	//   d.setHours(0, 0, 0, 0);
	//   d1.setHours(0, 0, 0, 0);
	//   d2.setHours(0, 0, 0, 0);
	//   return d1 < d && d < d2;
	// }

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

	  // let prependWeek = this.getFirstDayOfMonth(d).getDay() >= 4;
	  // let appendWeek = this.getLastDayOfMonth(d).getDay() <= 4;

	  // // prepend a week if the first day begins before Thursday
	  // if(prependWeek && daysInMonth < 28) {

	  //   let prependSixthRow = [];

	  //   for(let i = 7; i > 0; i--) {
	  //     let outsideDate = this.clone(firstWeek[0]);
	  //     outsideDate.setDate(firstWeek[0].getDate() - i);
	  //     prependSixthRow.push(outsideDate);
	  //   }

	  //   weekArray.unshift(prependSixthRow);
	  // }

	  // add a week if the last day is on a Saturday
	  // if(prependWeek || appendWeek) {

	  //   let appendSixthRow = [];

	  //   for(let i = 1; i < 8; i++) {
	  //     let outsideDate = this.clone(lastWeek[lastWeek.length - 1]);
	  //     outsideDate.setDate(lastWeek[lastWeek.length - 1].getDate() + i);
	  //     appendSixthRow.push(outsideDate);
	  //   }

	  //   weekArray.push(appendSixthRow);
	  // }

	  return weekArray;
	}

	function getModifiersForDay() {

	  var modifiers = [];

	  if (modifierFunctions) {
	    for (var modifier in modifierFunctions) {

	      var func = modifierFunctions[modifier];

	      if (func(d)) {
	        modifiers.push(modifier);
	      }
	    }
	  }

	  return modifiers;
	}

	function isDayOutsideMonth(d1, d2) {
	  return d1.getMonth() !== d2.getMonth();
	}

	function isDaySame(date, dates) {

	  if (!date || !dates) return null;

	  // normalize dates as an array
	  dates = Array.isArray(dates) ? dates : [dates];

	  // loop through and find day
	  for (var i = dates.length; i--;) {
	    if (isSameDay(date, dates[i])) return i;
	  }
	  return false;
	}

	function isSameDay(d1, d2) {
	  if (!d1 || !d2) return null;
	  return d1.getDate() === d2.getDate() && d1.getMonth() === d2.getMonth() && d1.getFullYear() === d2.getFullYear();
	}

	function formatMonthTitle(d) {
	  return MONTHS[d.getMonth()] + ' ' + d.getFullYear();
	}

	function formatMonth(d) {
	  return '' + MONTHS[d.getMonth()];
	}

	function formatYear(d) {
	  return d.getFullYear();
	}

/***/ },
/* 4 */
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
/* 5 */
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

	var Time = (function (_Component) {
	    function Time() {
	        _classCallCheck(this, Time);

	        _get(Object.getPrototypeOf(Time.prototype), 'constructor', this).apply(this, arguments);
	    }

	    _inherits(Time, _Component);

	    _createClass(Time, [{
	        key: '_pad',
	        value: function _pad(n) {
	            return n > 9 ? n : '0' + n;
	        }
	    }, {
	        key: '_format',
	        value: function _format(d) {

	            var h = d.getHours();
	            var m = this._pad(d.getMinutes());
	            var AMPM = h < 12 ? 'AM' : 'PM';

	            // convert to 12 hour clock
	            h = h % 12 || 12;

	            // pad with a 0
	            if (this.props.pad) {
	                h = this._pad(h);
	            }

	            return h + ':' + m + ' ' + AMPM;
	        }
	    }, {
	        key: '_getOptions',
	        value: function _getOptions() {

	            var day = this.props.day;
	            var options = [];

	            // set to beginning of day
	            day.setHours(0, 0, 0, 0);

	            // loop through half hour increments
	            for (var i = 0; i < 48; i++) {
	                var time = new Date(day.getTime() + i * 1800000);
	                var display = this._format(time);
	                options.push(_react2['default'].createElement(
	                    'option',
	                    { key: time, value: time },
	                    display
	                ));
	            }

	            return options;
	        }
	    }, {
	        key: '_handleChange',
	        value: function _handleChange(e) {
	            var day = new Date(_react2['default'].findDOMNode(e.target).value);
	            this.props.onChange(day);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2['default'].createElement(
	                'select',
	                _extends({}, this.props, { onChange: this._handleChange.bind(this) }),
	                this._getOptions()
	            );
	        }
	    }], [{
	        key: 'propTypes',
	        value: {
	            day: _react.PropTypes.instanceOf(Date),
	            pad: _react.PropTypes.bool
	        },
	        enumerable: true
	    }, {
	        key: 'defaultProps',
	        value: {
	            day: new Date(),
	            pad: true
	        },
	        enumerable: true
	    }]);

	    return Time;
	})(_react.Component);

	exports['default'] = Time;
	module.exports = exports['default'];

/***/ }
/******/ ])
});
;