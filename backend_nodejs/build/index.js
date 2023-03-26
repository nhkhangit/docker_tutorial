"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var express = require("express");
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
var AccountService = require('./service');
var cors = require('cors');
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.post('/login', /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var username, password, accountExists;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          username = req.body.username;
          password = req.body.password;
          console.log(username);
          console.log(password);
          _context.next = 6;
          return AccountService.checkCredentials(username, password);
        case 6:
          accountExists = _context.sent;
          if (accountExists) {
            res.status(200).json({
              success: true,
              message: "Login successful!",
              token: '13431413243243241er37132gd32d221039'
            });
          } else {
            res.status(404).json({
              success: false,
              message: "Not found"
            });
          }
        case 8:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
app.listen(3000, function () {
  return console.log("listening on http://localhost:3000/");
});