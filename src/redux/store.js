import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./slices/loginSlice";
import packageSlice from "./slices/packageSlice";

export const store = configureStore({
    reducer: {
        login: loginSlice,
        package: packageSlice
    },
})