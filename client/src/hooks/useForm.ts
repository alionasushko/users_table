import { useState } from "react";
import { IUser } from "../types/users";
import { Errors } from "../types/validation";

const useForm = (
  initialValues: IUser,
  validateOnChange: boolean = false,
  validate: (fieldValues?: any) => boolean | undefined
) => {
  const [values, setValues] = useState<IUser>(initialValues);
  const [errors, setErrors] = useState<Errors>({
    firstName: "",
    lastName: "",
    phone: "",
    gender: "",
    age: "",
  });

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const name: string = event.target.name;
    const value: any = event.target.value;
    setValues({
      ...values,
      [name]: value,
    });
    if (validateOnChange) validate({ [name]: value });
  };

  const resetForm = (): void => {
    setValues(initialValues);
    setErrors({ firstName: "", lastName: "", phone: "", gender: "", age: "" });
  };

  return {
    values,
    errors,
    setErrors,
    handleInputChange,
    resetForm,
  };
};

export default useForm;
