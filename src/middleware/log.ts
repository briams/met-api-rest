import { NextFunction, Request, Response } from "express";

const logMiddleware = (req: Request, res: Response, next: NextFunction) => {
  console.log("🚀 ~ Hola soy el log");
  res.send("DESDE_MIDDLEWARE");
  //   next();
};

export { logMiddleware };
