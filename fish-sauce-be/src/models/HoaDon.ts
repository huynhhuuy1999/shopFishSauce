import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../config/database";

export interface HoaDonAttributes {
  id: number;
  customerName: string | null;
  phone: string | null;
  address: string | null;
  status: number | null;
  sumPrice: number;
  quantity: number | null;
  typeSauceId: number | null;
}

export type HoaDonCreationAttributes = Optional<
  HoaDonAttributes,
  "id" | "customerName" | "phone" | "address" | "status" | "quantity" | "typeSauceId"
>;

class HoaDon
  extends Model<HoaDonAttributes, HoaDonCreationAttributes>
  implements HoaDonAttributes
{
  declare id: number;
  declare customerName: string | null;
  declare phone: string | null;
  declare address: string | null;
  declare status: number | null;
  declare sumPrice: number;
  declare quantity: number | null;
  declare typeSauceId: number | null;
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
      allowNull: true,
    },
    phone: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    address: {
      type: DataTypes.STRING(200),
      allowNull: true,
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
      allowNull: true,
    },
    typeSauceId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: "HoaDon",
    timestamps: false,
  }
);

export default HoaDon;
