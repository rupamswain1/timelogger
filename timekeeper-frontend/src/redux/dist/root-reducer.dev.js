"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.persistReducer1 = exports.rootReducer = void 0;

var _redux = require("redux");

var _reduxPersist = require("redux-persist");

var _storage = _interopRequireDefault(require("redux-persist/lib/storage"));

var _TotalTime = require("./totalTime/TotalTime.reducer");

var _BreakButton = require("./breakButton/BreakButton.reducer");

var _Task = require("./task/Task.reducer");

var _SubmitData = require("./submitData/SubmitData.reducer");

var _notes = require("./notes/notes.reducer");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var persistConfig = {
  key: 'root',
  storage: _storage["default"],
  whiteList: ['TotalTimeReducer', 'SubmitDataReducer']
};
var rootReducer = (0, _redux.combineReducers)({
  TotalTimeReducer: _TotalTime.TotalTimeReducer,
  BreakButtonReducer: _BreakButton.BreakButtonReducer,
  TaskReducer: _Task.TaskReducer,
  SubmitDataReducer: _SubmitData.SubmitDataReducer,
  NoteReducer: _notes.NoteReducer
});
exports.rootReducer = rootReducer;
var persistReducer1 = (0, _reduxPersist.persistReducer)(persistConfig, rootReducer);
exports.persistReducer1 = persistReducer1;