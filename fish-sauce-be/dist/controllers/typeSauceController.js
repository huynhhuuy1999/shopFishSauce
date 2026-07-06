"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTypeSauce = exports.createTypeSauce = exports.getListTypeSauce = void 0;
const models_1 = require("../models");
const image_1 = require("../utils/image");
const parseNumber = (value, fieldName) => {
    const num = Number(value);
    if (Number.isNaN(num)) {
        throw new Error(`${fieldName} phải là số hợp lệ`);
    }
    return num;
};
const getListTypeSauce = async (_req, res) => {
    try {
        const typeSauces = await models_1.TypeSauce.findAll({
            include: [{ model: models_1.TypeBottle, as: "typeBottle" }],
            order: [["id", "DESC"]],
        });
        res.json({
            message: "Lấy danh sách TypeSauce thành công",
            data: typeSauces,
        });
    }
    catch (error) {
        res.status(500).json({
            message: "Lấy danh sách TypeSauce thất bại",
            error: error instanceof Error ? error.message : error,
        });
    }
};
exports.getListTypeSauce = getListTypeSauce;
const createTypeSauce = async (req, res) => {
    try {
        const { nameType, price, quantityPerBox, capacity, typeBottleID, status } = req.body;
        if (!nameType || price === undefined || !capacity || !typeBottleID) {
            res.status(400).json({
                message: "Thiếu trường bắt buộc: nameType, price, capacity, typeBottleID",
            });
            return;
        }
        const typeSauce = await models_1.TypeSauce.create({
            nameType: String(nameType),
            price: parseNumber(price, "price"),
            quantityPerBox: quantityPerBox !== undefined && quantityPerBox !== ""
                ? parseNumber(quantityPerBox, "quantityPerBox")
                : null,
            capacity: parseNumber(capacity, "capacity"),
            typeBottleID: parseNumber(typeBottleID, "typeBottleID"),
            imageTypeSauce: req.file?.filename ?? null,
            status: status !== undefined ? parseNumber(status, "status") : 1,
        });
        res.status(201).json({
            message: "Tạo TypeSauce thành công",
            data: typeSauce,
        });
    }
    catch (error) {
        if (req.file?.filename) {
            (0, image_1.deleteImageFile)(req.file.filename);
        }
        res.status(500).json({
            message: "Tạo TypeSauce thất bại",
            error: error instanceof Error ? error.message : error,
        });
    }
};
exports.createTypeSauce = createTypeSauce;
const updateTypeSauce = async (req, res) => {
    try {
        const { id } = req.params;
        const typeSauce = await models_1.TypeSauce.findByPk(Number(id));
        if (!typeSauce) {
            if (req.file?.filename) {
                (0, image_1.deleteImageFile)(req.file.filename);
            }
            res.status(404).json({ message: "Không tìm thấy TypeSauce" });
            return;
        }
        const { nameType, price, quantityPerBox, capacity, typeBottleID, status } = req.body;
        const updateData = {};
        if (nameType !== undefined)
            updateData.nameType = String(nameType);
        if (price !== undefined)
            updateData.price = parseNumber(price, "price");
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
        if (status !== undefined)
            updateData.status = parseNumber(status, "status");
        if (req.file?.filename) {
            (0, image_1.deleteImageFile)(typeSauce.imageTypeSauce);
            updateData.imageTypeSauce = req.file.filename;
        }
        await typeSauce.update(updateData);
        res.json({
            message: "Cập nhật TypeSauce thành công",
            data: typeSauce,
        });
    }
    catch (error) {
        if (req.file?.filename) {
            (0, image_1.deleteImageFile)(req.file.filename);
        }
        res.status(500).json({
            message: "Cập nhật TypeSauce thất bại",
            error: error instanceof Error ? error.message : error,
        });
    }
};
exports.updateTypeSauce = updateTypeSauce;
