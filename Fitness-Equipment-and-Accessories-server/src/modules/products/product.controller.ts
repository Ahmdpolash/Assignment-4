import { RequestHandler } from "express";
import catchAsync from "../../utils/catchAsync";
import { productServices } from "./product.services";

// create a new product and save it into the database

const createProduct: RequestHandler = catchAsync(async (req, res) => {
  const product = req.body;

  const result = await productServices.productSaveIntoDb(product);

  res.status(200).json({
    success: true,
    message: " Product Added Successfully",
    data: result,
  });
});

// get all products and get filtered products from the database

const getAllProudcts: RequestHandler = catchAsync(async (req, res) => {
  // const { category, name } = req.query;
  // const { category, name } = req.query;

  // const query: any = {};
  // const query: any = {};

  // if (category) {
  //   query.category = category;
  // }
  // if (name) {
  //   query.name = { $regex: name, $options: "i" };
  // }
  // if (category) {
  //   query.category = category;
  // }
  // if (name) {
  //   query.name = { $regex: name, $options: "i" };
  // }

  // console.log(query);
  // console.log(query);

  const result = await productServices.getProductsFromDb(req.query);

  res.status(200).json({
    success: true,
    message: " Product retrived Successfully",
    data: result.res,
    meta: result.meta,
  });
});

//get single product from the database
const getSingleProduct: RequestHandler = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await productServices.getSingleProductFromDb(id);

  res.status(200).json({
    success: true,
    message: " single students are retrive successfully",
    data: result,
  });
});

export const productControllers = {
  createProduct,
  getAllProudcts,
  getSingleProduct,
};
