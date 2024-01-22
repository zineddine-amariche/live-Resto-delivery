import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import loginService from "../Service";
// import Toast from 'react-native-toast-message'
import { ToastAndroid } from "react-native";
// import { Toast } from 'react-native-simple-toast';
// import Snackbar from 'react-native-snackbar';


export const login = createAsyncThunk(
  "auth/login",
  async (object, thunkAPI) => {
    let { onSuccess, onErrorAction, onError, values } = object;
    try {
      // const token = thunkAPI.getState().token;

      let res = await loginService.api(values);
     
      return res.data
    } catch (error) {
      const message =
        (error.response && error.response.data) ||
        error.message ||
        error.toString();
      console.log("message", message);
      alert(message.message?message.message:message)

      // if (message.message) {
        // Toast.show(`${message.status} , ${message.statusDescription}`);
      // } else {
      //   onError("Error on login try again");
      // }

      // Toast.show('This is a toast message', Toast.LONG);
    //   if (Platform.OS != 'android') {
    //     Snackbar.show({
    //         text: message,
    //         // duration: Snackbar.LENGTH_SHORT,
    //     });
    // } else {
    //     ToastAndroid.show(message, ToastAndroid.SHORT);
    // }
      // Toast.show({
      //   type: 'info',
      //   text1: 'This is an info message'
      // });
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const loginSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
    token:null
  },
  reducers: {
    resetLogin: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
    Logout: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
      state.user = null;
    },
  },

  extraReducers: (builder) => {
    builder

      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
        state.token = action.payload.courier.token
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
      });
  },
});

export const { resetLogin, Logout } = loginSlice.actions;
export default loginSlice.reducer;
