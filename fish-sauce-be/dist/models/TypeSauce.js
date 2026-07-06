"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../config/database"));
class TypeSauce extends sequelize_1.Model {
}
TypeSauce.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nameType: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: false,
    },
    price: {
        type: sequelize_1.DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    quantityPerBox: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
    },
    capacity: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    typeBottleID: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    imageTypeSauce: {
        type: sequelize_1.DataTypes.STRING(100),
        allowNull: true,
    },
    status: {
        type: sequelize_1.DataTypes.INTEGER,
        defaultValue: 1,
    },
}, {
    sequelize: database_1.default,
    tableName: "TypeSauce",
    timestamps: false,
});
exports.default = TypeSauce;
