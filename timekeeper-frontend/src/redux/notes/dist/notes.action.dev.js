"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeNote = exports.addNote = exports.toggleNoteDisplay = void 0;

var _notes = _interopRequireDefault(require("./notes.type"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var toggleNoteDisplay = function toggleNoteDisplay() {
  return {
    type: _notes["default"].TOGGLE_NOTE_DISPLAY
  };
};

exports.toggleNoteDisplay = toggleNoteDisplay;

var addNote = function addNote(noteText) {
  return {
    type: _notes["default"].ADD_NOTE,
    noteText: noteText
  };
};

exports.addNote = addNote;

var removeNote = function removeNote(noteId) {
  return {
    type: _notes["default"].REMOVE_NOTE,
    noteId: noteId
  };
};

exports.removeNote = removeNote;