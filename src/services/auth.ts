import { IAuth } from "../interfaces/auth.interface";
import { IUser } from "../interfaces/user.interface";
import UserModel from "../models/user";
import { encrypt, verified } from "../utils/bcrypt.handle";
import { generateToken } from "../utils/jwt.hanlde";

const registerUser = async ({ email, password, name }: IUser) => {
  const checkIs = await UserModel.findOne({ email });
  if (checkIs) return "ALREADY_USER";

  const passHash = await encrypt(password);
  const registerUser = await UserModel.create({
    email,
    password: passHash,
    name,
  });
  return registerUser;
};

const loginUser = async ({ email, password }: IAuth) => {
  const checkIs = await UserModel.findOne({ email });
  if (!checkIs) return "NOT_FOUND_USER";

  const passHash = checkIs.password;
  const passMatch = await verified(password, passHash);

  if (!passMatch) return "WRONG_PASSWORD";

  const token = generateToken(checkIs.email);

  const data = { token, user: checkIs };

  return data;
};

export { registerUser, loginUser };
