import { Request, Response } from "express";
import { TypeBottle, TypeSauce } from "../models";
import { deleteImageFile } from "../utils/image";
import dotenv from "dotenv";

dotenv.config();

const parseNumber = (value: unknown, fieldName: string): number => {
  const num = Number(value);
  if (Number.isNaN(num)) {
    throw new Error(`${fieldName} phải là số hợp lệ`);
  }
  return num;
};

export const getListTypeSauce = async (
  _req: Request,
  res: Response,
): Promise<void> => {
  try {
    const typeSauces = await TypeSauce.findAll({
      include: [{ model: TypeBottle, as: "typeBottle" }],
      order: [["id", "DESC"]],
    });

    const newList = typeSauces.map((typeSauce) => ({
      ...typeSauce.toJSON(),
      imageTypeSauce:
        process.env.BASE_URL +
        "/uploads/type-sauces/" +
        typeSauce.imageTypeSauce,
    }));

    res.json({
      message: "Lấy danh sách TypeSauce thành công",
      data: newList,
    });
  } catch (error) {
    res.status(500).json({
      message: "Lấy danh sách TypeSauce thất bại",
      error: error instanceof Error ? error.message : error,
    });
  }
};

export const createTypeSauce = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const {
      nameType,
      price,
      quantityPerBox,
      capacity,
      typeBottleID,
      status,
      description,
    } = req.body;

    if (
      !nameType ||
      price === undefined ||
      !capacity ||
      !typeBottleID ||
      !description
    ) {
      res.status(400).json({
        message:
          "Thiếu trường bắt buộc: nameType, price, capacity, typeBottleID, description",
      });
      return;
    }

    // if (req.file) {
    //   const imageName = await normalizeImage(req.file.path);

    //   req.file.filename = imageName;
    // }

    const typeSauce = await TypeSauce.create({
      nameType: String(nameType),
      price: parseNumber(price, "price"),
      quantityPerBox:
        quantityPerBox !== undefined && quantityPerBox !== ""
          ? parseNumber(quantityPerBox, "quantityPerBox")
          : null,
      capacity: parseNumber(capacity, "capacity"),
      typeBottleID: parseNumber(typeBottleID, "typeBottleID"),
      imageTypeSauce: req.file?.filename ?? null,
      status: status !== undefined ? parseNumber(status, "status") : 1,
      description: String(description),
    });

    res.status(201).json({
      message: "Tạo TypeSauce thành công",
      data: typeSauce,
    });
  } catch (error) {
    if (req.file?.filename) {
      deleteImageFile(req.file.filename);
    }

    res.status(500).json({
      message: "Tạo TypeSauce thất bại",
      error: error instanceof Error ? error.message : error,
    });
  }
};

export const updateTypeSauce = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const { id } = req.params;
    const typeSauce = await TypeSauce.findByPk(Number(id));

    if (!typeSauce) {
      if (req.file?.filename) {
        deleteImageFile(req.file.filename);
      }
      res.status(404).json({ message: "Không tìm thấy TypeSauce" });
      return;
    }

    const {
      nameType,
      price,
      quantityPerBox,
      capacity,
      typeBottleID,
      status,
      description,
    } = req.body;

    const updateData: Partial<{
      nameType: string;
      price: number;
      quantityPerBox: number | null;
      capacity: number;
      typeBottleID: number;
      imageTypeSauce: string | null;
      status: number;
      description: string;
    }> = {};

    if (nameType !== undefined) updateData.nameType = String(nameType);
    if (price !== undefined) updateData.price = parseNumber(price, "price");
    if (quantityPerBox !== undefined) {
      updateData.quantityPerBox =
        quantityPerBox === "" || quantityPerBox === null
          ? null
          : parseNumber(quantityPerBox, "quantityPerBox");
    }
    if (capacity !== undefined) {
      updateData.capacity = parseNumber(capacity, "capacity");
    }
    if (typeBottleID !== undefined) {
      updateData.typeBottleID = parseNumber(typeBottleID, "typeBottleID");
    }
    if (status !== undefined) updateData.status = parseNumber(status, "status");
    if (description !== undefined) updateData.description = String(description);

    if (req.file?.filename) {
      deleteImageFile(typeSauce.imageTypeSauce);
      updateData.imageTypeSauce = req.file.filename;
    }

    await typeSauce.update(updateData);

    res.json({
      message: "Cập nhật TypeSauce thành công",
      data: typeSauce,
    });
  } catch (error) {
    if (req.file?.filename) {
      deleteImageFile(req.file.filename);
    }

    res.status(500).json({
      message: "Cập nhật TypeSauce thất bại",
      error: error instanceof Error ? error.message : error,
    });
  }
};
