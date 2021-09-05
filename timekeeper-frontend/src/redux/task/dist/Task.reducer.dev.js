"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TaskReducer = void 0;

var _Task = _interopRequireDefault(require("./Task.type"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var INITIAL_STATUS = {
  taskList: {},
  activeTask: null,
  notification: null,
  remainderLastUpdate: null
};

var TaskReducer = function TaskReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATUS;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _Task["default"].ADD_TASK:
      if (state.taskList[action.taskName] === undefined) {
        var taskData = {
          time: 0,
          paused: true,
          isCompleted: false,
          color: 'rgb(239, 68, 11)',
          percentage: 0,
          type: 'task'
        };
        state.taskList[action.taskName] = taskData;
      }

      return _objectSpread({}, state, {
        taskList: _objectSpread({}, state.taskList)
      });

    case _Task["default"].REMOVE_TASK:
      delete state.taskList[action.taskName];

      if (state.activeTask === action.taskName) {
        state.activeTask = null;
      }

      return _objectSpread({}, state, {
        taskList: _objectSpread({}, state.taskList),
        activeTask: state.activeTask,
        notification: null
      });

    case _Task["default"].PAUSE_TASK:
      state.taskList[action.taskName].paused = true;
      state.activeTask = null;
      return _objectSpread({}, state, {
        taskList: _objectSpread({}, state.taskList),
        activeTask: state.activeTask
      });

    case _Task["default"].START_TASK:
      for (var key in state.taskList) {
        state.taskList[key].paused = true;
      }

      state.taskList[action.taskName].paused = false;

      if (action.seconds !== undefined && action.totalTime !== undefined && state.taskList[action.taskName].type !== 'remainder') {
        state.taskList[action.taskName].time = parseInt(state.taskList[action.taskName].time) + parseInt(action.seconds); //console.log(action.totalTime);
        //console.log(state.taskList[action.taskName].time)

        state.taskList[action.taskName].percentage = (state.taskList[action.taskName].time / parseInt(action.totalTime) * parseInt(100)).toFixed(1);
      }

      state.activeTask = action.taskName;
      return _objectSpread({}, state, {
        taskList: _objectSpread({}, state.taskList),
        activeTask: state.activeTask
      });

    case _Task["default"].COMPLETED_TASK:
      state.taskList[action.taskName].isCompleted = true;

      if (state.activeTask === action.taskName) {
        state.activeTask = null;
      }

      return _objectSpread({}, state, {
        taskList: _objectSpread({}, state.taskList),
        activeTask: state.activeTask
      });

    case _Task["default"].ADD_BREAK_TASK:
      for (var k in state.taskList) {
        //console.log(key)
        if (k !== action.taskName) {
          state.taskList[k].paused = true;
        } //console.log(state.taskList[key].pasued)

      }

      if (action.taskName !== 'releaseAll') {
        //console.log(state.taskList)
        if (state.taskList[action.taskName] === undefined) {
          var _taskData = {
            time: 0,
            paused: false,
            isCompleted: false,
            color: action.color,
            percentage: 0,
            type: 'break'
          };
          state.taskList[action.taskName] = _taskData;
          state.activeTask = action.taskName;
        } else {
          //console.log('********************************************************')
          //console.log(state.taskList[action.taskName].paused)
          if (!state.taskList[action.taskName].paused) {
            state.taskList[action.taskName].paused = true;
            state.activeTask = null;
          } else {
            state.taskList[action.taskName].paused = false;
            state.activeTask = action.taskName;
          }
        }
      }

      return _objectSpread({}, state, {
        taskList: _objectSpread({}, state.taskList),
        activeTask: state.activeTask
      });

    case _Task["default"].REMOVE_ALL_TASK:
      return _objectSpread({}, state, {
        taskList: {},
        activeTask: null,
        notification: null
      });

    case _Task["default"].COMPLETE_ALL_TASK:
      for (var k1 in state.taskList) {
        state.taskList[k1].isCompleted = true;
      } //console.log(state.taskList[k1])


      return _objectSpread({}, state, {
        activeTask: null,
        taskList: _objectSpread({}, state.taskList),
        notification: null
      });

    case _Task["default"].ADD_REMAINDER:
      if (state.taskList[action.remainderName] === undefined) {
        var remainderData = {
          time: action.time - Math.floor(new Date() / 1000),
          isCompleted: false,
          color: 'rgb(6, 125, 38)',
          percentage: 100,
          timeRemaining: action.time - Math.floor(new Date() / 1000),
          repeat: action.repeat,
          type: 'remainder'
        };
        state.taskList[action.remainderName] = remainderData;
      }

      return _objectSpread({}, state, {
        taskList: _objectSpread({}, state.taskList)
      });

    case _Task["default"].START_REMAINDER:
      state.notification = null;
      var timeDiff = 0;

      if (state.remainderLastUpdate === null) {
        state.remainderLastUpdate = action.seconds;
        timeDiff = 1;
      } else {
        timeDiff = action.seconds - state.remainderLastUpdate;
        state.remainderLastUpdate = action.seconds;
      }

      for (var key in state.taskList) {
        if (state.taskList[key].type === 'remainder' && state.taskList[key].isCompleted === false) {
          state.taskList[key].timeRemaining = parseInt(state.taskList[key].timeRemaining) - parseInt(timeDiff);

          if (state.taskList[key].timeRemaining <= 0 && state.taskList[key].repeat === false) {
            state.taskList[key].isCompleted = true;
            state.notification = key;
          } else if (state.taskList[key].timeRemaining <= 0 && state.taskList[key].repeat === true) {
            state.notification = key;
            state.taskList[key].timeRemaining = state.taskList[key].time;
          }

          state.taskList[key].percentage = (state.taskList[key].timeRemaining / state.taskList[key].time * parseInt(100)).toFixed(1);
        }
      }

      return _objectSpread({}, state, {
        taskList: _objectSpread({}, state.taskList),
        notification: state.notification,
        remainderLastUpdate: state.remainderLastUpdate
      });

    default:
      return state;
  }
};

exports.TaskReducer = TaskReducer;