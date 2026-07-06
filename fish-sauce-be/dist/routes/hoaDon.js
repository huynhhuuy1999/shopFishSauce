"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const hoaDonController_1 = require("../controllers/hoaDonController");
const router = (0, express_1.Router)();
router.get("/", hoaDonController_1.getListHoaDon);
router.post("/", hoaDonController_1.createHoaDon);
router.put("/:id", hoaDonController_1.updateHoaDon);
exports.default = router;
