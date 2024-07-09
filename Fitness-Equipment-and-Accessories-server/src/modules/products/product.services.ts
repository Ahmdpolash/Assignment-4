import { TProducts } from "./product.interface";
import { Product } from "./product.model";

//? Product added on the collection
const productSaveIntoDb = async (product: TProducts) => {
  const result = await Product.create(product);
  return result;
};

//? get all products from the collection
const getProductsFromDb = async (query: any) => {
  const result = await Product.find(query);
  return result;
};

//?get single product from the collection
const getSingleProductFromDb = async (id: any) => {
  const result = await Product.findById(id);
  return result;
};

export const productServices = {
  productSaveIntoDb,
  getProductsFromDb,
  getSingleProductFromDb,
};
