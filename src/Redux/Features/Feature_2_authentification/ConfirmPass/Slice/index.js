import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import confirmCodeService from "../Service";



export const confirmationPassword = createAsyncThunk("confirm/newpassword", async (user, thunkAPI) => {
  // console.log('user', user)
  try {
    const token = thunkAPI.getState().token.token;
    return await confirmCodeService.api(user, token);
  } catch (error) {
    const message =
      (error.response && error.response.data) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

const confirmPasswordSlice = createSlice({
  name: "confirm",
  initialState: {
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
  },
  reducers: {
    resetConfirm: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },

  },

  // extraReducers: (builder) => {
  //   builder

  //     .addCase(confirmationPassword.pending, (state) => {
  //       state.isLoading = true;
  //     })
  //     .addCase(confirmationPassword.fulfilled, (state, action) => {
  //       state.isLoading = false;
  //       state.isSuccess = true;
       
  //     })
  //     .addCase(confirmationPassword.rejected, (state, action) => {
  //       state.isLoading = false;
  //       state.isError = true;
  //       state.message = action.payload;
  //       state.user = null;
  //     })

  // },
});

export const { resetConfirm } = confirmPasswordSlice.actions;
export default confirmPasswordSlice.reducer;
