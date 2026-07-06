"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const database_1 = __importDefault(require("../config/database"));
const router = (0, express_1.Router)();
router.get("/", async (_req, res) => {
    try {
        const [rows] = await database_1.default.query("SELECT NOW() AS now");
        res.json(rows);
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.default = router;
