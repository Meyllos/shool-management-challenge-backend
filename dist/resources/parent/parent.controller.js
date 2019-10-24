"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var CRUD_1 = __importDefault(require("../../helpers/CRUD"));
var models_1 = __importDefault(require("../../database/models"));
var statuscode_1 = require("../../constants/statuscode");
var Encrypt_1 = __importDefault(require("../../helpers/Encrypt"));
var statuscode_2 = require("../../constants/statuscode");
var Token_1 = __importDefault(require("../../helpers/Token"));
var Parent = /** @class */ (function (_super) {
    __extends(Parent, _super);
    function Parent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.model = 'Parent';
        _this.login = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var _a, email, password, parent_1, token, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        _a = req.body, email = _a.email, password = _a.password;
                        return [4 /*yield*/, models_1.default[this.model].findOne({
                                where: {
                                    email: email
                                }
                            })];
                    case 1:
                        parent_1 = _b.sent();
                        if (parent_1) {
                            token = Token_1.default.login(parent_1.id);
                            if (Encrypt_1.default.decrypt(password, parent_1.dataValues.password)) {
                                return [2 /*return*/, res.status(statuscode_1.OK).json({
                                        status: statuscode_1.OK,
                                        message: 'success login',
                                        token: token
                                    })];
                            }
                            return [2 /*return*/, res.status(statuscode_1.BAD_REQUEST).json({
                                    status: statuscode_1.BAD_REQUEST,
                                    message: 'Incorrect Credentials'
                                })];
                        }
                        ;
                        return [2 /*return*/, res.status(statuscode_2.NOT_FOUND).json({
                                status: statuscode_2.NOT_FOUND,
                                message: 'parent doesn\'t exit, create account'
                            })];
                    case 2:
                        error_1 = _b.sent();
                        return [2 /*return*/, res.status(statuscode_1.BAD_REQUEST).json({
                                status: statuscode_1.BAD_REQUEST,
                                error: error_1
                            })];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        _this.register = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var data, student, parent_2, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        data = req.body;
                        return [4 /*yield*/, models_1.default['Student'].findOne({
                                where: {
                                    id: data.student
                                }
                            })];
                    case 1:
                        student = _a.sent();
                        if (!student) return [3 /*break*/, 3];
                        return [4 /*yield*/, models_1.default[this.model].create(__assign({}, data))];
                    case 2:
                        parent_2 = _a.sent();
                        return [2 /*return*/, res.status(statuscode_1.OK).json({
                                status: statuscode_1.OK,
                                message: 'Account created',
                                result: parent_2
                            })];
                    case 3: return [2 /*return*/, res.status(statuscode_2.NOT_FOUND).json({
                            status: statuscode_2.NOT_FOUND,
                            message: 'student doesn\'t exit in our database'
                        })];
                    case 4:
                        error_2 = _a.sent();
                        return [2 /*return*/, res.status(statuscode_1.BAD_REQUEST).json({
                                status: statuscode_1.BAD_REQUEST,
                                error: error_2
                            })];
                    case 5: return [2 /*return*/];
                }
            });
        }); };
        return _this;
    }
    return Parent;
}(CRUD_1.default));
exports.default = Parent;
//# sourceMappingURL=parent.controller.js.map