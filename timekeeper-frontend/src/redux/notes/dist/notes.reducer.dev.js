"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NoteReducer = void 0;

var _notes = _interopRequireDefault(require("./notes.type"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var INITIAL_STATE = {
  noteKey: 0,
  notes: {},
  noteDisplay: false
};

var NoteReducer = function NoteReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _notes["default"].TOGGLE_NOTE_DISPLAY:
      return _objectSpread({}, state, {
        noteDisplay: !state.noteDisplay
      });

    case _notes["default"].ADD_NOTE:
      state.notes[state.noteKey] = action.noteText;
      return _objectSpread({}, state, {
        noteKey: state.noteKey + 1,
        notes: _objectSpread({}, state.notes)
      });

    case _notes["default"].REMOVE_NOTE:
      delete state.notes[action.noteId];
      return _objectSpread({}, state, {
        notes: _objectSpread({}, state.notes)
      });

    default:
      return state;
  }
};

exports.NoteReducer = NoteReducer;