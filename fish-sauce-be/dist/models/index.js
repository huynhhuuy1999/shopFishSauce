"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HoaDon = exports.TypeSauce = exports.TypeBottle = void 0;
const TypeBottle_1 = __importDefault(require("./TypeBottle"));
exports.TypeBottle = TypeBottle_1.default;
const TypeSauce_1 = __importDefault(require("./TypeSauce"));
exports.TypeSauce = TypeSauce_1.default;
const HoaDon_1 = __importDefault(require("./HoaDon"));
exports.HoaDon = HoaDon_1.default;
TypeSauce_1.default.belongsTo(TypeBottle_1.default, {
    foreignKey: "typeBottleID",
    as: "typeBottle",
});
TypeBottle_1.default.hasMany(TypeSauce_1.default, {
    foreignKey: "typeBottleID",
    as: "typeSauces",
});
HoaDon_1.default.belongsTo(TypeSauce_1.default, {
    foreignKey: "typeSauceId",
    as: "typeSauce",
});
TypeSauce_1.default.hasMany(HoaDon_1.default, {
    foreignKey: "typeSauceId",
    as: "hoaDons",
});
