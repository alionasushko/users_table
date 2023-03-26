import useForm from "../../hooks/useForm";
import { useAppDispatch } from "../../store/hooks";
import { createUserAsync } from "../../store/userSlice";
import { IUser } from "../../types/users";
import {
  Avatar,
  Button,
  TextField,
  Box,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from "@mui/material";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";

const initialValues = {
  firstName: "",
  lastName: "",
  phone: "",
  gender: null,
  age: 0,
};

const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

const UsersForm: React.FC = () => {
  const dispatch = useAppDispatch();

  const validate = (fieldValues: IUser = values): boolean | undefined => {
    const temp = { ...errors };
    if ("firstName" in fieldValues)
      temp.firstName = fieldValues.firstName
        ? ""
        : "Please input your first name";
    if ("lastName" in fieldValues)
      temp.lastName = fieldValues.lastName ? "" : "Please input your last name";
    if ("phone" in fieldValues) {
      if (!fieldValues.phone) temp.phone = "Please input your phone";
      else if (!fieldValues.phone.match(phoneRegex))
        temp.phone = "Please input valid phone";
      else temp.phone = "";
    }
    if ("gender" in fieldValues)
      temp.gender = fieldValues.gender ? "" : "Please indicate your gender";
    if ("age" in fieldValues) {
      if (!fieldValues.age) temp.age = "Please input your age";
      else if (isNaN(Number(fieldValues.age)))
        temp.age = "Please input a number";
      else temp.age = "";
    }

    setErrors({ ...temp });

    if (fieldValues === values)
      return Object.values(temp).every((x) => x === "");
  };

  const { values, errors, setErrors, handleInputChange, resetForm } = useForm(
    initialValues,
    false,
    validate
  );

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if (validate()) {
      dispatch(
        createUserAsync({
          firstName: data.get("firstName"),
          lastName: data.get("lastName"),
          phone: data.get("phone"),
          gender: data.get("gender"),
          age: data.get("age"),
        })
      );
      resetForm();
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: 400,
        mt: 8,
        mx: "auto",
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
        <PersonOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Add user
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        autoComplete="off"
        noValidate
        sx={{ mt: 1 }}
      >
        <TextField
          id="firstName"
          name="firstName"
          label="First Name"
          margin="normal"
          required
          fullWidth
          autoFocus
          error={!!errors.firstName}
          helperText={errors.firstName}
          value={values.firstName}
          onChange={handleInputChange}
        />
        <TextField
          id="lastName"
          name="lastName"
          label="Last Name"
          margin="normal"
          required
          fullWidth
          error={!!errors.lastName}
          helperText={errors.lastName}
          value={values.lastName}
          onChange={handleInputChange}
        />
        <TextField
          id="phone"
          label="Phone"
          name="phone"
          type="tel"
          margin="normal"
          required
          fullWidth
          error={!!errors.phone}
          helperText={errors.phone}
          value={values.phone}
          onChange={handleInputChange}
        />
        <FormControl margin="normal" required error={!!errors.gender}>
          <FormLabel>Gender</FormLabel>
          <RadioGroup
            row
            id="gender"
            name="gender"
            value={values.gender}
            onChange={handleInputChange}
          >
            <FormControlLabel value={true} control={<Radio />} label="Female" />
            <FormControlLabel value={false} control={<Radio />} label="Male" />
          </RadioGroup>
        </FormControl>
        <TextField
          id="age"
          name="age"
          label="Age"
          type="number"
          margin="normal"
          required
          fullWidth
          error={!!errors.age}
          helperText={errors.age}
          value={values.age}
          onChange={handleInputChange}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Add
        </Button>
      </Box>
    </Box>
  );
};

export default UsersForm;
