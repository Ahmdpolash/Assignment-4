type TProduct = {
  productId: string;
  price: number;
  quantity: number;
};
export type TOrder = {
  name: string;
  email: string;
  phone: string;
  city: string;
  house:string;
  zipCode: number;
  products: TProduct[];
};
