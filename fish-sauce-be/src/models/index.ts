import TypeBottle from "./TypeBottle";
import TypeSauce from "./TypeSauce";
import HoaDon from "./HoaDon";

TypeSauce.belongsTo(TypeBottle, {
  foreignKey: "typeBottleID",
  as: "typeBottle",
});

TypeBottle.hasMany(TypeSauce, {
  foreignKey: "typeBottleID",
  as: "typeSauces",
});

HoaDon.belongsTo(TypeSauce, {
  foreignKey: "typeSauceId",
  as: "typeSauce",
});

TypeSauce.hasMany(HoaDon, {
  foreignKey: "typeSauceId",
  as: "hoaDons",
});

export { TypeBottle, TypeSauce, HoaDon };
