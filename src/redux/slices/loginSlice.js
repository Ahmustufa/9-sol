import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// import login from '../actions/loginApi'
// import Cookies from "cookies";
import Cookies from "js-cookie";

export const loginApi = createAsyncThunk(
  "login/post",
  async ({ data, router }, { rejectWithValue }) => {
    try {
      const response = await axios.post("/api/admin/login", data);
      const token = response?.data?.token;
      if (response.status === 200) {
        Cookies.set("jwt", token, { expires: 7 });
        setTimeout(() => {
          router.push("/dashboard");
        }, 3000);
        return response.data;
      }
    } catch (error) {
      const errorMessage = rejectWithValue(error.message);
      return errorMessage;
    }
  }
);

const initialState = {
  data: "",
  error: "",
  isLoading: false,
  isLoggedIn:
    Cookies.get("jwt") !== null &&
    Cookies.get("jwt") !== undefined &&
    Cookies.get("jwt") !== "",
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginApi.pending, (state) => {
        return {
          ...state,
          isLoading: true,
        };
      })
      .addCase(loginApi.fulfilled, (state, action) => {
        return {
          ...state,
          isLoading: false,
          data: action.payload,
          isLoggedIn: true,
        };
      })
      .addCase(loginApi.rejected, (state, action) => {
        return {
          ...state,
          isLoading: false,
          error: action.payload,
          isLoggedIn: false,
          data: "",
        };
      });
  },
});

export default loginSlice.reducer;
