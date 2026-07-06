"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const typeSauceController_1 = require("../controllers/typeSauceController");
const upload_1 = require("../middleware/upload");
const router = (0, express_1.Router)();
const handleUpload = (req, res, next) => {
    (0, upload_1.uploadTypeSauceImage)(req, res, (err) => {
        if (err) {
            res.status(400).json({ message: err.message });
            return;
        }
        next();
    });
};
router.get("/", typeSauceController_1.getListTypeSauce);
router.post("/", handleUpload, typeSauceController_1.createTypeSauce);
router.put("/:id", handleUpload, typeSauceController_1.updateTypeSauce);
exports.default = router;
