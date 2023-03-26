import { Response, Request } from "express";
import { IUser } from "../../types/user";
import User from "../../models/user";

const getUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const users: IUser[] = await User.find();
    res.status(200).json(users);
  } catch (error) {
    throw error;
  }
};

const addUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const body = req.body as Pick<
      IUser,
      "firstName" | "lastName" | "phone" | "gender" | "age"
    >;

    const user: IUser = new User({
      firstName: body.firstName,
      lastName: body.lastName,
      phone: body.phone,
      gender: body.gender,
      age: body.age,
    });

    await user.save();
    const allUsers: IUser[] = await User.find();

    res.status(201).json(allUsers);
  } catch (error) {
    throw error;
  }
};

export { getUsers, addUser };
