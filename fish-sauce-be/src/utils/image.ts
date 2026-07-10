import fs from "fs";
import path from "path";

export const UPLOAD_DIR = path.join(process.cwd(), "uploads");

export const TYPE_SAUCE_DIR = path.join(UPLOAD_DIR, "type-sauces");

export const ensureUploadDir = (): void => {
  if (!fs.existsSync(TYPE_SAUCE_DIR)) {
    fs.mkdirSync(TYPE_SAUCE_DIR, { recursive: true });
  }
};

export const buildImageFileName = (originalName: string): string => {
  const ext = path.extname(originalName).toLowerCase() || ".jpg";
  return `${Date.now()}${ext}`;
};

export const deleteImageFile = (fileName: string | null | undefined): void => {
  if (!fileName) return;

  const filePath = path.join(TYPE_SAUCE_DIR, fileName);
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
  }
};
