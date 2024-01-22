import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import profileService from "../Service";

export const getDeliveryInfoId = createAsyncThunk(
  "details/info",
  async (object, thunkAPI) => {
    let { id } = object;

    try {
      const token = thunkAPI.getState().auth.token;

      let res = await profileService.api(id, token);

      return res.data;
    } catch (error) {
      const message =
        (error.response && error.response.data) ||
        error.message ||
        error.toString();
      console.log("message", message);
      alert(message.message ? message.message : message);

      return thunkAPI.rejectWithValue(message);
    }
  }
);


 

const DetailsSlice = createSlice({
  name: "details",
  initialState: {
    result: null,
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

      .addCase(getDeliveryInfoId.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getDeliveryInfoId.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.result = action.payload;
      })
      .addCase(getDeliveryInfoId.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.result = null;
      })


 
  },
});

export const { handleEditInfo } = DetailsSlice.actions;
export default DetailsSlice.reducer;


 