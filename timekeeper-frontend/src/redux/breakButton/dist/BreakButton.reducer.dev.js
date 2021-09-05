"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BreakButtonReducer = void 0;

var _BreakButton = _interopRequireDefault(require("./BreakButton.type"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var INITIAL_STATE = {
  instagram: {
    isActive: false,
    time: 0,
    color: 'rgb(243, 9, 192)'
  },
  faceBook: {
    isActive: false,
    time: 0,
    color: 'rgb(10, 79, 158)'
  },
  youtube: {
    isActive: false,
    time: 0,
    color: 'rgb(192, 9, 9)'
  },
  call: {
    isActive: false,
    time: 0,
    color: 'rgb(109, 75, 204)'
  },
  messaging: {
    isActive: false,
    time: 0,
    color: 'rgb(43, 192, 43)'
  },
  sleep: {
    isActive: false,
    time: 0,
    color: 'rgb(36, 109, 128)'
  },
  excercise: {
    isActive: false,
    time: 0,
    color: 'rgb(13, 121, 94)'
  },
  tea: {
    isActive: false,
    time: 0,
    color: 'rgb(102, 50, 7)'
  },
  food: {
    isActive: false,
    time: 0,
    color: 'rgb(48, 197, 185)'
  },
  releaseAll: {
    isActive: true,
    time: 0,
    color: 'rgb(48, 1, 1)'
  },
  miscelaneous: {
    isActive: false,
    time: 0,
    color: 'rgb(115, 20, 223)'
  },
  currentActive: 'releaseAll'
};

var BreakButtonReducer = function BreakButtonReducer() {
  var _objectSpread2;

  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _BreakButton["default"].START_BREAK:
      var prevActive = '';
      var btnName = action.breakName; //console.log(btnName)

      if (action.breakName !== 'releaseAll') {
        state[state.currentActive].isActive = false;
        state[action.breakName].isActive = true;
        state.currentActive = action.breakName;
        prevActive = state.currentActive;
      } else {
        state[state.currentActive].isActive = false;
        state.currentActive = action.breakName;
        prevActive = state.currentActive;
      }

      return _objectSpread({}, state, (_objectSpread2 = {}, _defineProperty(_objectSpread2, btnName, _objectSpread({}, state[btnName])), _defineProperty(_objectSpread2, prevActive, _objectSpread({}, state[prevActive])), _objectSpread2));

    case _BreakButton["default"].PAUSE_BREAK:
      state[state.currentActive].isActive = false;
      return _objectSpread({}, state, _defineProperty({}, action.breakName, _objectSpread({}, state[action.breakName])));

    case _BreakButton["default"].GET_BREAK_COLOR:
      var color = state[action.breakName].color; //console.log(color)
      //console.log(state[action.breakName])

      return color;

    default:
      return state;
  }
};

exports.BreakButtonReducer = BreakButtonReducer;