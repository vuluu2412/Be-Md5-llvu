"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const router_1 = require("./src/router/router");
const express_fileupload_1 = __importDefault(require("express-fileupload"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.static('public'));
app.use(express_1.default.json());
app.use((0, express_fileupload_1.default)({
    createParentPath: true
}));
app.use('', router_1.router);
const POST = 8080;
app.listen(POST, () => {
    console.log('server is running');
});
//# sourceMappingURL=index.js.map