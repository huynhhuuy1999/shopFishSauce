"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteImageFile = exports.buildImageFileName = exports.ensureUploadDir = exports.UPLOAD_DIR = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
exports.UPLOAD_DIR = path_1.default.join(process.cwd(), "src", "uploads");
const ensureUploadDir = () => {
    if (!fs_1.default.existsSync(exports.UPLOAD_DIR)) {
        fs_1.default.mkdirSync(exports.UPLOAD_DIR, { recursive: true });
    }
};
exports.ensureUploadDir = ensureUploadDir;
const buildImageFileName = (originalName) => {
    const ext = path_1.default.extname(originalName).toLowerCase() || ".jpg";
    return `${Date.now()}${ext}`;
};
exports.buildImageFileName = buildImageFileName;
const deleteImageFile = (fileName) => {
    if (!fileName)
        return;
    const filePath = path_1.default.join(exports.UPLOAD_DIR, fileName);
    if (fs_1.default.existsSync(filePath)) {
        fs_1.default.unlinkSync(filePath);
    }
};
exports.deleteImageFile = deleteImageFile;
