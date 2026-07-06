"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateHoaDon = exports.createHoaDon = exports.getListHoaDon = void 0;
const models_1 = require("../models");
const parseNumber = (value, fieldName) => {
    const num = Number(value);
    if (Number.isNaN(num)) {
        throw new Error(`${fieldName} phải là số hợp lệ`);
    }
    return num;
};
const getListHoaDon = async (_req, res) => {
    try {
        const hoaDons = await models_1.HoaDon.findAll({
            include: [{ model: models_1.TypeSauce, as: "typeSauce" }],
            order: [["id", "DESC"]],
        });
        res.json({
            message: "Lấy danh sách hóa đơn thành công",
            data: hoaDons,
        });
    }
    catch (error) {
        res.status(500).json({
            message: "Lấy danh sách hóa đơn thất bại",
            error: error instanceof Error ? error.message : error,
        });
    }
};
exports.getListHoaDon = getListHoaDon;
const createHoaDon = async (req, res) => {
    try {
        const { customerName, phone, address, status, sumPrice, quantity, typeSauceId, } = req.body;
        if (sumPrice === undefined) {
            res.status(400).json({ message: "Thiếu trường bắt buộc: sumPrice" });
            return;
        }
        if (typeSauceId !== undefined && typeSauceId !== null && typeSauceId !== "") {
            const typeSauce = await models_1.TypeSauce.findByPk(typeSauceId);
            if (!typeSauce) {
                res.status(400).json({ message: "typeSauceId không tồn tại" });
                return;
            }
        }
        const hoaDon = await models_1.HoaDon.create({
            customerName: customerName ?? null,
            phone: phone ?? null,
            address: address ?? null,
            status: status !== undefined ? parseNumber(status, "status") : null,
            sumPrice: parseNumber(sumPrice, "sumPrice"),
            quantity: quantity !== undefined && quantity !== ""
                ? parseNumber(quantity, "quantity")
                : null,
            typeSauceId: typeSauceId !== undefined && typeSauceId !== ""
                ? parseNumber(typeSauceId, "typeSauceId")
                : null,
        });
        res.status(201).json({
            message: "Tạo hóa đơn thành công",
            data: hoaDon,
        });
    }
    catch (error) {
        res.status(500).json({
            message: "Tạo hóa đơn thất bại",
            error: error instanceof Error ? error.message : error,
        });
    }
};
exports.createHoaDon = createHoaDon;
const updateHoaDon = async (req, res) => {
    try {
        const { id } = req.params;
        const hoaDon = await models_1.HoaDon.findByPk(Number(id));
        if (!hoaDon) {
            res.status(404).json({ message: "Không tìm thấy hóa đơn" });
            return;
        }
        const { customerName, phone, address, status, sumPrice, quantity, typeSauceId, } = req.body;
        if (typeSauceId !== undefined && typeSauceId !== null && typeSauceId !== "") {
            const typeSauce = await models_1.TypeSauce.findByPk(typeSauceId);
            if (!typeSauce) {
                res.status(400).json({ message: "typeSauceId không tồn tại" });
                return;
            }
        }
        const updateData = {};
        if (customerName !== undefined) {
            updateData.customerName = customerName ?? null;
        }
        if (phone !== undefined)
            updateData.phone = phone ?? null;
        if (address !== undefined)
            updateData.address = address ?? null;
        if (status !== undefined) {
            updateData.status =
                status === null || status === "" ? null : parseNumber(status, "status");
        }
        if (sumPrice !== undefined) {
            updateData.sumPrice = parseNumber(sumPrice, "sumPrice");
        }
        if (quantity !== undefined) {
            updateData.quantity =
                quantity === null || quantity === ""
                    ? null
                    : parseNumber(quantity, "quantity");
        }
        if (typeSauceId !== undefined) {
            updateData.typeSauceId =
                typeSauceId === null || typeSauceId === ""
                    ? null
                    : parseNumber(typeSauceId, "typeSauceId");
        }
        await hoaDon.update(updateData);
        res.json({
            message: "Cập nhật hóa đơn thành công",
            data: hoaDon,
        });
    }
    catch (error) {
        res.status(500).json({
            message: "Cập nhật hóa đơn thất bại",
            error: error instanceof Error ? error.message : error,
        });
    }
};
exports.updateHoaDon = updateHoaDon;
