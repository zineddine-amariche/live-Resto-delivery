import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import registerService from "../Service";

export const register = createAsyncThunk(
  "register/user",
  async (user, thunkAPI) => {
    try {
      const token = thunkAPI.getState().token.token;
      return await registerService.api(user, token);
    } catch (error) {
      // console.log('error', error.response)
      // console.log('response.data', error.response.data)
      // && error.response.data.status
      const message =
        (error.response && error.response.data) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);


const registerSlice = createSlice({
  name: "register",
  initialState: {
    user: null,
    userName:null,
    isError: false,
    status: false,
    isLoading: false,
    message: "",
  },
  reducers: {
    resetRegister: (state) => {
      state.isLoading = false;
      state.status = false;
      state.isError = false;
      state.message = "";
    },
    ClearRegister: (state) => {
      state.isLoading = false;
      state.status = false;
      state.isError = false;
      state.message = "";
      state.user = null;
      state.userName = null;
    },
  },

  // extraReducers: (builder) => {
  //   builder
  //     .addCase(register.pending, (state) => {
  //       state.isLoading = true;
  //     })
  //     .addCase(register.fulfilled, (state, action) => {
  //       state.isLoading = false;
  //       state.status = true;
  //       state.user = action.payload;
  //     })
  //     .addCase(register.rejected, (state, action) => {
  //       state.isLoading = false;
  //       state.isError = true;
  //       state.message = action.payload.StatusDescription;
  //       state.user = null;
  //       state.status = action.payload.StatusCode;

  //     })


  // },
});

export const { resetRegister ,ClearRegister} = registerSlice.actions;
export default registerSlice.reducer;
