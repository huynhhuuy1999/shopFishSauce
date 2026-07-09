export interface TypeSauceResponse {
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

export interface TypeSauceRequest {
  nameType: string;
  price: number;
  quantityPerBox: number | null;
  capacity: number;
  typeBottleID: number;
  imageTypeSauce: string | null;
  status: number;
  description: string;
}
