import express, { Application, Request, Response } from "express";
import cors from "cors";

import NotFound from "./middleware/NotFound";
import GlobalErrorHandler from "./middleware/GlobalErrorHandler";
import productRouter from "./modules/products/product.routes";
import cartRouter from "./modules/cart/cart.routes";

const app: Application = express();

app.use(express.json());
app.use(cors());

//routes
app.use("/api/v1", productRouter);

app.use("/api/v1", cartRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Fitness Equipment and Accessories Project");
});

//not found middleware
app.use(GlobalErrorHandler);
app.use(NotFound);

export default app;
