import fs from "fs";
import path from "path";

export const UPLOAD_DIR = path.join(process.cwd(), "src", "uploads");

export const ensureUploadDir = (): void => {
  if (!fs.existsSync(UPLOAD_DIR)) {
    fs.mkdirSync(UPLOAD_DIR, { recursive: true });
  }
};

export const buildImageFileName = (originalName: string): string => {
  const ext = path.extname(originalName).toLowerCase() || ".jpg";
  return `${Date.now()}${ext}`;
};

export const deleteImageFile = (fileName: string | null | undefined): void => {
  if (!fileName) return;

  const filePath = path.join(UPLOAD_DIR, fileName);
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
  }
};
