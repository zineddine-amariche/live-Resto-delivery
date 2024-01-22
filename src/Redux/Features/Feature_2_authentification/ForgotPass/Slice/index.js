import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import forgotService from "../Service";

export const sendReqcode = createAsyncThunk(
  "forgot/sendReqcode",
  async (user, thunkAPI) => {
    // console.log('user', user)
    try {
      const token = thunkAPI.getState().token.token;
      return await forgotService.api(user, token);
    } catch (error) {
      const message =
        (error.response && error.response.data) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const forgotSlice = createSlice({
  name: "forgot",
  initialState: {
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
    username: null,
  },
  reducers: {
    resetForgot: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
    setUserName: (state, action) => {
      state.username = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder

      .addCase(sendReqcode.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(sendReqcode.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = action.payload.data;
      })
      .addCase(sendReqcode.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { resetForgot,setUserName } = forgotSlice.actions;
export default forgotSlice.reducer;
