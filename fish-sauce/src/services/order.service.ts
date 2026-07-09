import api from "../api/axios";
import type { IOrderRequest } from "@/models/order";

export const getListHoaDon = () => {
  return api.get("/order");
};

export const createHoaDon = (data: IOrderRequest) => {
  return api.post("/hoa-don", data);
};

export const updateHoaDon = (id: number, data: IOrderRequest) => {
  return api.put(`/hoa-don/${id}`, data);
};
