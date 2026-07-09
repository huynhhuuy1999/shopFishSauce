import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../config/database";

export interface TypeSauceAttributes {
  id: number;
  nameType: string;
  price: number;
  quantityPerBox: number | null;
  capacity: number;
  typeBottleID: number;
  imageTypeSauce: string | null;
  status: number;
  description: string;
}

export type TypeSauceCreationAttributes = Optional<
  TypeSauceAttributes,
  "id" | "quantityPerBox" | "imageTypeSauce" | "status" | "description"
>;

class TypeSauce
  extends Model<TypeSauceAttributes, TypeSauceCreationAttributes>
  implements TypeSauceAttributes
{
  declare id: number;
  declare nameType: string;
  declare price: number;
  declare quantityPerBox: number | null;
  declare capacity: number;
  declare typeBottleID: number;
  declare imageTypeSauce: string | null;
  declare status: number;
  declare description: string;
}

TypeSauce.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nameType: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    quantityPerBox: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    capacity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    typeBottleID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    imageTypeSauce: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    status: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
    },
    description: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "TypeSauce",
    timestamps: false,
  },
);

export default TypeSauce;
