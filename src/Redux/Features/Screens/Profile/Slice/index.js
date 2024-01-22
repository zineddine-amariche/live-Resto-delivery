import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import profileService from "../Service";

export const getUserInfo = createAsyncThunk(
  "profile/info",
  async (object, thunkAPI) => {
    let { onSuccess, onErrorAction, onError, values } = object;
    try {
      // const token = thunkAPI.getState().token;

      let res = await profileService.api(values);
      console.log("thunkAPI ress", res.status);

      return res.data;
    } catch (error) {
      const message =
        (error.response && error.response.data) ||
        error.message ||
        error.toString();
      console.log("message", message);
      alert(message.message);

      return thunkAPI.rejectWithValue(message);
    }
  }
); 
export const updateProfile = createAsyncThunk(
  "profile/update",
  async (object, thunkAPI) => {
    let { onSuccess, onErrorAction, onError, objectValues } = object;
    try {
      // const token = thunkAPI.getState().token;
      const token = thunkAPI.getState().auth.token;

      let res = await profileService.api(objectValues,token);

      if (res.status == 200) {
        onSuccess(res.data.message);
      }
      console.log("updateProfile", res.status);

      return res.data;
    } catch (error) {
      const message =
        (error.response && error.response.data) ||
        error.message ||
        error.toString();
      console.log("message", message);
      alert(message.message);

      return thunkAPI.rejectWithValue(message);
    }
  }
);

const profileSlice = createSlice({
  name: "profile",
  initialState: {
    user: null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
    edite: false,
  },
  reducers: {
    handleEditInfo: (state,action) => {
      state.edite = action.payload;
    },
 
  },

  extraReducers: (builder) => {
    builder

      .addCase(getUserInfo.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUserInfo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(getUserInfo.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
      })


      .addCase(updateProfile.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(updateProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
       })
  },
});

export const { handleEditInfo } = profileSlice.actions;
export default profileSlice.reducer;
