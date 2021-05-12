"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamsRouter = exports.UsersRouter = exports.TransactionsRouter = exports.TradingRouter = exports.ProvidersRouter = exports.CurrenciesRouter = exports.BlockchainsRouter = void 0;
var blockchains_1 = require("./blockchains");
Object.defineProperty(exports, "BlockchainsRouter", { enumerable: true, get: function () { return __importDefault(blockchains_1).default; } });
var currencies_1 = require("./currencies");
Object.defineProperty(exports, "CurrenciesRouter", { enumerable: true, get: function () { return __importDefault(currencies_1).default; } });
var providers_1 = require("./providers");
Object.defineProperty(exports, "ProvidersRouter", { enumerable: true, get: function () { return __importDefault(providers_1).default; } });
var trading_1 = require("./trading");
Object.defineProperty(exports, "TradingRouter", { enumerable: true, get: function () { return __importDefault(trading_1).default; } });
var transactions_1 = require("./transactions");
Object.defineProperty(exports, "TransactionsRouter", { enumerable: true, get: function () { return __importDefault(transactions_1).default; } });
var users_1 = require("./users");
Object.defineProperty(exports, "UsersRouter", { enumerable: true, get: function () { return __importDefault(users_1).default; } });
var teams_1 = require("./teams");
Object.defineProperty(exports, "TeamsRouter", { enumerable: true, get: function () { return __importDefault(teams_1).default; } });
//# sourceMappingURL=index.js.map