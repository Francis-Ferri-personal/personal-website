"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var Server = /** @class */ (function () {
    function Server(port) {
        this.port = port;
        this.app = express_1.default();
    }
    Server.init = function (port) {
        return new Server(port);
    };
    Server.prototype.usePublicFolder = function () {
        var publicPath = path_1.default.resolve(__dirname, "../public");
        this.app.use(express_1.default.static(publicPath));
        this.app.get('/*', function (req, res) {
            res.sendFile(path_1.default.join(__dirname, "../public", 'index.html'));
        });
    };
    Server.prototype.start = function (callback) {
        this.usePublicFolder();
        this.app.listen(this.port, callback);
    };
    return Server;
}());
exports.default = Server;
