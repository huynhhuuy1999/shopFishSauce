export interface IOrderResponse {
  id: number;
  customerName: string | null;
  phone: string | null;
  address: string | null;
  status: number | null;
  sumPrice: number;
  quantity: number | null;
  typeSauceId: number | null;
}

export interface IOrderRequest {
  customerName: string | null;
  phone: string | null;
  address: string | null;
  status: number | null;
  sumPrice: number;
  quantity: number | null;
  typeSauceId?: number | null;
}
