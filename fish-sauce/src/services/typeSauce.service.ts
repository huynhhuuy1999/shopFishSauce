import api from "../api/axios";
import type { TypeSauceRequest } from "@/models/typeSauce";

export const getListTypeSauce = () => {
  return api.get("/type-sauce");
};

export const getTypeSauceById = (id: number) => {
  return api.get(`/type-sauce/${id}`);
};

// export const createTypeSauce = (data: TypeSauceRequest) => {
//   return api.post("/type-sauce", data);
// };
export const createTypeSauce = (data: FormData) => {
  return api.post("/type-sauce", data);
};

export const updateTypeSauce = (id: number, data: TypeSauceRequest) => {
  return api.put(`/type-sauce/${id}`, data);
};
