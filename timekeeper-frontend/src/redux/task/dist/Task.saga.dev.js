"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.startTask = startTask;
exports.pauseTask = pauseTask;
exports.completeTask = completeTask;
exports.removeTask = removeTask;

var _Task = _interopRequireDefault(require("./Task.type"));

var _effects = require("redux-saga/effects");

var _TotalTime = require("../totalTime/TotalTime.action");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _marked =
/*#__PURE__*/
regeneratorRuntime.mark(startTaskEffects),
    _marked2 =
/*#__PURE__*/
regeneratorRuntime.mark(pauseTaskEffects),
    _marked3 =
/*#__PURE__*/
regeneratorRuntime.mark(completeTaskEffects),
    _marked4 =
/*#__PURE__*/
regeneratorRuntime.mark(startTask),
    _marked5 =
/*#__PURE__*/
regeneratorRuntime.mark(pauseTask),
    _marked6 =
/*#__PURE__*/
regeneratorRuntime.mark(completeTask),
    _marked7 =
/*#__PURE__*/
regeneratorRuntime.mark(removeTask);

function startTaskEffects(_ref) {
  var type, taskName, seconds;
  return regeneratorRuntime.wrap(function startTaskEffects$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          type = _ref.type, taskName = _ref.taskName, seconds = _ref.seconds;
          _context.next = 3;
          return (0, _effects.put)((0, _TotalTime.setCountDownTrue)());

        case 3:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}

function pauseTaskEffects(_ref2) {
  var type, taskName;
  return regeneratorRuntime.wrap(function pauseTaskEffects$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          type = _ref2.type, taskName = _ref2.taskName;
          _context2.next = 3;
          return (0, _effects.put)((0, _TotalTime.pauseCountDown)());

        case 3:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2);
}

function completeTaskEffects(_ref3) {
  var type, taskName, taskReducer;
  return regeneratorRuntime.wrap(function completeTaskEffects$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          type = _ref3.type, taskName = _ref3.taskName;
          _context3.next = 3;
          return (0, _effects.select)(function (state) {
            return state.TaskReducer;
          });

        case 3:
          taskReducer = _context3.sent;

          if (!(taskReducer.activeTask === null)) {
            _context3.next = 7;
            break;
          }

          _context3.next = 7;
          return (0, _effects.put)((0, _TotalTime.pauseCountDown)());

        case 7:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3);
}

function startTask() {
  return regeneratorRuntime.wrap(function startTask$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return (0, _effects.takeEvery)(_Task["default"].START_TASK, startTaskEffects);

        case 2:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4);
}

function pauseTask() {
  return regeneratorRuntime.wrap(function pauseTask$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return (0, _effects.takeEvery)(_Task["default"].PAUSE_TASK, pauseTaskEffects);

        case 2:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked5);
}

function completeTask() {
  return regeneratorRuntime.wrap(function completeTask$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return (0, _effects.takeEvery)(_Task["default"].COMPLETED_TASK, completeTaskEffects);

        case 2:
        case "end":
          return _context6.stop();
      }
    }
  }, _marked6);
}

function removeTask() {
  return regeneratorRuntime.wrap(function removeTask$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.next = 2;
          return (0, _effects.takeEvery)(_Task["default"].REMOVE_TASK, completeTaskEffects);

        case 2:
        case "end":
          return _context7.stop();
      }
    }
  }, _marked7);
}