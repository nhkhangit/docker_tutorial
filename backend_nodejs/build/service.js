"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var Account = require('./account');
var AccountService = /*#__PURE__*/function () {
  function AccountService() {
    (0, _classCallCheck2["default"])(this, AccountService);
  }
  (0, _createClass2["default"])(AccountService, null, [{
    key: "checkCredentials",
    value: function () {
      var _checkCredentials = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(username, password) {
        var account;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return Account.findOne({
                where: {
                  username: username,
                  password: password
                }
              });
            case 2:
              account = _context.sent;
              if (!account) {
                _context.next = 5;
                break;
              }
              return _context.abrupt("return", true);
            case 5:
              return _context.abrupt("return", false);
            case 6:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      function checkCredentials(_x, _x2) {
        return _checkCredentials.apply(this, arguments);
      }
      return checkCredentials;
    }()
  }]);
  return AccountService;
}();
module.exports = AccountService;