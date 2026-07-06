import { Router } from "express";
import { createHoaDon, getListHoaDon, updateHoaDon } from "../controllers/hoaDonController";

const router = Router();

router.get("/", getListHoaDon);
router.post("/", createHoaDon);
router.put("/:id", updateHoaDon);

export default router;
