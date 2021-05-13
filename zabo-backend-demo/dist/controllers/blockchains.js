"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var zabo_1 = require("../modules/zabo");
var express_1 = require("express");
var router = express_1.Router();
router.get('/blockchains/getBlock', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _zabo, block;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, zabo_1.zabo()];
            case 1:
                _zabo = _a.sent();
                block = req.query['block'] ? Number(req.query['block']) : undefined;
                _zabo.blockchains.getBlock('ethereum', block !== null && block !== void 0 ? block : 200).then(function (resp) {
                    res.json({
                        resp: resp,
                        error: ''
                    });
                }).catch(function (err) {
                    res.json({
                        resp: {},
                        error: err
                    });
                });
                return [2 /*return*/];
        }
    });
}); });
router.get('/blockchains/getBalances', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _zabo, address;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, zabo_1.zabo()];
            case 1:
                _zabo = _a.sent();
                address = '0xcf741a54fcf72607d8185ee15914430e420bd41c';
                _zabo.blockchains
                    .getBalances('ethereum', address)
                    .then(function (resp) {
                    res.send({
                        resp: resp,
                        error: ''
                    });
                })
                    .catch(function (err) {
                    res.send({
                        resp: {},
                        error: err
                    });
                });
                return [2 /*return*/];
        }
    });
}); });
router.get('/blockchains/getContract', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _zabo, address;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, zabo_1.zabo()];
            case 1:
                _zabo = _a.sent();
                address = '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D' // Uniswap
                ;
                _zabo.blockchains
                    .getContract('ethereum', address)
                    .then(function (resp) {
                    res.json({
                        resp: resp,
                        error: ''
                    });
                })
                    .catch(function (err) {
                    res.json({
                        resp: {},
                        error: err
                    });
                });
                return [2 /*return*/];
        }
    });
}); });
router.get('/blockchains/getTokens', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _zabo;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, zabo_1.zabo()];
            case 1:
                _zabo = _a.sent();
                _zabo.blockchains
                    .getTokens('ethereum', 'UNI')
                    .then(function (resp) {
                    res.json({
                        resp: resp,
                        error: ''
                    });
                })
                    .catch(function (err) {
                    res.json({
                        res: {},
                        error: err
                    });
                });
                return [2 /*return*/];
        }
    });
}); });
router.get('/blockchains/getTransactions', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _zabo;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, zabo_1.zabo()];
            case 1:
                _zabo = _a.sent();
                _zabo.blockchains
                    .getTransactions('ethereum', '0xcf741a54fcf72607d8185ee15914430e420bd41c')
                    .then(function (resp) {
                    res.json({
                        resp: resp,
                        error: ''
                    });
                })
                    .catch(function (err) {
                    res.json({
                        resp: {},
                        error: err
                    });
                });
                return [2 /*return*/];
        }
    });
}); });
router.get('/blockchains/getTransaction', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _zabo;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, zabo_1.zabo()];
            case 1:
                _zabo = _a.sent();
                _zabo.blockchains
                    .getTransaction('ethereum', '0x3c8255b5888a6c6f32b24ad8822a9465b466d078e7d768a99a1421377a01558f')
                    .then(function (resp) {
                    res.json({
                        resp: resp,
                        error: ''
                    });
                })
                    .catch(function (err) {
                    res.json({
                        resp: {},
                        error: err
                    });
                });
                return [2 /*return*/];
        }
    });
}); });
router.get('/blockchains/getTokenTransfers', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _zabo;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, zabo_1.zabo()];
            case 1:
                _zabo = _a.sent();
                _zabo.blockchains
                    .getTokenTransfers('ethereum', '0xcf741a54fcf72607d8185ee15914430e420bd41c')
                    .then(function (resp) {
                    res.json({
                        resp: resp,
                        error: ''
                    });
                })
                    .catch(function (err) {
                    res.json({
                        resp: {},
                        error: err
                    });
                });
                return [2 /*return*/];
        }
    });
}); });
router.get('/blockchains/getTokenTransfer', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _zabo;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, zabo_1.zabo()];
            case 1:
                _zabo = _a.sent();
                _zabo.blockchains
                    .getTokenTransfer('ethereum', '0x4d4e4f76c819b3baceee5193f11cad3df879d4c732b4e48c20e1a38d2c847c36')
                    .then(function (resp) {
                    res.json({
                        resp: resp,
                        error: ''
                    });
                })
                    .catch(function (err) {
                    res.json({
                        resp: {},
                        error: err
                    });
                });
                return [2 /*return*/];
        }
    });
}); });
exports.default = router;
//# sourceMappingURL=blockchains.js.map