import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../config/database";

export interface TypeBottleAttributes {
  id: number;
  nameTypeBottle: string;
}

export type TypeBottleCreationAttributes = Optional<
  TypeBottleAttributes,
  "id"
>;

class TypeBottle
  extends Model<TypeBottleAttributes, TypeBottleCreationAttributes>
  implements TypeBottleAttributes
{
  declare id: number;
  declare nameTypeBottle: string;
}

TypeBottle.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nameTypeBottle: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "TypeBottle",
    timestamps: false,
  }
);

export default TypeBottle;
