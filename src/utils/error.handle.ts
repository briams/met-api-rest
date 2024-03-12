import { Response } from "express";

const handleHttp = (res: Response, error: string, errorRaw?: any) => {
  console.log("🚀 ~ handleHttp ~ errorRaw:", errorRaw);
  res.status(500);
  res.send({ error });
};

export { handleHttp };
