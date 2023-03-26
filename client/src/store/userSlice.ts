import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { Users, UserFormData } from "../types/users";
import { fetchUsers, createUser } from "../api/userAPI";

const initialState: Users = {
  users: [],
  status: "idle",
};

export const getUsers = createAsyncThunk("post/fetchUsers", async () => {
  const response = await fetchUsers();
  return response.data;
});

export const createUserAsync = createAsyncThunk(
  "post/createUser",
  async (formData: UserFormData) => {
    const response = await createUser(formData);
    return response.data;
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.status = "idle";
        state.users = action.payload;
      })
      .addCase(getUsers.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(createUserAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createUserAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.users = action.payload;
      })
      .addCase(createUserAsync.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const selectUsers = (state: RootState) => state.user.users;
export const selectUsersStatus = (state: RootState) => state.user.status;

export default userSlice.reducer;
