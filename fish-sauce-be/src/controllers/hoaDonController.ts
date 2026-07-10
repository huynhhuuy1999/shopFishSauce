import { Request, Response } from "express";
import { HoaDon, TypeSauce } from "../models";

const parseNumber = (value: unknown, fieldName: string): number => {
  const num = Number(value);
  if (Number.isNaN(num)) {
    throw new Error(`${fieldName} phải là số hợp lệ`);
  }
  return num;
};

export const getListHoaDon = async (
  _req: Request,
  res: Response,
): Promise<void> => {
  try {
    const hoaDons = await HoaDon.findAll({
      include: [{ model: TypeSauce, as: "typeSauce" }],
      order: [["id", "DESC"]],
    });

    res.json({
      message: "Lấy danh sách hóa đơn thành công",
      data: hoaDons,
    });
  } catch (error) {
    res.status(500).json({
      message: "Lấy danh sách hóa đơn thất bại",
      error: error instanceof Error ? error.message : error,
    });
  }
};

export const createHoaDon = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const {
      customerName,
      phone,
      address,
      status,
      sumPrice,
      quantity,
      typeSauceId,
    } = req.body;

    if (
      sumPrice === undefined ||
      !customerName ||
      !phone ||
      !address ||
      !quantity
    ) {
      res.status(400).json({
        message:
          "Thiếu trường bắt buộc: sumPrice, customerName, phone, address, quantity",
      });
      return;
    }

    if (
      typeSauceId !== undefined &&
      typeSauceId !== null &&
      typeSauceId !== ""
    ) {
      const typeSauce = await TypeSauce.findByPk(typeSauceId);
      if (!typeSauce) {
        res.status(400).json({ message: "typeSauceId không tồn tại" });
        return;
      }
    }

    const hoaDon = await HoaDon.create({
      customerName: customerName,
      phone: phone ?? null,
      address: address ?? null,
      status: status !== undefined ? parseNumber(status, "status") : null,
      sumPrice: parseNumber(sumPrice, "sumPrice"),
      quantity: parseNumber(quantity, "quantity"),
      typeSauceId: parseNumber(typeSauceId, "typeSauceId"),
    });

    res.status(201).json({
      message: "Tạo hóa đơn thành công",
      data: hoaDon,
    });
  } catch (error) {
    res.status(500).json({
      message: "Tạo hóa đơn thất bại",
      error: error instanceof Error ? error.message : error,
    });
  }
};

export const updateHoaDon = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const { id } = req.params;
    const hoaDon = await HoaDon.findByPk(Number(id));

    if (!hoaDon) {
      res.status(404).json({ message: "Không tìm thấy hóa đơn" });
      return;
    }

    const {
      customerName,
      phone,
      address,
      status,
      sumPrice,
      quantity,
      typeSauceId,
    } = req.body;

    if (
      typeSauceId !== undefined &&
      typeSauceId !== null &&
      typeSauceId !== ""
    ) {
      const typeSauce = await TypeSauce.findByPk(typeSauceId);
      if (!typeSauce) {
        res.status(400).json({ message: "typeSauceId không tồn tại" });
        return;
      }
    }

    const updateData: Partial<{
      customerName: string;
      phone: string;
      address: string;
      status: number | null;
      sumPrice: number;
      quantity: number;
      typeSauceId: number;
    }> = {};

    ((updateData.customerName = customerName),
      (updateData.phone = phone ?? undefined),
      (updateData.address = address ?? undefined),
      (updateData.status =
        status !== undefined ? parseNumber(status, "status") : undefined),
      (updateData.sumPrice = parseNumber(sumPrice, "sumPrice")),
      (updateData.quantity = parseNumber(quantity, "quantity")),
      (updateData.typeSauceId = parseNumber(typeSauceId, "typeSauceId")));

    await hoaDon.update(updateData);

    res.json({
      message: "Cập nhật hóa đơn thành công",
      data: hoaDon,
    });
  } catch (error) {
    res.status(500).json({
      message: "Cập nhật hóa đơn thất bại",
      error: error instanceof Error ? error.message : error,
    });
  }
};
