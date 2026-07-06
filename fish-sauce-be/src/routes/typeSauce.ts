import { Router, Request, Response, NextFunction } from "express";
import {
  createTypeSauce,
  getListTypeSauce,
  updateTypeSauce,
} from "../controllers/typeSauceController";
import { uploadTypeSauceImage } from "../middleware/upload";

const router = Router();

const handleUpload = (req: Request, res: Response, next: NextFunction) => {
  uploadTypeSauceImage(req, res, (err) => {
    if (err) {
      res.status(400).json({ message: err.message });
      return;
    }
    next();
  });
};

router.get("/", getListTypeSauce);
router.post("/", handleUpload, createTypeSauce);
router.put("/:id", handleUpload, updateTypeSauce);

export default router;
