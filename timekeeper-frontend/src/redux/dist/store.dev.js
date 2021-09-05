"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.persistor = exports.store = void 0;

var _redux = require("redux");

var _reduxLogger = _interopRequireDefault(require("redux-logger"));

var _reduxSaga = _interopRequireDefault(require("redux-saga"));

var _reduxPersist = require("redux-persist");

var _rootReducer = require("./root-reducer");

var _rootSaga = require("./root-saga");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var sagaMiddleware = (0, _reduxSaga["default"])(); //const middleware=[logger,sagaMiddleware];

var middleware = [sagaMiddleware];
var store = (0, _redux.createStore)(_rootReducer.persistReducer1, _redux.applyMiddleware.apply(void 0, middleware));
exports.store = store;
sagaMiddleware.run(_rootSaga.rootSaga);
var persistor = (0, _reduxPersist.persistStore)(store);
exports.persistor = persistor;