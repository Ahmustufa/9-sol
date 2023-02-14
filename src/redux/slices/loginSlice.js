import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// import login from '../actions/loginApi'
// import Cookies from "cookies";

export const loginApi = createAsyncThunk(
  "login/post",
  async ({ data, router }) => {
    try {
      // console.log('data', router)
      const response = await axios.post("/api/admin/login", data);
      const token = response?.data?.token;
      // console.log("response", token);
      if (response.status === 200) {
        document.cookie = `jwt=${token}; path=/;`;
        // console.log("success", cookieCheck);
        setTimeout(() => {
          router.push("/dashboard");
        }, 3000);
      }
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }
);

const initialState = {
  data: "",
  error: "",
  isLoading: false,
  isLoggedIn: false,
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
        };
      });
  },
});

export default loginSlice.reducer;
