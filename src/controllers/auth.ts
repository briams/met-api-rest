import { Request, Response } from "express";
import { registerUser, loginUser } from "../services/auth";

const registerCtrl = async ({ body }: Request, res: Response) => {
  const response = await registerUser(body);
  res.send(response);
};

const loginCtrl = async ({ body }: Request, res: Response) => {
  const { email, password } = body;
  const response = await loginUser({ email, password });
  res.send(response);
};

export { registerCtrl, loginCtrl };
