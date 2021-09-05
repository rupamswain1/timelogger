"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.startSubmit = startSubmit;

var _SubmitData = _interopRequireDefault(require("./SubmitData.type"));

var _effects = require("redux-saga/effects");

var _BreakButton = require("../breakButton/BreakButton.action");

var _SubmitData2 = require("../submitData/SubmitData.action");

var _Task = require("../task/Task.action");

var _TotalTime = require("../totalTime/TotalTime.action");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _marked =
/*#__PURE__*/
regeneratorRuntime.mark(startSubmitProcess),
    _marked2 =
/*#__PURE__*/
regeneratorRuntime.mark(startSubmit);

function startSubmitProcess() {
  var taskReducer, breakButtonReducer, totalTimeReducer;
  return regeneratorRuntime.wrap(function startSubmitProcess$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return (0, _effects.put)((0, _BreakButton.startBreak)('releaseAll'));

        case 2:
          _context.next = 4;
          return (0, _effects.put)((0, _Task.completeAll)());

        case 4:
          _context.next = 6;
          return (0, _effects.select)(function (state) {
            return state.TaskReducer.taskList;
          });

        case 6:
          taskReducer = _context.sent;
          _context.next = 9;
          return (0, _effects.select)(function (state) {
            return state.BreakButtonReducer;
          });

        case 9:
          breakButtonReducer = _context.sent;
          _context.next = 12;
          return (0, _effects.select)(function (state) {
            return state.TotalTimeReducer;
          });

        case 12:
          totalTimeReducer = _context.sent;
          _context.next = 15;
          return (0, _effects.put)((0, _SubmitData2.submitDataInProgerss)(taskReducer, breakButtonReducer, totalTimeReducer));

        case 15:
          _context.next = 17;
          return (0, _effects.put)((0, _Task.removeAllTask)());

        case 17:
          _context.next = 19;
          return (0, _effects.put)((0, _TotalTime.removeAllTime)());

        case 19:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}

function startSubmit() {
  return regeneratorRuntime.wrap(function startSubmit$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return (0, _effects.takeEvery)(_SubmitData["default"].SUBMIT_ALL_DATA_START, startSubmitProcess);

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2);
}