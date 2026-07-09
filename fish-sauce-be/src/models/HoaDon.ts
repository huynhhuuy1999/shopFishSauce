import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../config/database";

export interface HoaDonAttributes {
  id: number;
  customerName: string;
  phone: string;
  address: string;
  status: number | null;
  sumPrice: number;
  quantity: number;
  typeSauceId: number;
}

export type HoaDonCreationAttributes = Optional<
  HoaDonAttributes,
  | "id"
  | "customerName"
  | "phone"
  | "address"
  | "status"
  | "quantity"
  | "typeSauceId"
>;

class HoaDon
  extends Model<HoaDonAttributes, HoaDonCreationAttributes>
  implements HoaDonAttributes
{
  declare id: number;
  declare customerName: string;
  declare phone: string;
  declare address: string;
  declare status: number | null;
  declare sumPrice: number;
  declare quantity: number;
  declare typeSauceId: number;
}

HoaDon.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    customerName: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    sumPrice: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    typeSauceId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "HoaDon",
    timestamps: false,
  },
);

export default HoaDon;
