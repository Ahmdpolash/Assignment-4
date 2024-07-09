import { Router } from "express";
import { productControllers } from "./product.controller";

const productRouter = Router();

productRouter.post("/create-product", productControllers.createProduct);
productRouter.get("/products", productControllers.getAllProudcts);
productRouter.get("/products/:id", productControllers.getSingleProduct);



export default productRouter;
