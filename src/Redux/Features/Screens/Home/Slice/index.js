import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import profileService from "../Service";

export const getDeliveryInfo = createAsyncThunk(
  "profile/info",
  async (object, thunkAPI) => {
    let { onSuccess, onErrorAction, onError } = object;
    try {
       const token = thunkAPI.getState().auth.token;


      let res = await profileService.api(token);
   

      return res.data;
    } catch (error) {
      const message =
        (error.response && error.response.data) ||
        error.message ||
        error.toString();
      console.log("message", message);
      alert(message.message?message.message:message);

      return thunkAPI.rejectWithValue(message);
    }
  }
); 
 

const routesSlice = createSlice({
  name: "profile",
  initialState: {
    routes: null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
  },
  reducers: {
    // handleEditInfo: (state,action) => {
    //   state.edite = action.payload;
    // },
 
  },

  extraReducers: (builder) => {
    builder

      .addCase(getDeliveryInfo.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getDeliveryInfo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.routes = action.payload;
      })
      .addCase(getDeliveryInfo.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.routes = null;
      })


 
  },
});

export const { handleEditInfo } = routesSlice.actions;
export default routesSlice.reducer;
