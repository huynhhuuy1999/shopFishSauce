import multer from "multer";
import path from "path";
import {
  UPLOAD_DIR,
  buildImageFileName,
  ensureUploadDir,
} from "../utils/image";

ensureUploadDir();

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => {
    ensureUploadDir();
    cb(null, UPLOAD_DIR);
  },
  filename: (_req, file, cb) => {
    cb(null, buildImageFileName(file.originalname));
  },
});

const imageFilter: multer.Options["fileFilter"] = (_req, file, cb) => {
  const allowed = [".jpg", ".jpeg", ".png", ".webp", ".gif"];
  const ext = path.extname(file.originalname).toLowerCase();

  if (allowed.includes(ext)) {
    cb(null, true);
    return;
  }

  cb(new Error("Chỉ chấp nhận file ảnh: jpg, jpeg, png, webp, gif"));
};

export const uploadTypeSauceImage = multer({
  storage,
  fileFilter: imageFilter,
  limits: { fileSize: 5 * 1024 * 1024 },
}).single("image");
