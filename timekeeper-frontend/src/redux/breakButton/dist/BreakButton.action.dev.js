"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pauseBreak = exports.startBreak = void 0;

var _BreakButton = _interopRequireDefault(require("./BreakButton.type"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var startBreak = function startBreak(breakName) {
  //console.log(breakName)
  return {
    type: _BreakButton["default"].START_BREAK,
    breakName: breakName
  };
};

exports.startBreak = startBreak;

var pauseBreak = function pauseBreak(breakName) {
  return {
    type: _BreakButton["default"].PAUSE_BREAK,
    breakName: breakName
  };
};

exports.pauseBreak = pauseBreak;