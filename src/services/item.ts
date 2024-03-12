import ItemModel from "../models/item";
import { ICar } from "../interfaces/car.interface";

const insertCar = async (item: ICar) => {
  const response = await ItemModel.create(item);
  return response;
};

const getCars = async () => {
  const response = await ItemModel.find({});
  return response;
  //   const responseCount = await ItemModel.where({}).countDocuments();
  //   return { response, responseCount };
};

const getCar = async (id: string) => {
  const response = await ItemModel.findOne({ _id: id });
  return response;
};

const updateCar = async (id: string, data: ICar) => {
  const response = await ItemModel.findOneAndUpdate({ _id: id }, data, {
    new: true,
  });
  return response;
};

const deleteCar = async (id: string) => {
  const response = await ItemModel.deleteOne({ _id: id });
  return response;
};

export { insertCar, getCars, getCar, updateCar, deleteCar };
