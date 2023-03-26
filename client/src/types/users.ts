export interface IUser {
  firstName: string;
  lastName: string;
  phone: string;
  gender: boolean | null;
  age: number;
}

export interface IUserResponse extends IUser {
  _id: string;
  updatedAt: string;
  createdAt: string;
}

export interface Users {
  users: IUserResponse[];
  status: "idle" | "loading" | "failed";
}

export interface UserFormData {
  firstName: FormDataEntryValue | null;
  lastName: FormDataEntryValue | null;
  phone: FormDataEntryValue | null;
  gender: FormDataEntryValue | null;
  age: FormDataEntryValue | null;
}
