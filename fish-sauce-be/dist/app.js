"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const test_1 = __importDefault(require("./routes/test"));
const typeSauce_1 = __importDefault(require("./routes/typeSauce"));
const hoaDon_1 = __importDefault(require("./routes/hoaDon"));
const image_1 = require("./utils/image");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use("/uploads", express_1.default.static(image_1.UPLOAD_DIR));
app.use("/test", test_1.default);
app.use("/api/type-sauce", typeSauce_1.default);
app.use("/api/hoa-don", hoaDon_1.default);
app.get("/", (_req, res) => {
    res.send("API is running...");
});
exports.default = app;
