"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.startTaskTime = startTaskTime;

var _TotalTime = _interopRequireDefault(require("./TotalTime.type"));

var _effects = require("redux-saga/effects");

var _Task = require("../task/Task.action");

var _TotalTime2 = require("../totalTime/TotalTime.action");

var _getDate = require("../../logic/getDate");

var _SubmitData = require("../submitData/SubmitData.action");

var _RemainderNotification = require("../../components/remainderNotification/RemainderNotification.component");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _marked =
/*#__PURE__*/
regeneratorRuntime.mark(updateCountDown),
    _marked2 =
/*#__PURE__*/
regeneratorRuntime.mark(startTaskTime);

function updateCountDown() {
  var d, hr, min, sec, _ref, key, countDownProgress, originalTime, lastUpdatedTime, taskReducer, originalTimeLocal, seconds, timeDiff;

  return regeneratorRuntime.wrap(function updateCountDown$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          d = new Date(); // for now

          hr = d.getHours(); // => 9

          min = d.getMinutes(); // =>  30

          sec = d.getSeconds();
          _context.next = 6;
          return (0, _effects.select)(function (state) {
            return state.TotalTimeReducer;
          });

        case 6:
          _ref = _context.sent;
          key = _ref.key;
          countDownProgress = _ref.countDownProgress;
          originalTime = _ref.originalTime;
          lastUpdatedTime = _ref.lastUpdatedTime;
          _context.next = 13;
          return (0, _effects.select)(function (state) {
            return state.TaskReducer;
          });

        case 13:
          taskReducer = _context.sent;

          if (!(parseInt(hr) === 23 && parseInt(min) === 59 && parseInt(sec) === 58)) {
            _context.next = 22;
            break;
          }

          window.alert('The day is about to end, and a new day will begin, We will Save your progress so far');
          _context.next = 18;
          return (0, _effects.put)((0, _SubmitData.submitDataStart)());

        case 18:
          setTimeout(function () {}, 500);
          window.location.reload(false);
          _context.next = 44;
          break;

        case 22:
          originalTimeLocal = originalTime[key][(0, _getDate.GetDate)()];
          seconds = (0, _getDate.GetTimeInSeconds)();
          _context.next = 26;
          return (0, _effects.put)((0, _Task.startRemainder)(seconds));

        case 26:
          if (taskReducer.notification !== null) {
            (0, _RemainderNotification.notify)(taskReducer.notification);
          } //updates the time of main timer as well as the tasks


          if (!countDownProgress) {
            _context.next = 44;
            break;
          }

          if (!(lastUpdatedTime === null)) {
            _context.next = 37;
            break;
          }

          _context.next = 31;
          return (0, _effects.put)((0, _TotalTime2.updateLastRunSec)(seconds));

        case 31:
          _context.next = 33;
          return (0, _effects.put)((0, _TotalTime2.startCountDown)(1));

        case 33:
          _context.next = 35;
          return (0, _effects.put)((0, _Task.startTask)(taskReducer.activeTask, 1, originalTimeLocal));

        case 35:
          _context.next = 44;
          break;

        case 37:
          timeDiff = seconds - lastUpdatedTime;
          _context.next = 40;
          return (0, _effects.put)((0, _TotalTime2.updateLastRunSec)(seconds));

        case 40:
          _context.next = 42;
          return (0, _effects.put)((0, _TotalTime2.startCountDown)(timeDiff));

        case 42:
          _context.next = 44;
          return (0, _effects.put)((0, _Task.startTask)(taskReducer.activeTask, timeDiff, originalTimeLocal));

        case 44:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}

function startTaskTime() {
  return regeneratorRuntime.wrap(function startTaskTime$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return (0, _effects.takeEvery)(_TotalTime["default"].UPDATE_COUNTDOWN, updateCountDown);

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2);
}