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
  typeBottle?: TypeBottle;
}

export interface TypeBottle {
  id: number;
  nameTypeBottle: string;
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
